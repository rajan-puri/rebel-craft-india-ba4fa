import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import KeycapOrb, { type Keycap } from "./components/ui/keycap-orb"
import Storefront from "./Storefront"

const orbKeys: Keycap[] = [
  { label: "STL", finish: "ink", hotkey: "s" },
  { label: "PLA", finish: "cobalt", hotkey: "p" },
  { label: "FDM", finish: "ash", hotkey: "f" },
  { label: "PETG", finish: "cobalt" },
  { label: "3MF", finish: "ink" },
  { label: "CAD", finish: "cobalt", hotkey: "c" },
  { label: "0.1", finish: "ash" },
  { label: "TPU", finish: "lime", hotkey: "t" },
  { label: "OBJ", finish: "lime", hotkey: "o" },
  { label: "STEP", finish: "cobalt" },
  { label: "SLA", finish: "ink" },
  { label: "GCODE", finish: "ash", hotkey: "g" },
  { icon: "layers", finish: "cobalt" },
  { icon: "cube", finish: "glass" },
  { icon: "gear", finish: "ink" },
  { icon: "bolt", finish: "ash" },
]

function useStorefrontInteractions() {
  useEffect(() => {
    const cleanups: Array<() => void> = []
    const listen = <K extends keyof HTMLElementEventMap>(
      element: HTMLElement,
      event: K,
      handler: (event: HTMLElementEventMap[K]) => void,
    ) => {
      element.addEventListener(event, handler as EventListener)
      cleanups.push(() => element.removeEventListener(event, handler as EventListener))
    }

    const buildPlateLink = document.querySelector<HTMLElement>('[data-path="cart"]')
    buildPlateLink?.setAttribute("aria-label", "Your build plate")

    const productSlider = document.getElementById("product-slider")
    const productPrev = document.getElementById("product-prev")
    const productNext = document.getElementById("product-next")
    const sliderTimers = new Set<number>()

    if (productSlider && productPrev && productNext) {
      const originalCards = Array.from(productSlider.children) as HTMLElement[]
      const clones: HTMLElement[] = []
      const cloneCard = (card: HTMLElement) => {
        const clone = card.cloneNode(true) as HTMLElement
        clone.setAttribute("aria-hidden", "true")
        clone.querySelectorAll<HTMLElement>("a, button, input, select, textarea, [tabindex]").forEach((element) => {
          element.tabIndex = -1
        })
        clones.push(clone)
        return clone
      }
      const leading = document.createDocumentFragment()
      originalCards.forEach((card) => leading.appendChild(cloneCard(card)))
      productSlider.insertBefore(leading, productSlider.firstChild)
      originalCards.forEach((card) => productSlider.appendChild(cloneCard(card)))

      let index = originalCards.length
      let locked = false
      const position = (behavior: ScrollBehavior = "auto") => {
        const target = productSlider.children[index] as HTMLElement | undefined
        if (target) productSlider.scrollTo({ left: target.offsetLeft - productSlider.offsetLeft, behavior })
      }
      const move = (direction: number) => {
        if (locked) return
        locked = true
        index += direction
        position("smooth")
        const timer = window.setTimeout(() => {
          if (index >= originalCards.length * 2) index = originalCards.length
          else if (index < originalCards.length) index = originalCards.length * 2 - 1
          position("auto")
          locked = false
          sliderTimers.delete(timer)
        }, 450)
        sliderTimers.add(timer)
      }
      listen(productPrev, "click", () => move(-1))
      listen(productNext, "click", () => move(1))
      const onResize = () => position("auto")
      window.addEventListener("resize", onResize)
      cleanups.push(() => window.removeEventListener("resize", onResize))
      const frame = requestAnimationFrame(() => position("auto"))
      cleanups.push(() => cancelAnimationFrame(frame))
      cleanups.push(() => {
        sliderTimers.forEach(clearTimeout)
        clones.forEach((clone) => clone.remove())
      })
    }

    let sizeMultiplier = 1
    let materialCost = 0
    let finishCost = 0
    const priceDisplay = document.getElementById("price-display")
    const updatePrice = () => {
      if (priceDisplay) priceDisplay.textContent = `Rs ${Math.round(480 * sizeMultiplier + materialCost + finishCost).toLocaleString("en-IN")}`
    }
    const setupChipGroup = (selector: string, onSelect: (button: HTMLElement) => void) => {
      const buttons = Array.from(document.querySelectorAll<HTMLElement>(selector))
      buttons.forEach((button) => listen(button, "click", () => {
        buttons.forEach((item) => {
          item.classList.remove("bg-primary", "text-on-primary")
          item.classList.add("bg-surface-container-lowest", "text-on-surface")
        })
        button.classList.remove("bg-surface-container-lowest", "text-on-surface")
        button.classList.add("bg-primary", "text-on-primary")
        onSelect(button)
        updatePrice()
      }))
    }
    setupChipGroup(".size-chip", (button) => { sizeMultiplier = Number(button.dataset.multiplier ?? 1) })
    setupChipGroup(".mat-chip", (button) => { materialCost = Number(button.dataset.cost ?? 0) })
    setupChipGroup(".finish-chip", (button) => { finishCost = Number(button.dataset.cost ?? 0) })

    const fileSelector = document.getElementById("file-selector") as HTMLInputElement | null
    const dropArea = document.getElementById("drop-area")
    if (fileSelector && dropArea) listen(fileSelector, "change", () => {
      const heading = dropArea.querySelector("h3")
      const file = fileSelector.files?.[0]
      if (heading && file) {
        heading.textContent = `Ready: ${file.name}`
        heading.classList.add("text-primary")
      }
    })

    const faqButtons = Array.from(document.querySelectorAll<HTMLElement>(".faq-toggle"))
    faqButtons.forEach((button) => listen(button, "click", () => {
      const expand = button.getAttribute("aria-expanded") !== "true"
      faqButtons.forEach((item) => {
        item.setAttribute("aria-expanded", "false")
        item.nextElementSibling?.classList.add("hidden")
        const icon = item.querySelector<HTMLElement>(".toggle-icon")
        if (icon) icon.textContent = "+"
      })
      if (expand) {
        button.setAttribute("aria-expanded", "true")
        button.nextElementSibling?.classList.remove("hidden")
        const icon = button.querySelector<HTMLElement>(".toggle-icon")
        if (icon) icon.textContent = "−"
      }
    }))

    return () => cleanups.reverse().forEach((cleanup) => cleanup())
  }, [])
}

export default function App() {
  const [orbHost, setOrbHost] = useState<HTMLElement | null>(null)
  useStorefrontInteractions()

  useEffect(() => {
    setOrbHost(document.getElementById("keycap-orb-react-root"))
  }, [])

  return (
    <>
      <Storefront />
      {orbHost && createPortal(
        <KeycapOrb
          keys={orbKeys}
          rings={10}
          scale={0.96}
          speed={0.55}
          glow="#2170e4"
          background="#f8f9ff"
          transparent
          reflection={false}
          palette={{
            ink: { cap: "#121c2a", legend: "#ffffff" },
            ash: { cap: "#ffffff", legend: "#0058be" },
            glass: { cap: "#64a8fe", legend: "#121c2a" },
            cobalt: { cap: "#0058be", legend: "#ffffff" },
            lime: { cap: "#64a8fe", legend: "#121c2a" },
          }}
          height="clamp(520px, 52vw, 750px)"
          className="layered-keycap-orb"
          aria-label="Interactive sphere of 3D-printing keycaps. Drag to rotate or focus and type."
        />,
        orbHost,
      )}
    </>
  )
}


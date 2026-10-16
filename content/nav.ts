export const navContent = {
  es: { sobre: "Sobre mí", exp: "Experiencia", casos: "Casos de éxito", prod: "Productos", cta: "Escríbeme", other: "EN" },
  en: { sobre: "About", exp: "Experience", casos: "Case studies", prod: "Products", cta: "Get in touch", other: "ES" },
}

export const navPages = [
  ["sobre", "/about"],
  ["exp", "/experience"],
  ["casos", "/cases"],
  ["prod", "/products"],
] as const

export type NavActive = "inicio" | "sobre" | "exp" | "casos" | "prod"

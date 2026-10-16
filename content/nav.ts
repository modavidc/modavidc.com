export const navContent = {
  es: { sobre: "Sobre mí", exp: "Experiencia", casos: "Casos de éxito", prod: "Productos", cta: "CI/CD test ✓", other: "EN" },
  en: { sobre: "About", exp: "Experience", casos: "Case studies", prod: "Products", cta: "Get in touch", other: "ES" },
}

export const navPages = [
  ["sobre", "/sobre-mi"],
  ["exp", "/experiencia"],
  ["casos", "/casos"],
  ["prod", "/productos"],
] as const

export type NavActive = "inicio" | "sobre" | "exp" | "casos" | "prod"

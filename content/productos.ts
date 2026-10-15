export const productosContent = {
  es: {
    h1a: "Apps que", h1b: "construyo por mi cuenta.", lead: "Tres productos propios, de la idea al código. Cada uno resuelve algo que yo mismo necesitaba.",
    hint: "Baja para cambiar de app, o toca un ícono del teléfono.",
    gTitle: "Quién escribe más · 30 días", gInsight: "3 personas no escriben hace 2 meses, pero siguen en el grupo.",
    eDate: "Examen de la noche", eQ: "¿Qué juicio te molestó hoy, y era tuyo?", eA: "Me enojé porque no respondieron mi mensaje. Asumí desinterés; no lo sé.", eB1: "Examinar", eB2: "Soltar",
    apps: [
      { name: "Solito", tag: "Gastos que se registran solos.", mark: "S/", bg: "#D33F2B", fg: "#FAF6F1", fs: "20px", status: "Prueba cerrada · Android", dot: "#E0A100",
        desc: "Pagas con Yape, Plin o tu banco, compartes el comprobante y el gasto queda registrado solo, con monto, comercio y categoría.",
        feats: ["Lee comprobantes en el teléfono", "Sin cuenta ni claves", "Presupuesto por día"],
        stores: [{ l: "Ver sitio", href: "#", primary: true }] },
      { name: "Grupero", tag: "Deja de adivinar.", mark: "G", bg: "#25A35A", fg: "#fff", fs: "24px", status: "Disponible · Android", dot: "#25A35A",
        desc: "La radiografía de tus grupos de WhatsApp: quién escribe, quién va a las actividades, quién aporta y quién solo está por estar. Exportas el chat y la IA lo analiza en tu teléfono en 30 segundos.",
        feats: ["Análisis con IA en el dispositivo", "Resultados en 30 segundos", "Gratis"],
        stores: [{ l: "Google Play", href: "#", primary: true }, { l: "App Store · Avísame", href: "#" }] },
      { name: "El Estoico", tag: "Coherencia, no productividad.", mark: "E", bg: "#2B2620", fg: "#EFEAE1", fs: "24px", status: "Disponible · iOS y Android", dot: "#25A35A",
        desc: "Una app para examinar tus juicios, no para reprimirlos. Para reeducar tu mente, no para anestesiarla. El estoicismo como práctica diaria, no como frase motivacional.",
        feats: ["Examen diario de juicios", "Ejercicios estoicos", "Sin métricas de productividad"],
        stores: [{ l: "App Store", href: "#", primary: true }, { l: "Google Play", href: "#" }] },
    ],
    sencRows: [{ i: "Y", c: "#742284", n: "Tambo", s: "Yape · hace 2 min", a: "S/ 8.50" }, { i: "P", c: "#00A6B4", n: "Menú Doña Rosa", s: "Plin · 1:15 pm", a: "S/ 14.00" }, { i: "B", c: "#0A4FA6", n: "Uber", s: "BCP · 9:02 am", a: "S/ 11.20" }],
  },
  en: {
    h1a: "Apps I", h1b: "build on my own.", lead: "Three products of my own, from idea to code. Each one solves something I needed myself.",
    hint: "Scroll to switch apps, or tap an icon on the phone.",
    gTitle: "Who writes most · 30 days", gInsight: "3 people haven't written in 2 months, but they're still in the group.",
    eDate: "Evening review", eQ: "Which judgment bothered you today, and was it yours?", eA: "I got angry because they didn't reply. I assumed they didn't care; I don't know that.", eB1: "Examine", eB2: "Let go",
    apps: [
      { name: "Solito", tag: "Expenses that log themselves.", mark: "S/", bg: "#D33F2B", fg: "#FAF6F1", fs: "20px", status: "Closed beta · Android", dot: "#E0A100",
        desc: "Pay with Yape, Plin or your bank, share the receipt and the expense logs itself, with amount, merchant and category.",
        feats: ["Reads receipts on the phone", "No account, no passwords", "Daily budget"],
        stores: [{ l: "Visit site", href: "#", primary: true }] },
      { name: "Grupero", tag: "Stop guessing.", mark: "G", bg: "#25A35A", fg: "#fff", fs: "24px", status: "Available · Android", dot: "#25A35A",
        desc: "An X-ray of your WhatsApp groups: who writes, who shows up, who contributes and who is just there. Export the chat and AI analyzes it on your phone in 30 seconds.",
        feats: ["On-device AI analysis", "Results in 30 seconds", "Free"],
        stores: [{ l: "Google Play", href: "#", primary: true }, { l: "App Store · Notify me", href: "#" }] },
      { name: "El Estoico", tag: "Coherence, not productivity.", mark: "E", bg: "#2B2620", fg: "#EFEAE1", fs: "24px", status: "Available · iOS and Android", dot: "#25A35A",
        desc: "An app to examine your judgments, not suppress them. To retrain your mind, not numb it. Stoicism as a daily practice, not a motivational quote.",
        feats: ["Daily judgment review", "Stoic exercises", "No productivity metrics"],
        stores: [{ l: "App Store", href: "#", primary: true }, { l: "Google Play", href: "#" }] },
    ],
    sencRows: [{ i: "Y", c: "#742284", n: "Tambo", s: "Yape · 2 min ago", a: "S/ 8.50" }, { i: "P", c: "#00A6B4", n: "Doña Rosa lunch", s: "Plin · 1:15 pm", a: "S/ 14.00" }, { i: "B", c: "#0A4FA6", n: "Uber", s: "BCP · 9:02 am", a: "S/ 11.20" }],
  },
}

export const grupRows: [string, number, string, string][] = [
  ["Ana", 92, "#25A35A", "1.2k"], ["Luis", 71, "#25A35A", "930"], ["Caro", 48, "#25A35A", "640"], ["Pedro", 12, "#E0A100", "150"], ["Jorge", 3, "#D9534F", "41"],
]

"use client"

import { useState, useRef, useEffect, KeyboardEvent } from "react"
import { Terminal as TerminalIcon, X, Minus, Maximize2 } from "lucide-react"

interface TerminalLine {
  type: "input" | "output" | "error" | "success"
  content: string
}

const COMMANDS: Record<string, () => string[]> = {
  help: () => [
    "Comandos disponibles:",
    "",
    "  about       - Sobre Moisés Cedeño",
    "  skills      - Stack tecnológico",
    "  projects    - Proyectos destacados",
    "  experience  - Experiencia laboral",
    "  contact     - Información de contacto",
    "  finops      - Logros en FinOps",
    "  clear       - Limpiar terminal",
    "  help        - Mostrar esta ayuda",
    "",
  ],
  about: () => [
    "┌─────────────────────────────────────────────────────┐",
    "│  MOISÉS CEDEÑO                                      │",
    "│  Arquitecto de Soluciones Senior                    │",
    "├─────────────────────────────────────────────────────┤",
    "│                                                     │",
    "│  FinOps & Optimización Cloud                        │",
    "│                                                     │",
    "│  Diseño arquitecturas donde la eficiencia           │",
    "│  técnica genera ahorros directos y medibles.        │",
    "│                                                     │",
    "│  Especializado en Healthcare y SaaS con             │",
    "│  impacto financiero comprobable.                    │",
    "│                                                     │",
    "│  📍 Puerto Rico / Remoto                            │",
    "│  🌐 AWS Cloud Practitioner                          │",
    "│  🗣️  EN: B2 Conversacional / C2 Lectura técnica     │",
    "│                                                     │",
    "└─────────────────────────────────────────────────────┘",
    "",
  ],
  skills: () => [
    "// Stack Tecnológico",
    "",
    "const backend = ['PHP/Laravel', 'C#/.NET', 'Node.js'];",
    "const mobile = ['Flutter', 'React Native'];",
    "const cloud = ['AWS', 'Digital Ocean', 'Docker'];",
    "const databases = ['MySQL', 'SQL Server'];",
    "const realtime = ['WebSockets', 'Socket.IO'];",
    "const healthcare = ['FHIR R4', 'CCDA', 'eRx', 'mTLS'];",
    "",
    "// Especialidades",
    "const focus = ['FinOps', 'Healthcare', 'SaaS'];",
    "",
  ],
  projects: () => [
    "📁 Proyectos Destacados",
    "═══════════════════════════════════════",
    "",
    "┌─ MediRec FinOps ─────────────────────",
    "│  Re-arquitectura AWS para Healthcare",
    "│  → -58% factura AWS",
    "│  → -$20k/año en licencias",
    "│  → -70% tiempo de entrega",
    "└──────────────────────────────────────",
    "",
    "┌─ T-Cuida IoT SaaS ──────────────────",
    "│  Plataforma de seguridad con wearables",
    "│  → +400% velocidad programación",
    "│  → Tiempo respuesta: 3min → 1min",
    "│  → Bridge TCP/IP ↔ WebSockets",
    "└──────────────────────────────────────",
    "",
    "┌─ API PREIS ─────────────────────────",
    "│  Integración gov-tech Puerto Rico",
    "│  → Automatización inmunización",
    "│  → Cumplimiento regulatorio",
    "└──────────────────────────────────────",
    "",
  ],
  experience: () => [
    "💼 Experiencia Profesional",
    "═══════════════════════════════════════",
    "",
    "▸ MediRec, Inc. (2020 - Presente)",
    "  └─ Ingeniero de Integraciones",
    "     Puerto Rico · Remoto",
    "",
    "▸ T-Cuida (2023 - Presente)",
    "  └─ Lead Developer / Tech Lead",
    "     Lima, Perú · Remoto",
    "",
    "▸ Freelance (2017 - Presente)",
    "  └─ Desarrollo Web & Mobile",
    "     Clientes internacionales",
    "",
  ],
  contact: () => [
    "📬 Contacto",
    "═══════════════════════════════════════",
    "",
    "  Email    → moisesdavidaaron@gmail.com",
    "  LinkedIn → linkedin.com/in/modavidc",
    "  GitHub   → github.com/modavidc",
    "",
    "  ¿Necesitas optimizar costos cloud?",
    "  ¿Modernizar sistemas críticos?",
    "",
    "  → Agenda una consultoría",
    "",
  ],
  finops: () => [
    "💰 Impacto FinOps",
    "═══════════════════════════════════════",
    "",
    "  ┌────────────┬────────────────────────┐",
    "  │   -58%     │  Reducción factura AWS │",
    "  ├────────────┼────────────────────────┤",
    "  │  -$20k/yr  │  Ahorro en licencias   │",
    "  ├────────────┼────────────────────────┤",
    "  │   -70%     │  Tiempo de entrega     │",
    "  ├────────────┼────────────────────────┤",
    "  │  +400%     │  Velocidad IoT         │",
    "  └────────────┴────────────────────────┘",
    "",
    "  Estrategias:",
    "  • Right-sizing de recursos",
    "  • Gobernanza de recursos cloud",
    "  • Migración LexiComp → NLM",
    "",
  ],
}

export function Terminal() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [lines, setLines] = useState<TerminalLine[]>([
    { type: "output", content: "Bienvenido a la terminal de Moisés Cedeño" },
    { type: "output", content: 'Escribe "help" para ver los comandos disponibles.' },
    { type: "output", content: "" },
  ])
  const [currentInput, setCurrentInput] = useState("")
  const [history, setHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [lines])

  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen, isMinimized])

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase()

    if (trimmedCmd === "") return

    // Add to history
    setHistory(prev => [...prev, cmd])
    setHistoryIndex(-1)

    // Add input line
    setLines(prev => [...prev, { type: "input", content: `$ ${cmd}` }])

    if (trimmedCmd === "clear") {
      setLines([])
      return
    }

    const commandFn = COMMANDS[trimmedCmd]

    if (commandFn) {
      const output = commandFn()
      output.forEach((line, index) => {
        setTimeout(() => {
          setLines(prev => [...prev, { type: "output", content: line }])
        }, index * 30) // Efecto de typing
      })
    } else {
      setLines(prev => [
        ...prev,
        { type: "error", content: `comando no encontrado: ${trimmedCmd}` },
        { type: "output", content: 'Escribe "help" para ver los comandos disponibles.' },
      ])
    }
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      executeCommand(currentInput)
      setCurrentInput("")
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      if (history.length > 0) {
        const newIndex = historyIndex < history.length - 1 ? historyIndex + 1 : historyIndex
        setHistoryIndex(newIndex)
        setCurrentInput(history[history.length - 1 - newIndex] || "")
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1
        setHistoryIndex(newIndex)
        setCurrentInput(history[history.length - 1 - newIndex] || "")
      } else {
        setHistoryIndex(-1)
        setCurrentInput("")
      }
    }
  }

  const handleTerminalClick = () => {
    inputRef.current?.focus()
  }

  return (
    <>
      {/* Botón flotante para abrir terminal */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 left-6 z-50 h-12 w-12 rounded-lg bg-zinc-900 text-green-400 shadow-lg hover:bg-zinc-800 transition-all flex items-center justify-center border border-zinc-700"
          aria-label="Abrir terminal"
        >
          <TerminalIcon className="h-5 w-5" />
        </button>
      )}

      {/* Terminal Panel */}
      {isOpen && (
        <div
          className={`fixed bottom-0 left-0 right-0 z-50 bg-zinc-900 border-t border-zinc-700 shadow-2xl transition-all duration-300 ${
            isMinimized ? "h-10" : "h-[300px] md:h-[350px]"
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 h-10 bg-zinc-800 border-b border-zinc-700">
            <div className="flex items-center gap-2">
              <TerminalIcon className="h-4 w-4 text-green-400" />
              <span className="text-sm text-zinc-300 font-mono">moisés@portfolio:~</span>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-1.5 hover:bg-zinc-700 rounded transition-colors"
                aria-label={isMinimized ? "Expandir" : "Minimizar"}
              >
                {isMinimized ? (
                  <Maximize2 className="h-3.5 w-3.5 text-zinc-400" />
                ) : (
                  <Minus className="h-3.5 w-3.5 text-zinc-400" />
                )}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 hover:bg-red-500/20 rounded transition-colors"
                aria-label="Cerrar terminal"
              >
                <X className="h-3.5 w-3.5 text-zinc-400 hover:text-red-400" />
              </button>
            </div>
          </div>

          {/* Terminal Content */}
          {!isMinimized && (
            <div
              ref={terminalRef}
              onClick={handleTerminalClick}
              className="h-[calc(100%-40px)] overflow-y-auto p-4 font-mono text-sm cursor-text"
            >
              {lines.map((line, index) => (
                <div
                  key={index}
                  className={`whitespace-pre-wrap ${
                    line.type === "input"
                      ? "text-green-400"
                      : line.type === "error"
                      ? "text-red-400"
                      : line.type === "success"
                      ? "text-green-500"
                      : "text-zinc-300"
                  }`}
                >
                  {line.content}
                </div>
              ))}

              {/* Input Line */}
              <div className="flex items-center text-green-400">
                <span className="mr-2">$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={currentInput}
                  onChange={(e) => setCurrentInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent outline-none text-green-400 caret-green-400"
                  spellCheck={false}
                  autoComplete="off"
                />
                <span className="w-2 h-5 bg-green-400 animate-pulse ml-0.5"></span>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  )
}

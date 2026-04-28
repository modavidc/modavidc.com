"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import chatData from "@/data/chat-faq.json"

interface Message {
  id: number
  text: string
  isBot: boolean
  isFallback?: boolean
  originalQuery?: string
}

const thinkingMessages = [
  "Pensando...",
  "Déjame ver...",
  "Buscando en mis datos...",
  "Analizando tu pregunta...",
  "Ya casi...",
]

function ThinkingIndicator() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const currentMessage = thinkingMessages[currentIndex]
    if (isTyping) {
      if (displayedText.length < currentMessage.length) {
        const t = setTimeout(() => setDisplayedText(currentMessage.slice(0, displayedText.length + 1)), 40)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setIsTyping(false), 600)
        return () => clearTimeout(t)
      }
    } else {
      const t = setTimeout(() => {
        if (currentIndex < thinkingMessages.length - 1) {
          setCurrentIndex(p => p + 1)
          setDisplayedText("")
          setIsTyping(true)
        }
      }, 200)
      return () => clearTimeout(t)
    }
  }, [currentIndex, displayedText, isTyping])

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <div style={{
        width: '16px', height: '16px', borderRadius: '50%',
        border: '2px solid var(--border-2)',
        borderTopColor: 'var(--green)',
        animation: 'spin 0.8s linear infinite',
        flexShrink: 0,
      }} />
      <span style={{ fontSize: '13px', color: 'var(--text-3)', fontFamily: 'var(--ff-mono)' }}>
        {displayedText}
        <span style={{ display: 'inline-block', width: '2px', height: '13px', background: 'var(--green)', marginLeft: '2px', verticalAlign: 'middle', animation: 'blink 1s step-end infinite' }} />
      </span>
    </div>
  )
}

function TypewriterText({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState("")
  const [idx, setIdx] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    if (idx < text.length) {
      const t = setTimeout(() => { setDisplayed(p => p + text[idx]); setIdx(p => p + 1) }, 50 + Math.random() * 30)
      return () => clearTimeout(t)
    } else {
      const i = setInterval(() => setShowCursor(p => !p), 530)
      return () => clearInterval(i)
    }
  }, [idx, text])

  return (
    <span>
      {displayed}
      <span style={{ display: 'inline-block', width: '2px', height: '1.1em', background: 'var(--green)', marginLeft: '2px', verticalAlign: 'middle', opacity: showCursor ? 1 : 0, transition: 'opacity 0.1s' }} />
    </span>
  )
}

function MotokoIcon({ size = 24 }: { size?: number }) {
  return (
    <Image src="/assets/profile/motoko_ai.png" alt="Motoko AI" width={size} height={size} style={{ borderRadius: '50%' }} />
  )
}

// Inline SVG icons replacing lucide-react
const IconX = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
)
const IconSend = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
  </svg>
)
const IconChevronDown = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <polyline points="6 9 12 15 18 9"/>
  </svg>
)
const IconRefresh = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.75"/>
  </svg>
)
const IconUser = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
  </svg>
)

const quickSuggestions = [
  { emoji: "💼", label: "¿Cuál es su experiencia?", query: "experiencia laboral" },
  { emoji: "⚙️", label: "¿Qué proyectos ha creado?", query: "proyectos" },
  { emoji: "✉️", label: "¿Cómo contactarlo?", query: "contacto" },
  { emoji: "🛠", label: "¿Cuáles son sus skills?", query: "habilidades" },
]

const WA_NUMBER = "51938804597"

function findResponse(input: string): { text: string; isFallback: boolean } {
  const norm = input.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  for (const faq of chatData.faqs) {
    for (const kw of faq.keywords) {
      if (norm.includes(kw.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")))
        return { text: faq.response, isFallback: false }
    }
  }
  return { text: chatData.fallback, isFallback: true }
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [visible, setVisible] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen) { setTimeout(() => setVisible(true), 20) }
    else { setVisible(false) }
  }, [isOpen])

  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }) }, [messages])
  useEffect(() => { if (isOpen && visible) inputRef.current?.focus() }, [isOpen, visible])

  const handleSend = async (text?: string) => {
    const msg = text || input.trim()
    if (!msg) return
    setMessages(p => [...p, { id: p.length, text: msg, isBot: false }])
    setInput("")
    setIsTyping(true)
    await new Promise(r => setTimeout(r, 900 + Math.random() * 700))
    const { text: responseText, isFallback } = findResponse(msg)
    setIsTyping(false)
    setMessages(p => [...p, { id: p.length, text: responseText, isBot: true, isFallback, originalQuery: isFallback ? msg : undefined }])
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSend() }
  }

  const hasMessages = messages.length > 0

  return (
    <>
      <style>{`
        @keyframes spin { to { transform: rotate(360deg) } }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes chatIn { from { opacity:0; transform:translateY(12px) scale(.97) } to { opacity:1; transform:translateY(0) scale(1) } }
        @keyframes msgIn { from { opacity:0; transform:translateY(6px) } to { opacity:1; transform:translateY(0) } }
      `}</style>

      {/* Floating button */}
      <button
        onClick={() => setIsOpen(p => !p)}
        aria-label={isOpen ? "Cerrar chat" : "Abrir chat"}
        style={{
          position: 'fixed', bottom: '24px', right: '24px', zIndex: 50,
          width: '52px', height: '52px', borderRadius: '50%',
          background: isOpen ? 'var(--text)' : 'white',
          border: 'none', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 24px rgba(0,0,0,.4)',
          transition: 'transform .2s, box-shadow .2s',
          overflow: 'hidden',
          color: isOpen ? 'var(--bg)' : 'inherit',
        }}
        onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.08)')}
        onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
      >
        {isOpen ? <IconX /> : <MotokoIcon size={52} />}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div style={{
          position: 'fixed', bottom: '88px', right: '24px', zIndex: 50,
          width: 'min(400px, calc(100vw - 48px))', height: '560px',
          background: 'var(--bg-2)', border: '1px solid var(--border)',
          display: 'flex', flexDirection: 'column', overflow: 'hidden',
          boxShadow: '0 8px 48px rgba(0,0,0,.5)',
          animation: 'chatIn .25s ease-out',
          opacity: visible ? 1 : 0,
          transition: 'opacity .2s',
        }}>

          {/* Header */}
          <div style={{
            padding: '12px 16px', display: 'flex', alignItems: 'center',
            justifyContent: 'space-between', borderBottom: '1px solid var(--border)',
            background: 'var(--bg)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
                <MotokoIcon size={32} />
              </div>
              <div>
                <div style={{ fontFamily: 'var(--ff-display)', fontSize: '14px', fontWeight: 500, color: 'var(--text)' }}>Motoko</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '2px' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--green)', display: 'inline-block', boxShadow: '0 0 6px var(--green)' }} />
                  <span style={{ fontFamily: 'var(--ff-mono)', fontSize: '9px', color: 'var(--green)', letterSpacing: '.08em' }}>Conectada a la red</span>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '2px' }}>
              <button onClick={() => setMessages([])} title="Nueva conversación" style={{
                background: 'none', border: 'none', cursor: 'pointer',
                color: 'var(--text-3)', padding: '6px', borderRadius: '4px',
                display: 'flex', alignItems: 'center', transition: 'color .15s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-3)')}>
                <IconRefresh />
              </button>
              <button onClick={() => setIsOpen(false)} style={{
                background: 'none', border: 'none', cursor: 'pointer',
                color: 'var(--text-3)', padding: '6px', borderRadius: '4px',
                display: 'flex', alignItems: 'center', transition: 'color .15s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-3)')}>
                <IconChevronDown />
              </button>
            </div>
          </div>

          {/* Body */}
          <div style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column', position: 'relative' }}>
            {!hasMessages ? (
              /* Initial state */
              <div style={{
                flex: 1, display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                padding: '24px 20px', gap: '20px',
              }}>
                <div style={{ textAlign: 'center' }}>
                  <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '18px', fontWeight: 500, color: 'var(--text)', margin: '0 0 8px' }}>
                    <TypewriterText text="La red es vasta e infinita..." />
                  </h2>
                  <p style={{ fontFamily: 'var(--ff-mono)', fontSize: '11px', color: 'var(--text-3)', margin: 0, letterSpacing: '.06em' }}>
                    Accediendo a los datos de David
                  </p>
                </div>

                {/* Input centrado */}
                <div style={{ width: '100%', maxWidth: '320px', position: 'relative' }}>
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Consulta lo que necesites..."
                    style={{
                      width: '100%', background: 'var(--bg)', border: '1px solid var(--border)',
                      padding: '10px 44px 10px 14px', color: 'var(--text)',
                      fontFamily: 'var(--ff-body)', fontSize: '13px',
                      outline: 'none', borderRadius: '8px', boxSizing: 'border-box',
                    }}
                    onFocus={e => (e.target.style.borderColor = 'var(--green)')}
                    onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                  />
                  <button onClick={() => handleSend()} disabled={!input.trim() || isTyping} style={{
                    position: 'absolute', right: '6px', top: '50%', transform: 'translateY(-50%)',
                    background: 'var(--green)', border: 'none', cursor: 'pointer',
                    width: '28px', height: '28px', borderRadius: '6px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--bg)', opacity: (!input.trim() || isTyping) ? 0.4 : 1,
                    transition: 'opacity .15s',
                  }}>
                    <IconSend />
                  </button>
                </div>

                {/* Quick suggestions */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', width: '100%', maxWidth: '320px' }}>
                  {quickSuggestions.map((s, i) => (
                    <button key={i} onClick={() => handleSend(s.query)} style={{
                      display: 'flex', alignItems: 'center', gap: '10px',
                      padding: '10px 14px', background: 'var(--bg)',
                      border: '1px solid var(--border)', borderRadius: '8px',
                      color: 'var(--text-3)', fontSize: '13px', cursor: 'pointer',
                      textAlign: 'left', transition: 'border-color .15s, color .15s',
                      fontFamily: 'var(--ff-body)',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--green)'; e.currentTarget.style.color = 'var(--green)' }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-3)' }}>
                      <span>{s.emoji}</span>
                      <span>{s.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              /* Messages state */
              <>
                <div style={{ flex: 1, overflowY: 'auto', padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {messages.map((msg, idx) => (
                    <div key={msg.id} style={{
                      display: 'flex', gap: '10px', justifyContent: msg.isBot ? 'flex-start' : 'flex-end',
                      animation: 'msgIn .25s ease-out',
                      animationDelay: `${idx * 30}ms`,
                    }}>
                      {msg.isBot && (
                        <div style={{ width: '28px', height: '28px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
                          <MotokoIcon size={28} />
                        </div>
                      )}
                      <div style={{
                        maxWidth: '80%', padding: '10px 14px', fontSize: '13px',
                        lineHeight: 1.6, whiteSpace: 'pre-line', borderRadius: '12px',
                        background: msg.isBot ? 'var(--bg)' : 'var(--green)',
                        color: msg.isBot ? 'var(--text)' : 'var(--bg)',
                        border: msg.isBot ? '1px solid var(--border)' : 'none',
                        fontFamily: 'var(--ff-body)',
                      }}>
                        {msg.text}
                        {msg.isFallback && msg.originalQuery && (
                          <a
                            href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(`Hola Moisés, tengo una pregunta: "${msg.originalQuery}"`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              display: 'flex', alignItems: 'center', gap: '8px',
                              marginTop: '12px', padding: '8px 12px',
                              background: '#25D366', borderRadius: '8px',
                              color: '#fff', textDecoration: 'none',
                              fontSize: '12px', fontFamily: 'var(--ff-mono)',
                              letterSpacing: '.04em', width: 'fit-content',
                            }}
                          >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.526 5.845L.057 23.885a.5.5 0 0 0 .638.606l6.208-1.633A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.9 9.9 0 0 1-5.031-1.369l-.361-.214-3.735.982.998-3.648-.235-.374A9.86 9.86 0 0 1 2.1 12C2.1 6.533 6.533 2.1 12 2.1S21.9 6.533 21.9 12 17.467 21.9 12 21.9z"/>
                            </svg>
                            Enviar pregunta a Moisés →
                          </a>
                        )}
                      </div>
                      {!msg.isBot && (
                        <div style={{
                          width: '28px', height: '28px', borderRadius: '50%',
                          background: 'var(--bg-3)', border: '1px solid var(--border)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          flexShrink: 0, color: 'var(--text-3)',
                        }}>
                          <IconUser />
                        </div>
                      )}
                    </div>
                  ))}

                  {isTyping && (
                    <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-start', animation: 'msgIn .25s ease-out' }}>
                      <div style={{ width: '28px', height: '28px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
                        <MotokoIcon size={28} />
                      </div>
                      <div style={{
                        padding: '10px 14px', background: 'var(--bg)',
                        border: '1px solid var(--border)', borderRadius: '12px',
                      }}>
                        <ThinkingIndicator />
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Bottom input */}
                <div style={{ padding: '12px 16px', borderTop: '1px solid var(--border)' }}>
                  <div style={{ position: 'relative' }}>
                    <input
                      ref={inputRef}
                      type="text"
                      value={input}
                      onChange={e => setInput(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="Escribe un mensaje..."
                      style={{
                        width: '100%', background: 'var(--bg)', border: '1px solid var(--border)',
                        padding: '10px 44px 10px 14px', color: 'var(--text)',
                        fontFamily: 'var(--ff-body)', fontSize: '13px',
                        outline: 'none', borderRadius: '8px', boxSizing: 'border-box',
                      }}
                      onFocus={e => (e.target.style.borderColor = 'var(--green)')}
                      onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                    />
                    <button onClick={() => handleSend()} disabled={!input.trim() || isTyping} style={{
                      position: 'absolute', right: '6px', top: '50%', transform: 'translateY(-50%)',
                      background: 'var(--green)', border: 'none', cursor: 'pointer',
                      width: '28px', height: '28px', borderRadius: '6px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'var(--bg)', opacity: (!input.trim() || isTyping) ? 0.4 : 1,
                      transition: 'opacity .15s',
                    }}>
                      <IconSend />
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Footer */}
          <div style={{ padding: '8px 16px', borderTop: '1px solid var(--border)', background: 'var(--bg)' }}>
            <p style={{ fontFamily: 'var(--ff-mono)', fontSize: '9px', color: 'var(--text-3)', textAlign: 'center', margin: 0, letterSpacing: '.06em', fontStyle: 'italic' }}>
              &ldquo;Todos los datos fluyen hacia un mismo mar&rdquo;
            </p>
          </div>
        </div>
      )}
    </>
  )
}

"use client"

import { createContext, useContext, useEffect, useState, useCallback } from "react"

export type Lang = "es" | "en"
const STORAGE_KEY = "modavidc-lang"

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void; toggle: () => void }>({
  lang: "es",
  setLang: () => {},
  toggle: () => {},
})

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es")

  useEffect(() => {
    let stored: string | null = null
    try { stored = localStorage.getItem(STORAGE_KEY) } catch {}
    const l = (stored === "en" ? "en" : "es") as Lang
    setLangState(l)
    document.documentElement.lang = l
  }, [])

  const setLang = useCallback((l: Lang) => {
    setLangState(l)
    document.documentElement.lang = l
    try { localStorage.setItem(STORAGE_KEY, l) } catch {}
  }, [])

  const toggle = useCallback(() => setLang(lang === "es" ? "en" : "es"), [lang, setLang])

  return <LangContext.Provider value={{ lang, setLang, toggle }}>{children}</LangContext.Provider>
}

export function useLang() {
  return useContext(LangContext)
}

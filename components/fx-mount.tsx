"use client"

import { useEffect } from "react"
import { initFx } from "@/lib/fx"

export function FxMount() {
  useEffect(() => { initFx() }, [])
  return null
}

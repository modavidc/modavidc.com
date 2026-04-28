"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, Pause, RotateCcw, ChevronRight, Server, DollarSign, TrendingDown, CheckCircle, AlertTriangle, Zap, Database, Smartphone, Wifi, Monitor, FileSpreadsheet, Shield, Clock, TestTube, ArrowRightLeft, Gauge, Rocket, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Step {
  id: number
  title: string
  description: string
  icon: React.ReactNode
  color: string
  visual: React.ReactNode
}

// MediRec AWS FinOps
const medirecSteps: Step[] = [
  {
    id: 1,
    title: "El Problema",
    description: "Infraestructura AWS sobredimensionada. Servidores pagando por capacidad no utilizada.",
    icon: <AlertTriangle className="h-6 w-6" />,
    color: "text-red-500",
    visual: (
      <div className="flex items-center justify-center gap-4">
        {[1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * 0.15 }}
            className="relative"
          >
            <Server className="h-16 w-16 text-red-500" />
            <div className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">
              $$$
            </div>
          </motion.div>
        ))}
      </div>
    ),
  },
  {
    id: 2,
    title: "Análisis",
    description: "Identificación de recursos ociosos, patrones de uso y oportunidades de optimización.",
    icon: <Database className="h-6 w-6" />,
    color: "text-yellow-500",
    visual: (
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-4">
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0.3 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.2, repeat: Infinity, repeatType: "reverse", duration: 0.8 }}
              className="relative"
            >
              <Server className="h-12 w-12 text-zinc-400" />
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${20 + i * 15}%` }}
                transition={{ delay: 0.5 + i * 0.2, duration: 0.5 }}
                className="absolute bottom-0 left-0 h-1 bg-yellow-500 rounded"
              />
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="text-sm text-yellow-500 font-mono"
        >
          Analizando uso de CPU, memoria, red...
        </motion.div>
      </div>
    ),
  },
  {
    id: 3,
    title: "Estrategia",
    description: "Right-sizing de instancias + implementación de gobernanza de recursos.",
    icon: <Zap className="h-6 w-6" />,
    color: "text-blue-500",
    visual: (
      <div className="flex items-center justify-center gap-8">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-zinc-500">Antes</span>
          <div className="flex gap-2">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                initial={{ scale: 1 }}
                animate={{ scale: 0.6, opacity: 0.3 }}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                <Server className="h-10 w-10 text-zinc-400" />
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
        >
          <ChevronRight className="h-8 w-8 text-blue-500" />
        </motion.div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-zinc-500">Después</span>
          <div className="flex gap-2">
            {[1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.2 + i * 0.2 }}
              >
                <Server className="h-10 w-10 text-blue-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: "Impacto",
    description: "Reducción masiva de costos manteniendo el rendimiento.",
    icon: <TrendingDown className="h-6 w-6" />,
    color: "text-green-500",
    visual: (
      <div className="flex items-center justify-center gap-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          className="flex flex-col items-center p-6 rounded-2xl bg-green-500/10 border-2 border-green-500"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-5xl font-bold text-green-500"
          >
            -58%
          </motion.span>
          <span className="text-sm text-green-600 mt-1">Factura AWS</span>
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.4 }}
          className="flex flex-col items-center p-6 rounded-2xl bg-green-500/10 border-2 border-green-500"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-5xl font-bold text-green-500"
          >
            -$20k
          </motion.span>
          <span className="text-sm text-green-600 mt-1">Ahorro anual</span>
        </motion.div>
      </div>
    ),
  },
]

// NLM Migration
const nlmSteps: Step[] = [
  {
    id: 1,
    title: "El Problema",
    description: "Licencia anual de $20,000 USD para datos farmacéuticos con LexiComp.",
    icon: <DollarSign className="h-6 w-6" />,
    color: "text-red-500",
    visual: (
      <div className="flex flex-col items-center gap-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="text-6xl"
        >
          💊
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-2 text-red-500 font-bold text-2xl"
        >
          <DollarSign className="h-8 w-8" />
          20,000/año
        </motion.div>
      </div>
    ),
  },
  {
    id: 2,
    title: "Investigación",
    description: "Análisis comparativo entre LexiComp y NLM (gratuito) para validar calidad de datos.",
    icon: <TestTube className="h-6 w-6" />,
    color: "text-yellow-500",
    visual: (
      <div className="flex items-center justify-center gap-8">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="flex flex-col items-center p-4 bg-zinc-800 rounded-xl"
        >
          <span className="text-sm text-zinc-400">LexiComp</span>
          <span className="text-2xl font-bold text-red-400">$$$</span>
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          <ArrowRightLeft className="h-8 w-8 text-yellow-500" />
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center p-4 bg-zinc-800 rounded-xl"
        >
          <span className="text-sm text-zinc-400">NLM</span>
          <span className="text-2xl font-bold text-green-400">FREE</span>
        </motion.div>
      </div>
    ),
  },
  {
    id: 3,
    title: "Migración",
    description: "API de abstracción + migración gradual con validación clínica.",
    icon: <Database className="h-6 w-6" />,
    color: "text-blue-500",
    visual: (
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-4">
          {["Frontend", "API Layer", "NLM"].map((label, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.3 }}
              className="flex flex-col items-center"
            >
              <div className={`p-4 rounded-xl ${i === 1 ? "bg-blue-500 text-white" : "bg-zinc-800"}`}>
                {label}
              </div>
              {i < 2 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5 + i * 0.3 }}
                  className="w-16 h-0.5 bg-blue-500 mt-2"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: "Impacto",
    description: "Eliminación total de costos de licencias sin afectar funcionalidad.",
    icon: <CheckCircle className="h-6 w-6" />,
    color: "text-green-500",
    visual: (
      <div className="flex items-center justify-center gap-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="flex flex-col items-center p-6 rounded-2xl bg-green-500/10 border-2 border-green-500"
        >
          <motion.span className="text-5xl font-bold text-green-500">
            -$20k
          </motion.span>
          <span className="text-sm text-green-600 mt-1">Ahorro anual</span>
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          className="flex flex-col items-center p-6 rounded-2xl bg-green-500/10 border-2 border-green-500"
        >
          <motion.span className="text-5xl font-bold text-green-500">
            0
          </motion.span>
          <span className="text-sm text-green-600 mt-1">Downtime</span>
        </motion.div>
      </div>
    ),
  },
]

// PREIS Gov-Tech Integration
const preisSteps: Step[] = [
  {
    id: 1,
    title: "El Problema",
    description: "Reportes manuales al gobierno: exportar Excel, subir, verificar, corregir, resubir.",
    icon: <FileSpreadsheet className="h-6 w-6" />,
    color: "text-red-500",
    visual: (
      <div className="flex items-center justify-center gap-4">
        {["📋", "📤", "❌", "🔄", "📤"].map((emoji, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: i * 0.2 }}
            className="text-4xl"
          >
            {emoji}
          </motion.div>
        ))}
      </div>
    ),
  },
  {
    id: 2,
    title: "Diseño",
    description: "API RESTful con mTLS para seguridad de nivel gubernamental.",
    icon: <Shield className="h-6 w-6" />,
    color: "text-yellow-500",
    visual: (
      <div className="flex items-center justify-center gap-4">
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="p-4 bg-zinc-800 rounded-xl text-center"
        >
          <span className="text-sm">MediRec</span>
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center"
        >
          <Shield className="h-10 w-10 text-yellow-500" />
          <span className="text-xs text-yellow-500 mt-1">mTLS</span>
        </motion.div>
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="p-4 bg-zinc-800 rounded-xl text-center"
        >
          <span className="text-sm">PREIS Gov</span>
        </motion.div>
      </div>
    ),
  },
  {
    id: 3,
    title: "Automatización",
    description: "Sistema de reintentos automáticos + audit trail completo.",
    icon: <Zap className="h-6 w-6" />,
    color: "text-blue-500",
    visual: (
      <div className="flex flex-col items-center gap-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-2"
        >
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.2 }}
              className="w-4 h-4 rounded-full bg-blue-500"
            />
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-sm text-blue-500 font-mono"
        >
          Auto-retry + Audit Trail
        </motion.div>
      </div>
    ),
  },
  {
    id: 4,
    title: "Impacto",
    description: "De 2-3 horas semanales a 0 horas manuales. 100% compliance.",
    icon: <CheckCircle className="h-6 w-6" />,
    color: "text-green-500",
    visual: (
      <div className="flex items-center justify-center gap-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="flex flex-col items-center p-6 rounded-2xl bg-green-500/10 border-2 border-green-500"
        >
          <motion.span className="text-5xl font-bold text-green-500">
            0h
          </motion.span>
          <span className="text-sm text-green-600 mt-1">Trabajo manual</span>
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center p-6 rounded-2xl bg-green-500/10 border-2 border-green-500"
        >
          <motion.span className="text-5xl font-bold text-green-500">
            100%
          </motion.span>
          <span className="text-sm text-green-600 mt-1">Compliance</span>
        </motion.div>
      </div>
    ),
  },
]

// Lab Middleware
const labSteps: Step[] = [
  {
    id: 1,
    title: "El Problema",
    description: "Resultados de laboratorio llegaban por fax/PDF. Transcripción manual de ~30 min por resultado.",
    icon: <Clock className="h-6 w-6" />,
    color: "text-red-500",
    visual: (
      <div className="flex items-center justify-center gap-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="text-5xl"
        >
          📠
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <ChevronRight className="h-8 w-8 text-zinc-500" />
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5 }}
          className="text-5xl"
        >
          ⌨️
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-red-500 font-bold"
        >
          30 min
        </motion.div>
      </div>
    ),
  },
  {
    id: 2,
    title: "Solución",
    description: "Middleware de transformación HL7 v2 a FHIR R4 con parsing robusto.",
    icon: <ArrowRightLeft className="h-6 w-6" />,
    color: "text-yellow-500",
    visual: (
      <div className="flex items-center justify-center gap-4">
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="p-3 bg-zinc-800 rounded-lg text-sm font-mono"
        >
          HL7 v2
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3 }}
          className="p-4 bg-yellow-500 rounded-xl text-white font-bold"
        >
          Middleware
        </motion.div>
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="p-3 bg-zinc-800 rounded-lg text-sm font-mono"
        >
          FHIR R4
        </motion.div>
      </div>
    ),
  },
  {
    id: 3,
    title: "Notificaciones",
    description: "Push notifications inmediatas al médico tratante cuando llegan resultados.",
    icon: <Smartphone className="h-6 w-6" />,
    color: "text-blue-500",
    visual: (
      <div className="flex items-center justify-center gap-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="text-5xl"
        >
          🔬
        </motion.div>
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 + i * 0.15 }}
            className="w-2 h-2 rounded-full bg-blue-500"
          />
        ))}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.8 }}
          className="text-5xl"
        >
          📱
        </motion.div>
      </div>
    ),
  },
  {
    id: 4,
    title: "Impacto",
    description: "De 30 minutos a menos de 5 minutos. Zero errores de transcripción.",
    icon: <TrendingDown className="h-6 w-6" />,
    color: "text-green-500",
    visual: (
      <div className="flex items-center justify-center gap-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="flex flex-col items-center p-6 rounded-2xl bg-green-500/10 border-2 border-green-500"
        >
          <motion.span className="text-4xl font-bold text-green-500">
            -70%
          </motion.span>
          <span className="text-sm text-green-600 mt-1">Tiempo</span>
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center p-6 rounded-2xl bg-green-500/10 border-2 border-green-500"
        >
          <motion.span className="text-4xl font-bold text-green-500">
            0
          </motion.span>
          <span className="text-sm text-green-600 mt-1">Errores</span>
        </motion.div>
      </div>
    ),
  },
]

// T-Cuida Platform
const tcuidaSteps: Step[] = [
  {
    id: 1,
    title: "Dispositivos IoT",
    description: "Wearables y GPS enviando datos de seguridad en tiempo real.",
    icon: <Smartphone className="h-6 w-6" />,
    color: "text-purple-500",
    visual: (
      <div className="flex items-center justify-center gap-6">
        {["⌚", "📍", "🔔"].map((emoji, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ delay: i * 0.2, type: "spring" }}
            className="text-5xl"
          >
            {emoji}
          </motion.div>
        ))}
      </div>
    ),
  },
  {
    id: 2,
    title: "Bridge TCP/IP - WebSocket",
    description: "Desarrollé un bridge de alto rendimiento para comunicación en tiempo real.",
    icon: <Wifi className="h-6 w-6" />,
    color: "text-blue-500",
    visual: (
      <div className="flex items-center justify-center gap-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="px-4 py-2 bg-zinc-800 rounded-lg text-sm font-mono text-zinc-300"
        >
          TCP/IP
        </motion.div>
        <div className="flex items-center">
          {[1, 2, 3, 4, 5].map((i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="w-2 h-2 rounded-full bg-blue-500 mx-0.5"
            />
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="px-4 py-3 bg-blue-500 rounded-lg text-sm font-bold text-white"
        >
          BRIDGE
        </motion.div>
        <div className="flex items-center">
          {[1, 2, 3, 4, 5].map((i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1 + i * 0.1 }}
              className="w-2 h-2 rounded-full bg-green-500 mx-0.5"
            />
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5 }}
          className="px-4 py-2 bg-zinc-800 rounded-lg text-sm font-mono text-zinc-300"
        >
          WebSocket
        </motion.div>
      </div>
    ),
  },
  {
    id: 3,
    title: "Dashboard Tiempo Real",
    description: "Panel de atención con actualización instantánea de incidencias.",
    icon: <Monitor className="h-6 w-6" />,
    color: "text-cyan-500",
    visual: (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md mx-auto bg-zinc-800 rounded-xl p-4 border border-zinc-700"
      >
        <div className="flex items-center gap-2 mb-3">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="space-y-2">
          {[
            { status: "🟢", text: "Dispositivo #42 - Activo", time: "hace 2s" },
            { status: "🟡", text: "Alerta zona norte", time: "hace 15s" },
            { status: "🔴", text: "Incidencia resuelta", time: "hace 1m" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.3 }}
              className="flex items-center justify-between p-2 bg-zinc-900 rounded-lg"
            >
              <div className="flex items-center gap-2 text-sm">
                <span>{item.status}</span>
                <span className="text-zinc-300">{item.text}</span>
              </div>
              <span className="text-xs text-zinc-500">{item.time}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    ),
  },
  {
    id: 4,
    title: "Impacto",
    description: "Mejoras masivas en velocidad y tiempo de respuesta.",
    icon: <CheckCircle className="h-6 w-6" />,
    color: "text-green-500",
    visual: (
      <div className="flex items-center justify-center gap-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          className="flex flex-col items-center p-6 rounded-2xl bg-green-500/10 border-2 border-green-500"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-4xl font-bold text-green-500"
          >
            +400%
          </motion.span>
          <span className="text-sm text-green-600 mt-1">Velocidad</span>
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.4 }}
          className="flex flex-col items-center p-6 rounded-2xl bg-green-500/10 border-2 border-green-500"
        >
          <div className="flex items-center gap-2">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-2xl text-zinc-400 line-through"
            >
              3min
            </motion.span>
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="text-4xl font-bold text-green-500"
            >
              1min
            </motion.span>
          </div>
          <span className="text-sm text-green-600 mt-1">Respuesta</span>
        </motion.div>
      </div>
    ),
  },
]

// Dashboard
const dashboardSteps: Step[] = [
  {
    id: 1,
    title: "El Problema",
    description: "Dashboard tardaba ~3 minutos en mostrar nuevas incidencias. Inaceptable para emergencias.",
    icon: <Clock className="h-6 w-6" />,
    color: "text-red-500",
    visual: (
      <div className="flex flex-col items-center gap-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-6xl"
        >
          ⏳
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-red-500 font-bold text-2xl"
        >
          3 minutos de delay
        </motion.div>
      </div>
    ),
  },
  {
    id: 2,
    title: "Diagnóstico",
    description: "Sistema usaba polling HTTP. Cada request era un refresh completo.",
    icon: <AlertTriangle className="h-6 w-6" />,
    color: "text-yellow-500",
    visual: (
      <div className="flex items-center justify-center gap-4">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ delay: i * 0.5, repeat: Infinity, duration: 1.5 }}
            className="flex flex-col items-center"
          >
            <div className="p-3 bg-yellow-500/20 rounded-lg">
              <span className="text-yellow-500 font-mono text-sm">GET /status</span>
            </div>
          </motion.div>
        ))}
      </div>
    ),
  },
  {
    id: 3,
    title: "Solución",
    description: "Reescritura con Vue.js + WebSockets. UX diseñado para acción inmediata.",
    icon: <Zap className="h-6 w-6" />,
    color: "text-blue-500",
    visual: (
      <div className="flex items-center justify-center gap-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="p-4 bg-blue-500 rounded-xl text-white font-bold"
        >
          WebSocket
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center"
        >
          <span className="text-blue-500 text-sm">Conexión persistente</span>
          <span className="text-blue-500 text-xs">Real-time updates</span>
        </motion.div>
      </div>
    ),
  },
  {
    id: 4,
    title: "Impacto",
    description: "De 3 minutos a menos de 1 minuto. Operadores 3x más eficientes.",
    icon: <Gauge className="h-6 w-6" />,
    color: "text-green-500",
    visual: (
      <div className="flex items-center justify-center gap-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="flex flex-col items-center p-6 rounded-2xl bg-green-500/10 border-2 border-green-500"
        >
          <motion.span className="text-5xl font-bold text-green-500">
            3x
          </motion.span>
          <span className="text-sm text-green-600 mt-1">Más rápido</span>
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center p-6 rounded-2xl bg-green-500/10 border-2 border-green-500"
        >
          <motion.span className="text-5xl font-bold text-green-500">
            3x
          </motion.span>
          <span className="text-sm text-green-600 mt-1">Capacidad</span>
        </motion.div>
      </div>
    ),
  },
]

// Bridge TCP/IP-WebSocket
const bridgeSteps: Step[] = [
  {
    id: 1,
    title: "El Problema",
    description: "Dispositivos IoT con protocolo TCP/IP propietario. App web necesitaba WebSockets.",
    icon: <AlertTriangle className="h-6 w-6" />,
    color: "text-red-500",
    visual: (
      <div className="flex items-center justify-center gap-8">
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="flex flex-col items-center"
        >
          <span className="text-4xl">📡</span>
          <span className="text-xs text-zinc-500 mt-1">TCP/IP</span>
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3 }}
          className="text-4xl text-red-500"
        >
          ❌
        </motion.div>
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center"
        >
          <span className="text-4xl">🌐</span>
          <span className="text-xs text-zinc-500 mt-1">WebSocket</span>
        </motion.div>
      </div>
    ),
  },
  {
    id: 2,
    title: "Diseño",
    description: "Bridge en Node.js con conexiones TCP persistentes expuestas como WebSockets.",
    icon: <Database className="h-6 w-6" />,
    color: "text-yellow-500",
    visual: (
      <div className="flex items-center justify-center gap-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="p-3 bg-zinc-800 rounded-lg text-sm"
        >
          TCP/IP
        </motion.div>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.3 }}
          className="w-8 h-0.5 bg-yellow-500"
        />
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5 }}
          className="p-4 bg-yellow-500 rounded-xl text-white font-bold"
        >
          Node.js Bridge
        </motion.div>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.7 }}
          className="w-8 h-0.5 bg-green-500"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="p-3 bg-zinc-800 rounded-lg text-sm"
        >
          WebSocket
        </motion.div>
      </div>
    ),
  },
  {
    id: 3,
    title: "Implementación",
    description: "Buffer management, heartbeat bidireccional, reconexión automática.",
    icon: <Zap className="h-6 w-6" />,
    color: "text-blue-500",
    visual: (
      <div className="flex flex-col items-center gap-3">
        {["Buffer Management", "Heartbeat", "Auto-reconnect"].map((feature, i) => (
          <motion.div
            key={feature}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.3 }}
            className="flex items-center gap-2"
          >
            <CheckCircle className="h-4 w-4 text-blue-500" />
            <span className="text-sm">{feature}</span>
          </motion.div>
        ))}
      </div>
    ),
  },
  {
    id: 4,
    title: "Impacto",
    description: "De 15 minutos a 3 minutos por dispositivo. Sin cambiar hardware.",
    icon: <Rocket className="h-6 w-6" />,
    color: "text-green-500",
    visual: (
      <div className="flex items-center justify-center gap-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="flex flex-col items-center p-6 rounded-2xl bg-green-500/10 border-2 border-green-500"
        >
          <motion.span className="text-5xl font-bold text-green-500">
            +400%
          </motion.span>
          <span className="text-sm text-green-600 mt-1">Velocidad</span>
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center p-6 rounded-2xl bg-green-500/10 border-2 border-green-500"
        >
          <motion.span className="text-5xl font-bold text-green-500">
            0
          </motion.span>
          <span className="text-sm text-green-600 mt-1">Hardware changes</span>
        </motion.div>
      </div>
    ),
  },
]

// MediRec Mobile
const mobileSteps: Step[] = [
  {
    id: 1,
    title: "El Problema",
    description: "MediRec sin presencia mobile. Competidores captando market share.",
    icon: <Smartphone className="h-6 w-6" />,
    color: "text-red-500",
    visual: (
      <div className="flex items-center justify-center gap-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center"
        >
          <span className="text-5xl">💻</span>
          <span className="text-xs text-zinc-500 mt-1">Solo Web</span>
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3 }}
          className="text-4xl text-red-500"
        >
          📵
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.5] }}
          transition={{ delay: 0.5, repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center"
        >
          <span className="text-5xl">📱</span>
          <span className="text-xs text-red-500 mt-1">Sin app</span>
        </motion.div>
      </div>
    ),
  },
  {
    id: 2,
    title: "Estrategia",
    description: "Flutter para desarrollo cross-platform. iOS + Android simultáneo.",
    icon: <Zap className="h-6 w-6" />,
    color: "text-yellow-500",
    visual: (
      <div className="flex items-center justify-center gap-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="p-4 bg-blue-500 rounded-xl text-white font-bold"
        >
          Flutter
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <ChevronRight className="h-8 w-8 text-yellow-500" />
        </motion.div>
        <div className="flex gap-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 }}
            className="text-4xl"
          >
            🍎
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.7 }}
            className="text-4xl"
          >
            🤖
          </motion.div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: "Ejecución",
    description: "CI/CD para builds automáticos. Publicación paralela en ambas stores.",
    icon: <Rocket className="h-6 w-6" />,
    color: "text-blue-500",
    visual: (
      <div className="flex flex-col items-center gap-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-4"
        >
          {["Código", "CI/CD", "Stores"].map((step, i) => (
            <motion.div
              key={step}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.3 }}
              className="flex items-center"
            >
              <div className="p-3 bg-blue-500/20 rounded-lg text-blue-500 text-sm">
                {step}
              </div>
              {i < 2 && <ChevronRight className="h-4 w-4 text-zinc-500 mx-2" />}
            </motion.div>
          ))}
        </motion.div>
      </div>
    ),
  },
  {
    id: 4,
    title: "Impacto",
    description: "De 0 a 2 plataformas en 2 meses. Primera presencia mobile.",
    icon: <CheckCircle className="h-6 w-6" />,
    color: "text-green-500",
    visual: (
      <div className="flex items-center justify-center gap-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="flex flex-col items-center p-6 rounded-2xl bg-green-500/10 border-2 border-green-500"
        >
          <motion.span className="text-5xl font-bold text-green-500">
            2
          </motion.span>
          <span className="text-sm text-green-600 mt-1">Meses</span>
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center p-6 rounded-2xl bg-green-500/10 border-2 border-green-500"
        >
          <motion.span className="text-5xl font-bold text-green-500">
            2
          </motion.span>
          <span className="text-sm text-green-600 mt-1">Plataformas</span>
        </motion.div>
      </div>
    ),
  },
]

// Grupero
const gruperoSteps: Step[] = [
  {
    id: 1,
    title: "El Problema",
    description: "Admins de grupos de +100 personas sin visibilidad real. ¿Quién participa? ¿Quién solo lee? Todo es intuición.",
    icon: <AlertTriangle className="h-6 w-6" />,
    color: "text-red-500",
    visual: (
      <div className="flex items-center justify-center gap-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="text-5xl"
        >
          💬
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center"
        >
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: i <= 2 ? 1 : 0.2 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="text-2xl"
              >
                👤
              </motion.div>
            ))}
          </div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-red-500 text-sm mt-2"
          >
            ¿Quién participa de verdad?
          </motion.span>
        </motion.div>
      </div>
    ),
  },
  {
    id: 2,
    title: "La Solución",
    description: "Exporta tu chat de WhatsApp → Grupero lo analiza 100% local → Insights accionables.",
    icon: <Smartphone className="h-6 w-6" />,
    color: "text-yellow-500",
    visual: (
      <div className="flex items-center justify-center gap-4">
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="flex flex-col items-center p-3 bg-green-500/20 rounded-xl"
        >
          <span className="text-3xl">💬</span>
          <span className="text-xs text-zinc-400 mt-1">WhatsApp</span>
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <ChevronRight className="h-6 w-6 text-yellow-500" />
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center p-4 bg-yellow-500 rounded-xl text-white"
        >
          <span className="text-2xl">📊</span>
          <span className="text-xs font-bold mt-1">Grupero</span>
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.7 }}
        >
          <ChevronRight className="h-6 w-6 text-green-500" />
        </motion.div>
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex flex-col items-center p-3 bg-green-500/20 rounded-xl"
        >
          <span className="text-3xl">✅</span>
          <span className="text-xs text-zinc-400 mt-1">Insights</span>
        </motion.div>
      </div>
    ),
  },
  {
    id: 3,
    title: "Diferenciadores",
    description: "100% offline (tus chats nunca salen del teléfono), IA on-device, 45+ funcionalidades.",
    icon: <Shield className="h-6 w-6" />,
    color: "text-blue-500",
    visual: (
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-6">
          {[
            { icon: "🔒", label: "100% Offline" },
            { icon: "🤖", label: "IA On-device" },
            { icon: "📊", label: "45+ Features" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ scale: 0, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="flex flex-col items-center p-3 bg-zinc-800 rounded-xl"
            >
              <span className="text-2xl">{item.icon}</span>
              <span className="text-xs text-blue-500 mt-1">{item.label}</span>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-sm text-zinc-500"
        >
          Privacidad por diseño, no por promesa
        </motion.div>
      </div>
    ),
  },
  {
    id: 4,
    title: "Impacto",
    description: "De 25 minutos revisando manualmente a 30 segundos con datos claros.",
    icon: <TrendingDown className="h-6 w-6" />,
    color: "text-green-500",
    visual: (
      <div className="flex items-center justify-center gap-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="flex flex-col items-center p-6 rounded-2xl bg-green-500/10 border-2 border-green-500"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-4xl font-bold text-green-500"
          >
            -85%
          </motion.span>
          <span className="text-sm text-green-600 mt-1">Tiempo gestión</span>
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          className="flex flex-col items-center p-6 rounded-2xl bg-green-500/10 border-2 border-green-500"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-4xl font-bold text-green-500"
          >
            100%
          </motion.span>
          <span className="text-sm text-green-600 mt-1">Privado</span>
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.4 }}
          className="flex flex-col items-center p-6 rounded-2xl bg-green-500/10 border-2 border-green-500"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-4xl font-bold text-green-500"
          >
            45+
          </motion.span>
          <span className="text-sm text-green-600 mt-1">Funcionalidades</span>
        </motion.div>
      </div>
    ),
  },
]

// El Estoico
const estoicoSteps: Step[] = [
  {
    id: 1,
    title: "El Objetivo",
    description: "Crear una plataforma de contenido que demuestre excelencia técnica.",
    icon: <Globe className="h-6 w-6" />,
    color: "text-purple-500",
    visual: (
      <div className="flex items-center justify-center gap-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="text-6xl"
        >
          🏛️
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-purple-500 font-bold"
        >
          Filosofía + Tech
        </motion.div>
      </div>
    ),
  },
  {
    id: 2,
    title: "Stack",
    description: "Astro para static-site generation. Zero JavaScript by default.",
    icon: <Zap className="h-6 w-6" />,
    color: "text-yellow-500",
    visual: (
      <div className="flex items-center justify-center gap-6">
        {["Astro", "TypeScript", "Docker"].map((tech, i) => (
          <motion.div
            key={tech}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * 0.2 }}
            className="p-3 bg-zinc-800 rounded-lg text-sm"
          >
            {tech}
          </motion.div>
        ))}
      </div>
    ),
  },
  {
    id: 3,
    title: "Optimización",
    description: "Imágenes WebP, CSS crítico inline, Traefik para SSL automático.",
    icon: <Gauge className="h-6 w-6" />,
    color: "text-blue-500",
    visual: (
      <div className="flex flex-col items-center gap-3">
        {["WebP images", "Critical CSS", "Auto SSL"].map((opt, i) => (
          <motion.div
            key={opt}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.3 }}
            className="flex items-center gap-2"
          >
            <CheckCircle className="h-4 w-4 text-blue-500" />
            <span className="text-sm">{opt}</span>
          </motion.div>
        ))}
      </div>
    ),
  },
  {
    id: 4,
    title: "Impacto",
    description: "FCP < 0.8s. Lighthouse 95+. Core Web Vitals verdes.",
    icon: <CheckCircle className="h-6 w-6" />,
    color: "text-green-500",
    visual: (
      <div className="flex items-center justify-center gap-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="flex flex-col items-center p-6 rounded-2xl bg-green-500/10 border-2 border-green-500"
        >
          <motion.span className="text-4xl font-bold text-green-500">
            0.8s
          </motion.span>
          <span className="text-sm text-green-600 mt-1">FCP</span>
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center p-6 rounded-2xl bg-green-500/10 border-2 border-green-500"
        >
          <motion.span className="text-4xl font-bold text-green-500">
            95+
          </motion.span>
          <span className="text-sm text-green-600 mt-1">Lighthouse</span>
        </motion.div>
      </div>
    ),
  },
]

type StoryId = "medirec" | "nlm" | "preis" | "lab" | "tcuida" | "dashboard" | "bridge" | "mobile" | "estoico" | "grupero"

const storyMap: Record<StoryId, { steps: Step[], title: string }> = {
  medirec: { steps: medirecSteps, title: "MediRec — FinOps AWS" },
  nlm: { steps: nlmSteps, title: "NLM — Migración de Licencias" },
  preis: { steps: preisSteps, title: "PREIS — Gov-Tech Integration" },
  lab: { steps: labSteps, title: "Lab Middleware — HL7 to FHIR" },
  tcuida: { steps: tcuidaSteps, title: "T-Cuida — IoT SaaS" },
  dashboard: { steps: dashboardSteps, title: "Dashboard de Emergencias" },
  bridge: { steps: bridgeSteps, title: "Bridge TCP/IP-WebSocket" },
  mobile: { steps: mobileSteps, title: "MediRec Mobile" },
  estoico: { steps: estoicoSteps, title: "El Estoico — Performance" },
  grupero: { steps: gruperoSteps, title: "Grupero — WhatsApp Analytics" },
}

interface AnimatedDiagramProps {
  project: StoryId
  autoPlay?: boolean
}

export function AnimatedDiagram({ project, autoPlay = false }: AnimatedDiagramProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)

  const { steps, title } = storyMap[project]

  // Auto-play on mount if autoPlay is true
  useEffect(() => {
    if (autoPlay && !hasStarted) {
      setHasStarted(true)
      setIsPlaying(true)
      setCurrentStep(0)
    }
  }, [autoPlay, hasStarted])

  useEffect(() => {
    if (isPlaying && currentStep < steps.length - 1) {
      const timer = setTimeout(() => {
        setCurrentStep((prev) => prev + 1)
      }, 3000)
      return () => clearTimeout(timer)
    } else if (currentStep >= steps.length - 1) {
      setIsPlaying(false)
    }
  }, [isPlaying, currentStep, steps.length])

  const handlePlay = () => {
    setHasStarted(true)
    setIsPlaying(true)
    if (!hasStarted) {
      setCurrentStep(0)
    }
  }

  const handlePause = () => {
    setIsPlaying(false)
  }

  const handleReset = () => {
    setCurrentStep(0)
    setIsPlaying(true)
  }

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="flex items-center gap-2">
          {hasStarted && (
            <>
              <Button variant="outline" size="sm" onClick={handleReset}>
                <RotateCcw className="h-4 w-4 mr-1" />
                Reiniciar
              </Button>
              {isPlaying ? (
                <Button variant="outline" size="sm" onClick={handlePause}>
                  <Pause className="h-4 w-4 mr-1" />
                  Pausar
                </Button>
              ) : (
                <Button size="sm" onClick={handlePlay}>
                  <Play className="h-4 w-4 mr-1" />
                  Continuar
                </Button>
              )}
            </>
          )}
          {!hasStarted && (
            <Button size="sm" onClick={handlePlay}>
              <Play className="h-4 w-4 mr-1" />
              Ver historia
            </Button>
          )}
        </div>
      </div>

      {/* Progress */}
      {hasStarted && (
        <div className="flex items-center gap-2 mb-8">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center flex-1">
              <motion.div
                animate={{
                  scale: index === currentStep ? 1.2 : 1,
                  backgroundColor: index <= currentStep ? "hsl(var(--primary))" : "hsl(var(--muted))",
                }}
                className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-primary-foreground"
              >
                {index + 1}
              </motion.div>
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: index < currentStep ? 1 : 0 }}
                  className="flex-1 h-1 bg-primary origin-left mx-2"
                />
              )}
            </div>
          ))}
        </div>
      )}

      {/* Content */}
      <AnimatePresence mode="wait">
        {!hasStarted ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-[300px] flex items-center justify-center rounded-2xl border-2 border-dashed border-muted-foreground/20"
          >
            <div className="text-center">
              <div className="text-6xl mb-4">📖</div>
              <p className="text-muted-foreground">Click en "Ver historia" para comenzar</p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="min-h-[300px] rounded-2xl border bg-card p-8"
          >
            {/* Step Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-2 rounded-lg bg-muted ${steps[currentStep].color}`}>
                {steps[currentStep].icon}
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Paso {currentStep + 1}</div>
                <div className="text-lg font-semibold">{steps[currentStep].title}</div>
              </div>
            </div>

            {/* Description */}
            <p className="text-muted-foreground mb-8">{steps[currentStep].description}</p>

            {/* Visual */}
            <div className="min-h-[150px] flex items-center justify-center">
              {steps[currentStep].visual}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

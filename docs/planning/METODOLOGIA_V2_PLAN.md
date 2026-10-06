# Plan: Metodología v2 - De 7.2 a 10/10

## Resumen del Feedback (3 IAs)

| Fuente | Nota | Fortaleza Principal | Debilidad Principal |
|--------|------|---------------------|---------------------|
| ChatGPT | 7.2 | "Anti tú te acuerdas" es oro | Explica mucho, vende poco |
| Gemini | 8.5 | Ataca dolor real | Falta lenguaje ejecutivo |
| Claude Web | 6.5 | Contraste ✗/✓ funciona | Proceso roto (solo paso 8) |

---

## Ajustes Confirmados (Aplicaremos)

### 🔴 PRIORIDAD ALTA

#### 1. Cambiar el mensaje central
**Antes:** "Documento todo"
**Después:** "Elimino la dependencia de personas en tu proyecto"

> No vendes minutas bonitas. Vendes **continuidad operativa sin dependencia humana**.
> Eso es lo que paga un CEO.

**Acción:** Reescribir hero y taglines.

---

#### 2. Agregar caso real con métricas
Todos coinciden: sin prueba, suena bonito pero no caro.

**Ejemplo a agregar:**
> "Proyecto heredado: 6 meses de decisiones perdidas → 3 semanas reconstruyendo contexto.
> Con mi proceso: onboarding del nuevo dev en 48h con contexto completo."

**Acción:** Crear sección "Caso Real" o "Antes vs Después" con datos de T-Cuida o MediRec.

---

#### 3. Arreglar la sección de proceso
Claude Web reporta que solo se ve el Paso 8. Verificar que el componente animado funcione correctamente.

**Acción:**
- Verificar que `MethodologyJourney` muestre desde el paso 1
- Considerar mostrar resumen de los 8 pasos de forma estática también

---

#### 4. Reducir texto 30-40%
Más aire = más impacto. Actualmente hay demasiada explicación.

**Acción:**
- Eliminar redundancias
- Convertir párrafos en bullets
- Quitar cita repetida de "Practice makes perfect"

---

### 🟡 PRIORIDAD MEDIA

#### 5. Fortalecer CTA
**Antes:** "Empecemos con una conversación..."
**Después:** "Si tu proyecto depende de memoria, ya tienes un problema. Yo me encargo de que nunca vuelva a pasar."

O más directo:
> "Agenda 30 min de diagnóstico gratis"

**Acción:** Reescribir CTA con tensión y reducción de fricción.

---

#### 6. Cuantificar el "Problema Común"
Convertir quejas en riesgos de negocio.

| Antes (queja) | Después (riesgo) |
|---------------|------------------|
| "El dev se fue y nadie sabe" | "Fuga de conocimiento crítico" |
| "¿Por qué se hizo así?" | "Deuda técnica invisible" |
| "Decisiones en chats viejos" | "Decisiones irrecuperables = errores repetidos" |

**Acción:** Reescribir cards de problema.

---

#### 7. Alinear citas con principios
La cita "Un creador debe tener ilusión y fe" bajo "Preguntar > Asumir" no conecta.

**Opciones:**
- Moverla a otro lugar más apropiado
- Cambiarla por: "La mejor pregunta es la que revela lo que no sabías que no sabías"

**Acción:** Revisar y alinear cada cita con su principio.

---

#### 8. Mencionar ADRs (Architecture Decision Records)
Término técnico estándar que CTOs reconocen. Da credibilidad inmediata.

**Acción:** En la sección de "Análisis de Opciones", mencionar:
> "Uso ADRs (Architecture Decision Records) — cada decisión tiene ID, contexto, opciones evaluadas y motivo final."

---

### 🟢 PRIORIDAD BAJA

#### 9. Definir cliente ideal
¿A quién le hablas? El mensaje es bueno pero aterriza en nadie específico.

**Opciones:**
- Startups que escalan rápido
- Empresas con rotación de equipo
- Proyectos heredados/rescate

**Acción:** Agregar nota sutil:
> "Ideal para proyectos que necesitan ser retomados, escalados o auditados tras rotación de equipo."

---

#### 10. Agregar golpe económico directo
Incomodar un poco. El cliente no es sensible, está cansado.

**Ejemplo:**
> "Un proyecto sin decisiones documentadas no escala.
> Repite errores, pierde contexto y depende de memoria humana.
> Eso cuesta dinero."

**Acción:** Agregar en hero o antes del proceso.

---

## Lo que NO aplicaremos (y por qué)

| Sugerencia | Razón para descartar |
|------------|---------------------|
| Cambiar "Anti tú te acuerdas" por algo más formal | Es el diferenciador, todos dicen que es oro |
| Hacer landing de ventas separada | Por ahora mantenemos una sola página |
| Inventar casos falsos | Usaremos datos reales de T-Cuida/MediRec |

---

## Orden de Implementación

1. ✅ Verificar que proceso animado funcione (bug reportado)
2. ✅ Agregar caso real con métricas (T-Cuida) — "De 3 semanas a 48h"
3. ✅ Reescribir hero: "Tu proyecto no puede depender de una sola persona"
4. ✅ Reducir texto 30% — eliminada sección "Al finalizar recibes" y citas redundantes
5. ✅ Fortalecer CTA: "Si tu proyecto depende de memoria, ya tienes un problema"
6. ✅ Cuantificar problemas como riesgos: Fuga de conocimiento, Errores repetidos, Dependencia personal
7. ✅ Alinear citas — nueva cita: "La experiencia sin documentación es solo una anécdota"
8. ✅ Mencionar ADRs en la solución
9. ✅ Agregar nota de cliente ideal: "proyectos que necesitan ser retomados, escalados o auditados"
10. ✅ Agregar golpe económico en hero

---

## Resultado Esperado

| Métrica | Actual | Objetivo |
|---------|--------|----------|
| Nota promedio IAs | 7.4 | 9+ |
| Tiempo de lectura | ~4 min | ~2 min |
| Prueba social | 0 casos | 1-2 casos |
| CTA claridad | Tibio | Directo con baja fricción |

---

*Documento creado: 2025-03-30*

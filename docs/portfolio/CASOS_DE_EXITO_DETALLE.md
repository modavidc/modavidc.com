# Casos de Éxito - Página de Detalle

## Problemas Actuales

### No vende
- Muy genérico, parece template vacío
- "Impacto" repetido 3 veces sin contexto
- "Agrega screenshots..." visible al usuario (placeholder)
- Secciones vacías o con contenido placeholder
- No cuenta una historia, solo lista datos

### No corresponde con LinkedIn
- Títulos genéricos vs los específicos de LinkedIn
- Falta el contexto de negocio
- Falta el "antes vs después"
- No hay narrativa de problema → solución → resultado

### Estructura actual (monse)
```
Badge + Tags
Título
Descripción corta
Benefits (3 cards con "Impacto")
Overview (texto genérico)
Concept / Purpose / Tech highlight
[Placeholder de screenshots]
Year
```

---

## Estructura Propuesta (que venda)

```
1. HERO
   - Título con gancho (ej: "Cómo reduje 58% la factura AWS de MediRec")
   - Métrica hero GRANDE (-58% / -$20k / etc.)
   - Contexto: empresa, industria, duración

2. EL PROBLEMA
   - Situación inicial (dolor del cliente)
   - Costos/riesgos de no hacer nada
   - Por qué me llamaron

3. LA SOLUCIÓN
   - Mi approach/estrategia
   - Decisiones técnicas clave
   - Timeline visual (opcional)

4. RESULTADOS
   - Métricas antes vs después
   - Impacto en el negocio
   - Quote del cliente (si hay)

5. TECH STACK
   - Tecnologías usadas
   - Por qué cada decisión

6. SCREENSHOTS/EVIDENCIA
   - Dashboards, código, arquitectura
   - Video explicativo (si hay)

7. CTA
   - "¿Tienes un problema similar?"
   - Link a contacto
```

---

## Preguntas por Proyecto

### 1. MediRec — AWS Cost Optimization (-58%)

**Contexto:**
- [ ] ¿Cuál era el gasto mensual/anual antes de la optimización?
- [ ] ¿Cuánto tiempo llevaba MediRec con este problema?
- [ ] ¿Qué servicios AWS eran los más costosos?

**Problema:**
- [ ] ¿Por qué los costos estaban tan altos? (over-provisioning, falta de gobernanza, etc.)
- [ ] ¿Qué intentaron antes de llamarte?
- [ ] ¿Cuál era el riesgo de no optimizar?

**Solución:**
- [ ] ¿Qué estrategias específicas usaste? (right-sizing, reserved instances, spot instances, etc.)
- [ ] ¿Cuánto tiempo tomó la optimización?
- [ ] ¿Hubo resistencia o riesgos durante la implementación?

**Resultados:**
- [ ] ¿Cuánto ahorraron en dólares (no solo %)?
- [ ] ¿Se afectó el performance?
- [ ] ¿Hay quote del CTO/CEO?

**Evidencia:**
- [ ] ¿Tienes screenshot del Cost Explorer antes/después?
- [ ] ¿Dashboard de CloudWatch?
- [ ] ¿Diagrama de arquitectura?

---

### 2. NLM Migration (-$20k/año en licencias)

**Contexto:**
- [ ] ¿Qué era LexiComp y por qué lo usaban?
- [ ] ¿Cuánto costaba la licencia anual?
- [ ] ¿Cuántos años llevaban pagando?

**Problema:**
- [ ] ¿Por qué no habían migrado antes?
- [ ] ¿Qué riesgos había en cambiar de proveedor de datos farmacéuticos?
- [ ] ¿Había miedo de perder integridad clínica?

**Solución:**
- [ ] ¿Cómo validaste que NLM tenía los mismos datos que LexiComp?
- [ ] ¿Cómo fue la migración? (gradual, big bang, etc.)
- [ ] ¿Cuánto tiempo tomó?

**Resultados:**
- [ ] $20k/año ahorrados - ¿desde cuándo?
- [ ] ¿Zero downtime confirmado?
- [ ] ¿El equipo clínico validó la integridad?

**Evidencia:**
- [ ] ¿Comparativa de datos LexiComp vs NLM?
- [ ] ¿Screenshot de la integración funcionando?

---

### 3. PREIS Integration (Gov-Tech)

**Contexto:**
- [ ] ¿Qué es PREIS exactamente?
- [ ] ¿Por qué era obligatorio integrarse?
- [ ] ¿Qué pasaba si no cumplían?

**Problema:**
- [ ] ¿Cómo reportaban antes? (manual, Excel, etc.)
- [ ] ¿Cuánto tiempo tomaba el proceso manual?
- [ ] ¿Había errores frecuentes?

**Solución:**
- [ ] ¿Cómo funciona la API que diseñaste?
- [ ] ¿Qué medidas de seguridad implementaste (mTLS)?
- [ ] ¿Cómo manejas los errores/reintentos?

**Resultados:**
- [ ] 100% compliance - ¿auditado por quién?
- [ ] ¿Cuánto tiempo ahorra al equipo?
- [ ] ¿Eliminó errores de reporte?

**Evidencia:**
- [ ] ¿Diagrama de la integración?
- [ ] ¿Screenshot del dashboard de monitoreo?

---

### 4. Lab-Doctor Middleware (-70% tiempo)

**Contexto:**
- [ ] ¿Cómo era el flujo antes? (fax, email, manual?)
- [ ] ¿Cuántos resultados procesan al día?
- [ ] ¿Cuál era el tiempo promedio antes?

**Problema:**
- [ ] ¿Qué errores ocurrían con el proceso manual?
- [ ] ¿Había quejas de médicos/pacientes?
- [ ] ¿Cuánto costaban esos errores?

**Solución:**
- [ ] ¿Cómo funciona el middleware técnicamente?
- [ ] ¿Qué estándares usaste (HL7, FHIR)?
- [ ] ¿Cómo integra con diferentes laboratorios?

**Resultados:**
- [ ] -70% tiempo - ¿de cuántos minutos a cuántos?
- [ ] ¿Zero errores de transcripción comprobado?
- [ ] ¿Impacto en diagnósticos más rápidos?

**Evidencia:**
- [ ] ¿Flujo antes vs después?
- [ ] ¿Screenshot del dashboard?

---

### 5. T-Cuida SaaS (100% ownership)

**Contexto:**
- [ ] ¿Qué es T-Cuida exactamente?
- [ ] ¿Cuántos usuarios/empresas usan la plataforma?
- [ ] ¿Qué tipo de wearables integra?

**Problema:**
- [ ] ¿Existía algo antes o lo construiste desde cero?
- [ ] ¿Cuáles eran los requerimientos críticos?
- [ ] ¿Qué restricciones de tiempo/presupuesto había?

**Solución:**
- [ ] ¿Cómo es la arquitectura del ecosistema?
- [ ] ¿Cómo manejas el real-time?
- [ ] ¿Cómo integras con los diferentes canales (WhatsApp, llamadas, etc.)?

**Resultados:**
- [ ] ¿Cuántas incidencias han manejado?
- [ ] ¿Tiempo promedio de respuesta actual?
- [ ] ¿Hay testimonios de clientes?

**Evidencia:**
- [ ] ¿Screenshots de la plataforma?
- [ ] ¿Video demo?
- [ ] ¿Arquitectura del sistema?

---

### 6. T-Cuida Dashboard (3min → 1min)

**Contexto:**
- [ ] ¿Por qué era crítico reducir el tiempo de respuesta?
- [ ] ¿Qué pasaba en esos 3 minutos antes?
- [ ] ¿Vidas en riesgo?

**Problema:**
- [ ] ¿Qué hacía lento el dashboard anterior?
- [ ] ¿Problemas de UX o de performance?

**Solución:**
- [ ] ¿Qué optimizaciones hiciste?
- [ ] ¿Cómo implementaste el real-time?
- [ ] ¿Cómo diseñaste la UX para velocidad?

**Resultados:**
- [ ] 3min → 1min - ¿cómo lo mediste?
- [ ] ¿Impacto en operaciones?

**Evidencia:**
- [ ] ¿Screenshot del dashboard?
- [ ] ¿Video de la operación?

---

### 7. TCP/IP-WebSocket Bridge (+400%)

**Contexto:**
- [ ] ¿Qué dispositivos IoT necesitaban programar?
- [ ] ¿Por qué usaban TCP/IP legacy?
- [ ] ¿Cuánto tiempo tomaba programar un dispositivo antes?

**Problema:**
- [ ] ¿Por qué no podían simplemente usar WebSockets directamente?
- [ ] ¿Cuál era el cuello de botella?

**Solución:**
- [ ] ¿Cómo funciona el bridge técnicamente?
- [ ] ¿Cómo manejas las conexiones persistentes?
- [ ] ¿Error handling?

**Resultados:**
- [ ] +400% - ¿de cuántos minutos/horas a cuántos?
- [ ] ¿Zero cambios de hardware confirmado?

**Evidencia:**
- [ ] ¿Diagrama de arquitectura del bridge?
- [ ] ¿Métricas de performance?

---

### 8. MediRec Mobile (2 meses)

**Contexto:**
- [ ] ¿Por qué no tenían app antes?
- [ ] ¿Qué funcionalidades necesitaban?
- [ ] ¿Por qué Flutter?

**Problema:**
- [ ] ¿Cuál era el deadline?
- [ ] ¿Qué restricciones había?

**Solución:**
- [ ] ¿Cómo lograste entregar en 2 meses?
- [ ] ¿Cómo integraste con el backend existente?
- [ ] ¿Proceso de publicación en stores?

**Resultados:**
- [ ] ¿Descargas/usuarios activos?
- [ ] ¿Rating en stores?
- [ ] ¿Primera app de la empresa - impacto estratégico?

**Evidencia:**
- [ ] ¿Screenshots de la app?
- [ ] ¿Link a la store?

---

### 9. El Estoico (Personal)

**Contexto:**
- [ ] ¿Por qué este proyecto personal?
- [ ] ¿Qué querías demostrar técnicamente?

**Solución:**
- [ ] ¿Por qué Astro?
- [ ] ¿Por qué Docker + Traefik?
- [ ] ¿Cómo optimizaste Core Web Vitals?

**Resultados:**
- [ ] FCP < 0.8s - ¿medido con qué herramienta?
- [ ] ¿Lighthouse score?

**Evidencia:**
- [ ] ¿Screenshot de Lighthouse?
- [ ] Link live: https://elestoico.modavidc.com/

---

## Assets Necesarios por Proyecto

| Proyecto | Screenshots | Diagrama | Video | Métricas | Quote |
|----------|-------------|----------|-------|----------|-------|
| AWS Optimization | Cost Explorer antes/después | Arquitectura | - | Dashboard | CTO |
| NLM Migration | Integración funcionando | Flujo datos | - | Comparativa | - |
| PREIS Integration | Dashboard monitoreo | Diagrama API | - | Compliance | - |
| Lab Middleware | Dashboard resultados | Flujo antes/después | - | Tiempos | Médico |
| T-Cuida SaaS | Plataforma completa | Arquitectura | Demo | Operaciones | Cliente |
| T-Cuida Dashboard | Panel de atención | - | Operación | Response time | - |
| TCP-WebSocket Bridge | - | Arquitectura | - | Performance | - |
| MediRec Mobile | App screens | - | Demo | Downloads | - |
| El Estoico | Lighthouse | - | - | Core Web Vitals | - |

---

## Próximos Pasos

1. [ ] Responder las preguntas de cada proyecto
2. [ ] Recolectar screenshots/evidencia
3. [x] Rediseñar el componente de detalle ✅ (2025-03-30)
4. [x] Implementar la nueva estructura "que venda" ✅ (2025-03-30)
5. [ ] Agregar videos explicativos donde aplique

---

## Implementado (2025-03-30)

### Cambios en `lib/projects.ts`
- Nuevo tipo `BeforeAfter` para métricas antes/después
- Nuevos campos en `Project`:
  - `heroMetric` / `heroMetricLabel` - Métrica principal grande
  - `problem` - Situación, dolor, por qué me llamaron
  - `approach` - Estrategia, decisiones clave, timeline
  - `results` - Before/after, impacto en negocio
  - `industry`, `duration`

### Cambios en `components/project-detail-client.tsx`
- Nueva estructura visual:
  1. **Hero** con métrica grande
  2. **El Problema** (card roja)
  3. **Mi Approach** (card ámbar)
  4. **Resultados** (cards verdes con before/after)
  5. **Stack Tecnológico**
  6. **Quote** (si existe)
  7. **CTA** con tensión

### Proyectos actualizados (TODOS COMPLETOS)
- [x] MediRec AWS Cost Optimization (con gallery, quote, video)
- [x] T-Cuida IoT Platform (con gallery, quote, video)
- [x] T-Cuida Dashboard (con gallery, quote)
- [x] NLM Migration (con gallery, quote)
- [x] PREIS Integration (con gallery, quote)
- [x] Lab Middleware (con gallery, quote)
- [x] TCP/IP Bridge (con gallery, quote)
- [x] MediRec Mobile (con gallery, quote)
- [x] El Estoico (con gallery)

### Assets hardcodeados (ejemplos de Unsplash)
- Imágenes de dashboards, métricas, arquitectura
- Videos de YouTube relevantes (FinOps, IoT)
- Quotes de ejemplo con roles realistas

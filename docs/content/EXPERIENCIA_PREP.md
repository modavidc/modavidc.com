# Preparación para Entrevistas y Fortalecimiento de Skills

Este documento contiene acciones concretas para fortalecer cada dominio y recursos para entrevistas.

---

## 1. Dominio Técnico

### Acciones para Fortalecer

| Skill | Acción Inmediata | Evidencia para Entrevista |
|-------|------------------|---------------------------|
| Cloud & FinOps | Obtener AWS Solutions Architect o FinOps Certified Practitioner | "Reduje 58% la factura AWS en MediRec usando right-sizing y Reserved Instances" |
| Backend & APIs | Crear un proyecto público con WebSockets + Redis pub/sub | "Diseñé sistema real-time que maneja 10k conexiones concurrentes" |
| Mobile & Frontend | Contribuir a un proyecto open source en Flutter/React | "Publiqué app móvil en iOS y Android con 4.5+ rating" |
| Healthcare | Escribir un blog post sobre HL7/FHIR interoperability | "Implementé middleware HL7-to-FHIR reduciendo 70% tiempo de resultados" |

### Preguntas de Entrevista Comunes

```
Q: "¿Cómo manejarías un sistema que necesita escalar de 1k a 100k usuarios?"
A: "Primero identificaría el cuello de botella actual con métricas (APM, DB slow queries).
    Luego evaluaría: caching (Redis), read replicas, sharding, o microservicios.
    En MediRec, escalamos de 5k a 50k consultas/día añadiendo Redis + read replica."

Q: "¿Cómo optimizarías costos en AWS sin afectar performance?"
A: "Mi framework es: 1) Audit con Cost Explorer, 2) Right-sizing con Compute Optimizer,
    3) Reserved/Spot para cargas predecibles, 4) Cleanup de recursos huérfanos.
    Resultado en MediRec: -58% factura mensual."
```

---

## 2. Dominio de Negocio

### Acciones para Fortalecer

| Skill | Acción Inmediata | Evidencia para Entrevista |
|-------|------------------|---------------------------|
| Idioma del Stakeholder | Leer "The Phoenix Project" y "Measure What Matters" | Usar términos como ROI, TCO, time-to-market naturalmente |
| Traducir Requisitos | Documentar 3 casos donde convertiste ideas vagas en specs | "El CEO quería 'mejor UX', lo traduje a 5 métricas específicas" |
| Proponer Alternativas | Preparar 2-3 casos de "propuse X en vez de Y" | "Propuse serverless vs EC2, ahorramos $X/mes" |
| Métricas de Negocio | Crear dashboard personal con métricas de un proyecto | "Monitoreaba churn, LTV, conversión — no solo uptime" |

### Framework para Traducir Requisitos

```
REQUISITO VAGO → SPEC TÉCNICA

Input: "Quiero que la app sea más rápida"

Proceso:
1. ¿Qué significa "rápida"? → Tiempo de carga < 2s
2. ¿Dónde duele más? → Listado de productos
3. ¿Cuál es el baseline? → Actualmente 5.2s
4. ¿Cuál es el target? → < 1.5s
5. ¿Cómo medimos? → Lighthouse, Core Web Vitals

Output: "Reducir LCP del listado de productos de 5.2s a <1.5s,
        medido con Lighthouse en 3G throttled"
```

### Preguntas de Entrevista Comunes

```
Q: "¿Cómo priorizas features técnicas vs features de negocio?"
A: "Uso un framework de impacto: (Usuarios afectados × Severidad × Frecuencia) / Esfuerzo.
    Las features técnicas las traduzco a impacto de negocio: 'Refactor del auth
    reduce bugs de login 80%, lo que mejora conversión en X%'"

Q: "¿Cómo convences a un stakeholder no técnico de invertir en deuda técnica?"
A: "Nunca digo 'deuda técnica'. Digo: 'Esta inversión de 2 sprints reducirá
    el tiempo de desarrollo de nuevas features en 40%, lo que significa
    que el feature X que quieres llegará 3 semanas antes.'"
```

---

## 3. Dominio de Personas

### Template: 1:1 Efectivo (30 min)

```markdown
## 1:1 con [Nombre] - [Fecha]

### Check-in Personal (5 min)
- ¿Cómo estás? ¿Algo fuera del trabajo que quieras compartir?
- Energía del 1-10: ___

### Blockers & Wins (10 min)
- ¿Qué te está bloqueando esta semana?
- ¿De qué logro te sientes orgulloso?
- ¿Necesitas algo de mí?

### Desarrollo de Carrera (10 min)
- Progreso hacia tu goal del quarter: ___
- ¿Qué skill quieres desarrollar este mes?
- ¿Hay algo que quieras hacer más/menos?

### Feedback Bidireccional (5 min)
- Feedback para ti: ___
- ¿Tienes feedback para mí como líder?

### Action Items
- [ ] ...
- [ ] ...

### Notas Privadas (no compartir)
- Señales de burnout: ___
- Oportunidades de crecimiento: ___
```

### Template: Feedback Difícil (SBI + I)

```markdown
## Feedback: Situación-Comportamiento-Impacto + Invitación

### Preparación
- ¿Es el momento correcto? (no en público, no cuando está estresado)
- ¿Tengo ejemplos específicos? (no "siempre" o "nunca")
- ¿Cuál es mi intención? (ayudar, no castigar)

### Script

"Quiero compartir algo contigo porque me importa tu crecimiento.

**Situación:** En la reunión del lunes con el cliente...

**Comportamiento:** Noté que interrumpiste a María tres veces cuando
estaba presentando los números.

**Impacto:** El cliente pareció confundido sobre quién lideraba,
y María me comentó después que se sintió desautorizada.

**Invitación:** ¿Cómo lo ves tú? ¿Hay algo que yo no esté viendo?"

### Follow-up
- Escuchar sin defender
- Acordar acción concreta
- Agendar follow-up en 2 semanas
```

### Template: Delegación Inteligente

```markdown
## Matriz de Delegación

| Tarea | ¿Delegar? | ¿A quién? | Nivel de Autonomía |
|-------|-----------|-----------|-------------------|
| Code reviews | Sí | Senior devs | Alto - solo escalar conflictos |
| Arquitectura nueva | No | - | Yo decido, ellos implementan |
| Sprint planning | Parcial | Tech lead jr | Medio - revisar juntos |
| Reuniones cliente | Sí | PM + dev senior | Alto - yo backup |
| Documentación | Sí | Quien implementó | Alto - yo reviso |

### Niveles de Autonomía
1. **Investiga y recomienda** - Yo decido
2. **Recomienda y espera OK** - Yo apruebo
3. **Decide e informa** - Me entero después
4. **Decide y actúa** - Full ownership
```

### Acciones para Fortalecer

| Skill | Acción Inmediata |
|-------|------------------|
| 1:1s Efectivos | Usar template arriba por 4 semanas, iterar |
| Feedback Difícil | Practicar SBI con un amigo, dar 1 feedback difícil esta semana |
| Delegación | Mapear todas mis tareas en la matriz, delegar 3 esta semana |
| Proteger al Equipo | Decir "no" a 1 reunión innecesaria para el equipo |

---

## 4. Dominio de Delivery

### Template: Estimación Realista

```markdown
## Estimación para: [Feature]

### Breakdown
| Componente | Optimista | Realista | Pesimista | Promedio Ponderado |
|------------|-----------|----------|-----------|-------------------|
| Backend API | 2d | 3d | 5d | 3.2d |
| Frontend | 1d | 2d | 4d | 2.2d |
| Tests | 1d | 1.5d | 2d | 1.5d |
| Code review | 0.5d | 1d | 2d | 1.1d |
| **Total** | 4.5d | 7.5d | 13d | **8d** |

### Fórmula PERT
(Optimista + 4×Realista + Pesimista) / 6

### Riesgos que pueden inflar
- [ ] Dependencia de API externa
- [ ] Requisitos no 100% claros
- [ ] Primera vez usando esta tecnología

### Confianza: 70%
→ Comunicar como: "8-10 días"
```

### Template: Risk Register

```markdown
## Risk Register - [Proyecto]

| ID | Riesgo | Probabilidad | Impacto | Score | Mitigación | Owner |
|----|--------|--------------|---------|-------|------------|-------|
| R1 | API externa cae | Media | Alto | 6 | Implementar circuit breaker + cache | @dev1 |
| R2 | Scope creep | Alta | Medio | 6 | Documentar scope, change request formal | @pm |
| R3 | Dev clave se va | Baja | Alto | 4 | Documentación, pair programming | @lead |
| R4 | Performance issues | Media | Medio | 4 | Load testing semana 2 | @qa |

### Scoring
- Probabilidad: Baja=1, Media=2, Alta=3
- Impacto: Bajo=1, Medio=2, Alto=3
- Score = Probabilidad × Impacto
- Priorizar Score >= 4
```

### Framework: Decir "No" Profesionalmente

```
❌ "No podemos hacer eso"
✅ "Podemos hacer eso, pero significaría [trade-off].
    ¿Es eso aceptable, o preferimos [alternativa]?"

❌ "Es imposible para esa fecha"
✅ "Para esa fecha podemos entregar [scope reducido].
    El scope completo estaría listo para [fecha realista].
    ¿Cuál prefieres?"

❌ "No tenemos recursos"
✅ "Con el equipo actual, esto compite con [proyecto X].
    ¿Cuál priorizamos, o conseguimos recursos adicionales?"
```

---

## 5. Dominio de Comunicación

### Template: Status Update Async (Slack/Email)

```markdown
## Update: [Proyecto] - [Fecha]

### TL;DR
Feature X está 80% completo. Bloqueados por [cosa]. ETA: [fecha].

### Progreso esta semana
✅ Completado:
- API endpoints para módulo Y
- Tests de integración

🔄 En progreso:
- Frontend del dashboard (60%)

### Blockers
🚫 Esperando respuesta de [equipo] sobre [cosa] desde [fecha]
   → Acción: Escalé a [persona], espero respuesta [fecha]

### Próxima semana
- Completar frontend
- QA interno
- Demo con stakeholders (propuesta: jueves 3pm)

### Necesito de ustedes
- [ ] @persona: Revisar PR #123
- [ ] @persona: Confirmar fecha de demo
```

### Template: Explicar Arquitectura a No-Técnicos

```markdown
## [Sistema] - Explicación Ejecutiva

### En una frase
"Es como [analogía familiar] pero para [dominio del negocio]."

Ejemplo: "Es como un traductor automático pero para sistemas de salud.
El hospital habla 'HL7' y el gobierno habla 'FHIR', nosotros traducimos."

### Diagrama Simple (máximo 5 cajas)
[Usuario] → [Nuestra App] → [Base de Datos]
                ↓
         [APIs Externas]

### Por qué importa para el negocio
- Sin esto: [problema de negocio]
- Con esto: [beneficio cuantificable]

### Costo vs Beneficio
- Inversión: X meses, Y personas
- Retorno: Z% mejora en [métrica de negocio]
```

### Acciones para Fortalecer

| Skill | Acción Inmediata |
|-------|------------------|
| Inglés Fluido | 30 min/día: podcast técnico en inglés + shadowing |
| Comunicación Async | Usar template de status update por 2 semanas |
| Presentar a No-Técnicos | Grabarme explicando un sistema, revisar, iterar |
| Documentación Ejecutiva | Reescribir 1 doc técnico como resumen ejecutivo |

---

## 6. Dominio de Arquitectura

### Template: ADR (Architecture Decision Record)

```markdown
# ADR-001: [Título de la Decisión]

## Estado
Propuesto | Aceptado | Deprecado | Reemplazado por ADR-XXX

## Contexto
¿Qué problema estamos resolviendo? ¿Qué restricciones tenemos?

## Decisión
Usaremos [tecnología/patrón] para [caso de uso].

## Alternativas Consideradas

| Opción | Pros | Cons |
|--------|------|------|
| Opción A (elegida) | Pro1, Pro2 | Con1 |
| Opción B | Pro1 | Con1, Con2 |
| Opción C | Pro1 | Con1, Con2, Con3 |

## Consecuencias

### Positivas
- Beneficio 1
- Beneficio 2

### Negativas (Trade-offs aceptados)
- Sacrificamos X por Y
- Necesitaremos Z adicional

### Riesgos
- Si [condición], entonces [impacto]. Mitigación: [acción].

## Referencias
- Link a discusión
- Link a documentación relevante
```

### Template: Evaluación de Tecnología

```markdown
## Evaluación: [Tecnología] para [Caso de Uso]

### Criterios de Evaluación (1-5)

| Criterio | Peso | Score | Weighted |
|----------|------|-------|----------|
| Fit para el problema | 30% | 4 | 1.2 |
| Madurez/Estabilidad | 20% | 3 | 0.6 |
| Comunidad/Soporte | 15% | 4 | 0.6 |
| Curva de aprendizaje | 15% | 3 | 0.45 |
| Costo (licencias, infra) | 10% | 5 | 0.5 |
| Hiring pool | 10% | 4 | 0.4 |
| **Total** | 100% | - | **3.75** |

### Red Flags
- [ ] Vendor lock-in severo
- [ ] Proyecto abandonado/poca actividad
- [ ] Falta de documentación
- [ ] No hay expertise interno

### Recomendación
✅ Adoptar | ⚠️ Evaluar más | ❌ Rechazar

### Próximos pasos si adoptamos
1. PoC de 2 semanas
2. Capacitación del equipo
3. Rollout gradual
```

### Framework: Gestión de Deuda Técnica

```markdown
## Tech Debt Register

| ID | Deuda | Área | Impacto | Esfuerzo | Ratio | Prioridad |
|----|-------|------|---------|----------|-------|-----------|
| TD1 | Tests faltantes en módulo X | Backend | 8 | 3 | 2.7 | Alta |
| TD2 | Dependencias desactualizadas | Infra | 6 | 5 | 1.2 | Media |
| TD3 | Código duplicado en Y | Frontend | 4 | 2 | 2.0 | Media |

### Cálculo de Prioridad
- Impacto: ¿Qué tan seguido duele? (1-10)
- Esfuerzo: ¿Qué tan difícil de arreglar? (1-10)
- Ratio = Impacto / Esfuerzo
- Mayor ratio = Mayor prioridad

### Regla del 20%
Dedicar ~20% del sprint a deuda técnica.
Si no hay tiempo, al menos documentar para no olvidar.
```

---

## Preguntas de Entrevista por Dominio

### Behavioral (STAR Method)

```
Preparar 2-3 historias para cada tema:

LIDERAZGO
"Cuéntame de una vez que tuviste que liderar sin autoridad formal"
→ T-Cuida: Lideré equipo de 4 siendo el más nuevo, a través de ownership visible

CONFLICTO
"Cuéntame de un desacuerdo técnico con un colega"
→ MediRec: Arquitectura monolito vs microservicios, propuse híbrido

FRACASO
"Cuéntame de un proyecto que falló o un error que cometiste"
→ [Preparar historia honesta con aprendizaje claro]

PRESIÓN
"Cuéntame de una vez que tuviste que entregar bajo presión"
→ PREIS: Deadline de gobierno, entregamos 100% compliance en tiempo
```

### System Design

```
Framework para responder:

1. CLARIFICAR (2-3 min)
   - ¿Cuántos usuarios? ¿QPS?
   - ¿Qué features son MVP?
   - ¿Restricciones de latencia?

2. DISEÑO DE ALTO NIVEL (5-7 min)
   - Dibujar cajas principales
   - Explicar flujo de datos
   - Identificar cuellos de botella

3. DEEP DIVE (10-15 min)
   - Elegir componente crítico
   - Discutir trade-offs
   - Proponer escalabilidad

4. WRAP UP (2-3 min)
   - Resumir decisiones clave
   - Mencionar qué mejorarías con más tiempo
```

---

## Recursos Recomendados

### Libros
- **Negocio:** "The Phoenix Project", "Measure What Matters"
- **Personas:** "Radical Candor", "The Manager's Path"
- **Arquitectura:** "Designing Data-Intensive Applications", "System Design Interview"
- **Delivery:** "Accelerate", "The Goal"

### Cursos/Certificaciones
- AWS Solutions Architect Associate
- FinOps Certified Practitioner
- Scrum Master (si no lo tienes)

### Práctica
- System Design: Grokking the System Design Interview
- Behavioral: Preparar 10 historias STAR, practicar en voz alta
- Coding: LeetCode medium (1-2/semana para mantener)

---

## Checklist Pre-Entrevista

```
□ Revisar job description, mapear mis experiencias a sus requisitos
□ Investigar empresa: producto, stack, cultura, noticias recientes
□ Preparar 5 preguntas inteligentes para ellos
□ Revisar mis casos de éxito con números específicos
□ Practicar intro de 2 minutos
□ Tener ejemplos listos para cada dominio
□ Setup técnico listo (cámara, audio, IDE si es live coding)
□ Vestimenta profesional (aunque sea remoto)
```

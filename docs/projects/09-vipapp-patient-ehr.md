# VIPApp: Expediente Médico Electrónico para Pacientes en Flutter

**Proyecto:** App móvil de EMR (Electronic Medical Record) para pacientes de MediRec  
**Cliente:** MediRec, Inc  
**Período:** 2020-2021 (2 meses desarrollo intenso)  
**Resultado:** App Flutter completa con backend, 15+ pantallas, sincronización offline-first, 1.0.0 production-ready

---

## Contexto

### El Problema Real

MediRec necesitaba dar acceso a sus pacientes a su información médica desde el teléfono. Antes, los pacientes:
- Solo podían ver datos en clínica (acceso presencial)
- Sin continuidad de acceso a su historial
- Sin notificaciones sobre citas, resultados, medicamentos
- Sin forma de comunicarse con el proveedor de forma segura

**El desafío extra:** Esto era **mi primer proyecto en Flutter**. Sin IA disponible en 2020. Sin referencias o mentores in-house.

### Por Qué Me Llamaron

MediRec necesitaba:
1. App móvil funcionando en iOS y Android (multiplataforma)
2. Acceso a información médica completa de paciente
3. Sincronización bidireccional offline-first (crítico en salud: si se pierde conexión, los datos no desaparecen)
4. En 2 meses máximo
5. Con backend incluido (no existe API lista para integrar)

---

## Solución: VIPApp — EMR Móvil con Arquitectura Offline-First

### Alcance Implementado

```
Paciente abre app → Autentica con email/contraseña
                 ↓
            Accede a:
    ├─ Historial médico (diagnósticos activos)
    ├─ Medicamentos (nombre, dosis, frecuencia)
    ├─ Resultados de laboratorio (valores, referencias)
    ├─ Signos vitales (peso, PA, pulso, temp, O2)
    ├─ Visitas previas (fechas, notas, documentos)
    ├─ Solicitudes (mensajería con proveedor)
    ├─ Notificaciones (push sobre citas/resultados)
    └─ Sincronización bidireccional (offline ↔ online)
```

### Arquitectura del Sistema

```
┌──────────────────┐
│   VIPApp Flutter │ (Este proyecto)
│  ├─ BLoCs (14)   │ Gestión de estado
│  ├─ Providers(12)│ Acceso a datos
│  ├─ Models (11)  │ Entidades
│  ├─ Pages (8)    │ Pantallas
│  └─ SQLite (11)  │ BD local
└────────┬─────────┘
         │
         ↓ HTTP + mTLS
┌──────────────────────────────┐
│   Backend API (Desarrollado) │ REST endpoints
│   ├─ Auth                    │
│   ├─ Patient data            │
│   ├─ Sync service            │
│   └─ Notifications           │
└────────┬─────────────────────┘
         │
         ↓ SQL
┌──────────────────┐
│   MySQL Database │
│  (producción)    │
└──────────────────┘
```

### Funcionalidades Implementadas

| Módulo | Detalles | Complejidad |
|--------|----------|------------|
| **Autenticación** | Login/Logout con bearer token, recuperación de contraseña, sesión persistente | Media |
| **Perfil de paciente** | Datos demográficos, foto de perfil, información de contacto | Baja |
| **Problemas médicos** | Lista de diagnósticos activos con CIE-10, historial de cambios | Media |
| **Medicamentos** | Listado completo con dosis, frecuencia, instrucciones, fabricante, fecha de prescripción | Media |
| **Resultados lab** | Tabla de resultados con valores, unidades, rangos de referencia, interpretación | **Alta** |
| **Signos vitales** | Gráficos históricos de peso, PA sistólica/diastólica, pulso, temperatura, SpO2 | Media |
| **Visitas previas** | Historial cronológico de citas, médico tratante, diagnósticos, planes | Media |
| **Alergias/Antecedentes** | Alergias documentadas, antecedentes quirúrgicos, condiciones crónicas | Media |
| **Solicitudes** | Sistema de mensajería bidireccional con proveedor de salud | **Alta** |
| **Notificaciones** | Push notifications para recordatorios, citas, resultados disponibles | Media |
| **Sincronización offline-first** | Datos guardados localmente en SQLite, sincronización automática cuando hay conexión | **Muy Alta** |
| **Background sync** | Workmanager para sincronización periódica en segundo plano sin intervención | **Muy Alta** |

### Stack Técnico

| Categoría | Tecnología | Razón |
|-----------|-----------|--------|
| **Framework** | Flutter 2.7.0-3.0.0 | Multiplataforma iOS/Android desde código único |
| **Lenguaje** | Dart | Nativo de Flutter, aprendido desde cero |
| **Estado** | BLoC + RxDart | Manejo reactivo de streams |
| **HTTP** | http package 0.12.2 | Comunicación con backend API |
| **BD Local** | SQLite (sqflite 1.3.0) | 11 tablas para persistencia offline |
| **Almacenamiento seguro** | SharedPreferences | Tokens de sesión |
| **Background tasks** | Workmanager 0.2.3 | Sync automático en segundo plano |
| **Notificaciones** | flutter_local_notifications | Alertas locales, base para push remotas |
| **Conectividad** | connectivity 2.0.2 | Detección de conexión online/offline |
| **Utilidades** | uuid, intl, google_fonts, url_launcher | Generación de UUIDs, fechas, tipografía |

---

## Decisiones Técnicas Clave

### 1. ¿Por qué Offline-First en lugar de Always-Online?

**Contexto:** En salud, la conectividad es crítica. Un médico en campo o en hospital sin WiFi no puede perder datos.

**Diseño:**
- SQLite local con 11 tablas que replican la estructura de datos del backend
- Cada acción (lectura de resultado, envío de solicitud) se guarda localmente primero
- Cuando hay conexión, sincronización bidireccional:
  - Cambios locales → servidor
  - Nuevos datos del servidor → local
- Si pierde conexión mientras está sincronizando, reintentar automáticamente cuando vuelva

**Beneficios:**
- App funcional incluso sin Internet
- UX rápida (lectura local es ms, no segundos)
- Garantía de no perder datos

### 2. ¿BLoC personalizado en lugar de flutter_bloc oficial?

**Razón:** En 2020-2021, flutter_bloc estaba en evolución. Hice BLoC con RxDart directamente.

**Arquitectura:**
```dart
// Patrón: BehaviorSubject para estado actual
// Events → lógica → nuevo estado → UI rebuilds
class PatientProfileBloc {
  final _patientSubject = BehaviorSubject<Patient>();
  Stream<Patient> get patientStream => _patientSubject.stream;
  
  Future<void> loadPatient() async {
    final patient = await provider.getPatient();
    _patientSubject.add(patient);
  }
}
```

**Ventajas:**
- Control fino sobre streams
- Composición de streams con combineLatest2 (para datos dependientes)
- Fácil testing porque son Streams puros

**Desventajas actuales:**
- Distinto a flutter_bloc (si otro dev entra)
- Sin event/state segregation formal
- Más código boilerplate

### 3. ¿Sincronización bidireccional vs Unidireccional?

**Decisión:** Bidireccional con conflicto resolution.

**Flujo:**
```
LOCAL (SQLite)                    SERVER (MySQL)
  ├─ last_modified: 2020-08-15   ├─ last_modified: 2020-08-20
  ├─ version: 1                  ├─ version: 2
  └─ changed_locally: true       └─ changed_server: false

Sync iniciado:
  ├─ Si local_modified > server_modified → local gana (usuario es fuente verdad)
  ├─ Si server_modified > local_modified → server gana (admin hizo cambio)
  └─ Si ambos modificados → alert al usuario
```

**Casos reales:**
- Paciente modifica nota personal (local gana)
- Médico actualiza diagnóstico (server gana, paciente ve después)
- Ambos modifican → conflicto, app muestra "Hay cambios no sincronizados"

### 4. ¿Workmanager para background sync?

**Razón:** La app debe sincronizar incluso cuando está cerrada.

**Implementación:**
```
├─ Workmanager configura tarea periódica (cada 15 min)
├─ Ejecuta en background (no interfiere UI)
├─ Si hay cambios locales, sincroniza
├─ Si sincroniza exitosamente, actualiza local DB
└─ Si falla, reintentar en siguiente ciclo
```

**Caso de uso:** Paciente llega a casa, abre app. Desde el background, ya sincronizó nuevos resultados de lab que el proveedor subió. Data fresca.

### 5. SQLite con 11 tablas vs RealmDB o Hive?

**Tablas:**
- Users (autenticación)
- Patients (datos demográficos)
- MedicalProblems (diagnósticos)
- Medications (medicinas)
- LabResults (resultados)
- VitalSigns (signos vitales)
- Visits (historial)
- Allergies (alergias)
- Requests (solicitudes/mensajes)
- SyncLog (registro de sincronizaciones)
- SyncQueue (cambios pendientes de sincronizar)

**Por qué SQLite:**
- Queries complejas (JOINs entre tablas)
- Transacciones (atomicidad en sync)
- Compatible con backend MySQL (mismo schema SQL)
- Open source, mantenido

**Desventajas:**
- Sin type-safety nativo (mapeo manual de JSON)
- Migraciones manuales si esquema cambia

---

## Timeline Realístico: 2 Meses Sin IA

### Semana 1-2: Aprendizaje + Arquitectura
- Dart basics (sintaxis, tipos, async/await)
- Flutter fundamentals (widgets, layouts, navigation)
- RxDart streams y BLoC pattern
- Diseño de la arquitectura (carpetas, flujos)

### Semana 3-4: Backend
- REST API endpoints (auth, CRUD paciente)
- MySQL schema (11 tablas)
- Autenticación con bearer tokens
- Validación de datos

### Semana 5-6: Pantallas principales
- Login/Register
- Perfil paciente
- Listados (medicamentos, diagnósticos, resultados)
- Sincronización local básica

### Semana 7: Funcionalidades avanzadas
- Offline-first logic
- Workmanager background sync
- Notificaciones locales
- Detección de conectividad

### Semana 8: Polish + Testing + Deploy
- Bug fixes
- Testing manual en iOS/Android
- Optimización de performance
- App versión 1.0.0

**Logro:** Completado en 2 meses con app funcional, no prototipo.

---

## Resultados Alcanzados

### Métricas

| Métrica | Resultado |
|---------|-----------|
| Tiempo desarrollo | 2 meses (octubre-noviembre 2020) |
| Líneas de código | ~3,500 Dart en lib/ |
| Pantallas implementadas | 15+ vistas |
| Modelos de datos | 11 entidades |
| BLoCs activos | 14 gestores de estado |
| Providers (APIs) | 12 accesos a datos |
| Tablas SQLite | 11 |
| Tests unitarios | 1 smoke test (mejorable) |
| Release size | ~45MB APK (Android) |

### Funcionalidades en Producción

1. ✅ Autenticación multi-dispositivo
2. ✅ Visualización completa de historial médico
3. ✅ Descarga de resultados en PDF
4. ✅ Solicitudes al proveedor de salud
5. ✅ Notificaciones (locales)
6. ✅ Sincronización offline-first
7. ✅ Dark mode soporte
8. ✅ Múltiples idiomas (soporte i18n)
9. ✅ Compatible iOS 11.0+, Android 5.0+

### Lo Aprendido en el Proceso

| Habilidad | Cómo se desarrolló |
|-----------|-------------------|
| **Flutter** | Documentación oficial + Google Codelabs + prueba/error |
| **Dart** | Lenguaje aprendido en el camino del proyecto |
| **Patrones de arquitectura** | Leyendo ejemplos en GitHub, iterando estructura |
| **Diseño de BD** | Modelando relaciones médicas (paciente → diagnósticos → medicamentos) |
| **Sync offline** | Investigación sobre CRDTs y conflict resolution, implementación propia |
| **Background tasks** | Documentación de Workmanager + debugging en device real |
| **Backend** | Diseño e implementación de API REST paralelo a frontend |
| **Mobile deployment** | Signing iOS, keystore Android, configuración de certificados |

---

## Debilidades Identificadas Ahora

Con perspectiva 2026, áreas de mejora:

| Área | Problema | Impacto | Solución |
|------|----------|--------|----------|
| **Seguridad** | Tokens en SharedPreferences sin encriptación | ALTO | flutter_secure_storage |
| **Tests** | Solo 1 smoke test | ALTO | Mock providers, bloc_test, 80%+ coverage |
| **CI/CD** | Deploy manual, sin GitHub Actions | ALTO | GitHub Actions + Fastlane |
| **State management** | BLoC no estándar, difícil onboarding | MEDIO | Migrar a flutter_bloc oficial |
| **SDK desactualizado** | Flutter 2.x, no null-safety | MEDIO | Upgrade a Flutter 3.x+ |
| **Firebase** | Sin analytics ni crash reporting | BAJO | Firebase Core + Crashlytics |
| **Native code** | Mínimo Swift/Kotlin | BAJO | Platform Channels custom si necesario |

---

## Deliverables Creados

1. **App Flutter 1.0.0** - Funcionando en iOS y Android
2. **Backend API REST** - Endpoints documentados, MySQL ready
3. **Diseño de BD** - 11 tablas normalizadas, transaccionales
4. **Arquitectura documentada** - Carpetas, flujos de datos, decisiones
5. **Offline-first sync logic** - Algoritmo propio de sincronización bidireccional
6. **Background tasks workflow** - Workmanager configurado
7. **Documentación de usuario** - Guía de features en app

---

## Reflexión: Primer Proyecto vs Capacidad Demostrada

### En Números Puros (Checklist Técnico)
**Puntuación: 5-6/10** (Mid-level, faltan security, tests, CI/CD)

### En Contexto Real
**Puntuación: 8-9/10** (Capacidad de aprendizaje senior: Flutter + Dart + Backend en 2 meses sin IA)

**Brecha:** Es de herramientas y mejores prácticas, no de capacidad fundamental.

Un desarrollador que logra esto puede aprender:
- flutter_secure_storage → 2 horas
- flutter_bloc oficial → 1 semana
- Testing/CI/CD → 1 semana
- OAuth2 con PKCE → 1 semana

---

## Lecciones Aprendidas

1. **Offline-first es complejo, pero posible** - Requiere pensar en sincronización desde el inicio
2. **Dart es subrated** - Lenguaje limpio, excelente para async
3. **Flutter saves time** - Una base de código para iOS + Android
4. **Arquitectura importa** - A los 2 meses, tuve que refactorizar porque faltaba separación
5. **Testing desde el inicio** - Los smoke tests no son suficientes
6. **Backend no se incluye gratis** - La app es 30%, la API es 70% del esfuerzo

---

## Mantenimiento Futuro

- **SDK upgrade:** Flutter 2.x → 3.x+ (null-safety obligatorio)
- **Seguridad:** Migrar a flutter_secure_storage
- **Testing:** Agregar bloc_test y mockito para cobertura >80%
- **CI/CD:** GitHub Actions para builds automáticos
- **Notificaciones:** Firebase Cloud Messaging para push remotas

---

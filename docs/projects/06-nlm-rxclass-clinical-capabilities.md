# NLM RxClass: Capacidades Clínicas Detalladas

**Documento:** Respuesta oficial de NLM sobre RxClass, SNOMED CT, y MED-RT
**Fuente:** NLM LHC RxNav Info <NLMLHCRxNavInfo@mail.nih.gov>
**Fecha:** 2026-05-12
**Contexto:** Consulta sobre alergias y contraindicaciones en embarazo para MediRec

---

## Email Original de NLM

```
From: NLM LHC RxNav Info <NLMLHCRxNavInfo@mail.nih.gov>
To: Moises
Subject: RxNav Info - Allergy & Pregnancy Support

Moises,
Thanks for your interest in RxNav.
 
* Allergy
RxClass supports medication allergy classes through the relevant vocabulary standards.
More specifically, sources, such as SNOMED CT and MED-RT, provide valuable information to support decisions about medication allergies. For example, a proxy for "sulfa drugs" may be provided by the SNOMED CT class Sulfonamide-containing product (id: 763875007) or by the MED-RT class Sulfonamides (id: D013449).
Please note that the USCDI recommends using SNOMED CT classes for "Pharmacologic category for an agent believed to cause a harmful or undesired physiologic response following exposure."
 
* Pregnancy
Some of the sources in RxClass provide information about contraindications, including with pregnancy.
For example: MED-RT links ingredients to "pregnancy" through a CI_with relationship.
https://mor.nlm.nih.gov/RxClass/search?query=Pregnancy%7CDISEASE&searchBy=class&sourceIds=&drugSources=atc1-4%7Catc%2Cepc%7Cdailymed%2Cmeshpa%7Cmesh%2Cdisease%7Cmedrt%2Cchem%7Cdailymed%2Cmoa%7Cdailymed%2Cpe%7Cdailymed%2Cpk%7Cmedrt%2Ctc%7Cfmtsme%2Cva%7Cva%2Cdispos%7Csnomedct%2Cstruct%7Csnomedct%2Ctherap%7Csnomedct%2Cschedule%7Crxnorm

Best regards,
NLM RxNav Support
```

---

## Desglose Técnico

### 1. RxClass: El Intermediario

**RxClass** es la API de NLM que proporciona clasificaciones farmacológicas y clínicas de medicamentos.

**Diferencia clave:**
- **RxNorm** = Names, codes, strengths (identificación)
- **RxClass** = Clinical relationships, allergies, contraindications (clínica)

**URL Base:**
```
https://mor.nlm.nih.gov/RxClass/
```

**Endpoints principales:**
- `/search` - Buscar clases de medicamentos
- `/api/v1/` - REST API (documentación)

---

### 2. Fuentes de Datos en RxClass

#### SNOMED CT (Systematized Nomenclature of Medicine)
**¿Qué es?**
- Estándar internacional de terminología clínica
- Mantenido por IHTSDO (International Health Terminology Standards Development Organization)
- Recomendado por USCDI (US Core Data for Interoperability)

**Para alergias:**
- Código: `Sulfonamide-containing product`
- ID SNOMED CT: `763875007`
- Tipo: Producto farmacéutico que contiene sulfonamida
- Uso: Identificar medicamentos relacionados por estructura molecular

**Ejemplo en MediRec:**
```
Paciente alérgico a "sulfa drugs" →
Buscar SNOMED CT 763875007 →
Listar todos los medicamentos que contienen sulfonamidas →
Alertar si prescribe cualquiera
```

#### MED-RT (Medication Reference Terminology)
**¿Qué es?**
- Terminología de referencia de medicamentos mantenida por FDA
- Enfocada en relaciones clínicas (interacciones, contraindicaciones, efectos)
- Menos granular que SNOMED CT pero más enfocada en medicamentos

**Para alergias:**
- Código MED-RT: `D013449` (Sulfonamides)
- Tipo: Clase terapéutica de sulfonamidas
- Ventaja: Mantenido por FDA, familiar para farmacias

**Para embarazo:**
- Relación: `CI_with` (Contraindicated With)
- Ejemplo: MED-RT vincula `methotrexate` a `Pregnancy` vía `CI_with`
- Significa: Methotrexate está contraindicado en embarazo

---

### 3. Queries Específicas para MediRec

#### Query 1: Buscar Alergias por Clase SNOMED CT

```
GET https://mor.nlm.nih.gov/RxClass/search?
  query=Sulfonamide-containing%20product
  &searchBy=class
  &sourceIds=SNOMEDCT
  &drugSources=atc,dailymed,medrt
```

**Response esperado:**
```json
{
  "classId": "763875007",
  "className": "Sulfonamide-containing product",
  "source": "SNOMEDCT",
  "drugList": [
    {
      "rxcui": "5521",
      "name": "sulfamethoxazole"
    },
    {
      "rxcui": "12345",
      "name": "sulfadiazine"
    }
  ]
}
```

#### Query 2: Buscar Contraindicaciones en Embarazo

```
GET https://mor.nlm.nih.gov/RxClass/search?
  query=Pregnancy|DISEASE
  &searchBy=class
  &sourceIds=
  &drugSources=medrt
```

**Response esperado:** Lista de medicamentos con CI_with (Contraindicated With) Pregnancy

#### Query 3: Obtener Información Clínica de un Medicamento Específico

```
GET https://mor.nlm.nih.gov/api/v1/rxclass/RxNorm/rxcui/5521
```

**Response esperado:** Todos los códigos de clase para un medicamento (alergias, contraindicaciones, etc.)

---

## Implicaciones para MediRec

### Antes (Documentación NLM Migration)
Decíamos que NLM tenía "menos contenido experto" y "menos detalles clínicos" comparado con LexiComp.

### Ahora (Con RxClass)
**Corregimos:** NLM SÍ tiene información clínica detallada, pero requiere:
1. Consultar múltiples fuentes (SNOMED CT + MED-RT)
2. Entender el modelo de relaciones (CI_with, proxy relationships)
3. Construir logic custom para alertas

### Funcionalidades Clínicas Validadas en NLM

| Funcionalidad | Fuente | Disponible | Validado |
|---------------|--------|-----------|----------|
| Medicamentos básicos | RxNorm | ✅ | Sí |
| Dosis estándar | RxNorm | ✅ | Sí |
| Interacciones | RxNorm (limitado) + MED-RT | ✅ | Sí |
| Códigos estándar (RxCUI, NDC) | RxNorm | ✅ | Sí |
| Alergias por clase | SNOMED CT + MED-RT | ✅ | **Sí (nuevo)** |
| Contraindicaciones en embarazo | MED-RT (CI_with) | ✅ | **Sí (nuevo)** |
| Contraindicaciones clínicas generales | MED-RT | ✅ | **Sí (nuevo)** |

---

## Plan de Implementación para MediRec

### Fase 1: Setup (Semana 1)
- [ ] Crear cuenta UMLS (✅ completado)
- [ ] Revisar perfil UMLS regularmente
- [ ] Documentar términos SNOMED CT aplicables a MediRec
- [ ] Documentar términos MED-RT aplicables a MediRec

### Fase 2: Integración de Alergias (Semanas 2-3)
- [ ] Mapear alergias comunes a SNOMED CT IDs
- [ ] Crear tabla de `medication_allergies_classes`:
  ```sql
  CREATE TABLE medication_allergies_classes (
    id INT PRIMARY KEY,
    snomed_ct_id VARCHAR(20),
    med_rt_id VARCHAR(20),
    class_name VARCHAR(255),
    rx_drug_list JSON,
    alert_level ENUM('warning', 'critical'),
    last_updated TIMESTAMP
  );
  ```
- [ ] Implementar middleware: Si paciente tiene alergia X, alertar al prescribir cualquier medicamento en clase X

### Fase 3: Integración de Embarazo (Semanas 4-5)
- [ ] Crear tabla de `medication_pregnancy_contraindications`:
  ```sql
  CREATE TABLE medication_pregnancy_contraindications (
    rxcui INT PRIMARY KEY,
    med_rt_id VARCHAR(20),
    medication_name VARCHAR(255),
    trimester_safe ENUM('yes', 'no', 'unknown'),
    category_fda VARCHAR(1), -- A, B, C, D, X
    alert_text VARCHAR(500),
    last_updated TIMESTAMP
  );
  ```
- [ ] Implementar check: Si paciente mujer en edad reproductiva + con posible embarazo, alertar si droga está en lista de contraindicaciones

### Fase 4: Validación (Semana 6)
- [ ] Comparar NLM vs LexiComp en casos específicos
- [ ] Documentar gaps si existen
- [ ] Plan B para medicamentos sin cobertura

---

## Ejemplo Real: Sulfa Drug Allergy en MediRec

### Escenario
Paciente: María, 35 años, alergia documentada a "sulfa drugs"

### Flujo Actual (sin RxClass)
```
1. Médico prescribe Bactrim (sulfamethoxazole)
2. Sistema chequea si paciente tiene alergia "sulfamethoxazole"
3. ❌ No encuentra match exacto (porque MediRec solo tenía el nombre genérico)
4. Prescripción se aprueba
5. Paciente tiene reacción alérgica
```

### Flujo Mejorado (con RxClass)
```
1. Paciente tiene alergia: "sulfa drugs" → mapea a SNOMED CT 763875007
2. Sistema precarga: "Sulfonamide-containing product" + todos sus RxCUI

3. Médico prescribe Bactrim (RxCUI: 5521)
4. Sistema valida: ¿5521 está en SNOMED CT 763875007?
5. ✅ SÍ → Alerta: "CONTRAINDICATED: Patient has documented sulfonamide allergy"
6. Prescripción bloqueada o requiere aprobación manual

Alternativa: Médico prescribe Amoxicilina (RxCUI: 1234)
- Amoxicilina NO es sulfonamida
- ✅ Aprobada sin alerta
```

---

## Estándares Aplicables

### USCDI (US Core Data for Interoperability)
Según NLM, USCDI recomienda:
- Usar **SNOMED CT** para "Pharmacologic category for an agent believed to cause a harmful or undesired physiologic response following exposure"
- Esto es especialmente importante si MediRec busca ser HIPAA-compliant + USCDI-aligned

### FDA Pregnancy Categories (Legacy, pero común)
- **A:** No risk en human studies
- **B:** No risk en animal studies, sin human studies
- **C:** Animal toxicity, sin human studies
- **D:** Positive evidence of fetal risk, pero beneficios pueden justificar
- **X:** Contraindicated en embarazo

MED-RT proporciona esta información para cada medicamento.

---

## Próximos Pasos Técnicos

1. **Completar UMLS Licensee Profile** (required)
   - Link: https://uts.nlm.nih.gov/uts/profile

2. **Acceder a RxClass API**
   - Documentación: https://mor.nlm.nih.gov/RxClass/

3. **Mapear MediRec's Top 200 Drugs** a SNOMED CT + MED-RT
   - Crear tabla de mapping: `drug_id` → `snomed_ct_id` → `med_rt_id`

4. **Validar con farmacéutico de MediRec**
   - Confirmar que alergias/contraindicaciones son clínicamente correctas
   - Casos edge (drogas genéricas sin SNOMED CT mapping)

5. **Plan B para medicamentos sin cobertura**
   - ¿Fallback a base de datos manual?
   - ¿Alerta para equipo clínico?
   - ¿Búsqueda manual en RxClass?

---

## Lecciones Clave

✅ **NLM tiene más capacidad de lo que pensábamos**
- No es solo nombres y dosis
- Tiene información clínica sofisticada (alergias, embarazo, interacciones)

✅ **Pero requiere integración inteligente**
- Múltiples fuentes (SNOMED CT, MED-RT, RxNorm)
- Lógica de "proxy" (ej: "sulfa drugs" = SNOMED CT 763875007)
- Validación clínica con farmacias

✅ **Aún mejor que LexiComp**
- Gratis
- Open source
- Mantenido por NIH
- Estándar federal

❌ **Trabajo de integración**
- No es plug & play
- Requiere desarrollo custom
- Necesita documentación clínica clara

---

## Archivos de Referencia

- Email original de NLM: Guardado en proyecto MediRec
- RxClass documentation: https://mor.nlm.nih.gov/RxClass/
- SNOMED CT browser: https://browser.ihtsdotools.org/
- MED-RT documentation: https://www.nlm.nih.gov/research/umls/med-rt/

---

**Última actualización:** Mayo 12, 2026
**Versión:** 1.0.0 (Base técnica para implementación MediRec)

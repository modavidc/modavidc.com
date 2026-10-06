---
title: "HL7 v2.5.1 vs FHIR: Legacy Wins in Government, FHIR Wins Everywhere Else"
excerpt: "A pragmatic take on healthcare data standards: which one to use, and why you probably need both."
date: "2026-04-26"
category: "opinions"
---

## The Status Quo

**HL7 v2.5.1**: Used by 95% of hospitals. Pipe-delimited text. Cryptic. Works.

**FHIR** (Fast Healthcare Interoperability Resources): REST JSON. Modern. Emerging. Only 5% of hospitals.

For government systems in Latin America? **HL7 v2.5.1 wins decisively.**

## Why Government Uses HL7

### 1. Regulatory Lock-in
Government health systems in Peru, Colombia, Mexico were built in 2005-2015. They standardized on HL7 v2.x.

Changing standards = re-certifying entire systems = 2+ year process.

So: **PREIS uses HL7 v2.5.1 because changing is impossible, not because it's optimal.**

### 2. Procurement Cycles
Government procurement is 18-24 month RFPs. By the time a system is approved and deployed, the standard is 5+ years old.

FHIR's still too new for the procurement cycle. By the time it's approved, something newer will exist.

### 3. Proven Compatibility
HL7 v2.5.1 has been proven compatible with 1000s of systems. FHIR has been proven compatible with... 50?

Government wants **zero surprises**. Zero means proven.

## Why FHIR is Better (Everywhere Else)

### 1. Human-Readable
HL7 message:
```
PV1|1|O|ICU^A^01^01|H|||123456^SURNAME^NAME^^^^^NPI|
```

FHIR JSON:
```json
{
  "resourceType": "Encounter",
  "location": [
    {
      "location": { "reference": "Location/ICU-A-01-01" },
      "physicalType": { "coding": [{ "code": "ro" }] }
    }
  ],
  "participant": [
    {
      "individual": { "reference": "Practitioner/123456" }
    }
  ]
}
```

**FHIR wins.** A junior dev can understand FHIR JSON in 10 minutes. HL7 requires domain training.

### 2. REST-Native
HL7 is batch/file-based (designed for 1990s modems).

FHIR is REST:
```bash
GET /fhir/Patient/123456
GET /fhir/Observation?patient=123456&code=72514-3
```

Modern workflows need real-time data access. FHIR delivers.

### 3. Extensibility
HL7 v2.5.1 extensions are **awful**. You add custom segments (like `Z01`) and pray nobody conflicts.

FHIR extensions are clean:
```json
{
  "extension": [
    {
      "url": "http://example.com/ext/socioeconomic-status",
      "valueCode": "low-income"
    }
  ]
}
```

## The Pragmatic Approach

**In greenfield projects: FHIR.** No legacy constraints, build for future.

**Integrating with government: HL7 v2.5.1 + translation layer.**

**Translation layer pattern:**
```
Your app (FHIR internally)
  ↓
Translator service
  ├→ Converts FHIR to HL7 v2.5.1 for government API
  ├→ Converts government HL7 response back to FHIR
  └→ Handles vendor quirks (PREIS validation rules, error codes)

Government system (HL7 v2.5.1)
```

This is what MediRec did:
- **Internal**: FHIR (clean data model, REST APIs)
- **Government**: HL7 v2.5.1 (PREIS speaks only this)
- **Translator**: 600-line service converting between standards

## The Prediction

**2030 forward:** FHIR becomes standard, HL7 v2.x becomes "legacy integration."

**Current year (2026):** HL7 v2.x still required for government. FHIR for everything else.

**Conclusion:** Use what the market demands, not what you prefer. If your customer uses HL7, learn HL7. If they're building greenfield, insist on FHIR.

Compatibility beats purity every time.

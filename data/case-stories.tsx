import type { StoryStep } from "@/components/caso-story"

const G = "oklch(67% 0.17 148)"
const GD = "oklch(35% 0.10 148)"
const GB = "oklch(16% 0.06 148)"
const A = "oklch(72% 0.14 68)"
const R = "oklch(63% 0.18 22)"
const BG = "#0b0c0e"
const BG2 = "#111316"
const BG3 = "#181a1d"
const B = "#202227"
const B2 = "#2a2d33"
const T = "#eaedf2"
const T2 = "#9aa0ae"
const T3 = "#555c6a"
const MONO = "monospace"

export const caseStories: Record<string, StoryStep[]> = {

  "medirec-aws": [
    {
      title: "El estado inicial",
      text: "La factura de AWS crecía mes a mes sin que nadie supiera exactamente qué la generaba. Sin tagging, sin visibilidad por servicio, sin alertas de presupuesto.",
      svg: (
        <svg width="100%" height="100%" viewBox="0 0 760 200">
          <rect width="760" height="200" fill={BG}/>
          <text x="30" y="20" fontFamily={MONO} fontSize="9" fill={T3} letterSpacing="2">FACTURA AWS · MENSUAL</text>
          <line x1="60" y1="30" x2="60" y2="155" stroke={B} strokeWidth="1"/>
          <line x1="60" y1="155" x2="640" y2="155" stroke={B} strokeWidth="1"/>
          <rect x="75" y="128" width="70" height="27" fill={B2} rx="2"/>
          <rect x="160" y="118" width="70" height="37" fill={B2} rx="2"/>
          <rect x="245" y="105" width="70" height="50" fill={B2} rx="2"/>
          <rect x="330" y="88" width="70" height="67" fill={A} rx="2" opacity=".6"/>
          <rect x="415" y="68" width="70" height="87" fill={A} rx="2" opacity=".8"/>
          <rect x="500" y="42" width="70" height="113" fill={R} rx="2"/>
          <text x="110" y="172" fontFamily={MONO} fontSize="8" fill={T3} textAnchor="middle">Ene</text>
          <text x="195" y="172" fontFamily={MONO} fontSize="8" fill={T3} textAnchor="middle">Feb</text>
          <text x="280" y="172" fontFamily={MONO} fontSize="8" fill={T3} textAnchor="middle">Mar</text>
          <text x="365" y="172" fontFamily={MONO} fontSize="8" fill={T3} textAnchor="middle">Abr</text>
          <text x="450" y="172" fontFamily={MONO} fontSize="8" fill={T3} textAnchor="middle">May</text>
          <text x="535" y="172" fontFamily={MONO} fontSize="8" fill={T3} textAnchor="middle">Jun</text>
          <text x="660" y="85" fontFamily={MONO} fontSize="32" fill={R}>↑</text>
          <text x="656" y="110" fontFamily={MONO} fontSize="11" fill={R}>+38%</text>
          <text x="656" y="125" fontFamily={MONO} fontSize="8" fill={T3}>6 meses</text>
        </svg>
      ),
    },
    {
      title: "El diagnóstico — primero, visibilidad",
      text: "Dos semanas solo midiendo antes de tocar nada. Tagging de todos los recursos, análisis con Cost Explorer y Compute Optimizer. Sin datos reales, cualquier optimización es un disparo al aire.",
      svg: (
        <svg width="100%" height="100%" viewBox="0 0 760 200">
          <rect width="760" height="200" fill={BG}/>
          <text x="30" y="20" fontFamily={MONO} fontSize="9" fill={T3} letterSpacing="2">INVENTARIO DE RECURSOS</text>
          <rect x="30" y="30" width="360" height="34" rx="2" fill={BG2} stroke={R} strokeWidth="1"/>
          <rect x="30" y="30" width="4" height="34" fill={R} rx="2"/>
          <text x="44" y="47" fontFamily={MONO} fontSize="10" fill={T}>r5.2xlarge · EC2 prod</text>
          <text x="44" y="59" fontFamily={MONO} fontSize="8" fill={R}>uso avg: 12% CPU · sobredimensionado</text>
          <rect x="30" y="72" width="360" height="34" rx="2" fill={BG2} stroke={R} strokeWidth="1"/>
          <rect x="30" y="72" width="4" height="34" fill={R} rx="2"/>
          <text x="44" y="89" fontFamily={MONO} fontSize="10" fill={T}>db.r5.xlarge · RDS</text>
          <text x="44" y="101" fontFamily={MONO} fontSize="8" fill={R}>uso avg: 8% · sobredimensionado</text>
          <rect x="30" y="114" width="360" height="34" rx="2" fill={BG2} stroke={A} strokeWidth="1"/>
          <rect x="30" y="114" width="4" height="34" fill={A} rx="2"/>
          <text x="44" y="131" fontFamily={MONO} fontSize="10" fill={T}>EBS snapshot · 2TB</text>
          <text x="44" y="143" fontFamily={MONO} fontSize="8" fill={A}>sin instancia · 14 meses huérfano</text>
          <rect x="30" y="156" width="360" height="34" rx="2" fill={BG2} stroke={A} strokeWidth="1"/>
          <rect x="30" y="156" width="4" height="34" fill={A} rx="2"/>
          <text x="44" y="173" fontFamily={MONO} fontSize="10" fill={T}>ELB · load balancer</text>
          <text x="44" y="185" fontFamily={MONO} fontSize="8" fill={A}>0 requests / mes · huérfano</text>
          <rect x="420" y="30" width="310" height="160" rx="3" fill={BG2} stroke={B}/>
          <text x="440" y="55" fontFamily={MONO} fontSize="9" fill={T3}>AHORRO IDENTIFICADO</text>
          <text x="440" y="95" fontFamily={MONO} fontSize="40" fontWeight="500" fill={G}>$180K</text>
          <text x="440" y="112" fontFamily={MONO} fontSize="9" fill={T3}>por año · estimado</text>
          <line x1="440" y1="126" x2="710" y2="126" stroke={B} strokeWidth="1"/>
          <rect x="440" y="138" width="10" height="6" fill={R} rx="1"/>
          <text x="456" y="145" fontFamily={MONO} fontSize="8" fill={T2}>sobredimensionado</text>
          <rect x="440" y="152" width="10" height="6" fill={A} rx="1"/>
          <text x="456" y="159" fontFamily={MONO} fontSize="8" fill={T2}>huérfano</text>
          <rect x="440" y="166" width="10" height="6" fill={G} rx="1"/>
          <text x="456" y="173" fontFamily={MONO} fontSize="8" fill={T2}>on-demand convertible</text>
        </svg>
      ),
    },
    {
      title: "La ejecución — gobernanza en capas",
      text: "Cada cambio documentado. Tagging primero, porque sin visibilidad el resto no se puede medir. Rightsizing basado en 4 semanas de métricas reales. Reserved Instances solo para workloads predecibles.",
      svg: (
        <svg width="100%" height="100%" viewBox="0 0 760 200">
          <rect width="760" height="200" fill={BG}/>
          <text x="30" y="20" fontFamily={MONO} fontSize="9" fill={T3} letterSpacing="2">ACCIONES EJECUTADAS</text>
          <circle cx="46" cy="45" r="10" fill={GB} stroke={G} strokeWidth="1"/>
          <text x="42" y="49" fontFamily={MONO} fontSize="10" fill={G}>✓</text>
          <text x="64" y="42" fontFamily={MONO} fontSize="10" fill={T}>Tagging obligatorio por ambiente y equipo</text>
          <text x="64" y="54" fontFamily={MONO} fontSize="8" fill={T3}>visibilidad de costos por servicio · semana 1-2</text>
          <circle cx="46" cy="82" r="10" fill={GB} stroke={G} strokeWidth="1"/>
          <text x="42" y="86" fontFamily={MONO} fontSize="10" fill={G}>✓</text>
          <text x="64" y="79" fontFamily={MONO} fontSize="10" fill={T}>Rightsizing EC2 y RDS (métricas reales)</text>
          <text x="64" y="91" fontFamily={MONO} fontSize="8" fill={T3}>r5.2xlarge → t3.large · db.r5.xlarge → db.t3.medium</text>
          <circle cx="46" cy="119" r="10" fill={GB} stroke={G} strokeWidth="1"/>
          <text x="42" y="123" fontFamily={MONO} fontSize="10" fill={G}>✓</text>
          <text x="64" y="116" fontFamily={MONO} fontSize="10" fill={T}>Eliminación de recursos huérfanos</text>
          <text x="64" y="128" fontFamily={MONO} fontSize="8" fill={T3}>snapshots · load balancers · volúmenes sin instancia</text>
          <circle cx="46" cy="156" r="10" fill={GB} stroke={G} strokeWidth="1"/>
          <text x="42" y="160" fontFamily={MONO} fontSize="10" fill={G}>✓</text>
          <text x="64" y="153" fontFamily={MONO} fontSize="10" fill={T}>Reserved Instances + S3 Intelligent-Tiering</text>
          <text x="64" y="165" fontFamily={MONO} fontSize="8" fill={T3}>1 año · -40% vs on-demand en workloads estables</text>
          <circle cx="46" cy="189" r="10" fill={GB} stroke={G} strokeWidth="1"/>
          <text x="42" y="193" fontFamily={MONO} fontSize="10" fill={G}>✓</text>
          <text x="64" y="187" fontFamily={MONO} fontSize="10" fill={T}>Alertas de presupuesto por cuenta</text>
          <rect x="490" y="30" width="240" height="155" rx="3" fill={BG2} stroke={B}/>
          <text x="510" y="56" fontFamily={MONO} fontSize="9" fill={T3}>UPTIME DURANTE</text>
          <text x="510" y="68" fontFamily={MONO} fontSize="9" fill={T3}>LA OPTIMIZACIÓN</text>
          <text x="510" y="112" fontFamily={MONO} fontSize="48" fontWeight="500" fill={G}>100%</text>
          <line x1="510" y1="128" x2="710" y2="128" stroke={B} strokeWidth="1"/>
          <text x="510" y="148" fontFamily={MONO} fontSize="9" fill={T3}>sin incidentes · 90 días</text>
          <text x="510" y="163" fontFamily={MONO} fontSize="9" fill={T3}>cero rollbacks</text>
        </svg>
      ),
    },
    {
      title: "El resultado",
      text: "-58% en factura mensual. $180K ahorrados en el primer año. 100% de uptime durante toda la optimización. El equipo mantiene la gobernanza con el runbook que dejé.",
      svg: (
        <svg width="100%" height="100%" viewBox="0 0 760 200">
          <rect width="760" height="200" fill={BG}/>
          <text x="30" y="20" fontFamily={MONO} fontSize="9" fill={T3} letterSpacing="2">FACTURA AWS · ANTES Y DESPUÉS</text>
          <line x1="60" y1="30" x2="60" y2="155" stroke={B} strokeWidth="1"/>
          <line x1="60" y1="155" x2="520" y2="155" stroke={B} strokeWidth="1"/>
          <rect x="75" y="128" width="50" height="27" fill={B2} rx="2" opacity=".5"/>
          <rect x="133" y="115" width="50" height="40" fill={B2} rx="2" opacity=".5"/>
          <rect x="191" y="95" width="50" height="60" fill={B2} rx="2" opacity=".5"/>
          <line x1="267" y1="28" x2="267" y2="155" stroke={B} strokeWidth="1" strokeDasharray="4,3"/>
          <text x="262" y="24" fontFamily={MONO} fontSize="7" fill={T3} textAnchor="end">optimización</text>
          <polyline points="216,75 267,75 280,116" stroke={R} strokeWidth="1.5" fill="none" strokeDasharray="3,2"/>
          <rect x="280" y="116" width="50" height="39" fill={GB} stroke={G} strokeWidth="1" rx="2"/>
          <rect x="338" y="116" width="50" height="39" fill={GB} stroke={G} strokeWidth="1" rx="2"/>
          <rect x="396" y="116" width="50" height="39" fill={GB} stroke={G} strokeWidth="1" rx="2"/>
          <text x="100" y="172" fontFamily={MONO} fontSize="7" fill={T3} textAnchor="middle">Ene</text>
          <text x="158" y="172" fontFamily={MONO} fontSize="7" fill={T3} textAnchor="middle">Feb</text>
          <text x="216" y="172" fontFamily={MONO} fontSize="7" fill={T3} textAnchor="middle">Mar</text>
          <text x="305" y="172" fontFamily={MONO} fontSize="7" fill={G} textAnchor="middle">Abr</text>
          <text x="363" y="172" fontFamily={MONO} fontSize="7" fill={G} textAnchor="middle">May</text>
          <text x="421" y="172" fontFamily={MONO} fontSize="7" fill={G} textAnchor="middle">Jun</text>
          <text x="560" y="70" fontFamily={MONO} fontSize="52" fontWeight="500" fill={G}>-58%</text>
          <text x="560" y="92" fontFamily={MONO} fontSize="9" fill={T3}>factura mensual</text>
          <text x="560" y="115" fontFamily={MONO} fontSize="11" fill={T2}>$180K / año</text>
          <text x="560" y="135" fontFamily={MONO} fontSize="11" fill={T2}>100% uptime</text>
          <text x="560" y="155" fontFamily={MONO} fontSize="11" fill={T2}>90 días</text>
        </svg>
      ),
    },
  ],

  "licencias-farmaceuticas": [
    {
      title: "La dependencia",
      text: "LexComp: $20k/año para consultar bases de datos farmacéuticas. La plataforma dependía de esta licencia para cumplir PREIS en Puerto Rico. El equipo la asumía intocable.",
      svg: (
        <svg width="100%" height="100%" viewBox="0 0 760 200">
          <rect width="760" height="200" fill={BG}/>
          <rect x="30" y="30" width="280" height="140" rx="3" fill={BG2} stroke={B}/>
          <text x="50" y="58" fontFamily={MONO} fontSize="10" fill={T3}>Sistema de validación</text>
          <text x="50" y="75" fontFamily={MONO} fontSize="13" fontWeight="500" fill={T}>de medicamentos</text>
          <line x1="50" y1="88" x2="290" y2="88" stroke={B} strokeWidth="1"/>
          <text x="50" y="108" fontFamily={MONO} fontSize="9" fill={T3}>proveedor</text>
          <text x="50" y="122" fontFamily={MONO} fontSize="11" fill={T}>LexComp</text>
          <text x="50" y="143" fontFamily={MONO} fontSize="9" fill={T3}>costo</text>
          <text x="50" y="157" fontFamily={MONO} fontSize="16" fontWeight="500" fill={R}>$20,000 / año</text>
          <line x1="310" y1="100" x2="390" y2="100" stroke={B2} strokeWidth="1.5"/>
          <text x="340" y="95" fontFamily={MONO} fontSize="8" fill={T3}>depende</text>
          <rect x="390" y="60" width="200" height="80" rx="3" fill={BG2} stroke={B}/>
          <text x="410" y="90" fontFamily={MONO} fontSize="9" fill={T3}>compliance</text>
          <text x="410" y="108" fontFamily={MONO} fontSize="13" fontWeight="500" fill={T}>PREIS</text>
          <text x="410" y="126" fontFamily={MONO} fontSize="8" fill={T3}>Puerto Rico · Healthcare</text>
          <rect x="620" y="50" width="110" height="100" rx="3" fill={BG3} stroke={R} strokeWidth="1"/>
          <text x="640" y="80" fontFamily={MONO} fontSize="9" fill={T3}>riesgo si</text>
          <text x="640" y="95" fontFamily={MONO} fontSize="9" fill={T3}>se migra</text>
          <text x="640" y="115" fontFamily={MONO} fontSize="22" fill={R}>?</text>
          <text x="640" y="135" fontFamily={MONO} fontSize="8" fill={T3}>integridad</text>
          <text x="640" y="147" fontFamily={MONO} fontSize="8" fill={T3}>clínica</text>
        </svg>
      ),
    },
    {
      title: "El análisis de cobertura — antes de decidir",
      text: "El riesgo no era técnico, era clínico. Antes de proponer la migración: análisis de cobertura NLMI vs LexComp por categoría de medicamento. Si la cobertura era equivalente, la decisión era obvia.",
      svg: (
        <svg width="100%" height="100%" viewBox="0 0 760 200">
          <rect width="760" height="200" fill={BG}/>
          <text x="30" y="20" fontFamily={MONO} fontSize="9" fill={T3} letterSpacing="2">ANÁLISIS DE COBERTURA · NLMI VS LEXCOMP</text>
          <text x="150" y="42" fontFamily={MONO} fontSize="10" fill={T3} textAnchor="middle">LexComp</text>
          <text x="150" y="56" fontFamily={MONO} fontSize="9" fill={R}>$20k / año</text>
          <text x="400" y="42" fontFamily={MONO} fontSize="10" fill={T3} textAnchor="middle">NLMI</text>
          <text x="400" y="56" fontFamily={MONO} fontSize="9" fill={G}>$0 / año</text>
          {[
            { label: "PREIS requeridos", lx: 80, rx: 330, lw: 140, rw: 140 },
            { label: "Genéricos", lx: 80, rx: 330, lw: 140, rw: 140 },
            { label: "Marca", lx: 80, rx: 330, lw: 130, rw: 128 },
            { label: "Farmacología", lx: 80, rx: 330, lw: 140, rw: 140 },
          ].map(({ label, lx, rx, lw, rw }, i) => (
            <g key={i}>
              <text x="280" y={80 + i * 32} fontFamily={MONO} fontSize="8" fill={T3} textAnchor="middle">{label}</text>
              <rect x={lx} y={85 + i * 32} width={lw} height="8" rx="2" fill={B2}/>
              <rect x={lx} y={85 + i * 32} width={lw} height="8" rx="2" fill={R} opacity=".7"/>
              <rect x={rx} y={85 + i * 32} width={rw} height="8" rx="2" fill={B2}/>
              <rect x={rx} y={85 + i * 32} width={rw} height="8" rx="2" fill={G} opacity=".7"/>
            </g>
          ))}
          <rect x="540" y="55" width="190" height="120" rx="3" fill={BG2} stroke={G} strokeWidth="1"/>
          <text x="560" y="82" fontFamily={MONO} fontSize="9" fill={T3}>COBERTURA NLMI</text>
          <text x="560" y="108" fontFamily={MONO} fontSize="40" fontWeight="500" fill={G}>100%</text>
          <text x="560" y="126" fontFamily={MONO} fontSize="8" fill={T3}>en categorías PREIS</text>
          <line x1="560" y1="138" x2="710" y2="138" stroke={B} strokeWidth="1"/>
          <text x="560" y="156" fontFamily={MONO} fontSize="9" fill={G}>migración viable</text>
          <text x="560" y="170" fontFamily={MONO} fontSize="8" fill={T3}>riesgo clínico: ninguno</text>
        </svg>
      ),
    },
    {
      title: "Migración incremental con validación paralela",
      text: "Módulo a módulo. Ambos sistemas corriendo en paralelo antes de apagar LexComp. Tests de regresión clínica automatizados en cada paso. Sin presionar el switch de golpe.",
      svg: (
        <svg width="100%" height="100%" viewBox="0 0 760 200">
          <rect width="760" height="200" fill={BG}/>
          <text x="30" y="20" fontFamily={MONO} fontSize="9" fill={T3} letterSpacing="2">PLAN DE MIGRACIÓN · INCREMENTAL</text>
          {[
            { label: "Módulo validación básica", done: true, y: 38 },
            { label: "Módulo interacciones", done: true, y: 68 },
            { label: "Módulo contraindicaciones", done: true, y: 98 },
            { label: "Módulo genéricos", done: true, y: 128 },
            { label: "Validación paralela · 2 semanas", done: true, y: 158, accent: true },
          ].map(({ label, done, y, accent }) => (
            <g key={y}>
              <circle cx="46" cy={y + 8} r="9" fill={done ? GB : BG2} stroke={accent ? G : done ? G : B} strokeWidth="1"/>
              <text x="42" y={y + 12} fontFamily={MONO} fontSize="9" fill={accent ? G : done ? G : T3}>{done ? "✓" : "○"}</text>
              <text x="64" y={y + 12} fontFamily={MONO} fontSize="10" fill={accent ? G : T}>{label}</text>
              {done && <rect x="64" y={y + 18} width={accent ? 200 : 160} height="4" rx="2" fill={accent ? G : GD} opacity=".6"/>}
            </g>
          ))}
          <rect x="430" y="30" width="300" height="155" rx="3" fill={BG2} stroke={B}/>
          <text x="450" y="55" fontFamily={MONO} fontSize="9" fill={T3}>VALIDACIÓN PARALELA</text>
          <text x="450" y="75" fontFamily={MONO} fontSize="9" fill={T2}>LexComp activo</text>
          <text x="450" y="90" fontFamily={MONO} fontSize="9" fill={T2}>NLMI activo</text>
          <text x="450" y="110" fontFamily={MONO} fontSize="8" fill={T3}>misma consulta · ambos sistemas</text>
          <text x="450" y="124" fontFamily={MONO} fontSize="8" fill={T3}>comparación automatizada</text>
          <line x1="450" y1="136" x2="710" y2="136" stroke={B} strokeWidth="1"/>
          <text x="450" y="155" fontFamily={MONO} fontSize="9" fill={T3}>INCIDENCIAS CLÍNICAS</text>
          <text x="450" y="175" fontFamily={MONO} fontSize="28" fontWeight="500" fill={G}>0</text>
        </svg>
      ),
    },
    {
      title: "El resultado",
      text: "LexComp eliminado. $20k/año en ahorro directo. 100% de cumplimiento PREIS. Cero incidencias clínicas durante la migración ni después. Suite de tests de regresión clínica entregada al equipo.",
      svg: (
        <svg width="100%" height="100%" viewBox="0 0 760 200">
          <rect width="760" height="200" fill={BG}/>
          <rect x="30" y="25" width="330" height="155" rx="3" fill={BG2} stroke={B}/>
          <text x="50" y="50" fontFamily={MONO} fontSize="9" fill={T3}>ANTES</text>
          <text x="50" y="70" fontFamily={MONO} fontSize="12" fill={T}>LexComp</text>
          <text x="50" y="90" fontFamily={MONO} fontSize="24" fontWeight="500" fill={R}>$20,000</text>
          <text x="50" y="106" fontFamily={MONO} fontSize="9" fill={T3}>por año</text>
          <line x1="50" y1="120" x2="340" y2="120" stroke={B} strokeWidth="1"/>
          <text x="50" y="142" fontFamily={MONO} fontSize="9" fill={T3}>cobertura PREIS</text>
          <text x="50" y="160" fontFamily={MONO} fontSize="9" fill={T2}>100%</text>
          <text x="200" y="108" fontFamily={MONO} fontSize="22" fill={B2} textAnchor="middle">→</text>
          <rect x="400" y="25" width="330" height="155" rx="3" fill={GB} stroke={G} strokeWidth="1"/>
          <text x="420" y="50" fontFamily={MONO} fontSize="9" fill={G}>DESPUÉS</text>
          <text x="420" y="70" fontFamily={MONO} fontSize="12" fill={T}>NLMI</text>
          <text x="420" y="90" fontFamily={MONO} fontSize="24" fontWeight="500" fill={G}>$0</text>
          <text x="420" y="106" fontFamily={MONO} fontSize="9" fill={T3}>por año</text>
          <line x1="420" y1="120" x2="710" y2="120" stroke={GD} strokeWidth="1"/>
          <text x="420" y="142" fontFamily={MONO} fontSize="9" fill={T3}>cobertura PREIS</text>
          <text x="420" y="160" fontFamily={MONO} fontSize="9" fill={G}>100%</text>
          <text x="420" y="175" fontFamily={MONO} fontSize="8" fill={T3}>0 incidencias clínicas</text>
        </svg>
      ),
    },
  ],

  "lab-middleware": [
    {
      title: "El flujo original",
      text: "El laboratorio entregaba resultados por fax. Tiempo promedio: 6 horas desde el análisis hasta que el médico lo veía. En un entorno de salud, 6 horas es tiempo que no se tiene.",
      svg: (
        <svg width="100%" height="100%" viewBox="0 0 760 200">
          <rect width="760" height="200" fill={BG}/>
          <text x="30" y="20" fontFamily={MONO} fontSize="9" fill={T3} letterSpacing="2">FLUJO ORIGINAL · RESULTADOS CLÍNICOS</text>
          <rect x="30" y="50" width="140" height="80" rx="3" fill={BG2} stroke={B}/>
          <text x="100" y="88" fontFamily={MONO} fontSize="10" fill={T2} textAnchor="middle">Lab</text>
          <text x="100" y="104" fontFamily={MONO} fontSize="8" fill={T3} textAnchor="middle">sistema cerrado</text>
          <text x="180" y="95" fontFamily={MONO} fontSize="12" fill={B2}>────</text>
          <text x="186" y="85" fontFamily={MONO} fontSize="8" fill={T3}>HL7 fax</text>
          <rect x="260" y="50" width="130" height="80" rx="3" fill={BG2} stroke={B}/>
          <text x="325" y="80" fontFamily={MONO} fontSize="22" fill={T3} textAnchor="middle">📠</text>
          <text x="325" y="102" fontFamily={MONO} fontSize="9" fill={T3} textAnchor="middle">proceso</text>
          <text x="325" y="114" fontFamily={MONO} fontSize="9" fill={T3} textAnchor="middle">manual</text>
          <rect x="230" y="145" width="190" height="36" rx="2" fill={BG3} stroke={R} strokeWidth="1"/>
          <text x="325" y="163" fontFamily={MONO} fontSize="10" fill={R} textAnchor="middle">⏱ 6 horas de espera</text>
          <text x="400" y="95" fontFamily={MONO} fontSize="12" fill={B2}>────</text>
          <rect x="440" y="50" width="140" height="80" rx="3" fill={BG2} stroke={B}/>
          <text x="510" y="88" fontFamily={MONO} fontSize="10" fill={T2} textAnchor="middle">Médico</text>
          <text x="510" y="104" fontFamily={MONO} fontSize="8" fill={T3} textAnchor="middle">recibe resultado</text>
          <rect x="620" y="50" width="110" height="80" rx="3" fill={BG3} stroke={R} strokeWidth="1"/>
          <text x="675" y="80" fontFamily={MONO} fontSize="9" fill={R} textAnchor="middle">decisión</text>
          <text x="675" y="95" fontFamily={MONO} fontSize="9" fill={R} textAnchor="middle">clínica</text>
          <text x="675" y="112" fontFamily={MONO} fontSize="20" fill={R} textAnchor="middle">⚠</text>
        </svg>
      ),
    },
    {
      title: "El constraint — el sistema no se puede tocar",
      text: "El sistema de laboratorio era un producto de terceros, cerrado. Sin API, sin posibilidad de modificación. La opción obvia (reemplazarlo) implicaba meses y un presupuesto que no existía.",
      svg: (
        <svg width="100%" height="100%" viewBox="0 0 760 200">
          <rect width="760" height="200" fill={BG}/>
          <rect x="200" y="40" width="360" height="120" rx="3" fill={BG2} stroke={R} strokeWidth="1.5"/>
          <text x="380" y="78" fontFamily={MONO} fontSize="13" fill={T} textAnchor="middle">Sistema de Laboratorio</text>
          <text x="380" y="96" fontFamily={MONO} fontSize="9" fill={T3} textAnchor="middle">producto de terceros · certificado</text>
          <rect x="240" y="108" width="280" height="32" rx="2" fill={BG3} stroke={R} strokeWidth="1"/>
          <text x="380" y="124" fontFamily={MONO} fontSize="10" fill={R} textAnchor="middle">CERRADO · SIN API</text>
          <text x="380" y="136" fontFamily={MONO} fontSize="8" fill={T3} textAnchor="middle">no modificable</text>
          <text x="30" y="95" fontFamily={MONO} fontSize="11" fill={T3}>Opción A:</text>
          <text x="30" y="110" fontFamily={MONO} fontSize="10" fill={R}>reemplazar sistema</text>
          <text x="30" y="125" fontFamily={MONO} fontSize="8" fill={T3}>meses de trabajo</text>
          <text x="30" y="138" fontFamily={MONO} fontSize="8" fill={T3}>presupuesto alto</text>
          <text x="30" y="152" fontFamily={MONO} fontSize="8" fill={T3}>riesgo de certificación</text>
          <text x="600" y="95" fontFamily={MONO} fontSize="11" fill={G}>Opción B:</text>
          <text x="600" y="110" fontFamily={MONO} fontSize="10" fill={G}>escuchar sin tocar</text>
          <text x="600" y="125" fontFamily={MONO} fontSize="8" fill={T3}>HL7 v2.x sobre TCP</text>
          <text x="600" y="138" fontFamily={MONO} fontSize="8" fill={T3}>listener pasivo</text>
          <text x="600" y="152" fontFamily={MONO} fontSize="8" fill={T3}>0 riesgo de certificación</text>
          <text x="380" y="185" fontFamily={MONO} fontSize="9" fill={G} textAnchor="middle">→ Opción B</text>
        </svg>
      ),
    },
    {
      title: "El interceptor pasivo — sin tocar el sistema",
      text: "El sistema emite HL7 v2.x sobre TCP. Un listener pasivo lo intercepta. El sistema de laboratorio no sabe que está siendo escuchado. Sin modificar nada del sistema existente.",
      svg: (
        <svg width="100%" height="100%" viewBox="0 0 760 200">
          <rect width="760" height="200" fill={BG}/>
          <text x="30" y="20" fontFamily={MONO} fontSize="9" fill={T3} letterSpacing="2">ARQUITECTURA · MIDDLEWARE HL7</text>
          <rect x="20" y="60" width="130" height="60" rx="3" fill={BG2} stroke={B}/>
          <text x="85" y="88" fontFamily={MONO} fontSize="9" fill={T2} textAnchor="middle">Lab System</text>
          <text x="85" y="103" fontFamily={MONO} fontSize="8" fill={T3} textAnchor="middle">HL7 v2.x · TCP</text>
          <text x="160" y="95" fontFamily={MONO} fontSize="8" fill={T3}>───────</text>
          <text x="168" y="83" fontFamily={MONO} fontSize="8" fill={G}>HL7 stream</text>
          <rect x="255" y="40" width="240" height="100" rx="3" fill={BG2} stroke={G} strokeWidth="1"/>
          <text x="375" y="65" fontFamily={MONO} fontSize="9" fill={G} textAnchor="middle">Middleware</text>
          <text x="375" y="85" fontFamily={MONO} fontSize="8" fill={T3} textAnchor="middle">TCP listener</text>
          <text x="375" y="100" fontFamily={MONO} fontSize="8" fill={T3} textAnchor="middle">HL7 parser (OBR · OBX · PID)</text>
          <text x="375" y="115" fontFamily={MONO} fontSize="8" fill={T3} textAnchor="middle">→ JSON · webhook</text>
          <text x="505" y="88" fontFamily={MONO} fontSize="8" fill={T3}>────</text>
          <text x="507" y="78" fontFamily={MONO} fontSize="8" fill={G}>REST API</text>
          <rect x="580" y="60" width="130" height="60" rx="3" fill={BG2} stroke={B}/>
          <text x="645" y="88" fontFamily={MONO} fontSize="9" fill={T2} textAnchor="middle">Médico</text>
          <text x="645" y="103" fontFamily={MONO} fontSize="8" fill={G} textAnchor="middle">real-time</text>
          <rect x="255" y="155" width="240" height="30" rx="2" fill={BG3} stroke={B}/>
          <text x="375" y="168" fontFamily={MONO} fontSize="8" fill={T3} textAnchor="middle">AWS Lambda · escala automáticamente</text>
          <text x="375" y="180" fontFamily={MONO} fontSize="8" fill={T3} textAnchor="middle">log de auditoría completo</text>
          <rect x="20" y="145" width="130" height="30" rx="2" fill={BG3} stroke={B}/>
          <text x="85" y="158" fontFamily={MONO} fontSize="8" fill={T3} textAnchor="middle">sin cambios en</text>
          <text x="85" y="170" fontFamily={MONO} fontSize="8" fill={T3} textAnchor="middle">el sistema original</text>
        </svg>
      ),
    },
    {
      title: "El resultado",
      text: "De 6 horas a menos de 90 minutos. -70% en tiempo de entrega de resultados clínicos. El sistema de laboratorio no cambió ni una línea. 99.9% de uptime del middleware desde el lanzamiento.",
      svg: (
        <svg width="100%" height="100%" viewBox="0 0 760 200">
          <rect width="760" height="200" fill={BG}/>
          <rect x="30" y="30" width="300" height="145" rx="3" fill={BG2} stroke={B}/>
          <text x="50" y="58" fontFamily={MONO} fontSize="9" fill={T3}>ANTES</text>
          <text x="50" y="100" fontFamily={MONO} fontSize="52" fontWeight="500" fill={R} letterSpacing="-2">6h</text>
          <text x="50" y="122" fontFamily={MONO} fontSize="9" fill={T3}>tiempo de resultados</text>
          <text x="50" y="145" fontFamily={MONO} fontSize="8" fill={T3}>proceso manual · fax</text>
          <text x="50" y="162" fontFamily={MONO} fontSize="8" fill={T3}>sin visibilidad en tránsito</text>
          <text x="200" y="110" fontFamily={MONO} fontSize="24" fill={G} textAnchor="middle">→</text>
          <rect x="350" y="30" width="380" height="145" rx="3" fill={GB} stroke={G} strokeWidth="1"/>
          <text x="370" y="58" fontFamily={MONO} fontSize="9" fill={G}>DESPUÉS</text>
          <text x="370" y="100" fontFamily={MONO} fontSize="52" fontWeight="500" fill={G} letterSpacing="-2">90m</text>
          <text x="370" y="122" fontFamily={MONO} fontSize="9" fill={T3}>tiempo de resultados</text>
          <text x="370" y="145" fontFamily={MONO} fontSize="8" fill={T3}>real-time · API REST</text>
          <text x="370" y="162" fontFamily={MONO} fontSize="8" fill={T3}>auditoría completa</text>
          <text x="560" y="58" fontFamily={MONO} fontSize="9" fill={T3}>reducción</text>
          <text x="560" y="80" fontFamily={MONO} fontSize="28" fontWeight="500" fill={G}>-70%</text>
          <text x="560" y="110" fontFamily={MONO} fontSize="9" fill={T3}>uptime</text>
          <text x="560" y="132" fontFamily={MONO} fontSize="22" fontWeight="500" fill={G}>99.9%</text>
          <text x="560" y="160" fontFamily={MONO} fontSize="8" fill={T3}>0 cambios en</text>
          <text x="560" y="173" fontFamily={MONO} fontSize="8" fill={T3}>sistema legacy</text>
        </svg>
      ),
    },
  ],

  "gov-tech-preis": [
    {
      title: "El proceso manual",
      text: "Cada semana: exportar datos a Excel, formatear manualmente para PREIS, enviar por correo. 4 horas de trabajo repetitivo sin auditoría. Sin registro de qué se envió ni cuándo.",
      svg: (
        <svg width="100%" height="100%" viewBox="0 0 760 200">
          <rect width="760" height="200" fill={BG}/>
          <text x="30" y="20" fontFamily={MONO} fontSize="9" fill={T3} letterSpacing="2">FLUJO ACTUAL · SEMANAL</text>
          <rect x="30" y="45" width="150" height="80" rx="3" fill={BG2} stroke={B}/>
          <text x="105" y="82" fontFamily={MONO} fontSize="9" fill={T2} textAnchor="middle">Base de datos</text>
          <text x="105" y="97" fontFamily={MONO} fontSize="9" fill={T2} textAnchor="middle">inmunizaciones</text>
          <text x="190" y="90" fontFamily={MONO} fontSize="10" fill={B2}>────</text>
          <text x="192" y="80" fontFamily={MONO} fontSize="8" fill={T3}>export</text>
          <rect x="255" y="45" width="130" height="80" rx="3" fill={BG2} stroke={A} strokeWidth="1"/>
          <text x="320" y="82" fontFamily={MONO} fontSize="9" fill={T2} textAnchor="middle">Excel</text>
          <text x="320" y="97" fontFamily={MONO} fontSize="9" fill={A} textAnchor="middle">manual</text>
          <text x="395" y="90" fontFamily={MONO} fontSize="10" fill={B2}>────</text>
          <text x="395" y="80" fontFamily={MONO} fontSize="8" fill={T3}>correo</text>
          <rect x="450" y="45" width="130" height="80" rx="3" fill={BG2} stroke={B}/>
          <text x="515" y="82" fontFamily={MONO} fontSize="9" fill={T2} textAnchor="middle">Gobierno</text>
          <text x="515" y="97" fontFamily={MONO} fontSize="9" fill={T2} textAnchor="middle">Puerto Rico</text>
          <rect x="610" y="45" width="120" height="80" rx="3" fill={BG3} stroke={R} strokeWidth="1"/>
          <text x="670" y="78" fontFamily={MONO} fontSize="9" fill={R} textAnchor="middle">sin</text>
          <text x="670" y="92" fontFamily={MONO} fontSize="9" fill={R} textAnchor="middle">auditoría</text>
          <text x="670" y="112" fontFamily={MONO} fontSize="20" fill={R} textAnchor="middle">⚠</text>
          <rect x="170" y="148" width="280" height="35" rx="2" fill={BG3} stroke={R} strokeWidth="1"/>
          <text x="310" y="166" fontFamily={MONO} fontSize="10" fill={R} textAnchor="middle">⏱ 4 horas / semana</text>
          <text x="310" y="178" fontFamily={MONO} fontSize="8" fill={T3} textAnchor="middle">trabajo manual · repetitivo · error-prone</text>
        </svg>
      ),
    },
    {
      title: "El riesgo — compliance sin margen",
      text: "El sistema PREIS cambia sin aviso. Un reporte rechazado por error de formato tiene consecuencias regulatorias. Sin validación previa, el error se descubre en el gobierno, no internamente.",
      svg: (
        <svg width="100%" height="100%" viewBox="0 0 760 200">
          <rect width="760" height="200" fill={BG}/>
          <rect x="80" y="30" width="280" height="140" rx="3" fill={BG2} stroke={R} strokeWidth="1"/>
          <text x="220" y="58" fontFamily={MONO} fontSize="10" fill={T} textAnchor="middle">Excel manual</text>
          <text x="220" y="80" fontFamily={MONO} fontSize="8" fill={T3} textAnchor="middle">campo: fecha_inmunización</text>
          <text x="220" y="95" fontFamily={MONO} fontSize="8" fill={T3} textAnchor="middle">formato esperado: YYYY-MM-DD</text>
          <rect x="100" y="108" width="240" height="28" rx="2" fill={BG3} stroke={R} strokeWidth="1"/>
          <text x="220" y="124" fontFamily={MONO} fontSize="9" fill={R} textAnchor="middle">error: formato incorrecto</text>
          <text x="220" y="135" fontFamily={MONO} fontSize="8" fill={T3} textAnchor="middle">MM/DD/YYYY ≠ YYYY-MM-DD</text>
          <text x="220" y="158" fontFamily={MONO} fontSize="8" fill={T3} textAnchor="middle">descubierto en el gobierno</text>
          <text x="220" y="170" fontFamily={MONO} fontSize="8" fill={R} textAnchor="middle">no internamente</text>
          <rect x="400" y="30" width="330" height="140" rx="3" fill={BG2} stroke={B}/>
          <text x="565" y="58" fontFamily={MONO} fontSize="9" fill={T3} textAnchor="middle">CONSECUENCIAS</text>
          <text x="420" y="80" fontFamily={MONO} fontSize="9" fill={R}>✗  reporte rechazado</text>
          <text x="420" y="100" fontFamily={MONO} fontSize="9" fill={R}>✗  compliance gap documentado</text>
          <text x="420" y="120" fontFamily={MONO} fontSize="9" fill={R}>✗  sin historial de envíos</text>
          <text x="420" y="140" fontFamily={MONO} fontSize="9" fill={R}>✗  sin evidencia de lo enviado</text>
          <text x="420" y="160" fontFamily={MONO} fontSize="9" fill={R}>✗  riesgo regulatorio acumulado</text>
        </svg>
      ),
    },
    {
      title: "La automatización con validación previa",
      text: "El rechazo debe ocurrir internamente, no en el gobierno. Validación automática contra el esquema PREIS antes de cada envío. Auditoría completa desde el primer día, no como un extra.",
      svg: (
        <svg width="100%" height="100%" viewBox="0 0 760 200">
          <rect width="760" height="200" fill={BG}/>
          <text x="30" y="20" fontFamily={MONO} fontSize="9" fill={T3} letterSpacing="2">FLUJO AUTOMATIZADO · CON VALIDACIÓN</text>
          <rect x="20" y="50" width="120" height="60" rx="3" fill={BG2} stroke={B}/>
          <text x="80" y="80" fontFamily={MONO} fontSize="9" fill={T2} textAnchor="middle">DB</text>
          <text x="80" y="95" fontFamily={MONO} fontSize="8" fill={T3} textAnchor="middle">inmunizaciones</text>
          <text x="150" y="84" fontFamily={MONO} fontSize="8" fill={T3}>───</text>
          <rect x="192" y="40" width="160" height="80" rx="3" fill={BG2} stroke={G} strokeWidth="1"/>
          <text x="272" y="65" fontFamily={MONO} fontSize="9" fill={G} textAnchor="middle">Validación</text>
          <text x="272" y="82" fontFamily={MONO} fontSize="8" fill={T3} textAnchor="middle">esquema PREIS</text>
          <text x="272" y="96" fontFamily={MONO} fontSize="8" fill={T3} textAnchor="middle">falla internamente</text>
          <text x="272" y="110" fontFamily={MONO} fontSize="8" fill={G} textAnchor="middle">no en el gobierno</text>
          <text x="360" y="84" fontFamily={MONO} fontSize="8" fill={T3}>───</text>
          <rect x="392" y="50" width="130" height="60" rx="3" fill={BG2} stroke={G} strokeWidth="1"/>
          <text x="457" y="80" fontFamily={MONO} fontSize="9" fill={T2} textAnchor="middle">Envío</text>
          <text x="457" y="95" fontFamily={MONO} fontSize="8" fill={G} textAnchor="middle">automático</text>
          <text x="530" y="84" fontFamily={MONO} fontSize="8" fill={T3}>───</text>
          <rect x="562" y="50" width="130" height="60" rx="3" fill={BG2} stroke={B}/>
          <text x="627" y="80" fontFamily={MONO} fontSize="9" fill={T2} textAnchor="middle">PREIS</text>
          <text x="627" y="95" fontFamily={MONO} fontSize="8" fill={T3} textAnchor="middle">Gobierno PR</text>
          <rect x="192" y="138" width="500" height="40" rx="2" fill={BG2} stroke={B}/>
          <text x="220" y="155" fontFamily={MONO} fontSize="9" fill={T3}>Auditoría:</text>
          <text x="300" y="155" fontFamily={MONO} fontSize="9" fill={G}>2025-05-02 · ENVIADO ✓</text>
          <text x="300" y="170" fontFamily={MONO} fontSize="9" fill={G}>2025-04-25 · ENVIADO ✓</text>
          <text x="560" y="155" fontFamily={MONO} fontSize="9" fill={T3}>historial</text>
          <text x="560" y="170" fontFamily={MONO} fontSize="9" fill={T3}>completo</text>
        </svg>
      ),
    },
    {
      title: "El resultado",
      text: "4 horas semanales eliminadas. 100% de compliance PREIS desde el primer envío automatizado. Cero reportes rechazados por errores de formato. Auditoría completa de cada envío.",
      svg: (
        <svg width="100%" height="100%" viewBox="0 0 760 200">
          <rect width="760" height="200" fill={BG}/>
          <rect x="30" y="25" width="200" height="155" rx="3" fill={BG2} stroke={B}/>
          <text x="130" y="50" fontFamily={MONO} fontSize="9" fill={T3} textAnchor="middle">TIEMPO MANUAL</text>
          <text x="130" y="100" fontFamily={MONO} fontSize="44" fontWeight="500" fill={R} textAnchor="middle">4h</text>
          <text x="130" y="122" fontFamily={MONO} fontSize="9" fill={T3} textAnchor="middle">por semana</text>
          <text x="130" y="145" fontFamily={MONO} fontSize="9" fill={T3} textAnchor="middle">→</text>
          <text x="130" y="165" fontFamily={MONO} fontSize="24" fontWeight="500" fill={G} textAnchor="middle">0h</text>
          <rect x="250" y="25" width="220" height="155" rx="3" fill={BG2} stroke={B}/>
          <text x="360" y="50" fontFamily={MONO} fontSize="9" fill={T3} textAnchor="middle">COMPLIANCE</text>
          <text x="360" y="105" fontFamily={MONO} fontSize="44" fontWeight="500" fill={G} textAnchor="middle">100%</text>
          <text x="360" y="127" fontFamily={MONO} fontSize="9" fill={T3} textAnchor="middle">PREIS · desde día 1</text>
          <text x="360" y="160" fontFamily={MONO} fontSize="9" fill={T3} textAnchor="middle">0 reportes rechazados</text>
          <rect x="490" y="25" width="240" height="155" rx="3" fill={BG2} stroke={B}/>
          <text x="610" y="50" fontFamily={MONO} fontSize="9" fill={T3} textAnchor="middle">AUDITORÍA</text>
          <text x="510" y="80" fontFamily={MONO} fontSize="8" fill={G}>✓  2025-05-02 · Enviado</text>
          <text x="510" y="96" fontFamily={MONO} fontSize="8" fill={G}>✓  2025-04-25 · Enviado</text>
          <text x="510" y="112" fontFamily={MONO} fontSize="8" fill={G}>✓  2025-04-18 · Enviado</text>
          <text x="510" y="128" fontFamily={MONO} fontSize="8" fill={G}>✓  2025-04-11 · Enviado</text>
          <text x="510" y="155" fontFamily={MONO} fontSize="8" fill={T3}>historial completo · trazable</text>
          <text x="510" y="168" fontFamily={MONO} fontSize="8" fill={T3}>sin intervención manual</text>
        </svg>
      ),
    },
  ],

  "tcuida-iot": [
    {
      title: "El scope — ecosistema completo en 3 semanas",
      text: "Wearables BLE, GPS en tiempo real, dashboard web para familiares y app móvil. Desde cero. El riesgo real no era técnico: era que si yo me iba, el equipo no podría continuar.",
      svg: (
        <svg width="100%" height="100%" viewBox="0 0 760 200">
          <rect width="760" height="200" fill={BG}/>
          <text x="30" y="20" fontFamily={MONO} fontSize="9" fill={T3} letterSpacing="2">SCOPE · T-CUIDA</text>
          {[
            { x: 30, y: 45, label: "Wearable", sub: "BLE · sensores", color: B },
            { x: 200, y: 45, label: "GPS", sub: "real-time", color: B },
            { x: 370, y: 45, label: "Dashboard web", sub: "Next.js · WebSocket", color: B },
            { x: 540, y: 45, label: "App móvil", sub: "iOS + Android", color: B },
          ].map(({ x, y, label, sub, color }) => (
            <g key={x}>
              <rect x={x} y={y} width="150" height="70" rx="3" fill={BG2} stroke={color}/>
              <text x={x + 75} y={y + 35} fontFamily={MONO} fontSize="10" fill={T2} textAnchor="middle">{label}</text>
              <text x={x + 75} y={y + 52} fontFamily={MONO} fontSize="8" fill={T3} textAnchor="middle">{sub}</text>
            </g>
          ))}
          <rect x="30" y="140" width="700" height="40" rx="2" fill={BG3} stroke={A} strokeWidth="1"/>
          <text x="380" y="158" fontFamily={MONO} fontSize="9" fill={A} textAnchor="middle">plazo: 3 semanas · stack: desde cero</text>
          <text x="380" y="172" fontFamily={MONO} fontSize="8" fill={T3} textAnchor="middle">el equipo debe poder continuar sin mí desde el primer día</text>
        </svg>
      ),
    },
    {
      title: "Las decisiones de arquitectura",
      text: "Flutter para iOS + Android en una base de código. CI/CD configurado en semana 1 para que el equipo desplegara sin miedo. ADRs escritos desde el día uno, no al final.",
      svg: (
        <svg width="100%" height="100%" viewBox="0 0 760 200">
          <rect width="760" height="200" fill={BG}/>
          <text x="30" y="20" fontFamily={MONO} fontSize="9" fill={T3} letterSpacing="2">STACK Y DECISIONES</text>
          <rect x="30" y="35" width="160" height="55" rx="3" fill={BG2} stroke={G} strokeWidth="1"/>
          <text x="110" y="60" fontFamily={MONO} fontSize="10" fill={G} textAnchor="middle">Flutter</text>
          <text x="110" y="76" fontFamily={MONO} fontSize="8" fill={T3} textAnchor="middle">iOS + Android · 1 codebase</text>
          <text x="110" y="88" fontFamily={MONO} fontSize="8" fill={T3} textAnchor="middle">menos duplicación</text>
          <rect x="210" y="35" width="160" height="55" rx="3" fill={BG2} stroke={G} strokeWidth="1"/>
          <text x="290" y="60" fontFamily={MONO} fontSize="10" fill={G} textAnchor="middle">Next.js</text>
          <text x="290" y="76" fontFamily={MONO} fontSize="8" fill={T3} textAnchor="middle">dashboard web</text>
          <text x="290" y="88" fontFamily={MONO} fontSize="8" fill={T3} textAnchor="middle">WebSocket real-time</text>
          <rect x="390" y="35" width="160" height="55" rx="3" fill={BG2} stroke={G} strokeWidth="1"/>
          <text x="470" y="60" fontFamily={MONO} fontSize="10" fill={G} textAnchor="middle">Node.js</text>
          <text x="470" y="76" fontFamily={MONO} fontSize="8" fill={T3} textAnchor="middle">backend · bridge TCP</text>
          <text x="470" y="88" fontFamily={MONO} fontSize="8" fill={T3} textAnchor="middle">AWS Lambda</text>
          <rect x="570" y="35" width="160" height="55" rx="3" fill={BG2} stroke={G} strokeWidth="1"/>
          <text x="650" y="60" fontFamily={MONO} fontSize="10" fill={G} textAnchor="middle">CI/CD</text>
          <text x="650" y="76" fontFamily={MONO} fontSize="8" fill={T3} textAnchor="middle">semana 1</text>
          <text x="650" y="88" fontFamily={MONO} fontSize="8" fill={T3} textAnchor="middle">deploys sin miedo</text>
          <rect x="30" y="110" width="700" height="70" rx="3" fill={BG2} stroke={B}/>
          <text x="50" y="132" fontFamily={MONO} fontSize="9" fill={T3}>ADR #01</text>
          <text x="50" y="148" fontFamily={MONO} fontSize="9" fill={T}>Flutter sobre React Native: una base de código, menor superficie de bugs</text>
          <text x="50" y="164" fontFamily={MONO} fontSize="8" fill={T3}>contexto: plazo de 3 semanas · constraint: 1 developer principal</text>
          <text x="50" y="178" fontFamily={MONO} fontSize="8" fill={G}>decisión: Flutter · tradeoff aceptado: curva de aprendizaje del equipo</text>
        </svg>
      ),
    },
    {
      title: "12 ADRs — la documentación como entrega",
      text: "Cada decisión de arquitectura documentada en el momento en que se tomó, con el contexto que la motivó. No al final, sino mientras se construía. El equipo tiene el razonamiento, no solo el código.",
      svg: (
        <svg width="100%" height="100%" viewBox="0 0 760 200">
          <rect width="760" height="200" fill={BG}/>
          <text x="30" y="20" fontFamily={MONO} fontSize="9" fill={T3} letterSpacing="2">ARCHITECTURE DECISION RECORDS</text>
          {[
            { n: "01", text: "Flutter vs React Native", y: 35 },
            { n: "02", text: "WebSocket para GPS real-time", y: 62 },
            { n: "03", text: "Bridge TCP/IP para wearables legacy", y: 89 },
            { n: "04", text: "CI/CD desde semana 1", y: 116 },
            { n: "05", text: "Firebase Auth sobre JWT propio", y: 143 },
            { n: "06", text: "AWS Lambda para escalabilidad", y: 170 },
          ].map(({ n, text, y }) => (
            <g key={n}>
              <rect x="30" y={y} width="400" height="22" rx="2" fill={BG2} stroke={B}/>
              <text x="45" y={y + 14} fontFamily={MONO} fontSize="9" fill={T3}>ADR #{n}</text>
              <text x="100" y={y + 14} fontFamily={MONO} fontSize="9" fill={T2}>{text}</text>
              <circle cx="445" cy={y + 11} r="5" fill={GB} stroke={G} strokeWidth="1"/>
              <text x="441" y={y + 14} fontFamily={MONO} fontSize="7" fill={G}>✓</text>
            </g>
          ))}
          <rect x="460" y="35" width="270" height="155" rx="3" fill={BG2} stroke={B}/>
          <text x="480" y="60" fontFamily={MONO} fontSize="9" fill={T3}>TOTAL ADRs</text>
          <text x="480" y="100" fontFamily={MONO} fontSize="52" fontWeight="500" fill={G}>12</text>
          <text x="480" y="122" fontFamily={MONO} fontSize="8" fill={T3}>escritos durante el desarrollo</text>
          <line x1="480" y1="135" x2="710" y2="135" stroke={B} strokeWidth="1"/>
          <text x="480" y="155" fontFamily={MONO} fontSize="8" fill={T3}>onboarding del siguiente dev</text>
          <text x="480" y="172" fontFamily={MONO} fontSize="18" fontWeight="500" fill={G}>48h</text>
        </svg>
      ),
    },
    {
      title: "El resultado",
      text: "De cero a App Store + Play Store en 3 semanas. Dashboard operacional. El siguiente developer estuvo productivo en 48 horas. El equipo añadió features sin consultar conmigo.",
      svg: (
        <svg width="100%" height="100%" viewBox="0 0 760 200">
          <rect width="760" height="200" fill={BG}/>
          {[
            { x: 30, val: "3", unit: "semanas", sub: "de cero a producción", color: G },
            { x: 215, val: "48h", unit: "", sub: "onboarding nuevo dev", color: G },
            { x: 400, val: "+400%", unit: "", sub: "throughput IoT bridge", color: G },
            { x: 560, val: "100%", unit: "", sub: "ownership del equipo", color: G },
          ].map(({ x, val, unit, sub, color }) => (
            <g key={x}>
              <rect x={x} y="30" width="170" height="140" rx="3" fill={BG2} stroke={B}/>
              <text x={x + 85} y={unit ? 90 : 100} fontFamily={MONO} fontSize={val.length > 3 ? 26 : 36} fontWeight="500" fill={color} textAnchor="middle">{val}</text>
              {unit && <text x={x + 85} y={108} fontFamily={MONO} fontSize="10" fill={T3} textAnchor="middle">{unit}</text>}
              <text x={x + 85} y={155} fontFamily={MONO} fontSize="8" fill={T3} textAnchor="middle">{sub}</text>
            </g>
          ))}
        </svg>
      ),
    },
  ],

  "dashboard-emergencias": [
    {
      title: "El sistema fragmentado",
      text: "SMS, correo y sensores IoT en canales separados. El coordinador tenía que revisar tres sistemas para tener el panorama completo. Tiempo promedio de respuesta: 3 minutos.",
      svg: (
        <svg width="100%" height="100%" viewBox="0 0 760 200">
          <rect width="760" height="200" fill={BG}/>
          <text x="30" y="20" fontFamily={MONO} fontSize="9" fill={T3} letterSpacing="2">SISTEMA ACTUAL · ALERTAS</text>
          <rect x="30" y="45" width="130" height="55" rx="3" fill={BG2} stroke={B}/>
          <text x="95" y="72" fontFamily={MONO} fontSize="9" fill={T2} textAnchor="middle">SMS</text>
          <text x="95" y="88" fontFamily={MONO} fontSize="8" fill={T3} textAnchor="middle">canal 1</text>
          <rect x="180" y="45" width="130" height="55" rx="3" fill={BG2} stroke={B}/>
          <text x="245" y="72" fontFamily={MONO} fontSize="9" fill={T2} textAnchor="middle">Email</text>
          <text x="245" y="88" fontFamily={MONO} fontSize="8" fill={T3} textAnchor="middle">canal 2</text>
          <rect x="330" y="45" width="130" height="55" rx="3" fill={BG2} stroke={B}/>
          <text x="395" y="72" fontFamily={MONO} fontSize="9" fill={T2} textAnchor="middle">IoT Sensor</text>
          <text x="395" y="88" fontFamily={MONO} fontSize="8" fill={T3} textAnchor="middle">canal 3</text>
          <text x="95" y="118" fontFamily={MONO} fontSize="16" fill={B2} textAnchor="middle">↓</text>
          <text x="245" y="118" fontFamily={MONO} fontSize="16" fill={B2} textAnchor="middle">↓</text>
          <text x="395" y="118" fontFamily={MONO} fontSize="16" fill={B2} textAnchor="middle">↓</text>
          <rect x="510" y="40" width="220" height="130" rx="3" fill={BG2} stroke={R} strokeWidth="1"/>
          <text x="620" y="68" fontFamily={MONO} fontSize="9" fill={T2} textAnchor="middle">Coordinador</text>
          <text x="620" y="86" fontFamily={MONO} fontSize="8" fill={T3} textAnchor="middle">revisa 3 canales</text>
          <text x="620" y="100" fontFamily={MONO} fontSize="8" fill={T3} textAnchor="middle">manualmente</text>
          <rect x="530" y="115" width="180" height="36" rx="2" fill={BG3} stroke={R} strokeWidth="1"/>
          <text x="620" y="132" fontFamily={MONO} fontSize="11" fill={R} textAnchor="middle">⏱ 3 minutos</text>
          <text x="620" y="145" fontFamily={MONO} fontSize="8" fill={T3} textAnchor="middle">tiempo de respuesta</text>
          <rect x="30" y="125" width="460" height="40" rx="2" fill={BG3} stroke={B}/>
          <text x="250" y="142" fontFamily={MONO} fontSize="9" fill={T3} textAnchor="middle">el cuello de botella es la interfaz</text>
          <text x="250" y="157" fontFamily={MONO} fontSize="8" fill={T3} textAnchor="middle">no la red · no los sensores · no el hardware</text>
        </svg>
      ),
    },
    {
      title: "El diagnóstico correcto",
      text: "El problema era de UX operacional, no de infraestructura. Unificar las fuentes en una sola vista con priorización automática resolvía el tiempo de respuesta sin cambiar nada del backend.",
      svg: (
        <svg width="100%" height="100%" viewBox="0 0 760 200">
          <rect width="760" height="200" fill={BG}/>
          <rect x="30" y="30" width="330" height="140" rx="3" fill={BG2} stroke={R} strokeWidth="1"/>
          <text x="195" y="55" fontFamily={MONO} fontSize="9" fill={R} textAnchor="middle">HIPÓTESIS INCORRECTA</text>
          <text x="50" y="80" fontFamily={MONO} fontSize="9" fill={T3}>✗  mejor hardware</text>
          <text x="50" y="100" fontFamily={MONO} fontSize="9" fill={T3}>✗  más ancho de banda</text>
          <text x="50" y="120" fontFamily={MONO} fontSize="9" fill={T3}>✗  reemplazar sensores</text>
          <text x="50" y="140" fontFamily={MONO} fontSize="9" fill={T3}>✗  nueva infraestructura</text>
          <text x="50" y="160" fontFamily={MONO} fontSize="8" fill={T3}>caro · lento · no resuelve el problema</text>
          <rect x="400" y="30" width="330" height="140" rx="3" fill={GB} stroke={G} strokeWidth="1"/>
          <text x="565" y="55" fontFamily={MONO} fontSize="9" fill={G} textAnchor="middle">DIAGNÓSTICO REAL</text>
          <text x="420" y="80" fontFamily={MONO} fontSize="9" fill={T2}>el coordinador revisa 3 pantallas</text>
          <text x="420" y="100" fontFamily={MONO} fontSize="9" fill={T2}>no hay priorización automática</text>
          <text x="420" y="120" fontFamily={MONO} fontSize="9" fill={T2}>el tiempo se pierde en identificar</text>
          <text x="420" y="140" fontFamily={MONO} fontSize="9" fill={T2}>no en procesar</text>
          <line x1="420" y1="150" x2="710" y2="150" stroke={GD} strokeWidth="1"/>
          <text x="420" y="162" fontFamily={MONO} fontSize="9" fill={G}>solución: UX + priorización</text>
        </svg>
      ),
    },
    {
      title: "Dashboard unificado con WebSocket",
      text: "Una sola vista para todas las fuentes. Priorización automática por tipo y severidad. Latencia menor a 200ms. Escalación automática si no hay ACK en 60 segundos.",
      svg: (
        <svg width="100%" height="100%" viewBox="0 0 760 200">
          <rect width="760" height="200" fill={BG}/>
          <text x="30" y="20" fontFamily={MONO} fontSize="9" fill={T3} letterSpacing="2">DASHBOARD REAL-TIME</text>
          <rect x="30" y="30" width="500" height="155" rx="3" fill={BG2} stroke={G} strokeWidth="1"/>
          <text x="280" y="52" fontFamily={MONO} fontSize="9" fill={G} textAnchor="middle">Alertas · prioridad automatizada</text>
          <rect x="50" y="60" width="460" height="32" rx="2" fill={BG3} stroke={R} strokeWidth="1"/>
          <text x="70" y="74" fontFamily={MONO} fontSize="9" fill={R}>🔴 CRÍTICO</text>
          <text x="150" y="74" fontFamily={MONO} fontSize="9" fill={T2}>sensor #47 · zona norte</text>
          <text x="430" y="74" fontFamily={MONO} fontSize="8" fill={T3}>hace 12s</text>
          <text x="70" y="85" fontFamily={MONO} fontSize="7" fill={T3}>ACK pendiente · escalación en 48s</text>
          <rect x="50" y="100" width="460" height="28" rx="2" fill={BG3} stroke={A} strokeWidth="1"/>
          <text x="70" y="114" fontFamily={MONO} fontSize="9" fill={A}>🟡 MEDIO</text>
          <text x="150" y="114" fontFamily={MONO} fontSize="9" fill={T2}>alerta GPS · dispositivo #12</text>
          <text x="430" y="114" fontFamily={MONO} fontSize="8" fill={T3}>hace 34s</text>
          <rect x="50" y="136" width="460" height="28" rx="2" fill={BG3} stroke={B}/>
          <text x="70" y="150" fontFamily={MONO} fontSize="9" fill={T3}>🟢 BAJO</text>
          <text x="150" y="150" fontFamily={MONO} fontSize="9" fill={T3}>batería baja · dispositivo #8</text>
          <text x="430" y="150" fontFamily={MONO} fontSize="8" fill={T3}>hace 2m</text>
          <rect x="550" y="30" width="180" height="155" rx="3" fill={BG2} stroke={B}/>
          <text x="640" y="55" fontFamily={MONO} fontSize="9" fill={T3} textAnchor="middle">WebSocket</text>
          <text x="640" y="75" fontFamily={MONO} fontSize="18" fontWeight="500" fill={G} textAnchor="middle">&lt;200ms</text>
          <text x="640" y="92" fontFamily={MONO} fontSize="8" fill={T3} textAnchor="middle">latencia</text>
          <line x1="570" y1="106" x2="710" y2="106" stroke={B} strokeWidth="1"/>
          <text x="640" y="126" fontFamily={MONO} fontSize="8" fill={T3} textAnchor="middle">escalación si</text>
          <text x="640" y="140" fontFamily={MONO} fontSize="8" fill={T3} textAnchor="middle">no hay ACK</text>
          <text x="640" y="160" fontFamily={MONO} fontSize="16" fontWeight="500" fill={G} textAnchor="middle">60s</text>
        </svg>
      ),
    },
    {
      title: "El resultado",
      text: "De 3 minutos a 1 minuto (-67%). Dashboard en uso 24/7 con 99.9% de uptime. Latencia de alerta: menos de 200ms desde el evento hasta pantalla.",
      svg: (
        <svg width="100%" height="100%" viewBox="0 0 760 200">
          <rect width="760" height="200" fill={BG}/>
          <rect x="30" y="25" width="320" height="155" rx="3" fill={BG2} stroke={B}/>
          <text x="190" y="52" fontFamily={MONO} fontSize="9" fill={T3} textAnchor="middle">ANTES</text>
          <text x="190" y="108" fontFamily={MONO} fontSize="56" fontWeight="500" fill={R} textAnchor="middle">3m</text>
          <text x="190" y="130" fontFamily={MONO} fontSize="9" fill={T3} textAnchor="middle">tiempo de respuesta</text>
          <text x="190" y="165" fontFamily={MONO} fontSize="9" fill={T3} textAnchor="middle">3 canales · revisión manual</text>
          <text x="395" y="108" fontFamily={MONO} fontSize="22" fill={G} textAnchor="middle">→</text>
          <rect x="420" y="25" width="310" height="155" rx="3" fill={GB} stroke={G} strokeWidth="1"/>
          <text x="575" y="52" fontFamily={MONO} fontSize="9" fill={G} textAnchor="middle">DESPUÉS</text>
          <text x="575" y="108" fontFamily={MONO} fontSize="56" fontWeight="500" fill={G} textAnchor="middle">1m</text>
          <text x="575" y="130" fontFamily={MONO} fontSize="9" fill={T3} textAnchor="middle">tiempo de respuesta</text>
          <text x="575" y="150" fontFamily={MONO} fontSize="9" fill={T3} textAnchor="middle">-67% · 1 pantalla · priorizado</text>
          <text x="575" y="170" fontFamily={MONO} fontSize="8" fill={T3} textAnchor="middle">99.9% uptime · 24/7</text>
        </svg>
      ),
    },
  ],

  "tcpip-bridge": [
    {
      title: "El problema — gap de protocolo",
      text: "Los wearables hablaban TCP/IP raw con un protocolo propietario. El dashboard necesitaba WebSocket. La opción obvia: reemplazar hardware. Costo: semanas y presupuesto que el proyecto no tenía.",
      svg: (
        <svg width="100%" height="100%" viewBox="0 0 760 200">
          <rect width="760" height="200" fill={BG}/>
          <text x="30" y="20" fontFamily={MONO} fontSize="9" fill={T3} letterSpacing="2">GAP DE PROTOCOLO</text>
          <rect x="30" y="45" width="160" height="80" rx="3" fill={BG2} stroke={B}/>
          <text x="110" y="82" fontFamily={MONO} fontSize="9" fill={T2} textAnchor="middle">Wearable IoT</text>
          <text x="110" y="98" fontFamily={MONO} fontSize="8" fill={T3} textAnchor="middle">TCP/IP raw</text>
          <text x="110" y="112" fontFamily={MONO} fontSize="8" fill={T3} textAnchor="middle">protocolo propietario</text>
          <rect x="290" y="55" width="180" height="60" rx="3" fill={BG3} stroke={R} strokeWidth="1.5" strokeDasharray="5,3"/>
          <text x="380" y="85" fontFamily={MONO} fontSize="10" fill={R} textAnchor="middle">sin conexión</text>
          <text x="380" y="100" fontFamily={MONO} fontSize="8" fill={T3} textAnchor="middle">gap de protocolo</text>
          <rect x="570" y="45" width="160" height="80" rx="3" fill={BG2} stroke={B}/>
          <text x="650" y="82" fontFamily={MONO} fontSize="9" fill={T2} textAnchor="middle">Dashboard Web</text>
          <text x="650" y="98" fontFamily={MONO} fontSize="8" fill={T3} textAnchor="middle">necesita WebSocket</text>
          <text x="650" y="112" fontFamily={MONO} fontSize="8" fill={T3} textAnchor="middle">real-time</text>
          <rect x="30" y="148" width="340" height="35" rx="2" fill={BG3} stroke={R} strokeWidth="1"/>
          <text x="200" y="164" fontFamily={MONO} fontSize="9" fill={R} textAnchor="middle">Opción A: reemplazar hardware</text>
          <text x="200" y="176" fontFamily={MONO} fontSize="8" fill={T3} textAnchor="middle">semanas · costo alto · no disponible</text>
          <rect x="390" y="148" width="340" height="35" rx="2" fill={GB} stroke={G} strokeWidth="1"/>
          <text x="560" y="164" fontFamily={MONO} fontSize="9" fill={G} textAnchor="middle">Opción B: construir un bridge</text>
          <text x="560" y="176" fontFamily={MONO} fontSize="8" fill={T3} textAnchor="middle">días · reutiliza hardware · escalable</text>
        </svg>
      ),
    },
    {
      title: "Reverse engineering del protocolo",
      text: "Si puedo entender el protocolo propietario, puedo construir el bridge sin tocar el hardware. Análisis de tráfico capturado antes de proponer la compra. Si fallaba, la opción del hardware seguía disponible.",
      svg: (
        <svg width="100%" height="100%" viewBox="0 0 760 200">
          <rect width="760" height="200" fill={BG}/>
          <text x="30" y="20" fontFamily={MONO} fontSize="9" fill={T3} letterSpacing="2">ANÁLISIS DE TRÁFICO · TCP</text>
          <rect x="30" y="30" width="700" height="155" rx="3" fill={BG2} stroke={B}/>
          <text x="50" y="55" fontFamily={MONO} fontSize="9" fill={T3}>TRÁFICO CAPTURADO</text>
          <text x="50" y="78" fontFamily={MONO} fontSize="10" fill={T3}>0x00 0x01</text>
          <text x="150" y="78" fontFamily={MONO} fontSize="10" fill={G}>0x44 0x45 0x56 0x49 0x43 0x45</text>
          <text x="470" y="78" fontFamily={MONO} fontSize="9" fill={T3}>→ DEVICE header</text>
          <text x="50" y="98" fontFamily={MONO} fontSize="10" fill={T3}>0x00 0x02</text>
          <text x="150" y="98" fontFamily={MONO} fontSize="10" fill={G}>0x47 0x50 0x53 0x4C 0x4F 0x43</text>
          <text x="470" y="98" fontFamily={MONO} fontSize="9" fill={T3}>→ GPS_LOC payload</text>
          <text x="50" y="118" fontFamily={MONO} fontSize="10" fill={T3}>0x00 0x03</text>
          <text x="150" y="118" fontFamily={MONO} fontSize="10" fill={G}>0x48 0x42 0x54</text>
          <text x="310" y="118" fontFamily={MONO} fontSize="10" fill={T3}>0xFF 0x12</text>
          <text x="470" y="118" fontFamily={MONO} fontSize="9" fill={T3}>→ HBT · heartbeat</text>
          <line x1="50" y1="132" x2="700" y2="132" stroke={B} strokeWidth="1"/>
          <text x="50" y="152" fontFamily={MONO} fontSize="9" fill={T3}>PROTOCOLO IDENTIFICADO:</text>
          <text x="280" y="152" fontFamily={MONO} fontSize="9" fill={G}>3 tipos de frame · header 2 bytes · longitud variable</text>
          <text x="50" y="172" fontFamily={MONO} fontSize="8" fill={T3}>documentación: ninguna · reverse engineered en 2 días · todos los edge cases mapeados</text>
        </svg>
      ),
    },
    {
      title: "El bridge — traducción en tiempo real",
      text: "Node.js con listeners TCP que parsean el protocolo y re-emiten vía WebSocket. Buffer inteligente para reconexiones sin pérdida de datos. El hardware no cambia, el dashboard no sabe que hay un intermediario.",
      svg: (
        <svg width="100%" height="100%" viewBox="0 0 760 200">
          <rect width="760" height="200" fill={BG}/>
          <text x="30" y="20" fontFamily={MONO} fontSize="9" fill={T3} letterSpacing="2">ARQUITECTURA · BRIDGE</text>
          <rect x="20" y="50" width="130" height="70" rx="3" fill={BG2} stroke={B}/>
          <text x="85" y="82" fontFamily={MONO} fontSize="9" fill={T2} textAnchor="middle">Wearable</text>
          <text x="85" y="97" fontFamily={MONO} fontSize="8" fill={T3} textAnchor="middle">TCP raw</text>
          <text x="85" y="112" fontFamily={MONO} fontSize="8" fill={T3} textAnchor="middle">sin cambios</text>
          <text x="158" y="90" fontFamily={MONO} fontSize="8" fill={T3}>───</text>
          <rect x="210" y="35" width="320" height="100" rx="3" fill={BG2} stroke={G} strokeWidth="1"/>
          <text x="370" y="58" fontFamily={MONO} fontSize="9" fill={G} textAnchor="middle">Bridge · Node.js</text>
          <line x1="230" y1="68" x2="510" y2="68" stroke={B} strokeWidth="1"/>
          <text x="230" y="84" fontFamily={MONO} fontSize="8" fill={T3}>TCP listener</text>
          <text x="230" y="98" fontFamily={MONO} fontSize="8" fill={T3}>frame parser</text>
          <text x="230" y="112" fontFamily={MONO} fontSize="8" fill={T3}>buffer inteligente</text>
          <text x="380" y="84" fontFamily={MONO} fontSize="8" fill={T3}>→ JSON</text>
          <text x="380" y="98" fontFamily={MONO} fontSize="8" fill={T3}>→ WebSocket emit</text>
          <text x="380" y="112" fontFamily={MONO} fontSize="8" fill={T3}>→ compresión</text>
          <text x="538" y="90" fontFamily={MONO} fontSize="8" fill={T3}>───</text>
          <rect x="560" y="50" width="170" height="70" rx="3" fill={BG2} stroke={B}/>
          <text x="645" y="82" fontFamily={MONO} fontSize="9" fill={T2} textAnchor="middle">Dashboard</text>
          <text x="645" y="97" fontFamily={MONO} fontSize="8" fill={G} textAnchor="middle">WebSocket</text>
          <text x="645" y="112" fontFamily={MONO} fontSize="8" fill={T3} textAnchor="middle">real-time</text>
          <rect x="210" y="150" width="320" height="32" rx="2" fill={BG3} stroke={B}/>
          <text x="370" y="164" fontFamily={MONO} fontSize="8" fill={T3} textAnchor="middle">escala horizontalmente · múltiples instancias</text>
          <text x="370" y="176" fontFamily={MONO} fontSize="8" fill={T3} textAnchor="middle">métricas de throughput en tiempo real</text>
        </svg>
      ),
    },
    {
      title: "El resultado",
      text: "+400% en throughput de mensajes. Sin reemplazar ningún hardware. Latencia end-to-end: menos de 50ms. El protocolo reverse-engineered está documentado para el equipo.",
      svg: (
        <svg width="100%" height="100%" viewBox="0 0 760 200">
          <rect width="760" height="200" fill={BG}/>
          <rect x="30" y="25" width="340" height="155" rx="3" fill={BG2} stroke={B}/>
          <text x="200" y="52" fontFamily={MONO} fontSize="9" fill={T3} textAnchor="middle">THROUGHPUT</text>
          <text x="200" y="100" fontFamily={MONO} fontSize="52" fontWeight="500" fill={G} textAnchor="middle">+400%</text>
          <text x="200" y="122" fontFamily={MONO} fontSize="9" fill={T3} textAnchor="middle">mensajes procesados</text>
          <text x="200" y="160" fontFamily={MONO} fontSize="9" fill={T3} textAnchor="middle">sin nuevo hardware</text>
          <rect x="390" y="25" width="340" height="155" rx="3" fill={BG2} stroke={B}/>
          <text x="560" y="52" fontFamily={MONO} fontSize="9" fill={T3} textAnchor="middle">LATENCIA END-TO-END</text>
          <text x="560" y="105" fontFamily={MONO} fontSize="40" fontWeight="500" fill={G} textAnchor="middle">&lt;50ms</text>
          <text x="560" y="130" fontFamily={MONO} fontSize="9" fill={T3} textAnchor="middle">wearable → dashboard</text>
          <line x1="410" y1="148" x2="710" y2="148" stroke={B} strokeWidth="1"/>
          <text x="560" y="165" fontFamily={MONO} fontSize="9" fill={T3} textAnchor="middle">protocolo documentado</text>
          <text x="560" y="178" fontFamily={MONO} fontSize="8" fill={T3} textAnchor="middle">equipo puede extender sin reverse eng.</text>
        </svg>
      ),
    },
  ],

  "medirec-mobile": [
    {
      title: "El deadline — 8 semanas para iOS y Android",
      text: "8 semanas para App Store y Play Store simultáneos. El equipo no tenía experiencia en mobile. El riesgo real no era el deadline, era entregar código que nadie más podría mantener.",
      svg: (
        <svg width="100%" height="100%" viewBox="0 0 760 200">
          <rect width="760" height="200" fill={BG}/>
          <text x="30" y="20" fontFamily={MONO} fontSize="9" fill={T3} letterSpacing="2">CONSTRAINT · ENTREGA EN 8 SEMANAS</text>
          <rect x="30" y="35" width="440" height="140" rx="3" fill={BG2} stroke={B}/>
          {[1,2,3,4,5,6,7,8].map(w => (
            <g key={w}>
              <rect x={30 + (w-1)*52} y="55" width="44" height="60" rx="2" fill={w <= 8 ? BG3 : BG3} stroke={w === 8 ? G : B}/>
              <text x={30 + (w-1)*52 + 22} y="82" fontFamily={MONO} fontSize="9" fill={w === 8 ? G : T3} textAnchor="middle">S{w}</text>
              <text x={30 + (w-1)*52 + 22} y="98" fontFamily={MONO} fontSize="7" fill={T3} textAnchor="middle">
                {w === 1 ? "arch" : w === 2 ? "auth" : w === 3 ? "lab" : w === 4 ? "UI" : w === 5 ? "test" : w === 6 ? "beta" : w === 7 ? "rev." : "🚀"}
              </text>
            </g>
          ))}
          <text x="250" y="142" fontFamily={MONO} fontSize="8" fill={T3} textAnchor="middle">App Store + Play Store</text>
          <text x="250" y="158" fontFamily={MONO} fontSize="8" fill={T3} textAnchor="middle">iOS + Android simultáneos</text>
          <rect x="490" y="35" width="240" height="140" rx="3" fill={BG2} stroke={R} strokeWidth="1"/>
          <text x="610" y="60" fontFamily={MONO} fontSize="9" fill={T3} textAnchor="middle">RIESGO REAL</text>
          <text x="510" y="85" fontFamily={MONO} fontSize="9" fill={R}>no es el deadline</text>
          <text x="510" y="108" fontFamily={MONO} fontSize="9" fill={R}>es entregar código</text>
          <text x="510" y="128" fontFamily={MONO} fontSize="9" fill={R}>que nadie entiende</text>
          <text x="510" y="158" fontFamily={MONO} fontSize="8" fill={T3}>→ el equipo queda atrapado</text>
        </svg>
      ),
    },
    {
      title: "La decisión — Flutter y BLoC",
      text: "Flutter: una sola base de código para iOS y Android. BLoC pattern: separación clara de lógica de negocio y UI. No solo por velocidad de entrega, sino porque hace el código más mantenible para quien llega después.",
      svg: (
        <svg width="100%" height="100%" viewBox="0 0 760 200">
          <rect width="760" height="200" fill={BG}/>
          <text x="30" y="20" fontFamily={MONO} fontSize="9" fill={T3} letterSpacing="2">DECISIÓN DE ARQUITECTURA</text>
          <rect x="30" y="35" width="320" height="140" rx="3" fill={BG2} stroke={G} strokeWidth="1"/>
          <text x="190" y="60" fontFamily={MONO} fontSize="10" fill={G} textAnchor="middle">Flutter</text>
          <text x="190" y="78" fontFamily={MONO} fontSize="8" fill={T3} textAnchor="middle">una base de código</text>
          <line x1="50" y1="90" x2="330" y2="90" stroke={B} strokeWidth="1"/>
          <text x="80" y="110" fontFamily={MONO} fontSize="9" fill={T2}>iOS</text>
          <text x="250" y="110" fontFamily={MONO} fontSize="9" fill={T2}>Android</text>
          <text x="80" y="130" fontFamily={MONO} fontSize="8" fill={T3}>App Store</text>
          <text x="250" y="130" fontFamily={MONO} fontSize="8" fill={T3}>Play Store</text>
          <text x="190" y="162" fontFamily={MONO} fontSize="8" fill={T3} textAnchor="middle">sin duplicación de lógica</text>
          <rect x="370" y="35" width="360" height="140" rx="3" fill={BG2} stroke={G} strokeWidth="1"/>
          <text x="550" y="60" fontFamily={MONO} fontSize="10" fill={G} textAnchor="middle">BLoC Pattern</text>
          <rect x="390" y="72" width="320" height="24" rx="2" fill={BG3} stroke={B}/>
          <text x="550" y="87" fontFamily={MONO} fontSize="8" fill={T2} textAnchor="middle">UI · Widgets</text>
          <rect x="390" y="103" width="320" height="24" rx="2" fill={BG3} stroke={G} strokeWidth="1"/>
          <text x="550" y="118" fontFamily={MONO} fontSize="8" fill={G} textAnchor="middle">BLoC · lógica de negocio</text>
          <rect x="390" y="134" width="320" height="24" rx="2" fill={BG3} stroke={B}/>
          <text x="550" y="149" fontFamily={MONO} fontSize="8" fill={T2} textAnchor="middle">Repository · API MediRec</text>
          <text x="550" y="166" fontFamily={MONO} fontSize="8" fill={T3} textAnchor="middle">capas separadas · fácil de mantener</text>
        </svg>
      ),
    },
    {
      title: "Documentación como parte de la entrega",
      text: "La guía de contribución y la documentación de arquitectura escritas durante el desarrollo, no al final. Comprometida junto con la app, no como un extra. El equipo recibe el código y el razonamiento.",
      svg: (
        <svg width="100%" height="100%" viewBox="0 0 760 200">
          <rect width="760" height="200" fill={BG}/>
          <text x="30" y="20" fontFamily={MONO} fontSize="9" fill={T3} letterSpacing="2">ENTREGABLES · SEMANA 8</text>
          {[
            { icon: "✓", title: "App Store · iOS", sub: "publicada · revisada · aprobada", color: G, y: 38 },
            { icon: "✓", title: "Play Store · Android", sub: "publicada · revisada · aprobada", color: G, y: 74 },
            { icon: "✓", title: "Guía de contribución", sub: "cómo agregar features · convenciones · flujo", color: G, y: 110 },
            { icon: "✓", title: "Documentación de arquitectura", sub: "BLoC · capas · decisiones con contexto", color: G, y: 146 },
          ].map(({ icon, title, sub, color, y }) => (
            <g key={y}>
              <rect x="30" y={y} width="690" height="30" rx="2" fill={BG2} stroke={B}/>
              <circle cx="50" cy={y + 15} r="8" fill={GB} stroke={G} strokeWidth="1"/>
              <text x="46" y={y + 19} fontFamily={MONO} fontSize="9" fill={color}>{icon}</text>
              <text x="68" y={y + 14} fontFamily={MONO} fontSize="10" fill={T}>{title}</text>
              <text x="68" y={y + 25} fontFamily={MONO} fontSize="8" fill={T3}>{sub}</text>
            </g>
          ))}
        </svg>
      ),
    },
    {
      title: "El resultado",
      text: "App publicada en 2 meses. El equipo añadió 3 features en los 60 días siguientes sin consultar conmigo. Cero incidentes de seguridad desde el lanzamiento. Ownership real desde el primer día.",
      svg: (
        <svg width="100%" height="100%" viewBox="0 0 760 200">
          <rect width="760" height="200" fill={BG}/>
          {[
            { x: 30, val: "2m", label: "entrega", sub: "en tiempo · sin excepciones" },
            { x: 220, val: "+3", label: "features", sub: "equipo · sin consultarme" },
            { x: 410, val: "0", label: "incidentes", sub: "seguridad de datos" },
            { x: 580, val: "100%", label: "ownership", sub: "equipo · desde día 1" },
          ].map(({ x, val, label, sub }) => (
            <g key={x}>
              <rect x={x} y="25" width="170" height="155" rx="3" fill={BG2} stroke={B}/>
              <text x={x + 85} y={90} fontFamily={MONO} fontSize={val.length > 2 ? 30 : 44} fontWeight="500" fill={G} textAnchor="middle">{val}</text>
              <text x={x + 85} y={115} fontFamily={MONO} fontSize="10" fill={T3} textAnchor="middle">{label}</text>
              <line x1={x + 20} y1={128} x2={x + 150} y2={128} stroke={B} strokeWidth="1"/>
              <text x={x + 85} y={148} fontFamily={MONO} fontSize="8" fill={T3} textAnchor="middle">{sub}</text>
            </g>
          ))}
        </svg>
      ),
    },
  ],
}

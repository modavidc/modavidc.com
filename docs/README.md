# Moisés Cedeño - Portfolio Website

Portfolio profesional de Moisés Cedeño, Tech Lead y Cloud Infrastructure Engineer especializado en APIs, integraciones y optimización de infraestructura cloud.

## 🚀 Características Principales

### ✅ **Mejoras Implementadas**

1. **Sección de Proyectos Completa**
   - ✅ 6 proyectos de trabajo (MediRec, T-Cuida)
   - ✅ 5 proyectos freelance (sitios web WordPress)
   - ✅ 5 proyectos personales (blogs, apps)
   - ✅ 1 charla/presentación
   - ✅ Total: 17 proyectos organizados por categorías

2. **SEO Optimizado**
   - ✅ Metadata completo con Open Graph y Twitter Cards
   - ✅ Sitemap.xml dinámico
   - ✅ Robots.txt configurado
   - ✅ Keywords específicas para Cloud Infrastructure
   - ✅ URLs canónicas

3. **Contenido Visual Mejorado**
   - ✅ Imágenes reales de Unsplash para proyectos
   - ✅ Badges de categorías en cada proyecto
   - ✅ Grid responsivo mejorado (2-3 columnas)
   - ✅ Hover effects y animaciones

4. **Nueva Sección de Impacto**
   - ✅ Estadísticas cuantificables
   - ✅ Métricas de ahorro y optimización
   - ✅ Contexto específico para cada logro

### 🛠️ **Stack Tecnológico**

- **Framework**: Next.js 14 con TypeScript
- **Styling**: Tailwind CSS + Radix UI
- **Animaciones**: Framer Motion
- **Deployment**: Docker + Docker Compose
- **SEO**: Metadata API de Next.js
- **Performance**: Optimización automática de imágenes

### 📊 **Proyectos Incluidos**

#### **Trabajo (Work)**
1. **AWS Infrastructure Optimization** - Reducción 58% costos
2. **PREIS API Integration** - Integración gubernamental
3. **LexiComp to NLM Migration** - Ahorro $20k en licencias
4. **MediRec Mobile App** - Primera app móvil en 8 semanas
5. **Automated Testing System** - Cultura de QA
6. **Legacy C# Modernization** - Migración de sistemas
7. **T-Cuida Platform** - SaaS de seguridad corporativa

#### **Freelance**
1. **José Dergán** - Sitio web psicólogo
2. **Gabriel Niezen** - Portfolio profesional
3. **Sintrasat** - Sitio web empresarial
4. **Falling Awake** - Plataforma de membresía
5. **Apoyo Consultivo** - Sitio web consultoría

#### **Personal**
1. **Cuentos de Yvón** - Blog de cuentos
2. **Cuentos de Moisés** - Blog personal
3. **Saiyans Blog** - Blog tecnológico
4. **My English Journey** - Blog de aprendizaje
5. **Ankicito** - App de intercambio de libros (en desarrollo)

## 🚀 **Cómo Ejecutar**

### Desarrollo Local
```bash
# Instalar dependencias
pnpm install

# Ejecutar en desarrollo
pnpm dev

# Construir para producción
pnpm build

# Ejecutar en producción
pnpm start
```

### Con Docker
```bash
# Desarrollo local (hot reload)
docker-compose -f docker-compose.dev.yml up

# Producción (Traefik externo, estilo el_estoico_landing)
cp env.example .env
docker network create web 2>/dev/null || true
docker-compose --env-file .env -f docker-compose.prod.yml up -d --build
```

## 📈 **Métricas de Impacto**

- **58%** reducción en costos AWS (MediRec)
- **$20,000+** ahorro en licencias (LexiComp → NLM)
- **400%** mejora en tiempo de programación (T-Cuida wearables)
- **8 semanas** para desarrollar primera app móvil (MediRec Flutter)

## 🔧 **Configuración SEO**

### Variables de Entorno
```env
# Actualizar en .env.local
NEXT_PUBLIC_SITE_URL=https://moises.dev
GOOGLE_ANALYTICS_ID=your-ga-id
GOOGLE_VERIFICATION=your-verification-code
```

### Metadata Personalizable
- Título y descripción en `app/layout.tsx`
- Keywords específicas para Cloud Infrastructure
- Open Graph y Twitter Cards configurados
- Sitemap automático con todos los proyectos

## 📱 **Responsive Design**

- ✅ Mobile-first approach
- ✅ Breakpoints optimizados
- ✅ Grid adaptativo (1 → 2 → 3 columnas)
- ✅ Imágenes optimizadas automáticamente
- ✅ Touch-friendly interactions

## 🎨 **Temas y Personalización**

- ✅ Tema claro/oscuro
- ✅ Colores personalizables en `tailwind.config.js`
- ✅ Componentes reutilizables
- ✅ Animaciones suaves con Framer Motion

## 📊 **Performance**

- ✅ Lighthouse Score optimizado
- ✅ Core Web Vitals
- ✅ Lazy loading de imágenes
- ✅ Bundle splitting automático
- ✅ Static generation donde sea posible

## 🔄 **Próximas Mejoras Sugeridas**

1. **Blog Integrado**
   - Sistema de blog con MDX
   - Categorías y tags
   - Búsqueda y filtros

2. **Formulario de Contacto Funcional**
   - Integración con email service
   - Validación en tiempo real
   - Notificaciones

3. **Portfolio Detallado**
   - Páginas individuales para cada proyecto
   - Screenshots y demos
   - Casos de estudio completos

4. **Analytics y Tracking**
   - Google Analytics 4
   - Eventos personalizados
   - Heatmaps

5. **Internacionalización**
   - Soporte para inglés/español
   - URLs localizadas
   - Contenido adaptado

## 📄 **Licencia**

MIT License - ver [LICENSE](../LICENSE) para más detalles.

## 🤝 **Contacto**

- **Email**: moisesdavidaaron@gmail.com
- **LinkedIn**: [modavidc](https://linkedin.com/in/modavidc)
- **GitHub**: [modavidc](https://github.com/modavidc)
- **Portfolio**: [moises.dev](https://moises.dev)

---

*Desarrollado con ❤️ usando Next.js, TypeScript y Tailwind CSS* 
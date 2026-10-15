# 🚀 Inicio Rápido (Vultr + Traefik)

Este proyecto sigue el mismo patrón de despliegue que `el_estoico_landing`:
- **Traefik corre aparte** (en tu servidor, para múltiples apps).
- Este repo solo expone un servicio en una red externa `web` con **labels**.

## Producción (en el servidor)

```bash
cd /ruta/al/proyecto

# Variables (elige una opción)
cp env.example .env
# edita DOMAIN=modavidc.com

# Red externa que usa Traefik
docker network create web 2>/dev/null || true

# Deploy
docker-compose --env-file .env -f docker-compose.prod.yml up -d --build
```

## Desarrollo local

```bash
docker-compose -f docker-compose.dev.yml up
```


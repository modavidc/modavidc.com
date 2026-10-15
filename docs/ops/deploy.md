# 🚀 Guía de Despliegue (Traefik externo)

## Modelo (igual a el_estoico_landing)
- Traefik vive en otro stack/compose y escucha Docker para detectar servicios.
- Este proyecto se conecta a una red Docker externa llamada `web`.
- El routing/SSL se define con labels en `docker-compose.prod.yml`.

## Requisitos en el servidor
- Docker + Docker Compose
- Traefik corriendo y configurado con:
  - entrypoint `websecure`
  - certresolver `http-resolv`
  - provider docker habilitado
  - red externa `web`

## Variables de entorno
Este repo usa `env.example` como plantilla.

Variables clave:
- `DOMAIN`: dominio que Traefik usará en la regla Host()
- `SERVICE_PORT`: puerto interno del contenedor (por defecto 3000)

## Despliegue

```bash
cp env.example .env
# edita DOMAIN=modavidc.com

docker network create web 2>/dev/null || true
docker-compose --env-file .env -f docker-compose.prod.yml up -d --build
```

## Actualizar

```bash
git pull
docker-compose --env-file .env -f docker-compose.prod.yml up -d --build
```


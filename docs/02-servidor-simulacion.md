# ⚙️ Servidor de Simulación (Documentación)

## Autor
Javier Rosales

## Descripción
Este documento explica cómo simular un servidor para devolver información de los productos del catálogo.

## Objetivo
Simular endpoints locales usando los datos del archivo `productos.json`.

## Endpoints
| Método | Ruta | Descripción |
|--------|------|--------------|
| GET | /api/productos | Devuelve todos los productos |
| GET | /api/productos/:id | Devuelve un producto específico |

## Ejemplo de respuesta
```json
{
  "id": 1,
  "modelo": "Lenovo ThinkPad E14",
  "cpu": "Intel Core i5-1240P",
  "ram": "16GB",
  "almacen": "512GB SSD",
  "precio": 18999,
  "imagen": "lenovo.png"
}

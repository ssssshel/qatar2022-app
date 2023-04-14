Hola, es una pequeña aplicación creada con NextJS para la visualizacion de detalles en los grupos y partidos del mundial Qatar 2022.

![q2022App](/public/q2022.png)

## Antes de empezar

Primero instala las dependencias y ejecuta el server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Resumen de dependencias
- React 18.2.0
- NextJS 13.3.0
- TailwindCSS (Estilos personalizados)
- SWR (Fetching de lado del cliente)
- React cookie & cookie (Gestion de cookies y auth de lado del server)
- Jsonwebtoken (Validacion y desencriptado de tokens)

## Requerimientos y funcionalidades
- Panel de Registro de usuario e inicio de sesión
- Dashboard para la visualización de todos los grupos
- Menu detalle para cada grupo con sus respectivas clasificaciones y partidos
- Manejo de sesión de usuario tanto de lado del server (cookies) como del cliente (Context)
- Navbar con opciones condicionales
- Diseño minimalista y amigable con usuarios desktop

## Breve repaso del flujo
- Inicio de sesión o registro según sea el caso
- Visualizacion de la sección main
- Acceso al dashboard de grupos mediante link en navbar
- Selección de un grupo en particular
- Visualización detallada de fechas, resultados y equipos de los partidos
- Opción para volver al menú o cerrar sesión


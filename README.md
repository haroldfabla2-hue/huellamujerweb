# 🌸 Huella Mujer

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.0-646CFF?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

> **Dejando marca. Creando futuro.**

Un sitio web moderno y multi-idioma para el programa social **Huella Mujer**, dedicado al empoderamiento económico de mujeres emprendedoras en Perú.

![Huella Mujer Preview](./public/images/hero-working.jpg)

## ✨ Características

- 🎨 **Diseño Moderno** - Interfaz elegante con animaciones GSAP y estilo editorial
- 🌍 **Multi-idioma** - Soporte completo para Español e Inglés (i18n)
- 📱 **Responsive** - Adaptable a todos los dispositivos
- ⚡ **Alto Rendimiento** - Construido con Vite para carga ultrarrápida
- 🎯 **Scroll Animations** - Efectos de scroll con pinning y snap
- 📝 **Formularios** - Formularios de contacto y postulación funcionales

## 🚀 Tecnologías

| Tecnología | Descripción |
|------------|-------------|
| **React 18** | Biblioteca UI moderna con hooks |
| **TypeScript** | Tipado estático para código robusto |
| **Vite** | Build tool ultrarrápido |
| **Tailwind CSS** | Framework CSS utility-first |
| **shadcn/ui** | Componentes UI accesibles |
| **GSAP** | Animaciones profesionales |
| **i18next** | Internacionalización |

## 📁 Estructura del Proyecto

```
huella-mujer/
├── public/
│   └── images/          # Imágenes del sitio
├── src/
│   ├── components/      # Componentes reutilizables
│   │   └── Navigation.tsx
│   ├── sections/        # Secciones de la página
│   │   ├── HeroSection.tsx
│   │   ├── ProgramSection.tsx
│   │   ├── ModulesSection.tsx
│   │   ├── ConferencesSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── SpeakersSection.tsx
│   │   ├── ImpactSection.tsx
│   │   ├── FormSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── Footer.tsx
│   ├── i18n/           # Configuración de idiomas
│   │   ├── index.ts
│   │   └── locales/
│   │       ├── es.json
│   │       └── en.json
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── vite.config.ts
```

## 🛠️ Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/huella-mujer.git

# Entrar al directorio
cd huella-mujer

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

## 📦 Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia servidor de desarrollo |
| `npm run build` | Compila para producción |
| `npm run preview` | Previsualiza build de producción |
| `npm run lint` | Ejecuta linter |

## 🌐 Secciones del Sitio

1. **Hero** - Pantalla principal con llamada a la acción
2. **Programa** - Información sobre el programa y sus pilares
3. **Módulos** - Capacitaciones disponibles
4. **Conferencias** - Eventos y talleres
5. **Testimonios** - Historias de participantes
6. **Ponentes** - Equipo de mentores
7. **Impacto** - Estadísticas y resultados
8. **Formulario** - Postulación al programa
9. **Contacto** - Información de contacto

## 🎨 Paleta de Colores

| Color | Hex | Uso |
|-------|-----|-----|
| Off-White | `#F6F6F2` | Fondo principal |
| Gold | `#D4A03A` | Acentos y CTAs |
| Dark | `#111111` | Texto y fondo contacto |
| Gray | `#6E6E6E` | Texto secundario |

## 📝 Licencia

Este proyecto está bajo la licencia MIT. Ver [LICENSE](LICENSE) para más detalles.

---

💜 **Huella Mujer** - Empoderando mujeres emprendedoras
# Portfolio Studio
A professional single-page portfolio showcasing services, design features, an interactive filterable gallery, carousel, video section, about, skills, testimonials, pricing for courses, contact and footer. Built with HTML, CSS, Vanilla JavaScript, Swiper.js, Font Awesome and Canvas-based effects.

## Screenshot
![Project Screenshot](./assets/images/screenshot.jpg)

## Demo
https://portfolio-studio-az.netlify.app/

## Features
- Header with navigation and sticky behavior  
- Hero / Carousel with responsive images  
- Services section and “Our design comes with...” highlights  
- Filterable Gallery (category filters + shuffle)  
- Video/Media section (customizable)  
- About section and Skills visualization  
- Testimonials carousel  
- Pricing section (courses / offers)  
- Contact form and footer  
- Canvas-based visual effects (custom modules)  
- Fully responsive across devices

##  Built With
- HTML5, CSS3 (modular structure under `assets/css/`)  
- JavaScript (Vanilla, modular under `assets/js/modules/`)  
- Swiper.js (carousel)  
- Font Awesome (icons)  
- Canvas API for visual effects

## What I learned
During building this project I focused on practical, production-ready skills:

**Frontend architecture & CSS**
- Organizing CSS in modules (`base`, `components`, `layout`, `libs`, `sections`) for maintainability.  
- Using CSS variables and a global style file to control theme/colors/spacing.  
- Techniques for responsive layouts (mobile-first, Flexbox & Grid) and media-query strategies.  
- Optimizing CSS delivery and splitting critical styles vs. non-critical.

**JavaScript & modular code**
- Splitting behavior into small modules (carousel, gallery filter, canvas effects, loader, theme toggles).  
- Writing clean, reusable functions and avoiding global pollution.  
- Managing component initialization order and safe DOM querying on load.

**Animations & interactivity**
- Integrating Swiper.js and configuring performance-friendly options (lazy loading, breakpoints).  
- Building performant Canvas effects (offscreen calculations, requestAnimationFrame) and combining them with DOM animations.  
- Creating smooth UI interactions without blocking the main thread.

**Accessibility & semantics**
- Using semantic HTML elements (`header`, `main`, `section`, `nav`, `footer`) and proper ARIA attributes for assistive tech.  
- Ensuring images have `alt` attributes and interactive controls are keyboard accessible.

**Performance & media**
- Using responsive images (`-500`, `-900`, `webp`) and srcset when applicable to serve the right size per device.  
- Reducing bundle size, removing unnecessary console logs, and lazy-loading heavy media (video/images).  
- Basic image optimization workflow and trade-offs for web delivery.

**Tooling, workflow & deployment**
- Writing clear, meaningful git commits (Conventional Commits style) and organizing work into logical commits.  
- Preparing the project for GitHub Pages deployment (index at repo root) and verifying HTTPS.  
- Documenting project structure and how to run locally.

**Soft skills**
- Planning feature roadmap and breaking large features into small deliverable tasks.  
- Balancing design fidelity with performance and accessibility constraints.

## How To Run Locally
```bash
git clone https://github.com/Abdalrahman-Zatary/portfolio-studio.git
cd portfolio-studio
open index.html  
# dianastudio

Landing editorial para **dianastudio** — marketing, UGC con IA, paid ads, webs de alta conversión y desarrollo de apps.

## Stack
HTML + CSS + JavaScript estático. Sin frameworks, sin build step. 100% compatible con cualquier hosting estático (Vercel, Netlify, GitHub Pages, etc.).

## Estructura
```
dianastudio/
├── index.html      # Página principal
├── styles.css      # Estilos
├── script.js       # Interacciones
├── vercel.json     # Config opcional para Vercel
├── .gitignore
└── README.md
```

## Desarrollo local
Cualquier servidor estático funciona. Opciones:

**Con Python:**
```bash
python3 -m http.server 8000
```

**Con Node:**
```bash
npx serve .
```

Después abre `http://localhost:8000`.

## Despliegue en Vercel
1. Sube el repo a GitHub.
2. Entra en [vercel.com](https://vercel.com) → **Add New Project**.
3. Importa el repo de GitHub.
4. **Framework Preset:** Other (o "No Framework").
5. **Build Command:** *(vacío)*.
6. **Output Directory:** *(vacío — usa la raíz)*.
7. Click **Deploy**.

Vercel desplegará el sitio en segundos y te dará una URL `*.vercel.app`.

## Personalización rápida
- **Tu foto:** reemplaza el div `.about__photo` por una `<img>` real.
- **Imágenes de proyectos:** reemplaza los `.work-item__img--N` por imágenes reales.
- **Formulario de contacto:** conéctalo a Formspree, Resend, o tu propio backend en `script.js`.
- **Colores:** edita las variables en `:root` dentro de `styles.css`.
- **Redes sociales:** actualiza los enlaces del footer.

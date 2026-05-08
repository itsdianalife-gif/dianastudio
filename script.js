// dianastudio — small UI interactions

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const form = document.getElementById("contact-form");
const note = document.getElementById("form-note");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get("name");
    const email = data.get("email");
    if (!name || !email) {
      alert("Por favor, completa nombre y email.");
      return;
    }
    note.hidden = false;
    form.reset();
    setTimeout(() => (note.hidden = true), 5000);
  });
}

const sections = Array.from(document.querySelectorAll("section"));
sections.forEach((s, i) => {
  if (i === 0) return;
  s.style.opacity = "0";
  s.style.transform = "translateY(24px)";
  s.style.transition = "opacity 0.7s ease, transform 0.7s ease";
});

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0, rootMargin: "0px 0px -10% 0px" }
);

sections.forEach((s, i) => {
  if (i === 0) return;
  io.observe(s);
});
// dianastudio — small UI interactions

// Year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Contact form (placeholder — no backend wired yet)
const form = document.getElementById("contact-form");
const note = document.getElementById("form-note");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get("name");
    const email = data.get("email");

    if (!name || !email) {
      alert("Por favor, completa nombre y email.");
      return;
    }

    // TODO: conectar con tu backend / Formspree / Resend / etc.
    // Por ahora solo simula el envío:
    note.hidden = false;
    form.reset();
    setTimeout(() => (note.hidden = true), 5000);
  });
}

// Subtle scroll fade-in for sections
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll("section").forEach((s) => {
  s.style.opacity = "0";
  s.style.transform = "translateY(20px)";
  s.style.transition = "opacity 0.8s ease, transform 0.8s ease";
  io.observe(s);
});

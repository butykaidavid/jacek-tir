document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const nav = document.querySelector(".site-nav");
  const navToggle = document.querySelector(".nav-toggle");
  const backToTop = document.querySelector(".back-to-top");
  const copyrightYear =
    document.getElementById("copyrightYear");

  if (copyrightYear) {
    copyrightYear.textContent = new Date().getFullYear();
  }

  if (nav && navToggle) {
    navToggle.addEventListener("click", () => {
      const expanded =
        navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", (!expanded).toString());
      nav.classList.toggle("open");
      body.classList.toggle("nav-open");
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
        body.classList.remove("nav-open");
      });
    });
  }

  const revealSelectors = [
    ".section-header",
    ".card",
    ".media-card",
    ".feature-list li",
    ".pricing-card",
    ".testimonial",
    ".booking-form",
    ".availability",
    ".contact-list li",
    ".map-card",
    ".contact-actions .btn",
  ];

  const revealTargets = document.querySelectorAll(
    revealSelectors.join(", ")
  );

  revealTargets.forEach((el) => el.classList.add("reveal"));

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealTargets.forEach((el) => observer.observe(el));

  const vehicleSelect = document.getElementById("vehicle");
  const nightsInput = document.getElementById("nights");
  const nightsValue = document.getElementById("nightsValue");
  const extras = document.querySelectorAll(".checkbox-grid input");
  const quoteTotal = document.getElementById("quoteTotal");
  const bookingForm = document.querySelector(".booking-form");
  const quoteNote = bookingForm?.querySelector(".quote-note");

  const numberFormatter = new Intl.NumberFormat("hu-HU");

  function calculateQuote() {
    if (!vehicleSelect || !nightsInput || !quoteTotal) return;

    const basePrice =
      Number(
        vehicleSelect.options[vehicleSelect.selectedIndex].dataset.price
      ) || 0;
    const nights = Number(nightsInput.value) || 1;
    const extrasTotal = Array.from(extras || []).reduce(
      (sum, checkbox) => (checkbox.checked ? sum + Number(checkbox.value) : sum),
      0
    );

    const total = basePrice * nights + extrasTotal;
    quoteTotal.textContent = numberFormatter.format(total);

    if (nightsValue) {
      nightsValue.textContent = `${nights} éj`;
    }
  }

  calculateQuote();

  vehicleSelect?.addEventListener("change", calculateQuote);
  nightsInput?.addEventListener("input", calculateQuote);
  extras?.forEach((checkbox) =>
    checkbox.addEventListener("change", calculateQuote)
  );

  bookingForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    bookingForm.classList.add("submitted");

    if (quoteNote) {
      quoteNote.textContent =
        "Foglalási igényed beérkezett. Tanácsadónk 2 órán belül felveszi veled a kapcsolatot!";
    }

    bookingForm.scrollIntoView({ behavior: "smooth", block: "center" });
  });

  function handleScroll() {
    const y = window.scrollY;
    if (!backToTop) return;

    if (y > 480) {
      backToTop.classList.add("visible");
    } else {
      backToTop.classList.remove("visible");
    }
  }

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  backToTop?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const pricingToggleButtons = document.querySelectorAll(".toggle-btn");
  const pricingCards = document.querySelectorAll(".pricing-card");

  pricingToggleButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const plan = btn.dataset.plan;

      pricingToggleButtons.forEach((control) =>
        control.classList.toggle("active", control === btn)
      );

      pricingCards.forEach((card) => {
        const cardPlan = card.getAttribute("data-plan");
        card.style.display =
          !plan || cardPlan === plan ? "flex" : "none";
      });
    });
  });

  // Initialize pricing view
  const defaultToggle = document.querySelector(".toggle-btn.active");
  if (defaultToggle) {
    defaultToggle.dispatchEvent(new Event("click"));
  }
});

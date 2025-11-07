document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nav");
  const navToggle = nav?.querySelector(".nav__toggle");
  const navList = nav?.querySelector(".nav__list");
  const navLinks = navList ? Array.from(navList.querySelectorAll("a[href^='#']")) : [];
  const topBar = document.querySelector(".top-bar");
  const currentYear = document.getElementById("current-year");

  const closeNav = () => {
    if (!nav) return;
    nav.dataset.state = "closed";
    if (navToggle) {
      navToggle.setAttribute("aria-expanded", "false");
    }
  };

  if (currentYear) {
    currentYear.textContent = String(new Date().getFullYear());
  }

  if (nav && !nav.dataset.state) {
    nav.dataset.state = "closed";
  }

  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const isOpen = nav.dataset.state === "open";
      nav.dataset.state = isOpen ? "closed" : "open";
      navToggle.setAttribute("aria-expanded", String(!isOpen));
    });
  }

  if (navLinks.length) {
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (window.innerWidth <= 960) {
          closeNav();
        }
      });
    });
  }

  const handleOutsideClick = (event) => {
    if (!nav || nav.dataset.state !== "open") return;
    if (!nav.contains(event.target)) {
      closeNav();
    }
  };
  document.addEventListener("click", handleOutsideClick);

  const handleResize = () => {
    if (window.innerWidth > 960) {
      closeNav();
    }
  };
  window.addEventListener("resize", handleResize);

  const handleScroll = () => {
    if (topBar) {
      topBar.classList.toggle("scrolled", window.scrollY > 40);
    }
  };
  handleScroll();
  window.addEventListener("scroll", handleScroll, { passive: true });

  if (navLinks.length) {
    const sections = navLinks
      .map((link) => {
        const id = link.getAttribute("href")?.replace("#", "");
        if (!id) return null;
        const section = document.getElementById(id);
        return section ? { link, section } : null;
      })
      .filter(Boolean);

    const updateActiveLink = () => {
      const offset = window.innerHeight * 0.2 + window.scrollY;
      let activeId = null;

      sections.forEach(({ section }) => {
        if (section.offsetTop <= offset) {
          activeId = section.id;
        }
      });

      navLinks.forEach((link) => {
        const targetId = link.getAttribute("href")?.replace("#", "");
        if (!targetId) return;
        if (targetId === activeId) {
          link.classList.add("is-active");
        } else {
          link.classList.remove("is-active");
        }
      });
    };

    updateActiveLink();
    window.addEventListener("scroll", updateActiveLink, { passive: true });
  }

  const revealTargets = document.querySelectorAll("[data-reveal]");
  if (revealTargets.length) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const target = entry.target;
          const delay = target.getAttribute("data-reveal-delay");
          if (delay) {
            target.style.transitionDelay = `${delay}ms`;
          }
          target.classList.add("is-visible");
          revealObserver.unobserve(target);
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -80px 0px",
      }
    );

    revealTargets.forEach((target) => revealObserver.observe(target));
  }

  const showFormToast = (form, message) => {
    const previousToast = form.querySelector(".form-toast");
    if (previousToast) {
      previousToast.remove();
    }

    const toast = document.createElement("div");
    toast.className = "form-toast";
    toast.textContent = message;
    form.appendChild(toast);

    requestAnimationFrame(() => {
      toast.classList.add("is-visible");
    });

    setTimeout(() => {
      toast.classList.remove("is-visible");
      toast.addEventListener(
        "transitionend",
        () => toast.remove(),
        { once: true }
      );
    }, 3600);
  };

  const forms = document.querySelectorAll("form");
  forms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      const successMessage =
        form.getAttribute("data-success") ||
        "Köszönjük a megkeresést! Hamarosan jelentkezünk.";

      showFormToast(form, successMessage);
      form.reset();
    });
  });
});

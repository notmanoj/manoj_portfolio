const heroSection = document.querySelector(".hero");
const siteHeader = document.querySelector(".site-header");
const headerBrand = document.querySelector(".header-brand");
const menuToggle = document.querySelector(".menu-toggle");
const headerNav = document.querySelector(".header-nav");

if (headerBrand && heroSection) {
  headerBrand.addEventListener("click", (event) => {
    event.preventDefault();
    heroSection.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

const closeMenu = () => {
  if (!siteHeader || !menuToggle) {
    return;
  }
  siteHeader.classList.remove("menu-open");
  menuToggle.setAttribute("aria-expanded", "false");
};

if (menuToggle && siteHeader && headerNav) {
  menuToggle.addEventListener("click", () => {
    const willOpen = !siteHeader.classList.contains("menu-open");
    siteHeader.classList.toggle("menu-open", willOpen);
    menuToggle.setAttribute("aria-expanded", willOpen ? "true" : "false");
  });

  headerNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 809) {
      closeMenu();
    }
  });
}

// ── Seamless video loop ──
// The native `loop` attribute can cause a brief pause at the loop point,
// especially on mobile with .mov files. We restart the video slightly
// before it ends so the loop is imperceptible.
const heroVideo = document.querySelector(".hero-avatar");
if (heroVideo) {
  heroVideo.addEventListener("timeupdate", () => {
    if (heroVideo.duration && heroVideo.currentTime >= heroVideo.duration - 0.15) {
      heroVideo.currentTime = 0;
    }
  });

  // Ensure autoplay works on mobile after any user interaction
  heroVideo.play().catch(() => {
    document.addEventListener("touchstart", () => heroVideo.play(), { once: true });
    document.addEventListener("click", () => heroVideo.play(), { once: true });
  });
}

// ── Scroll reveal ──
const revealEls = document.querySelectorAll(".reveal");
if (revealEls.length) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealEls.forEach((el) => revealObserver.observe(el));
}

const projects = document.querySelectorAll(".project[data-bg]");
const darkenHex = (hex, factor = 0.5) => {
  const normalized = hex.replace("#", "");
  const expanded = normalized.length === 3
    ? normalized.split("").map((char) => char + char).join("")
    : normalized;

  const channels = expanded.match(/.{2}/g);
  if (!channels || channels.length !== 3) {
    return "#252525";
  }

  const [red, green, blue] = channels.map((channel) => {
    const value = Number.parseInt(channel, 16);
    return Math.max(0, Math.min(255, Math.round(value * factor)));
  });

  return `rgb(${red}, ${green}, ${blue})`;
};

const setMenuFill = (color) => {
  document.documentElement.style.setProperty("--menu-fill", color);
  const logoColor = color.toUpperCase() === "#FFFCF0" ? "#FF3C1F" : darkenHex(color);
  document.documentElement.style.setProperty("--menu-logo-color", logoColor);
};

projects.forEach((project) => {
  const color = project.getAttribute("data-bg");
  if (color) {
    project.style.backgroundColor = color;
  }
});

setMenuFill("#FFFCF0");

if (heroSection || projects.length) {
  let activeSectionKey = "hero";
  let ticking = false;

  const updateMenuByHeaderTouch = () => {
    ticking = false;

    const headerBottom = siteHeader
      ? siteHeader.getBoundingClientRect().bottom
      : 0;

    let matchedProject = null;
    projects.forEach((project) => {
      const rect = project.getBoundingClientRect();
      if (rect.top <= headerBottom && rect.bottom > headerBottom) {
        matchedProject = project;
      }
    });

    if (matchedProject) {
      const nextKey = matchedProject.getAttribute("data-bg") || "project";
      if (nextKey !== activeSectionKey) {
        activeSectionKey = nextKey;
        setMenuFill(nextKey);
      }
      return;
    }

    if (activeSectionKey !== "hero") {
      activeSectionKey = "hero";
      setMenuFill("#FFFCF0");
    }
  };

  const requestUpdate = () => {
    if (ticking) {
      return;
    }
    ticking = true;
    window.requestAnimationFrame(updateMenuByHeaderTouch);
  };

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
  updateMenuByHeaderTouch();
}

const drawCanvas = document.getElementById("draw-canvas");
const clearCanvasBtn = document.getElementById("clear-canvas");
const saveCanvasBtn = document.getElementById("save-canvas");
const savedDrawingsEl = document.getElementById("saved-drawings");

if (drawCanvas && clearCanvasBtn && saveCanvasBtn && savedDrawingsEl) {
  const STORAGE_KEY = "manoj_drawings";
  const ctx = drawCanvas.getContext("2d");
  let isDrawing = false;

  const fillCanvasWhite = () => {
    if (!ctx) {
      return;
    }
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, drawCanvas.width, drawCanvas.height);
  };

  const toCanvasPoint = (event) => {
    const rect = drawCanvas.getBoundingClientRect();
    const scaleX = drawCanvas.width / rect.width;
    const scaleY = drawCanvas.height / rect.height;
    return {
      x: (event.clientX - rect.left) * scaleX,
      y: (event.clientY - rect.top) * scaleY,
    };
  };

  const loadSavedDrawings = () => {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      const parsed = data ? JSON.parse(data) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  };

  const renderSavedDrawings = () => {
    const items = loadSavedDrawings();
    savedDrawingsEl.innerHTML = "";
    items.forEach((src, index) => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = `Saved drawing ${index + 1}`;
      savedDrawingsEl.appendChild(img);
    });
  };

  const saveCurrentDrawing = () => {
    const items = loadSavedDrawings();
    items.unshift(drawCanvas.toDataURL("image/png"));
    const next = items.slice(0, 12);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    renderSavedDrawings();
  };

  if (ctx) {
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = 3;
    ctx.strokeStyle = "#252525";
    fillCanvasWhite();
  }

  drawCanvas.addEventListener("pointerdown", (event) => {
    if (!ctx) {
      return;
    }
    isDrawing = true;
    const point = toCanvasPoint(event);
    ctx.beginPath();
    ctx.moveTo(point.x, point.y);
    drawCanvas.setPointerCapture(event.pointerId);
  });

  drawCanvas.addEventListener("pointermove", (event) => {
    if (!ctx || !isDrawing) {
      return;
    }
    const point = toCanvasPoint(event);
    ctx.lineTo(point.x, point.y);
    ctx.stroke();
  });

  const stopDrawing = () => {
    isDrawing = false;
  };

  drawCanvas.addEventListener("pointerup", stopDrawing);
  drawCanvas.addEventListener("pointerleave", stopDrawing);
  drawCanvas.addEventListener("pointercancel", stopDrawing);

  clearCanvasBtn.addEventListener("click", () => {
    if (!ctx) {
      return;
    }
    ctx.clearRect(0, 0, drawCanvas.width, drawCanvas.height);
    fillCanvasWhite();
  });

  saveCanvasBtn.addEventListener("click", () => {
    saveCurrentDrawing();
  });

  renderSavedDrawings();
}
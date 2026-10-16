(function () {
  var pages = [
    ["index.html", "Home"],
    ["services.html", "Services"],
    ["how-it-works.html", "How It Works"],
    ["who-we-serve.html", "Who We Serve"],
    ["about.html", "About"],
    ["resources.html", "Resources"],
    ["contact.html", "Contact"]
  ];
  var current = location.pathname.split("/").pop() || "index.html";

  var links = pages.map(function (p) {
    return '<a class="link' + (p[0] === current ? " active" : "") + '" href="' + p[0] + '">' + p[1] + "</a>";
  }).join("");

  var header = document.getElementById("site-header");
  if (header) {
    header.className = "site-header";
    header.innerHTML =
      '<div class="container header-inner">' +
      '<a class="logo" href="index.html" aria-label="Revenue Recovery Solutions — home"></a>' +
      '<button class="menu-toggle" aria-expanded="false" aria-controls="nav">Menu</button>' +
      '<nav class="nav" id="nav" aria-label="Main">' + links +
      '<a class="btn btn-gold" href="contact.html">Let’s Recover Your Revenue</a></nav></div>';
    var toggle = header.querySelector(".menu-toggle");
    var nav = header.querySelector(".nav");
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open);
    });
  }

  var footer = document.getElementById("site-footer");
  if (footer) {
    footer.className = "site-footer";
    footer.innerHTML =
      '<div class="container footer-grid">' +
      '<div><a class="logo" href="index.html" aria-label="Revenue Recovery Solutions — home"></a>' +
      '<p class="footer-tag">Recovering Revenue. Restoring Confidence.</p></div>' +
      '<div><h4>Navigation</h4><ul>' +
      pages.map(function (p) { return '<li><a href="' + p[0] + '">' + p[1] + "</a></li>"; }).join("") +
      "</ul></div>" +
      '<div><h4>Let’s Connect</h4>' +
      "<p>Let’s talk about how we can help you reclaim what you’ve earned.</p>" +
      '<p><a class="btn btn-gold" href="contact.html">Schedule a Consultation</a></p>' +
      '<p><a href="mailto:info@rrsdental.com">info@rrsdental.com</a></p></div>' +
      "</div>" +
      '<div class="footer-bar">© ' + new Date().getFullYear() +
      ' Revenue Recovery Solutions. All rights reserved. &nbsp;|&nbsp; <a href="privacy.html" style="color:#fff">Privacy Policy</a></div>';
  }

  // Line icons, used as <i data-icon="name"></i>
  var P = {
    search: '<path d="M7 3h7l4 4v14H7z"/><circle cx="12" cy="14" r="3"/><path d="m14.2 16.2 2.3 2.3"/>',
    list: '<path d="M10 6h10M10 12h10M10 18h10"/><path d="m3.5 6 1.2 1.2L7 5M3.5 12l1.2 1.2L7 11M3.5 18l1.2 1.2L7 17"/>',
    chart: '<path d="M4 20h16M6 16v-4M11 16V9M16 16v-6"/><path d="m5 8 5-4 4 3 5-4"/>',
    doc: '<path d="M7 3h7l4 4v14H7z"/><path d="m10 14 2 2 3-4"/>',
    calendar: '<rect x="4" y="5" width="16" height="15" rx="2"/><path d="M4 10h16M9 3v4M15 3v4M8 14h2M14 14h2M8 17h2"/>',
    loop: '<path d="M20 12a8 8 0 0 1-14 5.3M4 12a8 8 0 0 1 14-5.3"/><path d="M18 3v4h-4M6 21v-4h4"/>',
    team: '<circle cx="12" cy="8" r="3"/><circle cx="5.5" cy="10" r="2"/><circle cx="18.5" cy="10" r="2"/><path d="M6.5 20v-2a5.5 5.5 0 0 1 11 0v2M1.5 18v-1.5a3.5 3.5 0 0 1 4-3.4M22.5 18v-1.5a3.5 3.5 0 0 0-4-3.4"/>',
    shield: '<path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6z"/><path d="m12 9 1.2 2.4 2.6.4-1.9 1.8.5 2.6-2.4-1.3-2.4 1.3.5-2.6-1.9-1.8 2.6-.4z"/>',
    tooth: '<path d="M7 4c-2 0-3.5 1.5-3.5 4 0 3 1.5 4 2 7s1 5 2.5 5 1.5-4 4-4 2.5 4 4 4 2-2 2.5-5 2-4 2-7c0-2.500-1.500-4-3.500-4-2 0-2.500 1-5 1S9 4 7 4z"/>',
    clip: '<rect x="6" y="4" width="12" height="17" rx="2"/><path d="M9 4V3h6v1M9 10h6M9 14h6M9 18h3"/>',
    briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M3 13h18"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    check: '<circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/>',
    star: '<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.100L12 17l-5.4 2.900 1-6.100L3.200 9.500l6.100-.9z"/>'
  };
  document.querySelectorAll("i[data-icon]").forEach(function (el) {
    var path = P[el.dataset.icon];
    if (!path) return;
    var span = document.createElement("span");
    span.className = "icon";
    span.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true">' + path + "</svg>";
    el.replaceWith(span);
  });
  document.querySelectorAll("i[data-icon-bare]").forEach(function (el) {
    var path = P[el.dataset.iconBare];
    if (!path) return;
    el.outerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true">' + path + "</svg>";
  });

  // Scroll reveal
  var items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add("in"); });
  }

  // Checklist signup placeholder until an email tool is connected
  var checklist = document.getElementById("checklist-form");
  if (checklist) {
    checklist.addEventListener("submit", function (e) {
      e.preventDefault();
      checklist.querySelector("button").textContent = "Coming soon";
    });
  }

  // Contact form (Formspree / Web3Forms compatible: set the form's action)
  var form = document.getElementById("consult-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      var status = document.getElementById("form-status");
      if (form.action.indexOf("YOUR_FORM_ID") !== -1) {
        e.preventDefault();
        status.textContent = "Form endpoint not connected yet — see the TODO in contact.html.";
        return;
      }
      if (!window.fetch) return; // fall back to normal submit
      e.preventDefault();
      status.textContent = "Sending…";
      fetch(form.action, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } })
        .then(function (r) {
          if (!r.ok) throw new Error();
          form.reset();
          status.textContent = "Thank you! We’ll be in touch shortly to schedule your consultation.";
        })
        .catch(function () {
          status.textContent = "Something went wrong. Please email us directly.";
        });
    });
  }
})();

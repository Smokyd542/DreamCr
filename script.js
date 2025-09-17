(function () {
  const items = document.querySelectorAll(".faq-item");
  items.forEach((item) => {
    const btn = item.querySelector(".faq-button");
    const chevron = item.querySelector(".chev");
    const answer = item.querySelector(".faq-answer");

    btn.addEventListener("click", () => {
      const isOpen = item.getAttribute("aria-open") === "true";
      items.forEach((i) => {
        i.setAttribute("aria-open", "false");
        i.querySelector(".faq-button").setAttribute("aria-expanded", "false");
        i.querySelector(".chev").classList.remove("open");
      });

      if (!isOpen) {
        item.setAttribute("aria-open", "true");
        btn.setAttribute("aria-expanded", "true");
        chevron.classList.add("open");
        answer.setAttribute("tabindex", "-1");
        answer.focus({ preventScroll: true });
      }
    });
  });
})();

window.addEventListener("scroll", function () {
  const nav = this.document.querySelector("nav");
  if (this.window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

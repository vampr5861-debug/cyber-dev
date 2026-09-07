const reveals = document.querySelectorAll(".reveal");

reveals.forEach((el, index) => {
  if (!el.style.getPropertyValue("--delay")) {
    el.style.setProperty("--delay", `${80 + index * 90}ms`);
  }
});

const auraElement = document.querySelector(".cursor-follower");

if (auraElement) {
  const updateAuraPosition = (e) => {
    auraElement.style.setProperty("--mouse-x", `${e.clientX}px`);
    auraElement.style.setProperty("--mouse-y", `${e.clientY}px`);
  };

  window.addEventListener("pointermove", updateAuraPosition);

  window.addEventListener("beforeunload", () => {
    window.removeEventListener("pointermove", updateAuraPosition);
  });
}

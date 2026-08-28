(() => {
  const pronunciation = document.querySelector(".pronunciation");
  if (!pronunciation) return;

  let timer = null;
  let pinned = false;

  const show = () => pronunciation.classList.remove("is-auto-hidden");
  const hide = () => pronunciation.classList.add("is-auto-hidden");
  const clearTimer = () => {
    if (timer !== null) {
      window.clearTimeout(timer);
      timer = null;
    }
  };

  pronunciation.addEventListener("pointerenter", (event) => {
    if (event.pointerType === "mouse") show();
  });

  pronunciation.addEventListener("pointerleave", (event) => {
    if (event.pointerType === "mouse" && !pinned) hide();
  });

  pronunciation.addEventListener("click", () => {
    clearTimer();
    pinned = true;
    show();

    timer = window.setTimeout(() => {
      pinned = false;
      hide();
      timer = null;
    }, 2800);
  });

  pronunciation.addEventListener("focus", show);

  pronunciation.addEventListener("blur", () => {
    if (!pinned) hide();
  });
})();

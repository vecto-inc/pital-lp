document.querySelectorAll(".faq-linear-list details").forEach((item) => {
  item.addEventListener("toggle", () => {
    if (!item.open) return;

    document
      .querySelectorAll(".faq-linear-list details[open]")
      .forEach((openItem) => {
        if (openItem !== item) openItem.open = false;
      });
  });
});

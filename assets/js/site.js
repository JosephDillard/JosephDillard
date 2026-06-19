const yearTargets = document.querySelectorAll("[data-current-year]");
yearTargets.forEach((target) => {
  target.textContent = String(new Date().getFullYear());
});

const copyButton = document.querySelector("[data-copy-email]");
const copyStatus = document.querySelector("[data-copy-status]");

if (copyButton && copyStatus) {
  copyButton.addEventListener("click", async () => {
    const email = copyButton.getAttribute("data-copy-email");

    try {
      await navigator.clipboard.writeText(email);
      copyStatus.textContent = "Email copied.";
    } catch (error) {
      copyStatus.textContent = email;
    }
  });
}

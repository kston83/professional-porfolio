export function initClock(): void {
  const el = document.getElementById("clock");
  if (!el) return;

  function update() {
    const t = new Date().toTimeString().split(" ")[0];
    el!.textContent = t;
  }

  update();
  setInterval(update, 1000);
}

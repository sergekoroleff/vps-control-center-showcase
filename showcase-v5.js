/* VCC 5.0 public site: static synthetic demo only; no network, auth or telemetry. */
(() => {
  "use strict";
  const tabs = [...document.querySelectorAll('[role="tab"][data-tab]')];
  const panels = new Map([...document.querySelectorAll('[role="tabpanel"]')].map(p => [p.id, p]));
  const valid = new Set(["dashboard", "us", "nl"]);

  function activate(key, moveFocus = false) {
    if (!valid.has(key)) return;
    for (const tab of tabs) {
      const selected = tab.dataset.tab === key;
      const panel = panels.get(tab.getAttribute("aria-controls"));
      if (!panel) continue;
      tab.setAttribute("aria-selected", selected ? "true" : "false");
      tab.tabIndex = selected ? 0 : -1;
      panel.hidden = !selected;
      if (selected && moveFocus) tab.focus();
    }
  }

  for (const [index, tab] of tabs.entries()) {
    tab.addEventListener("click", () => activate(tab.dataset.tab));
    tab.addEventListener("keydown", event => {
      let next;
      if (event.key === "ArrowRight") next = tabs[(index + 1) % tabs.length];
      else if (event.key === "ArrowLeft") next = tabs[(index + tabs.length - 1) % tabs.length];
      else if (event.key === "Home") next = tabs[0];
      else if (event.key === "End") next = tabs[tabs.length - 1];
      else return;
      event.preventDefault();
      activate(next.dataset.tab, true);
    });
  }

  activate("dashboard");
})();

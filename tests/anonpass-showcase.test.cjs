"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const root = path.resolve(__dirname, "..");
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const css = fs.readFileSync(path.join(root, "showcase-v5.css"), "utf8");
const js = fs.readFileSync(path.join(root, "showcase-v5.js"), "utf8");
const readme = fs.readFileSync(path.join(root, "README.md"), "utf8");
const story = fs.readFileSync(path.join(root, "ANONPASS_V13_SHOWCASE_2026-11-22.md"), "utf8");

const modes = ["password", "passphrase", "pin", "codeword"];
const screens = ["dashboard", "us", "nl", "anonpass"];
const occurrence = (s, needle) => s.split(needle).length - 1;

test("all Mini App tabs and four ANONPASS modes have accessible panel references", () => {
  for (const m of screens) {
    assert.equal(occurrence(html, 'id="tab-' + m + '"'), 1);
    assert.equal(occurrence(html, 'id="panel-' + m + '"'), 1);
    assert.match(html, new RegExp('aria-controls="panel-' + m + '"'));
    assert.match(js, /"dashboard", "us", "nl", "anonpass"/);
  }
  for (const m of modes) {
    assert.equal(occurrence(html, 'id="ap-show-tab-' + m + '"'), 1);
    assert.equal(occurrence(html, 'id="ap-show-panel-' + m + '"'), 1);
    assert.match(html, new RegExp('data-anonpass-mode="' + m + '"'));
    assert.match(html, new RegExp('aria-controls="ap-show-panel-' + m + '"'));
  }
  assert.equal(occurrence(html, 'id="anonpass"'), 1);
  assert.match(html, /<a href="#anonpass">ANONPASS<\/a>/);
  assert.match(html, /<strong>04<\/strong><span>вкладки Mini App<\/span>/);
  const ids = Array.from(html.matchAll(/\bid="([^"]+)"/g), x=>x[1]);
  assert.equal(ids.length, new Set(ids).size, "duplicate HTML IDs");
});

test("public showcase cannot generate, fetch, receive, copy or persist any secret", () => {
  assert.doesNotMatch(js, /\bfetch\s*\(|XMLHttpRequest|navigator\.clipboard|crypto\.getRandomValues|Math\.random|localStorage|sessionStorage|WebSocket|sendBeacon|\.postMessage\s*\(/);
  assert.doesNotMatch(html, /<input\b|<textarea\b|<form\b/i);
  assert.match(html, /DEMO PREVIEW · НЕ СОЗДАЁТ ПАРОЛИ/);
  assert.match(html, /<strong>PUBLIC SHOWCASE:<\/strong>/);
  assert.match(html, /не генерируют, не копируют и не принимают секреты/);
  assert.match(readme, /no real password generation/i);
  assert.match(story, /does not reproduce the private generator code/);
});

test("public statements are bounded to accepted ANONPASS v1.3 and six assets", () => {
  for (const s of [
    "ANONPASS13_SERVER_GITHUB_PARITY: PASS (6/6)",
    "9e5b88d23a2c8b7d88068e3e744b4cdc98548788",
    "9d65ad96dfc44b1cacaa2b4d004cd84781dad7ab"
  ]) assert.ok(story.includes(s), s);
  assert.match(html, /6 \/ 6 <small>PASS<\/small>/);
  assert.match(html, /12–64 символа/);
  assert.match(html, /4–8 независимых слов/);
  assert.match(html, /4, 6 или 8 цифр/);
  assert.match(html, /не замена паролю или OTP/);
  assert.match(story, /six ANONPASS files/);
  assert.match(readme, /not full US\/NL infrastructure/);
  assert.match(html, /VPN теперь в Amnezia/);
  assert.match(html, /ARCHIVED · NOT IN VCC BOT/);
});

test("ANONPASS is laid out responsibly at desktop and mobile widths", () => {
  assert.match(css, /\.anonpass-showcase-grid\s*\{/);
  assert.match(css, /\.anonpass-tabs button\[aria-selected="true"\]/);
  assert.match(css, /\.anonpass-mode-panel\[hidden\]\{display:none!important\}/);
  assert.match(css, /@media\(max-width:520px\)/);
  assert.match(css, /@media\(prefers-reduced-motion:reduce\)/);
  assert.match(html, /rel="stylesheet" href="showcase-v5\.css"/);
  assert.match(html, /src="showcase-v5\.js" defer/);
});

function makeTab(id, dataset, controls, active) {
  return {
    id, dataset,
    attrs: {"aria-controls":controls, "aria-selected":active?"true":"false"},
    tabIndex:active?0:-1, listeners:{}, focused:false,
    setAttribute(k,v){this.attrs[k]=v;},
    getAttribute(k){return this.attrs[k];},
    addEventListener(e,cb){this.listeners[e]=cb;},
    click(){this.listeners.click();},
    key(e){let blocked=false;this.listeners.keydown({key:e,preventDefault(){blocked=true;}});return blocked;},
    focus(){this.focused=true;}
  };
}
test("public preview responds to click and keyboard arrows, with no network state", () => {
  const primary=screens.map((m,i)=>makeTab("tab-"+m,{tab:m},"panel-"+m,i===0));
  const secondary=modes.map((m,i)=>makeTab("ap-show-tab-"+m,{anonpassMode:m},"ap-show-panel-"+m,i===0));
  const panels=new Map([...screens.map((m,i)=>["panel-"+m,{id:"panel-"+m,hidden:i!==0}]),
    ...modes.map((m,i)=>["ap-show-panel-"+m,{id:"ap-show-panel-"+m,hidden:i!==0}])]);
  const document={
    querySelectorAll(sel){
      if(sel==='[role="tab"][data-tab]')return primary;
      if(sel==='[role="tabpanel"]')return [...panels.values()];
      if(sel==='[role="tab"][data-anonpass-mode]')return secondary;
      throw Error("unexpected selector "+sel);
    },
    getElementById(id){return panels.get(id);}
  };
  vm.runInNewContext(js,{document});
  assert.equal(panels.get("panel-dashboard").hidden,false);
  primary[3].click();
  assert.equal(panels.get("panel-anonpass").hidden,false);
  assert.equal(panels.get("panel-dashboard").hidden,true);
  assert.equal(primary[3].attrs["aria-selected"],"true");
  secondary[2].click();
  assert.equal(panels.get("ap-show-panel-pin").hidden,false);
  assert.equal(panels.get("ap-show-panel-password").hidden,true);
  assert.equal(secondary[2].attrs["aria-selected"],"true");
  assert.equal(secondary[2].key("ArrowRight"),true);
  assert.equal(panels.get("ap-show-panel-codeword").hidden,false);
  assert.equal(secondary[3].focused,true);
  assert.equal(secondary[3].key("Home"),true);
  assert.equal(panels.get("ap-show-panel-password").hidden,false);
  assert.equal(primary[3].key("Home"),true);
  assert.equal(panels.get("panel-dashboard").hidden,false);
});

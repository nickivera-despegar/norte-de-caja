/* ============================================================
   Despegar travel-app prototype
   ============================================================ */

/* -------------------- Icon library -------------------- */
const ICONS = {
  alojamientos: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 19v-7h18v7"/>
    <path d="M5 12V8a1 1 0 011-1h12a1 1 0 011 1v4"/>
    <path d="M7 12v-1a2 2 0 012-2h2a1 1 0 011 1v2"/>
    <path d="M12 12v-2a1 1 0 011-1h2a2 2 0 012 2v1"/>
    <path d="M3 19v2M21 19v2"/></svg>`,

  vuelos: `<svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M21 14.5l-7-1.7V8.2c0-1-.4-1.7-1.1-2L12 6c-.7.2-1.1 1-1.1 2v4.6L4 14.5l-1 1L4 17.4l6.9-1.7v3l-1.6 1 .3 1.6 2.3-.8 2.4.8.3-1.6-1.6-1v-3l6.9 1.7 1-1.9-1-1z"/></svg>`,

  paquetes: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3.5 8l8.5-4 8.5 4-8.5 4-8.5-4z"/>
    <path d="M3.5 8v8l8.5 4 8.5-4V8"/>
    <path d="M12 12v8"/>
    <path d="M7.75 6l8.5 4"/></svg>`,

  actividades: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 8a2 2 0 012-2h14a2 2 0 012 2v2a2 2 0 000 4v2a2 2 0 00-2 2v2H5v-2a2 2 0 00-2-2v-2a2 2 0 000-4V8z"/>
    <path d="M9 6v12" stroke-dasharray="2 2"/></svg>`,

  autos: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
    <path d="M5 16v-3l1.6-4.8A2 2 0 018.5 7h7a2 2 0 011.9 1.2L19 13v3"/>
    <rect x="3" y="13" width="18" height="4" rx="1.5"/>
    <circle cx="7.5" cy="18" r="1.3" fill="currentColor" stroke="none"/>
    <circle cx="16.5" cy="18" r="1.3" fill="currentColor" stroke="none"/>
    <path d="M5 13h14"/></svg>`,

  disney: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7">
    <circle cx="12" cy="14" r="5.5"/>
    <circle cx="6.5" cy="6.5" r="3"/>
    <circle cx="17.5" cy="6.5" r="3"/></svg>`,

  universal: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7">
    <circle cx="12" cy="12" r="9"/>
    <ellipse cx="12" cy="12" rx="3.5" ry="9"/>
    <path d="M3 12h18"/></svg>`,

  asistencias: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 3l8 3v5c0 4.5-3.4 8.5-8 10-4.6-1.5-8-5.5-8-10V6l8-3z"/>
    <path d="M12 9v6M9 12h6"/></svg>`,

  traslados: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="6" width="18" height="10" rx="2"/>
    <path d="M3 12h18"/>
    <circle cx="7" cy="18" r="1.4" fill="currentColor" stroke="none"/>
    <circle cx="17" cy="18" r="1.4" fill="currentColor" stroke="none"/>
    <path d="M7 6V4M17 6V4"/></svg>`,

  sofia: `<svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l1.7 4.6L18 8l-4.3 1.4L12 14l-1.7-4.6L6 8l4.3-1.4L12 2z"/>
    <path d="M18.5 14l1 2.7L22 17.5l-2.5.8-1 2.7-1-2.7-2.5-.8 2.5-.8 1-2.7z"/>
    <path d="M5 14l.6 1.6L7 16l-1.4.4L5 18l-.6-1.6L3 16l1.4-.4L5 14z"/></svg>`,

  'more-dots': `<svg viewBox="0 0 24 24" fill="currentColor">
    <circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/></svg>`,

  // utility
  search: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M10.5 3a7.5 7.5 0 015.916 12.124l4.23 4.23a1 1 0 01-1.414 1.415l-4.23-4.23A7.5 7.5 0 1110.5 3zm0 2a5.5 5.5 0 100 11 5.5 5.5 0 000-11z"/></svg>`,
  cart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 4h2l2.4 11.2A2 2 0 009.36 17H18a2 2 0 001.96-1.6L21.6 8H6.21"/><circle cx="10" cy="20" r="1.4" fill="currentColor" stroke="none"/><circle cx="17" cy="20" r="1.4" fill="currentColor" stroke="none"/></svg>`,
  trophy: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4h14v6c0 3.9-3.1 7-7 7s-7-3.1-7-7V4z"/><path d="M5 6H2a3 3 0 003 3M19 6h3a3 3 0 01-3 3M9 20h6M12 17v3"/></svg>`,
  close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M6 18L18 6"/></svg>`,
  'close-small': `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#d8d6e2"/><path d="M8 8l8 8M8 16L16 8" stroke="#fff" stroke-width="2" stroke-linecap="round"/></svg>`,
  back: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6l-6 6 6 6"/></svg>`,
  pin: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a7 7 0 017 7c0 5-7 13-7 13S5 14 5 9a7 7 0 017-7zm0 5a2 2 0 100 4 2 2 0 000-4z"/></svg>`,
  cal: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4" stroke-linecap="round"/></svg>`,
  chev: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg>`,
  user: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c1.5-4 5-6 8-6s6.5 2 8 6"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>`,
  home: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M3 11l9-8 9 8v9a2 2 0 01-2 2h-4v-7H9v7H5a2 2 0 01-2-2v-9z"/></svg>`,
  offers: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"><path d="M7 3l-3 6 8 12 8-12-3-6H7zM7 3l5 6 5-6M4 9h16"/></svg>`,
  trips: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><rect x="4" y="5" width="16" height="15" rx="2"/><path d="M4 10h16M9 5V3M15 5V3"/></svg>`,
  'vuelos-color': `<svg viewBox="0 0 24 24" fill="#270570"><path d="M21 14.5l-7-1.7V8.2c0-1-.4-1.7-1.1-2L12 6c-.7.2-1.1 1-1.1 2v4.6L4 14.5l-1 1L4 17.4l6.9-1.7v3l-1.6 1 .3 1.6 2.3-.8 2.4.8.3-1.6-1.6-1v-3l6.9 1.7 1-1.9-1-1z"/></svg>`,
  edit: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round"><path d="M4 20h4l10-10-4-4L4 16v4z"/><path d="M14 6l4 4"/></svg>`,
  share: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="M8 11l8-4M8 13l8 4"/></svg>`,
  filter: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h16M7 12h10M10 18h4"/></svg>`,
  send: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/></svg>`,
  refresh: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 019-9 9 9 0 016.7 3"/><path d="M21 3v6h-6"/><path d="M21 12a9 9 0 01-9 9 9 9 0 01-6.7-3"/><path d="M3 21v-6h6"/></svg>`,
};

function injectIcons(root = document) {
  root.querySelectorAll('[data-icon]').forEach(el => {
    const k = el.dataset.icon;
    const svg = ICONS[k];
    if (!svg) return;
    if (el.tagName.toLowerCase() === 'svg') {
      el.outerHTML = svg.replace('<svg', `<svg class="${el.getAttribute('class') || ''}"`);
    } else {
      el.innerHTML = svg;
    }
  });
  root.querySelectorAll('[data-svg]').forEach(el => {
    const k = el.dataset.svg;
    if (ICONS[k]) el.innerHTML = ICONS[k];
  });
}

/* -------------------- Mock data -------------------- */
const DESTINATIONS = [
  { name: "Buenos Aires", country: "Argentina" },
  { name: "Bariloche", country: "Argentina" },
  { name: "Mendoza", country: "Argentina" },
  { name: "Mar del Plata", country: "Argentina" },
  { name: "Río de Janeiro", country: "Brasil" },
  { name: "Florianópolis", country: "Brasil" },
  { name: "Salvador de Bahía", country: "Brasil" },
  { name: "São Paulo", country: "Brasil" },
  { name: "Miami", country: "Estados Unidos" },
  { name: "Orlando", country: "Estados Unidos" },
  { name: "Nueva York", country: "Estados Unidos" },
  { name: "Madrid", country: "España" },
  { name: "Barcelona", country: "España" },
  { name: "París", country: "Francia" },
  { name: "Roma", country: "Italia" },
  { name: "Lima", country: "Perú" },
  { name: "Cusco", country: "Perú" },
  { name: "Santiago de Chile", country: "Chile" },
  { name: "Cancún", country: "México" },
  { name: "Punta Cana", country: "República Dominicana" },
  { name: "Milwaukee", country: "Estados Unidos" },
];

/* -------------------- State -------------------- */
const state = {
  currentProduct: "alojamientos",
  formStates: {},
  lastSearch: null,  // { product, summary, when }
};

const PRODUCTS = {
  sofia:        { title: "SOFIA",        iconKey: "sofia",        render: null },     // landing
  alojamientos: { title: "Alojamientos", iconKey: "alojamientos", render: renderAlojamientos },
  vuelos:       { title: "Vuelos",       iconKey: "vuelos",       render: renderVuelos },
  paquetes:     { title: "Paquetes",     iconKey: "paquetes",     render: renderPaquetes },
  actividades:  { title: "Actividades",  iconKey: "actividades",  render: renderActividades },
  autos:        { title: "Autos",        iconKey: "autos",        render: renderAutos },
  disney:       { title: "Disney",       iconKey: "disney",       render: null },     // landing
  universal:    { title: "Universal",    iconKey: "universal",    render: null },     // landing
  asistencias:  { title: "Asistencias",  iconKey: "asistencias",  render: renderAsistencias },
  traslados:    { title: "Traslados",    iconKey: "traslados",    render: renderTraslados },
};

function getFormState(p) {
  if (!state.formStates[p]) state.formStates[p] = {};
  return state.formStates[p];
}

/* ============================================================
   Field builders
   ============================================================ */
function field({ icon, label, value, ghost = false, key }) {
  const cls = ["field"];
  if (ghost) cls.push("field--ghost");
  if (value) cls.push("has-value");
  return `
    <button class="${cls.join(" ")}" data-field="${key || ''}" type="button">
      <span class="field-icon">${icon || ''}</span>
      <span class="field-text"><span class="field-label">${value || label}</span></span>
      <span class="field-chev">${ICONS.chev}</span>
    </button>`;
}

function splitField({ leftIcon, leftLabel, leftValue, rightIcon, rightLabel, rightValue, leftKey, rightKey }) {
  return `
    <div class="field field--split">
      <button class="field-half" type="button" data-field="${leftKey}">
        <span class="field-icon">${leftIcon || ''}</span>
        <span class="field-label">${leftValue || leftLabel}</span>
      </button>
      <div class="divider"></div>
      <button class="field-half" type="button" data-field="${rightKey}">
        <span class="field-icon">${rightIcon || ''}</span>
        <span class="field-label">${rightValue || rightLabel}</span>
      </button>
    </div>`;
}

function toggleRow({ label, checked, key }) {
  return `
    <label class="toggle-row">
      <span class="switch">
        <input type="checkbox" data-toggle="${key}" ${checked ? "checked" : ""} />
        <span class="slider"></span>
      </span>
      <span>${label}</span>
      <span class="info">i</span>
    </label>`;
}

function segmented({ key, options, value }) {
  const cls = options.length === 2 ? "segmented cols-2" : "segmented";
  return `<div class="${cls}" data-segmented="${key}">
    ${options.map(o => `<button type="button" data-value="${o.value}" class="${o.value === value ? 'active' : ''}">${o.label}</button>`).join('')}
  </div>`;
}

/* ============================================================
   Product renderers
   ============================================================ */
function renderAlojamientos() {
  const s = getFormState("alojamientos");
  return `
    ${field({ icon: ICONS.alojamientos, label: s.tipo || "Todos", value: s.tipo || "Todos", ghost: true, key: "tipo" })}
    ${field({ icon: ICONS.pin, label: "Destino", value: s.destino, key: "destino" })}
    ${splitField({ leftIcon: ICONS.cal, leftLabel: "Entrada", leftValue: s.entrada, rightLabel: "Salida", rightValue: s.salida, leftKey: "entrada", rightKey: "salida" })}
    ${toggleRow({ label: "Cualquier fecha más barata", checked: !!s.flex, key: "flex" })}
    ${field({ icon: ICONS.alojamientos, label: "Habitaciones", value: s.habitaciones || "1 habitación, 2 personas", key: "habitaciones" })}
  `;
}

const FLIGHT_TYPE_LABELS = { rt: "Ida y vuelta", ow: "Solo ida", md: "Multidestino" };

function renderVuelos() {
  const s = getFormState("vuelos");
  if (!s.flightType) s.flightType = "rt";
  const ftLabel = FLIGHT_TYPE_LABELS[s.flightType] || "Ida y vuelta";
  return `
    ${field({ icon: ICONS.vuelos, label: ftLabel, value: ftLabel, ghost: true, key: "flightType" })}
    ${field({ icon: ICONS.vuelos, label: "Origen", value: s.origen, key: "origen" })}
    ${field({ icon: ICONS.pin, label: "Destino", value: s.destino, key: "destino" })}
    ${splitField({ leftIcon: ICONS.cal, leftLabel: "Ida", leftValue: s.ida, rightLabel: "Vuelta", rightValue: s.vuelta, leftKey: "ida", rightKey: "vuelta" })}
    ${toggleRow({ label: "Fechas flexibles", checked: !!s.flex, key: "flex" })}
    ${field({ icon: ICONS.user, label: "Pasajeros", value: s.pasajeros || "1 adulto", key: "pasajeros" })}
  `;
}

function renderPaquetes() {
  const s = getFormState("paquetes");
  return `
    ${field({ icon: ICONS.vuelos, label: "Origen", value: s.origen, key: "origen" })}
    ${field({ icon: ICONS.pin, label: "Destino", value: s.destino, key: "destino" })}
    ${splitField({ leftIcon: ICONS.cal, leftLabel: "Ida", leftValue: s.ida, rightLabel: "Vuelta", rightValue: s.vuelta, leftKey: "ida", rightKey: "vuelta" })}
    ${toggleRow({ label: "Cualquier fecha más barata", checked: !!s.flex, key: "flex" })}
    ${field({ icon: ICONS.user, label: "Habitaciones", value: s.distribucion || "1 habitación, 2 personas", key: "distribucion" })}
    <div class="sbox-links">
      <button type="button" class="sbox-link" data-unavailable="1">Cambiar ciudad o fechas del alojamiento</button>
      <button type="button" class="sbox-link" data-unavailable="1">Agregar segundo destino para alojarme</button>
    </div>
  `;
}

function renderActividades() {
  const s = getFormState("actividades");
  return `
    ${field({ icon: ICONS.pin, label: "Destino", value: s.destino, key: "destino" })}
    ${splitField({ leftIcon: ICONS.cal, leftLabel: "Desde", leftValue: s.desde, rightLabel: "Hasta", rightValue: s.hasta, leftKey: "desde", rightKey: "hasta" })}
  `;
}

function renderAutos() {
  const s = getFormState("autos");
  return `
    ${field({ icon: ICONS.pin, label: "Lugar de retiro", value: s.origen, key: "origen" })}
    ${toggleRow({ label: "Devolver en otro destino", checked: !!s.otherDest, key: "otherDest" })}
    ${s.otherDest ? field({ icon: ICONS.pin, label: "Lugar de devolución", value: s.destino, key: "destino" }) : ''}
    ${splitField({ leftIcon: ICONS.cal, leftLabel: "Retiro", leftValue: s.retiro, rightLabel: "Devolución", rightValue: s.devolucion, leftKey: "retiro", rightKey: "devolucion" })}
    ${splitField({ leftIcon: ICONS.clock, leftLabel: "Hora retiro", leftValue: s.horaRetiro, rightIcon: ICONS.clock, rightLabel: "Hora devolución", rightValue: s.horaDevolucion, leftKey: "horaRetiro", rightKey: "horaDevolucion" })}
  `;
}

function renderAsistencias() {
  const s = getFormState("asistencias");
  return `
    ${field({ icon: ICONS.pin, label: "Destino del viaje", value: s.destino, key: "destino" })}
    ${splitField({ leftIcon: ICONS.cal, leftLabel: "Desde", leftValue: s.desde, rightLabel: "Hasta", rightValue: s.hasta, leftKey: "desde", rightKey: "hasta" })}
    ${field({ icon: ICONS.user, label: "Pasajeros", value: s.pasajeros || "1 adulto", key: "pasajeros" })}
  `;
}

function renderTraslados() {
  const s = getFormState("traslados");
  if (!s.tipo) s.tipo = "fromAirport";
  return `
    ${segmented({ key: "tipo", value: s.tipo, options: [
      { value: "fromAirport", label: "Desde aeropuerto" },
      { value: "toAirport", label: "Hacia aeropuerto" },
    ]})}
    ${field({ icon: ICONS.pin, label: "Origen", value: s.origen, key: "origen" })}
    ${field({ icon: ICONS.pin, label: "Destino", value: s.destino, key: "destino" })}
    ${splitField({ leftIcon: ICONS.cal, leftLabel: "Fecha llegada", leftValue: s.fechaLlegada, rightIcon: ICONS.clock, rightLabel: "Hora", rightValue: s.horaLlegada, leftKey: "fechaLlegada", rightKey: "horaLlegada" })}
    ${toggleRow({ label: "Quiero agregar el regreso", checked: !!s.regreso, key: "regreso" })}
    ${s.regreso ? splitField({ leftIcon: ICONS.cal, leftLabel: "Fecha salida", leftValue: s.fechaSalida, rightIcon: ICONS.clock, rightLabel: "Hora", rightValue: s.horaSalida, leftKey: "fechaSalida", rightKey: "horaSalida" }) : ''}
    ${field({ icon: ICONS.user, label: "Pasajeros", value: s.pasajeros || "1 adulto", key: "pasajeros" })}
  `;
}

/* ============================================================
   SOFIA chat landing
   ============================================================ */
function initSofiaChat() {
  const chat = $("#slChat");
  chat.innerHTML = `
    <div class="sl-greeting">
      <div class="sl-avatar-big" data-svg="sofia"></div>
      <h2>Hola, soy Sofia</h2>
      <p>Tu asistente de viajes con IA. ¿En qué puedo ayudarte?</p>
    </div>
  `;
  injectIcons(chat);
  $("#slSuggest").style.display = "";
  const input = $("#slInput");
  input.value = "";
  input.style.height = "auto";
  document.getElementById("sofiaNav")?.classList.remove("sofia-nav--collapsed");
}

function sofiaScrollBottom() {
  const c = $("#slChat");
  c.scrollTop = c.scrollHeight;
}

function appendUserBubble(text) {
  const greeting = $("#slChat").querySelector(".sl-greeting");
  if (greeting) greeting.remove();
  const el = document.createElement("div");
  el.className = "sl-bubble sl-bubble--user";
  el.textContent = text;
  $("#slChat").appendChild(el);
  sofiaScrollBottom();
}

function appendSofiaBubble(text, { ctaLabel, onCta } = {}) {
  const el = document.createElement("div");
  el.className = "sl-bubble sl-bubble--sofia";
  el.innerHTML = `
    <span class="sl-bubble-avatar" data-svg="sofia"></span>
    <div class="sl-bubble-body">${escapeHtml(text)}</div>
  `;
  injectIcons(el);
  if (ctaLabel) {
    const btn = document.createElement("button");
    btn.className = "sl-cta";
    btn.textContent = ctaLabel;
    btn.addEventListener("click", onCta);
    el.querySelector(".sl-bubble-body").appendChild(document.createElement("br"));
    el.querySelector(".sl-bubble-body").appendChild(btn);
  }
  $("#slChat").appendChild(el);
  sofiaScrollBottom();
  return el;
}

function appendTyping() {
  const el = document.createElement("div");
  el.className = "sl-bubble sl-bubble--sofia sl-typing";
  el.innerHTML = `
    <span class="sl-bubble-avatar" data-svg="sofia"></span>
    <div class="sl-bubble-body">
      <span class="sl-typing-dot"></span>
      <span class="sl-typing-dot"></span>
      <span class="sl-typing-dot"></span>
    </div>
  `;
  injectIcons(el);
  $("#slChat").appendChild(el);
  sofiaScrollBottom();
  return el;
}

function sofiaSend(text) {
  if (!text || !text.trim()) return;
  const msg = text.trim();
  $("#slSuggest").style.display = "none";
  appendUserBubble(msg);

  const input = $("#slInput");
  input.value = "";
  input.style.height = "auto";

  hideSofiaTabsOnTalk();  // (b) pinned tabs slide up on first message
  sofiaTurn(0, msg);      // (c) button-driven multi-turn conversation
}

function sofiaShowResults(prompt) {
  getFormState("sofia").prompt = prompt;
  state.currentProduct = "sofia";
  state.lastSearch = {
    product: "sofia",
    title: "SOFIA · Búsqueda con IA",
    sub: prompt.length > 56 ? prompt.slice(0, 56) + "…" : prompt,
  };
  renderResults();
  showScreen("results");
}

/* ============================================================
   DOM helpers + screen switching
   ============================================================ */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

function showScreen(id) {
  $$(".screen").forEach(s => {
    const active = s.id === id;
    s.classList.toggle("active", active);
    s.hidden = !active;
  });
}

function setProduct(product) {
  // Products with their own landing pages bypass the search form
  if (product === "sofia")     return goLanding("sofia");
  if (product === "disney")    return goLanding("disney");
  if (product === "universal") return goLanding("universal");

  state.currentProduct = product;
  const def = PRODUCTS[product];
  if (!def || !def.render) return;

  // Render target: the modal sbox, or the inline box on home (box-on-home vision)
  const root = (state.boxTarget === "home" && document.getElementById("homeInlineBox"))
    ? document.getElementById("homeInlineBox")
    : document.getElementById("sbox");

  const visibleTabs = ["sofia", "alojamientos", "vuelos", "paquetes"];
  root.querySelectorAll(".sbox-tabs .tab").forEach(t => {
    const tab = t.dataset.tab;
    if (tab === product) t.classList.add("active");
    else if (tab === "more" && !visibleTabs.includes(product)) t.classList.add("active");
    else t.classList.remove("active");
  });

  const iconEl = root.querySelector(".sph-icon");
  const titleEl = root.querySelector(".sph-title");
  const bodyEl = root.querySelector(".sbox-body");
  if (iconEl) iconEl.innerHTML = ICONS[def.iconKey] || '';
  if (titleEl) titleEl.textContent = def.title;
  if (bodyEl) bodyEl.innerHTML = def.render();

  attachFormHandlers(root);
}

function openSbox(product = "alojamientos") {
  state.boxTarget = "sbox";
  if (product === "sofia")     return goLanding("sofia");
  if (product === "disney")    return goLanding("disney");
  if (product === "universal") return goLanding("universal");

  if (product === "more") {
    if (!PRODUCTS[state.currentProduct]?.render) setProduct("alojamientos");
    showScreen("sbox");
    requestAnimationFrame(openMoreSheet);
    return;
  }
  setProduct(product);
  showScreen("sbox");
}

function closeSbox() {
  showScreen("home");
  closeMoreSheet();
}

function openMoreSheet() {
  $("#moreSheet").hidden = false;
  $("#bsBackdrop").hidden = false;
}
function closeMoreSheet() {
  $("#moreSheet").hidden = true;
  $("#bsBackdrop").hidden = true;
}

/* ============================================================
   Landing pages
   ============================================================ */
function goLanding(which) {
  closeMoreSheet();
  if (which === "sofia") {
    initSofiaChat();
    return showScreen("sofiaLanding");
  }
  if (which === "disney" || which === "universal") {
    // (d) remember where we came from so "back" returns there (e.g. the searchbox)
    state.landingReturn = document.querySelector(".screen.active")?.id || "home";
    return showScreen(which === "disney" ? "disneyLanding" : "universalLanding");
  }
}

/* ============================================================
   KEYBOARD MODAL
   ============================================================ */
const KB_LAYOUT = [
  ["q","w","e","r","t","y","u","i","o","p"],
  ["a","s","d","f","g","h","j","k","l","ñ"],
  ["z","x","c","v","b","n","m"],
];
const kb = { value: "", open: false, onPick: null, shift: true };

function buildKeyboard() {
  const root = $("#keyboard");
  root.innerHTML = "";
  KB_LAYOUT.forEach((row, idx) => {
    const div = document.createElement("div");
    div.className = "kb-row" + (idx === 2 ? " shift" : "");
    if (idx === 2) {
      const sh = document.createElement("button");
      sh.className = "kb-key wide";
      sh.textContent = kb.shift ? "⇪" : "⇧";
      sh.onclick = () => { kb.shift = !kb.shift; buildKeyboard(); };
      div.appendChild(sh);
    }
    row.forEach(c => {
      const b = document.createElement("button");
      b.className = "kb-key";
      b.textContent = kb.shift ? c.toUpperCase() : c;
      b.onclick = () => kbType(c);
      div.appendChild(b);
    });
    if (idx === 2) {
      const back = document.createElement("button");
      back.className = "kb-key wide";
      back.textContent = "⌫";
      back.onclick = kbBackspace;
      div.appendChild(back);
    }
    root.appendChild(div);
  });
  const bot = document.createElement("div");
  bot.className = "kb-row bottom";
  const num = document.createElement("button"); num.className = "kb-key wide"; num.textContent = "123"; bot.appendChild(num);
  const sp = document.createElement("button"); sp.className = "kb-key space"; sp.textContent = "espacio"; sp.onclick = () => kbType(" "); bot.appendChild(sp);
  const ok = document.createElement("button"); ok.className = "kb-key wide dark"; ok.textContent = "OK"; ok.onclick = kbConfirm; bot.appendChild(ok);
  root.appendChild(bot);
}
function kbType(c) { kb.value += kb.shift ? c.toUpperCase() : c; kb.shift = false; buildKeyboard(); renderKbInput(); renderKbSuggestions(); }
function kbBackspace() { kb.value = kb.value.slice(0, -1); if (!kb.value) kb.shift = true; buildKeyboard(); renderKbInput(); renderKbSuggestions(); }
function kbConfirm() { if (!kb.value.trim()) return closeKeyboard(); const cb = kb.onPick; const v = kb.value.trim(); closeKeyboard(); cb?.(v); }
function renderKbInput() {
  const el = $("#kbInput");
  if (!kb.value) { el.innerHTML = '<span class="caret"></span>'; el.classList.add("empty"); }
  else { el.classList.remove("empty"); el.innerHTML = escapeHtml(kb.value) + '<span class="caret"></span>'; }
}
function renderKbSuggestions() {
  const list = $("#kbSuggest");
  const q = kb.value.trim().toLowerCase();
  let items;
  if (!q) { items = DESTINATIONS.slice(0, 8); $("#kbTitle").textContent = "Destinos populares"; }
  else {
    items = DESTINATIONS.filter(d => d.name.toLowerCase().includes(q) || d.country.toLowerCase().includes(q)).slice(0, 10);
    $("#kbTitle").textContent = items.length ? "Resultados" : "Sin coincidencias";
  }
  if (!items.length) { list.innerHTML = `<li class="empty-row">No encontramos destinos para "${escapeHtml(kb.value)}"</li>`; return; }
  list.innerHTML = items.map(d => {
    const label = `${d.name}, ${d.country}`;
    const hl = q ? highlight(label, q) : label;
    return `<li data-pick="${escapeHtml(d.name)}, ${escapeHtml(d.country)}">${ICONS.pin}<span>${hl}</span></li>`;
  }).join("");
  list.querySelectorAll("li[data-pick]").forEach(li => {
    li.addEventListener("click", () => { const v = li.dataset.pick; const cb = kb.onPick; closeKeyboard(); cb?.(v); });
  });
}
function escapeHtml(s) { return s.replace(/[&<>"']/g, m => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[m])); }
function highlight(text, q) {
  const i = text.toLowerCase().indexOf(q);
  if (i < 0) return escapeHtml(text);
  return escapeHtml(text.slice(0, i)) + "<strong>" + escapeHtml(text.slice(i, i+q.length)) + "</strong>" + escapeHtml(text.slice(i+q.length));
}
function openKeyboard(initial, onPick) {
  kb.value = initial || ""; kb.shift = !initial; kb.onPick = onPick; kb.open = true;
  $("#kbModal").hidden = false;
  buildKeyboard(); renderKbInput(); renderKbSuggestions();
}
function closeKeyboard() { kb.open = false; $("#kbModal").hidden = true; }

// Capture the laptop keyboard while the destino modal is open
function onPhysicalKey(e) {
  if (!kb.open) return;
  if (e.key === "Enter")    { e.preventDefault(); kbConfirm(); return; }
  if (e.key === "Escape")   { e.preventDefault(); closeKeyboard(); return; }
  if (e.key === "Backspace"){ e.preventDefault(); kbBackspace(); return; }
  // Single printable char (letters, digits, punctuation, space)
  if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
    e.preventDefault();
    kb.value += e.key;
    kb.shift = false;
    buildKeyboard();
    renderKbInput();
    renderKbSuggestions();
  }
}

/* ============================================================
   CALENDAR
   ============================================================ */
const cal = { open: false, mode: "range", from: null, to: null, onApply: null, baseMonth: new Date() };
const MONTHS_TO_RENDER = 14;
const MONTH_NAMES = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];

function openCalendar({ mode = "range", from = null, to = null, title = "Seleccioná la fecha", onApply }) {
  cal.open = true; cal.mode = mode;
  cal.from = from ? new Date(from) : null;
  cal.to   = to   ? new Date(to)   : null;
  cal.onApply = onApply;
  cal.baseMonth = new Date(); cal.baseMonth.setDate(1);
  $("#calTitle").textContent = title;
  $("#calModal").hidden = false;
  renderCalendar();
}
function closeCalendar() { cal.open = false; $("#calModal").hidden = true; }
function renderCalendar() {
  const root = $("#calMonths");
  root.innerHTML = "";
  for (let i = 0; i < MONTHS_TO_RENDER; i++) {
    const m = new Date(cal.baseMonth.getFullYear(), cal.baseMonth.getMonth() + i, 1);
    root.appendChild(buildMonth(m));
  }
  if (cal.mode === "single") { $("#calSummary").style.display = "none"; }
  else {
    $("#calSummary").style.display = "";
    $("#calFrom").textContent = cal.from ? fmtDate(cal.from) : "Elegí una fecha";
    $("#calTo").textContent = cal.to ? fmtDate(cal.to) : "Elegí una fecha";
  }
}
function buildMonth(monthDate) {
  const wrap = document.createElement("div"); wrap.className = "cal-month";
  const title = document.createElement("div"); title.className = "cal-month-title";
  title.textContent = `${MONTH_NAMES[monthDate.getMonth()]} ${monthDate.getFullYear()}`;
  wrap.appendChild(title);
  const grid = document.createElement("div"); grid.className = "cal-grid";
  const firstDow = new Date(monthDate.getFullYear(), monthDate.getMonth(), 1).getDay();
  const daysInMonth = new Date(monthDate.getFullYear(), monthDate.getMonth() + 1, 0).getDate();
  const today = new Date(); today.setHours(0,0,0,0);
  for (let i = 0; i < firstDow; i++) grid.appendChild(document.createElement("div"));
  for (let d = 1; d <= daysInMonth; d++) {
    const day = new Date(monthDate.getFullYear(), monthDate.getMonth(), d);
    const btn = document.createElement("button");
    btn.type = "button"; btn.className = "cal-day"; btn.textContent = d;
    if (day < today) btn.disabled = true;
    if (day.getTime() === today.getTime()) btn.classList.add("is-today");
    if (cal.mode === "range") {
      if (cal.from && cal.to) {
        if (day.getTime() === cal.from.getTime()) btn.classList.add("is-range-start");
        if (day.getTime() === cal.to.getTime()) btn.classList.add("is-range-end");
        if (day > cal.from && day < cal.to) btn.classList.add("is-in-range");
      } else if (cal.from && day.getTime() === cal.from.getTime()) {
        btn.classList.add("is-range-start", "is-range-end");
      }
    } else {
      if (cal.from && day.getTime() === cal.from.getTime()) btn.classList.add("is-single");
    }
    btn.addEventListener("click", () => onPickDay(day));
    grid.appendChild(btn);
  }
  wrap.appendChild(grid);
  return wrap;
}
function onPickDay(day) {
  if (cal.mode === "single") { cal.from = day; renderCalendar(); return; }
  if (!cal.from || (cal.from && cal.to)) { cal.from = day; cal.to = null; }
  else if (day < cal.from) { cal.from = day; cal.to = null; }
  else { cal.to = day; }
  renderCalendar();
}
function fmtDate(d) {
  const days = ["dom","lun","mar","mié","jue","vie","sáb"];
  return `${days[d.getDay()]} ${d.getDate()} ${MONTH_NAMES[d.getMonth()].slice(0,3)}`;
}
function fmtDateShort(d) {
  return d ? `${String(d.getDate()).padStart(2,'0')}/${String(d.getMonth()+1).padStart(2,'0')}/${d.getFullYear()}` : "";
}
function applyCalendar() {
  const cb = cal.onApply;
  const out = cal.mode === "single" ? { from: cal.from } : { from: cal.from, to: cal.to };
  closeCalendar();
  cb?.(out);
}

/* ============================================================
   PASSENGERS MODAL
   ============================================================ */
const pax = { open: false, mode: "passengers", data: { adults: 2, kids: 0, rooms: 1 }, onApply: null };

function openPassengers({ mode = "passengers", initial, onApply }) {
  pax.open = true; pax.mode = mode;
  pax.data = Object.assign({ adults: 2, kids: 0, rooms: 1 }, initial || {});
  pax.onApply = onApply;
  $("#paxTitle").textContent = mode === "rooms" ? "Habitaciones y personas" : "Pasajeros";
  $("#paxModal").hidden = false;
  renderPax();
}
function closePassengers() { pax.open = false; $("#paxModal").hidden = true; }
function paxRow({ title, sub, value, min = 0, max = 9, key }) {
  return `
    <div class="pax-row">
      <div class="pax-row-left">
        <div class="pax-title">${title}</div>
        <div class="pax-sub">${sub}</div>
      </div>
      <div class="pax-stepper">
        <button class="pax-btn" data-pax-dec="${key}" ${value <= min ? "disabled" : ""}>−</button>
        <span class="pax-count">${value}</span>
        <button class="pax-btn" data-pax-inc="${key}" ${value >= max ? "disabled" : ""}>+</button>
      </div>
    </div>`;
}
function renderPax() {
  const d = pax.data;
  let html = "";
  if (pax.mode === "rooms") html += paxRow({ title: "Habitaciones", sub: "Cantidad", value: d.rooms, min: 1, key: "rooms" });
  html += paxRow({ title: "Adultos", sub: "Mayores de 18", value: d.adults, min: 1, key: "adults" });
  html += paxRow({ title: "Menores", sub: "De 0 a 17 años", value: d.kids,  min: 0, key: "kids" });
  $("#paxBody").innerHTML = html;
  $$("[data-pax-inc]").forEach(b => b.addEventListener("click", () => { pax.data[b.dataset.paxInc]++; renderPax(); }));
  $$("[data-pax-dec]").forEach(b => b.addEventListener("click", () => { pax.data[b.dataset.paxDec]--; renderPax(); }));
}
function applyPassengers() {
  const d = pax.data; const cb = pax.onApply;
  const summary = pax.mode === "rooms"
    ? `${d.rooms} habitación${d.rooms!==1?"es":""}, ${d.adults + d.kids} persona${(d.adults+d.kids)!==1?"s":""}`
    : `${d.adults} adulto${d.adults!==1?"s":""}${d.kids?`, ${d.kids} menor${d.kids!==1?"es":""}`:""}`;
  closePassengers();
  cb?.(summary, d);
}

/* ============================================================
   Field click → picker
   ============================================================ */
function attachFormHandlers(root = document.getElementById("sbox")) {
  const body = root.querySelector(".sbox-body");
  if (!body) return;

  body.querySelectorAll("[data-field]").forEach(btn => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.field;
      const product = state.currentProduct;
      const s = getFormState(product);

      const destLike = new Set(["destino", "origen"]);
      const dateLike = new Set(["entrada", "salida", "ida", "vuelta", "desde", "hasta", "retiro", "devolucion", "fechaLlegada", "fechaSalida"]);
      const timeLike = new Set(["horaRetiro", "horaDevolucion", "horaLlegada", "horaSalida"]);

      if (key === "tipo" && product === "alojamientos") {
        const opts = ["Todos", "Hotel", "Departamento"];
        const i = opts.indexOf(s.tipo || "Todos");
        s.tipo = opts[(i + 1) % opts.length];
        setProduct(product); return;
      }
      if (key === "flightType" && product === "vuelos") {
        const seq = ["rt", "ow", "md"];
        const i = seq.indexOf(s.flightType || "rt");
        s.flightType = seq[(i + 1) % seq.length];
        setProduct(product); return;
      }
      if (key === "habitaciones" || key === "distribucion") {
        openPassengers({ mode: "rooms", initial: s._pax, onApply: (summary, data) => {
          s[key] = summary; s._pax = data; setProduct(product);
        }});
        return;
      }
      if (key === "pasajeros") {
        openPassengers({ mode: "passengers", initial: s._pax, onApply: (summary, data) => {
          s.pasajeros = summary; s._pax = data; setProduct(product);
        }});
        return;
      }
      if (destLike.has(key)) {
        openKeyboard(s[key] || "", v => { s[key] = v; setProduct(product); });
        return;
      }
      if (dateLike.has(key)) {
        const rangePairs = {
          entrada: ["entrada","salida"], salida: ["entrada","salida"],
          ida: ["ida","vuelta"], vuelta: ["ida","vuelta"],
          desde: ["desde","hasta"], hasta: ["desde","hasta"],
          retiro: ["retiro","devolucion"], devolucion: ["retiro","devolucion"],
        };
        if (rangePairs[key]) {
          const [a,b] = rangePairs[key];
          openCalendar({
            mode: "range",
            title: `${cap(a)} – ${cap(b)}`,
            from: parseDateMaybe(s[a]),
            to: parseDateMaybe(s[b]),
            onApply: ({ from, to }) => { s[a] = from ? fmtDateShort(from) : null; s[b] = to ? fmtDateShort(to) : null; setProduct(product); }
          });
        } else {
          openCalendar({
            mode: "single", title: cap(key.replace(/([A-Z])/g, " $1")),
            from: parseDateMaybe(s[key]),
            onApply: ({ from }) => { s[key] = from ? fmtDateShort(from) : null; setProduct(product); }
          });
        }
        return;
      }
      if (timeLike.has(key)) {
        const v = window.prompt(`${cap(key.replace(/([A-Z])/g, " $1"))} (ej: 11:00):`, s[key] || "11:00");
        if (v && v.trim()) { s[key] = v.trim(); setProduct(product); }
        return;
      }
    });
  });

  body.querySelectorAll("[data-toggle]").forEach(inp => {
    inp.addEventListener("change", () => {
      getFormState(state.currentProduct)[inp.dataset.toggle] = inp.checked;
      setProduct(state.currentProduct);
    });
  });

  body.querySelectorAll("[data-segmented]").forEach(group => {
    const key = group.dataset.segmented;
    group.querySelectorAll("button").forEach(btn => {
      btn.addEventListener("click", () => {
        getFormState(state.currentProduct)[key] = btn.dataset.value;
        setProduct(state.currentProduct);
      });
    });
  });

  const ta = body.querySelector('textarea[data-field="prompt"]');
  if (ta) ta.addEventListener("input", () => { getFormState("sofia").prompt = ta.value; });
  body.querySelectorAll("[data-suggest]").forEach(b => {
    b.addEventListener("click", () => {
      getFormState("sofia").prompt = b.dataset.suggest;
      setProduct("sofia");
    });
  });

  // "Unavailable for the prototype" link rows
  body.querySelectorAll("[data-unavailable]").forEach(b => {
    b.addEventListener("click", () => showToast("Esta opción no está disponible para este prototipo"));
  });
}

function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }
function parseDateMaybe(str) {
  if (!str) return null;
  const m = String(str).match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (m) return new Date(+m[3], +m[2] - 1, +m[1]);
  const d = new Date(str); return isNaN(d.getTime()) ? null : d;
}

/* ============================================================
   Search summary + last-search storage
   ============================================================ */
function buildSummary(product) {
  const s = getFormState(product);
  const parts = [];
  if (s.destino) parts.push(s.destino);
  if (s.origen)  parts.push(`desde ${s.origen}`);
  return {
    title: `${PRODUCTS[product].title}${s.destino ? " · " + s.destino : ""}`,
    sub: [
      (s.entrada && s.salida) && `${s.entrada} – ${s.salida}`,
      (s.ida && s.vuelta) && `${s.ida} – ${s.vuelta}`,
      (s.desde && s.hasta) && `${s.desde} – ${s.hasta}`,
      (s.retiro && s.devolucion) && `${s.retiro} – ${s.devolucion}`,
      s.fechaLlegada,
      s.habitaciones,
      s.distribucion,
      s.pasajeros,
    ].filter(Boolean).join(" · "),
    raw: { ...s },
  };
}

function hasMinimumData(product) {
  const s = getFormState(product);
  if (product === "sofia") return !!(s.prompt && s.prompt.trim());
  // Most products need at least a destino
  if (["alojamientos","actividades","asistencias","disney","universal","traslados"].includes(product)) return !!s.destino;
  // Vuelos/paquetes need origen + destino
  if (["vuelos","paquetes"].includes(product)) return !!s.origen && !!s.destino;
  // Autos: origen
  if (product === "autos") return !!s.origen;
  return true;
}

function doSearch() {
  const product = state.currentProduct;
  if (!hasMinimumData(product)) {
    showToast(`Completá los datos para buscar ${PRODUCTS[product].title.toLowerCase()}.`);
    return;
  }
  state.lastSearch = { product, ...buildSummary(product) };
  renderResults();
  showScreen("results");
}

/* ============================================================
   Mock results
   ============================================================ */
function renderResults() {
  const last = state.lastSearch;
  if (!last) return;
  const product = last.product;

  // Header mini-searchbox
  $("#resMiniIcon").innerHTML = ICONS[PRODUCTS[product].iconKey] || '';
  $("#resMiniTitle").textContent = last.title;
  $("#resMiniSub").textContent = last.sub || "Sin fechas seleccionadas";

  // Body
  const body = $("#resBody");
  const data = getFormState(product);
  body.innerHTML = mockResultsFor(product, data);

  // Count
  const n = body.querySelectorAll(".rcard, .sofia-result").length;
  $("#resCount").textContent = `${n} resultado${n !== 1 ? "s" : ""} encontrado${n !== 1 ? "s" : ""}`;
}

const HOTELS = [
  { name: "Hilton Buenos Aires", stars: 5, area: "Puerto Madero", price: 92500, emoji: "🏨" },
  { name: "NH Tango", stars: 4, area: "San Telmo", price: 58400, emoji: "🏢" },
  { name: "Casa Sur Bellini", stars: 4, area: "Belgrano", price: 47900, emoji: "🏬" },
  { name: "Awwa Suites & Spa", stars: 5, area: "Las Cañitas", price: 88200, emoji: "🛎️" },
  { name: "Esplendor by Wyndham", stars: 4, area: "Recoleta", price: 65300, emoji: "🏨" },
];
const FLIGHTS = [
  { air: "Aerolíneas Argentinas", from: "EZE", to: "MIA", dep: "21:35", arr: "06:50", dur: "9h 15m", stops: "Directo", price: 412300 },
  { air: "LATAM", from: "EZE", to: "MIA", dep: "18:10", arr: "08:20", dur: "11h 10m", stops: "1 escala · SCL", price: 365100 },
  { air: "American Airlines", from: "EZE", to: "MIA", dep: "22:50", arr: "09:30", dur: "9h 40m", stops: "Directo", price: 438600 },
  { air: "Copa Airlines", from: "EZE", to: "MIA", dep: "06:30", arr: "16:45", dur: "10h 15m", stops: "1 escala · PTY", price: 329900 },
];
const PACKAGES = [
  { name: "Río de Janeiro · 7 noches", area: "Vuelo + Hotel 4★", desc: "Copacabana, all-inclusive", price: 689000, emoji: "🌴" },
  { name: "Cancún · 6 noches", area: "Vuelo + Hotel 5★", desc: "Resort en zona hotelera", price: 945000, emoji: "🏖️" },
  { name: "Madrid + Barcelona · 9 noches", area: "Vuelo + 2 hoteles", desc: "City break europeo", price: 1320000, emoji: "🏛️" },
  { name: "Punta Cana · 7 noches", area: "Vuelo + Hotel 4★ AI", desc: "All inclusive en Bávaro", price: 812400, emoji: "🌊" },
];
const ACTIVITIES = [
  { name: "City tour panorámico", area: "Duración 4h", desc: "Recorré los puntos icónicos", price: 18900, emoji: "🚌" },
  { name: "Tour gastronómico", area: "Duración 3h", desc: "Probá la cocina local", price: 26500, emoji: "🍷" },
  { name: "Excursión 1 día completo", area: "Con guía y traslados", desc: "Aventura fuera de la ciudad", price: 47200, emoji: "⛰️" },
  { name: "Show + cena típica", area: "Noche · 3h", desc: "Tango, samba o flamenco", price: 32800, emoji: "💃" },
];
const CARS = [
  { name: "Chevrolet Onix", area: "Económico · Manual · A/C", desc: "Para 5 pasajeros · 2 valijas", price: 18900, emoji: "🚗" },
  { name: "Toyota Corolla", area: "Intermedio · Automático", desc: "Para 5 pasajeros · 3 valijas", price: 26500, emoji: "🚙" },
  { name: "Jeep Renegade", area: "SUV · Automático", desc: "Para 5 pasajeros · 4 valijas", price: 37800, emoji: "🚙" },
  { name: "Volkswagen Amarok", area: "Pick-up · 4x4", desc: "Para 5 pasajeros · 5 valijas", price: 52400, emoji: "🛻" },
];
const ASSISTANCE = [
  { name: "Asistencia Básica", area: "Hasta USD 30.000", desc: "Salud, valija demorada y más", price: 32900, emoji: "🛡️" },
  { name: "Asistencia Plus", area: "Hasta USD 60.000", desc: "Cobertura de COVID y deportes", price: 48200, emoji: "🛡️" },
  { name: "Asistencia Premium", area: "Hasta USD 150.000", desc: "Cobertura total + cancelación", price: 71800, emoji: "🛡️" },
];
const TRANSFERS = [
  { name: "Traslado privado · Sedán", area: "Hasta 3 pax · 3 valijas", desc: "Auto exclusivo con chofer", price: 22500, emoji: "🚕" },
  { name: "Traslado privado · Van", area: "Hasta 7 pax · 7 valijas", desc: "Ideal para grupos", price: 38900, emoji: "🚐" },
  { name: "Traslado compartido", area: "Hasta 1 valija", desc: "Compartido con otros pasajeros", price: 12400, emoji: "🚌" },
];

function fmtMoney(n) {
  return "$" + n.toLocaleString("es-AR");
}

function cardGeneric(items, perLabel) {
  return items.map(h => `
    <article class="rcard">
      <div class="rcard-thumb">${h.emoji || "📍"}</div>
      <div class="rcard-body">
        <h3 class="rcard-title">${h.name}</h3>
        <p class="rcard-sub">${h.area}</p>
        <div class="rcard-meta">${h.stars ? '<span class="rcard-stars">'+"★".repeat(h.stars)+'</span>' : ""}${h.desc ? '<span>'+h.desc+'</span>' : ""}</div>
        <div class="rcard-price">
          <div class="rcard-price-label">${perLabel}</div>
          <div class="rcard-price-value">${fmtMoney(h.price)}</div>
        </div>
      </div>
    </article>`).join("");
}

function cardFlights(items) {
  return items.map(f => `
    <article class="rcard rcard--flight">
      <div class="rflight-row">
        <span class="rflight-air">${f.air}</span>
        <span class="rflight-stops">${f.stops}</span>
      </div>
      <div class="rflight-row" style="margin-top:6px;">
        <div>
          <div class="rflight-times">${f.dep}</div>
          <div class="rflight-air">${f.from}</div>
        </div>
        <div class="rflight-dur">
          <div>${f.dur}</div>
          <div style="height:1px;background:#ddd;width:60px;margin:4px auto;"></div>
        </div>
        <div style="text-align:right">
          <div class="rflight-times">${f.arr}</div>
          <div class="rflight-air">${f.to}</div>
        </div>
      </div>
      <div class="rflight-foot">
        <div>
          <div class="rcard-price-label">Por persona</div>
          <div class="rcard-price-value">${fmtMoney(f.price)}</div>
        </div>
        <button class="rcard-cta">Seleccionar</button>
      </div>
    </article>`).join("");
}

function sofiaResults(data) {
  const prompt = data.prompt || "(sin descripción)";
  return `
    <div class="sofia-result">
      <h3>✨ SOFIA entendió tu pedido</h3>
      <p>"${escapeHtml(prompt)}"</p>
      <p style="color:var(--text-mute);font-size:12px;margin-top:8px;">
        En base a tu descripción, te recomendamos las siguientes opciones:
      </p>
    </div>
    ${cardGeneric(PACKAGES.slice(0,3), "Desde · por persona")}
  `;
}

function mockResultsFor(product, data) {
  switch (product) {
    case "alojamientos": return cardGeneric(HOTELS, "Por noche · base doble");
    case "vuelos":       return cardFlights(FLIGHTS);
    case "paquetes":     return cardGeneric(PACKAGES, "Por persona · paquete");
    case "actividades":  return cardGeneric(ACTIVITIES, "Por persona");
    case "autos":        return cardGeneric(CARS, "Por día");
    case "asistencias":  return cardGeneric(ASSISTANCE, "Por persona");
    case "traslados":    return cardGeneric(TRANSFERS, "Tarifa total");
    case "sofia":        return sofiaResults(data);
    default: return "<p>Sin resultados.</p>";
  }
}

/* ============================================================
   Toast
   ============================================================ */
function showToast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.hidden = false;
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => { t.hidden = true; }, 2400);
}

/* ============================================================
   Init / wiring
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  injectIcons();

  // Home → open sbox / landings
  document.querySelectorAll("[data-open-sbox]").forEach(el => {
    el.addEventListener("click", () => openSbox(el.dataset.openSbox));
  });

  // Close sbox
  $("#closeSbox").addEventListener("click", closeSbox);

  // Top tabs in sbox
  $$(".sbox-tabs .tab").forEach(t => {
    t.addEventListener("click", () => {
      const tab = t.dataset.tab;
      if (tab === "more") openMoreSheet();
      else { closeMoreSheet(); setProduct(tab); }
    });
  });

  // More sheet items (incl. disney/universal → landings)
  $$(".bs-item").forEach(b => {
    b.addEventListener("click", () => {
      const p = b.dataset.product;
      closeMoreSheet();
      if (p === "disney" || p === "universal") goLanding(p);
      else setProduct(p);
    });
  });

  $("#bsBackdrop").addEventListener("click", closeMoreSheet);

  // Buscar → results
  $("#btnSearch").addEventListener("click", doSearch);

  // Keyboard
  $("#kbBack").addEventListener("click", closeKeyboard);
  $("#kbClear").addEventListener("click", () => { kb.value = ""; kb.shift = true; buildKeyboard(); renderKbInput(); renderKbSuggestions(); });
  document.addEventListener("keydown", onPhysicalKey);

  // Calendar
  $("#calClose").addEventListener("click", closeCalendar);
  $("#calApply").addEventListener("click", applyCalendar);

  // Passengers
  $("#paxClose").addEventListener("click", closePassengers);
  $("#paxApply").addEventListener("click", applyPassengers);

  // Results page
  $("#resBack").addEventListener("click", () => showScreen("home"));
  $("#resMini").addEventListener("click", () => {
    // Reopen the right surface for the last search (sbox / landing)
    if (!state.lastSearch) return showScreen("sbox");
    const p = state.lastSearch.product;
    if (p === "sofia" || p === "disney" || p === "universal") {
      goLanding(p);
    } else {
      setProduct(p);
      showScreen("sbox");
    }
  });

  // Landing pages: back
  $$("[data-back-home]").forEach(el => el.addEventListener("click", () => showScreen("home")));

  // Landing pages: open sbox with prefilled destination
  $$("[data-open-sbox-with]").forEach(el => {
    el.addEventListener("click", () => {
      const [prod, dest] = el.dataset.openSboxWith.split(":");
      const s = getFormState(prod);
      if (dest) {
        // Vuelos uses destino too; origen is left blank intentionally
        s.destino = dest;
      }
      setProduct(prod);
      showScreen("sbox");
    });
  });

  // SOFIA chat: input, send, chips, new chat
  const slInput = $("#slInput");
  if (slInput) {
    slInput.addEventListener("input", function() {
      this.style.height = "auto";
      this.style.height = Math.min(this.scrollHeight, 100) + "px";
    });
    slInput.addEventListener("keydown", function(e) {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        sofiaSend(this.value);
      }
    });
  }
  $("#slSend")?.addEventListener("click", () => sofiaSend($("#slInput").value));
  $("#slNewChat")?.addEventListener("click", initSofiaChat);
  $$("[data-sl-suggest]").forEach(b => {
    b.addEventListener("click", () => sofiaSend(b.dataset.slSuggest));
  });

  setProduct("alojamientos");
});

/* ============================================================
   VISION EXPLORER  — preset/toggle control panel
   ============================================================ */

// Each preset = a saved bundle of toggle values.
const VP_PRESETS = {
  a:   { label: "(a) SOFIA-led",      vals: { searchbar: "sofia", inlineBox: false, homeShifu: true,  sofiaInShifu: false, navPattern: "2", disney: "shifu", universal: "shifu" } },
  b:   { label: "(b) Caja clásica",   vals: { searchbar: "box",   inlineBox: false, homeShifu: false, sofiaInShifu: true,  navPattern: "1", disney: "shifu", universal: "shifu" } },
  box: { label: "(c) Box-on-home",     vals: { searchbar: "sofia", inlineBox: true,  homeShifu: true,  sofiaInShifu: false, navPattern: "2", disney: "shifu", universal: "shifu" } },
};

const VP_TOGGLES = [
  { key: "searchbar",    label: "Barra de búsqueda (home)", type: "choice", options: [["sofia","Abre SOFIA"],["box","Abre la caja"],["none","Oculta"]] },
  { key: "inlineBox",    label: "Caja embebida en el home", type: "bool" },
  { key: "homeShifu",    label: "Shifu visible en el home", type: "bool" },
  { key: "sofiaInShifu", label: "SOFIA dentro del shifu",   type: "bool" },
  { key: "navPattern",   label: "Patrón de navegación SOFIA", type: "choice", options: [["1","Tabs fijas"],["2","Segmentado"],["3","Side-nav"],["4","Side-nav +"]] },
  { key: "disney",       label: "Disney y Universal (acceso)", type: "choice", options: [["shifu","En shifu"],["banner","Banner"],["chip","Chip"]] },
];

const VP_KEYS = VP_TOGGLES.map(t => t.key);
let vp = { preset: "a", over: {}, open: true };

// Effective toggle values = preset defaults + manual overrides + dependency coupling.
function vpEffective() {
  const v = Object.assign({}, VP_PRESETS[vp.preset].vals, vp.over);
  // SOFIA must stay reachable in the shifu if the bar opens the box or the bar is hidden
  if (v.searchbar === "box")  v.sofiaInShifu = true;
  if (v.searchbar === "none") v.sofiaInShifu = true;
  // Box-on-home (d-ii): the bar is the SOFIA entry, so SOFIA leaves the shifu
  if (v.inlineBox && v.searchbar === "sofia") v.sofiaInShifu = false;
  // Disney & Universal always behave identically (separate accesses, same placement)
  v.universal = v.disney;
  return v;
}

/* ---------- persistence (URL hash + localStorage) ---------- */
function vpSerialize() {
  const p = new URLSearchParams();
  p.set("preset", vp.preset);
  Object.entries(vp.over).forEach(([k, val]) => p.set(k, String(val)));
  return p.toString();
}
function vpSave() {
  const qs = vpSerialize();
  history.replaceState(null, "", "#" + qs);
  try { localStorage.setItem("vp-config", qs); } catch (e) {}
}
function vpLoad() {
  let qs = location.hash.replace(/^#/, "");
  if (!qs) { try { qs = localStorage.getItem("vp-config") || ""; } catch (e) {} }
  if (!qs) return;
  const p = new URLSearchParams(qs);
  const preset = p.get("preset");
  if (preset && VP_PRESETS[preset]) vp.preset = preset;
  VP_KEYS.forEach(k => {
    if (!p.has(k)) return;
    let val = p.get(k);
    if (val === "true") val = true; else if (val === "false") val = false;
    vp.over[k] = val;
  });
}

/* ---------- panel rendering ---------- */
function vpBuildPanel() {
  const eff = vpEffective();

  const pc = $("#vpPresets");
  pc.innerHTML = Object.entries(VP_PRESETS)
    .map(([k, v]) => `<button class="vp-preset ${k === vp.preset ? "active" : ""}" data-preset="${k}">${v.label}</button>`)
    .join("");
  pc.querySelectorAll("[data-preset]").forEach(b => b.addEventListener("click", () => {
    vp.preset = b.dataset.preset; vp.over = {}; vpSave(); vpRender(); applyVision();
  }));

  const tc = $("#vpToggles");
  tc.innerHTML = VP_TOGGLES.map(def => {
    const val = eff[def.key];
    let control;
    if (def.type === "bool") {
      control = `<button class="vp-switch ${val ? "on" : ""}" data-bool="${def.key}"><span class="vp-knob"></span></button>`;
    } else {
      control = `<div class="vp-choice" data-choice="${def.key}">` +
        def.options.map(([ov, ol]) => `<button class="${String(val) === ov ? "active" : ""}" data-val="${ov}">${ol}</button>`).join("") +
        `</div>`;
    }
    return `<div class="vp-row" data-row="${def.key}">
      <div class="vp-row-head"><span>${def.label}</span>${def.note ? `<em>${def.note}</em>` : ""}</div>
      ${control}
    </div>`;
  }).join("");

  tc.querySelectorAll("[data-bool]").forEach(b => b.addEventListener("click", () => {
    const k = b.dataset.bool; vpSetOverride(k, !vpEffective()[k]);
  }));
  tc.querySelectorAll("[data-choice] button").forEach(b => b.addEventListener("click", () => {
    const k = b.closest("[data-choice]").dataset.choice; vpSetOverride(k, b.dataset.val);
  }));

  vpDependencyUI(eff);
}

function vpDependencyUI(eff) {
  const dim = (key, on) => {
    const row = document.querySelector(`.vp-row[data-row="${key}"]`);
    if (row) row.classList.toggle("vp-dim", on);
  };
  // SOFIA-in-shifu is locked whenever the bar opens the box, the bar is hidden, or box-on-home couples it
  dim("sofiaInShifu", !!eff.inlineBox || eff.searchbar === "box" || eff.searchbar === "none");
  dim("homeShifu", !!eff.inlineBox);
}

function vpSetOverride(k, v) { vp.over[k] = v; vpSave(); vpRender(); applyVision(); }
function vpRender() { vpBuildPanel(); }

/* ---------- apply the active config to the prototype ---------- */
function vpShow(el, show) { if (!el) return; el.hidden = !show; el.style.display = show ? "" : "none"; }

function applyVision() {
  const eff = vpEffective();
  document.body.classList.toggle("vp-open", vp.open);

  // SOFIA presence in shifu (home chip + sbox tab + more-sheet item)
  vpShow(document.querySelector('#homeChips .chip[data-open-sbox="sofia"]'), eff.sofiaInShifu && eff.homeShifu);
  document.querySelectorAll('#sbox .tab[data-tab="sofia"]').forEach(t => vpShow(t, eff.sofiaInShifu));
  vpShow(document.querySelector('.bs-item[data-product="sofia"]'), eff.sofiaInShifu);

  // (c) When SOFIA is absent, stretch the remaining shifu items to full width
  document.getElementById("homeChips")?.classList.toggle("no-sofia", !eff.sofiaInShifu);
  document.getElementById("sboxTabs")?.classList.toggle("no-sofia", !eff.sofiaInShifu);

  // SOFIA navigation chrome (pinned tabs / segmented / side-nav)
  applySofiaNav(eff);

  // Home "Más" sheet contents
  buildHomeMoreSheet(eff);

  // Home shifu (hidden when the inline box supplies its own tabs)
  vpShow($("#homeChips"), eff.homeShifu && !eff.inlineBox);

  // Box-on-home: move "Mis beneficios" out of the purple search area onto the home body
  const benefits = document.querySelector(".benefits-banner");
  const homeBody = document.querySelector(".home-body");
  const homeTop = document.querySelector(".home-top");
  if (benefits && homeBody && homeTop) {
    if (eff.inlineBox) { homeBody.prepend(benefits); benefits.classList.add("benefits-on-home"); }
    else { homeTop.appendChild(benefits); benefits.classList.remove("benefits-on-home"); }
  }

  // Home searchbar
  const sb = $("#homeSearchbar");
  if (sb) {
    vpShow(sb, eff.searchbar !== "none");
    const label = $("#homeSearchbarLabel");
    if (label) label.textContent = eff.searchbar === "sofia" ? "Preguntale a SOFIA…" : "¿Qué andás buscando?";
  }

  // Disney/Universal banner/chip live on the light home body, never the purple search area
  const duHost = document.getElementById("duHome");
  const duHomeBody = document.querySelector(".home-body");
  if (duHost && duHomeBody) duHomeBody.insertBefore(duHost, duHomeBody.firstChild); // top of the light section

  // Disney / Universal placement
  applyDU(eff);

  // Inline box-on-home
  if (eff.inlineBox) {
    vpShow($("#homeInlineBox"), true);
    renderInlineBox(eff);
  } else {
    state.boxTarget = "sbox";
    vpShow($("#homeInlineBox"), false);
  }
  // NOTE: intentionally no showScreen() here — toggles apply in place on the current screen
}

function applyDU(eff) {
  const host = $("#duHome");
  let html = "";
  [["disney", "Disney"], ["universal", "Universal"]].forEach(([key, label]) => {
    const mode = eff[key];
    vpShow(document.querySelector(`.bs-item[data-product="${key}"]`), mode === "shifu");
    if (mode === "banner") {
      html += `<button class="du-banner" data-go-landing="${key}">
        <span class="du-ic" data-svg="${key}"></span>
        <span class="du-tx"><strong>${label}</strong><span class="muted">Parques y experiencias</span></span>
        <span class="chev">›</span></button>`;
    } else if (mode === "chip") {
      html += `<button class="du-chip" data-go-landing="${key}"><span class="du-ic" data-svg="${key}"></span>${label}</button>`;
    }
  });
  host.className = "du-home" + (eff.disney === "chip" ? " du-home--chips" : " du-home--banners");
  host.innerHTML = html;
  injectIcons(host);
  host.querySelectorAll("[data-go-landing]").forEach(b => b.addEventListener("click", () => goLanding(b.dataset.goLanding)));
  vpShow(host, !!html);
}

function renderInlineBox(eff) {
  const host = $("#homeInlineBox");
  const tabs = [];
  if (eff.sofiaInShifu) tabs.push(["sofia", "SOFIA"]);
  tabs.push(["alojamientos", "Alojamientos"], ["vuelos", "Vuelos"], ["paquetes", "Paquetes"]);

  host.innerHTML = `
    <nav class="sbox-tabs inline-tabs">
      ${tabs.map(([t, l]) => `<button class="tab" data-tab="${t}"><span class="tab-icon" data-svg="${t}"></span><span>${l}</span></button>`).join("")}
    </nav>
    <div class="sbox-product-header"><span class="sph-icon"></span><h2 class="sph-title"></h2></div>
    <main class="sbox-body"></main>
    <button class="btn-search inline-search"><svg viewBox="0 0 24 24" class="ic" data-icon="search"></svg> Buscar</button>`;
  injectIcons(host);

  host.querySelectorAll(".sbox-tabs .tab").forEach(t => t.addEventListener("click", () => {
    state.boxTarget = "home";
    setProduct(t.dataset.tab);
  }));
  host.querySelector(".inline-search").addEventListener("click", doSearch);

  state.boxTarget = "home";
  const start = (state.currentProduct && PRODUCTS[state.currentProduct] && PRODUCTS[state.currentProduct].render)
    ? state.currentProduct : "alojamientos";
  setProduct(start);
}

/* ---------- SOFIA navigation patterns (how to get back to the shifu) ---------- */
const SHIFU_PRODUCTS = [["alojamientos", "Alojamientos"], ["vuelos", "Vuelos"], ["paquetes", "Paquetes"]];
const ALL_BOX_PRODUCTS = [
  ["alojamientos", "Alojamientos"], ["vuelos", "Vuelos"], ["paquetes", "Paquetes"],
  ["actividades", "Actividades"], ["autos", "Autos"], ["asistencias", "Asistencias"], ["traslados", "Traslados"],
];
// Products not shown as pinned tabs (pattern 1) — they live behind "Ver más"
const REST_PRODUCTS = [["actividades", "Actividades"], ["autos", "Autos"], ["asistencias", "Asistencias"], ["traslados", "Traslados"]];

// Fake recent conversations for the side-nav (pattern 3), à la ChatGPT
const FAKE_CONVOS = [
  { label: "Disney en familia 🏰", user: "Quiero ir a Disney con la familia en julio", sofia: "¡Genial! Para julio te recomiendo un paquete de 7 noches cerca de Magic Kingdom, con vuelo + hotel + tickets. ¿Te muestro opciones?" },
  { label: "Escapada a Río 🌴", user: "Buscame una escapada barata a Río de Janeiro", sofia: "Encontré vuelos desde $329.000 y hoteles en Copacabana. ¿Te armo un finde largo con todo incluido?" },
];

function openSofiaMoreSheet() {
  const s = document.getElementById("sofiaMoreSheet"), b = document.getElementById("sofiaSheetBackdrop");
  if (s) s.hidden = false; if (b) b.hidden = false;
}
function closeSofiaMoreSheet() {
  const s = document.getElementById("sofiaMoreSheet"), b = document.getElementById("sofiaSheetBackdrop");
  if (s) s.hidden = true; if (b) b.hidden = true;
}
function loadFakeConversation(conv) {
  goLanding("sofia");
  const chat = document.getElementById("slChat");
  if (chat) chat.innerHTML = "";
  appendUserBubble(conv.user);
  appendSofiaBubble(conv.sofia);
  if (typeof sofiaScrollBottom === "function") sofiaScrollBottom();
}

// (c) Button-driven multi-turn conversation — long enough to scroll off-screen by just tapping
const SOFIA_SCRIPT = [
  { sofia: "¡Buenísimo! Para recomendarte mejor, ¿con quién viajás?", reply: "Con mi familia 👨‍👩‍👧" },
  { sofia: "¡Un viaje en familia, qué lindo! ¿Tenés fechas definidas o son flexibles?", reply: "Son flexibles 📅" },
  { sofia: "Perfecto, con fechas flexibles consigo mejores precios. ¿Buscás playa o ciudad?", reply: "Playa 🏖️" },
  { sofia: "¡Me encanta! Tengo destinos de playa ideales para ir en familia. ¿Sumo vuelo + hotel + actividades?", reply: "Sí, todo junto ✨" },
  { sofia: "Genial. ¿Cuántas noches estás pensando?", reply: "Unas 7 noches 🌙" },
  { sofia: "¿Querés que priorice opciones con cancelación gratis?", reply: "Sí, mejor 🛡️" },
  { sofia: "Listo, armé un paquete completo con todo lo que me dijiste. ¿Vemos las recomendaciones?", reply: "Ver recomendaciones →" },
];

function sofiaTurn(i, prompt) {
  if (i >= SOFIA_SCRIPT.length) return;
  const turn = SOFIA_SCRIPT[i];
  const last = i >= SOFIA_SCRIPT.length - 1;
  const typing = appendTyping();
  setTimeout(() => {
    typing.remove();
    appendSofiaBubble(turn.sofia, {
      ctaLabel: turn.reply,
      onCta: () => {
        if (last) return sofiaShowResults(prompt || "tu viaje en familia");
        appendUserBubble(turn.reply);
        sofiaTurn(i + 1, prompt);
      },
    });
  }, 650);
}

// (b) When the user talks with "Tabs fijas" on, the pinned tabs slide up out of view
function hideSofiaTabsOnTalk() {
  if (vpEffective().navPattern !== "1") return;
  const nav = document.getElementById("sofiaNav");
  if (nav && nav.classList.contains("sofia-nav--tabs")) nav.classList.add("sofia-nav--collapsed");
}

function lastRealProduct() {
  const p = state.currentProduct;
  return (p && PRODUCTS[p] && PRODUCTS[p].render) ? p : "alojamientos";
}

function applySofiaNav(eff) {
  const nav = document.getElementById("sofiaNav");
  const seg = document.getElementById("sboxSeg");
  const trigger = document.getElementById("sofiaDrawerTrigger");
  const drawer = document.getElementById("sofiaDrawer");
  const dBack = document.getElementById("sofiaDrawerBackdrop");
  if (!nav) return;

  // remember if the drawer was open, so config changes update it in place without closing
  const drawerWasOpen = !!(drawer && !drawer.hidden && drawer.classList.contains("open"));

  // reset all chrome
  nav.innerHTML = ""; nav.hidden = true; nav.className = "sofia-nav";
  if (seg) { seg.innerHTML = ""; seg.hidden = true; }
  if (trigger) { trigger.hidden = true; trigger.onclick = null; }
  if (drawer) { drawer.innerHTML = ""; drawer.hidden = true; drawer.classList.remove("open"); }
  if (dBack) { dBack.hidden = true; dBack.onclick = null; }
  const moreGrid = document.getElementById("sofiaMoreGrid");
  const sheetBack = document.getElementById("sofiaSheetBackdrop");
  if (moreGrid) moreGrid.innerHTML = "";
  closeSofiaMoreSheet();
  if (sheetBack) sheetBack.onclick = null;

  const segHTML = (active) => `<div class="seg-switch" data-active="${active}">
      <span class="seg-thumb"></span>
      <button data-seg="chat">💬 Chat</button>
      <button data-seg="box">🔍 Búsqueda</button>
    </div>`;

  if (eff.navPattern === "1") {
    // Pinned tabs above the chat — no SOFIA tab (you're already in SOFIA), plus a "Ver más"
    nav.classList.add("sofia-nav--tabs");
    const tabs = [...SHIFU_PRODUCTS, ["more", "Ver más"]];
    nav.innerHTML = `<nav class="sbox-tabs nav-tabs">${tabs.map(([p, l]) =>
      `<button class="tab" data-nav-product="${p}"><span class="tab-icon" data-svg="${p === "more" ? "more-dots" : p}"></span><span>${l}</span></button>`
    ).join("")}</nav>`;
    nav.hidden = false;
    injectIcons(nav);
    nav.querySelectorAll("[data-nav-product]").forEach(b => b.addEventListener("click", () => {
      const p = b.dataset.navProduct;
      if (p === "more") openSofiaMoreSheet();
      else sofiaMorphTo(p);
    }));

    // Build the "Ver más" sheet with the rest of the products (+ Disney/Universal if in shifu)
    const moreGrid = document.getElementById("sofiaMoreGrid");
    const sheetBack = document.getElementById("sofiaSheetBackdrop");
    if (moreGrid) {
      const rest = [...REST_PRODUCTS];
      if (eff.disney === "shifu")    rest.push(["disney", "Disney"]);
      if (eff.universal === "shifu") rest.push(["universal", "Universal"]);
      moreGrid.innerHTML = rest.map(([p, l]) =>
        `<button class="bs-item" data-nav-product="${p}"><span class="bs-circle" data-svg="${p}"></span><span>${l}</span></button>`
      ).join("");
      injectIcons(moreGrid);
      moreGrid.querySelectorAll("[data-nav-product]").forEach(b => b.addEventListener("click", () => {
        const p = b.dataset.navProduct;
        closeSofiaMoreSheet();
        if (p === "disney" || p === "universal") goLanding(p);
        else sofiaMorphTo(p);
      }));
    }
    if (sheetBack) sheetBack.onclick = closeSofiaMoreSheet;
  } else if (eff.navPattern === "2") {
    // Cohesive segmented control in BOTH the SOFIA view and the box view
    nav.classList.add("sofia-nav--seg");
    nav.innerHTML = segHTML("chat"); nav.hidden = false;
    nav.querySelectorAll("[data-seg]").forEach(b => b.addEventListener("click", () => {
      if (b.dataset.seg !== "box") return;
      const sw = b.closest(".seg-switch"); if (sw) sw.dataset.active = "box"; // slide the pill first
      setTimeout(() => sofiaMorphTo(lastRealProduct()), 220);                 // then soft screen morph
    }));
    if (seg) {
      // (b)(ii) place the segmented ABOVE the shifu in the box, matching SOFIA's position for a sense of unity
      const sboxTop = document.querySelector("#sbox .sbox-top");
      const sboxTabs = document.getElementById("sboxTabs");
      if (sboxTop && sboxTabs && seg.parentElement !== sboxTop) sboxTop.insertBefore(seg, sboxTabs);
      seg.innerHTML = segHTML("box"); seg.hidden = false;
      seg.querySelectorAll("[data-seg]").forEach(b => b.addEventListener("click", () => {
        if (b.dataset.seg !== "chat") return;
        const sw = b.closest(".seg-switch"); if (sw) sw.dataset.active = "chat";
        setTimeout(() => boxMorphToSofia(), 220);
      }));
    }
  } else if (eff.navPattern === "3" || eff.navPattern === "4") {
    // Collapsible side-nav drawer, triggered from the bottom-left next to the chat box
    if (trigger) {
      trigger.hidden = false;
      trigger.onclick = () => {
        drawer.hidden = false; dBack.hidden = false;
        requestAnimationFrame(() => drawer.classList.add("open"));
      };
    }
    buildSofiaDrawer(eff, eff.navPattern === "4"); // pattern 4 = compact (extras under "Más")
    if (drawerWasOpen && drawer) {                 // stay open + update live across config changes
      drawer.hidden = false; if (dBack) dBack.hidden = false;
      drawer.classList.add("open");
    }
    if (dBack) dBack.onclick = closeSofiaDrawer;
  }
}

// Build the side-nav drawer contents. No SOFIA item (you're already in SOFIA).
// compact=true → only Alojamientos/Vuelos/Paquetes shown; the rest collapse under "Más".
function buildSofiaDrawer(eff, compact) {
  const drawer = document.getElementById("sofiaDrawer");
  if (!drawer) return;

  const rest = [...REST_PRODUCTS];
  if (eff.disney === "shifu")    rest.push(["disney", "Disney"]);
  if (eff.universal === "shifu") rest.push(["universal", "Universal"]);

  const itemHTML = ([p, l]) => `<button class="drawer-item" data-nav-product="${p}"><span class="tab-icon" data-svg="${p}"></span><span>${l}</span></button>`;

  let productsHTML;
  if (compact) {
    productsHTML = SHIFU_PRODUCTS.map(itemHTML).join("") +
      `<button class="drawer-item drawer-more" data-drawer-more><span class="tab-icon" data-svg="more-dots"></span><span>Más</span><span class="drawer-chev">›</span></button>` +
      `<div class="drawer-more-group">${rest.map(itemHTML).join("")}</div>`;
  } else {
    productsHTML = [...SHIFU_PRODUCTS, ...rest].map(itemHTML).join("");
  }

  drawer.innerHTML = `<div class="drawer-title">Productos</div>${productsHTML}` +
    `<div class="drawer-sep"></div><div class="drawer-title">Conversaciones</div>` +
    FAKE_CONVOS.map((c, i) => `<button class="drawer-item drawer-convo" data-convo="${i}"><span class="convo-ic">💬</span><span>${c.label}</span></button>`).join("");
  injectIcons(drawer);

  drawer.querySelectorAll("[data-nav-product]").forEach(b => b.addEventListener("click", () => {
    const p = b.dataset.navProduct;
    closeSofiaDrawer();
    if (p === "disney" || p === "universal") goLanding(p);
    else sofiaMorphTo(p);
  }));
  drawer.querySelectorAll("[data-convo]").forEach(b => b.addEventListener("click", () => {
    closeSofiaDrawer();
    loadFakeConversation(FAKE_CONVOS[+b.dataset.convo]);
  }));
  const moreBtn = drawer.querySelector("[data-drawer-more]");
  if (moreBtn) moreBtn.addEventListener("click", () => {
    const grp = drawer.querySelector(".drawer-more-group");
    const opening = !grp.classList.contains("open");
    moreBtn.classList.toggle("open", opening);
    if (opening) {
      grp.classList.add("open");
      grp.style.maxHeight = grp.scrollHeight + "px";          // animate open…
      setTimeout(() => { if (grp.classList.contains("open")) grp.style.maxHeight = "none"; }, 360); // …then uncap so nothing is ever clipped
    } else {
      grp.style.maxHeight = grp.scrollHeight + "px";          // fix current height…
      requestAnimationFrame(() => { grp.classList.remove("open"); grp.style.maxHeight = "0px"; }); // …then animate closed
    }
  });
}

/* ---------- Home "Más" bottom sheet ---------- */
function buildHomeMoreSheet(eff) {
  const grid = document.getElementById("homeMoreGrid");
  if (!grid) return;
  const items = [];
  if (eff.sofiaInShifu) items.push(["sofia", "SOFIA"]);
  items.push(["alojamientos", "Alojamientos"], ["vuelos", "Vuelos"], ["paquetes", "Paquetes"], ["actividades", "Actividades"], ["autos", "Autos"]);
  if (eff.disney === "shifu")    items.push(["disney", "Disney"]);
  if (eff.universal === "shifu") items.push(["universal", "Universal"]);
  items.push(["asistencias", "Asistencias"], ["traslados", "Traslados"]);
  grid.innerHTML = items.map(([p, l]) => `<button class="bs-item" data-home-product="${p}"><span class="bs-circle" data-svg="${p}"></span><span>${l}</span></button>`).join("");
  injectIcons(grid);
  grid.querySelectorAll("[data-home-product]").forEach(b => b.addEventListener("click", () => {
    closeHomeMoreSheet();
    openSbox(b.dataset.homeProduct); // clicking a product opens the searchbox (or its landing)
  }));
}
function openHomeMoreSheet() {
  const s = document.getElementById("homeMoreSheet"), b = document.getElementById("homeSheetBackdrop");
  if (s) s.hidden = false; if (b) b.hidden = false;
}
function closeHomeMoreSheet() {
  const s = document.getElementById("homeMoreSheet"), b = document.getElementById("homeSheetBackdrop");
  if (s) s.hidden = true; if (b) b.hidden = true;
}

function closeSofiaDrawer() {
  const drawer = document.getElementById("sofiaDrawer");
  const dBack = document.getElementById("sofiaDrawerBackdrop");
  if (drawer) drawer.classList.remove("open");
  if (dBack) dBack.hidden = true;
  setTimeout(() => { if (drawer) drawer.hidden = true; }, 280);
}

// Airbnb-style soft screen present (gentle fade + scale, no directional slide)
function softShowScreen(id) {
  const el = document.getElementById(id);
  if (el) el.classList.add("screen--soft");
  showScreen(id);
  if (el) setTimeout(() => el.classList.remove("screen--soft"), 460);
}
// Soft transition: SOFIA → structured product box
function sofiaMorphTo(product) {
  state.boxTarget = "sbox";
  setProduct(product);
  softShowScreen("sbox");
}
// Soft transition: box → SOFIA
function boxMorphToSofia() {
  const el = document.getElementById("sofiaLanding");
  if (el) el.classList.add("screen--soft");
  goLanding("sofia");
  if (el) setTimeout(() => el.classList.remove("screen--soft"), 460);
}

function vpShareLink() {
  vpSave();
  const url = location.href;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(url).then(() => showToast("Link copiado al portapapeles"), () => showToast("Copiá el link de la barra"));
  } else {
    showToast("Copiá el link de la barra del navegador");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  vpLoad();
  vpBuildPanel();

  $("#vpGear")?.addEventListener("click", () => { vp.open = !vp.open; document.body.classList.toggle("vp-open", vp.open); });
  $("#vpClose")?.addEventListener("click", () => { vp.open = false; document.body.classList.remove("vp-open"); });
  $("#vpShare")?.addEventListener("click", vpShareLink);
  $("#vpReset")?.addEventListener("click", () => { vp.over = {}; vpSave(); vpRender(); applyVision(); });

  $("#homeSearchbar")?.addEventListener("click", () => {
    const eff = vpEffective();
    if (eff.searchbar === "sofia") goLanding("sofia");
    else if (eff.searchbar === "box") openSbox("alojamientos");
  });

  // (b) Tabs fijas: scrolling the chat up brings the hidden tabs back; scrolling down hides them
  const slChat = document.getElementById("slChat");
  if (slChat) {
    let last = 0;
    slChat.addEventListener("scroll", () => {
      const nav = document.getElementById("sofiaNav");
      if (!nav || !nav.classList.contains("sofia-nav--tabs")) return;
      const st = slChat.scrollTop;
      if (st < last - 3) nav.classList.remove("sofia-nav--collapsed");        // scrolling up → reveal
      else if (st > last + 3 && st > 24) nav.classList.add("sofia-nav--collapsed"); // scrolling down → hide
      last = st;
    });
  }

  // (d) Disney/Universal landing back → previous screen (home, searchbox, or SOFIA)
  document.querySelectorAll("[data-landing-back]").forEach(el => el.addEventListener("click", () => {
    showScreen(state.landingReturn || "home");
  }));

  // Home "Más" chip → bottom sheet on home
  document.querySelector("#homeChips [data-home-more]")?.addEventListener("click", openHomeMoreSheet);
  document.getElementById("homeSheetBackdrop")?.addEventListener("click", closeHomeMoreSheet);

  applyVision();
  showScreen("home"); // land on home on initial load only
});

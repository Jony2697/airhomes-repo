
// ---- Pictures: generated SVG scenes. Replace scene(...) with real photo URLs later. ----
function scene(k, i) {
    const bed = ["#e94f86", "#2f6fb5", "#f2b53c", "#4aa37a", "#8a5fd0", "#d9534f"][i % 6];
    const wall = ["#f3e9dc", "#e6eef5", "#f6e8ee", "#e9f1e6"][i % 4];
    const sk = [["#8fd3e4", "#fff1cf"], ["#ffc99a", "#fff0dd"], ["#a9d8ee", "#e6f6ea"]][i % 3];
    const m = {
        room: `<rect width="400" height="400" fill="${wall}"/><rect y="300" width="400" height="100" fill="#c9a77c"/><rect x="250" y="60" width="110" height="120" fill="#bfe3f0" stroke="#fff" stroke-width="8"/><rect x="40" y="150" width="320" height="40" rx="10" fill="#fff"/><rect x="30" y="190" width="340" height="120" rx="14" fill="${bed}"/><rect x="50" y="170" width="90" height="36" rx="12" fill="#fff"/><rect x="150" y="170" width="90" height="36" rx="12" fill="#fff" opacity=".9"/><rect x="40" y="310" width="14" height="40" fill="#6b4a2b"/><rect x="346" y="310" width="14" height="40" fill="#6b4a2b"/>`,
        sea: `<rect width="400" height="400" fill="url(#g)"/><circle cx="290" cy="110" r="38" fill="#ffd25a"/><rect y="230" width="400" height="170" fill="#0e8aa0"/><path d="M0 270q50-16 100 0t100 0 100 0 100 0v130H0z" fill="#2aa3b8"/><path d="M0 330q50-14 100 0t100 0 100 0 100 0v70H0z" fill="#ead6a0"/><path d="M70 340v-90" stroke="#6b4a2b" stroke-width="7"/><path d="M70 250q-40-8-56 12M70 250q40-8 56 12M70 250q-10-34-40-30M70 250q12-34 42-28" stroke="#2f7a3a" stroke-width="7" fill="none"/>`,
        city: `<rect width="400" height="400" fill="url(#g)"/><circle cx="300" cy="100" r="34" fill="#ffd25a"/><rect y="320" width="400" height="80" fill="#5a6b7d"/><g fill="#2b3a55"><rect x="20" y="160" width="70" height="160"/><rect x="100" y="110" width="64" height="210"/><rect x="174" y="190" width="76" height="130"/><rect x="260" y="130" width="64" height="190"/><rect x="332" y="180" width="58" height="140"/></g><g fill="#ffd25a"><rect x="36" y="180" width="10" height="14"/><rect x="58" y="220" width="10" height="14"/><rect x="118" y="140" width="10" height="14"/><rect x="140" y="190" width="10" height="14"/><rect x="278" y="160" width="10" height="14"/><rect x="300" y="210" width="10" height="14"/></g>`,
        hills: `<rect width="400" height="400" fill="url(#g)"/><circle cx="90" cy="100" r="34" fill="#ffd25a"/><path d="M0 280q90-110 200-30t200-40v190H0z" fill="#6aaa52"/><path d="M0 330q120-70 230-10t170-20v100H0z" fill="#3f7d34"/><g fill="#2a5a28"><path d="M80 340l22-60 22 60z"/><path d="M300 330l22-60 22 60z"/></g>`,
        villa: `<rect width="400" height="400" fill="url(#g)"/><circle cx="320" cy="90" r="34" fill="#ffd25a"/><rect y="290" width="400" height="110" fill="#6fb24f"/><rect x="90" y="190" width="220" height="110" fill="#fff8ee"/><path d="M70 196L200 110l130 86z" fill="#c2410c"/><rect x="180" y="230" width="42" height="70" fill="#1c1c1e"/><rect x="108" y="220" width="40" height="34" fill="#8fd3e4"/><rect x="252" y="220" width="40" height="34" fill="#8fd3e4"/>`
    };
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${sk[0]}"/><stop offset="1" stop-color="${sk[1]}"/></linearGradient></defs>${m[k]}</svg>`;
    return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}
// ---- Your photos: add more URLs here, they rotate across all room cards ----
const PHOTOS = [
    "https://i.ibb.co.com/HTfBH5qW/58rv-J3-N1d-S7-Lzip4ml-An6twml-CVT1sp-BHs-SOr-Vp7.webp",
    "https://i.ibb.co.com/Wpcvth0f/3odzgab22wwm5-A88ae-Ulru-NNGJx-Qq2d-J1-JDJLXbb.webp"
];
function pic(k, i) { return k === "room" && PHOTOS.length ? PHOTOS[i % PHOTOS.length] : scene(k, i) }
function fb(img, k, i) { img.onerror = null; img.src = scene(k, i) }
// ---- Sample data: replace with your real listings / API ----
const cats = [["Apartments", "&#127970;"], ["Rooms", "&#128716;"], ["Hotels", "&#127976;"]];
const rows = [
    ["Featured Stays", ["Safe Bedroom | Attached Washroom", "Cozy Bedroom With Attached Washroom", "Private Bedroom Common Washroom", "Couple Room | TV Included", "Couple-Friendly Private AC Room", "Attached Bath | Green City Room", "Economy Couple Non-AC Room"], [1079, 1499, 1799, 1199, 1770, 1763, 2500], 1],
    ["Gulshan - Banani", Array(7).fill("Banani"), [5499, 3500, 4880, 6710, 6700, 2500, 8540]],
    ["Bashundhara R/A", Array(7).fill("Bashundhara Residential Area"), [2299, 2999, 2299, 2499, 2499, 2200, 2499]],
    ["Dhaka", ["Baridhara", "Panthapath", "Aftab Nagar", "Banasree", "Green City, Mohammadpur", "Panthapath", "Banasree"], [1599, 1999, 1999, 1499, 1750, 2499, 2499]],
    ["Budget Deals!", Array(7).fill("Dhaka"), [1550, 1999, 1950, 1799, 1399, 1899, 1999]],
    ["Popular Locations", ["Mohakhali", "Baridhara", "Mohakhali", "Malibagh", "Baridhara", "Banasree", "Baridhara"], [2199, 1499, 2199, 2250, 2499, 1699, 1999]]
];
const kinds = ["room", "room", "room"];
const R = document.getElementById("rows");
R.innerHTML = rows.map((r, ri) => `
 <div class="rowhead"><h2>${r[0]} &rsaquo;</h2><div class="arr"><button aria-label="Previous" data-d="-1">&lsaquo;</button><button aria-label="Next" data-d="1">&rsaquo;</button></div></div>
 <div class="row">${r[1].map((n, i) => `
  <a class="card" href="#"><div class="ph"><img loading="lazy" src="${pic("room", ri * 7 + i)}" alt="${n}" onerror="fb(this,'room',${ri * 7 + i})">${r[3] ? '<span class="spon">Sponsored</span>' : ''}<button class="heart" aria-label="Save">&#9825;</button></div>
  <h3>${n}</h3><div class="meta"><span>BDT ${r[2][i].toLocaleString()} per day</span><i>${(4.2 + ((i * 3 + ri) % 8) / 10).toFixed(2)}</i></div></a>`).join("")}</div>`).join("");
R.querySelectorAll(".arr button").forEach(b => b.onclick = () => { const row = b.closest(".rowhead").nextElementSibling; row.scrollBy({ left: row.clientWidth * +b.dataset.d, behavior: "smooth" }) });
R.querySelectorAll(".heart").forEach(h => h.onclick = e => { e.preventDefault(); h.innerHTML = h.innerHTML == "♡" ? "♥" : "♡" });
const C = document.getElementById("cats"); let cur = 1;
function tabs() { C.innerHTML = cats.map((c, i) => `<button aria-pressed="${i === cur}" data-i="${i}"><span>${c[1]}</span>${c[0]}</button>`).join(""); C.querySelectorAll("button").forEach(b => b.onclick = () => { cur = +b.dataset.i; tabs() }) }
tabs();
document.getElementById("p1").innerHTML = `<img src="${pic("room", 0)}" alt="" onerror="fb(this,'room',1)"><img src="${scene("villa", 0)}" alt="">`;
document.getElementById("p2").innerHTML = `<img src="${scene("city", 1)}" alt=""><img src="${scene("sea", 0)}" alt="">`;
// pseudo QR placeholder (replace with your real QR image)
(function () {
    let s = "", x = 12345;
    const fin = (a, b) => { const o = [[0, 0], [0, 14], [14, 0]]; for (const [p, q] of o) { if (a >= p && a < p + 7 && b >= q && b < q + 7) { const u = a - p, v = b - q; return u == 0 || u == 6 || v == 0 || v == 6 || (u >= 2 && u <= 4 && v >= 2 && v <= 4) ? 1 : 0 } } return null };
    for (let a = 0; a < 21; a++)for (let b = 0; b < 21; b++) { x = (x * 1103515245 + 12345) & 0x7fffffff; let f = fin(a, b); let on = f === null ? ((x >> 8) % 2 == 0) : f == 1; if (on) s += `<rect x="${b}" y="${a}" width="1" height="1" fill="#1c1c1e"/>` }
    document.getElementById("qr").innerHTML = s
})();
document.getElementById("posts").innerHTML = [
    ["Top 10 tourist places in Dhaka", "city", "Top 10 Tourist Places in Dhaka With A First-Time Visitor's Guide"],
    ["Best hotels in Uttara", "room", "Finest Hotels To Stay In Uttara For Travel And Business"],
    ["Booking a guest house or villa", "villa", "What To Look For When Booking A Guest House Or Villa"],
    ["Best travel apps 2026", "hills", "6 Best Travel Apps in Bangladesh That You Can Try! [2026]"],
    ["Is the Airhomes app safe?", "room", "Is the Airhomes App Safe? Reviews, Verification & Safety Guide"],
    ["Cox's Bazar guide", "sea", "Cox's Bazar Travel and Stay Guide: Best Time to Visit"]
].map((p, i) => `<a class="post" href="#"><div class="bn"><img loading="lazy" src="${pic(p[1], i)}" alt="" onerror="fb(this,'${p[1]}',${i + 2})"><b>${p[0]}</b></div><small>Oct 07, 2026</small><h3>${p[2]}</h3></a>`).join("");

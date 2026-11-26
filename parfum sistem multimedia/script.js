const funFacts = [
    "Penciuman adalah satu-satunya indera manusia yang terhubung langsung ke amigdala, pusat memori dan emosi di otak.",
    "Aroma tubuh manusia unik seperti sidik jari, hal ini memengaruhi bagaimana parfum memancarkan wangi yang berbeda di kulit setiap orang.",
    "Parfum pertama kali tercatat dalam sejarah dibuat oleh seorang ahli kimia perempuan bernama Tapputi di Mesopotamia kuno.",
    "Sebotol minyak esensial mawar murni kelas atas membutuhkan penyulingan puluhan ribu kelopak bunga yang dipetik secara manual saat fajar.",
    "Ambergris, salah satu bahan parfum klasik paling langka dan mahal, secara alami berasal dari sistem pencernaan paus sperma.",
    "Banyak rumah parfum desainer saat ini sangat bergantung pada suplai akar wangi (vetiver) dan nilam (patchouli) kualitas terbaik dari Indonesia."
];

function randomizeFact() {
    const factEl = document.getElementById('random-fact-text');
    if (factEl) {
        const randomIndex = Math.floor(Math.random() * funFacts.length);
        factEl.textContent = funFacts[randomIndex];
    }
}

const scentDB = {
    citrus: { title: "Citrus / Bergamot", desc: "Karakter segar, tajam, dan energik. Mengingatkan pada percikan air laut dan potongan kulit jeruk di musim panas.", bgColor: "#e0f2fe", textColor: "#082f49", blob1: "#bae6fd", blob2: "#fde047", visual: "", audio: "assets/suara-citrus.mp3", guide: { gender: 3, time: 1, weather: 1, occasion: 2 }, uiDelay: 1500 },
    aquatic: { title: "Aquatic / Marine", desc: "Membawa elemen air, garam laut, dan udara pantai. Bebas, jernih, dan sangat mendinginkan indera.", bgColor: "#cffafe", textColor: "#164e63", blob1: "#22d3ee", blob2: "#38bdf8", visual: "", audio: "assets/suara-aquatic.mp3", guide: { gender: 3, time: 1, weather: 1, occasion: 1 }, uiDelay: 1500 },
    floral: { title: "Floral / Jasmine", desc: "Romantisme translusen dari mawar, melati, dan sedap malam. Membalut dengan kelembutan yang sangat elegan.", bgColor: "#fdf4ff", textColor: "#701a75", blob1: "#fbcfe8", blob2: "#e9d5ff", visual: "", audio: "assets/suara-floral.mp3", guide: { gender: 1, time: 2, weather: 2, occasion: 4 }, uiDelay: 1500 },
    fruity: { title: "Fruity / Sweet", desc: "Karakter manis, juicy, dan penuh semangat. Mengingatkan pada aroma buah beri segar, persik, dan apel yang menggoda.", bgColor: "#fee2e2", textColor: "#7f1d1d", blob1: "#fca5a5", blob2: "#f87171", visual: "", audio: "assets/suara-fruity.mp3", guide: { gender: 2, time: 2, weather: 2, occasion: 2 }, uiDelay: 1500 },
    iris: { title: "Iris / Powdery", desc: "Aroma seperti bedak rias mewah atau lipstik mahal. Sangat aristokratis, kering, dan bertekstur halus.", bgColor: "#f5f3ff", textColor: "#4c1d95", blob1: "#c4b5fd", blob2: "#a78bfa", visual: "", audio: "assets/suara-iris.mp3", guide: { gender: 2, time: 4, weather: 3, occasion: 5 }, uiDelay: 1500 },
    vanilla: { title: "Vanilla / Gourmand", desc: "Menggugah selera seperti makanan penutup. Kehangatan vanila madu dan karamel yang membuat ketagihan.", bgColor: "#fef3c7", textColor: "#92400e", blob1: "#fde68a", blob2: "#d97706", visual: "", audio: "assets/suara-vanilla.mp3", guide: { gender: 2, time: 4, weather: 4, occasion: 3 }, uiDelay: 1500 },
    spicy: { title: "Spicy / Oriental", desc: "Eksotis dan berani. Perpaduan lada merah, kapulaga, dan kayu manis yang memberikan efek hangat di hidung.", bgColor: "#7f1d1d", textColor: "#fecaca", blob1: "#991b1b", blob2: "#b91c1c", visual: "", audio: "assets/suara-spicy.mp3", guide: { gender: 4, time: 5, weather: 5, occasion: 4 }, uiDelay: 1500 },
    amber: { title: "Amber / Oriental", desc: "Hangat, manis, dan eksotis. Perpaduan resin, vanilla, dan rempah yang menciptakan aura kemewahan dan sensualitas tinggi.", bgColor: "#fffbeb", textColor: "#b45309", blob1: "#fde68a", blob2: "#f59e0b", visual: "", audio: "assets/suara-amber.mp3", guide: { gender: 3, time: 5, weather: 5, occasion: 4 }, uiDelay: 1500 },
    woody: { title: "Woody / Oud", desc: "Sebuah kehangatan yang menenangkan. Karakter woody yang alami dan tahan lama mengendap sebagai base notes, menghadirkan kesan maskulin, profesional, sekaligus unisex yang pas untuk malam yang sejuk maupun acara formal.", bgColor: "#1c1917", textColor: "#fdba74", blob1: "#431407", blob2: "#78350f", visual: "assets/scentphony_woody_agarwood_golden_amber_resin.html", audio: "assets/suara-woody.mp3", guide: { gender: 5, time: 5, weather: 5, occasion: 5 }, uiDelay: 11000 },
    vetiver: { title: "Vetiver / Earthy", desc: "Akar wangi yang dipanen dari tanah basah. Berkarakter hijau, berasap, dan sangat membumi (earthy).", bgColor: "#14532d", textColor: "#dcfce7", blob1: "#166534", blob2: "#064e3b", visual: "", audio: "assets/suara-vetiver.mp3", guide: { gender: 4, time: 3, weather: 4, occasion: 4 }, uiDelay: 1500 },
    musk: { title: "White Musk", desc: "Molekul yang meniru aroma kulit bersih. Halus, transparan, dan menempel lama sebagai fondasi.", bgColor: "#f8fafc", textColor: "#334155", blob1: "#e2e8f0", blob2: "#cbd5e1", visual: "", audio: "assets/suara-musk.mp3", guide: { gender: 3, time: 3, weather: 3, occasion: 2 }, uiDelay: 1500 },
    leather: { title: "Leather / Tobacco", desc: "Kasar namun berkelas. Mereplikasi aroma jaket kulit baru, asap cerutu, dan interior mobil mewah.", bgColor: "#0f172a", textColor: "#94a3b8", blob1: "#1e293b", blob2: "#334155", visual: "", audio: "assets/suara-leather.mp3", guide: { gender: 5, time: 5, weather: 4, occasion: 4 }, uiDelay: 1500 }
};

const unchartedState = { title: "Uncharted Scent", desc: "Molekul aroma ini belum disintesis di dalam laboratorium kami. Silakan coba notes lain.", bgColor: "#27272a", textColor: "#a1a1aa", blob1: "#3f3f46", blob2: "#52525b", guide: { gender: 3, time: 3, weather: 3, occasion: 3 }, uiDelay: 1000 };

const iconEyeOff = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: text-bottom; margin-right: 6px;"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>`;
const iconEyeOn = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: text-bottom; margin-right: 6px;"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>`;

// DOM Ruang Lab Interaktif
const labScene = document.getElementById('lab-welcome-scene');
const labStage = document.getElementById('lab-stage');
const labCharacter = document.getElementById('lab-character');
const charSprite = document.getElementById('char-canvas');
const charBubble = document.getElementById('char-bubble');
const labToast = document.getElementById('lab-toast');
const backToLabBtn = document.getElementById('back-to-lab-btn');

const mainInterface = document.getElementById('main-interface');
const creditFooter = document.getElementById('credit-footer');
const root = document.documentElement; 

// DOM Routing (Views)
const viewHome = document.getElementById('view-home');
const viewCatalog = document.getElementById('view-catalog');
const viewDetail = document.getElementById('view-detail');
const menuHomeBtn = document.getElementById('menu-home-btn');
const menuCatalogBtn = document.getElementById('menu-catalog-btn');

// DOM Elements
const noteTitle = document.getElementById('note-title');
const noteDesc = document.getElementById('note-desc');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const favBtn = document.getElementById('fav-btn');
const favList = document.getElementById('fav-list');
const cinematicBg = document.getElementById('cinematic-projection'); 
const ambientAudio = document.getElementById('ambient-audio');
const backBtn = document.getElementById('back-btn');
const toggleUiBtn = document.getElementById('toggle-ui-btn'); 

// DOM Smart Matcher
const smartMatchBtn = document.getElementById('smart-match-btn');
const smartMatchModal = document.getElementById('smart-match-modal');
const modalOverlay = document.getElementById('modal-overlay');
const closeModalBtn = document.getElementById('close-modal-btn');
const findMatchBtn = document.getElementById('find-match-btn');
const mGender = document.getElementById('match-gender'), mTime = document.getElementById('match-time'), mWeather = document.getElementById('match-weather'), mOccasion = document.getElementById('match-occasion');

let currentActiveNote = '';
let uiTimeout; 
let toastTimeout;
let isUiHidden = false; 

let favorites = JSON.parse(localStorage.getItem('scentscape_favs')) || [];

function renderFavorites() {
    if (favorites.length === 0) {
        favList.innerHTML = '<span class="empty-text">Belum ada aroma yang disimpan.</span>';
        return;
    }
    favList.innerHTML = '';
    favorites.forEach(favKey => {
        const data = scentDB[favKey];
        if (data) {
            const btn = document.createElement('button');
            btn.className = 'note-btn glass-btn';
            btn.style.width = '100%';
            btn.style.textAlign = 'left';
            btn.textContent = data.title.split(' / ')[0];
            btn.setAttribute('data-note', favKey);
            btn.addEventListener('click', () => triggerSensoryState(favKey));
            favList.appendChild(btn);
        }
    });
}
renderFavorites(); 

function updateGuideUI(guideData) {
    if (!guideData) return;
    const categories = ['gender', 'time', 'weather', 'occasion'];
    categories.forEach(cat => {
        const dashes = document.querySelectorAll(`#bar-${cat} .dash`);
        dashes.forEach((dash, index) => {
            if (index === guideData[cat] - 1) { dash.classList.add('active'); } 
            else { dash.classList.remove('active'); }
        });
    });
}

// ==========================================
// RENDER SPRITE KARAKTER (AUTO TRANSPARAN)
// ==========================================
function loadChromaKeyCharacter(imgSrc) {
    if (!charSprite) return;
    const ctx = charSprite.getContext('2d', { willReadFrequently: true });
    const img = new Image();
    img.onload = () => {
        charSprite.width = img.naturalWidth;
        charSprite.height = img.naturalHeight;
        ctx.drawImage(img, 0, 0);
        try {
            const frame = ctx.getImageData(0, 0, charSprite.width, charSprite.height);
            const d = frame.data;
            for (let i = 0; i < d.length; i += 4) {
                const r = d[i], g = d[i + 1], b = d[i + 2], a = d[i + 3];
                if (a === 0) continue;
                const maxRB = Math.max(r, b);
                const greenness = g - maxRB;
                if (greenness > 55 && g > 110) {
                    d[i + 3] = 0;
                } else if (greenness > 18 && g > 80) {
                    const alphaFactor = 1 - (greenness - 18) / 37;
                    d[i + 3] = Math.max(0, Math.min(255, Math.round(a * alphaFactor)));
                    d[i + 1] = Math.min(g, maxRB + 8);
                }
            }
            ctx.putImageData(frame, 0, 0);
        } catch (err) {
            console.warn("Gunakan Live Server (127.0.0.1) agar chroma-key berjalan.");
        }
    };
    img.src = imgSrc;
}
loadChromaKeyCharacter('assets/char_scentphony.png');

// ==========================================
// KARAKTER PENGIKUT KURSOR (DI BELAKANG MEJA)
// ==========================================
let charX = 46;
let targetCharX = 46;
const defaultSpeech = "Selamat datang di Lab ScentPhony!";

function followPointer(e) {
    const rect = labStage.getBoundingClientRect();
    const rawPercent = ((e.clientX - rect.left) / rect.width) * 100;
    targetCharX = Math.max(22, Math.min(82, rawPercent));
}
labScene.addEventListener('pointermove', followPointer);
labScene.addEventListener('pointerdown', followPointer);

function animateCharacter() {
    if (!labScene.classList.contains('hidden')) {
        const dx = targetCharX - charX;
        charX += dx * 0.085;
        labCharacter.style.left = `${charX}%`;

        if (Math.abs(dx) > 0.35) {
            labCharacter.classList.add('is-walking');
            charSprite.style.setProperty('--flip', dx < 0 ? -1 : 1);
        } else {
            labCharacter.classList.remove('is-walking');
        }
    }
    requestAnimationFrame(animateCharacter);
}
requestAnimationFrame(animateCharacter);

// ==========================================
// INTERAKSI ZONA SVG (HOVER & KLIK)
// ==========================================
function showLabToast(message) {
    clearTimeout(toastTimeout);
    labToast.textContent = message;
    labToast.classList.remove('hidden');
    gsap.fromTo(labToast, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" });

    toastTimeout = setTimeout(() => {
        gsap.to(labToast, {
            opacity: 0, y: 10, duration: 0.3,
            onComplete: () => labToast.classList.add('hidden')
        });
    }, 2800);
}

function openSmartMatchModal() {
    modalOverlay.classList.remove('hidden');
    smartMatchModal.classList.remove('hidden');
    gsap.fromTo(modalOverlay, { opacity: 0 }, { opacity: 1, duration: 0.4 });
    gsap.fromTo(smartMatchModal, { opacity: 0, y: 30, scale: 0.95 }, { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: "back.out(1.5)" });
}

function enterDashboardFromLab(targetViewId, autoOpenMatcher = false) {
    randomizeFact();

    gsap.to([labScene, creditFooter], {
        opacity: 0, scale: 1.04, duration: 0.65, ease: "power2.inOut",
        onComplete: () => {
            labScene.classList.add('hidden');
            creditFooter.classList.add('hidden');
            gsap.set([labScene, creditFooter], { scale: 1 });

            viewHome.classList.add('hidden');
            viewCatalog.classList.add('hidden');
            viewDetail.classList.add('hidden');

            const targetEl = document.getElementById(targetViewId);
            targetEl.classList.remove('hidden');
            gsap.set(targetEl, { opacity: 1, y: 0 });

            document.querySelectorAll('.menu-btn').forEach(btn => btn.classList.remove('active'));
            if (targetViewId === 'view-home') menuHomeBtn.classList.add('active');
            if (targetViewId === 'view-catalog') menuCatalogBtn.classList.add('active');

            mainInterface.classList.remove('hidden');
            gsap.fromTo(mainInterface, { opacity: 0, y: 20 }, {
                opacity: 1, y: 0, duration: 0.7, ease: "power2.out",
                onComplete: () => {
                    if (autoOpenMatcher) openSmartMatchModal();
                }
            });
        }
    });
}

const isTouchDevice = window.matchMedia('(hover: none)').matches;
const labZones = Array.from(document.querySelectorAll('.lab-zone'));
let activeZone = null;

function activateZone(zone) {
    if (activeZone === zone) return;
    if (activeZone) activeZone.classList.remove('is-active');
    activeZone = zone;
    zone.classList.add('is-active');
    charBubble.textContent = zone.getAttribute('data-speech') || defaultSpeech;
}

function deactivateZone(zone) {
    if (activeZone !== zone) return;
    zone.classList.remove('is-active');
    activeZone = null;
    charBubble.textContent = defaultSpeech;
}

function triggerZone(zone) {
    const action = zone.getAttribute('data-action');
    if (action === 'home') {
        enterDashboardFromLab('view-home');
    } else if (action === 'catalog') {
        enterDashboardFromLab('view-catalog');
    } else if (action === 'smart-match') {
        enterDashboardFromLab('view-catalog', true);
    } else if (action === 'coming-soon') {
        showLabToast(`${zone.getAttribute('data-feature')} sedang kami racik dan akan segera hadir di lab.`);
    }
}

labZones.forEach(zone => {
    if (!isTouchDevice) {
        zone.addEventListener('mouseenter', () => activateZone(zone));
        zone.addEventListener('mouseleave', () => deactivateZone(zone));
    }
    zone.addEventListener('focus', () => activateZone(zone));
    zone.addEventListener('blur', () => deactivateZone(zone));
    zone.addEventListener('click', () => {
        // Layar sentuh: ketukan pertama menyorot, ketukan kedua membuka
        if (isTouchDevice && activeZone !== zone) { activateZone(zone); return; }
        triggerZone(zone);
    });
    zone.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); triggerZone(zone); }
    });
});


backToLabBtn.addEventListener('click', () => {
    gsap.to(mainInterface, {
        opacity: 0, y: 15, duration: 0.45, ease: "power2.in",
        onComplete: () => {
            mainInterface.classList.add('hidden');
            labScene.classList.remove('hidden');
            creditFooter.classList.remove('hidden');
            gsap.fromTo([labScene, creditFooter], { opacity: 0 }, { opacity: 1, duration: 0.6, ease: "power2.out" });
        }
    });
});

window.addEventListener('DOMContentLoaded', () => {
    gsap.from('.lab-header-bar', { opacity: 0, y: -20, duration: 0.8, ease: "power2.out" });
    gsap.from('#lab-character', { opacity: 0, y: 30, duration: 0.8, delay: 0.25, ease: "back.out(1.4)" });
});

// ==========================================
// SISTEM ROUTING (Perpindahan View)
// ==========================================
function switchView(targetId) {
    if (!viewDetail.classList.contains('hidden') && targetId !== 'view-detail') {
        gsap.to(ambientAudio, { volume: 0, duration: 0.5 });
        setTimeout(() => { ambientAudio.pause(); ambientAudio.removeAttribute('src'); }, 500);
        cinematicBg.removeAttribute('src');
        root.style.setProperty('--bg-color', '#f5f5f5'); 
        root.style.setProperty('--text-color', '#111111'); 
        root.style.setProperty('--blob-color-1', '#9ca3af'); 
        root.style.setProperty('--blob-color-2', '#e5e7eb');
        backBtn.classList.add('hidden');
        toggleUiBtn.classList.add('hidden');
    }

    const views = [viewHome, viewCatalog, viewDetail];
    views.forEach(v => {
        if (!v.classList.contains('hidden')) {
            gsap.to(v, { opacity: 0, duration: 0.3, onComplete: () => v.classList.add('hidden') });
        }
    });

    document.querySelectorAll('.menu-btn').forEach(btn => btn.classList.remove('active'));
    if (targetId === 'view-home') {
        menuHomeBtn.classList.add('active');
        randomizeFact();
    }
    if (targetId === 'view-catalog') menuCatalogBtn.classList.add('active');

    setTimeout(() => {
        const targetView = document.getElementById(targetId);
        targetView.classList.remove('hidden');
        gsap.fromTo(targetView, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
    }, 300);
}

menuHomeBtn.addEventListener('click', () => switchView('view-home'));
menuCatalogBtn.addEventListener('click', () => switchView('view-catalog'));

smartMatchBtn.addEventListener('click', openSmartMatchModal);

closeModalBtn.addEventListener('click', () => {
    gsap.to([smartMatchModal, modalOverlay], { opacity: 0, y: 30, scale: 0.95, duration: 0.3, ease: "power2.in", onComplete: () => { smartMatchModal.classList.add('hidden'); modalOverlay.classList.add('hidden'); } });
});

findMatchBtn.addEventListener('click', () => {
    const uG = parseInt(mGender.value), uT = parseInt(mTime.value), uW = parseInt(mWeather.value), uO = parseInt(mOccasion.value);
    let bestMatch = ''; let minDiff = Infinity;
    for (const [key, data] of Object.entries(scentDB)) {
        const diff = Math.abs(uG - data.guide.gender) + Math.abs(uT - data.guide.time) + Math.abs(uW - data.guide.weather) + Math.abs(uO - data.guide.occasion);
        if (diff < minDiff) { minDiff = diff; bestMatch = key; }
    }
    gsap.to([smartMatchModal, modalOverlay], { opacity: 0, duration: 0.3, onComplete: () => { smartMatchModal.classList.add('hidden'); modalOverlay.classList.add('hidden'); triggerSensoryState(bestMatch); } });
});

function triggerSensoryState(queryKey) {
    const key = queryKey.toLowerCase().trim();
    const isKnownScent = scentDB.hasOwnProperty(key);
    const data = isKnownScent ? scentDB[key] : unchartedState;

    gsap.to(ambientAudio, { volume: 0, duration: 0.5 });
    toggleUiBtn.classList.add('hidden');
    isUiHidden = false; toggleUiBtn.innerHTML = `${iconEyeOff} Sembunyikan Teks`;

    gsap.to('.curtain', {
        x: "0%", duration: 0.7, delay: 0.2, ease: "power3.inOut",
        onComplete: () => {
            const canvas = document.querySelector('.glass-main-canvas');
            document.querySelector('.glass-sidebar').classList.add('hidden');
            canvas.classList.add('immersive-active');

            const revealNewScent = () => {
                currentActiveNote = key;
                root.style.setProperty('--bg-color', data.bgColor); root.style.setProperty('--text-color', data.textColor); root.style.setProperty('--blob-color-1', data.blob1); root.style.setProperty('--blob-color-2', data.blob2);
                noteTitle.textContent = data.title; noteDesc.textContent = data.desc;
                updateGuideUI(data.guide);

                if (data.audio) { ambientAudio.src = data.audio; ambientAudio.volume = 0; ambientAudio.play().catch(e => console.log("Audio terblokir")); } 
                else { ambientAudio.pause(); ambientAudio.removeAttribute('src'); }

                viewHome.classList.add('hidden'); viewCatalog.classList.add('hidden'); viewDetail.classList.remove('hidden');
                document.querySelectorAll('.menu-btn').forEach(btn => btn.classList.remove('active'));
                
                if (isKnownScent) { favBtn.classList.remove('hidden'); favBtn.textContent = favorites.includes(key) ? 'Hapus dari Favorit' : 'Tambahkan ke Favorit'; } 
                else { favBtn.classList.add('hidden'); }
                
                gsap.set(mainInterface, { opacity: 1 }); 
                gsap.set(canvas, { opacity: 0, scale: 0.95, y: 15 });
                
                backBtn.classList.remove('hidden');
                gsap.set(backBtn, { opacity: 0, y: -20 });

                gsap.to('.curtain-left', { x: "-100%", duration: 0.7, ease: "power3.inOut" });
                gsap.to('.curtain-right', { x: "100%", duration: 0.7, ease: "power3.inOut" });
                gsap.to(backBtn, { opacity: 1, y: 0, duration: 0.6, delay: 0.3 });

                if (data.visual) { gsap.to(cinematicBg, { opacity: 1, duration: 1.5, delay: 0.3 }); }
                if (data.audio) { gsap.to(ambientAudio, { volume: 0.5, duration: 1.5, delay: 0.3 }); }

                clearTimeout(uiTimeout);
                uiTimeout = setTimeout(() => {
                    if (currentActiveNote === key) { 
                        gsap.to(canvas, { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: "back.out(1.1)" });
                        toggleUiBtn.classList.remove('hidden');
                        gsap.fromTo(toggleUiBtn, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.3, ease: "power2.out" });
                    }
                }, data.uiDelay); 
            };

            if (data.visual) {
                gsap.set(cinematicBg, { opacity: 0 }); cinematicBg.src = data.visual;
                cinematicBg.onload = () => { revealNewScent(); cinematicBg.onload = null; };
                setTimeout(() => { if (cinematicBg.onload) { revealNewScent(); cinematicBg.onload = null; } }, 3000);
            } else { cinematicBg.removeAttribute('src'); revealNewScent(); }
        }
    });
}

toggleUiBtn.addEventListener('click', () => {
    const canvas = document.querySelector('.glass-main-canvas');
    if (!isUiHidden) { 
        gsap.to(canvas, { opacity: 0, scale: 0.97, y: 10, duration: 0.5, ease: "power2.inOut" }); 
        toggleUiBtn.innerHTML = `${iconEyeOn} Tampilkan Teks`; 
        isUiHidden = true; 
    } else { 
        gsap.to(canvas, { opacity: 1, scale: 1, y: 0, duration: 0.6, ease: "back.out(1.2)" }); 
        toggleUiBtn.innerHTML = `${iconEyeOff} Sembunyikan Teks`; 
        isUiHidden = false; 
    }
});

backBtn.addEventListener('click', () => {
    const canvas = document.querySelector('.glass-main-canvas');
    clearTimeout(uiTimeout); gsap.to(ambientAudio, { volume: 0, duration: 0.5 });
    
    gsap.to(canvas, { opacity: 0, scale: 0.95, y: -10, duration: 0.4 }); 
    gsap.to(backBtn, { opacity: 0, duration: 0.4 }); gsap.to(toggleUiBtn, { opacity: 0, duration: 0.4 });
    
    gsap.to('.curtain', {
        x: "0%", duration: 0.7, delay: 0.3, ease: "power3.inOut",
        onComplete: () => {
            currentActiveNote = ''; isUiHidden = false;
            document.querySelector('.glass-sidebar').classList.remove('hidden');
            canvas.classList.remove('immersive-active');

            root.style.setProperty('--bg-color', '#f5f5f5'); root.style.setProperty('--text-color', '#111111'); root.style.setProperty('--blob-color-1', '#9ca3af'); root.style.setProperty('--blob-color-2', '#e5e7eb');
            cinematicBg.removeAttribute('src'); ambientAudio.pause(); ambientAudio.removeAttribute('src');

            viewDetail.classList.add('hidden'); viewCatalog.classList.remove('hidden');
            document.querySelectorAll('.menu-btn').forEach(btn => btn.classList.remove('active'));
            menuCatalogBtn.classList.add('active');
            
            backBtn.classList.add('hidden'); toggleUiBtn.classList.add('hidden');
            
            gsap.set(canvas, { opacity: 0, scale: 0.95, y: 15 });
            gsap.to('.curtain-left', { x: "-100%", duration: 0.7, ease: "power3.inOut" });
            gsap.to('.curtain-right', { x: "100%", duration: 0.7, ease: "power3.inOut" });
            
            gsap.to(canvas, { opacity: 1, scale: 1, y: 0, duration: 0.8, delay: 0.3, ease: "back.out(1.2)" });
        }
    });
});

favBtn.addEventListener('click', () => {
    if (!currentActiveNote || !scentDB[currentActiveNote]) return;
    if (favorites.includes(currentActiveNote)) { favorites = favorites.filter(f => f !== currentActiveNote); favBtn.textContent = 'Tambahkan ke Favorit'; } 
    else { favorites.push(currentActiveNote); favBtn.textContent = 'Hapus dari Favorit'; }
    localStorage.setItem('scentscape_favs', JSON.stringify(favorites)); renderFavorites(); 
});

document.querySelectorAll('.note-btn').forEach(btn => { btn.addEventListener('click', (e) => triggerSensoryState(e.target.getAttribute('data-note'))); });
searchBtn.addEventListener('click', () => { if(searchInput.value !== '') triggerSensoryState(searchInput.value); });
searchInput.addEventListener('keypress', (e) => { if (e.key === 'Enter' && searchInput.value !== '') triggerSensoryState(searchInput.value); });
const scentDB = {
    citrus: { title: "Citrus / Bergamot", desc: "Karakter segar, tajam, dan energik. Mengingatkan pada percikan air laut dan potongan kulit jeruk di musim panas.", bgColor: "#e0f2fe", textColor: "#082f49", blob1: "#bae6fd", blob2: "#fde047", visual: "", audio: "assets/suara-citrus.mp3", guide: { gender: 3, time: 1, weather: 1, occasion: 2 }, uiDelay: 1500 },
    aquatic: { title: "Aquatic / Marine", desc: "Membawa elemen air, garam laut, dan udara pantai. Bebas, jernih, dan sangat mendinginkan indera.", bgColor: "#cffafe", textColor: "#164e63", blob1: "#22d3ee", blob2: "#38bdf8", visual: "", audio: "assets/suara-aquatic.mp3", guide: { gender: 3, time: 1, weather: 1, occasion: 1 }, uiDelay: 1500 },
    woody: { 
        title: "Woody / Oud", 
        desc: "Sebuah kehangatan yang menenangkan. Karakter woody yang alami dan tahan lama menghadirkan kesan maskulin, profesional, sekaligus unisex yang pas untuk malam yang sejuk maupun acara formal.", 
        bgColor: "#1c1917", textColor: "#fdba74", blob1: "#431407", blob2: "#78350f", 
        visual: "assets/scentphony_woody_agarwood_golden_amber_resin.html", 
        audio: "assets/suara-woody.mp3", 
        guide: { gender: 5, time: 5, weather: 5, occasion: 5 },
        uiDelay: 11000 
    },
    vetiver: { title: "Vetiver / Earthy", desc: "Akar wangi yang dipanen dari tanah basah. Berkarakter hijau, berasap, dan sangat membumi (earthy).", bgColor: "#14532d", textColor: "#dcfce7", blob1: "#166534", blob2: "#064e3b", visual: "", audio: "assets/suara-vetiver.mp3", guide: { gender: 4, time: 3, weather: 4, occasion: 4 }, uiDelay: 1500 },
    floral: { title: "Floral / Jasmine", desc: "Romantisme translusen dari mawar, melati, dan sedap malam. Membalut dengan kelembutan yang sangat elegan.", bgColor: "#fdf4ff", textColor: "#701a75", blob1: "#fbcfe8", blob2: "#e9d5ff", visual: "", audio: "assets/suara-floral.mp3", guide: { gender: 1, time: 2, weather: 2, occasion: 4 }, uiDelay: 1500 },
    iris: { title: "Iris / Powdery", desc: "Aroma seperti bedak rias mewah atau lipstik mahal. Sangat aristokratis, kering, dan bertekstur halus.", bgColor: "#f5f3ff", textColor: "#4c1d95", blob1: "#c4b5fd", blob2: "#a78bfa", visual: "", audio: "assets/suara-iris.mp3", guide: { gender: 2, time: 4, weather: 3, occasion: 5 }, uiDelay: 1500 },
    vanilla: { title: "Vanilla / Gourmand", desc: "Menggugah selera seperti makanan penutup. Kehangatan vanila madu dan karamel yang membuat ketagihan.", bgColor: "#fef3c7", textColor: "#92400e", blob1: "#fde68a", blob2: "#d97706", visual: "", audio: "assets/suara-vanilla.mp3", guide: { gender: 2, time: 4, weather: 4, occasion: 3 }, uiDelay: 1500 },
    spicy: { title: "Spicy / Oriental", desc: "Eksotis dan berani. Perpaduan lada merah, kapulaga, dan kayu manis yang memberikan efek hangat di hidung.", bgColor: "#7f1d1d", textColor: "#fecaca", blob1: "#991b1b", blob2: "#b91c1c", visual: "", audio: "assets/suara-spicy.mp3", guide: { gender: 4, time: 5, weather: 5, occasion: 4 }, uiDelay: 1500 },
    musk: { title: "White Musk", desc: "Molekul yang meniru aroma kulit bersih. Halus, transparan, dan menempel lama sebagai fondasi.", bgColor: "#f8fafc", textColor: "#334155", blob1: "#e2e8f0", blob2: "#cbd5e1", visual: "", audio: "assets/suara-musk.mp3", guide: { gender: 3, time: 3, weather: 3, occasion: 2 }, uiDelay: 1500 },
    leather: { title: "Leather / Tobacco", desc: "Kasar namun berkelas. Mereplikasi aroma jaket kulit baru, asap cerutu, dan interior mobil mewah.", bgColor: "#0f172a", textColor: "#94a3b8", blob1: "#1e293b", blob2: "#334155", visual: "", audio: "assets/suara-leather.mp3", guide: { gender: 5, time: 5, weather: 4, occasion: 4 }, uiDelay: 1500 }
};

const unchartedState = {
    title: "Uncharted Scent",
    desc: "Molekul aroma ini belum disintesis di dalam laboratorium kami. Silakan coba notes lain.",
    bgColor: "#27272a", textColor: "#a1a1aa", blob1: "#3f3f46", blob2: "#52525b",
    guide: { gender: 3, time: 3, weather: 3, occasion: 3 },
    uiDelay: 1000
};

const iconEyeOff = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: text-bottom; margin-right: 6px;"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>`;
const iconEyeOn = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: text-bottom; margin-right: 6px;"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>`;

const enterBtn = document.getElementById('enter-btn');
const welcomeScreen = document.getElementById('welcome-screen');
const mainInterface = document.getElementById('main-interface');
const creditFooter = document.getElementById('credit-footer');
const root = document.documentElement; 
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
const sprayGuide = document.getElementById('spray-guide'); 
const searchModule = document.querySelector('.search-module');
const sensoryGrid = document.getElementById('sensory-grid');
const favSection = document.getElementById('favorites-section');

let currentActiveNote = '';
let uiTimeout; 
let isUiHidden = false; 

let favorites = JSON.parse(localStorage.getItem('scentscape_favs')) || [];

function renderFavorites() {
    if (favorites.length === 0) {
        favList.innerHTML = '<span style="opacity: 0.5; font-size: 0.9rem; font-weight: 300;">Belum ada aroma yang disimpan.</span>';
        return;
    }
    favList.innerHTML = '';
    favorites.forEach(favKey => {
        const data = scentDB[favKey];
        if (data) {
            const btn = document.createElement('button');
            btn.className = 'note-btn glass-btn';
            btn.style.padding = '8px 20px';
            btn.style.fontSize = '0.85rem';
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
            if (index === guideData[cat] - 1) {
                dash.classList.add('active'); 
            } else {
                dash.classList.remove('active');
            }
        });
    });
}

enterBtn.addEventListener('click', () => {
    gsap.to([welcomeScreen, creditFooter], {
        opacity: 0, y: -50, duration: 0.8, 
        onComplete: () => {
            welcomeScreen.classList.add('hidden');
            creditFooter.classList.add('hidden');
            mainInterface.classList.remove('hidden');
            gsap.fromTo(mainInterface, 
                { opacity: 0, scale: 0.9 }, 
                { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" }
            );
        }
    });
});

function triggerSensoryState(queryKey) {
    const key = queryKey.toLowerCase().trim();
    const isKnownScent = scentDB.hasOwnProperty(key);
    const data = isKnownScent ? scentDB[key] : unchartedState;

    gsap.to(ambientAudio, { volume: 0, duration: 0.5 });
    
    toggleUiBtn.classList.add('hidden');
    isUiHidden = false;
    toggleUiBtn.innerHTML = `${iconEyeOff} Sembunyikan Teks`;

    gsap.to('.curtain', {
        x: "0%", 
        duration: 0.7,
        delay: 0.2,
        ease: "power3.inOut",
        onComplete: () => {
            
            const revealNewScent = () => {
                currentActiveNote = key;
                
                root.style.setProperty('--bg-color', data.bgColor);
                root.style.setProperty('--text-color', data.textColor);
                root.style.setProperty('--blob-color-1', data.blob1);
                root.style.setProperty('--blob-color-2', data.blob2);
                noteTitle.textContent = data.title;
                noteDesc.textContent = data.desc;

                updateGuideUI(data.guide);

                if (data.audio) {
                    ambientAudio.src = data.audio;
                    ambientAudio.volume = 0;
                    ambientAudio.play().catch(e => console.log("Audio dicegah (Fitur Keamanan Browser)"));
                } else {
                    ambientAudio.pause();
                    ambientAudio.removeAttribute('src');
                }

                searchModule.classList.add('hidden');
                sensoryGrid.classList.add('hidden');
                favSection.classList.add('hidden');
                sprayGuide.classList.remove('hidden'); 
                
                if (isKnownScent) {
                    favBtn.classList.remove('hidden');
                    favBtn.textContent = favorites.includes(key) ? 'Hapus dari Favorit' : 'Tambahkan ke Favorit';
                } else {
                    favBtn.classList.add('hidden');
                }
                
                gsap.set(mainInterface, { opacity: 0, scale: 0.95 });

                backBtn.classList.remove('hidden');
                gsap.set(backBtn, { opacity: 0, y: -20 });

                gsap.to('.curtain-left', { x: "-100%", duration: 0.7, ease: "power3.inOut" });
                gsap.to('.curtain-right', { x: "100%", duration: 0.7, ease: "power3.inOut" });
                
                gsap.to(backBtn, { opacity: 1, y: 0, duration: 0.6, delay: 0.3 });

                if (data.visual) {
                    gsap.to(cinematicBg, { opacity: 1, duration: 1.5, delay: 0.3 });
                }
                if (data.audio) {
                    gsap.to(ambientAudio, { volume: 0.5, duration: 1.5, delay: 0.3 });
                }

                clearTimeout(uiTimeout);
                uiTimeout = setTimeout(() => {
                    if (currentActiveNote === key) { 
                        gsap.to(mainInterface, {
                            opacity: 1, scale: 1, duration: 1.5, ease: "power2.out"
                        });
                        
                        toggleUiBtn.classList.remove('hidden');
                        gsap.fromTo(toggleUiBtn, 
                            { opacity: 0, y: -20 }, 
                            { opacity: 1, y: 0, duration: 0.8, delay: 0.3, ease: "power2.out" }
                        );
                    }
                }, data.uiDelay); 
            };

            if (data.visual) {
                gsap.set(cinematicBg, { opacity: 0 }); 
                cinematicBg.src = data.visual;
                
                cinematicBg.onload = () => {
                    revealNewScent(); 
                    cinematicBg.onload = null; 
                };

                setTimeout(() => {
                    if (cinematicBg.onload) {
                        revealNewScent();
                        cinematicBg.onload = null;
                    }
                }, 3000);

            } else {
                cinematicBg.removeAttribute('src');
                revealNewScent();
            }
        }
    });
}

toggleUiBtn.addEventListener('click', () => {
    if (!isUiHidden) {
        gsap.to(mainInterface, { opacity: 0, scale: 0.95, duration: 0.6, ease: "power2.inOut" });
        toggleUiBtn.innerHTML = `${iconEyeOn} Tampilkan Teks`;
        isUiHidden = true;
    } else {
        gsap.to(mainInterface, { opacity: 1, scale: 1, duration: 0.6, ease: "power2.out" });
        toggleUiBtn.innerHTML = `${iconEyeOff} Sembunyikan Teks`;
        isUiHidden = false;
    }
});

backBtn.addEventListener('click', () => {
    clearTimeout(uiTimeout); 
    gsap.to(ambientAudio, { volume: 0, duration: 0.5 });
    
    gsap.to(mainInterface, { opacity: 0, duration: 0.4 }); 
    gsap.to(backBtn, { opacity: 0, duration: 0.4 });
    gsap.to(toggleUiBtn, { opacity: 0, duration: 0.4 });
    
    gsap.to('.curtain', {
        x: "0%", 
        duration: 0.7,
        delay: 0.3,
        ease: "power3.inOut",
        onComplete: () => {
            currentActiveNote = '';
            isUiHidden = false;
            
            root.style.setProperty('--bg-color', '#f5f5f5');
            root.style.setProperty('--text-color', '#111111');
            root.style.setProperty('--blob-color-1', '#9ca3af');
            root.style.setProperty('--blob-color-2', '#e5e7eb');
            
            noteTitle.textContent = "Menunggu Reaksi...";
            noteDesc.textContent = "Ketik aroma di atas atau sentuh modul wewangian untuk memulai.";
            
            cinematicBg.removeAttribute('src');
            ambientAudio.pause();
            ambientAudio.removeAttribute('src');

            searchModule.classList.remove('hidden');
            sensoryGrid.classList.remove('hidden');
            favSection.classList.remove('hidden');
            
            backBtn.classList.add('hidden');
            toggleUiBtn.classList.add('hidden');
            favBtn.classList.add('hidden');
            sprayGuide.classList.add('hidden'); 

            gsap.set(mainInterface, { opacity: 0, scale: 0.95 });

            gsap.to('.curtain-left', { x: "-100%", duration: 0.7, ease: "power3.inOut" });
            gsap.to('.curtain-right', { x: "100%", duration: 0.7, ease: "power3.inOut" });
            
            gsap.to(mainInterface, {
                opacity: 1, scale: 1, duration: 0.8, delay: 0.3, ease: "back.out(1.5)"
            });
        }
    });
});

favBtn.addEventListener('click', () => {
    if (!currentActiveNote || !scentDB[currentActiveNote]) return;
    if (favorites.includes(currentActiveNote)) {
        favorites = favorites.filter(f => f !== currentActiveNote);
        favBtn.textContent = 'Tambahkan ke Favorit';
    } else {
        favorites.push(currentActiveNote);
        favBtn.textContent = 'Hapus dari Favorit';
    }
    localStorage.setItem('scentscape_favs', JSON.stringify(favorites));
    renderFavorites(); 
});

document.querySelectorAll('.note-btn').forEach(btn => {
    btn.addEventListener('click', (e) => triggerSensoryState(e.target.getAttribute('data-note')));
});

searchBtn.addEventListener('click', () => { if(searchInput.value !== '') triggerSensoryState(searchInput.value); });
searchInput.addEventListener('keypress', (e) => { if (e.key === 'Enter' && searchInput.value !== '') triggerSensoryState(searchInput.value); });

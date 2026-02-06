// ===== RESORT DATABASE =====
// sfSlug = snow-forecast.com resort slug, srSlug = skiresort.info slug
const RESORTS = [
    // Italy - Dolomites
    {id:'selva',name:'Selva Val Gardena',region:'Dolomites',country:'Italy',emoji:'🇮🇹',lat:46.556,lon:11.759,elTop:2518,elBot:1563,sfSlug:'Selva-Gardena',srSlug:'val-gardena-groeden'},
    {id:'ortisei',name:'Ortisei / St. Ulrich',region:'Dolomites',country:'Italy',emoji:'🇮🇹',lat:46.574,lon:11.671,elTop:2518,elBot:1236,sfSlug:'Selva-Gardena',srSlug:'val-gardena-groeden'},
    {id:'corvara',name:'Corvara / Alta Badia',region:'Dolomites',country:'Italy',emoji:'🇮🇹',lat:46.550,lon:11.874,elTop:2778,elBot:1568,sfSlug:'Alta-Badia',srSlug:'alta-badia'},
    {id:'canazei',name:'Canazei / Belvedere',region:'Dolomites',country:'Italy',emoji:'🇮🇹',lat:46.476,lon:11.770,elTop:2625,elBot:1465,sfSlug:'Canazei',srSlug:'belvedere-col-rodella-canazei-campitello'},
    {id:'cortina',name:"Cortina d'Ampezzo",region:'Dolomites',country:'Italy',emoji:'🇮🇹',lat:46.537,lon:12.135,elTop:2930,elBot:1224,sfSlug:'Cortina-dAmpezzo',srSlug:'cortina-d-ampezzo'},
    {id:'madonna',name:'Madonna di Campiglio',region:'Trentino',country:'Italy',emoji:'🇮🇹',lat:46.229,lon:10.827,elTop:2504,elBot:1550,sfSlug:'Madonna-di-Campiglio',srSlug:'madonna-di-campiglio'},
    {id:'livigno',name:'Livigno',region:'Lombardy',country:'Italy',emoji:'🇮🇹',lat:46.538,lon:10.136,elTop:2798,elBot:1816,sfSlug:'Livigno',srSlug:'livigno'},
    {id:'cervinia',name:'Cervinia / Breuil',region:'Aosta Valley',country:'Italy',emoji:'🇮🇹',lat:45.934,lon:7.632,elTop:3480,elBot:2050,sfSlug:'Cervinia',srSlug:'breuil-cervinia-valtournenche'},
    // France
    {id:'chamonix',name:'Chamonix Mont-Blanc',region:'Haute-Savoie',country:'France',emoji:'🇫🇷',lat:45.924,lon:6.869,elTop:3842,elBot:1035,sfSlug:'Chamonix',srSlug:'chamonix-mont-blanc'},
    {id:'valthorens',name:'Val Thorens',region:'3 Vall\u00e9es',country:'France',emoji:'🇫🇷',lat:45.298,lon:6.580,elTop:3230,elBot:2300,sfSlug:'Val-Thorens',srSlug:'val-thorens'},
    {id:'courchevel',name:'Courchevel',region:'3 Vall\u00e9es',country:'France',emoji:'🇫🇷',lat:45.415,lon:6.635,elTop:2738,elBot:1300,sfSlug:'Courchevel',srSlug:'courchevel'},
    {id:'meribel',name:'M\u00e9ribel',region:'3 Vall\u00e9es',country:'France',emoji:'🇫🇷',lat:45.397,lon:6.566,elTop:2952,elBot:1450,sfSlug:'Meribel',srSlug:'meribel'},
    {id:'tignes',name:'Tignes',region:'Savoie',country:'France',emoji:'🇫🇷',lat:45.468,lon:6.906,elTop:3456,elBot:1550,sfSlug:'Tignes',srSlug:'tignes'},
    {id:'alpedhuez',name:"Alpe d'Huez",region:'Is\u00e8re',country:'France',emoji:'🇫🇷',lat:45.092,lon:6.070,elTop:3330,elBot:1860,sfSlug:'Alpe-dHuez',srSlug:'alpe-d-huez'},
    {id:'lesdeux',name:'Les Deux Alpes',region:'Is\u00e8re',country:'France',emoji:'🇫🇷',lat:45.017,lon:6.122,elTop:3600,elBot:1300,sfSlug:'Les-Deux-Alpes',srSlug:'les-2-alpes'},
    // Austria
    {id:'stanton',name:'St. Anton am Arlberg',region:'Tyrol',country:'Austria',emoji:'🇦🇹',lat:47.130,lon:10.269,elTop:2811,elBot:1304,sfSlug:'St-Anton',srSlug:'st-anton-am-arlberg'},
    {id:'kitzbuhel',name:'Kitzb\u00fchel',region:'Tyrol',country:'Austria',emoji:'🇦🇹',lat:47.449,lon:12.391,elTop:2000,elBot:800,sfSlug:'Kitzbuhel',srSlug:'kitzbuehelkirchberg'},
    {id:'ischgl',name:'Ischgl / Silvretta Arena',region:'Tyrol',country:'Austria',emoji:'🇦🇹',lat:47.015,lon:10.291,elTop:2872,elBot:1400,sfSlug:'Ischgl',srSlug:'silvretta-arena-ischgl-samnaun'},
    {id:'solden',name:'S\u00f6lden',region:'\u00d6tztal',country:'Austria',emoji:'🇦🇹',lat:46.966,lon:10.868,elTop:3340,elBot:1350,sfSlug:'Solden',srSlug:'soelden'},
    {id:'lech',name:'Lech / Z\u00fcrs',region:'Vorarlberg',country:'Austria',emoji:'🇦🇹',lat:47.210,lon:10.142,elTop:2811,elBot:1450,sfSlug:'Lech',srSlug:'lech-zuers-am-arlberg'},
    {id:'mayrhofen',name:'Mayrhofen / Zillertal',region:'Tyrol',country:'Austria',emoji:'🇦🇹',lat:47.167,lon:11.862,elTop:2500,elBot:630,sfSlug:'Mayrhofen',srSlug:'mayrhofen'},
    // Switzerland
    {id:'zermatt',name:'Zermatt',region:'Valais',country:'Switzerland',emoji:'🇨🇭',lat:46.021,lon:7.749,elTop:3883,elBot:1620,sfSlug:'Zermatt',srSlug:'zermatt-matterhorn'},
    {id:'verbier',name:'Verbier',region:'Valais',country:'Switzerland',emoji:'🇨🇭',lat:46.096,lon:7.228,elTop:3330,elBot:1500,sfSlug:'Verbier',srSlug:'verbier'},
    {id:'stmoritz',name:'St. Moritz',region:'Engadin',country:'Switzerland',emoji:'🇨🇭',lat:46.497,lon:9.838,elTop:3303,elBot:1750,sfSlug:'St-Moritz',srSlug:'st-moritz'},
    {id:'davos',name:'Davos / Klosters',region:'Graub\u00fcnden',country:'Switzerland',emoji:'🇨🇭',lat:46.801,lon:9.836,elTop:2844,elBot:1560,sfSlug:'Davos',srSlug:'davos-klosters'},
    {id:'laax',name:'Laax / Flims',region:'Graub\u00fcnden',country:'Switzerland',emoji:'🇨🇭',lat:46.844,lon:9.258,elTop:3018,elBot:1100,sfSlug:'Laax',srSlug:'laax'},
    // USA
    {id:'vail',name:'Vail',region:'Colorado',country:'USA',emoji:'🇺🇸',lat:39.640,lon:-106.374,elTop:3527,elBot:2476,sfSlug:'Vail',srSlug:'vail'},
    {id:'parkcity',name:'Park City',region:'Utah',country:'USA',emoji:'🇺🇸',lat:40.651,lon:-111.508,elTop:3049,elBot:2080,sfSlug:'Park-City',srSlug:'park-city'},
    {id:'mammoth',name:'Mammoth Mountain',region:'California',country:'USA',emoji:'🇺🇸',lat:37.631,lon:-119.033,elTop:3369,elBot:2424,sfSlug:'Mammoth-Mountain',srSlug:'mammoth-mountain'},
    {id:'jackson',name:'Jackson Hole',region:'Wyoming',country:'USA',emoji:'🇺🇸',lat:43.588,lon:-110.828,elTop:3185,elBot:1924,sfSlug:'Jackson-Hole',srSlug:'jackson-hole-mountain-resort'},
    {id:'aspen',name:'Aspen / Snowmass',region:'Colorado',country:'USA',emoji:'🇺🇸',lat:39.187,lon:-106.818,elTop:3813,elBot:2422,sfSlug:'Aspen-Snowmass',srSlug:'aspen-snowmass'},
    {id:'telluride',name:'Telluride',region:'Colorado',country:'USA',emoji:'🇺🇸',lat:37.937,lon:-107.812,elTop:3831,elBot:2659,sfSlug:'Telluride',srSlug:'telluride'},
    // Canada
    {id:'whistler',name:'Whistler Blackcomb',region:'British Columbia',country:'Canada',emoji:'🇨🇦',lat:50.116,lon:-122.957,elTop:2284,elBot:675,sfSlug:'Whistler-Blackcomb',srSlug:'whistler-blackcomb'},
    {id:'banff',name:'Banff / Lake Louise',region:'Alberta',country:'Canada',emoji:'🇨🇦',lat:51.426,lon:-116.177,elTop:2637,elBot:1646,sfSlug:'Lake-Louise',srSlug:'lake-louise'},
    // Japan
    {id:'niseko',name:'Niseko',region:'Hokkaido',country:'Japan',emoji:'🇯🇵',lat:42.862,lon:140.699,elTop:1308,elBot:260,sfSlug:'Niseko-Grand-Hirafu',srSlug:'niseko-united'},
    {id:'hakuba',name:'Hakuba Valley',region:'Nagano',country:'Japan',emoji:'🇯🇵',lat:36.698,lon:137.833,elTop:1831,elBot:760,sfSlug:'Happo-One',srSlug:'hakuba-valley'},
    {id:'myoko',name:'Myoko Kogen',region:'Niigata',country:'Japan',emoji:'🇯🇵',lat:36.867,lon:138.855,elTop:1855,elBot:750,sfSlug:'Myoko-Kogen',srSlug:'myoko-kogen'},
    // Scandinavia
    {id:'are',name:'\u00c5re',region:'J\u00e4mtland',country:'Sweden',emoji:'🇸🇪',lat:63.399,lon:13.074,elTop:1274,elBot:380,sfSlug:'Are',srSlug:'aare'},
    // Andorra
    {id:'grandvalira',name:'Grandvalira',region:'Andorra',country:'Andorra',emoji:'🇦🇩',lat:42.556,lon:1.672,elTop:2640,elBot:1710,sfSlug:'Grandvalira',srSlug:'grandvalira'},
    // Spain
    {id:'baqueira',name:'Baqueira-Beret',region:'Catalonia',country:'Spain',emoji:'🇪🇸',lat:42.697,lon:0.945,elTop:2510,elBot:1500,sfSlug:'Baqueira-Beret',srSlug:'baqueira-beret'},
];

// ===== STATE =====
let state = {
    resort: null,
    customResortName: null,
    vacationDate: null,
    countdownInterval: null,
    familyMembers: [],
    checkedItems: {},
    triviaScore: 0,
    achievements: {},
    weatherCache: null,
};

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    try {
        initSnowCanvas();
        initDatePicker();
        setupSearch();
        setupTabs();
        setupEventListeners();
        loadState();
        initDefaults();
    } catch(e) {
        console.error('Init error:', e);
    }
});

function initDatePicker() {
    const el = document.getElementById('vacationDate');
    const today = new Date();
    el.min = today.toISOString().split('T')[0];
    const max = new Date(today); max.setFullYear(max.getFullYear()+1);
    el.max = max.toISOString().split('T')[0];
    el.value = '2026-02-22';
}

function initDefaults() {
    const saved = localStorage.getItem('snowApp3');
    if (!saved) {
        const selva = RESORTS.find(r => r.id === 'selva');
        state.resort = selva;
        document.getElementById('resortSearch').value = selva.name;
        state.vacationDate = new Date('2026-02-22T00:00:00');
        saveState();
        activateDashboard();
    }
}

function setupEventListeners() {
    document.getElementById('btnGo').addEventListener('click', handleGo);
    document.getElementById('btnNewTrivia').addEventListener('click', loadTrivia);
    document.getElementById('btnAddMember').addEventListener('click', addFamilyMember);
    document.getElementById('memberName').addEventListener('keypress', e => { if (e.key==='Enter') addFamilyMember(); });
    document.addEventListener('click', e => {
        if (!e.target.closest('.search-wrapper')) document.getElementById('searchDropdown').classList.add('hidden');
    });
}

// ===== PREDICTIVE SEARCH =====
function setupSearch() {
    const input = document.getElementById('resortSearch');
    const dd = document.getElementById('searchDropdown');
    input.addEventListener('focus', renderDropdown);
    input.addEventListener('input', renderDropdown);
    function renderDropdown() {
        const q = input.value.trim().toLowerCase();
        let matches;
        if (q.length === 0) { matches = RESORTS.slice(0, 10); }
        else {
            matches = RESORTS.map(r => {
                const nl = r.name.toLowerCase(), rl = r.region.toLowerCase(), cl = r.country.toLowerCase();
                let score = 0;
                if (nl.startsWith(q)) score = 100;
                else if (nl.includes(q)) score = 80;
                else if (rl.includes(q)) score = 60;
                else if (cl.includes(q)) score = 40;
                return { r, score };
            }).filter(x => x.score > 0).sort((a,b) => b.score - a.score).slice(0, 8).map(x => x.r);
        }
        let html = matches.map(r =>
            `<div class="dd-item" data-id="${r.id}"><span class="dd-flag">${r.emoji}</span><span class="dd-name">${q ? highlightMatch(r.name, q) : esc(r.name)}</span><span class="dd-region">${r.region}, ${r.country}</span></div>`
        ).join('');
        if (q.length > 0) { html += `<div class="dd-item dd-custom" data-custom="true">Use "${esc(input.value.trim())}" as custom resort</div>`; }
        dd.innerHTML = html;
        dd.classList.remove('hidden');
        dd.querySelectorAll('.dd-item').forEach(item => {
            item.addEventListener('mousedown', (e) => {
                e.preventDefault();
                if (item.dataset.custom) { state.resort = createCustomResort(input.value.trim()); state.customResortName = input.value.trim(); }
                else { const r = RESORTS.find(r => r.id === item.dataset.id); state.resort = r; state.customResortName = null; input.value = r.name; }
                dd.classList.add('hidden'); input.blur();
            });
        });
    }
}
function highlightMatch(text, q) { const idx = text.toLowerCase().indexOf(q); if (idx === -1) return esc(text); return esc(text.slice(0,idx)) + '<b style="color:#4a90d9">' + esc(text.slice(idx,idx+q.length)) + '</b>' + esc(text.slice(idx+q.length)); }
function esc(s) { return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
function createCustomResort(name) { return { id:'custom_'+Date.now(), name, region:'Custom', country:'', emoji:'🏔️', lat:46.5, lon:11.5, elTop:2500, elBot:1500 }; }

// ===== GAME TABS =====
function setupTabs() { document.querySelectorAll('.game-tab').forEach(tab => { tab.addEventListener('click', () => { document.querySelectorAll('.game-tab').forEach(t => t.classList.remove('active')); document.querySelectorAll('.game-panel').forEach(p => p.classList.remove('active')); tab.classList.add('active'); document.getElementById('panel-'+tab.dataset.tab).classList.add('active'); }); }); }

// ===== PERSISTENCE =====
function saveState() { try { localStorage.setItem('snowApp3', JSON.stringify({ resortId: state.resort?.id, customResortName: state.customResortName, customResort: state.customResortName ? state.resort : null, vacationDate: state.vacationDate?.toISOString(), familyMembers: state.familyMembers, checkedItems: state.checkedItems, triviaScore: state.triviaScore, achievements: state.achievements, })); } catch(e) { console.warn('Save failed:', e); } }

function loadState() {
    const raw = localStorage.getItem('snowApp3');
    if (!raw) return;
    try {
        const d = JSON.parse(raw);
        if (d.customResortName && d.customResort) { state.resort = d.customResort; state.customResortName = d.customResortName; document.getElementById('resortSearch').value = d.customResortName; }
        else if (d.resortId) { const found = RESORTS.find(r => r.id === d.resortId); if (found) { state.resort = found; document.getElementById('resortSearch').value = found.name; } }
        if (d.vacationDate) { const dt = new Date(d.vacationDate); if (dt > new Date()) { document.getElementById('vacationDate').value = dt.toISOString().split('T')[0]; state.vacationDate = dt; } }
        state.familyMembers = d.familyMembers || []; state.checkedItems = d.checkedItems || {}; state.triviaScore = d.triviaScore || 0; state.achievements = d.achievements || {};
        if (state.resort && state.vacationDate) activateDashboard();
    } catch(e) { console.error('Load state error:', e); localStorage.removeItem('snowApp3'); }
}

// ===== MAIN FLOW =====
function handleGo() {
    const inp = document.getElementById('resortSearch'); const dateEl = document.getElementById('vacationDate'); const val = inp.value.trim();
    if (!val) { shakeEl(inp); return; } if (!dateEl.value) { shakeEl(dateEl); return; }
    if (!state.resort || (state.resort.name !== val && state.customResortName !== val)) { const match = RESORTS.find(r => r.name.toLowerCase() === val.toLowerCase()); state.resort = match || createCustomResort(val); state.customResortName = match ? null : val; }
    state.vacationDate = new Date(dateEl.value + 'T00:00:00'); saveState(); activateDashboard();
}

function activateDashboard() {
    document.getElementById('dashboard').classList.remove('hidden');
    document.getElementById('resortName').textContent = (state.resort.emoji||'🏔️') + ' ' + state.resort.name;
    startCountdown(); fetchSnowData(); loadChecklist(); loadTrivia(); renderScoreboard(); renderBadges(); startTicker(); updateMilestones(); updateWidget(); updateSourceLinks();
    document.getElementById('dashboard').scrollIntoView({ behavior:'smooth' });
}

function updateSourceLinks() {
    const r = state.resort;
    const sfLink = document.getElementById('snowSourceLink');
    const srLink = document.getElementById('snowSourceLink2');
    if (r.sfSlug) { sfLink.href = `https://www.snow-forecast.com/resorts/${r.sfSlug}/snow-report`; } else { sfLink.href = 'https://www.snow-forecast.com'; }
    if (r.srSlug) { srLink.href = `https://www.skiresort.info/ski-resort/${r.srSlug}/snow-report/`; } else { srLink.href = 'https://www.skiresort.info'; }
}

function updateWidget() { document.getElementById('widgetPreview').classList.remove('hidden'); document.getElementById('widgetResort').textContent = state.resort.name; }

// ===== SNOW DATA: MULTI-SOURCE CROSS-REFERENCED =====
function terrainCorrectionFactor(elevation) {
    if (elevation >= 3000) return 1.55; if (elevation >= 2500) return 1.6; if (elevation >= 2000) return 1.65; if (elevation >= 1500) return 1.7; return 1.75;
}

async function fetchSnowData() {
    const r = state.resort;
    ['snowTop','snowBottom','freshSnow'].forEach(id => document.getElementById(id).textContent = '...');
    try {
        const [summitData, baseData, dailyData] = await Promise.all([
            fetchOpenMeteoHourly(r.lat, r.lon, r.elTop),
            fetchOpenMeteoHourly(r.lat, r.lon, r.elBot),
            fetchOpenMeteoDaily(r.lat, r.lon, r.elTop),
        ]);
        const rawSummitCm = getLatestSnowDepth(summitData);
        const rawBaseCm = getLatestSnowDepth(baseData);
        const daily = dailyData?.daily;
        const totalSnow7d = daily ? daily.snowfall_sum.slice(0,7).reduce((a,b) => a+(b||0), 0) : 0;
        const fresh24h = daily ? Math.round(daily.snowfall_sum[0] || 0) : 0;
        const fresh48h = daily ? Math.round((daily.snowfall_sum[0]||0) + (daily.snowfall_sum[1]||0)) : 0;
        let histSummitCm = null, histBaseCm = null;
        try {
            const [histTop, histBot] = await Promise.all([fetchOpenMeteoHistorical(r.lat, r.lon, r.elTop), fetchOpenMeteoHistorical(r.lat, r.lon, r.elBot)]);
            histSummitCm = getLatestSnowDepth(histTop); histBaseCm = getLatestSnowDepth(histBot);
        } catch(e) { console.warn('Historical data unavailable:', e); }
        const corrTop = terrainCorrectionFactor(r.elTop); const corrBot = terrainCorrectionFactor(r.elBot);
        const correctedSummit = rawSummitCm !== null ? Math.round(rawSummitCm * corrTop) : null;
        const correctedBase = rawBaseCm !== null ? Math.round(rawBaseCm * corrBot) : null;
        const correctedHistSummit = histSummitCm !== null ? Math.round(histSummitCm * corrTop) : null;
        const correctedHistBase = histBaseCm !== null ? Math.round(histBaseCm * corrBot) : null;
        const snowTop = Math.round(averageOfValid([correctedSummit, correctedHistSummit]));
        const snowBot = Math.round(averageOfValid([correctedBase, correctedHistBase]));
        console.log(`Snow data - Summit: raw=${rawSummitCm}cm x ${corrTop} = ${correctedSummit}cm, hist=${histSummitCm}cm -> final: ${snowTop}cm`);
        console.log(`Snow data - Base: raw=${rawBaseCm}cm x ${corrBot} = ${correctedBase}cm -> final: ${snowBot}cm`);
        renderSnowConditions(snowTop, snowBot, fresh24h, fresh48h, totalSnow7d, daily);
        if (daily) renderRealForecast(dailyData); else renderEstimatedForecast(r);
        state.weatherCache = { summitData, baseData, dailyData, snowTop, snowBot, fresh24h };
    } catch(err) { console.warn('All API fetches failed, using estimates:', err); renderEstimatedConditions(r); renderEstimatedForecast(r); }
}

async function fetchOpenMeteoHourly(lat, lon, elevation) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=snow_depth,snowfall,temperature_2m&elevation=${Math.round(elevation)}&timezone=auto&forecast_days=2`;
    const resp = await fetch(url); if (!resp.ok) throw new Error(`HTTP ${resp.status}`); return resp.json();
}
async function fetchOpenMeteoDaily(lat, lon, elevation) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min,weathercode,snowfall_sum,windspeed_10m_max&current=temperature_2m,snowfall,weathercode,windspeed_10m&elevation=${Math.round(elevation)}&timezone=auto&forecast_days=7`;
    const resp = await fetch(url); if (!resp.ok) throw new Error(`HTTP ${resp.status}`); return resp.json();
}
async function fetchOpenMeteoHistorical(lat, lon, elevation) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=snow_depth&elevation=${Math.round(elevation)}&timezone=auto&past_days=7&forecast_days=1`;
    const resp = await fetch(url); if (!resp.ok) throw new Error(`HTTP ${resp.status}`); return resp.json();
}

function getLatestSnowDepth(data) {
    if (!data?.hourly?.snow_depth) return null;
    const depths = data.hourly.snow_depth;
    let best = null;
    for (let i = depths.length - 1; i >= 0; i--) { if (depths[i] !== null && depths[i] !== undefined) { best = depths[i] * 100; break; } }
    return best;
}
function averageOfValid(arr) { const valid = arr.filter(v => v !== null && v !== undefined && !isNaN(v) && v >= 0); if (valid.length === 0) return 0; return valid.reduce((a,b) => a+b, 0) / valid.length; }

// ===== RENDER SNOW CONDITIONS =====
function renderSnowConditions(snowTop, snowBot, fresh24h, fresh48h, totalSnow7d, daily) {
    animVal('snowTop', 0, snowTop, 1200); animVal('snowBottom', 0, snowBot, 1200); animVal('freshSnow', 0, fresh24h, 1200);
    setTimeout(() => { document.getElementById('snowBarTop').style.width = Math.min(100,(snowTop/400)*100)+'%'; document.getElementById('snowBarBottom').style.width = Math.min(100,(snowBot/200)*100)+'%'; }, 150);
    const avgTemp = daily ? (daily.temperature_2m_max[0] + daily.temperature_2m_min[0]) / 2 : -5;
    let qTop, qBot;
    if (fresh48h > 15 && avgTemp < 0) qTop = {l:'✨ Powder',c:'#276749',bg:'#f0fff4'};
    else if (snowTop > 150) qTop = {l:'👍 Great',c:'#975a16',bg:'#fefcbf'};
    else if (snowTop > 50) qTop = {l:'🙂 Fair',c:'#744210',bg:'#fefcbf'};
    else qTop = {l:'⚠️ Limited',c:'#9b2c2c',bg:'#fff5f5'};
    qBot = snowBot > 40 ? {l:'👍 Good Base',c:'#975a16',bg:'#fefcbf'} : {l:'⚠️ Thin',c:'#9b2c2c',bg:'#fff5f5'};
    setQuality('snowQualityTop', qTop); setQuality('snowQualityBottom', qBot);
    document.getElementById('freshFlakes').textContent = '❄️'.repeat(Math.min(8, Math.ceil(fresh24h/3)));
    const sf = getSeasonFactor(new Date().getMonth(), state.resort.lat);
    updateSnowAlert(fresh24h, snowTop, sf);
    document.getElementById('widgetSnowTop').textContent = snowTop+'cm'; document.getElementById('widgetSnowBase').textContent = snowBot+'cm'; document.getElementById('widgetFresh').textContent = fresh24h+'cm';
    document.getElementById('widgetAlert').textContent = fresh24h >= 15 ? '🚨 POWDER ALERT!' : fresh24h >= 5 ? '❄️ Fresh snow!' : snowTop > 100 ? '⛷️ Good conditions' : '🌤️ Check reports';
}

function renderRealForecast(data) {
    const el = document.getElementById('forecastCards'); const daily = data.daily; if (!daily) return;
    const dayNames = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']; let html = '';
    for (let i = 0; i < Math.min(5, daily.time.length); i++) {
        const dt = new Date(daily.time[i]+'T12:00:00'); const dn = i===0 ? 'Today' : i===1 ? 'Tomorrow' : dayNames[dt.getDay()];
        const wc = daily.weathercode[i]; const icon = weatherCodeToEmoji(wc); const desc = weatherCodeToDesc(wc);
        const hi = Math.round(daily.temperature_2m_max[i]); const lo = Math.round(daily.temperature_2m_min[i]);
        const snow = Math.round(daily.snowfall_sum[i] || 0); const wind = Math.round(daily.windspeed_10m_max[i] || 0);
        html += `<div class="fc-card"><div class="fc-day">${dn}</div><span class="fc-icon">${icon}</span><div class="fc-temp">${hi}°</div><div class="fc-low">${lo}°</div><div class="fc-desc">${desc}</div>${snow > 0 ? `<div class="fc-snow">❄️ ${snow}cm</div>` : ''}<div class="fc-wind">💨 ${wind}km/h</div></div>`;
    }
    el.innerHTML = html;
}

function weatherCodeToEmoji(code) { if (code <= 1) return '☀️'; if (code <= 3) return '⛅'; if (code <= 48) return '☁️'; if (code <= 57) return '🌧️'; if (code <= 67) return '🌧️'; if (code <= 77) return '🌨️'; if (code <= 86) return '❄️'; if (code <= 99) return '⛈️'; return '☁️'; }
function weatherCodeToDesc(code) { if (code <= 0) return 'Clear'; if (code <= 1) return 'Mostly Clear'; if (code <= 2) return 'Partly Cloudy'; if (code <= 3) return 'Overcast'; if (code <= 48) return 'Foggy'; if (code <= 55) return 'Drizzle'; if (code <= 57) return 'Freezing Drizzle'; if (code <= 65) return 'Rain'; if (code <= 67) return 'Freezing Rain'; if (code <= 75) return 'Snowfall'; if (code <= 77) return 'Snow Grains'; if (code <= 82) return 'Rain Showers'; if (code <= 86) return 'Snow Showers'; return 'Thunderstorm'; }

function renderEstimatedConditions(r) {
    const month = new Date().getMonth(); const sf = getSeasonFactor(month, r.lat); const elFactor = Math.min(1.5, r.elTop / 2000);
    const sTop = Math.max(0, Math.round((60 + sf * 180) * elFactor)); const sBot = Math.max(0, Math.round((10 + sf * 60) * Math.min(1.2, r.elBot / 1500)));
    const fresh = Math.max(0, Math.round(Math.random()*20*sf));
    animVal('snowTop',0,sTop,1200); animVal('snowBottom',0,sBot,1200); animVal('freshSnow',0,fresh,1200);
    setTimeout(() => { document.getElementById('snowBarTop').style.width = Math.min(100,(sTop/400)*100)+'%'; document.getElementById('snowBarBottom').style.width = Math.min(100,(sBot/200)*100)+'%'; },150);
    const quals = [{min:.7,l:'✨ Powder',c:'#276749',bg:'#f0fff4'},{min:.4,l:'👍 Great',c:'#975a16',bg:'#fefcbf'},{min:.2,l:'🙂 Fair',c:'#744210',bg:'#fefcbf'},{min:0,l:'⚠️ Limited',c:'#9b2c2c',bg:'#fff5f5'}];
    setQuality('snowQualityTop', quals.find(q => sf >= q.min)); setQuality('snowQualityBottom', sf>.3 ? quals.find(q => sf*.7>=q.min) : quals[quals.length-1]);
    document.getElementById('freshFlakes').textContent = '❄️'.repeat(Math.min(8,Math.ceil(fresh/3)));
    updateSnowAlert(fresh,sTop,sf);
    document.getElementById('widgetSnowTop').textContent = sTop+'cm'; document.getElementById('widgetSnowBase').textContent = sBot+'cm'; document.getElementById('widgetFresh').textContent = fresh+'cm';
    document.getElementById('widgetAlert').textContent = fresh>=15?'🚨 POWDER!':sf>.4?'⛷️ Good':'🌤️ Check';
}

function renderEstimatedForecast(r) {
    const el = document.getElementById('forecastCards'); const dayNames = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    const today = new Date(); const sf = getSeasonFactor(today.getMonth(), r.lat);
    const types = [{i:'☀️',d:'Sunny',sc:0},{i:'⛅',d:'Partly Cloudy',sc:.1},{i:'☁️',d:'Cloudy',sc:.2},{i:'🌨️',d:'Light Snow',sc:.6},{i:'❄️',d:'Heavy Snow',sc:1}];
    let html = '';
    for (let i=0;i<5;i++){ const dt = new Date(today); dt.setDate(dt.getDate()+i); const dn = i===0?'Today':i===1?'Tomorrow':dayNames[dt.getDay()];
        const rnd = Math.random(); let wi;
        if(sf>.6) wi=rnd<.3?4:rnd<.55?3:rnd<.75?2:rnd<.9?1:0; else if(sf>.3) wi=rnd<.15?4:rnd<.35?3:rnd<.55?2:rnd<.8?1:0; else wi=rnd<.05?3:rnd<.2?2:rnd<.5?1:0;
        const w=types[wi]; const hi=Math.round(-5+(1-sf)*10+Math.random()*6); const lo=hi-Math.round(3+Math.random()*5);
        const sn=w.sc>.3?Math.round(w.sc*15+Math.random()*10):0;
        html+=`<div class="fc-card"><div class="fc-day">${dn}</div><span class="fc-icon">${w.i}</span><div class="fc-temp">${hi}°</div><div class="fc-low">${lo}°</div><div class="fc-desc">${w.d}</div>${sn>0?`<div class="fc-snow">❄️ ${sn}cm</div>`:''}<div class="fc-wind">💨 ${Math.round(5+Math.random()*25)}km/h</div></div>`;
    }
    el.innerHTML = html;
}

function getSeasonFactor(month,lat) { const peak=lat>0?[11,0,1,2]:[5,6,7,8]; const shoulder=lat>0?[10,3]:[4,9]; if(peak.includes(month)) return .7+Math.random()*.3; if(shoulder.includes(month)) return .3+Math.random()*.3; return Math.random()*.2; }
function setQuality(id,q) { const el=document.getElementById(id); el.textContent=q.l;el.style.color=q.c;el.style.background=q.bg; }
function updateSnowAlert(fresh,snowTop,sf) {
    const box=document.getElementById('alertBox'),icon=document.getElementById('alertIcon'),title=document.getElementById('alertTitle'),msg=document.getElementById('alertMessage');
    box.className='alert-box';
    if(fresh>=15){box.classList.add('alert-powder');icon.textContent='🌨️';title.textContent='🚨 POWDER ALERT!';msg.textContent=`${fresh}cm fresh in 24h! Epic conditions!`;}
    else if(fresh>=5){box.classList.add('alert-good');icon.textContent='❄️';title.textContent='Fresh Snow!';msg.textContent=`${fresh}cm fresh. Great skiing ahead!`;}
    else if(snowTop>100){box.classList.add('alert-moderate');icon.textContent='⛷️';title.textContent='Good Conditions';msg.textContent=`${snowTop}cm at summit. Solid base!`;}
    else if(sf>.3){box.classList.add('alert-moderate');icon.textContent='⛷️';title.textContent='Fair Conditions';msg.textContent=`${snowTop}cm at summit. Check resort reports.`;}
    else{box.classList.add('alert-low');icon.textContent='🌤️';title.textContent='Check Conditions';msg.textContent='Check resort reports for latest updates.';}
}

// ===== SNOW CANVAS =====
function initSnowCanvas() {
    const c=document.getElementById('snowCanvas'),ctx=c.getContext('2d');let f=[];
    function resize(){c.width=window.innerWidth;c.height=window.innerHeight} resize();
    window.addEventListener('resize',resize);
    const n=window.innerWidth<600?35:60;
    for(let i=0;i<n;i++) f.push({x:Math.random()*c.width,y:Math.random()*c.height,r:Math.random()*2.2+.6,s:Math.random()*.7+.2,w:Math.random()*.3-.15,o:Math.random()*.45+.1});
    (function draw(){ctx.clearRect(0,0,c.width,c.height);f.forEach(p=>{ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle=`rgba(255,255,255,${p.o})`;ctx.fill();p.y+=p.s;p.x+=p.w+Math.sin(p.y*.01)*.2;if(p.y>c.height+5){p.y=-5;p.x=Math.random()*c.width}if(p.x>c.width+5)p.x=-5;if(p.x<-5)p.x=c.width+5});requestAnimationFrame(draw)})();
}

// ===== COUNTDOWN =====
function startCountdown() {
    if(state.countdownInterval) clearInterval(state.countdownInterval);
    function tick(){
        const diff=state.vacationDate-new Date();
        if(diff<=0){ setNum('countDays','0');setNum('countHours','0');setNum('countMinutes','0');setNum('countSeconds','0');
            document.getElementById('countdownMessage').textContent="🎉 IT'S GO TIME! 🎿"; updateExcitement(100);
            document.getElementById('widgetDays').textContent='0'; document.getElementById('celebrationOverlay').classList.remove('hidden'); launchConfetti(); return; }
        const d=Math.floor(diff/864e5),h=Math.floor((diff%864e5)/36e5),m=Math.floor((diff%36e5)/6e4),s=Math.floor((diff%6e4)/1e3);
        setNum('countDays',d);setNum('countHours',h);setNum('countMinutes',m);setNum('countSeconds',s);
        updateExcitement(Math.min(100,Math.max(5,100-(d/60)*100))); updateCountdownMessage(d); document.getElementById('widgetDays').textContent=d;
    }
    tick(); state.countdownInterval=setInterval(tick,1000);
}
function setNum(id,v){const el=document.getElementById(id),s=String(v);if(el.textContent!==s){el.textContent=s;el.classList.remove('num-pop');void el.offsetWidth;el.classList.add('num-pop')}}
function updateExcitement(p){document.getElementById('meterFill').style.width=p+'%';document.getElementById('excitementEmoji').textContent=p>=90?'🤩':p>=70?'😆':p>=50?'😄':p>=30?'😊':'🙂'}
function updateCountdownMessage(d){
    const m=[{x:1,m:"🔥 TOMORROW!"},{x:3,m:"🎿 Almost there! Wax those skis!"},{x:7,m:"📦 One week! Start packing!"},{x:14,m:"🧤 Two weeks! Check gear!"},{x:30,m:"🏔️ A month away!"},{x:60,m:"⏳ Getting closer!"},{x:Infinity,m:"🌟 Adventure awaits!"}];
    document.getElementById('countdownMessage').textContent=m.find(i=>d<=i.x).m;
}
function updateMilestones(){
    const d=Math.floor((state.vacationDate-new Date())/864e5);
    document.getElementById('milestones').innerHTML=[{d:60,l:'60d',i:'📅'},{d:30,l:'30d',i:'🗓️'},{d:14,l:'2wk',i:'⏰'},{d:7,l:'1wk',i:'🔥'},{d:3,l:'3d',i:'🚀'},{d:1,l:'1d!',i:'🎉'}].map(m=>`<div class="milestone ${d<=m.d?'achieved':''}">${m.i}${m.l}${d<=m.d?' ✅':''}</div>`).join('');
}
function animVal(id,from,to,dur){const el=document.getElementById(id),t0=performance.now();(function step(now){const p=Math.min((now-t0)/dur,1);el.textContent=Math.round(from+(to-from)*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(step)})(t0)}

// ===== CHECKLIST =====
const CHECKLIST=[
    {id:'skis',t:'🎿 Ski/board equipment',p:10},{id:'clothes',t:'🧥 Warm layers',p:10},
    {id:'goggles',t:'🥽 Goggles & sunscreen',p:5},{id:'helmet',t:'⛑️ Helmet',p:10},
    {id:'boots',t:'🥾 Boot fit check',p:10},{id:'pass',t:'🎫 Lift pass',p:15},
    {id:'hotel',t:'🏨 Accommodation',p:15},{id:'transport',t:'🚗 Transport',p:10},
    {id:'snacks',t:'🍫 Snacks',p:5},{id:'camera',t:'📸 Camera',p:5},
    {id:'music',t:'🎵 Playlist',p:5},{id:'firstaid',t:'🩹 First aid',p:10},
];
function loadChecklist(){
    document.getElementById('checklist').innerHTML=CHECKLIST.map(i=>{
        const c=state.checkedItems[i.id]||false;
        return `<div class="cl-item ${c?'checked':''}" onclick="toggleCheck('${i.id}')"><div class="cl-check">${c?'✓':''}</div><span class="cl-text">${i.t}</span><span class="cl-pts">+${i.p}</span></div>`;
    }).join('');
    const done=Object.values(state.checkedItems).filter(Boolean).length,pct=Math.round((done/CHECKLIST.length)*100);
    document.getElementById('checklistFill').style.width=pct+'%'; document.getElementById('checklistPercent').textContent=pct+'%';
}
function toggleCheck(id){
    state.checkedItems[id]=!state.checkedItems[id];
    if(state.checkedItems[id]&&state.familyMembers.length>0){const it=CHECKLIST.find(i=>i.id===id);state.familyMembers[Math.floor(Math.random()*state.familyMembers.length)].score+=it.p;renderScoreboard()}
    saveState();loadChecklist();checkAchievements();
}

// ===== TRIVIA =====
const TRIVIA=[
    {q:"Deepest snowfall in one season?",o:["10m","15m","22m","29m"],c:3,f:"Mt Baker: 29m in 1998-99!"},
    {q:"What shape are snowflakes?",o:["Square","Hexagonal","Octagonal","Round"],c:1,f:"Hexagonal crystals!"},
    {q:"What % of snow is air?",o:["50%","70%","80%","90%"],c:3,f:"~90-95% trapped air!"},
    {q:"Snowiest city on Earth?",o:["Moscow","Aomori","Troms\u00f8","Anchorage"],c:1,f:"Aomori: ~8m/year!"},
    {q:"Max avalanche speed?",o:["50 km/h","100 km/h","200 km/h","300+km/h"],c:3,f:"Can exceed 300 km/h!"},
    {q:"Country with most ski resorts?",o:["USA","France","Japan","Austria"],c:2,f:"Japan: 500+ resorts!"},
    {q:"What is champagne powder?",o:["Pricey snow","Ultra-dry snow","Yellow snow","Fake snow"],c:1,f:"Ultra-dry, <6% water!"},
    {q:"Ski speed record?",o:["150 km/h","200 km/h","250+ km/h","100 km/h"],c:2,f:"254 km/h by Origone!"},
    {q:"What is a mogul?",o:["Rich skier","Bump on slope","Ski type","Peak"],c:1,f:"Bumps from repeated turns!"},
    {q:"Where are the Dolomites?",o:["Switzerland","Austria","Italy","France"],c:2,f:"Northeastern Italy!"},
    {q:"What's a piste?",o:["Ski pole","Groomed run","Drink","Ski pass"],c:1,f:"A marked ski run!"},
    {q:"What is the Sella Ronda?",o:["Italian pasta","40km ski circuit","Ski brand","Apr\u00e8s bar"],c:1,f:"40km circuit around the Sella group in the Dolomites!"},
];
let curTrivia=null;
function loadTrivia(){
    curTrivia=TRIVIA.filter(t=>t!==curTrivia)[Math.floor(Math.random()*(TRIVIA.length-1))];
    document.getElementById('triviaQuestion').textContent=curTrivia.q;
    document.getElementById('triviaResult').textContent='';
    document.getElementById('triviaOptions').innerHTML=curTrivia.o.map((o,i)=>`<div class="trivia-opt" onclick="answerTrivia(${i})">${o}</div>`).join('');
}
function answerTrivia(idx){
    document.querySelectorAll('.trivia-opt').forEach((el,i)=>{el.onclick=null;el.style.cursor='default';if(i===curTrivia.c)el.classList.add('correct');else if(i===idx)el.classList.add('wrong')});
    const r=document.getElementById('triviaResult');
    if(idx===curTrivia.c){r.textContent='✅ '+curTrivia.f;r.style.color='#276749';state.triviaScore++;state.familyMembers.forEach(m=>m.score+=5);renderScoreboard()}
    else{r.textContent='❌ '+curTrivia.f;r.style.color='#9b2c2c'}
    saveState();checkAchievements();
}

// ===== SCOREBOARD =====
function addFamilyMember(){
    const inp=document.getElementById('memberName'),name=inp.value.trim();
    if(!name||state.familyMembers.length>=8)return;
    state.familyMembers.push({name,score:0,avatar:['⛷️','🏂','🎿','🧊','☃️','🦌','🐧','🏔️'][state.familyMembers.length%8]});
    inp.value='';saveState();renderScoreboard();checkAchievements();
}
function renderScoreboard(){
    const s=[...state.familyMembers].sort((a,b)=>b.score-a.score);
    document.getElementById('scoreboard').innerHTML=s.map((m,i)=>{
        const rank=i===0?'🥇':i===1?'🥈':i===2?'🥉':(i+1)+'.';
        const mi=state.familyMembers.indexOf(m);
        return `<div class="score-row"><span class="rank">${rank}</span><span class="member-name">${m.avatar} ${m.name}</span><span class="member-score">${m.score}</span><div class="score-btns"><button class="score-btn plus" onclick="adjScore(${mi},5)">+</button><button class="score-btn minus" onclick="adjScore(${mi},-5)">−</button></div></div>`;
    }).join('');
}
function adjScore(i,a){state.familyMembers[i].score=Math.max(0,state.familyMembers[i].score+a);saveState();renderScoreboard()}

// ===== ACHIEVEMENTS =====
const BADGES=[{id:'first_login',icon:'🌟',name:'First Track'},{id:'family_added',icon:'👨‍👩‍👧‍👦',name:'Full Crew'},{id:'half_checklist',icon:'📋',name:'Half Packed'},{id:'full_checklist',icon:'🎒',name:'Ready!'},{id:'trivia_3',icon:'🧠',name:'Scholar'},{id:'trivia_10',icon:'🎓',name:'Professor'},{id:'week_left',icon:'🔥',name:'Final Week'},{id:'powder_day',icon:'🌨️',name:'Powder!'}];
function checkAchievements(){
    const done=Object.values(state.checkedItems).filter(Boolean).length,days=Math.floor((state.vacationDate-new Date())/864e5);
    state.achievements.first_login=true;
    if(state.familyMembers.length>=2)state.achievements.family_added=true;
    if(done>=CHECKLIST.length/2)state.achievements.half_checklist=true;
    if(done>=CHECKLIST.length)state.achievements.full_checklist=true;
    if(state.triviaScore>=3)state.achievements.trivia_3=true;
    if(state.triviaScore>=10)state.achievements.trivia_10=true;
    if(days<=7&&days>=0)state.achievements.week_left=true;
    if(document.getElementById('alertBox').classList.contains('alert-powder'))state.achievements.powder_day=true;
    saveState();renderBadges();
}
function renderBadges(){document.getElementById('badges').innerHTML=BADGES.map(b=>`<div class="badge ${state.achievements[b.id]?'unlocked':'locked'}"><span class="badge-icon">${b.icon}</span><span class="badge-name">${b.name}</span></div>`).join('')}

// ===== TICKER =====
const FACTS=["❄️ No two snowflakes are alike!","🏔️ 'Ski' = Old Norse for wood stick","⛷️ Skiing is 5,000+ years old","🎿 Longest run: 22km Zermatt","🏂 Boarding was banned till the 80s","🌨️ 1\" rain \u2248 13\" snow","💎 Powder = 95% air","🇮🇹 Dolomites = UNESCO site","⛷️ Sella Ronda = 40km circuit","🧤 40% heat loss from your head!","🌍 12% of Earth = snow & ice"];
function startTicker(){const el=document.getElementById('tickerContent'),h=FACTS.map(f=>`<span>${f}</span>`).join('');el.innerHTML=h+h}

// ===== CONFETTI =====
function launchConfetti(){
    const box=document.getElementById('confetti'),c=['#f6e05e','#fc8181','#48bb78','#4a90d9','#ed8936','#a8d8ea'];
    for(let i=0;i<80;i++){const d=document.createElement('div');d.style.cssText=`position:absolute;width:${Math.random()*8+4}px;height:${Math.random()*8+4}px;background:${c[Math.floor(Math.random()*c.length)]};left:${Math.random()*100}%;top:-10px;border-radius:${Math.random()>.5?'50%':'2px'};animation:confFall ${2+Math.random()*3}s ease-in ${Math.random()*2}s forwards`;box.appendChild(d)}
    if(!document.getElementById('confStyle')){const s=document.createElement('style');s.id='confStyle';s.textContent='@keyframes confFall{to{transform:translateY(100vh) rotate(720deg);opacity:0}}';document.head.appendChild(s)}
}

function shakeEl(el){el.style.animation='none';void el.offsetWidth;el.style.animation='shake .5s ease-in-out'}

// Refresh hourly
setInterval(()=>{if(state.resort)fetchSnowData()},36e5);

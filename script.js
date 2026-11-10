/* Arabic translations (French is the source text in index.html) */
const AR = {
  title: 'فندق أطلس غراند | احجز مباشرة',
  n1: 'الغرف', n2: 'التجربة', n3: 'احجز', n4: 'اتصل بنا', nb: 'احجز الآن',
  h_e: 'ضيافة خمس نجوم', h_h: 'ملاذ هادئ في قلب المدينة.',
  h_l: 'غرف أنيقة وتراس على السطح وخدمة تحفظ اسمك. احجز مباشرة بأفضل سعر.', h_b: 'اكتشف الغرف',
  b1: 'الوصول', b2: 'المغادرة', b3: 'عدد النزلاء', b4: 'تحقق من التوفر',
  r_e: 'الإقامة', r_h: 'غرف صُمّمت للراحة', r_p: 'اختر غرفة ثم أكمل حجزك أدناه.',
  rm1: 'غرفة عادية', rm1d: 'سرير مزدوج ومكتب وإطلالة على المدينة، والفطور مشمول.', rp1: '<b>8 000 دج</b> / الليلة',
  rm2: 'غرفة ديلوكس', rm2d: 'سرير كبير وشرفة خاصة وركن جلوس، والفطور مشمول.', rp2: '<b>12 000 دج</b> / الليلة',
  rm3: 'جناح تنفيذي', rm3d: 'صالة جلوس مستقلة وإطلالة بانورامية ودخول مجاني إلى السبا.', rp3: '<b>20 000 دج</b> / الليلة',
  x_e: 'التجربة', x_h: 'كل ما تحتاجه، دون زيادة',
  fe1: 'السبا والعافية', fe1d: 'ساونا وحمّام بخاري وجلسات تدليك.',
  fe2: 'مطعم بانورامي', fe2d: 'مأكولات محلية وعالمية بإطلالة على المدينة.',
  fe3: 'نقل من المطار', fe3d: 'تنقلات خاصة تُرتَّب عند الطلب.',
  fe4: 'إنترنت فائق السرعة', fe4d: 'اتصال سريع وموثوق في كل غرفة.',
  fe5: 'قاعات اجتماعات', fe5d: 'فضاءات مجهزة لفعالياتك ولقاءاتك المهنية.',
  fe6: 'استقبال على مدار الساعة', fe6d: 'فريقنا متواجد ليلًا ونهارًا.',
  v_e: 'إقامتك', v_room: 'الغرفة', v_dates: 'التواريخ', v_n: 'الليالي', v_tot: 'المجموع',
  v_h: 'أكمل حجزك', f_name: 'الاسم الكامل', f_phone: 'الهاتف', f_mail: 'البريد الإلكتروني', f_go: 'تأكيد الحجز',
  'ph:name': 'اسمك',
  d_e: 'فضاء التسيير الخاص بك', d_h: 'تحكّم في حجوزاتك من لوحة واحدة',
  d_p: 'تابع نسبة الإشغال ووصول اليوم والحجوزات لحظة بلحظة، دون عمولات، ومن أي جهاز.',
  m1: 'لوحة التحكم', m2: 'الحجوزات', m3: 'الغرف', m4: 'الزبائن', m5: 'التقارير', d_hi: 'مرحبًا، أطلس غراند',
  k1: 'نسبة الإشغال', k2: 'وصول اليوم', k3: 'غرف شاغرة', k4: 'إيرادات الشهر',
  ch_t: 'الإشغال خلال آخر 7 أيام', tb_t: 'آخر الحجوزات',
  th1: 'النزيل', th2: 'الغرفة', th3: 'الإقامة', th4: 'الحالة',
  p1: 'نادية ك.', p2: 'عمر س.', p3: 'لينة م.', p4: 'مهدي ر.',
  s_ok: 'مؤكد', s_wa: 'قيد الانتظار', s_in: 'وصل',
  d_c: 'معاينة للواجهة. نسختك تُصمَّم حسب احتياجاتك.',
  ft1: 'فندق أطلس غراند، [العنوان]، [المدينة]', ft2: '[الهاتف] · [البريد الإلكتروني]'
};
const M = {
  fr: { pick: 'Sélectionner', picked: 'Sélectionnée', none: 'Choisissez une chambre ci-dessus', dates: 'Vérifiez vos dates', to: 'au',
    need: 'Veuillez choisir une chambre et des dates valides.',
    ok: (n, r, a, b, tot, ref) => `Réservation reçue, ${n}. ${r}, du ${a} au ${b}, total ${tot}. Référence ${ref}. L’hôtel vous confirmera très vite.` },
  ar: { pick: 'اختيار', picked: 'تم الاختيار', none: 'اختر غرفة من الأعلى', dates: 'تحقق من التواريخ', to: 'إلى',
    need: 'يرجى اختيار غرفة وتواريخ صحيحة.',
    ok: (n, r, a, b, tot, ref) => `تم استلام حجزك يا ${n}. ${r}، من ${a} إلى ${b}، المجموع ${tot}. المرجع ${ref}. سيؤكد الفندق حجزك قريبًا.` }
};

/* ---------- Shared: language, navigation, scroll effects ---------- */
const $ = id => document.getElementById(id);
const hooks = [];
let lang = 'fr';
const DAYS = { fr: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'], ar: ['إثن', 'ثلا', 'أرب', 'خمي', 'جمع', 'سبت', 'أحد'] };
const fmt = n => n.toLocaleString(lang === 'ar' ? 'en-US' : 'fr-FR');
const cur = () => lang === 'ar' ? 'دج' : 'DA';
const t = k => M[lang][k];

// Keep the French source text so switching back is lossless
const src = {};
document.querySelectorAll('[data-i]').forEach(el => src[el.dataset.i] = el.innerHTML);
document.querySelectorAll('[data-ph]').forEach(el => src['ph:' + el.dataset.ph] = el.placeholder);

function setLang(l) {
  lang = l;
  const ar = l === 'ar';
  document.documentElement.lang = l;
  document.documentElement.dir = ar ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i]').forEach(el => el.innerHTML = (ar && AR[el.dataset.i]) || src[el.dataset.i]);
  document.querySelectorAll('[data-ph]').forEach(el => el.placeholder = (ar && AR['ph:' + el.dataset.ph]) || src['ph:' + el.dataset.ph]);
  document.querySelectorAll('[data-d]').forEach(el => el.textContent = DAYS[l][el.dataset.d]);
  document.querySelectorAll('[data-cur]').forEach(el => el.textContent = cur());
  $('sw').dataset.l = l;
  $('sw').setAttribute('aria-checked', ar);
  try { localStorage.setItem('lang', l); } catch (e) {}
  hooks.forEach(fn => fn());
}
$('sw').onclick = () => setLang(lang === 'fr' ? 'ar' : 'fr');

const nav = $('nav'), menu = $('menu');
addEventListener('scroll', () => nav.classList.toggle('solid', scrollY > 40), { passive: true });
$('burger').onclick = () => menu.classList.toggle('open');
menu.onclick = e => { if (e.target.tagName === 'A') menu.classList.remove('open'); };

const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
}), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

const co = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  co.unobserve(e.target);
  const to = +e.target.dataset.count, t0 = performance.now();
  (function tick(now) {
    const p = Math.min((now - t0) / 1400, 1);
    e.target.textContent = Math.round(to * (1 - Math.pow(1 - p, 3)));
    if (p < 1) requestAnimationFrame(tick);
  })(t0);
}), { threshold: .6 });
document.querySelectorAll('[data-count]').forEach(el => co.observe(el));

/* ---------- Hotel: booking ---------- */
const iso = n => { const d = new Date(); d.setDate(d.getDate() + n); return d.toISOString().slice(0, 10); };
$('in').min = iso(0); $('in').value = iso(7); $('out').value = iso(9);
let room = null;
const cards = [...document.querySelectorAll('.room')];
const nights = () => Math.max(0, Math.round((new Date($('out').value) - new Date($('in').value)) / 864e5));

function summary() {
  const n = nights();
  $('s-room').textContent = room ? room.querySelector('h3').textContent : t('none');
  $('s-dates').textContent = n ? `${$('in').value} ${t('to')} ${$('out').value}` : t('dates');
  $('s-n').textContent = n;
  $('s-total').textContent = fmt(room && n ? n * +room.dataset.price : 0) + ' ' + cur();
  cards.forEach(c => {
    c.classList.toggle('sel', c === room);
    c.querySelector('.pick').textContent = c === room ? t('picked') : t('pick');
  });
}
hooks.push(summary, () => $('msg').style.display = 'none');

$('in').addEventListener('change', () => {
  if (new Date($('out').value) <= new Date($('in').value)) {
    const d = new Date($('in').value); d.setDate(d.getDate() + 1);
    $('out').value = d.toISOString().slice(0, 10);
  }
  summary();
});
$('out').addEventListener('change', summary);
$('check').onclick = () => { summary(); $('rooms').scrollIntoView({ behavior: 'smooth' }); };
cards.forEach(c => c.querySelector('.pick').onclick = () => {
  room = c; summary(); $('reserve').scrollIntoView({ behavior: 'smooth' });
});

$('form').addEventListener('submit', e => {
  e.preventDefault();
  const m = $('msg'); m.style.display = 'block';
  if (!room || !nights()) { m.textContent = t('need'); return; }
  m.textContent = M[lang].ok($('name').value, $('s-room').textContent, $('in').value, $('out').value, $('s-total').textContent, 'ATL-' + Math.floor(1000 + Math.random() * 9000));
});

/* ---------- Start ---------- */
let saved = 'fr';
try { saved = localStorage.getItem('lang') || 'fr'; } catch (e) {}
setLang(saved);

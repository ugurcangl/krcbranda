const IMG = [
  'photo-1755816764913-bd1104a26d78', 'photo-1766087752966-b9a7b058b7da', 'photo-1761164164212-7fdea59d564e', 'photo-1600566753051-f0b89df2dd90',
  'photo-1757004954260-c84525088f0d', 'photo-1741971282313-fb25835b1d24', 'photo-1600566752355-35792bedcfea', 'photo-1522708323590-d24dbb6b0267',
  'photo-1775476793931-cb484f197760', 'photo-1770172343755-adeb277401fc', 'photo-1492684223066-81342ee5ff30', 'photo-1500530855697-b586d89ba3ee',
  'photo-1763692514961-edb68b1bcddc', 'photo-1769732169077-687934bea26c', 'photo-1511818966892-d7d671e672a2', 'photo-1484154218962-a197022b5858',
  'photo-1689075326462-581d7705c0ef', 'photo-1540555700478-4be289fbecef', 'photo-1590073242678-70ee3fc28e8e', 'photo-1551882547-ff40c63fe5fa',
  'photo-1778315971381-5486ea47864c', 'photo-1600566753086-00f18fb6b3ea', 'photo-1780369795786-7fe5dc004d8e', 'photo-1600210491369-e753d80a41f3',
];

const numberedGallery = (folder, prefix, count) =>
  Array.from({ length: count }, (_, index) => `/assets/${folder}/${prefix}-${index + 1}.webp`);

const PRODUCT_GALLERIES = {
  cadir: [
    ...numberedGallery('cadir', 'cadir', 20),
    '/assets/cadir/304269de-bbbe-453e-a7f3-74b7c3abb586.webp',
    '/assets/cadir/3e784cde-ee29-46ab-8bf2-25061508ab1d.webp',
    '/assets/cadir/5b1dab72-1ef8-46c2-a6ad-f3cb5dab2c5b.webp',
    '/assets/cadir/67eed00b-db19-4c87-9fc8-204a2ec5ad70.webp',
    '/assets/cadir/7176387c-87ca-41a5-b732-a4e92caa19fd.webp',
    '/assets/cadir/71b5394e-f923-43d5-b5a8-7e714bb7e0ee.webp',
    '/assets/cadir/71b5394e-f923-43d5-b5a8-7e714bb7e0ee-1.webp',
    '/assets/cadir/7c87ee18-f145-4d73-a5a3-72cf7eda0833.webp',
    '/assets/cadir/84ddff3b-8caa-457c-92fe-951f77674f98.webp',
    '/assets/cadir/84de623e-ef4a-43b0-aef4-346398976a9e.webp',
    '/assets/cadir/860b9f52-3bbb-44ab-9cd7-4a6eea7dd3ae.webp',
    '/assets/cadir/977293d7-7dcd-4b1e-ae2c-feef7ee69ae5.webp',
    '/assets/cadir/977293d7-7dcd-4b1e-ae2c-feef7ee69ae5-1.webp',
    '/assets/cadir/b409dcab-84fc-4276-9cc7-4c2bbfd75bf0.webp',
    '/assets/cadir/c0987f0c-3a64-4a8c-a530-d4f106c20f2e.webp',
    '/assets/cadir/e1c930f7-5baf-4263-9bc1-a45ede12ea26.webp',
    '/assets/cadir/f91a19b9-eabd-498b-adba-22cad093e2db.webp',
    '/assets/cadir/cadircozum.png',
  ],
  tente: [
    ...numberedGallery('tente', 'tente', 10),
    '/assets/tente/037d2ed0-62f4-4d44-ace3-097525ef7d65.webp',
    '/assets/tente/0501aca1-05f3-4766-a177-fa37be38f80b.webp',
    '/assets/tente/0e6b5d8f-3b4e-4967-a44e-d3807800d380.webp',
    '/assets/tente/2c35e505-35c5-47da-846c-3b6e742d00f5.webp',
    '/assets/tente/4660efa3-11f3-4601-958a-8d83e19ec7fe.webp',
    '/assets/tente/5e9fb9ff-ad0e-4b23-8353-e9079bb1baf3.webp',
    '/assets/tente/88336602-03f4-4820-8fee-99b37edee906.webp',
    '/assets/tente/9051b0ae-d242-49c2-ade3-9ac15a52d259.webp',
    '/assets/tente/928ea8a6-fd65-4658-a231-c8384689afb1.webp',
    '/assets/tente/92f81205-bcac-44be-9ec0-35a350568f91.webp',
    '/assets/tente/a5ccb9bb-ca1c-41e6-b97f-ce497617eae3.webp',
    '/assets/tente/ab23ec66-1ee2-421d-98fb-4d9e276a809d.webp',
    '/assets/tente/aed6ebf6-eb5c-4a10-8798-1bb3ce292b21.webp',
    '/assets/tente/c8636a54-e15f-4d21-86d1-b3dd424cc21d.webp',
    '/assets/tente/cc616dae-5a4f-4027-8673-53660577e17e.webp',
    '/assets/tente/cf9ed62e-c9c3-459d-9af7-23a7d366ee70.webp',
    '/assets/tente/e57e5c83-9c73-4eb4-b9f7-cde7ae3e4d08.webp',
    '/assets/tente/e9acf007-0949-4b5e-a019-e2bcd8d34d37.webp',
    '/assets/tente/fea1cc1f-030f-478a-8c90-58f86cd25cb6.webp',
  ],
  semsiye: [
    ...numberedGallery('semsiyegazebo', 'semsiyegazebo', 20),
    '/assets/semsiyegazebo/1defb1d6-8d45-456f-9e3d-111195a9e7df.webp',
    '/assets/semsiyegazebo/24758acc-61c3-4d46-93db-966b37b50769-1.webp',
    '/assets/semsiyegazebo/81103bd5-e222-43b1-9255-b91556049a0a.webp',
    '/assets/semsiyegazebo/gazebocozum.jpg',
  ],
};

const data = {
  pergola: { title: 'Pergola Sistemleri', lead: 'Açık alanları dört mevsim yaşayan mimari mekânlara dönüştürün.', body: 'Bioklimatik ve açılır-kapanır pergola çözümlerini, yapının mimarisine uyum sağlayacak ölçü ve detaylarla projelendiriyoruz.', start: 0 },
  tente: { title: 'Tente Sistemleri', lead: 'Işık ve gölgeyi günün ritmine göre kontrol edin.', body: 'Mafsallı, kasetli ve özel ölçü tente sistemleriyle konut ve ticari alanlara konforlu gölgelendirme sağlıyoruz.', start: 4, asset: '/assets/solution-tente.png', gallery: PRODUCT_GALLERIES.tente },
  cadir: { title: 'Çadır Sistemleri', lead: 'Etkinlikten endüstriyel kullanıma, güvenilir ve güçlü çözümler.', body: 'Farklı açıklık ve kullanım senaryolarına uygun çadır sistemlerini sağlam konstrüksiyon ve nitelikli membranlarla üretiyoruz.', start: 8, asset: '/assets/solution-cadir.png', gallery: PRODUCT_GALLERIES.cadir },
  branda: { title: 'Branda Sistemleri', lead: 'Koruma, dayanıklılık ve işlev tek yapıda.', body: 'İhtiyaca göre sabit veya hareketli branda sistemlerini, zorlu dış koşullara uygun malzemelerle özel ölçü üretiyoruz.', start: 12 },
  semsiye: { title: 'Şemsiye / Gazebo', lead: 'Geniş açıklıklarda zarif, esnek ve korunaklı yaşam alanları.', body: 'Bahçe, teras, otel ve restoranlar için profesyonel şemsiye sistemleri ile mimari gazebo çözümlerini alana özel ölçülerle tasarlıyoruz.', start: 16, asset: '/assets/solution-semsiye-gazebo.png', gallery: PRODUCT_GALLERIES.semsiye },
  gazebo: { title: 'Gazebo Sistemleri', lead: 'Bahçenizde sakin, korunaklı ve karakterli bir alan.', body: 'Modern ve klasik çizgilerde gazebo ve kamelyaları, alanın peyzajına uyumlu malzeme ve ölçülerle tasarlıyoruz.', start: 20 },
};

const key = document.body.dataset.product || location.pathname.split('/').filter(Boolean)[0] || 'pergola';
const p = data[key] || data.pergola;
const url = id => id.startsWith('/') ? id : `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=88`;
const fallbackGallery = p.asset ? [p.asset, ...IMG.slice(p.start + 1, p.start + 4)] : IMG.slice(p.start, p.start + 4);
const galleryPics = p.gallery || fallbackGallery;

document.title = `${p.title} | KRC Branda`;
document.getElementById('productTitle').innerHTML = p.title.replace(' Sistemleri', '<br><em>Sistemleri</em>');
document.getElementById('productLead').textContent = p.lead;
document.getElementById('productBody').textContent = p.body;
document.getElementById('heroImage').src = url(p.asset || galleryPics[0]);
document.getElementById('heroImage').alt = p.title;
document.getElementById('productGallery').innerHTML = galleryPics.map((id, index) => `
  <button class="gallery-item reveal" data-index="${index}" aria-label="${p.title} uygulaması ${index + 1} görselini büyüt">
    <img src="${url(id)}" alt="${p.title} uygulaması ${index + 1}" loading="lazy" decoding="async">
    <span>${p.title} / Uygulama ${String(index + 1).padStart(2, '0')}</span>
  </button>
`).join('');

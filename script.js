const topics = {
  mindset:{
    title:"Mindset & Prioritas",
    intro:"Dalam situasi sulit, keputusan yang tenang biasanya lebih aman daripada tindakan terburu-buru. Fokus pada keselamatan dan gunakan sumber daya secara bijak.",
    points:[
      ["Tetap tenang","Tarik napas, hentikan tindakan berisiko, lalu nilai situasi."],
      ["Nilai kondisi","Periksa diri dan anggota tim: cedera, kelelahan, kedinginan, atau dehidrasi."],
      ["Tentukan prioritas","Keselamatan → perlindungan → komunikasi → air → kebutuhan lain."],
      ["Hemat sumber daya","Gunakan makanan, air, baterai, dan perlengkapan secara terukur."],
      ["Jangan panik bergerak","Jika tersesat, berhenti dan buat keputusan berdasarkan kondisi."],
      ["Kerja tim","Tetapkan tugas dan tetap bersama kelompok bila lebih aman."]
    ],
    tipTitle:"P.A.N.I.C.",
    tip:"Pause, Assess, Navigate safely, Inform, Care. Ini adalah pengingat sederhana untuk memperlambat keputusan dan mengutamakan keselamatan."
  },
  water:{
    title:"Air & Hidrasi",
    intro:"Air sangat penting, tetapi sumber air di alam tidak otomatis aman diminum. Prioritaskan membawa air yang cukup dan perlakukan air alam sebagai sumber yang perlu dinilai.",
    points:[
      ["Prioritas","Bawa air minum sesuai durasi dan kondisi kegiatan."],
      ["Nilai sumber","Hindari air yang tampak tercemar, berbau aneh, atau berada dekat sumber limbah."],
      ["Pengolahan","Untuk air yang tidak terjamin, gunakan metode pemurnian yang diajarkan pembina/petugas terlatih dan sesuai alat."],
      ["Tanda dehidrasi","Waspadai haus berlebihan, lemas, pusing, dan penurunan kemampuan berpikir."],
      ["Hemat energi","Jangan menunggu sampai sangat haus sebelum mengelola kebutuhan minum."],
      ["Minta bantuan","Jika kondisi memburuk, segera komunikasikan kepada pembina atau penolong."]
    ],
    tipTitle:"Air tidak selalu aman",
    tip:"Air jernih pun dapat mengandung mikroorganisme. Dalam kegiatan Pramuka, rencanakan sumber air dan bawa perlengkapan pengolahan yang sesuai."
  },
  shelter:{
    title:"Perlindungan dari Lingkungan",
    intro:"Perlindungan berarti mengurangi paparan panas, hujan, angin, dan permukaan tanah yang tidak aman. Lokasi yang tepat sering lebih penting daripada bentuk tempat berlindung.",
    points:[
      ["Pilih lokasi aman","Jauhi tebing rawan longsor, aliran air, pohon mati, dan area yang berpotensi tergenang."],
      ["Lindungi dari cuaca","Gunakan perlengkapan resmi seperti rain cover, jas hujan, atau tenda sesuai petunjuk."],
      ["Tetap kering","Pakaian basah dapat meningkatkan risiko kedinginan, terutama saat angin."],
      ["Jaga ventilasi","Tempat tertutup tetap membutuhkan sirkulasi udara yang baik."],
      ["Periksa lingkungan","Kaji perubahan cuaca dan kondisi tanah secara berkala."],
      ["Jangan bereksperimen","Hindari struktur atau teknik yang belum dilatih bersama pembina."]
    ],
    tipTitle:"Lokasi adalah kunci",
    tip:"Tempat berlindung yang sederhana di lokasi aman lebih baik daripada struktur rumit di lokasi berbahaya."
  },
  navigation:{
    title:"Navigasi & Orientasi",
    intro:"Navigasi adalah kemampuan mengetahui posisi, arah, tujuan, dan rute yang aman. Peta dan kompas tetap menjadi keterampilan dasar yang penting.",
    points:[
      ["Kenali peta","Pahami judul, legenda, skala, simbol, dan arah utara pada peta."],
      ["Arah mata angin","Kuasai utara, timur, selatan, barat beserta arah antara."],
      ["Kompas","Latih penggunaan kompas di tempat aman bersama pembina."],
      ["Landmark","Gunakan objek yang mudah dikenali sebagai referensi posisi."],
      ["Jaga orientasi","Bandingkan rute yang ditempuh dengan peta secara berkala."],
      ["Jika tersesat","Berhenti, jangan berpencar, dan gunakan komunikasi untuk meminta bantuan."]
    ],
    tipTitle:"Jangan hanya mengandalkan HP",
    tip:"Baterai bisa habis dan sinyal bisa hilang. Untuk kegiatan lapangan, pahami peta, kompas, dan rencana rute sebelum berangkat."
  },
  firstaid:{
    title:"Pertolongan Awal",
    intro:"Pertolongan awal bertujuan menjaga keselamatan sambil menunggu bantuan yang tepat. Jangan melakukan tindakan yang belum pernah dilatih.",
    points:[
      ["Pastikan lokasi aman","Penolong tidak boleh menjadi korban berikutnya."],
      ["Nilai respons","Panggil korban dengan tenang dan periksa apakah ia merespons."],
      ["Cari bantuan","Beritahu pembina/orang dewasa dan layanan darurat bila diperlukan."],
      ["Cedera ringan","Lindungi area cedera dan ikuti prosedur P3K yang sudah diajarkan."],
      ["Jangan memaksa","Jangan menggerakkan bagian tubuh yang dicurigai cedera berat tanpa alasan keselamatan."],
      ["Catat informasi","Sampaikan apa yang terjadi, kondisi korban, dan tindakan yang sudah dilakukan."]
    ],
    tipTitle:"Keselamatan penolong",
    tip:"Gunakan prinsip cek lokasi → cek respons → minta bantuan → lakukan pertolongan sesuai kompetensi."
  },
  signal:{
    title:"Sinyal & Komunikasi",
    intro:"Tujuan sinyal adalah membuat keberadaan kelompok lebih mudah diketahui. Komunikasi yang jelas juga membantu penolong memahami kondisi.",
    points:[
      ["Komunikasi suara","Gunakan panggilan yang disepakati saat kegiatan dan hindari berteriak tanpa tujuan."],
      ["Peluit","Gunakan sesuai protokol kegiatan untuk menarik perhatian."],
      ["Sinyal visual","Gunakan benda atau tanda yang aman dan mudah terlihat sesuai arahan pembina."],
      ["Lokasi","Jika memiliki perangkat komunikasi, sampaikan posisi sejelas mungkin."],
      ["Hemat baterai","Gunakan ponsel seperlunya bila baterai terbatas."],
      ["Jangan berpencar","Kelompok yang tetap terkoordinasi biasanya lebih mudah ditemukan."]
    ],
    tipTitle:"Sinyal harus jelas",
    tip:"Sebelum kegiatan, sepakati kode komunikasi dan titik kumpul. Dalam keadaan darurat, ikuti prosedur pembina dan layanan setempat."
  },
  weather:{
    title:"Cuaca & Risiko",
    intro:"Cuaca dapat berubah cepat. Mengenali tanda bahaya dan mengambil keputusan lebih awal membantu mencegah keadaan menjadi darurat.",
    points:[
      ["Pantau prakiraan","Periksa informasi cuaca resmi sebelum kegiatan."],
      ["Petir","Saat badai petir, segera ikuti arahan pembina untuk menuju lokasi perlindungan yang aman."],
      ["Hujan lebat","Waspadai banjir, arus deras, tanah licin, dan longsor."],
      ["Panas","Kelola aktivitas, istirahat, hidrasi, dan perlindungan dari panas."],
      ["Angin kencang","Jauhi pohon mati, struktur rapuh, dan area terbuka yang tidak aman."],
      ["Batalkan bila perlu","Kegiatan bukan lebih penting daripada keselamatan."]
    ],
    tipTitle:"Kenali kapan harus berhenti",
    tip:"Keputusan membatalkan atau mengubah rute adalah bagian dari keterampilan survival, bukan kegagalan."
  },
  ethics:{
    title:"Etika Alam",
    intro:"Keterampilan survival Pramuka harus berjalan bersama tanggung jawab lingkungan. Tujuannya bukan menaklukkan alam, tetapi beraktivitas tanpa merusaknya.",
    points:[
      ["Rencanakan","Bawa perlengkapan yang tepat agar tidak perlu mengambil bahan alam secara berlebihan."],
      ["Bawa kembali sampah","Jangan meninggalkan plastik, kemasan, baterai, atau limbah."],
      ["Hormati satwa","Jangan mengejar, memberi makan, menyentuh, atau mengganggu satwa liar."],
      ["Jaga tumbuhan","Hindari merusak tanaman, terutama spesies yang tidak diketahui."],
      ["Gunakan jalur","Ikuti jalur resmi dan aturan kawasan."],
      ["Belajar Leave No Trace","Minimalkan jejak kegiatan dan pulihkan kondisi lokasi."]
    ],
    tipTitle:"Tinggalkan alam tetap indah",
    tip:"Prinsip sederhana: ambil foto, bukan kenangan berupa benda alam; bawa pulang apa yang kamu bawa masuk."
  }
};

const equipment = [
  ["💧","Air minum"],["🧭","Kompas"],["🗺️","Peta area"],["🔦","Senter + baterai cadangan"],
  ["📱","Ponsel / alat komunikasi"],["🩹","Kotak P3K"],["🧥","Jas hujan / pelindung cuaca"],["🧢","Pelindung kepala"],
  ["🥾","Alas kaki sesuai medan"],["🔋","Power bank"],["📣","Peluit"],["📝","Catatan & kontak darurat"]
];

const questions = [
  {q:"Apa tindakan paling tepat ketika menyadari kelompok mulai tersesat?",a:["Terus berjalan cepat agar segera keluar","Berpencar untuk mencari jalan","Berhenti, tetap terkoordinasi, dan menilai situasi","Membuang perlengkapan agar lebih ringan"],c:2,e:"Berhenti dan menilai situasi mengurangi risiko tersesat semakin jauh."},
  {q:"Manakah yang menjadi prioritas awal dalam situasi survival?",a:["Mencari hiburan","Keselamatan dan penilaian kondisi","Mengambil foto","Mencari makanan terlebih dahulu"],c:1,e:"Keselamatan dan penilaian kondisi harus didahulukan."},
  {q:"Mengapa air dari alam tidak boleh langsung dianggap aman diminum?",a:["Karena semua air alam pasti beracun","Karena dapat mengandung kontaminan atau mikroorganisme","Karena air alam selalu terlalu dingin","Karena air jernih tidak boleh diminum"],c:1,e:"Kejernihan air tidak menjamin bebas kontaminasi."},
  {q:"Apa fungsi utama peta dalam navigasi?",a:["Menentukan merek kompas","Membantu memahami posisi, arah, dan rute","Menggantikan semua keterampilan lapangan","Menentukan cuaca secara pasti"],c:1,e:"Peta membantu memahami hubungan posisi, arah, dan rute."},
  {q:"Apa prinsip penting ketika memberi pertolongan awal?",a:["Penolong harus memastikan lokasi aman","Korban harus langsung dipindahkan","Semua cedera harus dipijat","Tindakan boleh dilakukan tanpa pelatihan"],c:0,e:"Keselamatan penolong adalah prioritas."},
  {q:"Apa tujuan sinyal dalam keadaan darurat?",a:["Menghibur kelompok","Membuat keberadaan lebih mudah diketahui","Menghabiskan baterai","Menguji suara"],c:1,e:"Sinyal membantu penolong menemukan atau mengenali keberadaan kelompok."},
  {q:"Apa yang sebaiknya dilakukan ketika prakiraan menunjukkan cuaca berbahaya?",a:["Tetap berangkat agar lebih menantang","Mengabaikan prakiraan","Menyesuaikan atau menunda kegiatan sesuai arahan","Berpencar"],c:2,e:"Mengubah rencana demi keselamatan adalah keputusan yang tepat."},
  {q:"Mana yang paling sesuai dengan etika Leave No Trace?",a:["Meninggalkan sampah organik di mana saja","Mengambil tanaman sebagai oleh-oleh","Membawa kembali sampah dan meminimalkan dampak","Mengejar satwa untuk dokumentasi"],c:2,e:"Tujuannya meminimalkan jejak kegiatan."},
  {q:"Mengapa perlengkapan komunikasi perlu disiapkan sebelum kegiatan?",a:["Agar bisa bermain","Untuk membantu koordinasi dan meminta bantuan","Supaya tas lebih berat","Agar tidak perlu pembina"],c:1,e:"Komunikasi membantu koordinasi dan respons keadaan darurat."},
  {q:"Manakah lokasi yang sebaiknya dihindari untuk tempat berlindung?",a:["Lokasi stabil dan aman","Area yang rawan longsor atau tergenang","Lokasi yang sesuai arahan pembina","Tempat yang terlindung dari cuaca"],c:1,e:"Area rawan longsor atau genangan meningkatkan risiko."},
  {q:"Apa manfaat membawa peta dan kompas meskipun memiliki ponsel?",a:["Ponsel selalu lebih buruk","Perangkat elektronik dapat memiliki keterbatasan baterai atau sinyal","Peta tidak perlu dipelajari","Kompas hanya hiasan"],c:1,e:"Perangkat elektronik dapat gagal atau terbatas di lapangan."},
  {q:"Saat anggota tim mengalami masalah, tindakan yang tepat adalah…",a:["Menyembunyikannya","Melapor kepada pembina/tim dan mencari bantuan","Meninggalkan anggota","Menyalahkan korban"],c:1,e:"Komunikasi cepat membantu tim mengambil keputusan aman."},
  {q:"Apa yang sebaiknya dilakukan terhadap satwa liar?",a:["Didekati untuk foto","Diberi makan","Dihormati dari jarak aman","Ditangkap"],c:2,e:"Satwa liar perlu dihormati dan tidak diganggu."},
  {q:"Survival yang baik terutama menekankan…",a:["Keberanian mengambil risiko","Keputusan aman dan terencana","Melakukan tantangan berbahaya","Mengabaikan aturan"],c:1,e:"Survival adalah kemampuan membuat keputusan aman dengan sumber daya yang tersedia."},
  {q:"Mengapa latihan survival sebaiknya dilakukan bersama pembina?",a:["Agar ada pengawasan dan prosedur yang benar","Supaya boleh melakukan apa saja","Karena tidak perlu belajar teori","Agar lebih berbahaya"],c:0,e:"Latihan terarah membantu mengurangi risiko dan memperbaiki teknik."}
];

const lessonTitle = document.getElementById("lessonTitle");
const lessonIntro = document.getElementById("lessonIntro");
const lessonPoints = document.getElementById("lessonPoints");
const lessonTipTitle = document.getElementById("lessonTipTitle");
const lessonTip = document.getElementById("lessonTip");

function showTopic(key){
  const t = topics[key];
  lessonTitle.textContent=t.title; lessonIntro.textContent=t.intro;
  lessonPoints.innerHTML=t.points.map(p=>`<div class="point"><b>${p[0]}</b>${p[1]}</div>`).join("");
  lessonTipTitle.textContent=t.tipTitle; lessonTip.textContent=t.tip;
  document.querySelectorAll(".topic-card").forEach(c=>c.classList.toggle("active",c.dataset.topic===key));
}
document.querySelectorAll(".topic-card").forEach(card=>card.addEventListener("click",()=>showTopic(card.dataset.topic)));
showTopic("mindset");

document.getElementById("randomBtn").addEventListener("click",()=>{
  const keys=Object.keys(topics), key=keys[Math.floor(Math.random()*keys.length)];
  showTopic(key);
  document.getElementById("materi").scrollIntoView({behavior:"smooth"});
});

const checkGrid=document.getElementById("checkGrid");
const saved=JSON.parse(localStorage.getItem("survivalChecklist")||"[]");
checkGrid.innerHTML=equipment.map((item,i)=>`<label class="check-item ${saved.includes(i)?"done":""}"><input type="checkbox" data-i="${i}" ${saved.includes(i)?"checked":""}><span>${item[0]} &nbsp;${item[1]}</span></label>`).join("");
function updateChecklist(){
  const selected=[...document.querySelectorAll(".check-item input:checked")].map(x=>+x.dataset.i);
  localStorage.setItem("survivalChecklist",JSON.stringify(selected));
  document.querySelectorAll(".check-item").forEach(x=>x.classList.toggle("done",x.querySelector("input").checked));
  document.getElementById("checkCount").textContent=`${selected.length} / ${equipment.length} dipahami`;
}
checkGrid.addEventListener("change",updateChecklist); updateChecklist();
document.getElementById("resetChecklist").addEventListener("click",()=>{
  document.querySelectorAll(".check-item input").forEach(x=>x.checked=false);updateChecklist();
});

let current=0,score=0,answered=false;
const qText=document.getElementById("questionText"), answers=document.getElementById("answers"), nextBtn=document.getElementById("nextBtn"), feedback=document.getElementById("feedback");
document.getElementById("totalQuestions").textContent=questions.length;
function renderQuestion(){
  const q=questions[current]; answered=false; nextBtn.disabled=true; feedback.textContent=""; feedback.className="feedback";
  document.getElementById("questionNo").textContent=`PERTANYAAN ${String(current+1).padStart(2,"0")}`;
  document.getElementById("quizProgress").style.width=`${(current/questions.length)*100}%`;
  qText.textContent=q.q;
  answers.innerHTML=q.a.map((a,i)=>`<button class="answer" data-i="${i}">${String.fromCharCode(65+i)}. ${a}</button>`).join("");
  answers.querySelectorAll(".answer").forEach(btn=>btn.addEventListener("click",()=>selectAnswer(+btn.dataset.i)));
}
function selectAnswer(i){
  if(answered)return;
  answered=true; nextBtn.disabled=false;
  const q=questions[current], buttons=[...answers.children];
  buttons.forEach((b,idx)=>{if(idx===i)b.classList.add("selected");});
  if(i===q.c){score++;document.getElementById("score").textContent=score;feedback.textContent="✓ Benar! "+q.e;feedback.classList.add("ok");}
  else{buttons[i].classList.add("wrong");buttons[q.c].classList.add("correct");feedback.textContent="Belum tepat. "+q.e;feedback.classList.add("bad");}
}
nextBtn.addEventListener("click",()=>{
  if(!answered)return;
  if(current<questions.length-1){current++;renderQuestion();}
  else{
    document.getElementById("quizProgress").style.width="100%";
    qText.textContent=`Kuis selesai! Skormu ${score}/${questions.length}.`;
    answers.innerHTML=`<div class="point"><b>${score>=12?"LUAR BIASA!":score>=9?"BAGUS!":"TERUS BERLATIH!"}</b>${score>=12?"Pemahaman dasar survivalmu sangat baik. Tetap latih keterampilan bersama pembina.":"Pelajari kembali materi yang belum dikuasai, lalu coba lagi."}</div>`;
    nextBtn.disabled=true; nextBtn.textContent="Selesai";
  }
});
document.getElementById("restartQuiz").addEventListener("click",()=>{current=0;score=0;document.getElementById("score").textContent=0;nextBtn.textContent="Jawab & Lanjut →";renderQuestion();});
renderQuestion();

const themeBtn=document.getElementById("themeBtn");
if(localStorage.getItem("survivalTheme")==="light")document.body.classList.add("light");
function updateThemeIcon(){themeBtn.textContent=document.body.classList.contains("light")?"☾":"☼";}
updateThemeIcon();
themeBtn.addEventListener("click",()=>{document.body.classList.toggle("light");localStorage.setItem("survivalTheme",document.body.classList.contains("light")?"light":"dark");updateThemeIcon();});

const menuBtn=document.getElementById("menuBtn"), nav=document.getElementById("mainNav");
menuBtn.addEventListener("click",()=>nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

window.addEventListener("scroll",()=>{
  const max=document.documentElement.scrollHeight-window.innerHeight;
  document.getElementById("progressBar").style.width=`${max>0?(window.scrollY/max)*100:0}%`;
});
document.querySelectorAll(".topic-card,.lesson-panel,.check-item,.step,.quiz-card").forEach(el=>el.classList.add("reveal"));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")}),{threshold:.08});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

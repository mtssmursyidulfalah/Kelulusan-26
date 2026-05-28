const targetDate = new Date(
  "2025-01-01T10:00:00+07:00"
);

let angka1 = 0;
let angka2 = 0;

function generateCaptcha(){

  angka1 =
  Math.floor(Math.random()*10);

  angka2 =
  Math.floor(Math.random()*10);

  document.getElementById(
    "captchaText"
  ).innerHTML =

  `${angka1} + ${angka2} = ?`;
}

generateCaptcha();

function cekKelulusan(){

  const captcha =
  document.getElementById(
    "captchaInput"
  ).value;

  if(
    Number(captcha)
    !==
    angka1 + angka2
  ){

    alert("Captcha Salah");

    generateCaptcha();

    return;
  }

  const nisn =
  document.getElementById(
    "nisn"
  ).value.trim();

  const tanggal =
  document.getElementById(
    "tanggal"
  ).value.trim();

  const data = siswa.find(
    s =>
    s.nisn === nisn &&
    s.tanggal === tanggal
  );

  if(!data){

    alert(
      "Data siswa tidak ditemukan"
    );

    return;
  }

  const now = new Date();

if(now < targetDate){

    document.body.innerHTML = `

    <div class="glow"></div>
    <div class="glow"></div>

    <div class="card">

      <img
        src="assets/logo.png"
        class="logo"
      >

      <h1>
        PENGUMUMAN BELUM DIBUKA
      </h1>

      <div id="countdown"></div>

      <div class="info">
        Pengumuman akan dibuka pada<br>
        02 Juni 2026 Jam 10.00 WIB
      </div>

    </div>

    `;

    function updateCountdown(){

      const now2 = new Date();

      const diff =
      targetDate - now2;

      const days =
      Math.floor(diff/(1000*60*60*24));

      const hours =
      Math.floor((diff/(1000*60*60))%24);

      const minutes =
      Math.floor((diff/(1000*60))%60);

      const seconds =
      Math.floor((diff/1000)%60);

      document.getElementById(
        "countdown"
      ).innerHTML =

      `${days} Hari<br>
       ${hours} Jam
       ${minutes} Menit
       ${seconds} Detik`;
    }

    setInterval(updateCountdown,1000);

    updateCountdown();

    return;
  }

document.body.innerHTML = `

<div class="glow"></div>
<div class="glow"></div>

<div
class="hasil-container">

<div
class="hasil-container">

<div class="hasil-asli">

  <img
  src="assets/${data.nisn}.jpg"

  onerror="
  this.onerror=null;
  this.src='assets/default.jpg';
  "

  class="foto-siswa"
  >

  <div class="nama-siswa">
    ${data.nama}
  </div>

  <div class="kelas-siswa">
    ${data.kelas}
  </div>

  <div class="card-info">

    <div class="nisn-title">
      NISN
    </div>

    <div class="nomor-nisn">
      ${data.nisn}
    </div>

    <div class="keterangan">

      Berdasarkan hasil rapat kepala
      madrasah, siswa tersebut
      dinyatakan :

    </div>

    <div
    class="
    status
    ${data.status === 'LULUS'
    ?
    'lulus'
    :
    'tidak-lulus'}
    ">

      ${data.status}

    </div>

    <div class="nilai-text">
      Dengan Nilai Rata-rata :
    </div>

    <div class="nilai-angka">
      ${data.nilai}
    </div>

  </div>

</div>

<div
id="kartuKelulusan"
class="kartu-download"

  <div class="header-kartu">

    <img
    src="assets/logo.png"
    class="logo-kartu">

    <div class="judul-kartu">

      <h1>
        BUKTI KELULUSAN
      </h1>

      <p>
        MTSS MURSYIDUL FALAH
      </p>

      <span>
        Tahun Pelajaran 2025/2026
      </span>

    </div>

  </div>

  <div class="isi-kartu">

    <div class="foto-area">

      <img

      src="assets/${data.nisn}.jpg"

      onerror="
      this.onerror=null;
      this.src='assets/default.jpg';
      "

      class="foto-siswa"

      >

    </div>

    <div class="data-area">

      <div class="baris">

        <span>Nama</span>

        <b>${data.nama}</b>

      </div>

      <div class="baris">

        <span>Kelas</span>

        <b>${data.kelas}</b>

      </div>

      <div class="baris">

        <span>NISN</span>

        <b>${data.nisn}</b>

      </div>

      <div class="baris">

        <span>Nilai</span>

        <b>${data.nilai}</b>

      </div>

      <div
      class="
      status
      ${data.status === 'LULUS'
      ?
      'lulus'
      :
      'tidak-lulus'}
      ">

        ${data.status}

      </div>

    </div>

  </div>

  <div class="pesan">

    Selamat atas kelulusan yang
    telah diraih.

    Teruslah belajar,
    berdoa dan menjadi pribadi
    yang membanggakan.

  </div>

  <div class="kepala-sekolah">

    Abdul Latip, S.Pd.I

  </div>

</div>

<button
id="downloadBtn"
class="download-btn">

DOWNLOAD KARTU JPG

</button>

</div>

`;
  setTimeout(() => {

  document
  .getElementById(
    "downloadBtn"
  )
  .addEventListener(
    "click",
    downloadKartu
  );

},300);
}


function downloadKartu(){

  const kartu =
  document.getElementById(
    "kartuKelulusan"
  );

  const gambar =
  kartu.querySelector("img");

  if(gambar){

    gambar.crossOrigin = "anonymous";

  }

  setTimeout(() => {

    html2canvas(kartu,{

      scale:2,

      useCORS:true,

      allowTaint:true,

      backgroundColor:null

    }).then(canvas => {

      const image =
      canvas.toDataURL(
        "image/png"
      );

      const link =
      document.createElement("a");

      link.href = image;

      link.download =
      "bukti-kelulusan.png";

      document.body.appendChild(
        link
      );

      link.click();

      document.body.removeChild(
        link
      );

    });

  },500);

}

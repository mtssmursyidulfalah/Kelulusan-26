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

<div class="card" id="kartuKelulusan">

  <img
    src="assets/${data.nisn}.jpg"
    <img
  src="assets/${data.nisn}.jpg"

  onerror="
  this.onerror=null;
  this.src='assets/default.jpg';
  "

  class="foto-siswa"
>

  <h1>
    ${data.nama}
  </h1>

  <div class="angkatan">
    ${data.kelas}
  </div>

  <div class="hasil-box">

    <p>
      <b>NISN:</b><br>
      ${data.nisn}
    </p>

    <p>
      <b>Status:</b><br>

      <span class="status-lulus">
        ${data.status}
      </span>

    </p>

    <p>
      <b>Nilai Rata-Rata:</b><br>
      ${data.nilai}
    </p>

  </div>

  <div class="pesan">

Selamat bagi seluruh siswa yang telah dinyatakan lulus. 
Terimakasih telah berjuang dan belajar dengan baik 
di MTsS Mursyidul Falah. Jaga nama baik almamater 
dan teruslah mengejar cita-cita dengan doa dan kerja keras

  </div>

  <div class="kepala sekolah">
    Abdul Latip, S.Pd.I
  </div>

  <button onclick="downloadKartu()">
    DOWNLOAD KARTU JPG
  </button>

  <div class="info-skl">

  Untuk Surat Kelulusan,
  silahkan tunggu info dari
  walikelas masing-masing.

</div>

<div id="downloadArea">

  <div class="download-card">

    <div class="top-download">

      <img
        src="assets/logo.png"
        class="logo-download"
      >

      <div class="header-download">

        <h2>
          YAYASAN PESANTREN ISLAM
          MURSYIDUL FALAH
        </h2>

        <h1>
          MTSS MURSYIDUL FALAH
        </h1>

        <p>
          Dusun Campea Desa Kampungsawah
          Kec. Jayakerta Karawang
        </p>

      </div>

    </div>

    <div class="line-blue"></div>

    <div class="judul-download">

      PENGUMUMAN KELULUSAN KELAS AKHIR
      <br>

      ANGKATAN KE 37
      TAHUN PELAJARAN 2025/2026

    </div>

    <div class="content-download">

      <img
        src="assets/${data.nisn}.jpg"
        <img
  src="assets/${data.nisn}.jpg"

  onerror="
  this.onerror=null;
  this.src='assets/default.jpg';
  "

  class="foto-download"
>

      <div class="bio-download">

        <table>

          <tr>
            <td>NISN</td>
            <td>:</td>
            <td>
              <b>${data.nisn}</b>
            </td>
          </tr>

          <tr>
            <td>Nama</td>
            <td>:</td>
            <td>
              <b>${data.nama}</b>
            </td>
          </tr>

          <tr>
            <td>Tanggal Lahir</td>
            <td>:</td>
            <td>
              <b>${data.tanggal}</b>
            </td>
          </tr>

        </table>

        <div class="text-kelulusan">

          Berdasarkan hasil rapat kepala
          madrasah bersama dewan guru,
          siswa tersebut dinyatakan :

        </div>

        <div class="status-download">
          LULUS
        </div>

        <div class="nilai-download">

          Dengan nilai Rata-rata :

          <div class="nilai-box">
            ${data.nilai}
          </div>

        </div>

      </div>

    </div>

  </div>

</div>
</div>

`;

confetti({
  particleCount:150,
  spread:100,
  origin:{ y:0.6 }
});

}
function downloadKartu(){

  const kartu =
  document.getElementById(
    "downloadArea"
  );

  html2canvas(kartu).then(canvas => {

    const link =
    document.createElement("a");

    link.download =
    "kartu-kelulusan.jpg";

    link.href =
    canvas.toDataURL("image/jpeg");

    link.click();

  });

}

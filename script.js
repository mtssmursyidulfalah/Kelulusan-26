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

<div class="card">

  <img
    src="assets/${data.nisn}.jpg"
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
      ${data.status}
    </p>

    <p>
      <b>Nilai Rata-Rata:</b><br>
      ${data.nilai}
    </p>

  </div>

  <div class="pesan">

    Selamat bagi seluruh siswa
    yang telah dinyatakan lulus.
    Terimakasih telah berjuang
    dan belajar dengan baik di
    MTsS Mursyidul Falah.

  </div>

  <div class="kepsek">
    Abdul Latip, S.Pd.I
  </div>

</div>

`;

}

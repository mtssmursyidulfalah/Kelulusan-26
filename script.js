const targetDate = new Date(
  "2026-06-02T10:00:00+07:00"
);

const loginBox =
document.getElementById("loginBox");

if(now < targetDate){

  const buka =
  targetDate.toLocaleString(
    "id-ID"
  );

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

let angka1 =
Math.floor(Math.random()*10);

let angka2 =
Math.floor(Math.random()*10);

document.getElementById(
  "captchaText"
).innerHTML =
`${angka1} + ${angka2} = ?`;

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

    return;
  }

  const now = new Date();

  if(now < targetDate){

    const buka =
    targetDate.toLocaleString(
      "id-ID"
    );

    alert(
      "Pengumuman belum dibuka"
    );

    return;
  }

  alert(
    "Login berhasil"
  );
}

const targetDate = new Date(
  "2026-06-02T10:00:00+07:00"
);

const countdown =
document.getElementById("countdown");

const loginBox =
document.getElementById("loginBox");

const infoText =
document.getElementById("infoText");

function updateCountdown(){

  const now = new Date();

  const diff = targetDate - now;

  if(diff <= 0){

    countdown.innerHTML =
      "Pengumuman Sudah Dibuka";

    return;
  }

  const days =
    Math.floor(diff/(1000*60*60*24));

  const hours =
    Math.floor((diff/(1000*60*60))%24);

  const minutes =
    Math.floor((diff/(1000*60))%60);

  const seconds =
    Math.floor((diff/1000)%60);

  countdown.innerHTML =
    `${days} Hari<br>
     ${hours} Jam
     ${minutes} Menit
     ${seconds} Detik`;
}

setInterval(updateCountdown,1000);

updateCountdown();

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

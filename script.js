const targetDate = new Date(
  "2026-06-02T10:00:00+07:00"
);

function updateCountdown(){

  const now = new Date();

  const diff = targetDate - now;

  const countdown =
    document.getElementById("countdown");

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

const SetTime = () => {
  const time = new Date();
  const html = document.getElementById("time");
  html.innerHTML = time.toLocaleTimeString();
};

// setInterval(SetTime, 1000)

let time = [0, 0];
let isCounting = 0;

const ChangeTime = () => {
  const html = document.getElementById("counterdown");
  const timeL = time[0] <= 9 ? `0${time[0]}` : `${time[0]}`;
  const timeR = time[1] <= 9 ? `0${time[1]}` : `${time[1]}`;
  if (time[1] <= 58) {
    time[1] = parseInt(time[1]) + 1;
    html.innerHTML = `${timeL}:${timeR}`;
  } else {
    time[0] = parseInt(time[0]) + 1;
    time[1] = 0;
    html.innerHTML = `${timeL}:${timeR}`;
  }
  console.log(time);
};

const StartCounter = () => {
  const btn = document.getElementById("btn");
  const loop = setInterval(ChangeTime, 500);
  if (isCounting === 0) {
    isCounting = 1;
    btn.innerHTML = "II";
  } else {
    btn.innerHTML = "Start";
    clearInterval(loop);
  }
};

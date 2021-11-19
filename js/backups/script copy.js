//read data.json
let data = [];

fetch("data.json")
  .then((res) => res.json())
  .then((info) => {
    data = info;
    console.log(data);
    setDaily();
  })
  .catch((err) => console.log(err));

const renderData = (props, id) => {
  const markup = `
    <div class="box">
    <div class="boxImg">
      <img src="./images/icon-self-care.svg" alt="" />
    </div>
    <div class="boxContent">
      <div class="boxTitle">
        <p id='title'></p>
        <span>...</span>
      </div>
      <h3 id="current">0hrs</h3>
      <span id="previous">Previous - 1hr</span>
    </div>
  </div>
  `;
};

const setDaily = async () => {
  resetColors();
  document.getElementById("dailyBtn").style.color = "#fff";
  for (let i = 0; i < data.length; i++) {
    let current = await document.getElementById(`current${i}`);
    current.innerHTML = data[i].timeframes.daily.current + "hr";
    let previous = await document.getElementById(`previous${i}`);
    previous.innerHTML = data[i].timeframes.daily.previous + "hr";
  }
};

const setWeekly = async () => {
  resetColors();
  document.getElementById("weeklyBtn").style.color = "#fff";
  for (let i = 0; i < data.length; i++) {
    let current = await document.getElementById(`current${i}`);
    current.innerHTML = data[i].timeframes.weekly.current + "hr";
    let previous = await document.getElementById(`previous${i}`);
    previous.innerHTML = data[i].timeframes.weekly.previous + "hr";
  }
};

const setMonthly = async () => {
  resetColors();

  document.getElementById("monthlyBtn").style.color = "#fff";
  for (let i = 0; i < data.length; i++) {
    let current = await document.getElementById(`current${i}`);
    current.innerHTML = data[i].timeframes.monthly.current + "hr";
    let previous = await document.getElementById(`previous${i}`);
    previous.innerHTML = data[i].timeframes.monthly.previous + "hr";
  }
};

const resetColors = async () => {
  document.getElementById("dailyBtn").style.color = "hsl(235, 45%, 61%)";
  document.getElementById("weeklyBtn").style.color = "hsl(235, 45%, 61%)";
  document.getElementById("monthlyBtn").style.color = "hsl(235, 45%, 61%)";
};

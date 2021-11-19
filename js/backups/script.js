let data = [];

const state = {
  data: [],
};

const getData = async () => {
  await fetch("data.json")
    .then((res) => res.json())
    .then((info) => {
      data = info;
      state.data = { ...data };
      renderData();
    })
    .catch((err) => console.log(err));
};
const reportCard = document.getElementById("reportCard");
const boxContainer = document.getElementById("boxContainer");

// render all the data
const renderData = () => {
  const reportCardMarkup = `
    <div class="user">
      <img src="./images/image-jeremy.png" alt="" />
    <div>
      <span>Report for</span>
      <h2>Jeremy Robson</h2>
    </div>
  </div>
  <div class="timeButtons">
    <p id="dailyBtn" onclick="setDaily()">Daily</p>
    <p id="weeklyBtn" onclick="setWeekly()">Weekly</p>
    <p id="monthlyBtn" onclick="setMonthly()">Monthly</p>
  </div>
  `;
  reportCard.insertAdjacentHTML("beforeend", reportCardMarkup);
  document.getElementById("dailyBtn").style.color = "#fff";
  data.map((item, i) => {
    const info = item;
    const title = info.title.toLowerCase().replace(/ /g, "-");
    const markup = `
    <div class="box">
    <div class="boxImg ${title}">
      <img src="./images/icon-${title}.svg" alt="" />
    </div>
    <div class="boxContent">
      <div class="boxTitle">
        <p>${info.title}</p>
        <span>...</span>
      </div>
      <h3 id="current${i}">${info.timeframes.weekly.current}hr</h3>
      <span id="previous${i}">Yesturday - ${info.timeframes.weekly.previous}</span>
    </div>
  </div>
  `;
    boxContainer.insertAdjacentHTML("beforeEnd", markup);
  });
};

//change the time to daily
const setDaily = async () => {
  resetColors();
  document.getElementById("dailyBtn").style.color = "#fff";
  for (let i = 0; i < data.length; i++) {
    let current = await document.getElementById(`current${i}`);
    current.innerHTML = data[i].timeframes.daily.current + "hr";
    let previous = await document.getElementById(`previous${i}`);
    previous.innerHTML =
      "Yesturday - " + data[i].timeframes.daily.previous + "hr";
  }
};

//change the time to weekly
const setWeekly = async () => {
  resetColors();
  document.getElementById("weeklyBtn").style.color = "#fff";
  for (let i = 0; i < data.length; i++) {
    let current = await document.getElementById(`current${i}`);
    current.innerHTML = data[i].timeframes.weekly.current + "hr";
    let previous = await document.getElementById(`previous${i}`);
    previous.innerHTML =
      "Last Week - " + data[i].timeframes.weekly.previous + "hr";
  }
};

//change the time to monthly
const setMonthly = async () => {
  resetColors();

  document.getElementById("monthlyBtn").style.color = "#fff";
  for (let i = 0; i < data.length; i++) {
    let current = await document.getElementById(`current${i}`);
    current.innerHTML = data[i].timeframes.monthly.current + "hr";
    let previous = await document.getElementById(`previous${i}`);
    previous.innerHTML =
      "Last Month - " + data[i].timeframes.monthly.previous + "hr";
  }
};

const resetColors = async () => {
  document.getElementById("dailyBtn").style.color = "hsl(235, 45%, 61%)";
  document.getElementById("weeklyBtn").style.color = "hsl(235, 45%, 61%)";
  document.getElementById("monthlyBtn").style.color = "hsl(235, 45%, 61%)";
};

window.addEventListener("load", async () => {
  await getData();
  console.log(state.data);
});

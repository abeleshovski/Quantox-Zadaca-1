export const elements = {
  reportCard: document.querySelector(".reportCard"),
  boxContainer: document.querySelector(".boxContainer"),
};

export const setDaily = async (data) => {
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
export const setWeekly = async (data) => {
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
export const setMonthly = async (data) => {
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

import { setTime } from "./views/base.js";
import Box from "./views/Box.js";
import ReportCard from "./views/ReportCard.js";

const handleInfo = (data) => {
  getRepordCard();
  getBoxData(data);
  document
    .getElementById("dailyBtn")
    .addEventListener("click", () => getDaily(data));
  document
    .getElementById("weeklyBtn")
    .addEventListener("click", () => getWeekly(data));
  document
    .getElementById("monthlyBtn")
    .addEventListener("click", () => getMonthly(data));
};

const getData = async () => {
  await fetch("data.json")
    .then((res) => res.json())
    .then(handleInfo)
    .catch((err) => console.log(err));
};

const getRepordCard = async () => {
  ReportCard();
  document.getElementById("dailyBtn").style.color = "#fff";
};

const getBoxData = async (data) => {
  data.forEach((item, id) => Box(item, id));
};

const getDaily = (data) => {
  setTime(data, "daily");
};

const getWeekly = (data) => {
  setTime(data, "weekly");
};

const getMonthly = (data) => {
  setTime(data, "monthly");
};

//on load event
window.addEventListener("load", async () => {
  await getData();
});

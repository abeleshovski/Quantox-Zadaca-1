import { elements, addToElements } from "./base.js";

const ReportCard = () => {
  const markup = `<div class="user">
    <img src="./images/image-jeremy.png" alt="" />
  <div>
    <span>Report for</span>
    <h2>Jeremy Robson</h2>
  </div>
</div>
<div class="timeButtons">
  <button id="dailyBtn" >Daily</button>
  <button id="weeklyBtn">Weekly</button>
  <button id="monthlyBtn">Monthly</button>
</div>
`;

  elements.reportCard.insertAdjacentHTML("beforeend", markup);
  const dates = {
    daily: {
      btn: document.querySelector("#dailyBtn"),
      prev: "Yesterday",
    },
    weekly: {
      btn: document.querySelector("#weeklyBtn"),
      prev: "Last Week",
    },
    monthly: {
      btn: document.querySelector("#monthlyBtn"),
      prev: "Last Month",
    },
  };
  addToElements(dates);
};

export default ReportCard;

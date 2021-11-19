import { elements } from "./base.js";

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
};

export default ReportCard;

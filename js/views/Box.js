import { elements } from "./base.js";

const Box = (item, id) => {
  const title = item.title.toLowerCase().replace(/ /g, "-");
  const markup = `
    <div class="box">
    <div class="boxImg ${title}">
      <img src="./images/icon-${title}.svg" alt="" />
    </div>
    <div class="boxContent">
      <div class="boxTitle">
        <p>${item.title}</p>
        <span>...</span>
      </div>
      <h3 id="current${id}">${item.timeframes.daily.current}hr</h3>
      <span id="previous${id}">Yesturday - ${item.timeframes.daily.previous}</span>
    </div>
  </div>
  `;
  elements.boxContainer.insertAdjacentHTML("beforeEnd", markup);
};

export default Box;

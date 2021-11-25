export let elements = {
  reportCard: document.querySelector(".reportCard"),
  boxContainer: document.querySelector(".boxContainer"),
};

export const addToElements = (el) => {
  elements = { ...elements, ...el };
};

const resetColors = async () => {
  elements.daily.btn.style.color = "hsl(235, 45%, 61%)";
  elements.monthly.btn.style.color = "hsl(235, 45%, 61%)";
  elements.weekly.btn.style.color = "hsl(235, 45%, 61%)";
};

export const setTime = async (data, typeOfTime) => {
  resetColors();
  elements[typeOfTime].btn.style.color = "#fff";

  data.forEach((item, i) => {
    console.log(item);
    let current = document.getElementById(`current${i}`);
    current.innerHTML = item.timeframes[typeOfTime].current + "hr";
    let previous = document.getElementById(`previous${i}`);
    previous.innerHTML = `${elements[typeOfTime].prev}: ${item.timeframes[typeOfTime].previous}hrs`;
  });
};

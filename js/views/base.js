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

  for (let i = 0; i < data.length; i++) {
    let current = await document.getElementById(`current${i}`);
    current.innerHTML = data[i].timeframes[typeOfTime].current + "hr";
    let previous = await document.getElementById(`previous${i}`);
    previous.innerHTML = `${elements[typeOfTime].prev}: ${data[i].timeframes[typeOfTime].previous}hrs`;
  }
};

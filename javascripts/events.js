"use strict";

const printToDom = require("./dom");
const data = require("./data");

const buttonsDiv = document.getElementById("filters");

const filterEvent = () => {
  buttonsDiv.addEventListener("click", (event) => {
    let itemToFilterOn = event.target.id;
    const gifArray = data.getGifs();
    const filteredArray = filterArray(itemToFilterOn, gifArray);
    printToDom(filteredArray);
  });
};

const filterArray = (filterOn, originalArray) => {
  const finalArray = [];
  originalArray.forEach((item) => {
    if (item.categoryDataName === filterOn) {
      finalArray.push(item);
    }
  });
  return finalArray;
};

const activateEvents = { filterEvent };

module.exports = activateEvents;
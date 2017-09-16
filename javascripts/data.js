"use strict";
const printToDom = require("./dom");
const loadGifs = require("./gifs");
const loadCategories = require("./categories");

let gifArray = [];

const errorFunction = () => {
  console.log("You broke me");
};

//When gifs load
const whenGifsLoad = function () {
  gifArray = JSON.parse(this.responseText).gifs;
  loadCategories(whenCategoriesLoad, errorFunction);
};

const whenCategoriesLoad = function () {
  let categoryArray = JSON.parse(this.responseText).categories;
  //TO DO: combines arrays
  combineArrays(categoryArray);
};

const combineArrays = (categories) => {
  categories.forEach((category) => {
    gifArray.forEach((gif) => {
      if (gif.category === category.id) {
        gif.categoryName = category.name;
        gif.categoryDataName = category.dataName;
      }
    });
  });
  printToDom(gifArray);
};

//set up "initializer" -load gifs
const initializer = () => {
  loadGifs(whenGifsLoad, errorFunction);
};

const getGifs = () => {
  return gifArray;
};

module.exports = { initializer, getGifs };
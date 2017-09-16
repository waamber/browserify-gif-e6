"use strict";

const loadCategories = (onCategoryLoad, onCategorError) => {
  const categoryLoader = new XMLHttpRequest();
  categoryLoader.addEventListener("error", onCategorError);
  categoryLoader.addEventListener("load", onCategoryLoad);
  categoryLoader.open("GET", "../data/categories.json");
  categoryLoader.send();
};

module.exports = loadCategories;
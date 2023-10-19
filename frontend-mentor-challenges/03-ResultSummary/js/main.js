const categoriesDIV = document.querySelector("#categories");
const categoriesColors = [
  "category--red",
  "category--yellow",
  "category--green",
  "category--blue",
];

const getData = async () => {
  try {
    const response = await fetch("./data.json");
    const data = await response.json();
    let i = 0;
    categoriesDIV.innerHTML = data
      .map((category) => {
        return `
            <div class="category ${categoriesColors[i++]}">

          <div class="category__left">
            <img src="${category.icon}" alt="${category.category}" class="category__icon" class="category__icon">
            <p class="category__title">${category.category}</p>
          </div>

          <p class="category__score">${category.score} <span class="category__score--100">/ 100</span></p>

        </div>`;
      })
      .join("");
  } catch (error) {
    console.error(error);
    throw error;
  }
};

getData();

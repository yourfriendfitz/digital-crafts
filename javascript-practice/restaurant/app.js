const log = console.log;

const dishesElement = document.getElementById("dishes");

const courseButtonsContainer = document.getElementById(
  "courseButtonsContainer"
);

const showMenuButton = document.getElementById("showMenu");

const [startersButton, entreesButton, dessertsButton] = [
  document.getElementById("startersButton"),
  document.getElementById("entreesButton"),
  document.getElementById("dessertsButton")
];

const [starters, entrees, desserts] = [
  document.getElementsByClassName("starters"),
  document.getElementsByClassName("entrees"),
  document.getElementsByClassName("desserts")
];

const startersArray = [];
const entreesArray = [];
const dessertsArray = [];

const updateArrays = (startersArray, entreesArray, dessertsArray) => {
  for (i = 0; i < starters.length; i++) {
    startersArray.push(starters[i]);
  }
  for (i = 0; i < entrees.length; i++) {
    entreesArray.push(entrees[i]);
  }
  for (i = 0; i < desserts.length; i++) {
    dessertsArray.push(desserts[i]);
  }
};

const createDishElement = dish => {
  return `<div class="dish ${dish.course.toLowerCase()}">
    <img src="${dish.imageURL}" alt="${dish.title}">
    <h4 class="dishTitle">${dish.title}</h4>
    <p class="dishDesc">${dish.description}</p>
    <p class="dishPrice">$${dish.price}.00</p>
    </div>`;
};

const populateDishes = () => {
  dishesElement.innerHTML = "";
  courseButtonsContainer.style.display = "block";
  dishes.map(dish => {
    const dishElement = createDishElement(dish);
    dishesElement.insertAdjacentHTML("beforeend", dishElement);
  });
  updateArrays(startersArray, entreesArray, dessertsArray);
};

const hideCourse = courseArray => {
  courseArray.forEach(course => {
    course.style.display = "none";
  });
};

const showCourse = courseArray => {
  courseArray.forEach(course => {
    course.style.display = "flex";
  });
};

showMenuButton.addEventListener("click", () => {
  populateDishes();
});

startersButton.addEventListener("click", () => {
  showCourse(startersArray);
  hideCourse(entreesArray);
  hideCourse(dessertsArray);
});

entreesButton.addEventListener("click", () => {
  showCourse(entreesArray);
  hideCourse(startersArray);
  hideCourse(dessertsArray);
});

dessertsButton.addEventListener("click", () => {
  showCourse(dessertsArray);
  hideCourse(entreesArray);
  hideCourse(startersArray);
});

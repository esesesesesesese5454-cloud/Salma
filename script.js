const offers = [
  {
    img: "slider1.jpg",
    title: "Vegetarian Pasta",
    desc: "Delicious pasta with fresh vegetables",
    price: "$18.00"
  },
  {
    img: "slider2.jpg",
    title: "Pizza Margherita",
    desc: "Classic Italian pizza",
    price: "$15.00"
  },
  {
    img: "slider3.jpg",
    title: "Cheese Burger",
    desc: "Juicy burger with cheese",
    price: "$12.00"
  }
];

let index = 0;

function showSlide() {
  document.getElementById("offer-img").src = offers[index].img;
  document.getElementById("offer-title").textContent = offers[index].title;
  document.getElementById("offer-desc").textContent = offers[index].desc;
  document.getElementById("offer-price").textContent = offers[index].price;
}

function nextSlide() {
  index++;
  if (index >= offers.length) {
    index = 0;
  }
  showSlide();
}

function prevSlide() {
  index--;
  if (index < 0) {
    index = offers.length - 1;
  }
  showSlide();
}

const menuItems = [
  {
    name: "LASAL CHEESE",
    price: "$18.00",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img: "gallary3.jpg"
  },
  {
    name: "KOFTA MEAT",
    price: "$40.00",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img: "gallary4.jpg"
  },
  {
    name: "JUMBO CRAB SHRIMP",
    price: "$24.00",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img: "gallary5.jpg"
  },
  {
    name: "SPANISH PIES",
    price: "$14.00",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img: "gallary6.jpg"
  },
  {
    name: "KOKTAIL JUICE",
    price: "$12.00",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img: "menu5.jpg"
  },
  {
    name: "CHEESE TOST",
    price: "$6.00",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img: "menu6.jpg"
  },
  {
    name: "CAPO STEAK",
    price: "$60.00",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img: "menu7.jpg"
  },
  {
    name: "FRUIT SALAD",
    price: "$14.00",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img: "menu8.jpg"
  },
  {
    name: "ORGANIC FRUIT SALAD",
    price: "$8.00",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img: "./Project 3/menu9.jpg"
  },
  {
    name: "CHICKEN SHAWARMA",
    price: "$20.00",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img: "menu10.jpg"
  },
  {
    name: "CHEESE PIZZA",
    price: "$18.00",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img: "menu11.jpg"
  },
  {
    name: "MEGA CHEESE PIZZA",
    price: "$30.00",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img: "menu12.jpg"
  }
];

const container = document.getElementById("menuContainer");

menuItems.forEach(item => {
  container.innerHTML += `
    <div class="menu-item">
      <img src="${item.img}" alt="${item.name}">
      <div class="menu-info">
        <h4>
          <span>${item.name}</span>
          <span>${item.price}</span>
        </h4>
        <p>${item.desc}</p>
      </div>
    </div>
  `;
});



let images = [
"gallary1.jpg" ,
"gallary2.jpg" ,
 "menu11.jpg" ,
  "menu5.jpg" ,
  "menu8.jpg" ,
  "menu7.jpg", 
];

let currentIndex = 0;
let slider = document.getElementById("slider");
let sliderImg = document.getElementById("slider-img");

function openSlider(index){
  currentIndex = index;
  slider.style.display = "flex";
  sliderImg.src = images[currentIndex];
}

function closeSlider(){
  slider.style.display = "none";
}

function changeSlide(step){
  currentIndex += step;

  if(currentIndex < 0){
    currentIndex = images.length - 1;
  }
  if(currentIndex >= images.length){
    currentIndex = 0;
  }

  sliderImg.src = images[currentIndex];
}










const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let valid = true;

  // Name validation
  if (nameInput.value.length < 3 || nameInput.value.length > 15) {
    nameError.textContent = "Name must be 3-15 characters.";
    valid = false;
  } else {
    nameError.textContent = "";
  }

  // Email validation
  if (emailInput.value === "") {
    emailError.textContent = "Please enter your email.";
    valid = false;
  } else {
    emailError.textContent = "";
  }

  if (valid) {
    alert("Form submitted successfully ✅");
    form.reset();
  }
});

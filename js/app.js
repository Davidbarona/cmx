import data from "./data.json" assert { type: "json" };

const sucursalContainerCard = document.querySelector(".sucursal__container--card");
const sucursalContainerMobile = document.querySelector(".sucursal__container--card--mobile");
const mapLocation = document.querySelectorAll(".location__vector");
const sucursales = data.sucursals;

const createCard = (sucursal) => {
  const locationCard = document.createElement("div");
  locationCard.classList.add("sucursal__card--active");
  locationCard.innerHTML = `
        <img
        class="sucursal__card--image"
        src="${sucursal.imagePath}"
      alt="${sucursal.name}"
      />
      <h3 class="sucursal__card--title">${sucursal.name}</h3>
      <p class="sucursal__card--text">${sucursal.address}</p>
      
      `;

  return locationCard;
};

sucursales.forEach((sucursal) => {
  sucursalContainerMobile.appendChild(createCard(sucursal));
  sucursalContainerMobile.classList.add("sucursal__container--card--mobile");
});

const showSucursals = (index) => {
  if (index === 0) {
    sucursalContainerCard.appendChild(createCard(sucursales[0]));
  } else if (index === 1) {
    sucursalContainerCard.appendChild(createCard(sucursales[1]));
    sucursalContainerCard.appendChild(createCard(sucursales[2]));
    sucursalContainerCard.appendChild(createCard(sucursales[3]));
  } else if (index === 2) {
    sucursalContainerCard.appendChild(createCard(sucursales[4]));
  } else if (index === 3) {
    sucursalContainerCard.appendChild(createCard(sucursales[5]));
  } else if (index === 4) {
    sucursalContainerCard.appendChild(createCard(sucursales[6]));
  } else if (index === 5) {
    sucursalContainerCard.appendChild(createCard(sucursales[7]));
    sucursalContainerCard.appendChild(createCard(sucursales[8]));
    sucursalContainerCard.appendChild(createCard(sucursales[9]));
  }
};

const removeCard = () => {
  const sucursalCard = document.querySelectorAll(".sucursal__card--active");
  sucursalCard.forEach((card) => {
    card.remove();
  });
};

mapLocation.forEach((location, index) => {
  location.addEventListener("mouseover", () => {
    removeCard();
    showSucursals(index);
  });

  location.addEventListener("mouseout", () => {
    removeCard();  
  });
});

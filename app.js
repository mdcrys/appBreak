
document.addEventListener("DOMContentLoaded", function() {
    const menuList = document.getElementById("menu-list");
    const imageGallery = document.querySelector(".image-gallery");
  
    // Tu lista de categorías con fotos, títulos, precios e ingredientes relacionados
    const categories = [
        {
          name: "Categoría 1",
          images: ["imagenes/1.jpeg", "imagenes/11.jpeg", "imagenes/12.jpeg"],
          titles: ["¨Hamburguesas", "Plato 2", "Plato 3"],
          prices: [0, 15, 12],
          ingredients: [
            ["Ingrediente 1.1", "Ingrediente 1.2"],
            ["Ingrediente 2.1", "Ingrediente 2.2"],
            ["Ingrediente 3.1", "Ingrediente 3.2"]
          ]
        },
        {
          name: "Categoría 2",
          images: ["imagenes/13.jpeg", "imagenes/14.jpeg", "imagenes/5.jpeg"],
          titles: ["Plato A", "Plato B", "Plato C"],
          prices: [18, 20, 22],
          ingredients: [
            ["Ingrediente A.1", "Ingrediente A.2"],
            ["Ingrediente B.1", "Ingrediente B.2"],
            ["Ingrediente C.1", "Ingrediente C.2"]
          ]
        },
        {
          name: "Categoría 2",
          images: ["imagenes/13.jpeg", "imagenes/14.jpeg", "imagenes/5.jpeg"],
          titles: ["Plato A", "Plato B", "Plato C"],
          prices: [18, 20, 22],
          ingredients: [
            ["Ingrediente A.1", "Ingrediente A.2"],
            ["Ingrediente B.1", "Ingrediente B.2"],
            ["Ingrediente C.1", "Ingrediente C.2"]
          ]
        },
        {
          name: "Categoría 2",
          images: ["imagenes/13.jpeg", "imagenes/14.jpeg", "imagenes/5.jpeg"],
          titles: ["Plato A", "Plato B", "Plato C"],
          prices: [18, 20, 22],
          ingredients: [
            ["Ingrediente A.1", "Ingrediente A.2"],
            ["Ingrediente B.1", "Ingrediente B.2"],
            ["Ingrediente C.1", "Ingrediente C.2"]
          ]
        },
        {
          name: "Categoría 2",
          images: ["imagenes/13.jpeg", "imagenes/14.jpeg", "imagenes/5.jpeg"],
          titles: ["Plato A", "Plato B", "Plato C"],
          prices: [18, 20, 22],
          ingredients: [
            ["Ingrediente A.1", "Ingrediente A.2"],
            ["Ingrediente B.1", "Ingrediente B.2"],
            ["Ingrediente C.1", "Ingrediente C.2"]
          ]
        },
        {
          name: "Categoría 2",
          images: ["imagenes/13.jpeg", "imagenes/14.jpeg", "imagenes/5.jpeg"],
          titles: ["Plato A", "Plato B", "Plato C"],
          prices: [18, 20, 22],
          ingredients: [
            ["Ingrediente A.1", "Ingrediente A.2"],
            ["Ingrediente B.1", "Ingrediente B.2"],
            ["Ingrediente C.1", "Ingrediente C.2"]
          ]
        },
        {
          name: "Categoría 2",
          images: ["imagenes/13.jpeg", "imagenes/14.jpeg", "imagenes/5.jpeg"],
          titles: ["Plato A", "Plato B", "Plato C"],
          prices: [18, 20, 22],
          ingredients: [
            ["Ingrediente A.1", "Ingrediente A.2"],
            ["Ingrediente B.1", "Ingrediente B.2"],
            ["Ingrediente C.1", "Ingrediente C.2"]
          ]
        },
        {
          name: "Categoría 2",
          images: ["imagenes/13.jpeg", "imagenes/14.jpeg", "imagenes/5.jpeg"],
          titles: ["Plato A", "Plato B", "Plato C"],
          prices: [18, 20, 22],
          ingredients: [
            ["Ingrediente A.1", "Ingrediente A.2"],
            ["Ingrediente B.1", "Ingrediente B.2"],
            ["Ingrediente C.1", "Ingrediente C.2"]
          ]
        },
        {
          name: "Categoría 2",
          images: ["imagenes/13.jpeg", "imagenes/14.jpeg", "imagenes/5.jpeg"],
          titles: ["Plato A", "Plato B", "Plato C"],
          prices: [18, 20, 22],
          ingredients: [
            ["Ingrediente A.1", "Ingrediente A.2"],
            ["Ingrediente B.1", "Ingrediente B.2"],
            ["Ingrediente C.1", "Ingrediente C.2"]
          ]
        },
        {
          name: "Categoría 2",
          images: ["imagenes/13.jpeg", "imagenes/14.jpeg", "imagenes/5.jpeg"],
          titles: ["Plato A", "Plato B", "Plato C"],
          prices: [18, 20, 22],
          ingredients: [
            ["Ingrediente A.1", "Ingrediente A.2"],
            ["Ingrediente B.1", "Ingrediente B.2"],
            ["Ingrediente C.1", "Ingrediente C.2"]
          ]
        }
        // Agrega más categorías y datos aquí
      ];
    // Cargar las fotos e ingredientes de la primera categoría al inicio
    loadCategoryData(categories[0]);
  
    // Crear la galería de imágenes de categorías
    categories.forEach((category) => {
      const categoryImage = document.createElement("img");
      categoryImage.src = category.images[0]; // Mostrar la primera foto de la categoría
      categoryImage.alt = category.name;
      categoryImage.addEventListener("click", () => {
        loadCategoryData(category);
      });
  
      const imageContainer = document.createElement("div");
      imageContainer.className = "image-container";
      imageContainer.appendChild(categoryImage);
  
      const titleAndPrice = document.createElement("p");
      titleAndPrice.textContent = `${category.titles[0]} - Precio: $${category.prices[0]}`;
      imageContainer.appendChild(titleAndPrice);
  
      imageGallery.appendChild(imageContainer);
    });
  
    // Función para cargar las fotos e ingredientes de una categoría
    function loadCategoryData(category) {
      menuList.innerHTML = ""; // Limpiar las fotos actuales
      category.images.forEach((image, index) => {
        const photoElement = document.createElement("img");
        photoElement.src = image;
        photoElement.alt = category.titles[index];
        photoElement.addEventListener("click", () => {
          displayIngredientsModal(category.titles[index], category.ingredients[index]);
        });
  
        const imageContainer = document.createElement("div");
        imageContainer.className = "image-container";
        imageContainer.appendChild(photoElement);
  
        const titleAndPrice = document.createElement("p");
        titleAndPrice.textContent = `${category.titles[index]} - Precio: $${category.prices[index]}`;
        imageContainer.appendChild(titleAndPrice);
  
        menuList.appendChild(imageContainer);
      });
    }
  
    // Función para mostrar los ingredientes en un modal
    function displayIngredientsModal(title, ingredients) {
      const ingredientsListModal = document.getElementById("ingredients-list-modal");
      ingredientsListModal.innerHTML = ingredients.map((ingredient) => `<li>${ingredient}</li>`).join("");
  
      const modal = document.getElementById("ingredients-modal");
      const modalTitle = modal.querySelector("h2");
      const closeBtn = document.querySelector(".close-btn");
  
      modalTitle.textContent = title;
      modal.style.display = "block";
  
      closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
      });
  
      window.addEventListener("click", (event) => {
        if (event.target === modal) {
          modal.style.display = "none";
        }
      });
    }
  });
  















/*document.addEventListener("DOMContentLoaded", function() {
    const menuList = document.getElementById("menu-list");
    const imageGallery = document.querySelector(".image-gallery");
  
    // Tu lista de categorías con fotos, títulos, precios e ingredientes relacionados
    const categories = [
        {
          name: "Categoría 1",
          images: ["imagenes/1.jpeg", "imagenes/11.jpeg", "imagenes/12.jpeg"],
          titles: ["Plato 1", "Plato 2", "Plato 3"],
          prices: [10, 15, 12],
          ingredients: [
            ["Ingrediente 1.1", "Ingrediente 1.2"],
            ["Ingrediente 2.1", "Ingrediente 2.2"],
            ["Ingrediente 3.1", "Ingrediente 3.2"]
          ]
        },
        {
          name: "Categoría 2",
          images: ["imagenes/13.jpeg", "imagenes/14.jpeg", "imagenes/5.jpeg"],
          titles: ["Plato A", "Plato B", "Plato C"],
          prices: [18, 20, 22],
          ingredients: [
            ["Ingrediente A.1", "Ingrediente A.2"],
            ["Ingrediente B.1", "Ingrediente B.2"],
            ["Ingrediente C.1", "Ingrediente C.2"]
          ]
        }
        // Agrega más categorías y datos aquí
      ];
  
    // Cargar las fotos e ingredientes de la primera categoría al inicio
    loadCategoryData(categories[0]);
  
    // Crear la galería de imágenes de categorías
    categories.forEach((category) => {
      const categoryImage = document.createElement("img");
      categoryImage.src = category.images[0]; // Mostrar la primera foto de la categoría
      categoryImage.alt = category.name;
      categoryImage.addEventListener("click", () => {
        loadCategoryData(category);
      });
      imageGallery.appendChild(categoryImage);
    });
  
    // Función para cargar las fotos e ingredientes de una categoría
    // Función para cargar las fotos e ingredientes de una categoría
function loadCategoryData(category) {
    menuList.innerHTML = ""; // Limpiar las fotos actuales
    category.images.forEach((image, index) => {
      const photoElement = document.createElement("img");
      photoElement.src = image;
      photoElement.alt = category.titles[index];
      const titleAndPrice = `${category.titles[index]} - Precio: $${category.prices[index]}`;
      photoElement.setAttribute("title", titleAndPrice); // Agrega título y precio como atributo "title"
      photoElement.addEventListener("click", () => {
        displayIngredientsModal(category.titles[index], category.prices[index], category.ingredients[index]);
      });
      menuList.appendChild(photoElement);
    });
  }
  
  
    // Función para mostrar los ingredientes en un modal
    function displayIngredientsModal(ingredients) {
      const ingredientsListModal = document.getElementById("ingredients-list-modal");
      ingredientsListModal.innerHTML = ingredients.map((ingredient) => `<li>${ingredient}</li>`).join("");
  
      const modal = document.getElementById("ingredients-modal");
      const closeBtn = document.querySelector(".close-btn");
  
      modal.style.display = "block";
  
      closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
      });
  
      window.addEventListener("click", (event) => {
        if (event.target === modal) {
          modal.style.display = "none";
        }
      });
    }
  });
  










/*


document.addEventListener("DOMContentLoaded", function() {
    const menuList = document.getElementById("menu-list");
    const imageGallery = document.querySelector(".image-gallery");
    const ingredientsList = document.getElementById("ingredients-list");
  
    // Tu lista de categorías con fotos, títulos, precios e ingredientes relacionados
    const categories = [
      {
        name: "Categoría 1",
        images: ["imagenes/1.jpeg", "imagenes/11.jpeg", "imagenes/12.jpeg"],
        titles: ["Plato 1", "Plato 2", "Plato 3"],
        prices: [10, 15, 12],
        ingredients: [
          ["Ingrediente 1.1", "Ingrediente 1.2"],
          ["Ingrediente 2.1", "Ingrediente 2.2"],
          ["Ingrediente 3.1", "Ingrediente 3.2"]
        ]
      },
      {
        name: "Categoría 2",
        images: ["imagenes/13.jpeg", "imagenes/14.jpeg", "imagenes/5.jpeg"],
        titles: ["Plato A", "Plato B", "Plato C"],
        prices: [18, 20, 22],
        ingredients: [
          ["Ingrediente A.1", "Ingrediente A.2"],
          ["Ingrediente B.1", "Ingrediente B.2"],
          ["Ingrediente C.1", "Ingrediente C.2"]
        ]
      }
      // Agrega más categorías y datos aquí
    ];
  
    // Cargar las fotos e ingredientes de la primera categoría al inicio
    loadCategoryData(categories[0]);
  
    // Crear la galería de imágenes de categorías
    categories.forEach((category) => {
      const categoryImage = document.createElement("img");
      categoryImage.src = category.images[0]; // Mostrar la primera foto de la categoría
      categoryImage.alt = category.name;
      categoryImage.addEventListener("click", () => {
        loadCategoryData(category);
      });
      imageGallery.appendChild(categoryImage);
    });
  
    // Función para cargar las fotos e ingredientes de una categoría
    function loadCategoryData(category) {
      menuList.innerHTML = ""; // Limpiar las fotos actuales
      ingredientsList.innerHTML = ""; // Limpiar los ingredientes actuales
      category.images.forEach((image, index) => {
        const photoElement = document.createElement("img");
        photoElement.src = image;
        photoElement.alt = category.titles[index];
        const titleAndPrice = `${category.titles[index]} - Precio: $${category.prices[index]}`;
        photoElement.setAttribute("title", titleAndPrice); // Agrega título y precio como atributo "title"
        photoElement.addEventListener("click", () => {
          displayIngredients(category.ingredients[index]);
        });
        menuList.appendChild(photoElement);
      });
    }
  
    // Función para mostrar los ingredientes
    function displayIngredients(ingredients) {
      ingredientsList.innerHTML = ingredients.map((ingredient) => `<li>${ingredient}</li>`).join("");
    }
  });
  

/*
document.addEventListener("DOMContentLoaded", function() {
    const menuList = document.getElementById("menu-list");
    const imageGallery = document.querySelector(".image-gallery");
    const ingredientsList = document.getElementById("ingredients-list");
  
    // Tu lista de categorías con fotos y ingredientes relacionados
    const categories = [
      { 
        name: "Categoría 1", 
        description: "Descripción del plato 2. Precio: $15", 
        images: ["imagenes/1.jpeg"],
        ingredients: [
          ["Ingrediente 1", "Ingrediente 2"],
          ["Ingrediente 3", "Ingrediente 4"],
          ["Ingrediente 5", "Ingrediente 6"]
        ]
      },
      { 
        name: "Categoría 2", 
        images: ["imagenes/5.jpeg","imagenes/5.jpeg"],
        ingredients: [
          ["Ingrediente A", "Ingrediente B"],
          ["Ingrediente C", "Ingrediente D"],
          ["Ingrediente E", "Ingrediente F"]
        ]
      },
      { 
        name: "Categoría 3", 
        images: ["imagenes/6.jpeg"],
        ingredients: [
          ["Ingrediente A", "Ingrediente B"],
          ["Ingrediente C", "Ingrediente D"],
          ["Ingrediente E", "Ingrediente F"]
        ]
      },
      // Agrega más categorías y datos aquí
    ];
  
    // Cargar las fotos e ingredientes de la primera categoría al inicio
    loadCategoryData(categories[0]);
  
    // Crear la galería de imágenes de categorías
    categories.forEach((category) => {
      const categoryImage = document.createElement("img");
      categoryImage.src = category.images[0]; // Mostrar la primera foto de la categoría
      categoryImage.alt = category.name;
      categoryImage.addEventListener("click", () => {
        loadCategoryData(category);
      });
      imageGallery.appendChild(categoryImage);
    });
  
    // Función para cargar las fotos e ingredientes de una categoría
    function loadCategoryData(category) {
        menuList.innerHTML = ""; // Limpiar las fotos actuales
        ingredientsList.innerHTML = ""; // Limpiar los ingredientes actuales
        category.images.forEach((image, index) => {
          const photoElement = document.createElement("img");
          photoElement.src = image;
          photoElement.title = `${category.titles[index]} - Precio: $${category.prices[index]}`; // Agrega título y precio como título
          photoElement.addEventListener("click", () => {
            displayIngredients(category.ingredients[index]);
          });
          menuList.appendChild(photoElement);
        });
      }
    // Función para mostrar los ingredientes
    function displayIngredients(ingredients) {
      ingredientsList.innerHTML = ingredients.map((ingredient) => `<li>${ingredient}</li>`).join("");
    }
  });

  









/*


  document.addEventListener("DOMContentLoaded", function() {
    const menuList = document.getElementById("menu-list");
    const modal = document.getElementById("modal");
    const ingredientsList = document.getElementById("ingredients-list");
  
    // Tu lista de platos
    const dishes = [
      { 
        name: "Plato 1", 
        description: "Hamburguesa Simple. Precio: $2,75", 
        image: "imagenes/1.jpeg",
        ingredients: ["Hamburguesa Simple", "Ingrediente ", "Pan con ajonjolí", "Lechuga y Tomate", "100 gm de Carne", "rodaja de queso"]
      },
      { 
        name: "Plato 2", 
        description: "Descripción del plato 2. Precio: $15", 
        image: "imagenes/5.jpeg",
        ingredients: ["Ingrediente 1 del plato 2", "Ingrediente 2 del plato 2", "Ingrediente 3 del plato 2"]
      },
      // Agrega más platos aquí
    ];
  
    dishes.forEach((dish) => {
      const dishElement = document.createElement("div");
      dishElement.className = "dish";
      dishElement.innerHTML = `
        <img src="${dish.image}" alt="${dish.name}">
        <h2>${dish.name}</h2>
        <p>${dish.description}</p>
      `;
      menuList.appendChild(dishElement);
  
      // Agregar evento clic para mostrar modal con ingredientes específicos
      dishElement.addEventListener("click", () => {
        openModal(dish.name, dish.ingredients);
      });
    });
  
    // Función para abrir el modal y mostrar los ingredientes
    function openModal(name, ingredients) {
      modal.style.display = "block";
      ingredientsList.innerHTML = ingredients.map((ingredient) => `<li>${ingredient}</li>`).join("");
    }
  
    // Agregar evento clic para cerrar el modal
    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        closeModal();
      }
    });
  
    // Función para cerrar el modal
    function closeModal() {
      modal.style.display = "none";
    }
  });
  





  document.addEventListener("DOMContentLoaded", function() {
    const menuList = document.getElementById("menu-list");
    const imageGallery = document.querySelector(".image-gallery");
    const ingredientsList = document.getElementById("ingredients-list");
  
    // Tu lista de categorías con fotos relacionadas
    const categories = [
      { 
        name: "Categoría 1", 
        images: ["images/dish1.jpg", "images/dish2.jpg", "images/dish3.jpg"]
      },
      { 
        name: "Categoría 2", 
        images: ["images/dish4.jpg", "images/dish5.jpg", "images/dish6.jpg"]
      },
      // Agrega más categorías y fotos aquí
    ];
  
    // Cargar las fotos de la primera categoría al inicio
    loadCategoryPhotos(categories[0].images);
  
    // Crear la galería de imágenes de categorías
    categories.forEach((category) => {
      const categoryImage = document.createElement("img");
      categoryImage.src = category.images[0]; // Mostrar la primera foto de la categoría
      categoryImage.alt = category.name;
      categoryImage.addEventListener("click", () => {
        loadCategoryPhotos(category.images);
      });
      imageGallery.appendChild(categoryImage);
    });
  
    // Función para cargar las fotos de una categoría
    function loadCategoryPhotos(images) {
      menuList.innerHTML = ""; // Limpiar las fotos actuales
      images.forEach((image) => {
        const photoElement = document.createElement("img");
        photoElement.src = image;
        menuList.appendChild(photoElement);
      });
    }
  });
  */
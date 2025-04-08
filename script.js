// Simulación de backend con la información del menú y detalles adicionales
const menuData = {
    entradas: {
      imagenes: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRufG72UeXKbPoVKOkhdnbWNykS3zZFf5OWwA&s",
        "https://img.freepik.com/fotos-premium/fotografia-plato-comida-gourmet-mesa-restaurante-yuri-ugarte-cespedes_261378-907.jpg"
      ],
      platillos: [
        {
          nombre: "Bruschetta",
          descripcion: "Pan tostado con tomate, albahaca y aceite de oliva.",
          precio: "$5.000",
          detalles: {
            info: "Una deliciosa bruschetta con ingredientes frescos y un toque de balsámico.",
            foto: "https://www.lavanguardia.com/files/og_thumbnail/uploads/2019/07/31/5e997f087bf41.jpeg"
          }
        },
        {
          nombre: "Ensalada Caprese",
          descripcion: "Rodajas de tomate con mozzarella y albahaca fresca.",
          precio: "$6.500",
          detalles: {
            info: "Una combinación clásica italiana, perfecta para empezar la comida.",
            foto: "https://www.paulinacocina.net/wp-content/uploads/2024/07/ensalada-caprese-italiana-800x534-800x800.jpg"
          }
        }
      ]
    },
    platosFuertes: {
      imagenes: [
        "https://www.laparcelacr.com/wp-content/uploads/2014/11/platos-fuertes-menu.jpg",
        "https://reservalamakina.com/wp-content/uploads/2022/03/Captura-de-Pantalla-2022-03-24-a-las-12.18.10-531x354.png"
      ],
      platillos: [
        {
          nombre: "Pasta Alfredo",
          descripcion: "Pasta con una cremosa salsa Alfredo y pollo.",
          precio: "$12.000",
          detalles: {
            info: "Pasta al dente bañada en una salsa cremosa y suave, con toques de parmesano.",
            foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC98_85ox6Pfq-DeazWFTNYV48iikwHipWHw&s "
          }
        },
        {
          nombre: "Lomo de Res",
          descripcion: "Tierno lomo de res servido con vegetales al vapor.",
          precio: "$18.500",
          detalles: {
            info: "Lomo de res jugoso y tierno, acompañado de una selección de vegetales frescos.",
            foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZjg62DjMhTEHpT1QeJyYSqjWgAjhXIa8zrA&s"
          }
        }
      ]
    },
    postres: {
      imagenes: [
        "https://www.paulinacocina.net/wp-content/uploads/2024/01/receta-de-postre-de-maracuya-Paulina-Cocina-Recetas-1722251880-1200x676.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxLPVm1gc3ZAmoSv3dNQbkMjFFE2kNcJy6Ew&s"
      ],
      platillos: [
        {
          nombre: "Tiramisú",
          descripcion: "Clásico postre italiano con café y mascarpone.",
          precio: "$23.000",
          detalles: {
            info: "Un postre cremoso y delicioso con capas de café, queso mascarpone y cacao.",
            foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLKWl_QSk_XZAhJbz_SxRP5CPLIl3NXWT15w&s"
          }
        },
        {
          nombre: "Cheesecake",
          descripcion: "Pastel de queso con base de galleta y salsa de frutos rojos.",
          precio: "$16.500",
          detalles: {
            info: "Cheesecake suave y cremoso, servido con una generosa capa de salsa de frutos rojos.",
            foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvQDuH1dGXahBB3cDIj4ZQkCDvhb3gOMZ3FQ&s"
          }
        }
      ]
    },
    bebidas: {
      imagenes: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnZEMnn1Ln3mF5nTxyTXq58mSJZN1ixdmdgw&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfZ7_xFK-v2Hq0Gt1OCZUOS34jx1R936dApg&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoulxzkFPqUuYjw7KmGIXigYaMUz2BfCNH-A&s"
      ],
      platillos: [
        {
          nombre: "Limonada",
          descripcion: "Refrescante bebida de limón natural.",
          precio: "$3.000",
          detalles: {
            info: "Limonada recién exprimida, perfecta para refrescarte en días calurosos.",
            foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsneZtvCYbh7qBfZNwdOKpApFhT21yfcHcZg&s"
          }
        },
        {
          nombre: "Café Espresso",
          descripcion: "Café intenso y aromático, ideal para cualquier momento.",
          precio: "$2.500",
          detalles: {
            info: "Un espresso corto y potente, con un aroma inconfundible.",
            foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYh_RQ4AkfuTtNyaiSCyi7sx852KNjkE9xxw&s"
          }
        }
      ]
    }
  };
  
  // Array con enlaces para la galería de experiencias
  const galleryImages = [
    "https://www.semana.com/resizer/v2/NBOFDSEZQ5FYHLJ6JU4JZ65J2U.jpg?auth=9c2b904217d39e0fa46afe1179978f89dbbb8b957db66550c9dced0698091ce4&smart=true&quality=75&width=1280&height=720",
    "https://periodicodelmeta.com/wp-content/uploads/2021/03/Castilla-La-Nueva-300x300.jpeg",
    "https://s2.wklcdn.com/image_333/9991458/90776767/59272325Master.jpg",
    "https://periodicodelmeta.com/wp-content/uploads/2021/03/Castilla-La-Nueva-5-240x300.jpg"
  ];
  
  let currentGalleryIndex = 0;
  let galleryInterval;
  
  // Función para limpiar un contenedor
  function limpiarContenedor(id) {
    document.getElementById(id).innerHTML = "";
  }
  
  // Función para mostrar las imágenes de la categoría
  function mostrarImagenes(categoriaData) {
    const contenedorImagenes = document.getElementById("menu-imagenes");
    limpiarContenedor("menu-imagenes");
  
    if (categoriaData.imagenes && categoriaData.imagenes.length > 0) {
      categoriaData.imagenes.forEach(url => {
        const img = document.createElement("img");
        img.src = url;
        img.alt = "Imagen de " + url;
        contenedorImagenes.appendChild(img);
      });
    }
  }
  
  // Función para mostrar los platillos de la categoría seleccionada
  function mostrarPlatillos(categoria) {
    limpiarContenedor("menu-platillos");
    const categoriaData = menuData[categoria];
  
    // Mostrar imágenes de la categoría antes de los platillos
    mostrarImagenes(categoriaData);
  
    const contenedorPlatillos = document.getElementById("menu-platillos");
    const platillos = categoriaData.platillos;
  
    if (platillos && platillos.length > 0) {
      platillos.forEach(item => {
        const divPlatillo = document.createElement("div");
        divPlatillo.classList.add("platillo");
  
        // Título del platillo
        const titulo = document.createElement("h3");
        titulo.textContent = item.nombre;
        divPlatillo.appendChild(titulo);
  
        // Descripción corta
        const descripcion = document.createElement("p");
        descripcion.textContent = item.descripcion;
        divPlatillo.appendChild(descripcion);
  
        // Precio
        const precio = document.createElement("span");
        precio.textContent = item.precio;
        divPlatillo.appendChild(precio);
  
        // Al hacer clic, se muestra el modal con detalles ampliados
        divPlatillo.addEventListener("click", () => {
          mostrarModal(item);
        });
  
        contenedorPlatillos.appendChild(divPlatillo);
      });
    } else {
      const mensaje = document.createElement("p");
      mensaje.textContent = "No hay platillos disponibles en esta categoría.";
      contenedorPlatillos.appendChild(mensaje);
    }
  }
  
  // Función para mostrar el modal con detalles ampliados del producto
  function mostrarModal(producto) {
    const modal = document.getElementById("product-modal");
    const modalBody = document.getElementById("modal-body");
    limpiarContenedor("modal-body");
  
    // Título y descripción ampliada
    const titulo = document.createElement("h2");
    titulo.textContent = producto.nombre;
    modalBody.appendChild(titulo);
  
    const info = document.createElement("p");
    info.textContent = producto.detalles.info;
    modalBody.appendChild(info);
  
    // Imagen extra (más grande)
    const img = document.createElement("img");
    img.src = producto.detalles.foto;
    img.alt = producto.nombre;
    img.style.width = "100%";
    img.style.borderRadius = "8px";
    modalBody.appendChild(img);
  
    modal.style.display = "flex";
  }
  
  // Función para cerrar el modal
  function cerrarModal() {
    const modal = document.getElementById("product-modal");
    modal.style.display = "none";
  }
  
  // Funciones para el slider de la galería
  function mostrarImagenGallery() {
    const sliderImage = document.getElementById("slider-image");
    sliderImage.src = galleryImages[currentGalleryIndex];
  }
  
  function nextImage() {
    currentGalleryIndex = (currentGalleryIndex + 1) % galleryImages.length;
    mostrarImagenGallery();
  }
  
  function prevImage() {
    currentGalleryIndex = (currentGalleryIndex - 1 + galleryImages.length) % galleryImages.length;
    mostrarImagenGallery();
  }
  
  function iniciarSlider() {
    mostrarImagenGallery();
    // Auto slide cada 5 segundos
    galleryInterval = setInterval(nextImage, 5000);
  }
  
  function detenerSlider() {
    clearInterval(galleryInterval);
  }
  
  // Eventos y asignación de clics
  document.addEventListener("DOMContentLoaded", () => {
    const botonesCategorias = document.querySelectorAll("#menu-categorias button");
  
    botonesCategorias.forEach(boton => {
      boton.addEventListener("click", () => {
        const categoriaSeleccionada = boton.getAttribute("data-category");
        mostrarPlatillos(categoriaSeleccionada);
      });
    });
  
    // Mostrar por defecto la primera categoría
    if (botonesCategorias.length > 0) {
      botonesCategorias[0].click();
    }
  
    // Iniciar slider de la galería
    iniciarSlider();
  
    // Botones del slider
    document.querySelector(".prev").addEventListener("click", () => {
      prevImage();
      detenerSlider();
      iniciarSlider();
    });
    document.querySelector(".next").addEventListener("click", () => {
      nextImage();
      detenerSlider();
      iniciarSlider();
    });
  
    // Cerrar modal al hacer clic en el botón de cerrar
    document.querySelector(".close-button").addEventListener("click", cerrarModal);
  
    // Cerrar modal al hacer clic fuera del contenido del modal
    window.addEventListener("click", (event) => {
      const modal = document.getElementById("product-modal");
      if (event.target === modal) {
        cerrarModal();
      }
    });
  });
  
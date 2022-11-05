const carrito = document.querySelector('#carrito');
const contenedorProductos = document.getElementById('contenedor');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const productosCarrito = document.getElementById('productos-carrito');
let buscador = document.getElementById('buscador');
const card = document.getElementById('contenedor');
let articulosCarrito = [];
let cantidadTotal = 0;

document.addEventListener('DOMContentLoaded', (e) => {
	fetch('./productos.json')
		.then((response) => response.json())
		.then((result) => cargarProductos(result));
});

carrito.addEventListener('click', eliminarProducto); 

document.addEventListener('DOMContentLoaded', () => {
	articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];

	carritoHTML();
  })

  vaciarCarritoBtn.addEventListener('click', (e) => {
	e.preventDefault();
	productosCarrito.style.display = "none"
	articulosCarrito = [];
	cantidadTotal = 0;
	localStorage.removeItem("carrito");
	limpiarHTML(); 
	Swal.fire({
		title: 'Tu carrito se vació con exito',
		icon: 'success',
	 	confirmButtonText: 'Continuar'
		});
  })

  function cargarProductos(productos) {
	productos.forEach((producto) => {
		const div = document.createElement('div');
		div.classList.add('producto');
		div.innerHTML = `
    <div class="card col-md-3 prod" style="width: 20rem;">
        <img src="img${producto.img}" class="card-img-top" alt="cortina de baño modelo simpson ducha">
        <div  class="card-body">
        <h3 class="card-title">$${producto.precio}</h3>
        <h4 class="card-subtitle">${producto.nombre}</h4>
        <p class="card-text">${producto.descripcion}</p>
        <a id="${producto.id}" href="#" class="btn btn-primary agregar-carrito">Agregar al carrito</a>
        </div>
    </div>
    `;
		card.appendChild(div);
	});}

contenedorProductos.addEventListener('click', (e) => {
	e.preventDefault();

	if (e.target.classList.contains('agregar-carrito')) {
		const producto = e.target.parentElement.parentElement;
		

		agregarProducto(producto);

		 Swal.fire({
		 	title: 'Producto seleccionado',
		 	text: 'Agregado al carrito de compras',
		 	icon: 'success',
			confirmButtonText: 'Continuar'
		 });
	}
});


function agregarProducto(producto) {
	

	const datosProducto = {
		imagen: producto.querySelector('img').src,
		precio: Number(producto.querySelector('h3').innerText.replace('$', '')),
		nombre: producto.querySelector('h4').textContent,
		id: producto.querySelector('a').getAttribute('id'),
		cantidad: 1,
		total: 0
	};

	datosProducto.total = datosProducto.precio * datosProducto.cantidad;
	

	const existeArticulo = articulosCarrito.some((producto) => producto.id === datosProducto.id);
	if (existeArticulo) {
		const productos = articulosCarrito.map((producto) => {
			if (producto.id === datosProducto.id) {
				producto.cantidad++;
				producto.total = producto.cantidad * producto.precio;

				return producto;
			} else {
				return producto;
			}
		});
		articulosCarrito = [...productos];
	} else {
		articulosCarrito = [...articulosCarrito, datosProducto];
	}


	carritoHTML();
}
function carritoHTML() {
	let cantidadProductos = 0;
  
	articulosCarrito.length > 0 ? productosCarrito.style.display = "block" : productosCarrito.style.display = "none"
  
	 limpiarHTML();
  
	articulosCarrito.forEach(producto => {
	  const {imagen, nombre, precio, cantidad, total, id} = producto;
	  const row = document.createElement('tr');
	  row.innerHTML = `
		<td><img src="${imagen}" width="100"></td>
		<td>${nombre}</td>
		<td>$${precio}</td>
		<td>${cantidad}</td>
		<td>$${total}</td>
		<td><a href="#" class="borrar-producto" data-id="${id}"> X </a></td>
	  `;
  
	  contenedorCarrito.appendChild(row);
	});

	for (let i = 0; i < articulosCarrito.length; i++) {
		cantidadProductos += articulosCarrito[i].cantidad
	  }
	  
	  if (cantidadProductos != 0) {
		productosCarrito.innerHTML = cantidadProductos;
	  }

	 sincronizarStorage();
}

function eliminarProducto(e) { 
	if(e.target.classList.contains('borrar-producto')) {
	  e.preventDefault();
	  const productoId = e.target.getAttribute('data-id')
	  
	  articulosCarrito = articulosCarrito.filter(producto => producto.id !== productoId);
  
	  carritoHTML();
	  Swal.fire({
		title: 'Producto eliminado',
		icon: 'error',
	 	confirmButtonText: 'Continuar'
		});
	}
  }

function limpiarHTML() {
	while(contenedorCarrito.firstChild) {
	  contenedorCarrito.removeChild(contenedorCarrito.firstChild);
	}
  
	productosCarrito.innerHTML = "";

  }

  function sincronizarStorage() {
	localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}

buscador.addEventListener('submit', (e) => {
	e.preventDefault();
	contenedor.innerHTML = '';
	let inputs = e.target.children;

	let producto = productos.filter((item) => item.nombre.toLocaleLowerCase().includes(inputs[0].value));
	producto.forEach((producto) => {
		let item = document.createElement('div');
		item.innerHTML = `
    <div class="card col-md-3 prod" style="width: 20rem;">
        <img src="img${producto.img}" class="card-img-top" alt="cortina de baño modelo simpson ducha">
        <div  class="card-body">
        <h3 class="card-title">$${producto.precio}</h3>
        <h4 class="card-subtitle">${producto.nombre}</h4>
        <p class="card-text">${producto.descripcion}</p>
        <a id="agregar${producto.id}" href="#" class="btn btn-primary agregar-carrito">Agregar al carrito</a>
        </div>
    </div>
    `;
		contenedor.append(item);
	});
});


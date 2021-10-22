var totalPago = 0;
let carrito = [];
let iconoCarrito = document.querySelector("#carrito")
let botonesAdquirirPromo = document.querySelectorAll(".adquirirPromo")
let botonesBiciCompra = document.querySelectorAll(".biciCompra")
const articulos = ["Specialized", "Bici2", "Bici3", "Bici4", "Bici5"];
const promociones = ["PromoBasica", "PromoBiciteka", "PromoPremiun"]
const valoresPromociones = [75000, 120000, 250000]

botonesBiciCompra.forEach((botonBiciCompra) =>
    botonBiciCompra.onclick = () => {
        totalPago += parseInt(botonBiciCompra.dataset.valor)
        carrito.push(botonBiciCompra.dataset.bici)
        console.log(carrito)
    }
);
botonesAdquirirPromo.forEach((botonAdquirirPromo) =>
    botonAdquirirPromo.onclick = () => {
        totalPago += parseInt(botonAdquirirPromo.dataset.valor)
        carrito.push(botonAdquirirPromo.dataset.promo)
        console.log(carrito)
    }
);

function vaciarCarrito() {
    totalPago = 0
    carrito = [];
}

iconoCarrito.onclick = () => {
    var pagar;
    var cuenta1;
    var vuelto;

    if (totalPago === 0) {
        alert("compra algo raton")
    } else {
        alert("Compraste estos articulos: " + "\n" + carrito + " tenes que pagar $ " + totalPago)
        pagar = parseInt(prompt("¿Con cuento va pagar?"))
        if (pagar > totalPago) {
            vuelto = pagar - totalPago;
            alert("Muchas gracias por su compra ;)\n Su vuelto es $ " + vuelto)
            vaciarCarrito()
        }
        else if (totalPago > pagar) {
            cuenta1 = (totalPago - pagar);
            alert("Te faltan $" + cuenta1)
            carritoCompra()
        }
        else {
            alert("Muchas gracias por su compra ;)")
            vaciarCarrito()
        }
    }
    console.log(carrito)
}
let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function (){
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + "%"
}




class Cafe{
    constructor(marca,tipoCafe,precio){ 
        this.marca = marca; 
        this.tipoCafe = tipoCafe;  
        this.precio = precio;
    }
}

//----------------PRODUCTOS--------------------------//

const productos = []

const cafe1 = new Cafe ("Rambla", "Nicaragua", 1400);
const cafe2 = new Cafe ("Rambla", "Colombia", 1400);
const cafe3 = new Cafe ("Puerto Blest", "Colombia", 1200);
const cafe4 = new Cafe ("Puerto Blest", "Guatemala", 1200);
const cafe5 = new Cafe ("Puerto Blest", "Peru", 1200);
const cafe6 = new Cafe ("Puerto Blest", "El salvador", 1200);


productos.push(cafe1)
productos.push(cafe2)
productos.push(cafe3)
productos.push(cafe4)
productos.push(cafe5)
productos.push(cafe6)

let ObjtoJson = JSON.stringify(productos)
localStorage.setItem("productos",ObjtoJson)

let selector =  document.getElementById("testImprimir")

productos.forEach (e => {

    //VARIEDADED DE CAFES
    let div1 = document.createElement("div")
    div1.setAttribute("class", "card card-body text-center")

    let h5 = document.createElement("h5")
    h5.textContent= e.marca
    div1.appendChild(h5)
    h5.setAttribute("class", "card-title")

    
    let h6 = document.createElement("h6")
    h6.textContent= e.tipoCafe
    div1.appendChild(h6)
    h6.setAttribute("class", "card-subtitle mb-2 text-muted")


    let p1 = document.createElement("p")
    p1.textContent= e.precio
    div1.appendChild(p1)
    p1.setAttribute("class", "card-text")

selector.appendChild(div1)

})

//----------------PEDIDO--------------------------//
let carrito = []

let btnSave = document.getElementById("save")
let tablePrint = document.getElementById("table")
let form = document.getElementById("form")
let btnClear = document.getElementById("clear")


//GUARDADO DE DATOS
const saveData = () => {

    //REQUEST
    let marca = document.getElementById("marca").value
    let tipoCafe = document.getElementById("tipoCafe").value
    let precio = document.getElementById("precio").value


    if (JSON.parse(localStorage.getItem("carrito") != null)) {
        carrito= JSON.parse(localStorage.getItem("carrito"))
        let cafe=  new Cafe(marca,tipoCafe, precio)
        carrito.push(cafe)
        localStorage.setItem("carrito", JSON.stringify(carrito))
    }
    else{
        let cafe=  new Cafe(marca,tipoCafe, precio)
        carrito.push(cafe)
        localStorage.setItem("carrito", JSON.stringify(carrito))
    }
}

//IMPRIMIR DATOS
const printData = () => {

    let dataToPrint = JSON.parse(localStorage.getItem("carrito"))

    if (dataToPrint != null) {
    dataToPrint.forEach(e => {

        let table = document.createElement("tr")

        let td = document.createElement("td")
        td.setAttribute("class", "col-1")
        td.textContent = `${dataToPrint.indexOf(e)}`
        table.appendChild(td)

        let th1 = document.createElement("th")
        th1.setAttribute("class", "col-2")
        th1.textContent = `${e.marca}`
        table.appendChild(th1)

    
        let th2 = document.createElement("th")
        th2.setAttribute("class", "col-2")
        th2.textContent = `${e.tipoCafe}`
        table.appendChild(th2)

        let th3 = document.createElement("th")
        th3.setAttribute("class", "col-2")
        th3.textContent = `${e.precio}`
        table.appendChild(th3)

        tablePrint.appendChild(table)

    })

}
else{
    document.getElementById("err").textContent = "Tu carrito de compras esta vacío"
}

}

form.addEventListener("submit", saveData)
btnClear.addEventListener("click", () => {
    localStorage.clear()
    location.reload()
})

function totalCarrito(){
    let carritoTotal = 0;
    for (const producto of carrito){
        carritoTotal += producto.precio;
    }
    return carritoTotal;                  
    }

printData()

























class Cafe{
    constructor(tipoCafe, unidades){ 
        this.tipoCafe = tipoCafe;  
        this.unidades = unidades; 
        //this.precio = precio;
        //this.id = id;
    }
}

let carrito = []

let btnSave = document.getElementById("save")
let tablePrint = document.getElementById("table")
let form = document.getElementById("form")
let btnClear = document.getElementById("clear")


//Guardado de datos
const saveData = () => {

    //PEDIDO
    let tipoCafe = document.getElementById("tipoCafe").value
    let unidades = document.getElementById("unidades").value


    if (JSON.parse(localStorage.getItem("carrito") != null)) {
        carrito= JSON.parse(localStorage.getItem("carrito"))
        let cafe=  new Cafe(tipoCafe, unidades)
        carrito.push(cafe)
        localStorage.setItem("carrito", JSON.stringify(carrito))
    }
    else{
        let cafe=  new Cafe(tipoCafe, unidades)
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
        th1.textContent = `${e.tipoCafe}`
        table.appendChild(th1)

    
        let th2 = document.createElement("th")
        th2.setAttribute("class", "col-2")
        th2.textContent = `${e.unidades}`
        table.appendChild(th2)

        let th3 = document.createElement("th")
        th3.setAttribute("class", "col-2")
        th3.textContent = `${e.precio}`
        table.appendChild(th3)


        let td2 = document.createElement("td")
        td2.setAttribute("class", "col-2")
        td2.textContent  = "X"
        table.appendChild(td2)

        tablePrint.appendChild(table)

    })

}
else{
    document.getElementById("err").textContent = "No has agregado nada a tu carrito"
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



























/*
let carrito = [];

let btnSave = document.getElementById("save")
let tablePrint = document.getElementById("table")
let form = document.getElementById("form")
let btnClear = document.getElementById("clear")

const saveData = () => {

    let tipoCafe = document.getElementById("tipoCafe").value
    let unidades = document.getElementById("unidades").value


    if (JSON.parse(localStorage.getItem("carrito") != null)) {
        users = JSON.parse(localStorage.getItem("carrito")) 
        let index = carrito.length + 1
        let cafe = new Cafe(tipoCafe, unidades, index) 
        carrito.push(cafe) 
        localStorage.setItem("carrito", JSON.stringify(carrito)) 
    } else {
        let index = 1
        let cafe = new Cafe(tipoCafe, unidades, index) 
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
            th1.textContent = `${e.tipoCafe}`
            table.appendChild(th1)

            let th2 = document.createElement("th")
            th2.setAttribute("class", "col-2")
            th2.textContent = `${e.unidades}`
            table.appendChild(th2)

            let th3 = document.createElement("th")
            th3.setAttribute("class", "col-2")
            th3.textContent = `${e.precio}`
            table.appendChild(th3)

            let td2 = document.createElement("td")
            td2.setAttribute("class", "col-2")
            table.appendChild(td2)

            let button = document.createElement("button")
            button.setAttribute("class", "btn btn-danger")
            button.setAttribute("id", `${e.id}`)
            button.setAttribute("onclick", `deleteUser(${e.id})`)
            button.textContent = "X"
            td2.appendChild(button)

            //AGREGARLO A MI ID
            tablePrint.appendChild(table)
        })

    } else {
        document.getElementById("err").textContent = "No existe ese café"
    }
}

const deleteUser = (id) => {

    let allUser = JSON.parse(localStorage.getItem("users"))
    let allUserAct = allUser.filter(e => e.id != id)
    localStorage.setItem("users", JSON.stringify(allUserAct))
    location.reload()

}

form.addEventListener("submit", saveData)
btnClear.addEventListener("click", () => {
    localStorage.clear()
    location.reload()
})

/*
function totalCarrito(){
    let carritoTotal = 0;
    for (const producto of carrito){
        carritoTotal += producto.precio;
    }
    return carritoTotal;                  
    }
*/

 //   window.addEventListener("load", () => {
  ///      printData()
   // })

//alert(`El total de cafés ingresados es de ${carrito.length} por un monto de $${totalCarrito()}`);


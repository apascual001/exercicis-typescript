//let form = <HTMLElement>document.getElementById('vform');
  //      form.addEventListener('submit', (event) => {event.preventDefault(); submitCar()});
//document.getElementById("#enviar").addEventListener("click", function(event) {
           // event.preventDefault();
   //}, false);

let car: Car;

var plate_error = <HTMLElement>document.getElementById('plate_error');
const color_error = <HTMLElement>document.getElementById('color_error');
const brand_error = <HTMLElement>document.getElementById('brand_error');

function comprobar(){
    //event.preventDefault()
    var plate = (<HTMLInputElement>document.getElementById("plate")).value;
    var color = (<HTMLInputElement>document.getElementById("color")).value;
    var brand = (<HTMLInputElement>document.getElementById("brand")).value;

    car=new Car(plate,color,brand);

    var x = 0; 
    var expreg = /^[a-zA-Z]{4}[\d]{3}$/;
    if (expreg.test(plate)) {
        plate_error.innerHTML = '';
        console.log('true');
    }
    else{
        plate_error.innerHTML = 'La matrícula debe tener 4 letras y 3 números';
        x ++;
        console.log(plate);
        console.log(false);
        console.log(x);
    }
    if (color == "") {
        color_error.innerHTML = 'El color es requerido';
        x ++;
        console.log(x);
    }
    if (brand == "") {
        brand_error.innerHTML = 'La marca es requerido';
        x ++;
        console.log(x);
    }
    return x;
}
// Limpiar
function limpiar(){
    var plate = (<HTMLInputElement>document.getElementById("plate")).value;
    var color = (<HTMLInputElement>document.getElementById("color")).value;
    var brand = (<HTMLInputElement>document.getElementById("brand")).value;

    var expreg = new RegExp("^[a-zA-Z]{4}[\d]{3}$ ");
    if (expreg.test(plate)) {
        plate_error.innerHTML = '';
    }
    if (color != "") {
      color_error.innerHTML = "";
    }
    if (brand != "") {
        brand_error.innerHTML = "";
    }  
  }
  
function showCar(){
    const showInfo = <HTMLElement>document.getElementById('showInfo');
    const elementPlate: HTMLElement = document.createElement('div');
    const elementColor: HTMLElement = document.createElement('div');
    const elementBrand: HTMLElement = document.createElement('div');

    elementPlate.innerHTML = 'MATRÍCULA COCHE :  ' + car.plate;
    showInfo.appendChild(elementPlate);
    elementColor.innerHTML = 'COLOR COCHE :  ' + car.color;
    showInfo.appendChild(elementColor);
    elementBrand.innerHTML = 'MARCA COCHE :  ' + car.brand;
    showInfo.appendChild(elementBrand);
}

function submitCar() {
    event.preventDefault()
    limpiar();
    var x = comprobar();
    if (x == 0) {
        console.log(x);
        showCar();
        var button = <HTMLElement>document.getElementById("enviar");
        button.classList.add('hide');
        var wheelsInfo = <HTMLElement>document.getElementById("wheelsInfo");
        wheelsInfo.classList.remove('hide');
        console.log(car);

    } else {
    return false;
    } 
}

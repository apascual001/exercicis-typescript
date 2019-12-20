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
//**************************** */
let wheel: Wheel;
const diams = (document.getElementsByClassName("diam"));

function validateWheels(){    
            var z = 0;      
            for (var i = 0; i < diams.length; i++) {   
                var valordiam = (<HTMLInputElement>document.getElementById("diam"+(i+1))).valueAsNumber;
                var diam_error = <HTMLElement>document.getElementById('diam'+(i+1)+'_error');
                diam_error.innerHTML = '';
                diam_error.classList.remove('red');
                if ( valordiam < 0.4 || valordiam> 2 || isNaN(valordiam)){
                    diam_error.innerHTML = 'La medida no es correcta';
                    diam_error.classList.add('red');
                    z ++;
                    console.log(z);   
                }
                var valorbrand = (<HTMLInputElement>document.getElementById("brand"+(i+1))).value;
                var brand_error = <HTMLElement>document.getElementById('brand'+(i+1)+'_error');
                brand_error.innerHTML = '';
                brand_error.classList.remove('red');
                if ( valorbrand == ""){
                    brand_error.innerHTML = 'La marca no puede estar vacia';
                    brand_error.classList.add('red');
                    z ++;
                    console.log(z);   
                }
            }
            return z;  
}

function showWheels(){
    //var diam1 = (<HTMLInputElement>document.getElementById("diam1")).valueAsNumber;
    //var diam2 = (<HTMLInputElement>document.getElementById("diam2")).valueAsNumber;
    //var diam3 = (<HTMLInputElement>document.getElementById("diam3")).valueAsNumber;
    //var diam4 = (<HTMLInputElement>document.getElementById("diam4")).valueAsNumber;
    //var brand1 = (<HTMLInputElement>document.getElementById("brand1")).value;
    //var brand2 = (<HTMLInputElement>document.getElementById("brand2")).value;
    //var brand3 = (<HTMLInputElement>document.getElementById("brand3")).value;
    //var brand4 = (<HTMLInputElement>document.getElementById("brand4")).value;

    //car.addWheel(new Wheel(diam1,brand1));  
    //car.addWheel(new Wheel(diam2,brand2));  
    //car.addWheel(new Wheel(diam3,brand3));  
    //car.addWheel(new Wheel(diam4,brand4)); 
    
    for (var i = 0; i < diams.length; i++) {   
        var valordiam = (<HTMLInputElement>document.getElementById("diam"+(i+1))).valueAsNumber;
        var valorbrand = (<HTMLInputElement>document.getElementById("brand"+(i+1))).value;
        car.addWheel(new Wheel(valordiam,valorbrand)); 
    }
    const showWheels = <HTMLElement>document.getElementById('showWheels');

    car.wheels.forEach(Wheel => {
        const elementwheel1: HTMLElement = document.createElement('div');
        elementwheel1.innerHTML += 'RUEDA ' +(car.wheels.indexOf(Wheel)+1)+ '    Diámetro: '+ Wheel.diameter;
        elementwheel1.innerHTML += '  Marca :  ' + Wheel.brand;

        showWheels.appendChild(elementwheel1);
    });
    var button = <HTMLElement>document.getElementById("imprimir");
        button.classList.add('hide');


}
function submitWheels(){
    event.preventDefault()
    //limpiarerrores();
    var z = validateWheels();
    if (z == 0) {
        console.log(z);
        showWheels();
    } else {
    return false;
    } 

}

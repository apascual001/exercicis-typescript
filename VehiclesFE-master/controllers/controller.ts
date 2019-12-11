//        let form = <HTMLElement>document.getElementById('loginForm');
//          form.addEventListener('submit', (event) => {event.preventDefault(); this.submitForm()});

class CarPanel {

    constructor() {
        const form = <HTMLElement>document.getElementById('vform');
        form.addEventListener('submit', (event) => {event.preventDefault(); this.submitForm()});
    }
    public submitForm(): void {
        }   
}

new CarPanel();

function createCar(plate:string,brand:string,color:string){
    
    var plate = (<HTMLInputElement>document.getElementById("plate")).value;
    var color = (<HTMLInputElement>document.getElementById("color")).value;
    var brand = (<HTMLInputElement>document.getElementById("brand")).value;
 
    let car=new Car(plate,color,brand);
    car.addWheel(new Wheel(2,"SEAT"));   

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

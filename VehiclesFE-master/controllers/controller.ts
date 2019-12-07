//        let form = <HTMLElement>document.getElementById('loginForm');
//          form.addEventListener('submit', (event) => {event.preventDefault(); this.submitForm()});

class CarPanel {

    constructor() {
        const form = <HTMLElement>document.getElementById('vform');
        form.addEventListener('submit', (event) => {event.preventDefault(); this.submitForm()});
    }

    public submitForm(plate:string,color:string,brand:string): void {
        var plate = (<HTMLInputElement>document.getElementById("plate")).value;
        var color = (<HTMLInputElement>document.getElementById("color")).value;
        var brand = (<HTMLInputElement>document.getElementById("brand")).value;

        let car=new Car(plate,color,brand);

        const elementFirst: HTMLElement = document.createElement('pre');
        const elementSecond: HTMLElement = document.createElement('pre');
        const elementThird: HTMLElement = document.createElement('pre');
        const carInfo = <HTMLElement>document.getElementById('carInfo');

        elementFirst.innerHTML = 'MATRÍCULA COCHE: ' + car.plate;
        carInfo.appendChild(elementFirst);
        elementSecond.innerHTML = 'COLOR COCHE: : ' + car.color;
        carInfo.appendChild(elementSecond);
        elementThird.innerHTML = 'MARCA COCHE: : ' + car.brand;
        carInfo.appendChild(elementThird);

    }

}

new CarPanel();



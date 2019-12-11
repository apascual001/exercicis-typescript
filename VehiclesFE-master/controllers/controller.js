"use strict";
//        let form = <HTMLElement>document.getElementById('loginForm');
//          form.addEventListener('submit', (event) => {event.preventDefault(); this.submitForm()});
var CarPanel = /** @class */ (function () {
    function CarPanel() {
        var _this = this;
        var form = document.getElementById('vform');
        form.addEventListener('submit', function (event) { event.preventDefault(); _this.submitForm(); });
    }
    CarPanel.prototype.submitForm = function () {
    };
    return CarPanel;
}());
new CarPanel();
function createCar(plate, brand, color) {
    var plate = document.getElementById("plate").value;
    var color = document.getElementById("color").value;
    var brand = document.getElementById("brand").value;
    var car = new Car(plate, color, brand);
    car.addWheel(new Wheel(2, "SEAT"));
    var showInfo = document.getElementById('showInfo');
    var elementPlate = document.createElement('div');
    var elementColor = document.createElement('div');
    var elementBrand = document.createElement('div');
    elementPlate.innerHTML = 'MATRÍCULA COCHE :  ' + car.plate;
    showInfo.appendChild(elementPlate);
    elementColor.innerHTML = 'COLOR COCHE :  ' + car.color;
    showInfo.appendChild(elementColor);
    elementBrand.innerHTML = 'MARCA COCHE :  ' + car.brand;
    showInfo.appendChild(elementBrand);
}

"use strict";
//        let form = <HTMLElement>document.getElementById('loginForm');
//          form.addEventListener('submit', (event) => {event.preventDefault(); this.submitForm()});
var CarPanel = /** @class */ (function () {
    function CarPanel() {
        var _this = this;
        var form = document.getElementById('vform');
        form.addEventListener('submit', function (event) { event.preventDefault(); _this.submitForm(); });
    }
    CarPanel.prototype.submitForm = function (plate, color, brand) {
        var plate = document.getElementById("plate").value;
        var color = document.getElementById("color").value;
        var brand = document.getElementById("brand").value;
        var car = new Car(plate, color, brand);
        var elementFirst = document.createElement('pre');
        var elementSecond = document.createElement('pre');
        var elementThird = document.createElement('pre');
        var carInfo = document.getElementById('carInfo');
        elementFirst.innerHTML = 'MATRÍCULA COCHE: ' + car.plate;
        carInfo.appendChild(elementFirst);
        elementSecond.innerHTML = 'COLOR COCHE: : ' + car.color;
        carInfo.appendChild(elementSecond);
        elementThird.innerHTML = 'MARCA COCHE: : ' + car.brand;
        carInfo.appendChild(elementThird);
    };
    return CarPanel;
}());
new CarPanel();

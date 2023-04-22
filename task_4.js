/*
Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. 
Реализуйте его на прототипах.

Определите иерархию электроприборов. Включите некоторые в розетку.
 Посчитайте потребляемую мощность (передайте аргумент). 

Таких приборов должно быть как минимум два (например, настольная лампа и компьютер).
 Выбрав прибор, подумайте, какими свойствами он обладает.
*/

function Electrodevice(name,brand,country) {
    this.name = name;
    this.brand = brand;
    this.made_in=country;
}
Electrodevice.prototype.turnOn = function() {
	console.log(`${this.name} включен`);
}
Electrodevice.prototype.turnOff = function() {
	console.log(`${this.name} выключен`);
}

function ComputerEquipment(name,brand,country, consumption_power,system) {
    this.name = name;
	this.brand=brand,
    this.made_in=country;
	this.power = consumption_power;
    this.system = system;
}

ComputerEquipment.prototype = new Electrodevice ();

ComputerEquipment.prototype.turnOn=function() {
	console.log(`${this.name} ${this.brand} включен от сети`);
}
ComputerEquipment.prototype.turnOff=function() {
	console.log(`${this.name} ${this.brand} выключен от сети`);
}
ComputerEquipment.prototype.reStart = function(){
    console.log(`идет перезагрузка ${this.name}а ${this.brand}`);
}


function LightingDevice(name,brand,country,consumption_power,type) {
    this.name = name;
	this.brand=brand,
    this.made_in=country;
	this.power = consumption_power;
    this.type = type;
}
LightingDevice.prototype = new Electrodevice ();
LightingDevice.prototype.lampBurnedOut=function(){
    console.log(`У ${this.name} перегорела лампа, необходима замена`);
}

const laptop = new  ComputerEquipment('ноутбук','Dell','USA', 80,'Windows 11');
const tableLamp = new  LightingDevice ('Sheratan','Deko-light', 'Germany',2.2,'настольная');

/*laptop.turnOff();// ноутбук Dell выключен от сети

tableLamp.turnOff();// Sheratan выключен

laptop.turnOn();//  ноутбук Dell включен от сети

tableLamp.turnOn();//  Sheratan включен

laptop.reStart();//  идет перезагрузка ноутбука Dell

tableLamp.lampBurnedOut();//  У Sheratan перегорела лампа, необходима замена*/
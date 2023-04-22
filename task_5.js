

    class Electrodevice {
        constructor(name,brand,country) {
            this.name = name;
            this.brand = brand;
            this.made_in=country;
    
        }
    
        turnOn(){
            console.log(`${this.name} включен`)
        }
        turnOff(){
        console.log(`${this.name} выключен`);
        }

    }



   class ComputerEquipment extends Electrodevice    {
        constructor (name,brand,country, consumption_power,system) {
            super(name, brand, country);
	        this.power = consumption_power;
            this.system = system;
        }

        turnOn=function() {
	    console.log(`${this.name} ${this.brand} включен от сети`);
        }
        turnOff=function() {
	    console.log(`${this.name} ${this.brand} выключен от сети`);
        }
        reStart = function(){
        console.log(`идет перезагрузка ${this.name}а ${this.brand}`);
        }
    }


    class LightingDevice extends Electrodevice {
        constructor (name,brand,country,consumption_power,type) {
            super(name,brand,country);
            this.power = consumption_power;
            this.type = type;   
    }
        lampBurnedOut=function(){
            console.log(`У ${this.name} перегорела лампа, необходима замена`);
        }
}



const laptop = new  ComputerEquipment('ноутбук','Dell','USA', 80,'Windows 11');
const tableLamp = new  LightingDevice ('Sheratan','Deko-light', 'Germany',2.2,'настольная');

/*laptop.turnOff();// ноутбук Dell выключен от сети

tableLamp.turnOff();// Sheratan выключен

laptop.turnOn();//  ноутбук Dell включен от сети

tableLamp.turnOn();//  Sheratan включен

laptop.reStart();//  идет перезагрузка ноутбука Dell

tableLamp.lampBurnedOut();//  У Sheratan перегорела лампа, необходима замена
*/


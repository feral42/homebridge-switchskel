/*
    Service.Switch contains one characteristic:
        Characteristic.On
        
    Characteristic.On is a boolean value
*/
var Service, Characteristic;
module.exports = function(homebridge) {
    Service = homebridge.hap.Service;
    Characteristic = homebridge.hap.Characteristic;
    homebridge.registerAccessory("homebridge-switchskel", "SwitchSkel", SwitchSkeleton);
}

class SwitchSkeleton {
    constructor(log, config) {
        this.log = log;
        this.name = config.name;
        this._status = false;
        
        this.service = new Service.Switch(this.name);
        this.characteristicOn = this.service.getCharacteristic(Characteristic.On);
        this.characteristicOn.on('get', this.getStatus.bind(this))
            .on('set', this.setStatus.bind(this));
            
        this.characteristicOn.setValue(this._status);
    }
    
    getStatus(callback) {
        this.log("getStatus", this._status);
        callback(this._status);
    }
    
    setStatus(status, callback) {
        this._status = status;
        this.log("setStatus", this._status);
        this.characteristicOn.setValue(this._status);
        callback();
    }
    
    getServices() {
        return [this.service];
    }
}
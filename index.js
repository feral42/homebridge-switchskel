/*
Service.Switch = function(displayName, subtype) {
  Service.call(this, displayName, '00000049-0000-1000-8000-0026BB765291', subtype);

  // Required Characteristics
  this.addCharacteristic(Characteristic.On);

  // Optional Characteristics
  this.addOptionalCharacteristic(Characteristic.Name);
};

inherits(Service.Switch, Service);

Service.Switch.UUID = '00000049-0000-1000-8000-0026BB765291';


Characteristic.On = function() {
  Characteristic.call(this, 'On', '00000025-0000-1000-8000-0026BB765291');
  this.setProps({
    format: Characteristic.Formats.BOOL,
    perms: [Characteristic.Perms.READ, Characteristic.Perms.WRITE, Characteristic.Perms.NOTIFY]
  });
  this.value = this.getDefaultValue();
};

inherits(Characteristic.On, Characteristic);

Characteristic.On.UUID = '00000025-0000-1000-8000-0026BB765291';
*/

var Service, Characteristic;
module.exports = function(homebridge) {
    Service = homebridge.hap.Service;
    Characteristic = homebridge.hap.Characteristic;
    homebridge.registerAccessory("homebridge-switchskel", "SwitchSkel", SwitchSkeleton);
}

class SwitchSkeleton {
    constructor(log, config) {
        this.name = config.name;
        this._status = false;
    }
    
    getStatus(callback) {
        callback(this._status);
    }
    
    setStatus(status, callback) {
        this._status = status;
        callback();
    }
    
    getServices() {
        return [this.service];
    }
}
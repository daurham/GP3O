"use strict";
/* Install onoff: npm i onoff
 * Docs: https://www.npmjs.com/package/onoff
 * Gpio(gpio, direction [, edge] [, options])
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.GPIOModule = void 0;
const onoff_1 = require("onoff");
// Create the Module class
class GPIOModule {
    constructor(pin, direction = 'out', edge = 'none', options = {}) {
        this.pin = pin;
        this.gpio = new onoff_1.Gpio(this.pin, direction, edge, options);
    }
    toggle() {
        const value = this.gpio.readSync();
        this.gpio.writeSync(value === 0 ? 1 : 0);
    }
    // Helpers:
    // 
    // Add module specific helpers here...
    //
    //
    //
    cleanup() {
        this.gpio.unexport();
    }
}
exports.GPIOModule = GPIOModule;
;

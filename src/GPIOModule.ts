/* Install onoff: npm i onoff
 * Docs: https://www.npmjs.com/package/onoff 
 * Gpio(gpio, direction [, edge] [, options])
 */

import { Direction, Edge, Gpio, Options } from 'onoff';

// Create the Module class
export class GPIOModule {
  private gpio: Gpio;

  constructor(private pin: number, direction: Direction = 'out', edge: Edge = 'none', options: Options = {}) {
    this.gpio = new Gpio(this.pin, direction, edge, options);
  }

  toggle(): void {
    const value = this.gpio.readSync();
    this.gpio.writeSync(value === 0 ? 1 : 0);
  }

  // Helpers:
  // 
  // Add module specific helpers here...
  //
  //
  //

  cleanup(): void {
    this.gpio.unexport();
  }
};


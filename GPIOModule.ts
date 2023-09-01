/* Install onoff: npm i onoff
 * Docs: https://www.npmjs.com/package/onoff 
 * new Gpio(gpio, direction [, edge] [, options])
 */

import { Direction, Edge, Gpio, Options } from 'onoff';

// GPIO Module base class
export class GPIOModule {
  private gpio: Gpio;

  constructor(
    private pin: number,
    direction: Direction = 'out',
    edge: Edge | undefined = undefined,
    options: Options | undefined = undefined
  ) {
    this.gpio = new Gpio(this.pin, direction, edge, options);
  }

  // Helpers:

  toggle(): void {
    const value = this.gpio.readSync();
    this.gpio.writeSync(value === 0 ? 1 : 0);
  }

  on(): void {
    const value = this.gpio.readSync();
    if (value === 0) {
      this.gpio.writeSync(1);
    }
  }

  off(): void {
    const value = this.gpio.readSync();
    if (value === 1) {
      this.gpio.writeSync(0);
    }
  }

  cleanup(): void {
    this.gpio.unexport();
  }

  // Add general module helpers here...

};


/**
 * LED Module
 */
export class LED extends GPIOModule {
  constructor(pin: number,
    direction: Direction = 'out',
    edge: Edge | undefined = undefined,
    options: Options | undefined = undefined
  ) {
    super(pin,
      direction,
      edge,
      options
    )
  }

  // Helpers
  blink(miliseconds: number = 1000): void {
    const LED = this;
    LED.on();
    setTimeout(function() {
      LED.off();
      LED.cleanup(); // ?
    }, miliseconds);
  }
};


/**
 * WaterPump Module
 */
export class WaterPump extends GPIOModule {
  constructor(pin: number,
    direction: Direction = 'out',
    edge: Edge | undefined = undefined,
    options: Options | undefined = undefined
  ) {
    super(pin,
      direction,
      edge,
      options
    )
  }

  // Helpers
  runPump(miliseconds: number = 7000): void {
    const Pump = this;
    Pump.on();
    setTimeout(function() {
      Pump.off();
      Pump.cleanup(); // ?
    }, miliseconds);
  }
};


/**
 * LockBox Module
 */
export class LockBox extends GPIOModule {
  constructor(pin: number,
    direction: Direction = 'out',
    edge: Edge | undefined = undefined,
    options: Options | undefined = undefined
  ) {
    super(pin,
      direction,
      edge,
      options
    )
  }

  // Helpers
  lock(): void {
    const LockBox = this;
    LockBox.on();
  }

  unlock(): void {
    const LockBox = this;
    LockBox.off();
  }
};
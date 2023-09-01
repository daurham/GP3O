import { LED } from "./GPIOModule.js";

// Blink every 10 seconds
const blinkTest = () => {
  const RedLED = new LED(17);
  RedLED.blink();
};

blinkTest();
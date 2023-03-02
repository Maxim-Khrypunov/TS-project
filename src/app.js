"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const displayCipherDecipher_1 = require("./displayCipherDecipher");
const CipherLeftShift_1 = require("./CipherLeftShift");
const CipherRithtShift_1 = require("./CipherRithtShift");
const cipherrightshift = new CipherRithtShift_1.CipherRightShift(2);
const cipherleftshift = new CipherLeftShift_1.CipherLeftShift(3);
(0, displayCipherDecipher_1.displayCipherDecipher)(cipherrightshift, 'aaa');
(0, displayCipherDecipher_1.displayCipherDecipher)(cipherleftshift, 'def');
//# sourceMappingURL=app.js.map
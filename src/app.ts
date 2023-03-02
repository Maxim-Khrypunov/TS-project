import { displayCipherDecipher } from "./displayCipherDecipher"
import { CipherLeftShift } from "./CipherLeftShift"
import { CipherRightShift } from "./CipherRithtShift"

const cipherrightshift:  CipherRightShift = new CipherRightShift(2)
const cipherleftshift: CipherLeftShift = new CipherLeftShift(3)
displayCipherDecipher(cipherrightshift, 'aaa')
displayCipherDecipher(cipherleftshift, 'def')
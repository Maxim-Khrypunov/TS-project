import { Cipher } from "./Сipher";
export function displayCipherDecipher (cipher: Cipher, text: string)
{
    const cipherResult = cipher.cipher(text)
    console.log(`ciphering of text ${text} gives cipher ${cipher.cipher(text)}
    diciphering gives result ${cipher.decipher(cipherResult)}`)
    
}
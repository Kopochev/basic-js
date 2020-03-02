const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function createFinalKey(message, key, finalVar) {
    while (finalVar.length < message.length) {
        for (let i = 0; i < key.length; i++) {
            finalVar.push(key[i]);
        }
    }
    finalVar.splice(message.length, finalVar.length - 1);
    for (let j = 0; j < message.length; j++) {
        if (message[j] === ' ') {
            finalVar.splice(j, 0, ' ');
        }
    }
    finalVar.splice(message.length, finalVar.length - 1);
    return finalVar;
}
class VigenereCipheringMachine {
    constructor(mode) {
        if (mode == false) {
            this.mode = false;
        } else {
            this.mode = true;
        }
    }
    encrypt(message, key) {
        message = message.toUpperCase().split('');
        key = key.toUpperCase().split('');
        let finalKey = [];
        createFinalKey(message, key, finalKey);
        finalKey = finalKey.join('');

        let number = 0;
        let result = '';

        for (let i = 0; i < message.length; i++) {
            if (alphabet.includes(message[i])) {
                number = alphabet.indexOf(message[i]) + alphabet.indexOf(finalKey[i])
                if (number < alphabet.length) {
                    number -= alphabet.length;
                    number += alphabet.length;
                }
                else if (number >= alphabet.length) {
                    number -= alphabet.length;
                }
                result += alphabet[number];
            } else {
                result += message[i];

            }
        }
        if (this.mode == false) {
            result = result.split('').reverse().join('');
            return result;
        } else {
            return result;
        }


    }

    decrypt(message, key) {
        message = message.toUpperCase().split('');
        key = key.toUpperCase().split('');
        let finalKey = [];
        createFinalKey(message, key, finalKey);
        finalKey = finalKey.join('');

        let number = 0;
        let result = '';

        for (let i = 0; i < message.length; i++) {
            if (alphabet.includes(message[i])) {
                number = alphabet.indexOf(message[i]) - alphabet.indexOf(finalKey[i])
                if (number < 0) {
                    number += alphabet.length;
                }
                result += alphabet[number];
            } else {
                result += message[i];

            }
        }
        if (this.mode == false) {
            result = result.split('').reverse().join('');
            return result;
        } else {
            return result;
        }
    }
}

module.exports = VigenereCipheringMachine;

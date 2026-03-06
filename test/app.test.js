const assert = require('assert');
const { add, subtract } = require('../app'); // ../ pour remonter d’un dossier

describe('Calculatrice Tests', () => {
    it('Addition de 2 + 3 doit donner 5', () => {
        assert.strictEqual(add(2, 3), 5);
    });

    it('Soustraction de 5 - 2 doit donner 3', () => {
        assert.strictEqual(subtract(5, 2), 3);
    });
});
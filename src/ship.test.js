import { Ship } from "./ship";
describe('Ship Module', () => {
    test('Ship creation', () => {
        const ship = new Ship(5);
        expect(ship.length).toBe(5);
        expect(ship.hits).toBe(0);
    });
    test('Ship hit()', () => {
        const ship = new Ship(5);
        ship.hit();
        expect(ship.hits).toBe(1);
    });
    test('Ship isSunk() returns false', () => {
        const ship = new Ship(5);
        expect(ship.isSunk()).toBe(false);
    });
    test('Ship isSunk() returns true', () => {
        const ship = new Ship(1);
        ship.hit();
        expect(ship.isSunk()).toBe(true);
    });
})
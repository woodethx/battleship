import { Gameboard } from "./gameboard";

describe('Gameboard module', () => {
    test('Gameboard placeShip() -horizontal', () => {
        const board = new Gameboard();
        board.placeShip(1, 1, 5, false);
        expect(board.board[5][1]).toBe(board.board[1][1]);
        expect(board.board[1][1].length).toBe(5);
    });
    test('Gameboard placeShip() -vertical', () => {
        const board = new Gameboard();
        board.placeShip(1, 1, 5, true);
        expect(board.board[1][5]).toBe(board.board[1][1]);
        expect(board.board[1][1].length).toBe(5);
    });
    test('Gameboard receiveAttack() -miss', () => {
        const board = new Gameboard();
        board.receiveAttack(1,1);
        expect(board.board[1][1]).toBe("O");
    });
    test('Gameboard receiveAttack() -hit', () => {
        const board = new Gameboard();
        board.placeShip(1, 1, 5, true);
        board.receiveAttack(1,1);
        expect(board.board[1][1]).toBe("X");
        expect(board.board[1][2].hits).toBe(1);
    });
});
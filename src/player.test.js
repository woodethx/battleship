import { Player } from "./player";

describe('Player module', () => {
  test('computer space picker stores the move', () => {
    const comp = new Player('CPU-1', true);
    const [x, y] = comp.pickSpace();          
    const key = `${x},${y}`;                  
    expect(comp.used.has(key)).toBe(true);   
  });

  test('computer space picker never repeats a space', () => {
    const comp   = new Player('CPU-1', true);
    const shots  = 100;     
    const seen   = new Set();

    for (let i = 0; i < shots; i++) {
      const [x, y] = comp.pickSpace();
      const key = `${x},${y}`;
      expect(seen.has(key)).toBe(false);
      seen.add(key);
      expect(comp.used.has(key)).toBe(true);
    }
    expect(comp.used.size).toBe(seen.size);
  });
});
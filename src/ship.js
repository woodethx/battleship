export class Ship{
    constructor(cells){
        this.cells = cells;
        this.hits = 0;
    }
    hit(){
        if(this.hits >= this.cells) return "Ship already sunk";
        this.hits ++;
    }
    isSunk(){
        return this.hits >= this.cells;
    }
}
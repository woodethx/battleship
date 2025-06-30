export class Ship{
    constructor(length){
        this.length = length;
        this.hits = 0;
    }
    hit(){
        if(this.hits >= this.length) return "Ship already sunk";
        this.hits ++;
    }
    isSunk(){
        return this.hits >= this.length;
    }
}
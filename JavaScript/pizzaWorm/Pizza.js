class Pizza {
    constructor() {
        this.pos = new Tile(10, 20);
    }

    renderPizza() {
        this.pos.renderImg();
    }

    movePizza() {
        const col = Math.floor(Math.random() * (tileWidth - 2)) + 1;
        const row = Math.floor(Math.random() * (tileHeight - 2)) + 1;
        this.pos = new Tile(col, row);
    }
}
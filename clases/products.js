class Producto {
    constructor(title, price, stock, thumbnail, code) {
        this.id = 0;
        this.title = title;
        this.price = price;
        this.stock = stock;    
        this.thumbnail = thumbnail;
        this.code = code;
    }
}

module.exports = Producto;
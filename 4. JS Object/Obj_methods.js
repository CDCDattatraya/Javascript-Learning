let product = {
    title: 'Campous Shoes',
    size: 10,
    price: 780,
    purchase: function () {
        let msg = `Your product ${this.title} will be deliver very soon.`
        console.log(msg);
    }
};

product.purchase(); // WE CAN ACCESS METHODS OF OBJECT USING DOT OP ONLY
console.log(product.title);
// WE CAN CHANGE OR ADD NEW PROPERTIES USING DOT OP AND SQUARE BRACKET['OBJECT_PROPERTY']
product.feedback = "I like the product"
product.price = 1000;
product['size']= 12;
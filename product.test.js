const { products,resetProducts,  addProduct, removeProduct, getProducts, getProduct, updateProduct} = require('./product');


describe ('addProduct', () => {
    beforeEach(() => {
        resetProducts();
    });

    it('should add a product', () => {
        addProduct('leche', 0.75);
        console.log(products)
        expect(products.length).toBe(1);
        expect(products[0]).toEqual({ id: 1, name: 'leche', price: 0.75 });
    });

    it('id increase by 1 when a product is added', () => {
        addProduct('leche', 0.75);
        addProduct('galletas', 2.50);
        console.log(products)
        expect(products[0].id).toBe(1);
        expect(products[1].id).toBe(2);
    });
    it('should throw an error if name or price are undefined', () => {
        expect(() => addProduct(undefined, undefined)).toThrow('name and price are undefined')
    });
    it('should throw an error if name already exist', () => {
        expect(() => addProduct('leche', 2.50)).toThrow('the product already exist')
    });
});

describe('removeProduct', () => {
    beforeEach(() => {
        resetProducts(); 
        addProduct('leche', 0.75);
    });

    it('should remove a product', () => {
        removeProduct(1);
        expect(getProducts().length).toBe(0);
    });

    it('should throw an error if the product does not exist', () => {
        expect(() => removeProduct(2)).toThrow('Product does not exist');
    });
});

describe('getProduct', () => {
    beforeEach(() => {
        resetProducts();
        addProduct('leche', 0.75);
    });

    it('should return the product id', () => {
        const product = getProduct(1);
        expect(product).toEqual({id:1, name:'leche', price:0.75})
    });
    
    it('should throw an error if the product does not exist', () => {
        expect(() => getProduct(2)).toThrow('product does not exist')
    })
});

describe('updateProduct', () => {
    beforeEach(() => {
        resetProducts();
        addProduct('leche', 0.75);
    });
    it('should update a product', () => {
        updateProduct(1, 'chocolate', 0.75)
        const product = getProduct(1);
        expect(product).toEqual({id:1, name:'chocolate', price:0.75})
    });
    it('should fail when updating a product that does not exist', () => {
        expect(() => updateProduct(2)).toThrow('product does not exist')
    });
    it('should only update the price', () => {
        updateProduct(1, undefined, 2.50);
        const product = getProduct(1);
        expect(product).toEqual({id:1, name:'leche', price:2.50})
    });
    it('should only update the name', () => {
        updateProduct(1, 'café', 0.75);
        const product = getProduct(1);
        expect(product).toEqual({id:1, name:'café', price:0.75})

    })
});
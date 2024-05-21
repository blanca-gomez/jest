let products = [];
let id = 0;

//resetProducts(): reinicia la lista de productos y el id.
function resetProducts(){
    products = [];
    id = 0
};


//addProduct(name, price): agrega un producto a la lista de productos.

function addProduct(name,price){
    if (typeof name === 'undefined' || typeof price === 'undefined') {
        throw new Error('name and price are undefined');
    }
    if (products.find(product => product.name === name)) {
        throw new Error('the product already exists');
    }
    id++; 
    products.push({ id: id, name: name, price: price });
};

//removeProduct(id): elimina un producto de la lista de productos.
function removeProduct(id){
    const index = products.findIndex(product => product.id === id);
    if (index === -1) {
        throw new Error('Product does not exist');
    }
    products.splice(index, 1);
};



//getProducts(): devuelve todos los productos.
function getProducts(){
    return products
};

//getProduct(id): devuelve un producto por su id.
function getProduct(id){
    const product = products.find(product => product.id ===id)
    if(!product){
        throw new Error ('product does not exist')
    }
    return product
};

//updateProduct(id, name, price): actualiza un producto por su id.
function updateProduct(id,name,price){
    const index = products.findIndex((product) => product.id === id)
    if(index === -1){
       throw new Error ('product does not exist')
    }
    if(name != undefined){
        products[index].name = name;
    }
    if(price != undefined){
        products[index].price = price
    }   
};

 module.exports = {
    products,
    addProduct,
    removeProduct,
    getProducts,
    getProduct,
    updateProduct,
    resetProducts
 };
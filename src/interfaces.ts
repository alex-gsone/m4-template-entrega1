interface Product{
    id: number,
    name: Text,
    price: number,
    createdAt: Date,
    updatedAt: Date
};

interface HandleProducts{
    createProduct(data: { name: Text; price: number}): Product;

    getProducts():;

    getOneProduct(id: number): Product;
}
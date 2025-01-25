export interface Product{
    id: number,
    name: Text,
    price: number,
    createdAt: Date,
    updatedAt: Date
};

export interface HandleProducts{
    createProduct(data: { name: string; price: number}): Product;

    getProducts():Product[];

    getOneProduct(id: number): Product | undefined;

    updateProduct(id: number, data: {name?:string; price?: number}): Product;

    deleteProduct(id: number): {mensagem:string};

}


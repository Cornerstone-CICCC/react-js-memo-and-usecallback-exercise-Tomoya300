import { useCallback, useState } from "react";
import GetProductsButton from "./GetProductsButton";

type Product = {
    id: number;
    title: string;
    description: string;
    price: number;
}

const ProductList = () => {
    const [products, setProducts] = useState<Product[]>([])
    
    const fetchProducts = useCallback(async () => { // useCallback is used to memoize the function, meaning it will only re-create the function if the dependencies change. In this case, there are no dependencies, so it will only be created once.
        try {
            const res = await fetch(`https://dummyjson.com/products`);
            const data = await res.json();
            setProducts(data.products);
            console.log(data.products);
        } catch (err) {
            console.log(err)
        }
    }, [])

    return (
        <div>
            <h2>Products List</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                    </li>
                ))}
            </ul>
            <GetProductsButton fetchProducts={fetchProducts} />
        </div>
    )
}

export default ProductList;
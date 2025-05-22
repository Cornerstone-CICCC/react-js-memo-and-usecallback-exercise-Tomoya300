import { memo } from "react";

type Props = {
    fetchProducts: () => void;
}

const GetProductsButton = memo(({ fetchProducts }: Props) => { //memoize the component, meaning it will only re-render if the props change since memoization stores the result of the function call and returns the cached result when the same inputs occur again.
    console.log('Rendered GetProductsButton Component');

    return (
        <button onClick={fetchProducts}>Fetch Products</button>
    )
})

export default GetProductsButton;
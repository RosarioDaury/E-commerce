import { createContext, useEffect, useState } from "react";
import { DB } from "../Services/Firebase";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [filterTag, setFilterTag] = useState("all");

    useEffect(() => {
        let controller = true;

        const getData = async () => {
            await DB.collection('products')
                .get()
                .then((elements) => {
                    const data = []
                    elements.forEach(doc => {
                        data.push(doc.data());
                    })
                    setProducts(data)
                })
        }

        if (controller) {
            getData()
        }

        return () => {
            controller = false
        }
    }, [])

    const data = { products, setFilterTag, filterTag };

    return <ProductsContext.Provider value={data}>{children}</ProductsContext.Provider>
}
import { createContext, useEffect, useState } from "react";
import { DB } from "../Services/Firebase";

export const ClothingContext = createContext();

export const ClothingProvider = ({ children }) => {
    const [clothing, setClothing] = useState([]);

    useEffect(() => {
        const getData = async () => {
            await DB.collection('trending')
                .get()
                .then((elements) => {
                    const data = []
                    elements.forEach(doc => {
                        data.push(doc.data());
                    })
                    setClothing(data)
                })
        }

        getData()
    }, [])

    const data = { clothing };

    return <ClothingContext.Provider value={data}>{children}</ClothingContext.Provider>
}
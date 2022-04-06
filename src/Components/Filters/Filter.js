import { useContext } from "react"
import { ProductsContext } from "../../Context/ProductsContext"
import { Div } from "./Style"

export const Filter = () => {
    const { setFilterTag, filterTag } = useContext(ProductsContext);

    return (
        <Div>
            <h2 onClick={() => setFilterTag("all")} className={filterTag === "all" ? "active" : ""}>Adidas</h2>
            <h4 onClick={() => setFilterTag("sport")} className={filterTag === "sport" ? "active" : ""}>Sports</h4>
            <h4 onClick={() => setFilterTag("casual")} className={filterTag === "casual" ? "active" : ""}>Casual</h4>
            <h4 onClick={() => setFilterTag("baseball")} className={filterTag === "baseball" ? "active" : ""}>Baseball</h4>
            <h4 onClick={() => setFilterTag("basketball")} className={filterTag === "basketball" ? "active" : ""}>Basketball</h4>
        </Div>
    )
}
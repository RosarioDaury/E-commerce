import { useContext } from "react"
import { ProductsContext } from "../../Context/ProductsContext"
import { Div } from "./Style"

export const Filter = () => {
    const { setFilterTag, filterTag } = useContext(ProductsContext);

    return (
        <Div>
            <h3 onClick={() => setFilterTag("all")} className={filterTag === "all" ? "active" : ""}>Adidas</h3>
            <h5 onClick={() => setFilterTag("sport")} className={filterTag === "sport" ? "active" : ""}>Sports</h5>
            <h5 onClick={() => setFilterTag("casual")} className={filterTag === "casual" ? "active" : ""}>Casual</h5>
            <h5 onClick={() => setFilterTag("baseball")} className={filterTag === "baseball" ? "active" : ""}>Baseball</h5>
            <h5 onClick={() => setFilterTag("basketball")} className={filterTag === "basketball" ? "active" : ""}>Basketball</h5>
        </Div>
    )
}
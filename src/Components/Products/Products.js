import { AiFillHeart } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { useData } from "../Hooks/DataHooks";
import { Div } from "./Styles";

export const Card = ({ data, Adding }) => {
    let tag = data?.tag?.toUpperCase();
    const { Add } = useData("shop")
    return (
        <Div>
            <img src={data?.image} alt={data?.name} />
            <div className="data">
                <h3>{data?.name}</h3>
                <h5>{parseFloat(data?.precio || data?.price).toFixed(2)} US$</h5>
            </div>
            <div className="buy">
                <div>
                    <AiFillHeart className="favorite" style={{ width: "25px", height: "25px" }} onClick={() => Adding(data)} />
                    <BsFillCartFill className="cart" style={{ width: "25px", height: "25px" }} onClick={() => Add(data)} />
                </div>

                <p>{tag}</p>
            </div>
        </Div>
    )
}
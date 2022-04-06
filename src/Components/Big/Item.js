import { AiFillHeart } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { useData } from "../Hooks/DataHooks";
import { Div } from "./Style";
export const Item = ({ data, Adding }) => {
    const { Add } = useData("shop");

    return (
        <Div>
            <img src={data?.image} alt="item" />
            <div className="text-big">
                <div className="data">
                    <h2>{data?.name}</h2>
                    <h3>{parseFloat(data?.price).toFixed(2)} US$</h3>
                </div>
                <div className="icons">
                    <AiFillHeart style={{ width: "40px", height: "40px", marginRight: "2rem" }} className="favorite" onClick={() => Adding(data)} />
                    <BsFillCartFill style={{ width: "40px", height: "40px" }} className="cart" onClick={() => Add(data)} />
                </div>
                <div className="info">
                    <h4>
                        This release is now available to adiClub members only. Join the club for free and unlock the best of adidas.
                    </h4>
                </div>
            </div>
        </Div>
    )
}
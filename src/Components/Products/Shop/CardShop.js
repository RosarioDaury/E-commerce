import { Div } from "../Styles";
import { ImExit } from "react-icons/im";

export const CardShop = ({ data, Remove }) => {
    let tag = data?.tag?.toUpperCase();
    return (
        <Div>
            <img src={data?.image} alt={data?.name} />
            <div className="data">
                <h3>{data?.name}</h3>
                <h4>{parseFloat(data?.precio || data?.price).toFixed(2)} US$ X{data.many}</h4>
            </div>
            <div className="buy">
                <div>
                    <ImExit className="cart" style={{ width: "25px", height: "25px" }} onClick={() => Remove(data)} />
                </div>

                <h4>{tag}</h4>
            </div>
        </Div>
    )
}
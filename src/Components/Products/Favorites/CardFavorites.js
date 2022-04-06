import { AiFillDislike } from "react-icons/ai";
import { Div } from "../Styles";

export const CardFavorites = ({ data, Remove }) => {
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
                    <AiFillDislike className="favorite" style={{ width: "25px", height: "25px" }} onClick={() => Remove(data)} />
                </div>

                <h4>{tag}</h4>
            </div>
        </Div>
    )
}
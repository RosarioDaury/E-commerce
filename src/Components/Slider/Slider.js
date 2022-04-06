import { useContext } from "react";
import { ClothingContext } from "../../Context/SliderContext";
import { Card } from "../Products/Products";
import { SliderDiv } from "./SliderStyles"

export const Slider = ({ Adding }) => {
    const { clothing } = useContext(ClothingContext);
    return (
        <div>
            <SliderDiv>
                {clothing?.map(data => <Card data={data} key={Math.floor(Math.random() * 10000)} Adding={Adding} />)}
            </SliderDiv>
        </div>

    )
}
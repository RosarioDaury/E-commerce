import { useContext } from "react";
import { NavBarContext } from "../../Context/NavBarContext";
import { Div } from "./Styles";
import { BsFillCartFill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { favorites, main, shop } from "../../Helpers/URLHelper";
import { useNavigate } from "react-router-dom";

export const Menu = () => {
    const { showNav } = useContext(NavBarContext);
    const navigate = useNavigate();

    return (
        <Div showNav={showNav}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/2560px-Adidas_Logo.svg.png" alt="logo" onClick={() => main(navigate)} />

            <h3>Impossible is Nothing</h3>

            <div>
                <h4 onClick={() => main(navigate)}>All</h4>
                <h4 onClick={() => shop(navigate)}><BsFillCartFill /> Shop</h4>
                <h4 onClick={() => favorites(navigate)}><AiFillHeart /> Favorites</h4>
            </div>
        </Div>
    )
}
import { Div, Header } from "./Styles";
import { BsFillCartFill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { favorites, main, shop } from "../../Helpers/URLHelper";

export const NavBar = () => {
    const navigate = useNavigate();
    return (
        <>
            <Header>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/2560px-Adidas_Logo.svg.png" alt="logo" onClick={() => main(navigate)} />

                <h3>Impossible is Nothing</h3>

                <Div>
                    <h4 onClick={() => main(navigate)}>All</h4>
                    <h4 onClick={() => shop(navigate)}><BsFillCartFill /> Shop</h4>
                    <h4 onClick={() => favorites(navigate)}><AiFillHeart /> Favorites</h4>
                </Div>
            </Header>
        </>
    )

}
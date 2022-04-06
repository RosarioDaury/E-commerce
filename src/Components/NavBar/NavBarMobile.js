import { Header } from "./Styles";
import { AiOutlineMenu } from "react-icons/ai";
import { useContext } from "react";
import { NavBarContext } from "../../Context/NavBarContext";
import { useNavigate } from "react-router-dom";
import { main } from "../../Helpers/URLHelper";

export const NavBarMobile = () => {
    const { setShowNav, showNav } = useContext(NavBarContext)
    const navigate = useNavigate();

    return (
        <Header>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/2560px-Adidas_Logo.svg.png" alt="logo" onClick={() => main(navigate)} />
            <AiOutlineMenu className="bar" onClick={() => setShowNav(!showNav)} />
        </Header>
    )
}
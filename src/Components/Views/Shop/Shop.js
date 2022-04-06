import { useRef } from "react"
import { Menu } from "../../Menu/Menu"
import { Top } from "../../Top/Top"
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { scrollNext, scrollPrev } from "../../../Helpers/SliderHelper";
import { Div } from "./ShopStyles";
import { useData } from "../../Hooks/DataHooks";
import { SliderDiv } from "../../Slider/SliderStyles";
import { NavBar } from "../../NavBar/NavBar";
import { NavBarMobile } from "../../NavBar/NavBarMobile";
import { BsFillCartFill } from "react-icons/bs";
import { Footer } from "../../Footer/Footer";
import { SpamOffer } from "../../SpamOffer/Offer";
import { CardShop } from "../../Products/Shop/CardShop";

export const Shop = () => {
    const refSlider = useRef();

    const { items, Remove } = useData('shop');

    return (
        <Div>
            <Menu />

            <div className="top">
                <Top />
            </div>

            <div className="navbar">
                <NavBar />
            </div>

            <div className="navbarmobile">
                <NavBarMobile className="navbarmobile" />
            </div>

            <div className="title-section">
                <h2>Welcome to Your shopping cart</h2>
            </div>


            <div className="slider-buttons1">
                <h2> <BsFillCartFill /> Shopping Cart</h2>
                <div>
                    <AiOutlineArrowLeft className="left" style={{ width: "60px", heigth: "60px" }} onClick={() => scrollPrev(refSlider.current)} />
                    <AiOutlineArrowRight className="right" style={{ width: "60px", heigth: "60px" }} onClick={() => scrollNext(refSlider.current)} />
                </div>
            </div>


            <div className="slider1" ref={refSlider}>
                <SliderDiv>
                    {items && items?.map(item => <CardShop data={item} Remove={Remove} />)}
                </SliderDiv>
            </div>

            <div className="footer">
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <Footer color="grey" />
            </div>


            <div className="offer">
                <SpamOffer />
            </div>

        </Div>
    )
}
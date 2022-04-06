import { useRef } from "react"
import { Menu } from "../../Menu/Menu"
import { Top } from "../../Top/Top"
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { scrollNext, scrollPrev } from "../../../Helpers/SliderHelper";
import { Div } from "./FavoriteStyles";
import { useData } from "../../Hooks/DataHooks";
import { SliderDiv } from "../../Slider/SliderStyles";
import { NavBar } from "../../NavBar/NavBar";
import { NavBarMobile } from "../../NavBar/NavBarMobile";
import { CardFavorites } from "../../Products/Favorites/CardFavorites";
import { AiFillHeart } from "react-icons/ai";
import { Footer } from "../../Footer/Footer";
import { SpamOffer } from "../../SpamOffer/Offer";

export const Favorites = () => {
    const refSlider = useRef();

    const { items, Remove } = useData('favorite');

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
                <h2>Welcome to the Favorite tap</h2>
            </div>

            <div className="slider-buttons1">
                <h2><AiFillHeart /> Favorite Products</h2>
                <div>
                    <AiOutlineArrowLeft className="left" style={{ width: "60px", heigth: "60px" }} onClick={() => scrollPrev(refSlider.current)} />
                    <AiOutlineArrowRight className="right" style={{ width: "60px", heigth: "60px" }} onClick={() => scrollNext(refSlider.current)} />
                </div>
            </div>

            <div className="slider1" ref={refSlider}>
                <SliderDiv>
                    {items && items?.map(item => <CardFavorites data={item} Remove={Remove} key={Math.random().toString(16).slice(2)} />)}
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
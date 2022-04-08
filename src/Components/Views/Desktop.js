import { useContext, useRef, useState } from "react";
import { ProductsContext } from "../../Context/ProductsContext";
import { Item } from "../Big/Item";
import { Filter } from "../Filters/Filter";
import { Menu } from "../Menu/Menu";
import { NavBar } from "../NavBar/NavBar";
import { NavBarMobile } from "../NavBar/NavBarMobile";
import { Card } from "../Products/Products";
import { Top } from "../Top/Top";
import { Desk } from "./Desktop-styles";
import { AiFillFire } from "react-icons/ai";
import { MdOutlineSportsBasketball } from "react-icons/md";
import { Slider } from "../Slider/Slider";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { scrollNext, scrollPrev } from "../../Helpers/SliderHelper";
import { useData } from "../Hooks/DataHooks";
import { SpamOffer } from "../SpamOffer/Offer";
import { Footer } from "../Footer/Footer";

export const DesktopLay = () => {
    const { products, filterTag } = useContext(ProductsContext);
    const { Add } = useData('favorite');
    const [header, setHeader] = useState(false);

    let data;

    if (filterTag === "all") {
        data = products;
    }

    if (filterTag === "sport") {
        data = products.filter(doc => doc.tag === "sport")
    }

    if (filterTag === "casual") {
        data = products.filter(doc => doc.tag === "casual")
    }

    if (filterTag === "baseball") {
        data = products.filter(doc => doc.tag === "baseball")
    }

    if (filterTag === "basketball") {
        data = products.filter(doc => doc.tag === "basketball")
    }

    const ref = useRef();

    window.addEventListener("scroll", () => {
        if (window.scrollY > 1500) {
            setHeader(true);
        } else {
            setHeader(false)
        }
    })

    return (
        <Desk>
            <Menu />

            <div className="offer">
                <SpamOffer />
            </div>

            <div className="top">
                <Top />
            </div>

            <div className={`nav-bar-desktop ${header ? "hidden" : ""}`} >
                <NavBar />
            </div>

            <div className="nav-bar-mobile">
                <NavBarMobile />
            </div>

            <div className="big">
                <div className="items-big-1">
                    <div className="title-section"><h2>What is on fire right now</h2> <AiFillFire style={{ width: "50px", height: "50px", color: "red" }} /> </div>
                    <p>Through sports, we have the power to change lives. Sports keep us fit. They keep us mindful. They bring us together.adidas is about more than sportswear and workout clothes. We partner with the best in the industry to co-create. This way we offer our fans the sporting goods, style and clothing that match the athletic needs, while keeping sustainability in mind. We are here to support creators. Improve their game. Create change. And we think about the impact we have on our world.</p>
                    <br />
                    {products[22] !== undefined ? <Item data={products[22]} Adding={Add} /> : <></>}
                </div>

                <div className="items-big-2">
                    {products[20] !== undefined ? <Item data={products[20]} Adding={Add} /> : <></>}
                </div>

                <br />
                <br />
                <br />
                <br />
            </div>

            <div className="slider-title">
                <br />
                <div className="title-section"><h2>Clothing</h2> <MdOutlineSportsBasketball style={{ marginLeft: "5px", color: "black", width: "50px", height: "50px" }} /></div>
                <p>Through sports, we have the power to change lives. Sports keep us fit. They keep us mindful. They bring us together. adidas is about more than sportswear and workout clothes. We partner with the best in the industry to co-create. This way we offer our fans the sporting goods, style and clothing that match the athletic needs, while keeping sustainability in mind. We are here to support creators. Improve their game. Create change. And we think about the impact we have on our world.</p>
                <br />
            </div>

            <div className="slider-buttons">
                <div>
                    <AiOutlineArrowLeft className="left" style={{ width: "60px", heigth: "60px" }} onClick={() => scrollPrev(ref.current)} />
                    <AiOutlineArrowRight className="right" style={{ width: "60px", heigth: "60px" }} onClick={() => scrollNext(ref.current)} />
                </div>
            </div>

            <div className="slider" ref={ref}>
                <Slider Adding={Add} />
            </div>


            <div className="filter">
                <Filter />
                <br />
                <br />
            </div>

            <div className="products">
                {data?.map(data => <Card data={data} key={Math.random().toString(16).slice(2)} Adding={Add} />)}
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

        </Desk>
    )
}
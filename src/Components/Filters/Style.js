import styled from "styled-components";

export const Div = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100vw;
    height: 50px;
    color: black;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    box-shadow: 2px 1px 1px 2px rgb(20, 20, 20, .2);
    background-image: url(https://i.pinimg.com/474x/71/88/d5/7188d5a86064bebddda1d4d97c38150a--adidas-sportswear-running-wear.jpg);
    h4:hover,
    h2:hover{
        cursor: pointer;
        color: rgb(0, 0, 0, .2);
    }

    h4:visited,
    h2:visited{
        cursor: pointer;
        color: rgb(0, 0, 0, .2);
    }

    .active{
        color: grey;
    }

    @media (max-width: 1200px){
        flex-direction: column;
        height: auto;
    }
`
import styled from "styled-components";

export const Div = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: flex-end;
    width: 100vw;
    height: 80px;
    color: black;
    box-shadow: 2px 1px 1px 2px rgb(20, 20, 20, .2);
    background-color: white;
    font-size: 16px;
    font-family: Helvetica, Arial, sans-serif;
    letter-spacing: 1.87px;
    font-weight: 300;
    text-transform: uppercase;

    h3:hover,
    h5:hover{
        cursor: pointer;
        color: rgb(0, 0, 0, .2);
    }

    .active{
        color: grey;
    }

    @media (max-width: 1200px){
        flex-direction: column;
        height: auto;
        align-items: center;
    }
`
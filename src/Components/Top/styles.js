import styled from "styled-components";

export const Div = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background: black;
    color: white;
    height: auto;
    width: 100%;
    font-size: .8rem;
    box-sizing: border-box;

    @media (max-width: 1200px){
        font-size: .2rem;
        text-align: center;
    }
`
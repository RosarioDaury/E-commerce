import styled from "styled-components";

export const Div = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: flex-end;
    width: 100vw;
    height: 70px;
    color: black;
    box-shadow: 2px 1px 1px 2px rgb(20, 20, 20, .2);
    h4:hover,
    h2:hover{
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
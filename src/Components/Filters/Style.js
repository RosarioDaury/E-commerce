import styled from "styled-components";

export const Div = styled.div`
    display: flex;
    justify-content: space-between;
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

    .all-products {
        width: 30%;
        display: flex;
        box-sizing: border-box;
        justify-content: center;
    }

    .filters {
        width: 50%;
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        margin-right: 10rem;
    }

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
        height: 125px;
        align-items: center;

        .filters{
            width: 90%;
            margin: 0;
            font-size: .7rem;
        }
    }
`
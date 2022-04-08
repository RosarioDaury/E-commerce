import styled from "styled-components"

export const Div = styled.div`
    width: 300px ;
    display: flex;
    flex-direction: column;
    border: 1px solid rgb(20, 20, 20, .1);
    background: white; 
    background-size: cover;

    &:hover{
        border: 1px solid black;
    }

    img{
        width: auto;
        height: 300px;
    }

    p{
        font-size: .7rem;
    }
    .data{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: .3rem;
        box-sizing: border-box;
    }

    .buy{
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        padding: 1rem;
    }

    @media (max-width: 1200px){
        width: 175px;
        font-size: .8rem;
        text-align: center;

        img{
            width: auto;
            height: 170px;
        }

        .data{
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .buy{
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    }

`
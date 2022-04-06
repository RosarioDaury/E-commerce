import styled from "styled-components"

export const Div = styled.div`
    max-width: 200px ;
    display: flex;
    flex-direction: column;
    padding: .5rem;
    border: 1px solid rgb(20, 20, 20, .1);
    background-image: linear-gradient(rgb(250, 250, 250, .5), rgb(250, 250, 250, .5)),url(https://i.pinimg.com/474x/71/88/d5/7188d5a86064bebddda1d4d97c38150a--adidas-sportswear-running-wear.jpg); 
    background-size: cover;
    margin-bottom: 1rem;

    img{
        width: auto;
        height: 200px;
    }

    p{
        font-size: .7rem;
    }
    .data{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    .buy{
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
    }

    @media (max-width: 1200px){
        width: 130px;
        padding: 0;
        img{
            width: 130px;
            height: 120px;
            margin: 0 auto;
        }

        .data{
            flex-direction: column;
            align-items: center;
        }

        .buy{
            flex-direction: column;
            align-items: center;
        }
    }

`
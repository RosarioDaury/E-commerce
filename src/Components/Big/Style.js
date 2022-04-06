import styled from "styled-components";

export const Div = styled.div`
    width: 80vw;
    height: 400px;
    margin: 2rem auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    box-shadow: 1px 2px 2px 3px rgb(20, 20, 20, .5);
    background: rgb(250, 250, 250, .5);
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 20px;

    .text-big{
        width: 60%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }


    img{
        width: 40%;
        height: 100%;
        border-radius: 20px;
    }

    .data{
        width: 70%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        color: #3a3a3a;

        h2{
            padding-right: 4rem;
            font-size: 2rem;
        }
    }

    .icons{
        width: 70%;
        display: flex;
        justify-content: start;
        color: #3a3a3a;
    }

    .info{
        width: 90%;
        display: flex;
        justify-content: start;
        color: blue;
        font-weight: bolder;
    }

    
    @media (max-width: 1200px){
        flex-direction: column;
        width: 90%;
        height: auto;
        font-size: .8rem;

        img{
            width: 100%;
            height: 300px; 
            padding-right: 0;
        }

        .data{
            flex-direction: column;
            justify-content: center;
            align-items: center;

            h2{
                font-size: 1.5rem;
                padding-right:0;
            }
        }

        .icons{
            width: 100%;
            margin: 1rem 0;
            justify-content: center;
        }

        .info{
            padding: 2rem;
        }
    }

`
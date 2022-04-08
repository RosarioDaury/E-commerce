import styled from "styled-components";

export const Header = styled.header`
        margin: 0 0;
        width: 100%;
        height: 13vh;
        display: flex;
        justify-content: space-between;
        align-items: end;
        color: grey;
        font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        box-shadow: 1px 2px 2px 3px rgb(20, 20, 20, .3);
        background-color: white;
        font-size: 13px;
        font-family: Helvetica, Arial, sans-serif;
        letter-spacing: 1.87px;
        font-weight: 300;
        text-transform: uppercase;

        img{
            width: 80px;
            height: 50px;
            margin: auto 4rem;
            cursor: pointer;
        }

        h3{
            position: absolute;
            top: 10;
            left: 45%;
        }

        .bar{
            color: black ;
            width: 50px;
            height: 50px;
            margin-right: 5rem;
            align-self: center;

            :hover{
                cursor: pointer;
            }
        }
    `

export const Div = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: end;
        width: 16%;
        margin-right: 6rem;
        color: black;


        h4:hover{
            cursor: pointer;
            color: white;
        }
    `
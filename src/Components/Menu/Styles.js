import styled from "styled-components";


export const Div = styled.div`
    background: white;
    width: 60vw;
    height: 100vh;
    color: grey;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    transform: ${({showNav}) => showNav ? 'translateX(0)' : 'translateX(-100%)' };
    transition: transform 1s ease-in-out;

    img{
        width: 80px;
        height: 40px;
        cursor: pointer;
    }

    h4:hover{
        cursor: pointer;
        color: white;
    }
`
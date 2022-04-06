import styled from "styled-components";

export const Div = styled.div`
    height: auto;
    width: 100vw;
    box-sizing: border-box;
    padding: 4rem;
    background: url(https://papers.co/wallpaper/papers.co-mn03-city-bokeh-night-street-nature-36-3840x2400-4k-wallpaper.jpg);
    display: flex;
    justify-content: space-evenly;
    
    
    p{
        color: white;
        width: 40%;
        font-weight: bolder;
    }

    @media (max-width: 1200px) {
        flex-direction: column;
        padding: 2rem;
        p{width: 100%;}
    }
`
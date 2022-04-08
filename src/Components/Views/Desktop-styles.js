import styled from "styled-components";

export const Desk = styled.div`
    width: 100%;
    height: auto;
    display: grid;
    grid-template-areas: 'top-tag   top-tag   top-tag'
                         'nav-bar   nav-bar   nav-bar'
                         'big       big       big'
                         'slider-title         slider-title    slider-title'
                         'buttons   buttons   buttons'
                         'slider    slider    slider'
                         'filters   filters   filters'
                         'products  products  products'
                         'products  products  products'
                         'footer    footer    footer'
                         'offer     offer     offer';
    grid-gap: 0;

    .footer{
        grid-area: footer;
    }

    .offer{
        grid-area: offer;
    }

    .title-section{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .top{
        grid-area: top-tag;
    }  

    .nav-bar-desktop{
        grid-area: nav-bar;
        position: sticky;
        top: 0;
        transition: all .3s ease-in-out;
    }

    .hidden{
        opacity: 0;
        visibility: hidden;
    }
    
    .nav-bar-mobile{
        display: none;
        grid-area: none;
    }
    
    .items-big-1{
        text-align: left;
        color: black;

        .title-section,
        p{
            width: 100%;
            margin: 0 auto;
            font-weight: lighter;
            font-style: italic;
            font-size: 1rem;
            box-sizing: border-box;
            padding: 0 2rem;
            background-image: linear-gradient(rgb(250, 250, 250, .8), rgb(250, 250, 250, .8)),url(https://images.pexels.com/photos/4914808/pexels-photo-4914808.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
            background-attachment: fixed;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
        }

        p{
            padding-bottom: 2rem;
        }

    }

    .items-big-2{
        text-align: left;
        color: white;

        .title-section,
        p{
            width: 90%;
            margin: 0 auto;
            font-weight: lighter;
            font-style: italic;
            font-size: 1.3rem;
        }

    }

    .big{
        background-image: url(https://images.pexels.com/photos/4914808/pexels-photo-4914808.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        width: 100vw;
        grid-area: big;  
    }
    

    .slider-title{
        width: 100%;
        margin: 0 auto;
        grid-area: slider-title;
        text-align: left;
        color: black;
        font-size: 1rem;
        background-image: linear-gradient(rgb(250, 250, 250, .8), rgb(250, 250, 250, .8)),url(https://images.pexels.com/photos/4914808/pexels-photo-4914808.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        box-sizing: border-box;
        padding: 0 3rem;
        
    }

    .slider-buttons{
        width: 100%;
        box-sizing: border-box;
        padding: 2rem;
        background-image: url(https://images.pexels.com/photos/4914808/pexels-photo-4914808.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        justify-content: space-between;
        align-items: center;
        grid-area: buttons;
        color: white;
        

        div{
            .left,
            .right{
                margin-right: 15px;
                padding: 1rem;
                background-color: white;
                color: black;
                transition: all .3s ease-in-out;
            }

            .left:hover,
            .right:hover{
                cursor: pointer;
                background-color: grey;
                color: black;
                padding: 1.1rem;
            }
        }
    }

    .slider{
        width: 100%;
        box-sizing: border-box;
        height: auto;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        grid-area: slider;
        overflow-x:scroll;
        padding: 2rem 2rem;
        background-image: url(https://images.pexels.com/photos/4914808/pexels-photo-4914808.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    
        &::-webkit-scrollbar{
            background-color: rgb(156, 155, 155, .3);
            border-radius: 20px;
        }

        &::-webkit-scrollbar-thumb{
            background-color: rgb(156, 155, 155, .6);
            border-radius: 20px;
        }


        @media (max-width: 1200px){
            &::-webkit-scrollbar{
                background-color: transparent;
            }

            &::-webkit-scrollbar-thumb{
                background-color: transparent;
            }

        }
    }

    .filter{
        grid-area: filters;
    }

    .products{
        grid-area: products;
        width: 95vw;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: .1rem;
        justify-items: center;
        justify-content: center;
        box-sizing: border-box;
        margin: 0 auto;
    }

    @media (max-width: 1250px){
        .products{
            grid-template-columns: repeat(auto-fit, minmax(145px, 1fr));
        }

        .nav-bar-desktop{
            display: none;
            grid-area: none;
        }

        .nav-bar-mobile{
            display: flex;
            grid-area: nav-bar-mobile;
        }

        .slider-buttons{
            display: none;
        }


        grid-template-areas: 'top-tag   top-tag   top-tag'
                            'nav-bar-mobile   nav-bar-mobile   nav-bar-mobile'
                            'big              big              big '
                            'slider-title         slider-title     slider-title'
                            'slider    slider    slider'
                            'filters   filters   filters'
                            'products  products  products'
                            'products  products  products'
                            'footer    footer    footer'
                            'offer     offer     offer';

    }
`


import styled from "styled-components";

export const Div = styled.div`
    .title-section{
        width: 100%;
        text-align: center;
        margin: 0 auto;
        grid-area: title;
        background-image:linear-gradient(rgb(250, 250, 250, .8), rgb(250, 250, 250, .8)), url(https://images.pexels.com/photos/4914808/pexels-photo-4914808.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        color: black;
    }

    .slider1{
        width: 95%;
        height: auto;
        display: flex;
        flex-direction: column;
        margin: 3rem auto;
        overflow-x:scroll;
        
        &::-webkit-scrollbar{
            background-color: rgb(156, 155, 155, .3);
            border-radius: 20px;
        }

        &::-webkit-scrollbar-thumb{
            background-color: rgb(156, 155, 155, .6);
            border-radius: 20px;
        }


        @media (min-width: 1200px){
            &::-webkit-scrollbar{
                background-color: transparent;
            }

            &::-webkit-scrollbar-thumb{
                background-color: transparent;
            }
        }
    }


    .slider-buttons1{
        width: 90%;
        margin: auto;
        margin-top: 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        grid-area: buttons;

        div{
            .left,
            .right{
                padding: 1rem;
                background-color: white;
                transition: all .3s ease-in-out;
            }

            .left:hover,
            .right:hover{
                cursor: pointer;
                background-color: grey;
            }
        }
    }

    .top{
        grid-area: top-header;
    }

    .navbar{
        margin: 0;
        grid-area: navbar;
    }


    .slider1{
        grid-area: slider1;
        width: 100%;
        margin: 0 auto;
        box-sizing: border-box;
        padding: 2rem 2rem;
        background-image:url(https://images.pexels.com/photos/4914808/pexels-photo-4914808.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .navbarmobile{
        grid-area: mobile;
    }

    .slider-buttons1{
        grid-area: buttons1;
        width: 100%;
        margin: 0 auto;
        box-sizing: border-box;
        padding: 0 2rem;
        background-image: linear-gradient(rgb(250, 250, 250, .8), rgb(250, 250, 250, .8)),url(https://images.pexels.com/photos/4914808/pexels-photo-4914808.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }


    .navbarmobile{
        display: none;
    }

    .footer{
        grid-area: footer;
    }

    .offer{
        grid-area: offer;
    }

    width: 100%;
    height: auto;
    display: grid;
    grid-template-areas: 'title           title          title'
                          'top-header      top-header     top-header'
                          'navbar         navbar         navbar'
                          'buttons1       buttons1       buttons1'
                          'slider1        slider1        slider1'
                          'footer         footer         footer'
                          'offer          offer          offer';


    @media (max-width: 1200px){
        .navbar{
            display: none;
        }

        .slider-buttons1{
            display: none;
            grid-area: none;
        }

        .navbarmobile{
            grid-area: mobile;
            display: flex;
        }

        grid-template-areas: 
                             'top-header      top-header     top-header'
                             'mobile          mobile         mobile'
                             'title           title          title'
                             'slider1         slider1        slider1'
                             'footer          footer         footer'
                              'offer          offer          offer';

    }

`
import styled from "styled-components";
import {themeColor} from "../../../theme/color";

const HeroBody = styled.div`
    width: 100%;
    height: auto;
    background: linear-gradient(to left, rgba(122,118,255,0.09), ${themeColor.WHITE})
`

const InnerHero = styled.div`
    width: 100%;
    height: auto;
    & div.blog_hero-img{
        width: 50%;
        height: 400px;
        background-size: cover!important;
    }
    & h1{
        font-size: 45px;
        margin: 0;
        width: 80%;
    }
    & div.blog_hero-desc{
        padding-top: 50px;
        width: 50%;
        height: 100%;
        & span {
            color: ${themeColor.MAIN}
        }
        & button{
            margin-top: 40px ;
        }
    }
`

const InnerHeroSection = styled.div`
    width: 50%;
    height: 100%;
`

export {
    HeroBody,
    InnerHero,
    InnerHeroSection
}
import React from 'react'
import {Link} from "react-router-dom"
import Wish from "./Wish/Wish"
import { WishesContainer, TopContainer, Left, ButtonNavs, WishesButton, WisheButton, Right, ImageHolder } from "./WishesStyle"
import smile from "../../images/precious-full.png"

function Wishes() {
    return (
        <TopContainer>
            <Left>
                <ButtonNavs>
                    <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                        <WishesButton>home</WishesButton>
                    </Link>
                    <Link to="/form" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                        <WisheButton>wish me</WisheButton>
                    </Link>
                </ButtonNavs>
                <WishesContainer>
                    <Wish name="Moses" wishContent="Wish you a happy birthday" />
                    <Wish name="Blessing" wishContent="Wish you a happy birthday" />
                <Wish name="Kunle" wishContent="Wish you a happy birthday" />
                </WishesContainer>
            </Left>
            <Right>
                <ImageHolder>
                    <img src={ smile } alt="smile" style={ {
                    height: "inherit",
                    width: "inherit",
                    objectFit: "cover",
                    border: "none",
                    borderRadius: "100%"
                } }/>
                </ImageHolder>
            </Right>
        </TopContainer>
  )
}

export default Wishes
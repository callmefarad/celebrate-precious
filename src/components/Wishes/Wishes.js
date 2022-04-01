import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getWishes} from "../../actions/wish";
import {Link} from "react-router-dom"
import Wish from "./Wish/Wish"
import { WishesContainer, TopContainer, Left, ButtonNavs, WishesButton, WisheButton, Right, ImageHolder } from "./WishesStyle"
import smile from "../../images/precious-full.png"
import moment from 'moment';
import WellWishers from '../WellWishers/WellWishers'

function Wishes() {
    const dispatch = useDispatch();
    const wishes = useSelector( ( state ) => state.wishes?.items );

    useEffect(() => {
        dispatch(getWishes());
    }, []);
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
                { wishes.map( ( wish ) => (
                <WishesContainer key={wish.id}>
                        <Wish name={ wish.name } wishContent={ wish.wish } wishTime={moment(wish.createdAt).fromNow()} />
                </WishesContainer>
                ) ) }
                <WellWishers />
            </Left>
            <Right>
                <ImageHolder>
                    <img src={ smile } alt="smile" style={ {
                    height: "inherit",
                    width: "inherit",
                    objectFit: "cover",
                    border: "none",
                    borderRadius: "100%",

                } }/>
                </ImageHolder>
            </Right>
        </TopContainer>
  )
}

export default Wishes
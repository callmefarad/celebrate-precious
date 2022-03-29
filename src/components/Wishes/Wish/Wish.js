import React from "react";
import { WishContainer, WishName, WishContent, PostTime, PreTime, ActualTime } from "./WishStyle"
import Reply from '../../Reply/Reply'

function Wish ( props ) {
  return (
        <WishContainer>
          <WishName>{props.name}</WishName>
          <WishContent>{ props.wishContent}</WishContent>
          <PostTime>
            <PreTime>Posted:</PreTime>
            <ActualTime>{ props.wishTime}</ActualTime>
          </PostTime>
          <Reply />
        </WishContainer>
    
  )
}

export default Wish
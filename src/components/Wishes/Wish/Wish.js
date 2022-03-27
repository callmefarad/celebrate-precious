import React from 'react'
import {WishContainer, WishName, WishContent} from "./WishStyle"

function Wish(props) {
  return (
    <WishContainer>
          <WishName>{props.name}</WishName>
          <WishContent>{ props.wishContent }</WishContent>
    </WishContainer>
  )
}

export default Wish
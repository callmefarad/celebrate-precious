import React from 'react'
import {ReplyContainer, ImageHolder, Greeting, Emoji } from "./ReplyStyles"
import smile from '../../images/precious-full.png'
function Reply() {
  return (
      <ReplyContainer>
          <ImageHolder>
                    <img src={ smile } alt="smile" style={ {
                    height: "inherit",
                    width: "inherit",
                    objectFit: "cover",
                    border: "none",
                    borderRadius: "100%"
                } }/>
                </ImageHolder>
          <Greeting>Super excited to get your wish</Greeting>
          <Emoji>✌</Emoji>
    </ReplyContainer>
  )
}

export default Reply
import React from 'react'
import {FooterWrapper, Copy} from "./FooterStyles"

function Footer () {
    let date = new Date();
    const year = date.getFullYear();
    
  return (
      <FooterWrapper>
          <Copy>&copy; Precious {year}</Copy>
    </FooterWrapper>
  )
}

export default Footer
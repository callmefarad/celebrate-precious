import React from 'react'
import { Link } from 'react-router-dom';
import { LandContainer, CardContainer, ImageWrapper, Name, Desc, NavButton, AllWish, Wish, Text, Career } from './LandingPageStyles'
const profile = require('../../images/profile-pics.png')

const LandingPage = () => {
  return (
      <LandContainer>
          <CardContainer>
              <ImageWrapper>
                  <img src={profile } alt="precious" style={ {
                      height: "inherit",
                      width: "inherit",
                      borderRadius: "50%",
                      objectFit: "cover"
                  }} />
              </ImageWrapper>
              <Name>precious onuegbu</Name>
              <Desc>it's my birthday, celebrate with me</Desc>
              <NavButton>
                   <Link to="/wishes" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                  <AllWish>
                    <Text>wishes</Text>
                  </AllWish>
                  </Link>
                  <Link to="/form" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                  <Wish>
                    <Text>wish me</Text>
                  </Wish>
                  </Link>
              </NavButton>
              <Link to="/career" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                  <Career>
                    <Text>support my career</Text>
                  </Career>
                  </Link>
        </CardContainer>
      </LandContainer>
  )
}

export default LandingPage;
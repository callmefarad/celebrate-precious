import React from 'react'
import { FormContainer, Surname, FirstName, FormWrapper, FormWrap, Name, Msg, SendButton, Text, SelfWish } from './FormStyle'
// import { Button } from '@mui/material';

function Form() {
  return (
      <FormContainer>
          <FormWrap>
              <Surname>happy birthday</Surname>
              <FirstName>precious onuegbu</FirstName>
              <SelfWish>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus bibendum porta leo vitae volutpat. Curabitur eu ligula ac nulla vulputate lacinia vel vel tellus. Fusce sed velit enim.
              </SelfWish>
              <FormWrapper>
                  <Name
                      style={ { } }
                      placeholder='Enter Your Name'
                  />
                  <Msg
                      style={ { } }
                      placeholder='Enter Your Wish'
                  />
                  <SendButton>
                      <Text>send</Text>
                  </SendButton>
            </FormWrapper>
          </FormWrap>
      </FormContainer>
  )
}

export default Form
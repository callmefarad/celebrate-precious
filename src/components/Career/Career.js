import React from 'react'
import { CareerContainer, CareerCard, CardContent1, CardContent2, CardContentText, Account, AccountDetails, Name, Cover, Value, Button } from "./CareerStyles"
import { Link } from "react-router-dom";

function Career() {
  return (
      <CareerContainer>
          <CareerCard>
              <CardContent1>
                  <CardContentText>
                    Help support my dream and career in Tech so i can write the required exams required for this journey as a software engineer.
                    This really mean a lot to me, God bless you as you support. 🙇‍♀️
                  </CardContentText>
              </CardContent1>
              <CardContent2>
                  <Account>account details</Account>
                  <AccountDetails>
                      <Cover>
                          <Name>Bank:</Name>
                          <Value>Gtbank</Value>
                      </Cover>
                      <Cover>
                          <Name>Name:</Name>
                          <Value>Onuegbu c. precious</Value>
                      </Cover>
                      <Cover>
                          <Name>Accout:</Name>
                          <Value>0573230405</Value>
                      </Cover>
                  </AccountDetails>
              </CardContent2>
              <Link to="/" style={{textDecoration: "inherit"}}>
              <Button>
                Home
              </Button>
              </Link>
          </CareerCard>
    </CareerContainer>
  )
}

export default Career
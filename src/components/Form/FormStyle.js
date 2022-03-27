import styled from "styled-components"
import wishMe from "../../images/wish-me-page-bg.png"

export const FormContainer = styled.div`
// background-color: blue;
background-image: url(${wishMe});
// background-position: center;
background-size: cover;
background-repeat: no-repeat;
height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;
justify-content: center;

@media (max-width: 425px){
    // background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    // height: 70vh;
    height: auto;
    width: 100vw;
}
@media (max-width: 375px){
    height: 100vh;
}
@media (max-width: 320px){
    height: auto;
}
`;

export const FormWrap = styled.div`
// background-color: grey;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 100px;
margin-bottom: 100px;
margin-left: 100px;
padding: 40px;
width: 40%;
height: auto;

@media (max-width: 768px) {
// align-self: center;
margin-left: 0px;
margin-top: 0px;
margin-bottom: 0px;
width: 60%;
height: 90vh;
}
@media (max-width: 425px) {
align-self: center;
margin-left: 0px;
margin-bottom: 0px;
margin-top: 0px;
padding: 0px;
height: 100vh;
width: 100%;
}
`;

export const Surname = styled.div`
font-family: Poppins;
font-weight: bold;
text-transform: capitalize;
font-size: 50px;

@media (max-width: 768px){
    margin-top: 0px;
}
@media (max-width: 425px){
    margin-top: 25px;
    font-size: 40px;
}
@media (max-width: 375px){
    font-size: 35px;
}
@media (max-width: 320px){
    font-size: 30px;
}
`;
export const FirstName = styled.div`
font-family: Poppins;
font-weight: 500;
text-transform: capitalize;
font-size: 26px;

@media (max-width: 425px){
    font-size: 20px;
}
@media (max-width: 375px){
    font-size: 18px;
}
@media (max-width: 320px){
    font-size: 16px;
}
`;

export const SelfWish = styled.div`
// background-color: red;
display: flex;
flex-direction: column;
align-items: center;
height: auto;
width: 70%;
margin-top: 15px;
margin-bottom: 15px;
color: #3A3A3A;
padding: 20px;

@media (min-width: 425px){
width: 80%;
}
@media (min-width: 375px){
width: 90%;
}
@media (min-width: 320px){
width: 90%;
}
`;

export const FormWrapper = styled.div`
// background-color: blue;
height: auto;
width: 70%;
padding: 20px;
display: flex;
flex-direction: column;
align-items: center;

@media (min-width: 425px){
width: 100%;
}
@media (min-width: 375px){
width: 90%;
}
@media (min-width: 320px){
width: 90%;
}
`;
export const Name = styled.input`
height: 50px;
width: 90%;
border: none;
border-radius: 4px;
margin-bottom: 15px;
padding-left: 10px;
font-family: Poppins;

@media (min-width: 425px){
width: 80%;
}
@media (min-width: 375px){
width: 90%;
}
`;
export const Msg = styled.textarea`
height: 120px;
width: 90%;
border: none;
border-radius: 4px;
margin-bottom: 15px;
padding-left: 10px;
padding-top: 10px;
font-family: Poppins;
resize: none;

@media (min-width: 425px){
width: 80%;
}
@media (min-width: 375px){
width: 90%;
}
`;
export const SendButton = styled.div`
background-color: #00A3FF;
width: 90%;
height: auto;
padding 12px;
border: none;
border-radius: 4px;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
transition: background-color 1s;

:hover{
    background-color: #004064;
}

@media (min-width: 425px){
width: 85%;
}
@media (min-width: 375px){
// width: 80%;
}
@media (min-width: 320px){
width: 80%;
}
`;
export const Text = styled.div`
font-family: Raleway;
font-weight: 700;
font-size: 24px;
text-transform: capitalize;
color: white;
`;
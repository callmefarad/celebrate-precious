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
    // background-color: #9ABDD1;
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
// padding: 40px;
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

// export const SelfWish = styled.div`
// background-color: #303F9F;
// // background-color: #f1f1f1;
// border: none;
// border-radius: 5px;
// height: 90px;
// // height: auto;
// width: 300px;
// // width: 70%;
// display: flex;
// justify-content: center;
// align-items: center;
// box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
// padding-right: 10px;
// padding-left: 10px;

// @media (min-width: 425px){
// width: 80%;
// }
// @media (min-width: 375px){
// width: 90%;
// }
// @media (min-width: 320px){
// width: 90%;
// }
// `;

export const Text1 = styled.div`
color: white;
font-family: Roboto;
font-weight: 300;
// color: #3A3A3A;
text-align: center;
`;

export const FormWrapper = styled.div`
// background-color: tomato;
height: auto;
width: 70%;
margin-top: 30px;
// padding: 5px;
display: flex;
flex-direction: column;
align-items: center;

@media (max-width: 425px){
width: 80%;
}
@media (max-width: 375px){
width: 90%;
}
@media (max-width: 320px){
width: 90%;
}
`;

export const TextField = styled.div`
width: 80%;
`;
import styled from "styled-components"
import careerImage from "../../images/precious-group.png"


export const CareerContainer = styled.div`
background: linear-gradient(
    to bottom,
    rgba(0, 159, 253, 0),
    rgba(255, 255, 255, 1)
  ),url(${careerImage});
background-repeat: no-repeat;
background-position: center;
background-size: cover;
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
position: relative;

`;

export const CareerCard = styled.div`
background-color: #f1f1f1;
width: 400px;
height: 500px;
border: none;
border-radius: 5px;
overflow: hidden;
display: flex;
flex-direction: column;
align-items: center;
padding-top: 5px;
padding-bottom: 20px;
box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

@media(max-width: 425px){
width: 350px;
height: 450px;
}
@media(max-width: 375px){
width: 320px;
height: 450px;
}
@media(max-width: 320px){
width: 280px;
height: 450px;
padding-bottom: 30px;
}
`;

export const CardContent1 = styled.div`
display: flex;
justify-content: center;
align-items: center;
// background-color: green;
padding: 10px;

`;
export const CardContent2 = styled.div`
margin: 0px;
padding: 0px;
`;
export const CardContentText = styled.div`
// background-color: grey;
align-self: center;
font-size: 16px;
font-weight: 300;
font-family: Poppins;
color: black;
text-transform: sentence;
text-align: center;
text-justify: inter-word;
border: none;
border-radius: 5px;
padding: 10px;

@media(max-width: 320px){
font-size: 15px;
}
`;

export const Account = styled.div`
font-family: Poppins;
font-size: 22px;
font-weight: 500;
text-transform: capitalize;
text-align: center;

@media(max-width: 320px){
font-size: 20px;
}
`;
export const AccountDetails = styled.div`
// background-color: red;
width: 350px;
height: 160px;
padding: 15px;
display: flex;
flex-direction: column;
align-items: center;

@media(max-width: 425px){
    width: 280px;
}
@media(max-width: 320px){

}
`;
export const Cover = styled.div`
background-color: white;
display: flex;
width: inherit;
height: 50px;
justify-content: flex-start;
align-items: center;
border: none;
border-radius: 5px;
margin-bottom: 5px;

@media(max-width: 375px){
    height: 40px;
}
@media(max-width: 320px){
width: 260px;
}
`;
export const Name = styled.div`
font-family: Poppins;
font-size: 16px;
margin-left: 5px;
margin-right: 10px;

@media(max-width: 375px){
    font-size: 15px;
}
`;
export const Value = styled.div`
font-family: Poppins;
font-size: 18px;
text-transform: capitalize;
font-weight: 500;

@media(max-width: 425px){
    font-size: 18px;
}
@media(max-width: 375px){
    font-size: 16px;
}
`;
export const Button = styled.div`
background-color: #00A3FF;
display: flex;
width: 350px;
height: 50px;
justify-content: center;
align-items: center;
border: none;
border-radius: 5px;
color: white;
font-weight: 500;
font-size: 18px;
transition: background-color 1s;

:hover{
    background-color: #00446A;
}

@media(max-width: 425px){
width: 280px;
}
@media(max-width: 375px){
width: 280px;
height: 40px;
}
@media(max-width: 320px){
width: 260px;
height: 40px;
}
`;

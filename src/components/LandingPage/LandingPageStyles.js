import styled from 'styled-components'
const landingImage = require('../../images/landing-bg-1.png')
const landingImage2 = require('../../images/landing-bg-001.png')


export const LandContainer = styled.div`
// background-color: green;
background-image: url(${landingImage});
background-repeat: no-repeat;
// background-size: contain;
// background-size: 100% 100%;
background-position: center;
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
width: 100vw;

@media (max-width: 425px){
    background-image: url(${landingImage2});
}
`;

export const CardContainer = styled.div`
background-color: #f1f1f1;
display: flex;
flex-direction: column;
height: 500px;
width: 400px;
justify-content: center;
align-items: center;
border-radius: 5px;
box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

:hover{
    transform: scale(0.9);
    transition: all 0.5s ease-out;
}

@media (max-width: 425px){
    width: 80%;
    height: 70%;
}
@media (max-width: 320px){
    width: 90%;
    height: 70%;
}
`;
export const ImageWrapper = styled.div`
background-color: grey;
border: none;
height: 250px;
width: 250px;
border-radius: 50%;
margin-bottom: 10px;

@media (max-width: 375px){
    width: 200px;
    height: 200px;
}
`;
export const Name = styled.div`
font-family: Poppins;
font-weight: 500;
text-transform: capitalize;
font-size: 24px;
color: #000000;
`;
export const Desc = styled.div`
font-family: Roboto;
font-weight: 300;
text-transform: sentence;
font-size: 14px;
color: #909090;
margin-top: -5px;
`;
export const NavButton = styled.div`
// background-color: green;
width: 80%;
height: auto;
display: flex;
justify-content: space-around;
padding-top: 15px;
padding-bottom: 15px;
`;
export const AllWish = styled.div`
// background-color: #FF4545;
background-color: #00A3FF;
border: none;
border-radius: 50px;
color: white;
display: flex;
justify-content: center;
align-items: center;
width: 100px;
height: 40px;
cursor: pointer;
transition: background-color 1s;

:hover{
// background-color: #780808;
background-color: #00446A;
}
`;
export const Wish = styled.div`
background-color: #00A3FF;
border: none;
border-radius: 50px;
color: white;
display: flex;
justify-content: center;
align-items: center;
width: 100px;
height: 40px;
cursor: pointer;
transition: background-color 1s;

:hover{
    background-color: #00446A;
}
`;
export const Text = styled.div`
font-family: Roboto;
font-size: 14px;
text-transform: capitalize;
font-weight: bold;
`;

export const Career = styled.div`
background-color: #FF4545;
border: none;
border-radius: 5px;
color: white;
display: flex;
justify-content: center;
align-items: center;
width: 280px;
height: 40px;
cursor: pointer;
transition: background-color 1s;

:hover{
background-color: #780808;
}
`;
import styled from "styled-components"
import sampleImage from "../../images/landing-bg-1.png";
// import smile from "../../images/precious-full.png"

export const TopContainer = styled.div`
// background-color: grey;
background-image: url(${sampleImage});
background-position: center;
background-repeat: no-repeat;
display: flex;
justify-content: center;
height: auto;
width: 100vw;
padding-top: 100px;
padding-bottom: 100px;

@media (max-width: 768px) {
display: flex;
flex-direction: column-reverse;
align-items: center;
padding-top: 60px;
padding-bottom: 60px;
}
`;
export const Left = styled.div`
// background-color: red;
width: 40%;
height: inherit;
display: flex;
flex-direction: column;
align-items: center;
padding-top: 20px;
padding-bottom: 20px;

@media (max-width: 768px) {
width: 80%;
}
@media (max-width: 425px) {
width: 100%;
}
`;
export const ButtonNavs = styled.div`
// background-color: green;
display: flex;
justify-content: center;
align-items: center;
padding-top: 15px;
padding-bottom: 15px;
width: 80%;

@media (max-width: 425px) {
}
@media (max-width: 375px) {
width: 100%;
}
`;
export const WishesButton = styled.div`
background-color: #FF4545;
width: 100px;
padding: 10px;
margin-right: 30px;
border: none;
border-radius: 20px;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
color: white;
font-family: Raleway;
font-weight: 500;
text-transform: capitalize;
transition: background-color 1s;

:hover{
background-color: #780808;
}

@media (max-width: 425px) {
margin-right: 15px;
}
`;
export const WisheButton = styled.div`
background-color: #00A3FF;
width: 100px;
padding: 10px;
margin-left: 30px;
border: none;
border-radius: 20px;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
color: white;
font-family: Raleway;
text-transform: capitalize;
font-weight: 500;
transition: background-color 1s;

:hover{
background-color: #00446A;
}

@media (max-width: 425px) {
margin-left: 15px;
}
`;
export const WishesContainer = styled.div`
// background-color: white;
height: auto;
width: 80%;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 20px;
padding-top: 20px;
padding-bottom: 20px;

@media (max-width: 425px) {
    width: 95%;
}
@media (max-width: 375px) {
    width: 100%;
}
`;
export const Right = styled.div`
// background-color: blue;
// background-image: url();
// background-position: center;
// background-repeat: no-repeat;
width: 40%;
display: flex;
justify-content: center;
align-items: center;

@media (max-width: 768px) {
width: 80%;
}
`;

export const ImageHolder = styled.div`
// background-color: green;
width: 400px;
height: 400px;
position: sticky;
display: flex;
justify-content: center;
border: none;
border-radius: 100%;


@media (max-width: 768px) {
width: 300px;
height: 300px;
border: none;
border-radius: 50%;
margin-bottom: 10px;
}

@media (max-width: 425px) {
width: 250px;
height: 250px;
}
@media (max-width: 375px) {
width: 200px;
height: 200px;
}

`;
// export const WishesContainer = styled.div``;
// export const WishesContainer = styled.div``;
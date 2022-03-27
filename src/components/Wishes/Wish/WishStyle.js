import styled from "styled-components"

export const WishContainer = styled.div`
background-color: grey:
height: auto;
width: 90%;
// border: 2px solid grey;
padding: 15px;
border-radius: 5px;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
margin-bottom: 10px;

@media (max-width: 425px) {
    width: 85%;
    padding-left: 20px;
    padding-right: 20px;
}
@media (max-width: 425px) {
    width: 80%;
}
`;
export const WishName = styled.div`
font-size: 18px;
font-family: Poppins;
font-weight: 500;
color: #00000;
text-transform: capitalize;
margin-bottom: 5px;
`;
export const WishContent = styled.div`
font-size: 14px;
font-family: Raleway;
font-weight: 500;
color: #686363;
text-transform: capitalize;
`;
// export const WishContainer = styled.div``;


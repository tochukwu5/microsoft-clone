import styled from 'styled-components/macro';
import rfs from '../../../utils/rfs';

export const Container = styled.div`
max-width: 1400px;
margin: 0 auto;
padding: 0 4%;
@media (min-width: 768px) and (max-width: 1100px) {
width: 100%;
padding: 0;
margin:0;
}
`;
export const HeroImg = styled.div`
width: 50%;

img {
width: 110%;
display:block;
/* height: fit-content; */
}
@media (max-width: 768px) {
width: 100%;
}
`;

export const HeroTxt = styled.div`
width: 40%;
padding-left: 5%;
@media (max-width: 768px) {
width: 108%;
padding: 60px 20px;
margin-bottom:100px;
text-align:center;
   background:#fff;
}
}
`;

export const HBtn = styled.a`
position:relative;
padding: 10px 10px;
background:#0067b8;
font-weight: 600;
display: inline-block;
color:#fff;

`;

export const SnBtn = styled(HBtn)`
background:transparent;
color:${props => props.inv ? '#fff' : '#000'};
border-radius:0.125rem;
&::after{
    border-right: 2px solid ${props => props.inv ? '#fff' : '#000'};
    border-bottom: 2px solid ${props => props.inv ? '#fff' : '#000'};
}
`;
export const HTitle = styled.h2`
font-weight: 600;
line-heigth:1.2;
font-family:inherit;
font-size:1.7rem;
margin:0;
color:#000;

`;
export const HDesc = styled.p`
line-height: 1.5;
font-size:1rem;
padding: 15px 0;
color:#000;

`;
export const HeroWrap = styled.div`
display: flex!important;
justify-content:space-between;
padding: 0 4%;
color: ${props => props.text ? props.text : '#000'};
background:${props => props.bg ? props.bg : '#f5f5f5'};
align-items:center;
width:107%;
height:105vh;
margin-left:-4%; 
margin-bottom: 50px;
@media (min-width: 768px) and (max-width: 1100px) {
padding: 0;
}
@media (max-width: 768px) {
flex-direction:${props => props.inv ? 'column-reverse' : 'column'}!important;
justify-content:center;
align-items:center;
width:100%;
margin:auto;

`;

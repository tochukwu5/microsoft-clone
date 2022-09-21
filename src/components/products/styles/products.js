import styled from 'styled-components/macro';
import rfs from '../../../utils/rfs';
import { SnBtn } from '../../hero/style/hero';

export const ProductList = styled.div`
padding: 20px 0;
display:grid;
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

export const ProductItem = styled.div`
padding: 10px;
h3 {
    font-size:1.4rem;
    color: #222;
    margin-bottom:5px;
    line-height:1.5;

}
img {
    width:100%;
}
p {
    line-height:1.6;
    margin-bottom:27px;
    font-size:1rem;
}
`;
export const ProdLink = styled(SnBtn)`
padding-left:0;
display: inline-block;
&::after {
    border-color: blue;
}
color: blue;
`;

export const Sp = styled.span`
color:#0067b8;
transition: 0.2s;
margin-right: 7px;
font-weight:600;
cursor: pointer;
&:hover{
    padding-right: 5px ;

}
span:hover{
    margin-right:7px;
    text-decoration:underline;
    transition: 0.3s;

}

`
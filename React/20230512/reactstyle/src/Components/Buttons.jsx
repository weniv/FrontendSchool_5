import React from 'react'
import styled from 'styled-components';

const Button = styled.button`
background-color:royalblue;
padding:10px;
color:#fff;
`;

const ButtonStyle2 = styled(Button)`
color:#000;
border:none;
border-radius: 10px;
font-weight: bold;
box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.3);
`;

const ButtonStyle3 = styled(Button)`
color:yellow;
width: 100px;
background-color: lightgreen;
`;

const ButtonStyle4 = styled(ButtonStyle2)`
border-radius: 20px;
color: #fff;
background-color: hotpink;
`;

export { Button, ButtonStyle2, ButtonStyle3, ButtonStyle4 }

import {Input , FormFeedback } from "reactstrap";
import styled from 'styled-components'

export const Inputstyled = styled(Input)`
    height: 44px;
    border-radius: 0;
    box-shadow: none;
    font-size: 14px;
    padding: 10px !important;
    display: block;
    width: 100%;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    -moz-appearance: none;
    appearance: none;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
`;

export const FormFeedbackstyled = styled(FormFeedback)`
    color: red;
    display : ${props => props.error ? 'block' : 'none'}
`;  
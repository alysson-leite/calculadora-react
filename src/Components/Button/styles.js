import styled from 'styled-components';

export const ButtonContainer = styled.button`
    padding: 10px;
    border: 1px solid #CDCD;
    background-color: #B22222;
    color: #FFFFFF;
    font-size: 24px;
    font-weight: 700;
    transition: .3s;
    flex: 1;
    height: 6rem;

    &:hover {
        opacity: 0.7;
    }

    &:active {
        opacity: 0.5;
    }
` 
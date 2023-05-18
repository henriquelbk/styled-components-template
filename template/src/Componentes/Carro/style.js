import styled from 'styled-components';

export const ContainerCarro = styled.div`
    border: 1px solid red;
    border-radius: 6%;
    color: red;
    box-shadow: 10px solid black;
    
    &:hover {
        background: white;
        border: 1px solid orange;
        transition: all .3s ease-in-out;
        color: orange
    }
`
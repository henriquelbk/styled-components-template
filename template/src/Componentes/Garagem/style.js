import styled from 'styled-components';

export const Botao = styled.button`
    background: orange;
    border: 0;
    padding: 10px 15px;
    border-radius: 4px;
    color: white;
    margin: 20px 0;

    &:hover {
        background: white;
        border: 1px solid orange;
        transition: all .3s ease-in-out;
        color: orange
    }

`
export const GaragemContainer = styled.main`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: orange;
    width: 70vw;
    border: 0;
    padding: 10px 15px;
    border-radius: 4px;
    color: white;

    &:hover {
        background: white;
        border: 1px solid orange;
        transition: all .3s ease-in-out;
        color: orange
    }

`
export const Estacionamento = styled.section`
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    justify-content:center;
    align-items: center;
    background: orange;
    border: 0;
    padding: 10px 15px;
    border-radius: 4px;
    color: white;

    &:hover {
        background: white;
        border: 1px solid orange;
        transition: all .3s ease-in-out;
        color: orange
    }

`
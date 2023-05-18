import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: sans-serif
}

li {
    list-style: none
}
button {
    cursor: pointer
}

`

export default GlobalStyles
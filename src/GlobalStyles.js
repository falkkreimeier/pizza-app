import { createGlobalStyle } from "styled-components";

const GlobalStles = createGlobalStyle`

:root {
    --app-width: 352px;
    --app-height: 605px;
}


html {
    box-sizing: border-box;
}

* {
    box-sizing: inherit;
}

body {
    background-color: blue;
}

p {
    line-height: 1,5;
}
`;

export default GlobalStles;

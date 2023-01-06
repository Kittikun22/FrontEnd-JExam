import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    typography: {
        fontFamily: "'Prompt', sans-serif",
    },
    mainColor: {
        main: '#7ad2d4',
        second: '#0e3c47'
    },
    palette: {
        secondary: {
            main: '#015352',
        },
    },

});

export default theme
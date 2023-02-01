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
        warningOrange: {
            main: '#f57c00'
        },
        greenNeon: {
            main:'#a3cc53'
        },
        backButton:{
            main:'#0081B4'
        }
    },

});

export default theme
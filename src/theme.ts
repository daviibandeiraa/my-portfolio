import { createTheme, responsiveFontSizes } from "@mui/material";
import "./components/Styles/Fonts.css"


let theme = createTheme({
    palette: {
        primary: {
            main: "#232323",
        },
        secondary: {
            main: "#5c18e6",
        },
    },
    typography: {
        fontFamily: "Montserrat",
        fontWeightLight: 600,
        fontSize: 12,
        
    },

});

theme = responsiveFontSizes(theme);
export default theme;
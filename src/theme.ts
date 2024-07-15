import { createTheme, responsiveFontSizes } from "@mui/material";


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
        // fontFamily: "Roboo",
    },
});

theme = responsiveFontSizes(theme);
export default theme;
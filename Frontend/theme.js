import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#5D4037",   // Espresso Brown (Rich & Premium)
        },
        secondary: {
            main: "#D4C4A8",   // Champagne Beige (Soft Accent)
        },
        background: {
            default: "#F9F8F6", // Warm Off-White (Not harsh white)
            paper: "#FFFFFF",
        },
        text: {
            primary: "#3E2723", // Dark Brown text instead of black
            secondary: "#6D4C41",
        },
        success: {
            main: "#558B2F",    // Olive Green
        },
        error: {
            main: "#C62828",    // Muted Red
        },
    },
    typography: {
        fontFamily: "'Playfair Display', 'Roboto', sans-serif", // Serif font adds luxury
        h4: {
            fontWeight: 700,
            letterSpacing: "0.5px",
        },
        button: {
            textTransform: "uppercase", // Uppercase buttons feel more expensive
            fontWeight: 600,
            letterSpacing: "1px",
        },
    },
    shape: {
        borderRadius: 4, // Sharper corners feel more "high fashion"
    },
});

export default theme;
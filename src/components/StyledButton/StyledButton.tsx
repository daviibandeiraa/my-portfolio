import { styled } from "@mui/material"
import { ReactNode } from "react"

interface StyledButtonProps {
    children: ReactNode
}

const StyledButton: React.FC<StyledButtonProps> = ({ children }) => {

    const StyledButton = styled("button")(({ theme }) => ({
        cursor: "pointer",
        backgroundColor: theme.palette.secondary.main,
        border: `1px solid ${theme.palette.secondary.main}`,
        borderRadius: "5px",
        padding: "8px 15px",
        width: "100%",
        color: theme.palette.secondary.contrastText,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all .2s ease-in-out",
        gap: "10px",
        fontSize: "18px",
        boxShadow: `0 0 3px ${theme.palette.secondary.main},
        0 0 1px ${theme.palette.secondary.main},
        0 0 1px ${theme.palette.secondary.main}`,
        '&:hover': {
            backgroundColor: "#5c18e6",
            transform: "scale(1.1)" 
        }
    }))

    return (
        <>
            <StyledButton>
                {children}
            </StyledButton>
        </>
    )
}

export default StyledButton
import { useState } from "react"
import {
  AppBar,
  Container,
  Grid,
  MenuItem,
  styled,
  Toolbar,
} from "@mui/material"

const NavBar = () => {
  const StyledToolbar = styled(Toolbar)(({ }) => ({
    display: "flex",
    justifyContent: "center",
    gapItems: "10px",
  }))

  const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
    fontSize: "16px",
    fontFamily : "Montserrat",
    fontWeight: 500,
    cursor: "pointer",
    "&:hover": {
        color: theme.palette.secondary.main,
        transition: "color 300ms ease-in-out",
      },
  }))

  return (
    <>
      <AppBar position="absolute">
        <StyledToolbar>
          <StyledMenuItem>About</StyledMenuItem>
          <StyledMenuItem>Skills</StyledMenuItem>
          <StyledMenuItem>Projects</StyledMenuItem>
          <StyledMenuItem>Contact</StyledMenuItem>
        </StyledToolbar>
      </AppBar>
    </>
  )
}

export default NavBar

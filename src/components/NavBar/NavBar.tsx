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
  const StyledToolbar = styled(Toolbar)(({}) => ({
    display: "flex",
    gapItems: "10px",
    justifyContent: "center",
    marginLeft: "180px",
  }))

  const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
    fontSize: "16px",
    fontFamily: "Montserrat",
    fontWeight: 400,
    cursor: "pointer",
    "&:hover": {
      color: theme.palette.secondary.main,
      transition: "color 300ms ease-in-out",
    },
  }))

  const StyledH1 = styled(MenuItem)(({ theme }) => ({
    fontSize: "38px",
    fontFamily: "Montserrat",
    fontWeight: 500,
    color: theme.palette.primary.contrastText,
    paddingLeft: "60px",
    "&:hover": {
      cursor: "auto",
    }

  }))
  const StyledH2 = styled(MenuItem)(({ theme }) => ({
    fontSize: "38px",
    fontFamily: "Montserrat",
    fontWeight: 600,
    color: theme.palette.secondary.main,
    marginLeft: "-25px",
    "&:hover": {
      cursor: "auto",
    }
  }))

  const StyledGrid = styled(Grid)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  }))


  return (
    <>
      <AppBar position="absolute">
        <Container maxWidth="lg">
          <StyledGrid container spacing={2}>
            <Grid item xs={6} md={6} display={"flex"}>
              <StyledH1>Db</StyledH1>
              <StyledH2>.</StyledH2>
            </Grid>
            <Grid item xs={6} md={6}>
              <StyledToolbar>
                <StyledMenuItem>About</StyledMenuItem>
                <StyledMenuItem>Skills</StyledMenuItem>
                <StyledMenuItem>Projects</StyledMenuItem>
                <StyledMenuItem>Contact</StyledMenuItem>
              </StyledToolbar>
            </Grid>
          </StyledGrid>
        </Container>
      </AppBar>
    </>
  )
}

export default NavBar

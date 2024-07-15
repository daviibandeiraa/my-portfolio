import { Container, Grid, styled, Typography } from "@mui/material"
import { useState } from "react"
import Avatar from "../../../../assets/images/avatar.png"
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import StyledButton from "../../../../components/StyledButton/StyledButton";

const Hero = () => {
  const StyledHero = styled("div")(() => ({
    backgroundColor: "black",
    height: "100vh",
  }))

  const StyledImg = styled("img")(() => ({
    width: "100%",
    borderRadius: "50%",
  }))

  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <StyledImg src={Avatar} alt="" />
            </Grid>
            <Grid item xs={12} md={7}>
                            <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>Davi Bandeira</Typography>
                            <Typography color="primary.contrastText" variant="h2" textAlign="center" >I'm a Software Engineer</Typography>
                            <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                    <StyledButton>
                                        <FileDownloadOutlinedIcon />
                                        <Typography>
                                            Download CV
                                        </Typography>
                                    </StyledButton>
                                </Grid>
                                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                    <StyledButton>
                                        <MailOutlineOutlinedIcon />
                                        <Typography>
                                            Contact me
                                        </Typography>
                                    </StyledButton>
                                </Grid>
                            </Grid>
                        </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  )
}

export default Hero

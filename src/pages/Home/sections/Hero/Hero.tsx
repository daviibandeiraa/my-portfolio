import { Box, Container, Grid, styled, Typography } from "@mui/material"
import { useState } from "react"
import Avatar from "../../../../assets/images/avatar.png"
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined"
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined"
import StyledButton from "../../../../components/StyledButton/StyledButton"
import theme from "../../../../theme"
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground"

const Hero = () => {
  const StyledHero = styled("div")(() => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: "flex",
    alignItems: "center",
  }))

  const StyledImg = styled("img")(() => ({
    width: "80%",
    borderRadius: "50%",
    border: `2px solid ${theme.palette.secondary.main}`,
    boxShadow: `0 0 3px ${theme.palette.secondary.main},
     0 0 1px ${theme.palette.secondary.main},
     0 0 1px ${theme.palette.secondary.main}`,
  }))

  const StyledTypography = styled(Typography)(({ theme }) => ({
    textShadow: `0 0 3px ${theme.palette.secondary.main},
     0 0 1px ${theme.palette.secondary.main},
     0 0 1px ${theme.palette.secondary.main}`,
  }))

  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <Box position="relative">
                <Box position="absolute" width={"150%"} top={-100} right={0}>
                  <AnimatedBackground />
                </Box>
                <Box position="relative" textAlign="center">
                  <StyledImg src={Avatar} />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={7}>
              <Typography
                color="primary.contrastText"
                variant="h1"
                textAlign="center"
                pb={2}
              >
                Davi Bandeira
              </Typography>
              <StyledTypography
                color="secondary"
                variant="h2"
                textAlign="center"
              >
                I'm a Software Engineer
              </StyledTypography>
              <Grid
                container
                display="flex"
                justifyContent="center"
                spacing={3}
                pt={3}
              >
                <Grid
                  item
                  xs={12}
                  md={4}
                  display="flex"
                  justifyContent="center"
                >
                  <StyledButton>
                    <FileDownloadOutlinedIcon />
                    <Typography>Download CV</Typography>
                  </StyledButton>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={4}
                  display="flex"
                  justifyContent="center"
                >
                  <StyledButton>
                    <MailOutlineOutlinedIcon />
                    <Typography>Contact me</Typography>
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

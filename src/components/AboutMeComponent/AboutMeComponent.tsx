import React from "react"
import "./AboutMeComponent.css"
import Avatar from "../../assets/images/avatar.png"
import styled from "@emotion/styled"
import theme from "../../theme"
import { Container, Grid } from "@mui/material"

const AboutMeComponent: React.FC = () => {

  const StyledImg = styled("img")(() => ({
    width: "90%",
    borderRadius: "10px",
    marginTop: "40px",
  }))

  return (
    <section>
      <div className="content">
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <div className="info">
                <p>
                  My name is Davi Bandeira, I'm a
                  <span className="movie-night">Full Stack Developer</span>
                   with solid experience in modern technologies, including Typescript, Angular, React, SQL Server and C#. My expertise spans both frontend and backend development, allowing me to create robust and scalable solutions that meet user and customer needs. I am passionate about technology and am always looking to improve my skills and learn new tools to offer the best in software development.
                </p>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className="swiper">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <StyledImg src={Avatar} alt="Avatar" />
                    <div className="overlay"></div>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>

      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </section>
  )
}

export default AboutMeComponent

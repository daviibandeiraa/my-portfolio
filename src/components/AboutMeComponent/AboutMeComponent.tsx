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
                  Meu nome é Davi Bandeira e sou
                  <span className="movie-night">Desenvolvedor Full Stack</span>
                  com sólida experiência em tecnologias modernas, incluindo
                  Typescript, Angular, React, SQL Server e C#. Minha expertise
                  abrange tanto o desenvolvimento frontend quanto backend,
                  permitindo-me criar soluções robustas e escaláveis que atendem
                  às necessidades dos usuários e clientes. Sou apaixonado por
                  tecnologia e estou sempre em busca de aprimorar minhas
                  habilidades e aprender novas ferramentas para oferecer o
                  melhor em desenvolvimento de software.
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

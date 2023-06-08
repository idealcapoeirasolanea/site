import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import BlogsImg from "./BlogsImg";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { contactPageData } from "../../portfolio.js";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const ContactData = contactPageData.contactSection;
const blogSection = contactPageData.blogSection;

function Contact(props) {
  const theme = props.theme;



  return (
    <div className="contact-main">
      <Header theme={theme} setTheme={props.setTheme} />
      <div className="basic-contact">
        <Fade bottom duration={1000} distance="40px">
          <div className="">
            <div className="contact-heading-img-div">
              {/* <img
                className="profile-pic"
                src={require(`../../assests/images/${ContactData["profile_image_path"]}`)}
                alt=""
              /> */}
            </div>
            <div className="contact-heading-text-div">
              <h1
                className="contact-heading-text"
                style={{ color: theme.text }}
              >
                {ContactData["title"]}
              </h1>
              <p
                className="contact-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {ContactData["description"]}
              </p>
              <SocialMedia />
              <br />
              <br />

            </div>
          </div>
        </Fade>
        <Fade bottom duration={1000} distance="40px">
          <div className="">
            <div className="">
              <h1 className="blog-heading-text" style={{ color: theme.text }}>
                {blogSection["title"]}
              </h1>
              <p
                className="blog-header-detail-text subTitle"
                style={{ color: theme.secondaryText, textAlign: 'center' }}
              >
                {blogSection["subtitle"]}
              </p>
              <p
                className="blog-header-detail-text subTitle"
                style={{ color: theme.secondaryText, textAlign: 'center' }}
              >
                Contribua com um valor simbólico para que possamos investir em materiais de treino, uniformes para os alunos,
                que não possuem condições, e fazer intercâmbios representando nossa cidade.
                <h3>PIX: anac76459@gmail.com</h3>
                <h4>(Ana Carla Ferreira Albino)</h4>
              </p>
            </div>


            <Box sx={{ flexGrow: 1 }}>
              <Grid
                container
                spacing={0}
                direction="row"
                alignItems="center"
                justifyContent="center"
                sx={{ minHeight: '10vh' }}>
                <Grid item xs={3} >
                  <div className="blog-heading-img-div">
                    <img src="https://raw.githubusercontent.com/idealcapoeirasolanea/images/main/contribuicao.jpeg" width="400" alt="Contribuição" />
                  </div>
                </Grid>
                <Grid item xs={3}>
                  <div className="blog-heading-img-div">
                    <img src="https://raw.githubusercontent.com/idealcapoeirasolanea/images/main/idealcapoeirasolanea_qrcode.png" width="400" alt="Contribuição" />
                  </div>
                </Grid>
                <Grid item xs={3}>
                  <div className="blog-heading-img-div">
                    <img src="https://raw.githubusercontent.com/idealcapoeirasolanea/images/main/Bandeirasolanea.png" width="790" alt="Contribuição" />
                  </div>
                </Grid>
              </Grid>
            </Box>
          </div>
        </Fade>
      </div>
      <Footer theme={props.theme} onToggle={props.onToggle} />
    </div>
  );
}

export default Contact;

import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { contactPageData } from "../../portfolio.js";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SportsMartialArtsIcon from '@mui/icons-material/SportsMartialArts';
import HomeWorkIcon from '@mui/icons-material/HomeWork';

const blogSection = contactPageData.blogSection;

function Aulas(props) {
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
                        <img src="https://raw.githubusercontent.com/idealcapoeirasolanea/images/main/luta.png"
                        alt="Luta" style={{margin: '0 auto', display: 'flex', justifyContent: 'center'}}/>
                        <h3 style={{ textAlign: 'center' }}>Local e Horários de Aulas</h3>
                        <h4 style={{ textAlign: 'center' }}>(Está sujeito a mudanças por causa de feriados ou imprevistos)</h4>
                        <hr />
                        <div className="contact-heading-text-div">
                            <VerticalTimeline>
                                <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}

                                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                    icon={<HomeWorkIcon />}
                                >
                                    <h3 className="vertical-timeline-element-title">Local dos Treinos</h3>
                                    <h4 className="vertical-timeline-element-subtitle">Solânea - PB</h4>
                                    <p>
                                        As aulas são desenvolvidas no Cine Teatro Municipal
                                        <br />
                                        Jacob Soares
                                        <br />
                                        
                                        Responsável <a
                                            href="https://www.instagram.com/fabio_idealcapoeira/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{color: 'white', fontWeight: 'bold'}}
                                        >
                                            (Graduado Marreta)
                                        </a>
                                    </p>
                                </VerticalTimelineElement>
                                <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                    icon={<SportsMartialArtsIcon />}
                                >
                                    <h3 className="vertical-timeline-element-title">Aulas para Jovens e Crianças</h3>
                                    <h4 className="vertical-timeline-element-subtitle">de 3 até 16 anos</h4>
                                    <h4 className="vertical-timeline-element-subtitle">Todas as Quartas e Sábados das 18h até as 19h</h4>
                                    
                                </VerticalTimelineElement>


                                <VerticalTimelineElement
                                    className="vertical-timeline-element--education"
                                    contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                                    contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
                                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                                    icon={<SportsMartialArtsIcon />}
                                >
                                    <h3 className="vertical-timeline-element-title">Aulas para Adolescentes e Adultos</h3>
                                    <h4 className="vertical-timeline-element-subtitle">de 16 anos acima</h4>
                                    <h4 className="vertical-timeline-element-subtitle">Todas as Quartas e Sábados das 19h até as 20h</h4>
                                    <p>As criançãs e adolescentes que estão desenvolvendo rapidamente nos treinos, será permitido
                                        treinar com os adultos com exigências diferentes.
                                    </p>
                                    
                                </VerticalTimelineElement>
                                <VerticalTimelineElement
                                    className="vertical-timeline-element--education"
                                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                    icon={<SportsMartialArtsIcon />}
                                >
                                    <h3 className="vertical-timeline-element-title">Festival de Capoeira</h3>
                                    <p>
                                        Dia 6 de Agosto será realizado aqui na nossa cidade o primeiro festival que contará
                                        com várias visitas da região, inclusive do mestre Hailton e de outros países. 
                                    </p>
                                </VerticalTimelineElement>
                                
                                <VerticalTimelineElement
                                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                                    icon={<SportsMartialArtsIcon />}
                                />
                            </VerticalTimeline>

                            <hr />
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
                            <div
                                className="blog-header-detail-text subTitle"
                                style={{ color: theme.secondaryText, textAlign: 'center' }}
                            >
                                Contribua com um valor simbólico para que possamos investir em materiais de treino, uniformes para os alunos,
                                que não possuem condições, e fazer intercâmbios representando nossa cidade.
                                <h3>PIX: anac76459@gmail.com</h3>
                                <h4>(Ana Carla Ferreira Albino)</h4>
                            </div>
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

export default Aulas;

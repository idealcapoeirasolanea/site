import React from "react";
import "./SocialMedia.css";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import { socialMediaLinks } from "../../portfolio";

export default function socialMedia() {
  return (
    <div className="social-media-div" >
      <a
        href={socialMediaLinks.github}
        className="icon-button github"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubIcon style={{color: 'black', fontSize: 40, margin: 10}}/>
      </a>
      <a
        href={socialMediaLinks.whatsapp}
        className="icon-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <WhatsAppIcon style={{color: 'green', fontSize: 40, margin: 10}}/>

      </a>

      <a
        href={socialMediaLinks.instagram}
        className="icon-button instagram"
        target="_blank"
        rel="noopener noreferrer"
      >
        <InstagramIcon style={{color: 'red', fontSize: 40, margin: 10}}/>
      </a>
    </div>
  );
}

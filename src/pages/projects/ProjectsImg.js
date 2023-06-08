import React from "react";
import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: 'https://raw.githubusercontent.com/idealcapoeirasolanea/images/main/grupo1.jpg',
    thumbnail: 'https://raw.githubusercontent.com/idealcapoeirasolanea/images/main/grupo1.jpg',
  },
  {
    original: 'https://raw.githubusercontent.com/idealcapoeirasolanea/images/main/dev_aulas.png',
    thumbnail: 'https://raw.githubusercontent.com/idealcapoeirasolanea/images/main/dev_aulas.png',
  },
  {
    original: 'https://raw.githubusercontent.com/idealcapoeirasolanea/images/main/infantil.jpeg',
    thumbnail: 'https://raw.githubusercontent.com/idealcapoeirasolanea/images/main/infantil.jpeg',
  },
  {
    original: 'https://raw.githubusercontent.com/idealcapoeirasolanea/images/main/pilares.png',
    thumbnail: 'https://raw.githubusercontent.com/idealcapoeirasolanea/images/main/pilares.png',
  },
  {
    original: 'https://raw.githubusercontent.com/idealcapoeirasolanea/images/main/professor.jpg',
    thumbnail: 'https://raw.githubusercontent.com/idealcapoeirasolanea/images/main/professor.jpg',
  },
  {
    original: 'https://raw.githubusercontent.com/idealcapoeirasolanea/images/main/adulto.jpeg',
    thumbnail: 'https://raw.githubusercontent.com/idealcapoeirasolanea/images/main/adulto.jpeg',
  },
  {
    original: 'https://raw.githubusercontent.com/idealcapoeirasolanea/images/main/logo-dark.jpg',
    thumbnail: 'https://raw.githubusercontent.com/idealcapoeirasolanea/images/main/logo-dark.jpg',
  },
  {
    original: 'https://raw.githubusercontent.com/idealcapoeirasolanea/images/main/grupo.jpg',
    thumbnail: 'https://raw.githubusercontent.com/idealcapoeirasolanea/images/main/grupo.jpg',
  },
];

export default function ProjectsImg(props) {
  const theme = props.theme;
  return (
    <ImageGallery items={images} />
  );
}

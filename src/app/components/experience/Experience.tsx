import React from 'react';
import '../../styles/css';
import Card from './Card';

export default function Experience() {
  return (
    <div className='exp-card'>
      <div id='container-cards'>

      <Card principalImg={'/portafolio/assets/portafolio.png'} title='Portafolio' date='2023' tags={['React', 'Redux']} synopsis='Este fue un proyecto personal, desarrollado en react por el manejo y persistencia de datos con redux como es el lenguaje, utilizando componentes y fue hechod desde 0'/>
      <Card principalImg={'/portafolio/assets/portafolio.png'} title='Portafolio' date='2023' tags={['React', 'Redux']} synopsis='Este fue un proyecto personal, desarrollado en react por el manejo y persistencia de datos con redux como es el lenguaje, utilizando componentes y fue hechod desde 0'/>
      <Card principalImg={'/portafolio/assets/portafolio.png'} title='Portafolio' date='2023' tags={['React', 'Redux']} synopsis='Este fue un proyecto personal, desarrollado en react por el manejo y persistencia de datos con redux como es el lenguaje, utilizando componentes y fue hechod desde 0'/>
      <Card principalImg={'/portafolio/assets/portafolio.png'} title='Portafolio' date='2023' tags={['React', 'Redux']} synopsis='Este fue un proyecto personal, desarrollado en react por el manejo y persistencia de datos con redux como es el lenguaje, utilizando componentes y fue hechod desde 0'/>

        
      </div>
    </div>
  );
}

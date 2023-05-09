import React from 'react';
import '../../styles/css';
import Typed from 'react-typed';
export default function Home({ translations }: any) {
  return (
    <div id='home-container'>
      <div className='home-presentation'>
        <h3>{translations?.['home_greeting']}</h3>
        <div className='home-description'>
          {/* <p>{translations?.['home_presentation']} </p> */}
          <Typed
            className='home-typed-text'
            strings={translations?.['home_strings']}
            typeSpeed={40}
            loop
            smartBackspace
          />
        </div>
        <p>{translations?.['home_text']}</p>
        <div>
          <a
            href='https://www.canva.com/design/DAD7iakP6LM/vM5lr9yAHjLLl935fII_dg/view?utm_content=DAD7iakP6LM&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink'
            className='intro__cv cvES'
            target='_blank'
            rel='noopener noreferrer'
          >
            <span>
              Descargar
              <div className='cvc'></div>
              <div className='cvo'></div>
            </span>
          </a>
        </div>

        {/* <Typed
                strings={[
                'Search for products',
                'Search for categories',
                'Search for brands']}
                typeSpeed={40}
                backSpeed={50}
                attr="placeholder"
                loop /> */}
      </div>
    </div>
  );
}

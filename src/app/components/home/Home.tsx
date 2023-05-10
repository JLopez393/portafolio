import React, { useContext } from 'react';
import '../../styles/css';
import Typed from 'react-typed';
import TranslationContext from '../../../context/translationsContext';

export default function Home() {
  const translations= useContext(TranslationContext);

  return (
    <div id='home-container'>
      <div className='home-presentation'>
        <div className='home-content'>
          <h3>{translations?.['home_greeting']}</h3>
          <div className='home-description'>
            {/* <p>{translations?.['home_presentation']}</p> */}
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
                {translations?.['home_button_text']}
                <div className='cvc'></div>
                <div className='cvo'></div>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
import React, { useContext } from 'react';
import '../../styles/css';
import TranslationContext from '../../../context/translationsContext';

export default function About() {
  const translations= useContext(TranslationContext);

  return (
    <div id='about-container'>
      <div className='about-card'>
        <p className='about-dear'>{translations?.['about_dear']}</p>
        <p className='about-first'>
        {translations?.['about_first']}
        </p>
        <p className='about-second'>
        {translations?.['about_second']}
        </p>
        <p className='about-third'>
        {translations?.['about_third']}
        </p>
        <p className='about-grateful'>
        {translations?.['about_grateful']}
        </p>
        <p className='about-name'>
          <span>Josué López</span>
          <span>{translations?.['about_work_name']}</span>
        </p>
      </div>
    </div>
  );
}

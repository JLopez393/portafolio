import Switch from '@mui/material/Switch';
import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useDispatch, useSelector } from 'react-redux';
import { setLenguaje, getLenguaje } from '../../../features/lenguajeSlice';

export default function Navbar({ translations }: any) {
  const dispatch = useDispatch();
  const currentLanguage = useSelector(getLenguaje);
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const shouldFixNavbar = scrollTop > 0;
      setIsNavbarFixed(shouldFixNavbar);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarClassName = isNavbarFixed ? 'navbar-fixed' : '';

  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 58,
    height: 30,
    padding: 10,
    '& .MuiSwitch-switchBase': {
      margin: 1,
      padding: 0,
      transform: 'translateX(6px)',
      '&.Mui-checked': {
        color: '#fff',
        transform: 'translateX(22px)',
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: '#2cbe68',
      width: 25,
      height: 25,
    },
    '& .MuiSwitch-track': {
      opacity: 1,
      backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      borderRadius: 20 / 2,
    },
  }));

  const handleChange = (event: any) => {
    dispatch(setLenguaje(event.target.checked ? 'en' : 'es'));
  };

  return (
    <>
      
      <nav className={`navbar ${navbarClassName}`}>
        <input type='checkbox' id='check' />
        <label htmlFor='check' className='checkbtn'>
          <i className='bx bx-menu'></i>
        </label>
        {/* <label className='logo'>
          
        </label> */}
        <div className='lenguaje'>
            <p>es</p>
            <FormControlLabel
              control={
                <MaterialUISwitch
                  sx={{ m: 1 }}
                  defaultChecked={currentLanguage === 'en' ? true : false}
                  onChange={(event) => handleChange(event)}
                />
              }
              label='en'
            />
          </div>
        <ul>
          <li>
            <a href='/portafolio/home'>{translations?.['navbar_home']}</a>
          </li>
          <li>
            <a href='/portafolio/about'>{translations?.['navbar_about']}</a>
          </li>
          <li>
            <a href='/portafolio/experience'>{translations?.['navbar_experience']}</a>
          </li>
          <li>
            <a href='/portafolio/home'>{translations?.['navbar_contact']}</a>
          </li>
        </ul>
      </nav>
      <section></section>
    </>
  );
}

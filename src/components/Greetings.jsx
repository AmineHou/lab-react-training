import React from 'react';

const Greetings = (props) => {
  console.log(props);

  const greetLang = {
    en: 'Hello',
    fr: 'Bonjour',
    de: 'Hallo',
    es: 'Hola',
  };

  if (props.lang === 'en') {
    return (<p className='greeting'>{greetLang.en} {props.children}</p>);
  } else if (props.lang === 'fr') {
    return (<p className='greeting'>{greetLang.fr} {props.children}</p>);
  } else if (props.lang === 'es') {
    return (<p className='greeting'>{greetLang.es} {props.children}</p>);
  } else if (props.lang === 'de') {
    return (<p className='greeting'>{greetLang.de} {props.children}</p>);
  }
};

export default Greetings;

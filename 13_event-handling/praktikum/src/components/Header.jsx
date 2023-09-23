import React, { useState } from 'react';
import Article from "../Article"


function Header() {
  const [language, setLanguage] = useState("en"); //Set default language in English
  function handleChangeLanguage() {
    setLanguage(language === 'en' ? 'id' : 'en');
  }

  const currentLanguageTitle = Article.title[language] || Article.title.en;
  const currentLanguageContent = Article.description[language] || Article.description.en;

  return (
    <>
     <div className="container">
        <img
          src={process.env.PUBLIC_URL + '/assets/bootstrap-logo.svg.png'}
          alt="bootstrap-logo"
          className="mx-auto d-block m-3"
        />
        <h1 className="text-center w-auto">{currentLanguageTitle}</h1>
        <p className="text-center w-auto p-3">
        {currentLanguageContent}
        </p>
        <div className="d-flex gap-4 justify-content-center mb-4">
          <button className="btn btn-primary p-2" onClick={() => {console.log(Math.floor(Math.random() * 100));}}>Number Generator</button>
          <button className="btn btn-primary p-2" onClick={handleChangeLanguage}>Change Language</button>
    
        </div>
      </div>
    </>
  )
}

export default Header;
import React, { useState } from 'react';
import Article from "../../Article"
import LogoBootstrap from "../../assets/bootstrap-logo.svg.png"

function Header() {
  const [language, setLanguage] = useState("en");
  
  function handleChangeLanguage() {
    setLanguage(language === 'en' ? 'id' : 'en');
  }

  const currentLanguageTitle = Article.title[language] || Article.title.en;
  const currentLanguageContent = Article.description[language] || Article.description.en;

  return (
    <>
      <div className="container">
        <img
          src={LogoBootstrap}
          alt="bootstrap-logo"
          className="mx-auto d-block m-3"
        />
        <h1 className="text-center w-auto">{currentLanguageTitle}</h1>
        <p className="text-center w-auto p-3">
          {currentLanguageContent}
        </p>
        <div className="d-flex gap-4 justify-content-center mb-4">
          <button id='header-btn' className="btn btn-info p-2 text-white" onClick={() => { console.log(Math.floor(Math.random() * 100)); }}>Number Generator</button>
          <button id='header-btn' className="btn btn-info p-2 text-white" onClick={handleChangeLanguage}>Change Language</button>
        </div>
      </div>
    </>
  )
}

export default Header;
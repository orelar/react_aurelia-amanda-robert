import React from 'react';

function Header() {
  return (
    <>
     <div className="container">
        <img
          src={process.env.PUBLIC_URL + '/assets/bootstrap-logo.svg.png'}
          alt="bootstrap-logo"
          className="mx-auto d-block m-3"
        />
        <h1 className="text-center w-auto">Create Product</h1>
        <p className="text-center w-auto p-5">
          Below is an example form built entirely with Bootstrap’s form
          controls. Each required form group has a validation state that can be
          triggered by attempting to submit the form without completing it.
        </p>
      </div>
    </>
  )
}

export default Header;
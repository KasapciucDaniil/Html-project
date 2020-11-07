import React from 'react'

export const FooterInfo = () => {
  return (
    <div className="footer-info">
       <div className="txt-logo">
        <h5 className="footer-info-txt" >Sensor Tower has been a strong tool by helping our teams understand the opportunities in the mobile gaming market, discover trends and drive growth for our game studios.</h5>
        <figure className="figure figure-logo">
        <img className="foto" src="../Foto.png" alt="fig" />
        <div>
         <p style={{color: 'white', marginTop: '1rem', marginLeft: '1rem'}}>Katie Jansen</p>
         <p style={{color: '#999', marginLeft: '1rem'}}>APPLOVIN</p>
        </div>
        </figure>
       </div>
      </div>
  )
}
import React from 'react'

export const FooterHome = () => {
  return (
    <div className="home-footer" >
      <h4 className="footer-title">ALREADY TRUSTED BY THESE LEADERS IN MOBILE</h4>
      <div className="footer-img">
        <img src="../logo1.png" alt="logo1" height={35} width={50} />
        <img style={{marginLeft: '2rem'}} src="../logo2.png" alt="logo2" height={45} width={120}/>
        <img style={{marginLeft: '2rem'}} src="../logo3.png" alt="logo3" height={35} width={230} />
        <img style={{marginLeft: '2rem'}} src="../logo4.png" alt="logo4" height={35} width={230} />
        <img style={{marginLeft: '2rem'}} src="../logo5.png" alt="logo5" height={35} width={150}/>
        <img style={{marginLeft: '2rem'}} src="../logo6.png" alt="logo6" height={35} width={100}/>
      </div>
    </div>
  )
}
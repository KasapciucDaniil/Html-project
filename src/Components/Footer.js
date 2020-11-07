import React from 'react'

export const Footer = () => {
  return (
    <div className="main-footer">
      <h4 className="main-footer-title">SENSOR TOWER DATA IS REGULARLY CITED BY</h4>
      <div className="footer-brand">
         <img style={{marginLeft: '2rem'}} src="../brand1.png" height={32} width={260} alt="logo"/> 
         <img style={{marginLeft: '2rem'}} src="../brand2.png" height={45} width={150} alt="logo"/> 
         <img style={{marginLeft: '2rem'}} src="../brand3.png" height={35} width={140} alt="logo"/> 
         <img style={{marginLeft: '2rem'}} src="../brand4.png" height={45} width={200} alt="logo"/> 
         <img style={{marginLeft: '2rem'}} src="../brand5.png" height={35} width={160} alt="logo"/> 
      </div>

      <div className="main-second-footer">
         <div className="info-div">
           <h5 style={{color: 'white', marginLeft: '2.5rem'}} >Info</h5>

           <ul>
             <li className="footer-li">About</li>
             <li className="footer-li">Blog</li>
             <li className="footer-li">Academy</li>
             <li className="footer-li">Help</li>
             <li className="footer-li">Solutions</li>
             <li className="footer-li">Pricing</li>
             <li className="footer-li">Careers</li>
           </ul>
         </div>

         <div className="links-div">
         <h5 style={{color: 'white', marginLeft: '2.5rem'}} >Quick Links</h5>
          <ul>  
            <li style={{marginTop: '1rem'}} className="footer-li">App Category Rankings</li>
          </ul>

          <h5 style={{color: 'white', marginLeft: '2.5rem', marginTop: '2rem'}} >Languages</h5>

          <ul>
             <li className="footer-li">English</li>
             <li className="footer-li">日本語</li>
             <li className="footer-li">한국어</li>
             <li className="footer-li">中文简体</li>
           </ul>
         </div>

         <div className="blog-div">
         <h5 style={{color: 'white', marginLeft: '2.5rem'}} >Recent Blog Posts</h5>
          <ul>  
            <li className="footer-li">Pokémon GO Hits $1 Billion in 2020 as Lifetime...</li>
            <li className="footer-li">Understand Ad Impact with Share of Voice and...</li>
            <li className="footer-li">Merger Magic: How M&A Is Shaking Up Categ...</li>
            <li className="footer-li">U.S. Home Improvement Brand App Adoption ...</li>
            <li className="footer-li">Genshin Impact Hits Nearly $250 Million in Its...</li>
          </ul>
         </div>

         <div className="contact-div">
           <h5 style={{color: 'white', marginLeft: '2.5rem'}} >Contact Us</h5>

           <ul>  
            <li className="footer-li">General: info@sensortower.com</li>
            <li className="footer-li">Sales: sales@sensortower.com</li>
            <li className="footer-li">Careers: recruiting@sensortower.com</li>
            <li className="footer-li">Press: press@sensortower.com</li>
          </ul>
          <div className="social-div">
            <img style={{cursor: 'pointer'}} src="../facebook.png" height={40} width={40} alt="log"/>
             <img style={{marginLeft: '0.5rem', cursor: 'pointer'}} src="../twitter.png" height={40} width={40} alt="log"/>
             <img style={{marginLeft: '0.5rem', cursor: 'pointer'}} src="../Linked.png" height={40} width={40} alt="log"/>
          </div>
         </div>
      </div>

      <div className="last-footer">
        <p className="info-last-footer" style={{color: 'white'}}>2020 © Sensor Tower Inc. - All Rights Reserved.</p>
        <ul className="ul-div">
          <li className="footer-li">Privacy </li>
          <li style={{marginLeft: '0.5rem'}} className="footer-li">Terms</li>
          <li style={{marginLeft: '0.5rem'}} className="footer-li">Security</li>
        </ul>
      </div>
    </div>
  )
}
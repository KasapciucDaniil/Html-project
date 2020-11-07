import React from 'react'

export const Header = () => (
    <div className="header">
      <div>
         <img 
           src="../logo192.png" 
           alt="logo"
           height={80}
           width={80}
           style={{marginTop: '0.5rem'}}
         />
      </div> 
      <div className="nav-router" >
         <p className="header-title">Home</p>
            <p className="header-title">Solutions</p>
               <p className="header-title">Pricing</p>
                 <p className="header-title">Productions</p>
                 <p className="header-title">Blog</p>
               <p className="header-title">Careers</p>
            <p className="header-title">Resources</p>
         <p className="header-title">Login</p>
      </div> 
    </div>
)
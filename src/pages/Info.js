import React from 'react'

export const Info = () => {
  return (
    <div className="info-page">
      <h4 className="info-title" >Data to Answer Critical Business Questions</h4>
      <div className="main-info">
        <div className="info-block-1">
          <img className="img-block" src="bzn1.jpeg" alt="l"  height={90} width={90} />
          <div>
           <h5 className="info-block-title">How is the mobile ecosystem changing?</h5>
           <p className="info-block-txt">Sensor Tower is relied upon by financial analysts, VCs, and publishers who are leveraging the data to identify the fastest growing apps, emerging markets, and more.</p>  
          </div>  
        </div>
        <div className="info-block-2">
          <img className="img-block" src="bzn2.jpeg" alt="l"  height={90} width={90} />
          <div> 
           <h5 className="info-block-title">What will help me increase traffic to my app?</h5>
           <p className="info-block-txt">Discover new keywords that will drive the right users to your app page. Develop a clear action plan, tailored to your app, to help you rank in search.</p>
          </div>
        </div>
       </div>  

       <div className="main-info">
        <div className="info-block-1">
         <img className="img-block" src="bzn3.jpg" alt="l"  height={90} width={90} />
          <div>
           <h5 className="info-block-title">What are the best apps doing?</h5>
           <p className="info-block-txt">Get custom alerts when a competitor soft-launches or makes a new strategic move. Know what's working for your competition before even they do.</p> 
          </div>   
        </div>
        <div className="info-block-2">
         <img className="img-block" src="bzn4.jpeg" alt="l"  height={90} width={90} />
          <div>
            <h5 className="info-block-title">How do my ad campaigns measure up?</h5>
            <p className="info-block-txt">Get a real-time leaderboard of the top mobile advertisers each week. See who is running new campaigns and which creatives are working.</p>
          </div>
        </div>
       </div>  
    </div>
  )
}
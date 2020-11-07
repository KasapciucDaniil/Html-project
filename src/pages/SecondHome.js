import React from 'react'

export const SecondHome = () => {
  return (
    <div className="second-page">
      <h3 className="main-title">Gain Valuable Insights On The Greater App Economy</h3>

      <div className="card-info">
        <img src="../card1.png" alt="logo" height={250} width={400}/>
        <div>
          <div className="title-btn">
           <h3 className="title-card">App Teardown</h3>
            <div className="app-button"><h5 className="title-btn">NEW</h5></div>
          </div>
          <h5 className="second-title">Competitive Technical Insights At Your Fingertips</h5>
          <p className="card-txt" style={{marginLeft: '1rem'}}>With App Teardown, your team will be able to see which SDKs are commonly present across both the App Store and Google Play. You can also identify which SDKs are dominant in certain app categories, game subcategories, or revenue thresholds, and how apps with a certain SDK have performed worldwide over the past month.</p>
          <h5 className="learn-more">LEARN MORE ...</h5>
        </div>
      </div>

      <div className="card-info-left">
        <div>
        <h3 className="title-card-left">Usage Intellingence</h3>
          <h5 className="second-title-left">The metrics you need to sepparate app growth from noise.</h5>
          <p className="card-txt" style={{marginRight: '1rem'}}>Which apps are still on users’ devices? How many users return daily, weekly, and monthly to the top apps?

          With Usage Intelligence you can measure the metrics that really matter. You can validate investment decisions, explore the before and after effects of a large product or marketing launch, understand which game mechanics drive adoption, and more.</p>
          <h5 className="learn-more-left">LEARN MORE ...</h5>
        </div>
        <img src="../card2.png" alt="log" height={250} width={400} />
      </div>

      <div className="card-info">
        <img src="../card3.png" alt="logo" height={250} width={400}/>
        <div>
          <h3 className="title-card">App Intelligence</h3>
          <h5 className="second-title">Drive organic growth with the leading App Store Optimization platform.</h5>
          <p className="card-txt" style={{marginLeft: '1rem'}}>App Store Optimization is a key pillar in a well-rounded approach to app growth and user acquisition. ASO and paid campaigns are complementary growth strategies that together drive significant and lasting gains in app store rankings and user growth. With App Intelligence, monitor all aspects of your app's global storefront, track, test, and optimize keyword strategy, and keep a close eye on your competition..</p>
          <h5 className="learn-more">LEARN MORE ...</h5>
        </div>
      </div>

      <div className="card-info-left">
        <div>
        <h3 className="title-card-left">Store Intellingence</h3>
          <h5 className="second-title-left">Make strategic decisions with the industry's most accurate estimates.</h5>
          <p className="card-txt" style={{marginRight: '1rem'}}>Robust algorithms and hundreds of millions of data points power Store Intelligence, enabling deep and actionable insight into the App Store and Google Play. Store Intelligence offers unparalleled web-based analysis of downloads and revenue estimates for millions of apps, thousands of publishers, and all major countries and categories.</p>
          <h5 className="learn-more-left">LEARN MORE ...</h5>
        </div>
        <img src="../card4.png" alt="log" height={250} width={400} />
      </div>

      <div className="card-info">
        <img src="../card5.png" alt="logo" height={250} width={400}/>
        <div>
          <h3 className="title-card">Ad Intelligence</h3>
          <h5 className="second-title">Discover top creatives.Shape your user acquisition strategy.</h5>
          <p className="card-txt" style={{marginLeft: '1rem'}}>Ad Intelligence is driven by hundreds of millions of mobile ad impressions from all major ad networks and app data from our App Intelligence platform. Uncover insights such as which app publishers spend the most on mobile app campaigns each week, which networks serve impressions for specific apps, and the granular details for every piece of creative content captured.</p>
          <h5 className="learn-more">LEARN MORE ...</h5>
        </div>
      </div>
    </div>
  )
}
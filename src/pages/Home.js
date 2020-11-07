import React from 'react'
import {Form, Button, FormControl} from 'react-bootstrap'

export const Home = () => {
    return(
       <div className="home-page" >
         <h1 className="display-4 home-title" style={{textAlign: 'center', color: 'white'}}>Data That Drives App Growth</h1>  
          <h3 className="home-txt">Sensor Tower equips you with the data and    insights
          <br /> 
          needed to master the mobile app ecosystem.</h3>

          <Form className="form-home" inline>
            <FormControl type="text" placeholder="How is your app doing? Enter an app name..." className="input" />
          </Form>

         <div className="btns-form">
            <Button className="btn" variant="info" >
             <strong className="btn-title" >Requst a Demo</strong> 
            </Button>

            <Button style={{marginLeft: '2rem'}} className="btn" variant="outline-success" >
             <strong className="btn-title">Sign up for free</strong>
            </Button>
         </div> 
       </div> 
    )
}
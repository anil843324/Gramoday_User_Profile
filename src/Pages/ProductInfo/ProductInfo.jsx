import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Modaal from '../../components/MOdal/Modaal'
import "./ProductInfo.css"
const ProductInfo = () => {

   const[opened,setOpened]=useState(false)

  const navigate= useNavigate() 

  return (
    <div className='report-container'>



      <div className='report'>

        <div className='contact'>
          <div className='contact-creator'>
            <div className='contact-creator-info'>
              <div className='display-picture-container'>
                <img src="	https://app.gramoday.net/static/media/defaultUserDp.3e1b0347.svg" alt="user" className='display-picture' 
                  style={{cursor:"pointer"}}
                  onClick={()=>{navigate('/')}}
                />

              </div>
              <div className='contact-creator-details'>
                <span className='contact-creator-name'>
                  <h4>ZABIULLA</h4>
                  <span>
                    5
                    <img src="	https://app.gramoday.net/static/media/star.e5a643aa.svg" alt="stars" />
                  </span>
                </span>
                <span className='contact-loaction'>
                  Bangalore , KA
                </span>

              </div>
            </div>
            <img src="https://app.gramoday.net/static/media/call_user.83caedee.svg" alt="call-user"
             style={{cursor:"pointer"}}
            
            onClick={() => setOpened(!opened)}
             />
          </div>
          <hr className='contact-break' />
          <div className='contact-mandi'>
            <div>

              <p className='contact-mandi-details'>
                Yeshwanthapura Mandi , Bangalore , KA
              </p>
              <p className='contact-mandi-date'>15 June, 2022</p>

            </div>
            <div className='contact-mandi-ask-info'>
              <img src="	https://app.gramoday.net/static/media/askInfo.8170e54d.svg" alt="ask-info"
              onClick={() => setOpened(!opened)}
               />
              <p>Ask Info</p>

            </div>


          </div>

        </div>
        <div className='content-table-secondary'>

          <div className='content-table-heading-secondary'>
            <span>Rates</span>
            <img src="https://app.gramoday.net/static/media/rupeeLogo.dad22f98.svg" alt="Rupee_logo" />
          </div>

          <div className='content-table-items'>

            <div className='content-table-items-item'>
              <span>3797 (Bumper)</span>
              <span>20-21</span>
            </div>
            <div className='content-table-items-item'>
              <span>Kolar (Bumper)</span>
              <span>15-26</span>
            </div>
            <div className='content-table-items-item'>
              <span>Chipsona</span>
              <span>18-21</span>
            </div>
            <div className='content-table-items-item'>
              <span>LR (MP) (Bumper)</span>
              <span>19-20</span>
            </div>
            <div className='content-table-items-item'>
              <span>Joti (MP) (Bumper)</span>
              <span> 18-20</span>
            </div>

            <div className='content-table-items-item'>
              <span>302 (Bumper)</span>
              <span>18-19</span>
            </div>



          </div>

          <span className='content-table-information'>
            Rates are in ₹/1 Kg and exclude mandi commission and tax
          </span>

        </div>
        <div className='content-table-primary'>

          <div className='content-table-heading-primary'>
            <span>Arrival</span>
            <img src="https://app.gramoday.net/static/media/truckLogo.6564df95.svg" alt="Rupee-logo" />
          </div>
          <div className='content-table-items'>

            <div className='content-table-items-item'>
              <span>Fresh Arrival</span>
              <span>185000</span>
            </div>

            <div className='content-table-items-item'>
              <span>Balance Arrival</span>
              <span>2000</span>
            </div>

          </div>
          <span className='content-table-information'>
            Arrivals are in Large Trucks. 1 Large Trucks = 20 Tons
          </span>


        </div>
        <div className='report-analysis'>
          <div className='report-analysis-heading'>
            <span>Analysis</span>
            <img src="https://app.gramoday.net/static/media/personLogo.41e2406f.svg" alt="Person-logo" />
          </div>
          <div className='report-analysis-text'>

            <span>sale is ok .</span>

          </div>

        </div>
        {/* <div className='share-card'></div> */}

      </div>
      <div className='share-card'>
           <div className='share-card-info'>
                  <span>1 People Thanked</span>
                  <span className='share-card-info-date'>Updated at 10:36</span>
           </div> 
           <hr  className='share-card-break'/>
           <div className='share-card-buttons'>
                 <div>
                      <div className='share-card-action'>
                         <img src="	https://app.gramoday.net/static/media/thanks.23b859c2.svg" alt="Thanks-logo" 

                   onClick={() => setOpened(!opened)}
                         />
                         <p>Thanks</p>
                      </div>
                      <div className='share-card-action'>
                        <img src="	https://app.gramoday.net/static/media/whatsappShare.64ba0b85.svg" alt="whatsapp-share-logo" />
                        <p>Share</p>
                      </div>
                 </div>
                 <div className='share-card-big-button'>
                       <button className='action-button action-button-lg'
                       style={{backgroundColor:"rgb(210,170,27)"}}
                       
                   onClick={() => setOpened(!opened)}
                       >
                       
                      <img src="https://app.gramoday.net/static/media/interested.59b385b4.svg" alt="Interrested" 

                      />
                         
                         <span style={{color:"rgb(255,255,255)"}}>Interested</span>
                       </button>                    
         
                 </div>
                  

           </div>
           <div style={{textAlign:"center"}} >
            
            <div className='share-card-play-store-card' >
                  
                  <div >
                    <span>Join the agricultural community</span>

                  </div>
                  <div>
                  <a href="https://play.google.com/store/apps/details?id=net.gramoday.agriculture">
                   Download Gramodaya
                  </a>

                  </div>


            </div>

                 </div> 


      </div>


      <Modaal opened={opened} setOpened={setOpened}  />


    </div>
  )
}

export default ProductInfo
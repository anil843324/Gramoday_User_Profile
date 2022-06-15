import React, { useState } from 'react'
import Business from '../../components/Business/Business'
import Contact from '../../components/Contact_Details/Contact'
import "./Profile.css"
const Profile = () => {
     
   const [toggle,setToggle]=useState(true)

    const business=()=>{

      setToggle(true)
    }

    const review=()=>{
      setToggle(false)

    }
   
  return (
    <div>


      <Contact />

      <div className='profile-choice'>


        <button
          className={ 'profile-choice-btn-active' + ( toggle ? '':'profile-choice-btn-active') }
           
          onClick={ ()=>{business()}}
        >
          Business
        </button>
        <button
         className={ 'profile-choice-btn-active' + ( toggle ? 'profile-choice-btn-active':'') }
         onClick={()=> {review()}}
        >
         
          Review
        </button>
      </div>
       {
        toggle ? <Business /> : <> 
       
        
         </> 
       }
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
  )
}

export default Profile
import React from 'react'

import "./Business.css"
const Business = () => {
  return (
    <div className='business'>


      <div className='business-details'>

        <h4>Commision Agent</h4>

        <div className='business-details-info'>

          {/* first */}
          <div>

            <div className='business-details-info-key'>
              Market Name

            </div>
            <div className='business-details-info-value'>

              Yeshwanthapura Mandi
            </div>

          </div>

          {/*  second */}


          <div>
            <div className='business-details-info-key'>
              Firm Name
            </div>
            <div className='business-details-info-value'>
              MM Trading Company and Haji Dawood Usman and sons
            </div>


          </div>

          {/*  third */}
          <div>
            <div className='business-details-info-key'>
              Shop Number
            </div>
            <div className='business-details-info-value'>
              200
            </div>

          </div>


        </div>



      </div>

      {/* Products Heading */}

      <div className='products-heading'>
        <h4>Products</h4>
      </div>

      {/* product */}

      <div className='product'>

        <div className='product-info'>

          <div className='product-display'>
            <img src="https://gramoday-images-public.s3.ap-south-1.amazonaws.com/commodity/605d761693c86f0017bfddfa" alt="product-img" />
          </div>

          <div className='product-details'>

            <span className='product-details-name'>Potato Mandi Rates</span>
            <span className='product-details-mandi-name'>Yeshwanthapura Mandi, Bangalore, KA</span>
            <span className='product-details-date'> 13/06/2022</span>
            <span className='product-details-weight'>₹ 20 - 21 / Kg </span>
            <div className='product-date'>Updated at 6:14 PM</div>

          </div>

          <button className='product-see-details'>

            <img src="https://app.gramoday.net/static/media/seeDetailsDots.802d07fd.svg" alt="see details" />

          </button>

        </div>
        <hr className='product-hr' />
        <div className='product-button'>

                {/* first button */}
             <button className='share-button share-button-md' >
              <img src="https://app.gramoday.net/static/media/whatsappLogo.ef512021.svg" alt="share" />
               <span>Share</span>
             </button>
            {/*  second button */}
              <button className='action-button action-button-md' type='button' style={{backgroundColor:"rgb(210,170,27)"}} >
              <img src="	https://app.gramoday.net/static/media/interested.59b385b4.svg" alt="Interseted" />
                  
                   <span style={{color:"rgb(255,255,265)"}}>Interested</span>
              </button>

        </div>

      </div>





    </div>
  )
}

export default Business
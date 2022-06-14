import React from 'react'
import "../Business/Business.css"
const Product = ({ele}) => {
  return (
    <div className='product'>

        <div className='product-info'>

          <div className='product-display'>
            <img src="https://gramoday-images-public.s3.ap-south-1.amazonaws.com/commodity/605d761693c86f0017bfddfa" alt="product-img" />
          </div>

          <div className='product-details'>

            <span className='product-details-name'>{ele.cmdtyStdName} Mandi Rates</span>
            <span className='product-details-mandi-name'>{ele.posts[0].marketStdName} ,{ele.posts[0].loclevel3Name} , {ele.posts[0].loclevel2ShortName} </span>
            <span className='product-details-date'> {ele.posts[0].updatedAt.split("T")[0]}</span>
            <span className='product-details-weight'>₹ {ele.posts[0].priceDetails[0].minPrice} - {ele.posts[0].priceDetails[0].maxPrice} /  {ele.posts[0].rawReportPriceUnit }     </span>
            <div className='product-date'>Updated at  {ele.posts[0].updatedAt.split("T")[1].split(":")[0]} :  {ele.posts[0].updatedAt.split("T")[1].split(":")[1]} PM </div>

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
  )
}

export default Product
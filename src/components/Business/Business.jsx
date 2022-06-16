import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Product from '../Product/Product'

import "./Business.css"
const Business = () => {

    const [products, setProducts]=useState()
  
   
    const url='https://api.gramoday.net:8082/v1/user/bySlug?profileSlug=mmtradingco'
  
     const fetchData=()=>{

           axios.get(url)
           .then((response)=> {

            setProducts(response.data.products)
           })
           .catch((error)=>console.error(`Error : ${error}`))
     }

       useEffect(() => {

        fetchData()
       
     
    }, [ ])

    

     
  

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


     

         {
              products && products.map((ele,index)=>(

                <Product  ele={ele} key={index}  />
              )
          
              )

         }


    

     





    </div>
  )
}

export default Business
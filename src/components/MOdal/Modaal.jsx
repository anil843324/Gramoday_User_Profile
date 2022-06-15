import React, { useState } from 'react'
import { Modal } from '@mantine/core';

import "./Modaal.css"
const Modaal = ({opened,setOpened}) => {

    // const [, ] = useState(false);


  return (
    <div  className='ceneter' > 
    {
        opened ?  <>
        <Modal
    opened={opened}
    onClose={() => setOpened(false)}
    centered
    
     size={345}
  >
    {/* Modal content */}
      <div className='prompt-title'>
       <h3>You need to download the Gramoday App for this action</h3> 
       <button   onClick={() => setOpened(!opened)}>
        <img src="	https://app.gramoday.net/static/media/close-modal.fa32310a.svg" alt="close modal" />
       </button>
      </div>
      <p className='prompt-message'>Do you want to go to the play store ?</p>

      <div className='prompt-buttons'>
         
         <button
         onClick={() => setOpened(!opened)}
         >Yes</button>
            <button
            onClick={() => setOpened(!opened)}
            >No</button>

      </div>
     
    </Modal> 
        </> : <></>
    }
   

  
  </div>
  )
}

export default Modaal
import React from 'react'

const Footerdiv = () => {
    return (
       
            <div
                class="d-flex  text-center fo  py-3 px-2  align-items-center justify-content-between  bg-dark ft">

                  
                <div class="text-white mb-3 mb-md-0 ft">
                    Copyright © 2020 -<a style={{textDecorationStyle:"unset"}} className='text-white' href='https://facebook.com/technicalranjit'><strong>Technicalranjit</strong></a> All rights reserved.
                </div>
           

                <div>
                    <a href="/" class="text-white me-4">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="/" class="text-white me-4">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="/" class="text-white me-4">
                        <i class="fab fa-google"></i>
                    </a>
                    <a href="/" class="text-white">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                </div>

            </div>
   
    )
}

export default Footerdiv

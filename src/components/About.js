import React from 'react'

const About = () => {
  return (
<>
      
          <div class="about-section paddingTB60 gray-bg" style={{marginBottom:"20vh"}}>
            <div class="container">
              <div class="row">
                <div class="col-md-7 col-sm-6">
                  <div class="about-title clearfix">
                    <h1>About <span>iNotebook</span></h1>
                    <h3>iNotebook-Your Cloud Notebook </h3>
                    <p class="about-paddingB">Cloud iNotebook is a online notebook where you can create your note which cannot be accesed by other user or keep it privately.</p>
                    <div class="about-icons">
                      <ul >
                        <li><a href="https://www.facebook.com/"><i id="social-fb" class="fa fa-facebook-square fa-3x social"></i></a> </li>
                        <li><a href="https://twitter.com/"><i id="social-tw" class="fa fa-twitter-square fa-3x social"></i></a> </li>
                        <li> <a href="https://plus.google.com/"><i id="social-gp" class="fa fa-google-plus-square fa-3x social"></i></a> </li>
                        <li> <a href="mailto:bootsnipp@gmail.com"><i id="social-em" class="fa fa-envelope-square fa-3x social"></i></a> </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-md-5 col-sm-6">
                  <div class="about-img">
                    <img src="https://devitems.com/preview/appmom/img/mobile/2.png" alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
        )
}

        export default About

import React from 'react'
import './contact.scss';

function Contact() {
  return (
    <div>
       <div data-aos="fade-right" >
        <h2 className='contactStart' id='contactAnchor' >Contact</h2>
      </div>
      <div data-aos="flip-left" class="container contact-form">
        <div class="contact-image">
          <img  src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact" />
        </div>
        <form action="mailto:diwedi1112@gmail.com" method="post" enctype="text/plain">
          <h3>Drop a Message</h3>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <input type="text" name="Name" class="form-control" placeholder="Your Name *"  />
              </div>
              <div class="form-group">
                <input type="text" name="Email" class="form-control" placeholder="Your Email *" />
              </div>
              <div class="form-group">
                <input type="text" name="Phone" class="form-control" placeholder="Your Phone Number *" />
              </div>
             
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <textarea name="Msg" class="form-control" id ='formTextEnter' placeholder="Your Message *"></textarea>
              </div>
            </div>
            <div class="form-group" id='contactButton'>
                <input type="submit" name="btnSubmit" class="btnContact" value="Send Message" />
              </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact

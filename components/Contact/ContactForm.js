
import { FaPhoneSquareAlt , FaMailBulk } from 'react-icons/fa'


const contactList = [{
  icon: <FaMailBulk/>,
  link: "mailto:stefdeboeck7@gmail.com",
  description: "stefdeboeck7@gmail.com"
},{
  icon: <FaPhoneSquareAlt/>,
  link: "tel:0493213046",
  description: "0493213046"
}]

const ContactForm = () => {

  return (
    <div className="contact-form__container">
      <h2 className='desktop-only'>Reach out!</h2>
      <div className="contact__form">
        {contactList.map((contact, index) => {
          return (
            <div className='contact__container' key={'contact' + index}>
              <a href={contact.link}>
                <div className="contact__content">
                {contact.icon}
                <p>{contact.description}</p>
                </div>
              </a>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default ContactForm;
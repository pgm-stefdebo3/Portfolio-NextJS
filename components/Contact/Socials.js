import { FaLinkedinIn , FaGithub, FaInstagram } from 'react-icons/fa'

const Socials = () => {
  const socialList = [{
    icon: <FaLinkedinIn/>,
    alt: "Linkedin Icon",
    link: "https://www.linkedin.com/in/stef-de-boeck-22a802221/"
  },{
    icon: <FaGithub/>,
    alt: "Github Icon",
    link: "https://github.com/pgm-stefdebo3"
  },{
    icon: <FaInstagram/>,
    alt: "Instagram Icon",
    link: "https://www.instagram.com/stef_dbk/"
  }]

  return (
    <>
      <div className="socials">
        <h2>Follow me on</h2>
        {socialList.map((social, index) => {
          return (
            <a href={social.link} target="_blank" key={`social ${index}`} rel="noreferrer">
              {social.icon}
            </a>
          )
        })}
      </div>
      <div className="CV">
        <h4><a href="\assets\DeBoeckStef_CV.pdf" download>Download</a> my CV</h4>
        
      </div>
    </>
  );
}

export default Socials;
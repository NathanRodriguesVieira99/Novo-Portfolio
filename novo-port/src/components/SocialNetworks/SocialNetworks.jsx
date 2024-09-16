import { FaLinkedinIn, FaGithub, } from 'react-icons/fa';
import '../../styles/components/SocialNetworks/SocialNetworks.scss';

const socialMedias = [
  { name: 'linkedin', icon: <FaLinkedinIn /> },
  { name: 'github', icon: <FaGithub /> }
];

function SocialNetworks() {
  return (
    <>
      <section id="Social-Networks"> 
        {socialMedias.map((network) => (
          <a href="." className="social-btn" id={network.name} key={network.name}>
            {network.icon}
          </a>
        ))}
      </section>
    </>
  );
}

export default SocialNetworks;

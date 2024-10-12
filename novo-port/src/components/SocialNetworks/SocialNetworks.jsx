import { FaLinkedinIn, FaGithub, } from 'react-icons/fa';
import '../../styles/components/SocialNetworks/SocialNetworks.scss';

const socialMedias = [
  { name: 'linkedin', icon: <FaLinkedinIn />, url: 'https://www.linkedin.com/in/nathan-rodrigues-vieira-207747252/' },
  { name: 'github', icon: <FaGithub />, url: 'https://github.com/NathanRodriguesVieira99' }
];

function SocialNetworks() {
  return (
    <>
      <section id="Social-Networks">
        {socialMedias.map((network) => (
          <a href={network.url} target='_blank' className="social-btn" id={network.name} key={network.name}>
            {network.icon}
          </a>
        ))}
      </section>
    </>
  );
}

export default SocialNetworks;

import SocialNetworks from '../SocialNetworks/SocialNetworks'
import InformationContainer from '../InformationContainer/InformationContainer'

import Nathan from '../../assets/img/nathanRodrigues.jpeg'
import CV from '../../assets/CV Nathan/NathanRodriguesVieira_Curriculo.pdf'

import '../../styles/components/Sidebar/Sidebar.scss'


function Sidebar() {
  return (
    <aside id="sidebar">
      <img src={Nathan} alt="Imagem de Nathan Rodrigues" />
      <p className="title">Desenvolvedor Front-End</p>
      <SocialNetworks />
      <InformationContainer />
      <a href={CV} download='NathanRodriguesVieira_Curriculo.pdf' className="btn">
        Download currículo
      </a>
    </aside>
  )
}

export default Sidebar
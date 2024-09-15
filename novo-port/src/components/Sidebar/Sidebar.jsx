import Nathan from '../../assets/img/nathanRodrigues.jpeg'

import '../../styles/components/Sidebar/Sidebar.scss'

function Sidebar() {
  return (
    <aside id="sidebar">
      <img src={Nathan} alt="Imagem de Nathan Rodrigues" />
      <p className="title">Desenvolvedor Front-End</p>
      <a href="." className="btn">
        Download currículo
      </a>
    </aside>
  )
}

export default Sidebar
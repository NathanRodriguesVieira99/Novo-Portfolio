import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiReact,
  DiSass,
  DiGit
} from 'react-icons/di'

import '../../styles/components/TechnologiesContainer/TechnologiesContainer.scss'

const technologies = [
  { id: 'html', name: 'HTML5', icon: <DiHtml5 />, desc: 'Conhecimento em html semântico, criação de páginas web com acessibilide e fluidez' },
  { id: 'css', name: 'CSS3', icon: <DiCss3 />, desc: 'Conhecimentos em flexbox, responsividade, modularização e organização das folhas de estilo' },
  { id: 'js', name: 'JavaScript', icon: <DiJsBadge />, desc: 'Conhecimento em javascript ES6+, consumo de apis e manipulção do DOM' },
  { id: 'react', name: 'React', icon: <DiReact />, desc: 'Conhecimento em React em criação de páginas dinâmicas e interativas com componentes funcionais e hooks' },
  { id: 'sass', name: 'Sass', icon: <DiSass />, desc: ' Conhecimento em Sss, utilizando a sintaxe scss para melhor manutenção do CSS com uso de  variáveis, mixins,  aninhamento e modularização' },
  { id: 'git', name: 'Git', icon: <DiGit />, desc: 'Conhecimento em versionamento de código, comandos do git, hospedagem de repositórios no github etc' },
]

function TechnologiesContainer() {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className={`technologies-card ${tech.id}-card`} key={tech.id}>
            {tech.icon}
            <div className="technologies-info">
              <h3>{tech.name}</h3>
              <p>{tech.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechnologiesContainer

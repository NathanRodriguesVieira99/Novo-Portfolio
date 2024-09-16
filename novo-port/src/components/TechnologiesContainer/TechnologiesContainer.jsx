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
  { id: 'html', name: 'HTML5', icon: <DiHtml5 /> },
  { id: 'css', name: 'CSS3', icon: <DiCss3 /> },
  { id: 'js', name: 'JavaScript', icon: <DiJsBadge /> },
  { id: 'react', name: 'React', icon: <DiReact /> },
  { id: 'sass', name: 'Sass', icon: <DiSass /> },
  { id: 'git', name: 'Git', icon: <DiGit /> },
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
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel doloremque pariatur quibusdam maiores, nam qu.</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechnologiesContainer

import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from 'react-icons/ai';
import '../../styles/components/InformationContainer/InformationContainer.scss';

function InformationContainer() {
  return (
    <section id='information'>
      <div className="info-card">
        <AiFillPhone id='phone-icon' />
        <div>
          <h3>Telefone</h3>
          <p>(21) 96731-3703</p>
        </div>
      </div>
      <div className="info-card">
        <AiOutlineMail id='email-icon' />
        <div>
          <h3>E-mail</h3>
          <p>nathanrodriguesvieira99@gmail.com</p>
        </div>
      </div>
      <div className="info-card">
        <AiFillEnvironment id='pin-icon' />
        <div>
          <h3>Localização</h3>
          <p>Rio de Janeiro / RJ</p>
        </div>
      </div>
    </section>
  );
}

export default InformationContainer;

import { FooterStyled } from './styles';
import { FiInstagram, FiTwitch, FiLinkedin, FiHeart } from 'react-icons/fi';

const Footer = () => {
  return (
    <FooterStyled>
      <div>
        <p>
          Desenvolvido por <span>Raphael Jayme</span> <FiHeart />
        </p>
      </div>
      <ul>
        <li>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.twitch.tv/raphael_jayme"
          >
            <FiTwitch /> <span>Twitch</span>
          </a>
        </li>
        <li>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.instagram.com/rsjayme"
          >
            <FiInstagram /> <span>Instagram</span>
          </a>
        </li>
        <li>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/raphael-jayme-526a4873/"
          >
            <FiLinkedin /> <span>Linkedin</span>
          </a>
        </li>
      </ul>
    </FooterStyled>
  );
};

export default Footer;

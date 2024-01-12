import './Footer.css';

const Footer = () => {
  return (
    <footer className="container-footer">
      <div className="social-media">
        <a href="https://www.facebook.com/AluraCursosOnline/" target="_blank" rel="noreferrer">
          <img src="/images/fb.png" alt="Facebook da Alura" />
        </a>
        <a href="https://twitter.com/aluraonline" target="_blank" rel="noreferrer">
          <img src="/images/tw.png" alt="Twitter da Alura" />
        </a>
        <a href="https://www.instagram.com/aluraonline/" target="_blank" rel="noreferrer">
          <img src="/images/ig.png" alt="Instagram da Alura" />
        </a>
      </div>
      <img src="/images/brand.png" alt="Logo Organo"/>
      <p>Desenvolvido por Alura.</p>
    </footer>
  )
}

export default Footer;

import './Rodape.css'

const Rodape = () => {
    return (
      <section className="rodape">
        <div className="redes">
          <img src="/imagens/fb.png" alt="Facebook" />
          <img src="/imagens/ig.png" alt="Instagram" />
          <img src="/imagens/tw.png" alt="Twitter" />
        </div>
        <div className='logo'>
          <img src="/imagens/logo.png" alt="Twitter" />
        </div>
        <div>
          <p>Desenvolvido por Matheus Santos</p>
        </div>
      </section>
    );
}

export default Rodape;
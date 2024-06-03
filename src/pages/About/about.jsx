import React from 'react';
import './about.css';

export default function About() {
  return (
    <div className="pagina-sobre">
      <h1>Referências sobre o Projeto</h1>
      <div className="conteudo-sobre">
        <h2>Fontes de Dados e Imagens</h2>
        <ul>
      
          <li>
            <a href="https://www.nike.com/" target="_blank" rel="noopener noreferrer">
              Nike
            </a> - Para imagens e detalhes dos produtos.
          </li>
          <li>
            <a href="https://www.adidas.com/" target="_blank" rel="noopener noreferrer">
              Adidas
            </a> - Para imagens e detalhes dos produtos.
          </li>
        </ul>

        <h2>Tecnologias Utilizadas</h2>
        <ul>
          <li>
            <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
              React
            </a> - Biblioteca JavaScript para criar interfaces de usuário.
          </li>
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer">
              CSS
            </a> - Para estilização das páginas web.
          </li>
          <li>
            <a href="https://getbootstrap.com" target="_blank" rel="noopener noreferrer">
              Bootstrap
            </a> - Para estilização das páginas web.
          </li>
          <li>
            <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">
              Node.js
            </a> - Ambiente de execução para JavaScript no lado do servidor.
          </li>
        </ul>

        <h2>Design e Inspiração</h2>
        <ul>
          <li>
            <a href="https://dribbble.com/" target="_blank" rel="noopener noreferrer">
              Dribbble
            </a> - Para inspiração de design.
          </li>
          <li>
            <a href="https://www.behance.net/" target="_blank" rel="noopener noreferrer">
              Behance
            </a> - Para projetos de design inspiradores.
          </li>
        </ul>

        <h2>Agradecimentos</h2>
        <ul>
          <li>Equipe de desenvolvimento pela colaboração e esforço.</li>
          <li>Clientes e usuários por suas valiosas sugestões e feedback.</li>
        </ul>
      </div>
    </div>
  );
}

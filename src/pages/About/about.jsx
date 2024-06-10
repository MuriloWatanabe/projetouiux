import React from 'react';

export default function About() {
  return (
    <div class="p-[20px] max-w-[800px] m-0 m-auto">
      <h1 class="text-center mb-[20px] text-3xl">Referências sobre o Projeto</h1>
      <div class="bg-slate-50 p-[20px] rounded-xl shadow-md shadow-slate-150">
        <h2 class="mt-[20px] text-2xl pb-[5px] border-2	border-solid border-black">Fontes de Dados e Imagens</h2>
        <ul class="p-0 list-none">
      
          <li class="mb-[10px]">
            <a class="text-black no-underline	font-bold	transition-colors duration-300 hover:text-red-700" href="https://www.nike.com/" target="_blank" rel="noopener noreferrer">
              Nike
            </a> - Para imagens e detalhes dos produtos.
          </li>
          <li class="mb-[10px]">
            <a class="text-black no-underline	font-bold	transition-colors duration-300 hover:text-red-700" href="https://www.adidas.com/" target="_blank" rel="noopener noreferrer">
              Adidas
            </a> - Para imagens e detalhes dos produtos.
          </li>
        </ul>

        <h2 class="mt-[20px] text-2xl pb-[5px] border-2	border-solid	border-black	">Tecnologias Utilizadas</h2>
        <ul class="p-0 list-none">
          <li class="mb-[10px]">
            <a class="text-black no-underline	font-bold	transition-colors duration-300 hover:text-red-700" href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
              React
            </a> - Biblioteca JavaScript para criar interfaces de usuário.
          </li>
          <li class="mb-[10px]">
            <a class="text-black no-underline	font-bold	transition-colors duration-300 hover:text-red-700" href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer">
              CSS
            </a> - Para estilização das páginas web.
          </li>
          <li class="mb-[10px]">
            <a class="text-black no-underline	font-bold	transition-colors duration-300 hover:text-red-700" href="https://getbootstrap.com" target="_blank" rel="noopener noreferrer">
              Bootstrap
            </a> - Para estilização das páginas web.
          </li>
          <li class="mb-[10px]">
            <a class="text-black no-underline	font-bold	transition-colors duration-300 hover:text-red-700" href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">
              Node.js
            </a> - Ambiente de execução para JavaScript no lado do servidor.
          </li>
        </ul>

        <h2 class="mt-[20px] text-2xl pb-[5px] border-2	border-solid	border-black	">Design e Inspiração</h2>
        <ul class="p-0 list-none">
          <li class="mb-[10px]">
            <a class="text-black no-underline	font-bold	transition-colors duration-300 hover:text-red-700" href="https://dribbble.com/" target="_blank" rel="noopener noreferrer">
              Dribbble
            </a> - Para inspiração de design.
          </li>
          <li class="mb-[10px]">
            <a class="text-black no-underline	font-bold	transition-colors duration-300 hover:text-red-700" href="https://www.behance.net/" target="_blank" rel="noopener noreferrer">
              Behance
            </a> - Para projetos de design inspiradores.
          </li>
        </ul>

        <h2 class="mt-[20px] text-2xl pb-[5px] border-2	border-solid	border-black	">Agradecimentos</h2>
        <ul class="p-0 list-none">
          <li class="mb-[10px]">Equipe de desenvolvimento pela colaboração e esforço.</li>
          <li class="mb-[10px]">Clientes e usuários por suas valiosas sugestões e feedback.</li>
        </ul>
      </div>
    </div>
  );
}

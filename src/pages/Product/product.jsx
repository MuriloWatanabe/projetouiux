import React, { useState } from 'react';
import './product.css';

export default function Home() {
  const [tamanhoSelecionado, setTamanhoSelecionado] = useState(null);
  const [cep, setCep] = useState('');
  const [comentarios, setComentarios] = useState([
    { id: 1, autor: 'João Silva', texto: 'Ótimo tênis, muito confortável!' },
    { id: 2, autor: 'Maria Souza', texto: 'Adorei o design e serviu perfeitamente.' }
  ]);
  const [novoComentario, setNovoComentario] = useState('');

  const handleSizeClick = (tamanho) => {
    setTamanhoSelecionado(tamanho);
  };

  const handleCepChange = (e) => {
    setCep(e.target.value);
  };

  const handleCalcularFrete = () => {
    alert(`Calculando frete para o CEP: ${cep}`);
  };

  const handleNovoComentarioChange = (e) => {
    setNovoComentario(e.target.value);
  };

  const handleSubmitComentario = () => {
    const novoComentarioObj = {
      id: comentarios.length + 1,
      autor: 'Anônimo',
      texto: novoComentario
    };
    setComentarios([...comentarios, novoComentarioObj]);
    setNovoComentario('');
  };

  return (
    <main className="pagina-produto">
      <div className="container-produto">
        <div className="galeria-miniaturas">
          <img src="https://sneakernews.com/wp-content/uploads/2020/11/Nike-Kobe-6-Protro-3D-Lakers-CW2190-101-1.jpg" alt="Nike Kobe 6 3D" className="miniatura" />
          <img src="https://sneakernews.com/wp-content/uploads/2020/11/Nike-Kobe-6-Protro-3D-Lakers-CW2190-101-1.jpg" alt="Nike Kobe 6 3D" className="miniatura" />
          <img src="https://sneakernews.com/wp-content/uploads/2020/11/Nike-Kobe-6-Protro-3D-Lakers-CW2190-101-1.jpg" alt="Nike Kobe 6 3D" className="miniatura" />
          <div className="mais-imagens">+</div>
        </div>
        <div className="galeria-imagens">
          <img src="https://sneakernews.com/wp-content/uploads/2020/11/Nike-Kobe-6-Protro-3D-Lakers-CW2190-101-1.jpg" alt="Nike Kobe 6 3D" className="imagem-principal" />
        </div>
        <div className="detalhes-produto">
          <h1 className="titulo-produto">Nike Kobe 6 3D</h1>
          <p className="preco">R$199,99</p>
          <div className="opcoes-tamanho">
            <label>Tamanho:</label>
            <div className="botoes-tamanho">
              {[8, 9, 10, 11].map((tamanho) => (
                <button
                  key={tamanho}
                  className={`botao-tamanho ${tamanhoSelecionado === tamanho ? 'selecionado' : ''}`}
                  onClick={() => handleSizeClick(tamanho)}
                >
                  {tamanho}
                </button>
              ))}
            </div>
          </div>
          <div className="opcoes-quantidade">
            <label htmlFor="quantidade">Quantidade:</label>
            <input type="number" id="quantidade" name="quantidade" min="1" max="10" defaultValue="1" />
          </div>
          <button className="botao-comprar">Comprar Agora</button>
          <div className="opcoes-frete">
            <label htmlFor="cep">Digite seu CEP:</label>
            <input 
              type="text" 
              id="cep" 
              name="cep" 
              value={cep} 
              onChange={handleCepChange} 
              placeholder="CEP" 
            />
            <button className="botao-calcular-frete" onClick={handleCalcularFrete}>Calcular Frete</button>
            <a href="">Não sei meu CEP</a>
          </div>
        </div>
      </div>
      <div className="secao-comentarios">
        <h2>Comentários</h2>
        <div className="comentarios-existentes">
          {comentarios.map(comentario => (
            <div key={comentario.id} className="comentario">
              <p><strong>{comentario.autor}</strong></p>
              <p>{comentario.texto}</p>
            </div>
          ))}
        </div>
        <textarea 
          placeholder="Escreva seu comentário aqui..." 
          className="caixa-comentario" 
          value={novoComentario}
          onChange={handleNovoComentarioChange}
        ></textarea>
        <button className="botao-enviar-comentario" onClick={handleSubmitComentario}>Enviar Comentário</button>
      </div>
    </main>
  );
}

import React from 'react';

export default function LoginForm() {
  return (
    <div className="form-card">
      <div className="form-card-2">
        <form className="form">
          <h2 className="title-login">Acesso Restrito</h2>
          <div className="field">
            <span className="input-icon icon icon-user-1"></span>
            <input type="text" className="input-field" placeholder="Nome" autoComplete="off" />
          </div>
          <div className="field">
            <span className="input-icon icon icon-locked"></span>
            <input type="password" className="input-field" placeholder="Senha" />
          </div>
          <div className="box-btn">
            <button className="btn-login">Entrar</button>
            <a href="#" className="btn-login">Cadastrar</a>
          </div>
        </form>
      </div>
    </div>
  );
}

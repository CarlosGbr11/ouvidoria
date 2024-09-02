import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    telefone: '',
    email: '',
    endereco: '',
    bairro: '',
    pontoref: '',
    categoria: '',
    reclamacao: '',
    anexo: null
  });

  const [mensagemConfirmacao, setMensagemConfirmacao] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      anexo: e.target.files[0]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados enviados:', formData);
    
    setMensagemConfirmacao('Sua reclamação foi enviada com sucesso! Obrigado por entrar em contato.');

    setFormData({
      nome: '',
      cpf: '',
      telefone: '',
      email: '',
      endereco: '',
      bairro: '',
      pontoref: '',
      categoria: '',
      reclamacao: '',
      anexo: null
    });

    setTimeout(() => {
      setMensagemConfirmacao('');
    }, 10000); 
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input type="text" name="nome" value={formData.nome} onChange={handleChange} required />
        </div>

        <div>
          <label>CPF:</label>
          <input type="text" name="cpf" value={formData.cpf} onChange={handleChange} required />
        </div>

        <div>
          <label>Telefone:</label>
          <input type="tel" name="telefone" value={formData.telefone} onChange={handleChange} required />
        </div>

        <div>
          <label>E-mail:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div>
          <label>Endereço:</label>
          <input type="text" name="endereco" value={formData.endereco} onChange={handleChange} required/>
        </div>

        <div>
          <label>Bairro:</label>
          <input type="text" name="bairro" value={formData.bairro} onChange={handleChange} required />
        </div>

        <div>
          <label>Ponto de referência:</label>
          <input type="text" name="pontoref" value={formData.pontoref} onChange={handleChange} required />
        </div>

        <div>
          <label>Categoria da Reclamação:</label>
          <select name="categoria" value={formData.categoria} onChange={handleChange} required>
            <option value="">Selecione uma categoria</option>
            <option value="iluminacao_publica">Iluminação Pública</option>
            <option value="coleta_lixo">Coleta de Lixo</option>
            <option value="saude">Saúde</option>
            <option value="educacao">Educação</option>
            <option value="outro">Outro</option>
          </select>
        </div>

        <div>
          <label>Reclamação:</label>
          <textarea name="reclamacao" value={formData.reclamacao} onChange={handleChange} required />
        </div>

        <div>
          <label>Anexar Arquivo:</label>
          <input type="file" name="anexo" onChange={handleFileChange} />
        </div>

        <button type="submit">Enviar</button>
      </form>

      {mensagemConfirmacao && (
        <div className="mensagem-confirmacao">
          {mensagemConfirmacao}
        </div>
      )}
    </div>
  );
}

export default App;

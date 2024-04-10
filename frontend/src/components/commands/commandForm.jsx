// CommandForm.js
import { useState } from 'react';
import axios from 'axios';

const CommandForm = () => {
 const [commandName, setCommandName] = useState('');
 const [commandOutput, setCommandOutput] = useState('');
 const [successMessage, setSuccessMessage] = useState('');

 const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/commands', {
        commandName,
        commandOutput,
      });
      setSuccessMessage(response);
      setCommandName('');
      setCommandOutput('');
    } catch (error) {
      console.error('Erro ao salvar o comando:', error);
      setSuccessMessage('Erro ao salvar o comando.');
    }
 };

 return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome do Comando"
        value={commandName}
        onChange={(e) => setCommandName(e.target.value)}
      />
      <input
        type="text"
        placeholder="O que o Comando Gera"
        value={commandOutput}
        onChange={(e) => setCommandOutput(e.target.value)}
      />
      <button type="submit">Salvar</button>
      {successMessage && <p>{successMessage}</p>}
    </form>
 );
};

export default CommandForm;

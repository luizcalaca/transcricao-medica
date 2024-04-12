import { useState } from 'react';
import axios from 'axios';

const CommandForm = () => {
 const [nameCommand, setNameCommand] = useState('');
 const [textGenerated, setTextGenerated] = useState('');
 //const [userId, setUserId] = useState(1);
 const [successMessage, setSuccessMessage] = useState('');

 const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3012/commands/create', {
          nameCommand, 
          textGenerated,
          userId: 1,
      });
      console.info("RESPONSE", response)
      setSuccessMessage(response.data.message);
      setNameCommand('');
      setTextGenerated('');
    } catch (error) {
      console.error('Erro ao salvar o comando:', error);
      setSuccessMessage('Erro ao salvar o comando.');
    }
 };

 return (
    <div>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome do Comando"
        value={nameCommand}
        onChange={(e) => setNameCommand(e.target.value)}
      />
      <textarea
        type="text"
        placeholder="O que o Comando Gera"
        value={textGenerated}
        onChange={(e) => setTextGenerated(e.target.value)}
      />
      <button type="submit">Salvar</button>
      {successMessage && <p>{successMessage}</p>}
    </form>
    </div>
 );
};

export default CommandForm;

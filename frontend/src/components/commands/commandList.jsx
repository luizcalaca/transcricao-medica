// CommandList.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const CommandList = () => {
 const [commands, setCommands] = useState([]);

 useEffect(() => {
    const fetchCommands = async () => {
      try {
        const response = await axios.get('http://localhost:3012/commands/getalluser/1');
        setCommands(response.data);
      } catch (error) {
        console.error('Erro ao buscar comandos:', error);
      }
    };

    fetchCommands();
 }, []);

 return (
    <div>
      {commands?.length > 0 ? (
        <ul>
          {commands?.map((command) => (
            <li key={command.id}>
              {command.nameCommand} - {command.textGenerated}
            </li>
          ))}
        </ul>
      ) : (
        <p>Não há comandos disponíveis.</p>
      )} 
    </div>
 );
};

export default CommandList;

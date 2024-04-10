// CommandList.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const CommandList = () => {
 const [commands, setCommands] = useState([]);

 useEffect(() => {
    const fetchCommands = async () => {
      try {
        const response = await axios.get('/api/commands');
        setCommands(response.data);
      } catch (error) {
        console.error('Erro ao buscar comandos:', error);
      }
    };

    fetchCommands();
 }, []);

 return (
    <ul>
      {commands.map((command) => (
        <li key={command.id}>
          {command.commandName} - {command.commandOutput}
        </li>
      ))}
    </ul>
 );
};

export default CommandList;

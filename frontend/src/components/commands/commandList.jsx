// CommandList.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import VITE_API_URL from '../../utils/url_api';

const CommandList = () => {
 const [commands, setCommands] = useState([]);

 useEffect(() => {
    const fetchCommands = async () => {
      try {
        console.log("URL", VITE_API_URL)
        const response = await axios.get(`${VITE_API_URL}/commands/getalluser/1`);
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

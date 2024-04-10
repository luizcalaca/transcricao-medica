import CommandForm from './commandForm';
import CommandList from './commandList';

const Commands = () => {
 return (
    <div>
      <h2>Adicionar Comando</h2>
      <CommandForm />
      <h2>Lista de Comandos</h2>
      <CommandList />
    </div>
 );
};

export default Commands;

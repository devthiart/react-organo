import './Form.css';
import TextField from '../TextField';
import DropdownList from '../DropdownList';
import Button from '../Button';
import { useState } from 'react';

const Form = (props) => {
  const teams = [
    'Programação',
    'Front-End',
    'Data Science',
    'Devops',
    'UX e Design',
    'Mobile',
    'Inovação e Gestão'
  ]

  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [team, setTeam] = useState(teams[0]);

  const submitForm = (event) => {
    event.preventDefault();
    props.onRegisteredEmployee({name, role, imageUrl, team})
  }

  return (
    <section className="container-form">
      <form onSubmit={submitForm}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextField 
          label="Nome" 
          placeholder="Digite seu nome"
          value={name}
          onChange={value => setName(value)}
          isRequired={true}
        />
        <TextField 
          label="Cargo" 
          placeholder="Digite seu cargo" 
          value={role}
          onChange={value => setRole(value)}
          isRequired={true} 
        />
        <TextField 
          label="Imagem" 
          placeholder="Digite o endereço da imagem" 
          value={imageUrl}
          onChange={value => setImageUrl(value)}
        />
        <DropdownList 
          label="Time" 
          items={teams} 
          value={team}
          onChange={value => setTeam(value)}
          isRequired={true}
        />
        <Button>Criar Card</Button>
      </form>
    </section>
  )
}

export default Form;

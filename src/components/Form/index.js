import './Form.css';
import TextField from '../TextField';
import DropdownList from '../DropdownList';
import Button from '../Button';

const submitForm = (event) => {
  event.preventDefault();
  console.log(event);
  console.log("Saving data...");
}

const Form = () => {
  const team = [
    'Programação',
    'Front-End',
    'Data Science',
    'Devops',
    'UX e Design',
    'Mobile',
    'Inovação e Gestão'
  ]

  return (
    <section className="container-form">
      <form onSubmit={submitForm}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextField label="Nome" placeholder="Digite seu nome" isRequired={true}/>
        <TextField label="Cargo" placeholder="Digite seu cargo" isRequired={true} />
        <TextField label="Imagem" placeholder="Digite o endereço da imagem" />
        <DropdownList label="Time" items={team} isRequired={true} />
        <Button>Criar Card</Button>
      </form>
    </section>
  )
}

export default Form;

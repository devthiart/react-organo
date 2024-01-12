import './Employee.css';

const Employee = ({ name, imageUrl, role }) => {
  return (
    <div className='employee'>
      <div className='header'>
        <img src={imageUrl} alt={`Foto de ${name}`} />
      </div>
      <div className='footer'>
        <h4>{name}</h4>
        <h5>{role}</h5>
      </div>
    </div>
  )
}

export default Employee;

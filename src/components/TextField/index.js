import './TextField.css';

const TextField = (props) => {
  const modifiedPlaceholder = `${props.placeholder}...`;

  return (
    <div className='text-field'>
      <label>{props.label}</label>
      <input placeholder={modifiedPlaceholder} required={props.isRequired} />
    </div>
  )
}

export default TextField;

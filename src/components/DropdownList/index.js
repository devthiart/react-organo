import './DropdownList.css';

const DropdownList = (props) => {
  return (
    <div className="dropdown-list">
      <label>{props.label}</label>
      <select name={props.label} required={props.isRequired}>
        {props.items.map((item) => {
          return (<option key={item}>{item}</option>)
        })}
      </select>
    </div>
  )
}

export default DropdownList;
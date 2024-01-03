import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';

function App() {

  const [employees, setEmployees] = useState([]);

  const onNewEmployeeAdded = (employee) => {
    console.log("Employee: ", employee);
    setEmployees([...employees, employee]);
    console.log("Employee List: ", employees);
  }

  return (
    <div className="App">
      <Banner />
      <Form onRegisteredEmployee={employee => onNewEmployeeAdded(employee)} />
    </div>
  );
}

export default App;

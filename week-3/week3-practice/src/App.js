import { useEffect, useState } from "react";

function App() {

  const [name, setName] = useState('');
  const [sex, setSex] = useState('');

  useEffect(() => {
    console.log("App Component가 처음 Mount 됐을 때");
  },[]);

  useEffect(() => {
    console.log(`App Component가 Update 되었음 : ${name}`);
    console.log(`App Component가 Update 되었음 : ${sex}`);

  },[name, sex]);

  return (
    <div className="App">
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input value={sex} onChange={(e) => setSex(e.target.value)} />
    </div>
  );
}

export default App;

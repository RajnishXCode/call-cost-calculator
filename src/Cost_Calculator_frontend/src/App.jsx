import { useState } from 'react';
import { Cost_Calculator_backend } from 'declarations/Cost_Calculator_backend';

function App() {
  // const [greeting, setGreeting] = useState('');

  const [data, setData] = useState({
    count: 0,
    balanceBefore: 0,
    balanceAfter: 0,
    deduction: 0
  });

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    Cost_Calculator_backend.call_p2(name).then((res) => {
      // setGreeting(greeting);
      console.log(res.ok);
      setData({
        count: res.ok[0].toString(),
        balanceBefore: res.ok[1].toString(),
        balanceAfter: res.ok[2].toString(),
        deduction: res.ok[3].toString()
      })
    });
    return false;
  }

  return (
    <main>
      <img src="/logo2.svg" alt="DFINITY logo" />
      <br />
      <br />
      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="name">Enter your name: &nbsp;</label>
        <input id="name" alt="Name" type="text" />
        <button type="submit">Click Me!</button>
      </form>
      <section id="greeting">Count : {data.count}</section>
      <section id="greeting">BalanceBefore : {data.balanceBefore}</section>
      <section id="greeting">BalanceAfter : {data.balanceAfter}</section>
      <section id="greeting">Deduction : {data.deduction}</section>
    </main>
  );
}

export default App;

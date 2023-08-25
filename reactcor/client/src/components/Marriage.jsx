import React, { useEffect, useState } from 'react';
import useEth from "../contexts/EthContext/useEth";

export default function Marriage() {
  const { state } = useEth(); // Utilisez le contrat et les comptes depuis le contexte
  const [spouse1, setSpouse1] = useState('');
  const [spouse2, setSpouse2] = useState('');
  const [married, setMarried] = useState(false);

  useEffect(()=>{
    if(state.contract){
        state.contract.methods.spouse1().call().then(setSpouse1);
        state.contract.methods.spouse2().call().then(setSpouse2);
        state.contract.methods.married().call().then(setMarried);
    }
  }, [state])

  const marry = async () => {
    await state.contract.methods.marry().send({from: state.accounts[0]}).then(()=> setMarried(true));
  };

  const divorce = async ()=> {
    await state.contract.methods.divorce().send({from: state.accounts[0]}).then(()=> setMarried(false));
  }

  return (
    <div className="Marriage">
      <h1>Marriage Contract</h1>
      <p>{spouse1}</p>
      <br />
      <p>{spouse2}</p>
      <br />
      {married ? <button onClick={divorce}>Divorce</button> : <button onClick={marry}>Marry</button>}
    </div>
  );
}
import logo from './logo.svg';
import './App.css';

import {useState} from 'react';

function App() {

  const [loading, setLoading] = useState(false);
  const [keyTerms, setKeyTerms] = useState(null);

  return (
    <div style={{width: '250px', color: "white", backgroundColor: '#232323', padding: '15px'}}>
        <div>
        <img style={{ left: '25px', top: '25px'}} src="https://media.discordapp.net/attachments/663150753946402820/1014235002315210822/Untitled_Copy.png" alt="moot icon" width={30} height={30} />
          <p style={{fontSize: '25px', fontWeight: 'bold', display: 'inline-block', marginBottom: '0px', marginRight: "5px"}}>
            Moot
          </p>
          <p style={{fontSize: '12px', display: 'inline-block', marginBottom: '0px'}}>
            [mo͞ot]
          </p>
        </div>
        <p style={{fontSize: '12px', marginTop: '0px'}}>
          Your AI Study Buddy.
        </p>
        <hr className="mb-1 mt-1" />
        <p style={{fontSize: '12px', fontWeight: "bold", marginBottom: 0}}>
          Actions:
        </p>
        <button onClick={() => {setKeyTerms("Terms: a"); setLoading(true)}} style={{fontSize: '12px', height: '25px', borderColor: '#303030', backgroundColor: '#303030', color: '#7ccfff', borderRadius: '5px', borderWidth: '1px', width: '100%', marginBottom: '5px'}}>
          Extract Key Terms
        </button>
        {keyTerms && <textarea id="output-key-terms" style={{width: '100%', height: '100px', borderRadius: '5px', borderWidth: '0px', fontSize: '12px', backgroundColor: '#303030', color: 'white', padding: '10px'}} placeholder="Output" readOnly defaultValue={keyTerms} />}
        <hr className="mb-1 mt-1" style={{height: '1px'}} />
        <p style={{fontSize: '12px', display: 'inline-block', marginBottom: '0px'}}>
          Moot created with &lt;3 by <a href="https://github.com/Mootbing" style={{textDecoration: 'none', color: 'white'}}>Mootbing</a>
        </p>
      {loading && <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          width: "100%",
          height: "100%",
        }}
      >
        <center style={{top: "50%"}}>
          <img src="images/loading.gif" alt="loading" width="50" height="50"/>
        </center>
      </div>}
    </div>
  );
}

export default App;

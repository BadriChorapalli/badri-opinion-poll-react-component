import './App.css';
import BadriOpinionPoll from './components/badriOpinionPoll/';

function App() {
  const opinionpoll={
  question:{id:"1",displayText:"Do you multitask when attending a meeting online?"},
  opinions:[{id:"1",displayText:"Yes, I’m guilty"},{id:"2",displayText:"My mind tends to wander"},{id:"3",displayText:"No, I’m 100% focused"},{id:"4",displayText:"Sometimes"}]
}
const opinionpoll1={
  question:{id:"1",displayText:"Which is your best place?"},
  opinions:[{id:"1",displayText:"Hyderabad"},{id:"2",displayText:"Chennai"},{id:"3",displayText:"Bangalore"}]
}
const opinionpoll2={
  question:{id:"1",displayText:"Which is your best language?"},
  opinions:[{id:"1",displayText:"Java"},{id:"2",displayText:"Python"},{id:"3",displayText:"Javascript"}]
}

  return (
    <div className="App">
      <div>Badri opinion poll component</div>
      <BadriOpinionPoll opinionpoll={opinionpoll}></BadriOpinionPoll>
      
     
    </div>
  );
}

export default App;

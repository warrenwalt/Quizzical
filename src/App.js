import react from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Cover from './component/Cover';
import Quizes from './component/Quiz/Quizes';
import Quiz from './component/Quiz/Quiz';

function App() {
  const [quizes, setQuizes] = react.useState()
  const [startQuiz, setStartQuiz] = react.useState(true)

  function changeStartQuiz(){
    setStartQuiz(prevState => !prevState)
  }


  return (
    <div className="container-fluid text-center container--cover">
    {
      startQuiz ? 
      <Cover 
        changeStartQuiz={changeStartQuiz}
      />
      :
      <div className="">
        <Quizes />
      </div>
    }
     
    </div>
  );
}

export default App;

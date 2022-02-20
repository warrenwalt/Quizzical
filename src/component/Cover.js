import react from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Cover(props){
    return (
            <div className="cover">
                <div className="quizzical">
                    <h1 className="display-4">QUIZZICAL</h1>
                </div>
                <div className="description">
                    <p className="p">
                        Answer 5 Random Questions Correctly To Get A Confetti!! <br/>
                        Bonus Points For getting all Correct
                    </p>
                </div>
                    <button 
                    className="button--start btn btn-primary"
                    onClick={() => props.changeStartQuiz()}
                    >
                    START QUIZ
                    </button>
            </div>
    )
}
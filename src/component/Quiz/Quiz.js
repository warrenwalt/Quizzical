import react from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { nanoid } from "nanoid";

var he = require("he")



export default function Quiz({question, all_answers, selected}){
    const [answer, setAnswer] = react.useState(all_answers)

    function chooseAns(id){
        setAnswer(prevState =>{
            const formatedState = prevState.map(ans => ans.isChosen ? {...ans, isChosen: false}: ans)
            return formatedState.map(ans => (
                ans.id === id ? {...ans, isChosen: !ans.isChosen}: ans
            ))
        })
    }

    const answers = answer.map(ans => (
        <div key={ans.id} className="col-3">
            <button 
            onClick={() => {
                chooseAns(ans.id)
                selected(ans.value)
                }
                }
            className={ans.isChosen ? "btn btn-secondary": "btn btn-outline-secondary"}>
                {he.decode(ans.value)}
            </button>
        </div>
    ))

    return (
        <div className="container pt-5">

        <div className="row mt-3 pt-1 px-5">
            <div className="row pb-4 pl-5">
                <p className="font-italic">{he.decode(question)}</p>
            </div>
            <div className="row">                
                {answers}
            </div>
        </div>
        <hr className="w-75"/>
    </div>
    )
}
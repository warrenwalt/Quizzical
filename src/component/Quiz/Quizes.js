import react from "react";
import Quiz from "./Quiz";
import { nanoid } from "nanoid";
import Footer from "../Footer";

export default function Quizes(){
    const [tests, setTest] = react.useState([])
    const [score, setScore] = react.useState(0)
    const [response, setResponse] = react.useState(0)

    react.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=6")
        .then(response => response.json())
        .then(data => {           

            const newDataForm = data.results.map(test => {
                var inc_answers = [...test.incorrect_answers]
                const len = test.incorrect_answers.length+1
                const random_number = Math.floor(Math.random()*len)
                inc_answers.splice(random_number, 0, test.correct_answer)
                inc_answers = inc_answers.map(ans => ({id: nanoid(), value:ans, isChosen: false}))

                return {
                id: nanoid(),
                question: test.question,
                correct_answer: test.correct_answer,
                // incorrect_answers: test.incorrect_answers.map(ans => ({id: nanoid(), value: ans, isChosen: false})),
                all_answers: inc_answers
                }
        })
             setTest(newDataForm)
             console.log("useEffect Run")
        })
    }, [])

    function computeAnswer(answer, correct){
        if (answer === correct){
            setScore(prevScore => prevScore + 1)
            console.log(answer, "is Correct!!")
        }else {
            if (score <= 0){
                setScore(0)
            }else if(score > 0){
                setScore(prevScore => prevScore - 1)
            }
            console.log(answer, "is NOT Correct!!")
        }
    }
    console.log(score)

    const allTest = tests.map(test => (
        <Quiz 
            key={test.id}
            question={test.question}
            correct_answer={test.correct_ansewer}
            all_answers={test.all_answers}
            selected={(answer) => computeAnswer(answer, test.correct_answer)}
        />
    ))

    // console.log(score, response)
    
    return (
        <div className="container">
            <div className="container-fluid">
                {allTest}
            </div>

            {tests.length > 0 && <Footer />}
        </div>
    )
}
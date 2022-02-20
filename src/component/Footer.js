import react from "react";

export default function Footer(){
    return (
        <div className="mx-5 row d-flex align-items-center">
            <div className="col-4">
                <p>You Scored All Correct Answers</p>
            </div>
            <div className="col-4">
                <button className="button--try btn btn-dark">Try Again</button>
            </div>
        </div>
    )
}
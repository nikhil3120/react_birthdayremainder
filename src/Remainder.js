import React,{useState} from "react";
import Data from "./Data";
import List from "./List";


function Remainder(){
    const[people,setPeople] = useState(Data)
    function clear(){
        setPeople([])
    }
    return(
        <>
            <main>
                <section className="container">
                    <h3>{people.length} birthdays today</h3>
                    <List people={people}/>
                    <button onClick={clear}>clearall</button>
                </section>
            </main>
        </>
    )
}

export default Remainder;
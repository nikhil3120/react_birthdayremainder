import React, { useState } from "react";

function List(props){
    const people = props.people;
    return(
        <>
        {people.map(person => {
            return(
                <article key={person.id} className="person">
                    <img src={person.image} alt={person.name}/>
                    <div>
                        <h4>{person.name}</h4>
                        <p>{person.age} years old</p>
                    </div>
                </article>
            )
        })}
        </>
    )
}

export default List;
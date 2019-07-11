
import React from 'react';

// debugger;

const PeopleList = ({ data }) => 
        <ol className="people-list">
            {
                data.map((person, i) => {
                    const { first, last } = person.name;
                    return <li key={i}>{first} {last}</li>
                })
            }
        </ol>


export default PeopleList;
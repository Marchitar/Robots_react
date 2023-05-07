import React from 'react';
import Card from './Card';

const Card_list = ({robots}) => {
    const robotsArray = robots.map((user,i) => {
        return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/> 
    })
    return (
        <div>
            {robotsArray}
        </div>
    );
}

export default Card_list;
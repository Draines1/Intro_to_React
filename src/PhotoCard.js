import React, { useState } from 'react';

/*
Work from the "inside-out",
and from the smallest to largest.

Do one before you do many.
*/

function PhotoCard(props) {
    // useState returns an array.
    // the first item is the current value
    // the second item is a function that can updated value
    const [count, setCount] = useState(0);
    console.log(props);
    // add "conditional rendering"
    return (
        <div className="card-frame">
            <button onClick={

                (e) => {
                    console.log('A click!');

                    // count += 1;
                    setCount(count + 1);
                    console.log(count);
                }

            }>like</button>
            <p>likes: {count} </p>
            <h2>{props.title}</h2>
            <img src={props.url} />
            <p>{props.description}</p>
        </div>
    );
}

export default PhotoCard;
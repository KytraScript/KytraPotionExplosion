import React from "react";
import PotionCard from "./PotionCard.jsx";

export default function StacksPage({stacks, handleClick}) {
    return (<ul className="starters">
        {stacks.map((stack, i) => {
            return (<li key={i} className="stack" onClick={() => handleClick(i)}>
                {stack.length ? (<PotionCard potion={stack[stack.length - 1]}/>) : ''}
            </li>)
        })}
    </ul>);

}


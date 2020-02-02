import React from "react";
import PotionCard from "./PotionCard.jsx";

export default function StartPage(props) {
    return (<ul className="starters">
        {props.pots.map((pot, i) => {
            return (<li key={i} className="stack"><PotionCard potion={pot}/></li>)
        })}
    </ul>);
}


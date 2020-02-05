import React from "react";

export default function PotionCard({potion}) {
    const {ability, value, recipe} = potion;
    let colors = Object.keys(recipe);

    return (
        <div className="potion">
            <span className="point-value">{value}</span>
            <div className={'potion-' + ability} />
            <div className={'topper-' + ability} />
            <ul className={colors.length + '-color colors'}>
                {colors.map(color => (
                    <li key={color} className={`rx-${color} size-${recipe[color]}`}>
                        <span className={`unfilled-${recipe[color]}`}/>
                    </li>
                ))}
            </ul>
        </div>
    );
}


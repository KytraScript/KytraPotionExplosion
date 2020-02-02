import React from "react";

export default function PotionCard({potion}) {
    const {ability, value, recipe} = potion;
    let colors = Object.keys(recipe);

    return (
        <div className={'potion potion-' + ability}>
            <span className="point-value">{value}</span>
            <ul className={colors.length + '-color colors'}>
                {colors.map(color => (
                    <li className={`rx-${color} unfilled-${recipe[color]}`} />
                ))}
            </ul>
        </div>
    );
}


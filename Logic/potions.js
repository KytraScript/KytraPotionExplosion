let potions = [
    {
        type: 'Sands of Time',
        value: '3',
        starter: true,
        recipe: {
            'black': 2,
            'yellow': 2
        },
        ability: 'replay',
        abilityDesc: 'Activate again the effect of 1 Potion you already used.'
    },
    {
        type: 'Sands of Time',
        value: '3',
        starter: true,
        recipe: {
            'black': 2,
            'yellow': 2
        },
        ability: 'replay',
        abilityDesc: 'Activate again the effect of 1 Potion you already used.'
    },
    {
        type: 'Sands of Time',
        value: '4',
        starter: false,
        recipe: {
            'red': 1,
            'blue': 2,
            'yellow': 2
        },
        ability: 'replay',
        abilityDesc: 'Activate again the effect of 1 Potion you already used.'
    },
    {
        type: 'Sands of Time',
        value: '4',
        starter: false,
        recipe: {
            'red': 1,
            'blue': 2,
            'yellow': 2
        },
        ability: 'replay',
        abilityDesc: 'Activate again the effect of 1 Potion you already used.'
    },
    {
        type: 'Sands of Time',
        value: '6',
        starter: false,
        recipe: {
            'blue': 2,
            'black': 4
        },
        ability: 'replay',
        abilityDesc: 'Activate again the effect of 1 Potion you already used.'
    },
    {
        type: 'Sands of Time',
        value: '6',
        starter: false,
        recipe: {
            'blue': 2,
            'black': 4
        },
        ability: 'replay',
        abilityDesc: 'Activate again the effect of 1 Potion you already used.'
    },
    {
        type: 'Sands of Time',
        value: '9',
        starter: false,
        recipe: {
            'red' : 4,
            'blue': 1,
            'yellow': 2
        },
        ability: 'replay',
        abilityDesc: 'Activate again the effect of 1 Potion you already used.'
    },
    {
        type: 'Sands of Time',
        value: '9',
        starter: false,
        recipe: {
            'red' : 4,
            'blue': 1,
            'yellow': 2
        },
        ability: 'replay',
        abilityDesc: 'Activate again the effect of 1 Potion you already used.'
    },
    {
        type: 'Potion of Magnetical Attraction',
        value: '4',
        starter: true,
        recipe: {
            'blue' : 2,
            'black': 2,
        },
        ability: 'magnetism',
        abilityDesc: 'Take 2 adjacent Ingredients of different colors from the same slide track of the Dispenser. No Explosions are triggered.'
    },
    {
        type: 'Potion of Magnetical Attraction',
        value: '4',
        starter: true,
        recipe: {
            'blue' : 2,
            'black': 2,
        },
        ability: 'magnetism',
        abilityDesc: 'Take 2 adjacent Ingredients of different colors from the same slide track of the Dispenser. No Explosions are triggered.'
    },
    {
        type: 'Potion of Magnetical Attraction',
        value: '6',
        starter: false,
        recipe: {
            'red' : 2,
            'black': 2,
            'yellow': 1
        },
        ability: 'magnetism',
        abilityDesc: 'Take 2 adjacent Ingredients of different colors from the same slide track of the Dispenser. No Explosions are triggered.'
    },
    {
        type: 'Potion of Magnetical Attraction',
        value: '6',
        starter: false,
        recipe: {
            'red' : 2,
            'black': 2,
            'yellow': 1
        },
        ability: 'magnetism',
        abilityDesc: 'Take 2 adjacent Ingredients of different colors from the same slide track of the Dispenser. No Explosions are triggered.'
    },
    {
        type: 'Potion of Magnetical Attraction',
        value: '8',
        starter: false,
        recipe: {
            'red' : 2,
            'blue': 4
        },
        ability: 'magnetism',
        abilityDesc: 'Take 2 adjacent Ingredients of different colors from the same slide track of the Dispenser. No Explosions are triggered.'
    },
    {
        type: 'Potion of Magnetical Attraction',
        value: '8',
        starter: false,
        recipe: {
            'red' : 2,
            'blue': 4
        },
        ability: 'magnetism',
        abilityDesc: 'Take 2 adjacent Ingredients of different colors from the same slide track of the Dispenser. No Explosions are triggered.'
    },
    {
        type: 'Potion of Magnetical Attraction',
        value: '10',
        starter: false,
        recipe: {
            'red' : 1,
            'black': 2,
            'yellow': 4
        },
        ability: 'magnetism',
        abilityDesc: 'Take 2 adjacent Ingredients of different colors from the same slide track of the Dispenser. No Explosions are triggered.'
    },
    {
        type: 'Potion of Magnetical Attraction',
        value: '10',
        starter: false,
        recipe: {
            'red' : 1,
            'black': 2,
            'yellow': 4
        },
        ability: 'magnetism',
        abilityDesc: 'Take 2 adjacent Ingredients of different colors from the same slide track of the Dispenser. No Explosions are triggered.'
    },
    {
        type: 'Potion of Wisdom',
        value: '5',
        starter: true,
        recipe: {
            'red' : 2,
            'yellow': 2
        },
        ability: 'wisdom',
        abilityDesc: 'Take one Ingredient of your choice from the Dispenser. No Explosions are triggered.'
    },
    {
        type: 'Potion of Wisdom',
        value: '5',
        starter: true,
        recipe: {
            'red' : 2,
            'yellow': 2
        },
        ability: 'wisdom',
        abilityDesc: 'Take one Ingredient of your choice from the Dispenser. No Explosions are triggered.'
    },
    {
        type: 'Potion of Wisdom',
        value: '6',
        starter: false,
        recipe: {
            'red' : 2,
            'blue': 1,
            'black': 2
        },
        ability: 'wisdom',
        abilityDesc: 'Take one Ingredient of your choice from the Dispenser. No Explosions are triggered.'
    },
    {
        type: 'Potion of Wisdom',
        value: '6',
        starter: false,
        recipe: {
            'red' : 2,
            'blue': 1,
            'black': 2
        },
        ability: 'wisdom',
        abilityDesc: 'Take one Ingredient of your choice from the Dispenser. No Explosions are triggered.'
    },
    {
        type: 'Potion of Wisdom',
        value: '8',
        starter: false,
        recipe: {
            'black': 2,
            'yellow': 4
        },
        ability: 'wisdom',
        abilityDesc: 'Take one Ingredient of your choice from the Dispenser. No Explosions are triggered.'
    },
    {
        type: 'Potion of Wisdom',
        value: '8',
        starter: false,
        recipe: {
            'black': 2,
            'yellow': 4
        },
        ability: 'wisdom',
        abilityDesc: 'Take one Ingredient of your choice from the Dispenser. No Explosions are triggered.'
    },
    {
        type: 'Potion of Wisdom',
        value: '11',
        starter: false,
        recipe: {
            'red': 2,
            'blue': 4,
            'black': 1
        },
        ability: 'wisdom',
        abilityDesc: 'Take one Ingredient of your choice from the Dispenser. No Explosions are triggered.'
    },
    {
        type: 'Potion of Wisdom',
        value: '11',
        starter: false,
        recipe: {
            'red': 2,
            'blue': 4,
            'black': 1
        },
        ability: 'wisdom',
        abilityDesc: 'Take one Ingredient of your choice from the Dispenser. No Explosions are triggered.'
    },
    {
        type: 'Balm of Uttermost Stickiness',
        value: '4',
        starter: true,
        recipe: {
            'red': 1,
            'blue': 1,
            'black': 2
        },
        ability: 'contiguous',
        abilityDesc: 'Take 2 or more adjacent Ingredients of the same color from the same slide track of the Dispenser. No Explosions are triggered.'
    },
    {
        type: 'Balm of Uttermost Stickiness',
        value: '4',
        starter: true,
        recipe: {
            'red': 1,
            'blue': 1,
            'black': 2
        },
        ability: 'contiguous',
        abilityDesc: 'Take 2 or more adjacent Ingredients of the same color from the same slide track of the Dispenser. No Explosions are triggered.'
    },
    {
        type: 'Balm of Uttermost Stickiness',
        value: '5',
        starter: false,
        recipe: {
            'black': 2,
            'yellow': 3
        },
        ability: 'contiguous',
        abilityDesc: 'Take 2 or more adjacent Ingredients of the same color from the same slide track of the Dispenser. No Explosions are triggered.'
    },
    {
        type: 'Balm of Uttermost Stickiness',
        value: '5',
        starter: false,
        recipe: {
            'black': 2,
            'yellow': 3
        },
        ability: 'contiguous',
        abilityDesc: 'Take 2 or more adjacent Ingredients of the same color from the same slide track of the Dispenser. No Explosions are triggered.'
    },
    {
        type: 'Balm of Uttermost Stickiness',
        value: '7',
        starter: false,
        recipe: {
            'red': 2,
            'black': 1,
            'yellow': 3
        },
        ability: 'contiguous',
        abilityDesc: 'Take 2 or more adjacent Ingredients of the same color from the same slide track of the Dispenser. No Explosions are triggered.'
    },
    {
        type: 'Balm of Uttermost Stickiness',
        value: '7',
        starter: false,
        recipe: {
            'red': 2,
            'black': 1,
            'yellow': 3
        },
        ability: 'contiguous',
        abilityDesc: 'Take 2 or more adjacent Ingredients of the same color from the same slide track of the Dispenser. No Explosions are triggered.'
    },
    {
        type: 'Balm of Uttermost Stickiness',
        value: '10',
        starter: false,
        recipe: {
            'red': 3,
            'blue': 4
        },
        ability: 'contiguous',
        abilityDesc: 'Take 2 or more adjacent Ingredients of the same color from the same slide track of the Dispenser. No Explosions are triggered.'
    },
    {
        type: 'Balm of Uttermost Stickiness',
        value: '10',
        starter: false,
        recipe: {
            'red': 3,
            'blue': 4
        },
        ability: 'contiguous',
        abilityDesc: 'Take 2 or more adjacent Ingredients of the same color from the same slide track of the Dispenser. No Explosions are triggered.'
    },
    {
        type: 'Potion of Prismatic Joy',
        value: '3',
        starter: true,
        recipe: {
            'red': 2,
            'blue': 1,
            'yellow': 1
        },
        ability: 'rainbow',
        abilityDesc: 'You can place all Ingredients in your Pool on any holes of your incomplete Potions, regardless of their color.'
    },
    {
        type: 'Potion of Prismatic Joy',
        value: '3',
        starter: true,
        recipe: {
            'red': 2,
            'blue': 1,
            'yellow': 1
        },
        ability: 'rainbow',
        abilityDesc: 'You can place all Ingredients in your Pool on any holes of your incomplete Potions, regardless of their color.'
    },
    {
        type: 'Potion of Prismatic Joy',
        value: '5',
        starter: false,
        recipe: {
            'red': 2,
            'black': 3
        },
        ability: 'rainbow',
        abilityDesc: 'You can place all Ingredients in your Pool on any holes of your incomplete Potions, regardless of their color.'
    },
    {
        type: 'Potion of Prismatic Joy',
        value: '5',
        starter: false,
        recipe: {
            'red': 2,
            'black': 3
        },
        ability: 'rainbow',
        abilityDesc: 'You can place all Ingredients in your Pool on any holes of your incomplete Potions, regardless of their color.'
    },
    {
        type: 'Potion of Prismatic Joy',
        value: '7',
        starter: false,
        recipe: {
            'red': 1,
            'blue': 2,
            'black': 3
        },
        ability: 'rainbow',
        abilityDesc: 'You can place all Ingredients in your Pool on any holes of your incomplete Potions, regardless of their color.'
    },
    {
        type: 'Potion of Prismatic Joy',
        value: '7',
        starter: false,
        recipe: {
            'red': 1,
            'blue': 2,
            'black': 3
        },
        ability: 'rainbow',
        abilityDesc: 'You can place all Ingredients in your Pool on any holes of your incomplete Potions, regardless of their color.'
    },
    {
        type: 'Potion of Prismatic Joy',
        value: '9',
        starter: false,
        recipe: {
            'blue': 3,
            'yellow': 4
        },
        ability: 'rainbow',
        abilityDesc: 'You can place all Ingredients in your Pool on any holes of your incomplete Potions, regardless of their color.'
    },
    {
        type: 'Potion of Prismatic Joy',
        value: '9',
        starter: false,
        recipe: {
            'blue': 3,
            'yellow': 4
        },
        ability: 'rainbow',
        abilityDesc: 'You can place all Ingredients in your Pool on any holes of your incomplete Potions, regardless of their color.'
    },
    {
        type: 'Elixir of Blind Love',
        value: '4',
        starter: true,
        recipe: {
            'red': 1,
            'black': 1,
            'yellow': 2
        },
        ability: 'steal',
        abilityDesc: 'Steal all of the Ingredients from 1 opponent\'s Pool.'
    },
    {
        type: 'Elixir of Blind Love',
        value: '4',
        starter: true,
        recipe: {
            'red': 1,
            'black': 1,
            'yellow': 2
        },
        ability: 'steal',
        abilityDesc: 'Steal all of the Ingredients from 1 opponent\'s Pool.'
    },
    {
        type: 'Elixir of Blind Love',
        value: '5',
        starter: false,
        recipe: {
            'blue': 3,
            'yellow': 2
        },
        ability: 'steal',
        abilityDesc: 'Steal all of the Ingredients from 1 opponent\'s Pool.'
    },
    {
        type: 'Elixir of Blind Love',
        value: '5',
        starter: false,
        recipe: {
            'blue': 3,
            'yellow': 2
        },
        ability: 'steal',
        abilityDesc: 'Steal all of the Ingredients from 1 opponent\'s Pool.'
    },
    {
        type: 'Elixir of Blind Love',
        value: '7',
        starter: false,
        recipe: {
            'blue': 3,
            'black': 2,
            'yellow': 1
        },
        ability: 'steal',
        abilityDesc: 'Steal all of the Ingredients from 1 opponent\'s Pool.'
    },
    {
        type: 'Elixir of Blind Love',
        value: '7',
        starter: false,
        recipe: {
            'blue': 3,
            'black': 2,
            'yellow': 1
        },
        ability: 'steal',
        abilityDesc: 'Steal all of the Ingredients from 1 opponent\'s Pool.'
    },
    {
        type: 'Elixir of Blind Love',
        value: '10',
        starter: false,
        recipe: {
            'red': 4,
            'black': 3
        },
        ability: 'steal',
        abilityDesc: 'Steal all of the Ingredients from 1 opponent\'s Pool.'
    },
    {
        type: 'Elixir of Blind Love',
        value: '10',
        starter: false,
        recipe: {
            'red': 4,
            'black': 3
        },
        ability: 'steal',
        abilityDesc: 'Steal all of the Ingredients from 1 opponent\'s Pool.'
    },
    {
        type: 'Abyssal Draft',
        value: '4',
        starter: true,
        recipe: {
            'red': 2,
            'blue': 2
        },
        ability: 'draft',
        abilityDesc: 'Take up to 1 Ingredient of each color from the bottom row of the Dispenser slide tracks. You can only take 1 Ingredient from each slide track.'
    },
    {
        type: 'Abyssal Draft',
        value: '4',
        starter: true,
        recipe: {
            'red': 2,
            'blue': 2
        },
        ability: 'draft',
        abilityDesc: 'Take up to 1 Ingredient of each color from the bottom row of the Dispenser slide tracks. You can only take 1 Ingredient from each slide track.'
    },
    {
        type: 'Abyssal Draft',
        value: '6',
        starter: false,
        recipe: {
            'blue': 2,
            'black': 1,
            'yellow': 2
        },
        ability: 'draft',
        abilityDesc: 'Take up to 1 Ingredient of each color from the bottom row of the Dispenser slide tracks. You can only take 1 Ingredient from each slide track.'
    },
    {
        type: 'Abyssal Draft',
        value: '6',
        starter: false,
        recipe: {
            'blue': 2,
            'black': 1,
            'yellow': 2
        },
        ability: 'draft',
        abilityDesc: 'Take up to 1 Ingredient of each color from the bottom row of the Dispenser slide tracks. You can only take 1 Ingredient from each slide track.'
    },
    {
        type: 'Abyssal Draft',
        value: '8',
        starter: false,
        recipe: {
            'red': 4,
            'yellow': 2
        },
        ability: 'draft',
        abilityDesc: 'Take up to 1 Ingredient of each color from the bottom row of the Dispenser slide tracks. You can only take 1 Ingredient from each slide track.'
    },
    {
        type: 'Abyssal Draft',
        value: '8',
        starter: false,
        recipe: {
            'red': 4,
            'yellow': 2
        },
        ability: 'draft',
        abilityDesc: 'Take up to 1 Ingredient of each color from the bottom row of the Dispenser slide tracks. You can only take 1 Ingredient from each slide track.'
    },
    {
        type: 'Abyssal Draft',
        value: '10',
        starter: false,
        recipe: {
            'blue': 2,
            'black': 4,
            'yellow': 1
        },
        ability: 'draft',
        abilityDesc: 'Take up to 1 Ingredient of each color from the bottom row of the Dispenser slide tracks. You can only take 1 Ingredient from each slide track.'
    },
    {
        type: 'Abyssal Draft',
        value: '10',
        starter: false,
        recipe: {
            'blue': 2,
            'black': 4,
            'yellow': 1
        },
        ability: 'draft',
        abilityDesc: 'Take up to 1 Ingredient of each color from the bottom row of the Dispenser slide tracks. You can only take 1 Ingredient from each slide track.'
    },
    {
        type: 'Filter of Lavamancing',
        value: '5',
        starter: true,
        recipe: {
            'blue': 2,
            'black': 1,
            'yellow': 1
        },
        ability: 'lavamancing',
        abilityDesc: 'Discard up to 5 Ingredients of 1 color from the same slide track of the Dispenser back into the tank. No Explosions are triggered.'
    },
    {
        type: 'Filter of Lavamancing',
        value: '5',
        starter: true,
        recipe: {
            'blue': 2,
            'black': 1,
            'yellow': 1
        },
        ability: 'lavamancing',
        abilityDesc: 'Discard up to 5 Ingredients of 1 color from the same slide track of the Dispenser back into the tank. No Explosions are triggered.'
    },
    {
        type: 'Filter of Lavamancing',
        value: '7',
        starter: false,
        recipe: {
            'red': 3,
            'blue': 2
        },
        ability: 'lavamancing',
        abilityDesc: 'Discard up to 5 Ingredients of 1 color from the same slide track of the Dispenser back into the tank. No Explosions are triggered.'
    },
    {
        type: 'Filter of Lavamancing',
        value: '7',
        starter: false,
        recipe: {
            'red': 3,
            'blue': 2
        },
        ability: 'lavamancing',
        abilityDesc: 'Discard up to 5 Ingredients of 1 color from the same slide track of the Dispenser back into the tank. No Explosions are triggered.'
    },
    {
        type: 'Filter of Lavamancing',
        value: '9',
        starter: false,
        recipe: {
            'red': 3,
            'blue': 1,
            'yellow': 2
        },
        ability: 'lavamancing',
        abilityDesc: 'Discard up to 5 Ingredients of 1 color from the same slide track of the Dispenser back into the tank. No Explosions are triggered.'
    },
    {
        type: 'Filter of Lavamancing',
        value: '9',
        starter: false,
        recipe: {
            'red': 3,
            'blue': 1,
            'yellow': 2
        },
        ability: 'lavamancing',
        abilityDesc: 'Discard up to 5 Ingredients of 1 color from the same slide track of the Dispenser back into the tank. No Explosions are triggered.'
    },
    {
        type: 'Filter of Lavamancing',
        value: '11',
        starter: false,
        recipe: {
            'black': 4,
            'yellow': 3
        },
        ability: 'lavamancing',
        abilityDesc: 'Discard up to 5 Ingredients of 1 color from the same slide track of the Dispenser back into the tank. No Explosions are triggered.'
    },
    {
        type: 'Filter of Lavamancing',
        value: '11',
        starter: false,
        recipe: {
            'black': 4,
            'yellow': 3
        },
        ability: 'lavamancing',
        abilityDesc: 'Discard up to 5 Ingredients of 1 color from the same slide track of the Dispenser back into the tank. No Explosions are triggered.'
    },
];




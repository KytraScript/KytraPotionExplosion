const potions = require('./potions.js');
const _ = require('lodash');

const banTwoPotionTypes = (arr) => {
    let types = [];
    let notBanned;

    arr.forEach(e => {
        if (!types.includes(e.type)) {
            types.push(e.type);
        }
    });

    types = _.shuffle(types);
    notBanned = types.slice(2);
    return notBanned;
};

const getNonBannedStarters = (arr) => {
    let nonBannedTypes = banTwoPotionTypes(arr);
    let nonBannedStarters = [];

    arr.forEach(e => {
        if (e.starter && nonBannedTypes.includes(e.type)) {
            nonBannedStarters.push(e);
        }
    });
    return [nonBannedTypes, nonBannedStarters];
};

const chooseStarters = (arr, players = 2) => {
    let typesAndStarters = getNonBannedStarters(arr);
    let nonBannedTypes = typesAndStarters[0];
    let nonBannedStarters = typesAndStarters[1];
    nonBannedStarters = _.shuffle(nonBannedStarters);

    if (players === 2) {
        return [nonBannedTypes, nonBannedStarters.slice(0, 4)];
    } else if (players === 3) {
        return [nonBannedTypes, nonBannedStarters.slice(0, 6)];
    } else if (players === 4) {
        return [nonBannedTypes, nonBannedStarters.slice(0, 8)];
    }
};

const allPotionsWithoutChosenStarters = (arr, players) => {
    let typesAndChosenStarters = chooseStarters(arr, players);
    let nonBannedTypes = typesAndChosenStarters[0];
    let starters = typesAndChosenStarters[1];
    let curatedPotionList = [];
    let allPotions = arr;

    for (let i = 0; i < allPotions.length; i++) {
        for (let j = 0; j < starters.length; j++) {
            if (starters[j].type === allPotions[i].type && allPotions[i].starter) {
                allPotions.splice(i, 1);
            }
        }
    }

    allPotions.forEach(e => {
        if (nonBannedTypes.includes(e.type)) {
            curatedPotionList.push(e);
        }
    });

    curatedPotionList = _.shuffle(curatedPotionList);
    return [starters, curatedPotionList];
};

const createPotionStacks = (arr, players) => {
    let potionStateArr = allPotionsWithoutChosenStarters(arr, players);
    let starters = potionStateArr[0];
    let shuffledPotions = potionStateArr[1];
    let stackPicker = 0;
    let allStacks = [[], [], [], [], []];

    shuffledPotions.forEach(e => {
        if (stackPicker === 5) {
            stackPicker = 0;
        }
        allStacks[stackPicker].push(e);
        stackPicker++;
    });
    return [starters, allStacks];
};

const newGame = (arr, players, logState = false) => {

    if (!logState) {
        return createPotionStacks(arr, players);
    }

    let state = createPotionStacks(arr, players);
    console.log('YOUR STARTING ' + state[0].length + ' POTIONS ARE: ', state[0]);
    console.log('THE ' + state[1].length + ' POTION STACKS ARE:');
    console.log('STACK NUMBER ONE: ', state[1][0]);
    console.log('STACK NUMBER TWO: ', state[1][1]);
    console.log('STACK NUMBER THREE: ', state[1][2]);
    console.log('STACK NUMBER FOUR: ', state[1][3]);
    console.log('STACK NUMBER FIVE: ', state[1][4]);

    return state;
};

newGame(potions, 4, true);

module.exports = newGame;
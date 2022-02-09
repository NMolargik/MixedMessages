//Nicholas Molargik - Feb 6, 2022
//Codecademy Mixed Messages Portfolio Project from Full Stack Engineer Path

/*
This project is a message generator program. Every time the user runs it, they get a new, randomized output.
Topic will be motivational messages that make some, little, or no sense.
*/

function generateRandomNumber(num) {
    //Gets a random number from 0 to num - 1
    return Math.floor(Math.random() * num)
}

const createSentence = interestingParts => {
    interestingSentence = 'You should probably ' + interestingParts[0] + ' or else ' + interestingParts[1] + ' is going to ' + interestingParts[2] + '.';
    return interestingSentence;
}

//Words - including actions, people, and reactions.
const words = {
    actions: ['clean your room', 'wash the car', 'do the dishes', 'run a marathon', 'listen to Dance Gavin Dance',
     'step on some bugs', 'unload the groceries', 'commit fraud', 'watch Iron Man 3', 'get me some beef'],
    people: ['Mariah Carey', 'Jesus', 'Jennifer Lawrence', 'Jim Carrey', 'Mom', 'Dad', 'your sister', 'Dr Doofinshmirtz',
     'Walt Disney', 'Tony Stark', 'Elon Musk', 'Mr. Bean', 'Ruffus', 'Billy Joe', 'crazy gramps'],
    reactions: ['spank your butt', 'run you over with that car', 'throw you into the ocean', 'give you a lollipop',
     'give you a good talkin to', 'blast ya', 'give you an honorary degree in being the worst', 'kick you in the shin',
      'whack ya', 'give you a big ole hug', 'wipe you off the face of the earth', 'speak poorly of you to friends'],
}

let interestingParts = []; //Array for storing sentence parts
let interestingSentence = ""; //String for storing sentence

//Get all of the sentence parts into interestingParts
for (let type in words) {
    let index = generateRandomNumber(words[type].length);
    interestingParts.push(words[type][index]);
}

interestingSentence = createSentence(interestingParts);
console.log(interestingSentence);

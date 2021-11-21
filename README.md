# The Chase - Quick Fire
### Author - Louise Wong

## Introduction 
A simple quiz game created with HTML and JavaScript. Contained a start and reset button in the heading, score board alongside with a timer. The question box displays the question and the player has to choose the correct answer out of the four options.

### Technolgy Used:
- HTML
- SCSS
- JavaScript

### Design
The design idea came from the British game show - The Chase, where player has to answer as many questions as possible in one mintue.

## Description 
### Heading
The heading includes two buttons, one classed as `heading__start-btn` representing the start button; one classed as `heading__reset-btn` representing the reset button. 

### Timer
A 60 second countdown timer is included. `setInterval` method was used on the `countDown` function to create the timer. Once the time has reached 0s, the timer will stop and display "TIME'S UP" to the player.

### Start Button
`Questions` has been stored in an array of objects and were imported into the main.js file. `questionNumber` is set as 0 representing the first question. By implementing `addEventListener()` to the start button, it triggers the `startQuestion` function and display the first question with 4 answer options to the question board.

### Check answer
Values have been assigned to each option button and the chosen button is stored in the array `chosenAnswer`. It will be checked with the `correctOption` in `Questions`. 

### Update score
If the answer is correct, the `playerScore` will be increase by 1 and displayed as increased by £100. On the other hand, question display will automatically display the next question.

### Reset Button
Once the player has pressed the reset button, the `chosenAnswer`, `playScore`,`questionNumber` will return to empty or 0. Time will return to 60 and starts the countdown again.

## Roadmap
### Failed to add in
- a chaser and player panel
### Features to add
- randomise questions

## Known Bug
- the timer does not stop after reset, starts countdown straight after


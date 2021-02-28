# Memory-Memory

I decided to develop a simple game application based upon a classic card game called "Concentration". This game includes a set number of cards pairs. The premise of the game is for the user to match all of the pairs of the cards, using their memory - remembering the exact location of a card in order to match it to its pair. 

The game starts, with the user presented with all the cards facing downward, and will begin by flipping one card and revealing the identity of this card and then flipping over another card to check if the cards match. If the cards match they remain flipped, if they do not match the cards flip back to the starting poisition and you continue with the game, trying to reveal matches. 

More information on the original concentration game can be found [Wikipedia](https://en.wikipedia.org/wiki/Concentration_(card_game)) here. 
 
## UX
 
The premise of this game is simple and I also wanted to ensure that the design of the game matched the games philosophy. I wanted to ensure that the users were never overloaded with too much information or design. I did not want anything to distract from the main objective; to play the game. I decided to place an image and repeat it in the background to add some texture to the overall design. I wanted the game board to stand out so I decided a blue colour for the cards when they were faced down. I wanted to bring some colour into the game, so opted for white cards with colour dots. When the cards were matched they would turn white, providing feedback to the user of their progress. I also provided feedback to the user after each selection. 

### UX - User objectives
- As a game player I want to be able to play a game with a set number of cards, so that I can test my memory skills.
- As a user I want to be able to flip reveal the cards to be able to match them 
- So that the user can improve and test their memory

### UX - User Scenario

1. User Lands on Pages
2. User is presented with 3 options/buttons 
    - play music
        - click button; music plays
    - instructions
        - click instructions; game instructions shown
    - restart 
        - restart; page refreshes and game goes to start position
3. Time counter 
4. Grid of cards 
5. User selects a card - it flips to reveal colour
6. User selects another card - if the cards match, the cards remain flipped and turn white. If the cards to not match, the cards flip back to starting position and the games resumes. 
7. Continue with steps 5 and 6 until all cards are matched 

[Memory Memory Game Wireframe](https://github.com/SJE-1/Memory-Memory/blob/0815b2e3e28d8b33e2e65b50f4716ff6fbb8c582/Wireframe/Memory%20Memory%20Game%20Wireframe.pdf)

## Features

This game includes the option to play music. 
The game also includes instructions and a restart button.
This game includes a shuffle feature 

### Features Left to Implement
- Adding different Levels to the game, by giving less time or by adding more cards
- Multiple Player options
- Various Card Deck Choices 
- Various Music Choices

## Technologies Used

HTML 
CSS 
JavaScript - Vanialla 
Bootstrap 

## Testing

The website was tested using responsive devices developer tools on google chrome. The website was tested across the following web browsers

- Safari
- Chrome
- Firefox

The website was also tested on an Apple 6 smartphone, MOTO smartphone, Apple MacBook pro, DELL and HP desktop computers. The website behaved as it should through all devices.

Below is an example of how the website looks on two different browsers and at two different sizes. The website is performing well across all platforms. The game works better at desktop level and also on the iPad in a horizontal poisition.

[Memory Memory Wireframe iPad](https://github.com/SJE-1/Memory-Memory/blob/0815b2e3e28d8b33e2e65b50f4716ff6fbb8c582/Wireframe/Memory%20Memory%20-%20iPad%20Example.png)

[Memory Memory Wireframe iPhone5](https://github.com/SJE-1/Memory-Memory/blob/0815b2e3e28d8b33e2e65b50f4716ff6fbb8c582/Wireframe/Memory%20Memory%20Game%20-%20iPhone%205%20.png)


The developer tools in the Chrome browser were especially useful for identifying any issues with the JavaScript code. I was able to see where I had name some of the png files wrong which was stopping the code matching the corect cards. 

I was able to test the code in the browser by following these steps: 

#### Memory Memory Game:
    1. Go to the game board
    2. Press play music - check if the music plays. 
    3. Press the instructions button - read structions - close instructions
    4. Press reset to turn off the music and start the clock again
    5. Select a card, does it reveal a colour? 
    6. Select another card, do they match? 
    7. Alert to let the user know if there is a match or not. 
    8. If the cards match do they stay flipped and turn white 
    9. If the cards do not match do they return to the starting position and allow the user to select again

#### Code Validation
The HTML code was validated using the W3C Mark-up Validation Service. 
The CSS code was validated using Jigsaw CSS Validator.

## Deployment
This website is deployed on the GitHub pages. It uses the master branch and it updates each time there is a new push to the repository. 

- the site is deployed by entering into the repository where the project is       stored. 
- Go to settings 
- Scroll down to GitHub pages 
- Under Source - Branch - select - Master
- Save
- Project will deploy 

## Content
-	The content for this website is original and created by me.

### Media
- The music in this website was written and produced by me (SJE). 
- The Logo was designed using CANVA. 

### Acknowledgements

- I received inspiration for this project from surfing the net and reading articles online
- I want to thank my Mentor, Ignatius, for his guidance, advice and patience. 

# Simon Says Game

This is a fun and interactive **Simon Says** game implemented using **HTML**, **CSS**, and **JavaScript**. The game challenges players to follow Simon's instructions and press specific colors while adhering to the "Simon says" rule. It's an engaging way to test memory and attention!

## Features

- **Randomized Instructions:** Each level introduces a new sequence of colors, with or without "Simon says."
- **Color Mapping:** Uses visually distinct colors (`Blue`, `Gray`, `Red`, `Purple`) for clarity.
- **High Score Tracking:** Keeps track of the highest score achieved during the session.
- **Interactive Effects:** Buttons flash upon selection, and the screen shakes when the player makes an error.
- **Dynamic Levels:** The sequence grows longer as the levels progress.

## Gameplay Rules

1. Press the correct color buttons in the sequence displayed.
2. Only press the button if Simon says!  
   - Example: **"Simon says: Press Red"** means you must press red.  
   - If it says **"Press Blue"** (without "Simon says"), do not press anything.
3. The game ends when an incorrect action is taken.

## How to Play

1. Start the game by pressing any key.
2. Follow Simon's instructions as displayed on the screen.
3. Achieve the highest score possible by completing levels correctly.
4. If you make a mistake, the game will end, and your score will be displayed.

## Color Guide

| Button | Color Name |
|--------|------------|
| `g1`   | Blue       |
| `g2`   | Gray       |
| `g3`   | Red        |
| `g4`   | Purple     |

## File Structure

```plaintext
project/
├── index.html     # Main HTML file
├── style.css      # Styles for buttons, effects, and layout
├── app.js      # Game logic and functionality
└── README.md      # Project documentation

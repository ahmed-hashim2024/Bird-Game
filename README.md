# 🐦 Bird Game - A Simple Target Game

A simple browser-based game where the goal is to **click the moving bird** to earn points. If you click outside the bird's area, the game ends.

## ✨ Features

* **Simple Gameplay:** Click the bird to score a point.
* **Score Tracking:** A counter to display the current score.
* **Dynamic Movement:** The bird moves continuously and bounces off the screen edges.
* **Custom Cursor (Aim):** The cursor is replaced by a custom aiming image that follows the mouse.
* **Sound Effects:** Sounds play for a successful hit and for the "Game Over" event.

## 🚀 How to Run

Since this game is fully powered by **HTML, CSS, and JavaScript** with no backend required, running it is straightforward.

1.  **Download the Project Files:**
    * `index.html`
    * `style.css` (Required for styling, though not provided here)
    * `main.js`
    * The necessary asset folders, `images/` and `audio/`, containing:
        * `images/aim.png`
        * `audio/gameover.mp3`
        * `audio/pass.mp3`
2.  **Open the File:** Simply **open the `index.html` file** directly in your preferred web browser (e.g., Chrome, Firefox, etc.).

## 🎮 How to Play

1.  **Aiming:** The aiming sight (`#aim`) follows your mouse movement across the screen.
2.  **Hit the Bird:** Click the left mouse button on the moving bird (`#baird`) to increase your score by one. The bird will then teleport to a new random starting position.
3.  **Game Over:** If you click the left mouse button **anywhere outside of the bird's area**, the game will end, your score will reset to zero, and the "Game over" alert and sound will play.
4.  **Restarting:** After the game over alert, you can immediately start playing again by successfully clicking the bird.

## 🛠️ Technologies Used

* **HTML5:** For the structure of the game and audio elements.
* **CSS:** For styling, positioning elements, and hiding the default cursor.
* **JavaScript (ES6+):** For the game logic, including bird movement, score updates, and click handling.

## 📝 License

This project is licensed under the MIT License.

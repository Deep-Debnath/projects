// Select all elements with the class "box" (the 9 tic-tac-toe cells)
let boxxes = document.querySelectorAll(".box");

// Select the heading (assumed to show the current turn or result)
let heading = document.querySelector("h2");

// Count tracks how many moves have been made to determine X's or O's turn
let count = 0;

// Add a click event to each box
boxxes.forEach((c) => {
  c.addEventListener("click", (a) => {
    // Increase move count on each valid click
    count++;

    // Only allow marking an empty box
    if (a.target.innerHTML === "") {
      // If move count is even, it's O's turn
      if (count % 2 === 0) {
        a.target.innerHTML = "O"; // Display O
        a.target.style.backgroundColor = "red"; // Set background
        heading.innerText = "X it's your turn"; // Update heading
      } else {
        // If move count is odd, it's X's turn
        a.target.innerHTML = "X"; // Display X
        a.target.style.backgroundColor = "orange"; // Set background
        heading.innerText = "O it's your turn"; // Update heading
      }
    } else {
      // If the box is already filled, ignore the move and balance the count
      count++;
    }

    // After every move, check if there's a winner
    checkwinner();
  });
});

// All possible winning combinations (rows, columns, diagonals)
const winningCombos = [
  [0, 1, 2], // Top row
  [3, 4, 5], // Middle row
  [6, 7, 8], // Bottom row
  [0, 3, 6], // Left column
  [1, 4, 7], // Middle column
  [2, 5, 8], // Right column
  [0, 4, 8], // Left-to-right diagonal
  [2, 4, 6], // Right-to-left diagonal
];

// Function to check if any player has won
let checkwinner = () => {
  for (const [a, b, c] of winningCombos) {
    // Get the values (X or O) of the 3 boxes in the current combination
    const valA = boxxes[a].innerHTML;
    const valB = boxxes[b].innerHTML;
    const valC = boxxes[c].innerHTML;

    // Check if all 3 values are the same and not empty
    if (valA && valA === valB && valB === valC) {
      // Display the winner in the heading
      heading.innerText = `${valA} wins!`;

      // Highlight the winning combination
      boxxes[a].style.backgroundColor =
        boxxes[b].style.backgroundColor =
        boxxes[c].style.backgroundColor =
          "green";

      // Disable all further clicks to end the game
      boxxes.forEach((box) => (box.style.pointerEvents = "none"));
      return; // Stop checking other combinations
    }
  }
};
// <!-- Restart Button: Reloads the entire page to reset the game -->

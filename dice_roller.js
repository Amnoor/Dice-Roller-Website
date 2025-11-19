// Main function to handle dice rolling logic
function rollDice(){
    
    // Get the number of dice to roll from the input field
    const inputnum = document.getElementById("inputnumdice").value;
    // Get reference to the text result display element
    const resulttext = document.getElementById("resultdice");
    // Get reference to the image result display element
    const resultimg = document.getElementById("resultimage");
    // Array to store the numerical values of dice rolls
    const dicevalue = [];
    // Array to store the HTML img elements for dice images
    const diceimg = [];

    // Loop through each dice roll based on user input
    for(let i = 0; i < inputnum; i++){
        // Generate random number between 1 and 6 (inclusive) for dice value
        const value = Math.floor(Math.random() * 6) + 1;
        // Add the dice value to the values array
        dicevalue.push(value);
        // Create HTML img element with corresponding dice image and add to images array
        diceimg.push(`<img src="dice_images/${value}.png" alt="Dice: ${value}" class="resultimg">`);
    }

    // Display the dice values as comma-separated text
    resulttext.textContent = `Dice Result: ${dicevalue.join(", ")}`;
    // Display all dice images by joining HTML elements and setting innerHTML
    resultimg.innerHTML = diceimg.join("");

}
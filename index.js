// Array of gifts
const gifts = ["teddy bear", "drone", "doll"];

// Function to wrap gifts using a for loop
function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }
  return gifts;
}

// Call the wrapGifts function to test
wrapGifts(gifts);

// Function to write thank you cards using a for loop
function writeCards(names, event) {
  let messages = [];
  for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return messages;
}

// Test the writeCards function
console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));

// Function to count down from a given number using a while loop
function countDown(number) {
  while (number >= 0) {
    console.log(number);
    number--;
  }
}

// Test the countDown function
countDown(10);


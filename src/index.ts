// Creating a Function for this file
import randomNumber from './gen/NumGen'; // Import the Random Number Generator Function
// Global Types
type num = number; // Type for number


// Global Interface
interface Generate {
    randomNumber: (length: num) => num
}

const Generate: Generate = {
    randomNumber: randomNumber
}

export default Generate; // Export the Function
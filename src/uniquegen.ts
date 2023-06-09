/* COPYRIGHT BY @Ankan Saha */
/* COPYRIGHT YEAR 2023 */

// global TypeScript types
type num = number; // Type for number
type bool = boolean; // Type for boolean
type str = string; // Type for string

// Importing the Function from the Function folder
import GenerateNumberID from './Function/NumFunction'; // Import the Random Number Generator Function
import GenerateWordID from './Function/WordFunction'; // Import the Random Word Generator Function
import GenerateSymbolID from './Function/SymbolFunction'; // Import the Random Symbol Generator Function
import GenerateMixedID from './Function/MixedFunction'; // Import the Random Mixed Generator Function

// Global TypeScript Interfaces
interface Generate {
    randomNumber: (length: num, WithZero: bool, CustomNumbers: num[] | undefined) => Promise<num>;
    randomWord: (length: num, isCAPITAL: bool, CustomWords: str[] | undefined) => Promise<str>;
    randomSymbol: (length: num, CustomSymbols: str[] | undefined) => Promise<str>;
    randomMixed: (length: num, isCAPITAL: bool, CustomMixeds: str[] | undefined) => Promise<str>;
}

/* This code block is creating an object named `Generate` that implements the `Generate` interface. It
is assigning the four functions `GenerateNumberID`, `GenerateWordID`, `GenerateSymbolID`, and
`GenerateMixedID` to the properties `randomNumber`, `randomWord`, `randomSymbol`, and `randomMixed`
respectively. These functions are exported from separate files and are used to generate random
numbers, words, symbols, and mixed strings. The `Generate` object is then exported as the default
export of the module. */
const Generate: Generate = {
    // Export the synchronous functions
    randomNumber: GenerateNumberID,
    randomWord: GenerateWordID,
    randomSymbol: GenerateSymbolID,
    randomMixed: GenerateMixedID,
};

    export const randomNumber = GenerateNumberID; // Export the Function for Random Number
    export const randomWord = GenerateWordID; // Export the Function for Random Word
    export const randomSymbol = GenerateSymbolID; // Export the Function for Random Symbol
    export const randomMixed = GenerateMixedID; // Export the Function for Random Mixed

// Export the default function
export default Generate; // Export the Function

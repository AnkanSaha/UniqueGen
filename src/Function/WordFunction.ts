 // global typescript types
 type num = number; // Type for number
 type str = string; // Type for string
 type bool = boolean; // Type for boolean

 // import Gen functions
 import GenerateWord from "../gen/WordGen"; // function for generating a random word
 
 // function for generating a random number
 export default async function GenerateWordIDsync(length: num, isCAPITAL:bool): Promise<str> {
  /* This line of code is creating an array of all possible letters from 'a' to 'z' that will be used to
generate a random string of characters. The array is stored in the constant variable `Words` and has
a type of `str[]`, which means it is an array of strings. */
const Words: str[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j','k','l','m', 'n', 'o', 'p', 'q', 'r', 's', 't','u','v','w','x','y','z']; // All Possible Words to generate
 
     let Result:str = await GenerateWord(length, Words); // Generate the Random Number
 
     // Checking if the Word should be Capital
     if(isCAPITAL === true){
         return Result = Result.toUpperCase(); // Return the Result in Capital
     }
     else{
      return Result; // Return the Result
     };
 };

 // Asynchronous Function for generating a random ID
 export async function GenerateWordIDAsync(length: num, isCAPITAL:bool): Promise<str> {
        return GenerateWordIDsync(length, isCAPITAL); // Generate the Random ID
    }
//Prompt the user to enter their full name. Generate a username for them based on ithe input. Start username with @, followed by their full name and ending with the full name length.
let fullName = prompt("Enter your full name");
let userName = "@" + fullName + fullName.length; 
console.log(userName);

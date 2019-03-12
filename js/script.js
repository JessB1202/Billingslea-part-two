//declaring variables and prompts for user input

var eventType = prompt("Please enter the event type.", "formal, semi-formal or casual");

var tempFahr = prompt("Please enter the temperatue in degrees Farhrenheit.");

var wear = " ";

//conditional statements for clothing suggestion output

if (eventType === "casual" && tempFahr < 54) {
  wear = "a coat and something comfy.";
} else if (eventType === "casual" && tempFahr >= 54 && tempFahr <= 70) {
  wear = "a jacket and something comfy.";
} else if (eventType === "casual" && tempFahr > 70) {
  wear = "no jacket and something comfy";
} else if (eventType === "semi-formal" && tempFahr <54) {
  wear = "a coat and a polo.";
} else if (eventType === "semi-formal" && tempFahr >= 54 && tempFahr <= 70) {
  wear = "a jacket and a polo.";
} else if (eventType === "semi-formal" && tempFahr > 70) {
  wear = "no jacket and a polo.";
} else if (eventType === "formal" && tempFahr < 54) {
  wear = "a coat and a suit.";
} else if (eventType === "formal" && tempFahr >= 54 && tempFahr <= 70) {
  wear = "a jacket and a suit.";
} else if (eventType === "formal" && tempFahr > 70) {
  wear = "no jacket and a suit.";
} else {
  result = "Invalid input, please refresh the page and try again.";
}

//declaring result variable to be written to the log

var result = `Since it is ${tempFahr} degrees and you are going to a ${eventType} event, you should wear ${wear}`;

//writing the result to the log

console.log(result);
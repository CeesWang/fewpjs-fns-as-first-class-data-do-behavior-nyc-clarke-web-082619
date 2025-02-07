import { format } from "path";

/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time) {
  let formatted_time = parseInt(time.split(":")[0]);
  if (formatted_time < 12) {
    return "Good Morning";
  }
  else if (formatted_time > 12 && formatted_time < 17)
    return "Good Afternoon"; 
  else
    return "Good Evening"
}

/* Write your implementation of displayMessage() */
function displayMessage(message) {
  document.getElementById("greeting").innerText = message;
}
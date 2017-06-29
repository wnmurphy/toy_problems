/*
  Takes array of 100 boolean values, initially all set to false, representing non-completed JIRA tickets.
  Returns number of uncompleted tickets after 100 developers iterate through tickets and toggle completion status, such that:
    Dev 1 toggles every 1 ticket.
    Dev 2 toggles every 2nd ticket.
    Dev 3 toggles every 3rd ticket.
    etc.
*/

// Generate an array of booleans for 100 tickets.
let devs = [];
for (let z = 0; z < 100; z++) {
  devs[z] = false;
}

function getNumberOfOpenTickets (arr) {
  
  var currentDeveloper = 1, interval;
  // Slow loop iterates over 100 developers.
  while (currentDeveloper < 101) {
    interval = currentDeveloper;
    // Fast loop iterates over 100 JIRA tickets.
    for (let i = 0; i < arr.length; i++) {
      interval--;
      if (interval === 0) {
        arr[i] = !arr[i];
        interval = currentDeveloper;
      }
    }
    currentDeveloper++;
    // console.log(arr); // Uncomment to watch the flipping.
  }
  
  let openTicketsRemaining = arr.filter((x) => {
    return x === false;
  });
  return openTicketsRemaining.length;
}

getNumberOfOpenTickets(devs);
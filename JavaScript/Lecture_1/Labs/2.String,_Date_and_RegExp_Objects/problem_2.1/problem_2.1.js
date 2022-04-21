const userIn = prompt("Enter a string value");
const eCounts = (userIn.match(/e/g) || []).length;
alert(`Number of letter 'e' in the message is ${eCounts}`);

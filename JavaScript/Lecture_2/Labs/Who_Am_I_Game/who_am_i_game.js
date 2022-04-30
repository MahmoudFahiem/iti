const isFly = confirm("Do you fly?");
let youAre = "";

if (isFly) {
  const isWild = confirm("Do you wild?");
  if (isWild) {
    youAre = "Eagle";
  } else {
    youAre = "Parrot";
  }
} else {
  const isLiveUnderSea = confirm("Do you live under see?");
  if (isLiveUnderSea) {
    const isWild = confirm("Do you wild?");
    if (isWild) {
      youAre = "Shark";
    } else {
      youAre = "Dolphin";
    }
  } else {
    const isWild = confirm("Do you wild?");
    if (isWild) {
      youAre = "Lion";
    } else {
      youAre = "Cat";
    }
  }
}

document.write(`<h1>You are ${youAre}</h1>`);

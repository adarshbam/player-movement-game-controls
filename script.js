const player = document.querySelector("#player");
const computer = document.querySelector("#computer");

let playerMovement = { x: 0, y: 0 };
let computerMovement = { x: 0, y: 0 };

document.addEventListener("keydown", (e) => {
  if (e.code == "ArrowLeft") playerMovement.x += -1;
  else if (e.code == "ArrowRight") playerMovement.x += 1;
  else if (e.code == "ArrowUp") playerMovement.y += -1;
  else if (e.code == "ArrowDown") playerMovement.y += 1;

  if (
    e.code === "ArrowLeft" ||
    e.code == "ArrowRight" ||
    e.code == "ArrowUp" ||
    e.code == "ArrowDown"
  ) {
    let randomDirection = Math.floor(Math.random() * 2);

    if (randomDirection) {
      computerMovement.x += Math.floor(Math.random() * 2);
      computerMovement.y += Math.floor(Math.random() * 2);
    } else {
      computerMovement.x -= Math.floor(Math.random() * 2);
      computerMovement.y -= Math.floor(Math.random() * 2);
    }
  }

  console.log(e.code, playerMovement, computerMovement);

  player.style = `transform: translate(${playerMovement.x * 100}%, ${
    playerMovement.y * 100
  }%)`;
  computer.style = `transform: translate(${computerMovement.x * 100}%, ${
    computerMovement.y * 100
  }%)`;
});

import Ship from '../Ship/Ship'

const Gameboard = () => {
  const board = Array(72).fill(null);
  const inventory = []
  let areAllSunk = false;
  let sunkCount = 0;

  const _shipSunk = () => {
    sunkCount++;
    if (inventory.length === sunkCount) {
      areAllSunk = true;
    }
  }

  const placeShip = (coordinate, length, isVertical) => {
    const ship = Ship(length);
    if (!isVertical) ship.flipOrientation();
    for (let i = coordinate; i < coordinate + length; i++) {
      board.splice(i, 1, ship)
    }
    inventory.push(ship)
  }

  const recieveAttack = (coordinate) => {
    if (board[coordinate] !== null) {
      const ship = board[coordinate];
      ship.hit(0);
      if (ship.isSunk()) {
        _shipSunk();
      }
    } else {
      board[coordinate] = false;
    }

  }
 
  const theBoard = () => {
    return board;
  }

  const sink = () => {
    return areAllSunk;
  }

  return { placeShip, theBoard, recieveAttack, sink }

}

export default Gameboard;
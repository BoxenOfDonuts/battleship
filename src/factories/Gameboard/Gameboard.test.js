import Gameboard from './Gameboard';
import Ship from '../Ship/Ship';

describe('Test Suite for Gameboard', () => {
  // let gameboard = Gameboard();
  const board = Array(100).fill(null).map((value, index) =>({shot: false, ship: false}));

  beforeEach(() => {
    const board = Array(100).fill(null).map((value, index) =>({shot: false, ship: false}));
    // gameboard = Gameboard();
  })
  
  it('has a test', () =>{
    
  })
  it('places ship correctly', () => {

  })

  // it('creates the board as we expect', () => {
  //   const fakeBoard = Array(100).fill(null).map(value => ({shot: false, ship: false}))
  //   expect(gameboard.board).toEqual(fakeBoard);
  // })
  it('Places a ship on the board', () => {
    // should it be a method? I dunno. but probably?
    const ship = Ship('Patrol Boat', [0,1]);
    const newBoard = Gameboard.placeShip(ship, board)
    expect(newBoard[0]).toEqual({shot: false, ship: 'Patrol Boat'})
    expect(newBoard[1]).toEqual({shot: false, ship: 'Patrol Boat'})
    expect(newBoard[2]).toEqual({shot: false, ship: false})
  })
  it("Placing ship doesn't accidentally mutate the board", ()=> {
    const ship = Ship('Patrol Boat', [0,1]);
    const boardCopy = [...board];
    const newBoard = Gameboard.placeShip(ship, board);
    expect(newBoard[0]).toEqual({shot: false, ship: 'Patrol Boat'});
    expect(board[0]).toEqual({shot: false, ship: false});
    expect(board).toEqual(boardCopy);
  })
  // it('can place multiple ships on the board', () => {
  //   // should it be a method? I dunno. but probably?    
  //   const boat = Ship('boat', [0]);
  //   const destroyer = Ship('destroyer', [22,23])
  //   gameboard.board[0].ship = boat;
  //   gameboard.board[22].ship = destroyer;
  //   gameboard.board[23].ship = destroyer;
  //   expect(gameboard.board[0]).toEqual({shot: false, ship: boat})
  //   expect(gameboard.board[1]).toEqual({shot: false, ship: false})
  //   expect(gameboard.board[22]).toEqual({shot: false, ship: destroyer})
  //   expect(gameboard.board[23]).toEqual({shot: false, ship: destroyer})
  // })
  // it('ships are unique', () => {
  //   const boat = Ship('boat', [0]);
  //   const destroyer = Ship('destroyer', [22,23])
  //   gameboard.board[0].ship = boat;
  //   gameboard.board[22].ship = destroyer;
  //   gameboard.board[23].ship = destroyer;
  //   const didHit = gameboard.recieveAttack(22);
  //   destroyer.hit(22);
  //   expect(didHit).toBe(true)
  //   expect(gameboard.board[22]).toEqual({shot:true, ship: destroyer})
  //   expect(gameboard.board[0]).toEqual({shot:false, ship: boat})
  //   expect(boat.data.hits).toEqual([])
  //   expect(destroyer.data.hits).toEqual([22])
  // })
  // it('can mark hits on a ship', () => {
  //   const boat = Ship('boat', [0]);
  //   gameboard.board[0].ship = boat;
  //   expect(gameboard.board[0].shot).toBe(false)
  //   const didHit = gameboard.recieveAttack(0);
  //   expect(didHit).toBe(true)
  //   expect(gameboard.board[0].shot).toBe(true)
  // })

  // it('can mark a miss on the board', () => {
  //   const boat = Ship('boat', [0]);
  //   gameboard.board[0].ship = boat;
  //   expect(gameboard.board[10].shot).toBe(false);
  //   const didHit = gameboard.recieveAttack(10);
  //   expect(didHit).toBe(false)
  //   expect(gameboard.board[10].shot).toBe(true)
  // })
  // it('place ship method works as expected', () => {
  //   const destroyer = Ship('destroyer', [22,23])
  //   gameboard.placeShip(destroyer);
  //   expect(gameboard.board[22]).toEqual({shot: false, ship: destroyer})
  //   expect(gameboard.board[23]).toEqual({shot: false, ship: destroyer})
  // })
})
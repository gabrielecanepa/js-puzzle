// 1. Select all tiles
// 2. For each tile
// 3. Listen to the click event
// 4. If it has an empty neighbor
// 5. Swap the tile and the empty space
// 6. Check if player wins

const tiles = Array.from(document.querySelectorAll('td'));

const canMove = (tile) => {
  const tileColumn = tile.cellIndex;
  const tileRow = tile.parentElement.rowIndex;
  const emptyTile = document.querySelector('.empty');
  const emptyTileColumn = emptyTile.cellIndex;
  const emptyTileRow = emptyTile.parentElement.rowIndex;

  return (
    (tileColumn === emptyTileColumn && tileRow === emptyTileRow + 1) ||
    (tileColumn === emptyTileColumn && tileRow === emptyTileRow - 1) ||
    (tileRow === emptyTileRow && tileColumn === emptyTileColumn + 1) ||
    (tileRow === emptyTileRow && tileColumn === emptyTileColumn - 1)
  );
};

const checkVictory = () => {
  const tilesOrder = tiles.map(e => Number.parseInt(e.innerText, 10));

  if (tilesOrder.join() === '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,NaN') {
    alert('You win!');
  }
};

tiles.forEach((tile) => {
  tile.addEventListener('click', (event) => {
    const clickedTile = event.currentTarget;
    const emptyTile = document.querySelector('td.empty');

    if (canMove(clickedTile)) {
      emptyTile.innerText = clickedTile.innerText;
      emptyTile.classList.remove('empty');
      clickedTile.innerText = '';
      clickedTile.classList.add('empty');
    }

    checkVictory();
  });
});

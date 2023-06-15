function makeDiagonalRed(table) {
  // ваш код...
  let tableDiagonalRed = document.body.firstElementChild;

  for (let i = 0; i < table.rows.length; i++) {
    let row = table.rows[i];
    row.cells[i].style.backgroundColor = 'red';
  }
  return tableDiagonalRed;
}

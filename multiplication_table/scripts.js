

  function generateMultiplicationTable(rows, columns) {
    let tableHTML = '<table class="table table-bordered">';

    tableHTML += '<thead><tr><th></th>';
    for (let i = 1; i <= columns; i++) {
      tableHTML += `<th>${i}</th>`;
    }
    tableHTML += '</tr></thead><tbody>';


    for (let i = 1; i <= rows; i++) {
      tableHTML += `<tr><th>${i}</th>`;
      for (let j = 1; j <= columns; j++) {
        tableHTML += `<td>${i * j}</td>`;
      }
      tableHTML += '</tr>';
    }
    tableHTML += '</tbody></table>';

  
    $('#multiplicationTable').html(tableHTML);
  }

 
  $('#generateTable').on('click', function() {
    const rows = parseInt($('#rowsInput').val());
    const columns = parseInt($('#columnsInput').val());
    if (!isNaN(rows) && !isNaN(columns)) {
      generateMultiplicationTable(rows, columns);
    } else {
      alert('Please enter valid numbers for rows and columns.');
    }
  });

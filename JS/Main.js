function fnAddCol() {
    //how to reffer html??
    document.getElementById('AddCols').innerHtml = "AddCol.html";
}

function Close() {

    document.getElementById('AddCols').innerHtml = "";
}


/*function Add() {
    var tbl = document.getElementById('my-table1'),
        i;
    for (i = 0; i < tbl.rows.length; i++) {
        createCell(tbl.rows[i].insertCell(tbl.rows[i].cells.length), i, '      '); //get data from AddCol.html
    }
}*/
/*function AddRow() {
    var tbl = document.getElementById('my-table2'),
        row = tbl.insertRow(tbl.rows.length),
        i;
    for (i = 0; i < tbl.rows[0].cells.length; i++) {

        createCell(row.insertCell(), i, 'row'); //get data here
    }
}
function DeleteRow() {
}
*/
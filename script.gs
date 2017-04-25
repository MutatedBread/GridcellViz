function onOpen() {
  var ui = SpreadsheetApp.getUi();
  // Or DocumentApp or FormApp.
  ui.createMenu('SuperDashViz')
      .addItem('Show UI', 'openWindow')
      .addToUi();
}

function openWindow(){
  var html = HtmlService.createHtmlOutputFromFile('viz')
      .setTitle('GridcellViz')
      .setWidth(300);
  SpreadsheetApp.getUi() // Or DocumentApp or FormApp.
      .showSidebar(html);
}

function getGridInfo(){
  var cell = SpreadsheetApp.getActiveSheet().getActiveCell();
  var row = cell.getRow();
  var column = cell.getColumn();
  if(column >= 8){
    var values = SpreadsheetApp.getActiveSheet().getRange(row, column - 8, 1, 8).getValues();
    return values[0]; 
  }
}

function selectValue(value){
  SpreadsheetApp.getActiveSheet().getActiveCell().setValue(value);
}

function nextRow(){
  var cell = SpreadsheetApp.getActiveSheet().getActiveCell();
  var row = cell.getRow();
  var column = cell.getColumn();
  Logger.log(row);
  Logger.log(column);
  SpreadsheetApp.getActiveSheet().getRange(row + 1, column).activate();
}

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var newRow = [e.parameter.nome, e.parameter.email, e.parameter.telefone];
  sheet.appendRow(newRow);
  return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
}
/**
 * @OnlyCurrentDoc
 * 
 * Web App URL: https://script.google.com/macros/s/AKfycby-BUDhpZlSzeO8C2lHZZ6qCakJY5oY6OQxwU9jR0C_GdGx0t6Dx1J7nEYYIK7aqZtojw/exec
 */

function doGet(e) {
  try {
    // Sua lógica principal aqui
    return ContentService
      .createTextOutput(JSON.stringify({
        'status': 'success',
        'message': 'Web app BIG Teclogica funcionando perfeitamente!',
        'timestamp': new Date(),
        'data': 'Sistema operacional normal'
      }))
      .setMimetype(ContentService.MimeType.JSON)
      .setHeaders({
        'Access-Control-Allow-Origin': '*'
      });
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({
        'status': 'error',
        'message': error.toString()
      }))
      .setMimetype(ContentService.MimeType.JSON)
      .setHeaders({
        'Access-Control-Allow-Origin': '*'
      });
  }
}

function doPost(e) {
  // Lógica para requisições POST
  try {
    const data = JSON.parse(e.postData.contents);
    return ContentService
      .createTextOutput(JSON.stringify({
        'status': 'success',
        'message': 'Dados recebidos via POST',
        'received': data,
        'timestamp': new Date()
      }))
      .setMimetype(ContentService.MimeType.JSON)
      .setHeaders({
        'Access-Control-Allow-Origin': '*'
      });
  } catch (error) {
    return doGet(e);
  }
}

// Funções auxiliares
function getSheetData() {
  // Sua lógica para acessar planilhas
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    return sheet.getDataRange().getValues();
  } catch (error) {
    Logger.log('Erro ao acessar planilha: ' + error.toString());
    return null;
  }
}

function processData(data) {
  // Sua lógica de processamento
  if (!data) return null;
  
  return data.map(row => {
    // Processar cada linha conforme necessário
    return row;
  });
}

function testConnection() {
  return {
    status: 'success',
    message: 'Conexão testada com sucesso',
    timestamp: new Date()
  };
}

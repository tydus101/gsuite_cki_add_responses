// The Script to add ERF responses to the district directory! 
// 
// Instructions
//

function addToDirectory() {
  // The constants are added inside the function because Google did a poor job of their Javascript implementation...
  
  // ************************************************************* CONSTANTS **********************************************************************
  
  // The key of the district directory file. This can be obtained from the URL of the directory file. 
  const DIRECTORY_FILE_KEY = "thekeyofthefile";
  // This is the name of the sheet that you want to append the submitted values to. Should be RAW unless changed for some reason.
  const DIRECTORY_FILE_SHEET_NAME = "RAW";
   
  // **********************************************************************************************************************************************
  
  

  
  var spreadsheet = SpreadsheetApp.openById(DIRECTORY_FILE_KEY);
  SpreadsheetApp.setActiveSpreadsheet(spreadsheet);
  var sheet = spreadsheet.getSheetByName(DIRECTORY_FILE_SHEET_NAME);

  Logger.log(sheet.getName());
}

/**
 * Google Apps Script — Contact Form Handler
 *
 * Target sheet: agentdone.com Contact Form Submissions_v1
 * Sheet ID:     1avbyyPVzUzGLX7HclX5Xz6NjhGvjof7256xH-K9U7pA
 *
 * Setup:
 *   1. Open the sheet → Extensions → Apps Script
 *   2. Replace the default Code.gs with this file's contents
 *   3. Run the `setup` function once (creates column headers, approve Sheets permission)
 *   4. Deploy → New deployment → Type: Web app →
 *      Execute as: Me → Who has access: Anyone → Deploy
 *   5. Copy the web app URL into Contact.jsx's FORM_ENDPOINT constant
 */

/**
 * Writes column headers to row 1 of Sheet1.
 * Run once after pasting this script.
 */
function setup() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1');
  var headers = [
    'Timestamp',
    'First Name',
    'Last Name',
    'Email',
    'Newsletter',
    'Phone',
    'Services',
    'How Did You Hear',
    'Message',
  ];
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
}

/**
 * Receives form submissions as JSON POST.
 * Appends a row to Sheet1 and returns a JSON response.
 */
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1');

    sheet.appendRow([
      new Date().toISOString(),
      data.firstName || '',
      data.lastName || '',
      data.email || '',
      data.newsletter ? 'Yes' : 'No',
      data.phone || '',
      data.services || '',
      data.hearAbout || '',
      data.message || '',
    ]);

    return ContentService.createTextOutput(
      JSON.stringify({ result: 'success' })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ result: 'error', error: err.message })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

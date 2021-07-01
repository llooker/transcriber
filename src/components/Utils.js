const underscoreToCamelCase = (type) => {
  type = type.toLowerCase();
  let tName = type.charAt(0).toUpperCase() + type.slice(1);
  
  let parts = tName.split("_");
  if(parts.length == 2) {
    tName = parts[0] + parts[1].charAt(0).toUpperCase() + parts[1].slice(1);
  }
  
  return tName;
}

const appendElementToDoc = (appendTo, element) => {
  let tName = underscoreToCamelCase(element.getType() + "");  
  try {
    appendTo["append" + tName](element);
  }
  catch(e) {    
    console.error(e + '')
  }   
  return appendTo;
}

const sanitizeString = (s) => {
    s = s.replace(/[^a-z0-9áéíóúñü \.,_-]/gim,"");
    return s.trim();
}

const niceDate = () => {
    let d = new Date()
    return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`
}

// TO DO --> convert AppScript into JS for Google Doc API
export const generateDocument = (client, scores) => {
//   let data = JSON.parse(scores)
//   let customer = sanitizeString(input.customer)
//   let newTitle = `Review for ${customer} (${niceDate()})`
//   let template = DocumentApp.openById('1qHC9rC-3GIs6S9j50OQ_Magj03g7KA8xayoWARVHeFg') // Checklists App Page Template
//   let newDoc = DocumentApp.create();
//   let body = newDoc.getBody();
  
//   let header = newDoc.addHeader();
  
//   for (let i=0; i<template.getHeader().getNumChildren(); i++) {
//     appendElementToDoc(header, template.getHeader().getChild(i).copy());
//   }
//   header.editAsText().deleteText(0, 1);
  
//   let footer = newDoc.addFooter();
//   for (let i = 0; i < template.getFooter().getNumChildren(); i++) {
//     appendElementToDoc(footer, template.getFooter().getChild(i).copy());
//   }
  
//   let cellStyle = {};
//   cellStyle[DocumentApp.Attribute.BOLD] = false;
//   cellStyle[DocumentApp.Attribute.FONT_FAMILY] = 'Helvetica Neue';  
  
//   let cardCount = 0
//   let links = []

//   for (let cardName in input['cards']) {
//     let srcBody = template.getBody();
//     let elems = srcBody.getNumChildren();
    
//     for (let i = 0; i < elems; i++ ) {
//       elem = srcBody.getChild(i).copy();
//       elem.editAsText().replaceText("{{ CARD }}", cardName)
//       elem.editAsText().replaceText("{{ CARD SUMMARY }}", summary[cardName])

//       try {
//         appendElementToDoc(body, elem);
//       }
//       catch(err) {
//         let style = {};
//         style[DocumentApp.Attribute.BOLD] = true;
//         body.appendParagraph("Element type '" + elem.getType() + "' could not be merged.").setAttributes(style);
//       }
//     }
    
//     let tables = body.getTables()
//     let notes = ""
//     let totalPossibleScore = 0
//     let totalScore = 0

//     for (let row in input['cards'][cardName]['rows']) {
//       if (row != "null") {
//         let nextRow = tables[cardCount].appendTableRow();
        
//         let score = input['cards'][cardName]['rows'][row].score

//         switch (score) {
//           case 0:
//             let label = '0';
//             cellStyle[DocumentApp.Attribute.BACKGROUND_COLOR] = '#FFFFFF'; //E1C2C2
//             break;
//           case 1:
//             let label = '1';
//             cellStyle[DocumentApp.Attribute.BACKGROUND_COLOR] = '#FFFFFF'; 
//             break;
//           case 2:
//             let label = '2';
//             cellStyle[DocumentApp.Attribute.BACKGROUND_COLOR] = '#FFFFFF'; 
//             break;
//           case 3:
//             let label = '3';
//             cellStyle[DocumentApp.Attribute.BACKGROUND_COLOR] = '#FFFFFF'; 
//             break;
//           case 4:
//             let label = '4';
//             cellStyle[DocumentApp.Attribute.BACKGROUND_COLOR] = '#FFFFFF'; 
//             break;
//           case 5:
//             let label = 'N/A';
//             cellStyle[DocumentApp.Attribute.BACKGROUND_COLOR] = '#EEEEEE'; 
//             break;
//         }

//         // NA lines are passed with a numeric score of 5 so we could hackily differentiate their styling but they should actually be ignored
//         if (score <= 4) {
//           totalPossibleScore += 4
//           totalScore += score
//         }

//         let markdownLinks = /\[([^\]]+)\]\(([^)]+)\)/gi
//         let match = markdownLinks.exec(row);
//         while (match != null) {
//           links.push([match[1],match[2]]);
//           match = markdownLinks.exec(row);
//         }
//         nextRow.appendTableCell(row.replace(markdownLinks, 'LINK$1LINK')).setAttributes(cellStyle);

//         if (input['cards'][cardName]['rows'][row].notes) {
//           let noteStyle = {};
//           noteStyle[DocumentApp.Attribute.FONT_FAMILY] = 'Times New Roman';
//           noteStyle[DocumentApp.Attribute.FONT_SIZE] = 10;
//           nextRow.getCell(0).insertHorizontalRule(1);
//           nextRow.getCell(0).insertParagraph(2, "\n  " + input['cards'][cardName]['rows'][row].notes + "\n").setAttributes(noteStyle);
//         }
// //        else {
// //          nextRow.getCell(0).insertHorizontalRule(1);
// //          nextRow.getCell(0).insertParagraph(2, "  ");
// //        }

//         let labelStyle = {};
//         labelStyle[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] = DocumentApp.HorizontalAlignment.CENTER;
//         nextRow.appendTableCell(label).getChild(0).asParagraph().setAttributes(labelStyle);
//       }
//     }
  
//     let scoreRowStyle = {};
//     scoreRowStyle[DocumentApp.Attribute.BACKGROUND_COLOR] = '#FFFFFF'; 
//     scoreRowStyle[DocumentApp.Attribute.BOLD] = true;
//     scoreRowStyle[DocumentApp.Attribute.ITALIC] = true;

//     let score_percent = Math.round(totalScore / totalPossibleScore * 100)
//     let nextRow = tables[cardCount].appendTableRow();
//     nextRow.appendTableCell("Achieved " + totalScore + " of " + totalPossibleScore + " possible points").setAttributes(scoreRowStyle);
//     scoreRowStyle[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] = DocumentApp.HorizontalAlignment.CENTER;
//     nextRow.appendTableCell(score_percent + "%").getChild(0).asParagraph().setAttributes(scoreRowStyle);

//     cardCount++;
//   }
  
//   body.editAsText().replaceText("{{ CUSTOMER }}", customer)
//   footer.editAsText().replaceText("{{ CUSTOMER }}", customer)

//   for (let key in links) {
//     let searchResult = body.findText("LINK" + links[key][0] + "LINK");
//     while (searchResult !== null) {
//       let thisElement = searchResult.getElement();
//       let thisElementText = thisElement.asText();
//       thisElementText.setLinkUrl(searchResult.getStartOffset(), searchResult.getEndOffsetInclusive(), links[key][1]);
//       thisElementText.setFontFamily(searchResult.getStartOffset(), searchResult.getEndOffsetInclusive(),"Roboto Mono");
//       searchResult = body.findText("LINK" + links[key][0] + "LINK", searchResult);
//     }
//   }

//   body.editAsText().replaceText("LINK","");

//   let folder = DriveApp.getFolderById('1VXtp98I-A8MFdo-wN3iHnYOPYtqh8lTI');
//   folder.addFile(DriveApp.getFileById(newDoc.getId()));
  
//   let response = {"url": newDoc.getUrl()}
//   return ContentService.createTextOutput(JSON.stringify(response)).setMimeType(ContentService.MimeType.JSON); 


//   let headers = {
//     ...await client.getRequestHeaders(),
//     "Access-Control-Allow-Origin": "*",
//     "Content-type": "application/json; charset=utf-8"
//   };

//   let r = await client.request({})
}
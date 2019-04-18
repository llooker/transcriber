var summary = [];
summary['Monitoring'] = 'Mature technical architectures treat monitoring as a first-order principle. Monitoring can be implemented with custom tools or with popular SaaS applications.'
summary['Data Pipeline'] = 'The ideal process to make timely and accurate data available for modeling is to extract from business systems, load to an analytical database as-is, and then transform with Looker—ELT—but in enterprise use cases, the volume and complexity of data may require additional data engineering.'
summary['Database Connections'] = 'Build a foundation to rely on by making sure every database that Looker connects to is configured properly. Looker works best with massively parallel processing (MPP) database architectures.'
summary['Application Servers (On-Premise)'] = 'Like all web application servers, setting up and maintaining a Looker application server requires some planning. Follow these best practices to ensure a small issue doesn’t turn into an emergency.'
summary['Application Database (On-Premise)'] = 'Looker uses an application database to store the metadata required to run Looker. In clustered environments this is typically a MySQL database.'
summary['Performance'] = 'A slow user experience is frustrating and makes adoption difficult, but delivering instant answers to your users is magical. The cumulative effects of computing horsepower, clever summarization in the model, judicious use of caching, appropriate configuration, and simplified content make magic possible.'
summary['Security'] = 'Looker has a complex security model that allows you to fine-tune content access, data access, and feature access to an almost infinite degree. Following best practices to configure end-user access and permissions ensures the security model remains robust, flexible, and most of all, understandable.'
summary['Release Management'] = 'Looker runs on a rapid release cycle and improves quickly. By taking advantage of our release cadence and matching your own development workflow to it, you set the pace required to build a healthy data culture and generate a process of ongoing improvement that benefits your organization.'
summary['Content Management'] = 'Curating content and fields in Looker ensures end-users easily find the valuable answers they need and don’t waste their time wondering if they’re on the correct version of a look or explore. Like all housekeeping, a little bit at a time on a regular schedule is preferable to cleaning up a great big mess.'
summary['User Enablement'] = 'Creating a centre of excellence can deepen data culture and promote further adoption. Building data analytics as a core competency  requires a thoughtful approach to end-user training and enablement, and is easier if other architectural components and processes score highly first.'
summary['Top 10 Behaviors and Characteristics of Successful Customers'] = 'We identified the top things that our most successful customers do.'
summary['Development Process & Environment'] = 'These best practices reflect recommendations shared by a cross-functional team of seasoned Lookers. These insights come from years of experience working with Looker customers from implementation to long-term success.'
summary['Projects'] = 'A project is a collection of LookML files that describe how your database tables are related to each other and how Looker should interpret those tables.'
summary['Explores'] = 'An Explore is a view that users can query. You can think of the Explore as a starting point for a query, or in SQL terms, as the FROM in a SQL statement. Not all views are Explores, because not all views describe an entity of interest.'
summary['Models'] = 'A model is a customized portal into the database, designed to provide intuitive data exploration for specific business users. Multiple models can exist for the same database connection in a single LookML project.'
summary['Views'] = 'A view declaration defines a list of fields (dimensions or measures) and their linkage to an underlying table or derived table. In LookML a view typically references an underlying database table, but it can also represent a derived table.'

function underscoreToCamelCase(type) {
  type = type.toLowerCase();
  var tName = type.charAt(0).toUpperCase() + type.slice(1);
  
  var parts = tName.split("_");
  if(parts.length == 2) {
    tName = parts[0] + parts[1].charAt(0).toUpperCase() + parts[1].slice(1);
  }
  
  return tName;
}

function appendElementToDoc(appendTo, element) {
  var tName = underscoreToCamelCase(element.getType() + "");  
  try {
    appendTo["append" + tName](element);
  }
  catch(err) {    
    Logger.log(err + "");
  }   
  return appendTo;
}

// curl -H "Content-Type: application/json" -d '{"customer":"Merrill","cards":{"LookML Development":{"rows":{"A development and staging workflow is used to promote changes":{"notes":"cat","score":1},"A defined process exists for end-users to make modeling requests":{"notes":"rat","score":2},"A defined process exists to organize and prioritize modeling requests":{"notes":"bat","score":3}}},"LookML Project Organization":{"rows":{"Separate Projects are recommended when there are disparate application teams or development groups with limited collaboration between the teams.":{"notes":"zebra","score":1},"Separate Projects are recommended when team have different deployment schedules and release cycles. Each projects must use a dedicated GIT repository.":{"notes":"donkey","score":1},"Avoid creating DEV/QA Projects on the same instance since it adds to complexity with development and deployment of LookML files and content.":{"notes":"chipmunk","score":2}}}}}' https://script.google.com/a/looker.com/macros/s/AKfycbzAAHv7EHgJRbZ5f8IqnK3IPqWDlnuUZWZTC-zIfw/exec
function doPost(e) {
  input = JSON.parse(e.postData.contents)

  var template = DocumentApp.openById('1qHC9rC-3GIs6S9j50OQ_Magj03g7KA8xayoWARVHeFg') // Checklists App Page Template
  var newDoc = DocumentApp.create('Review for ' + input['customer'] + ' (' + Utilities.formatDate(new Date(), "GMT+1", "yyyy-MM-dd") + ')');
  var body = newDoc.getBody();
  
  var header = newDoc.addHeader();
  
  for (var i=0; i<template.getHeader().getNumChildren(); i++) {
    appendElementToDoc(header, template.getHeader().getChild(i).copy());
  }
  header.editAsText().deleteText(0, 1);
  
  var footer = newDoc.addFooter();
  for (var i = 0; i < template.getFooter().getNumChildren(); i++) {
    appendElementToDoc(footer, template.getFooter().getChild(i).copy());
  }
  
  var cellStyle = {};
  cellStyle[DocumentApp.Attribute.BOLD] = false;
  cellStyle[DocumentApp.Attribute.FONT_FAMILY] = 'Helvetica Neue';  
  
  var cardCount = 0
  var links = []

  for (var cardName in input['cards']) {
    var srcBody = template.getBody();
    var elems = srcBody.getNumChildren();
    
    for (var i = 0; i < elems; i++ ) {
      elem = srcBody.getChild(i).copy();
      elem.editAsText().replaceText("{{ CARD }}", cardName)
      elem.editAsText().replaceText("{{ CARD SUMMARY }}", summary[cardName])

      try {
        appendElementToDoc(body, elem);
      }
      catch(err) {
        var style = {};
        style[DocumentApp.Attribute.BOLD] = true;
        body.appendParagraph("Element type '" + elem.getType() + "' could not be merged.").setAttributes(style);
      }
    }
    
    var tables = body.getTables()
    var notes = ""
    var totalPossibleScore = 0
    var totalScore = 0

    for (var row in input['cards'][cardName]['rows']) {
      if (row != "null") {
        var nextRow = tables[cardCount].appendTableRow();
        
        var score = input['cards'][cardName]['rows'][row].score
        totalPossibleScore += 4
        totalScore += score

        switch (score) {
          case 0:
            var label = '0';
            cellStyle[DocumentApp.Attribute.BACKGROUND_COLOR] = '#FFFFFF'; //E1C2C2
            break;
          case 1:
            var label = '1';
            cellStyle[DocumentApp.Attribute.BACKGROUND_COLOR] = '#FFFFFF'; 
            break;
          case 2:
            var label = '2';
            cellStyle[DocumentApp.Attribute.BACKGROUND_COLOR] = '#FFFFFF'; 
            break;
          case 3:
            var label = '3';
            cellStyle[DocumentApp.Attribute.BACKGROUND_COLOR] = '#FFFFFF'; 
            break;
          case 4:
            var label = '4';
            cellStyle[DocumentApp.Attribute.BACKGROUND_COLOR] = '#FFFFFF'; 
            break;
          case 5:
            var label = 'N/A';
            cellStyle[DocumentApp.Attribute.BACKGROUND_COLOR] = '#EEEEEE'; 
            break;
        }

        var markdownLinks = /\[([^\]]+)\]\(([^)]+)\)/gi
        var match = markdownLinks.exec(row);
        while (match != null) {
          links.push([match[1],match[2]]);
          match = markdownLinks.exec(row);
        }
        nextRow.appendTableCell(row.replace(markdownLinks, 'LINK$1LINK')).setAttributes(cellStyle);

        if (input['cards'][cardName]['rows'][row].notes) {
          var noteStyle = {};
          noteStyle[DocumentApp.Attribute.FONT_FAMILY] = 'Times New Roman';
          noteStyle[DocumentApp.Attribute.FONT_SIZE] = 10;
          nextRow.getCell(0).insertHorizontalRule(1);
          nextRow.getCell(0).insertParagraph(2, "\n  " + input['cards'][cardName]['rows'][row].notes + "\n").setAttributes(noteStyle);
        }
//        else {
//          nextRow.getCell(0).insertHorizontalRule(1);
//          nextRow.getCell(0).insertParagraph(2, "  ");
//        }

        var labelStyle = {};
        labelStyle[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] = DocumentApp.HorizontalAlignment.CENTER;
        nextRow.appendTableCell(label).getChild(0).asParagraph().setAttributes(labelStyle);
      }
    }
  
    var scoreRowStyle = {};
    scoreRowStyle[DocumentApp.Attribute.BACKGROUND_COLOR] = '#FFFFFF'; 
    scoreRowStyle[DocumentApp.Attribute.BOLD] = true;
    scoreRowStyle[DocumentApp.Attribute.ITALIC] = true;

    var score_percent = Math.round(totalScore / totalPossibleScore * 100)
    var nextRow = tables[cardCount].appendTableRow();
    nextRow.appendTableCell("Achieved " + totalScore + " of " + totalPossibleScore + " possible points").setAttributes(scoreRowStyle);
    scoreRowStyle[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] = DocumentApp.HorizontalAlignment.CENTER;
    nextRow.appendTableCell(score_percent + "%").getChild(0).asParagraph().setAttributes(scoreRowStyle);

    cardCount++;
  }
  
  body.editAsText().replaceText("{{ CUSTOMER }}", input['customer'])
  footer.editAsText().replaceText("{{ CUSTOMER }}", input['customer'])

  for (var key in links) {
    var searchResult = body.findText("LINK" + links[key][0] + "LINK");
    while (searchResult !== null) {
      var thisElement = searchResult.getElement();
      var thisElementText = thisElement.asText();
      thisElementText.setLinkUrl(searchResult.getStartOffset(), searchResult.getEndOffsetInclusive(), links[key][1]);
      thisElementText.setFontFamily(searchResult.getStartOffset(), searchResult.getEndOffsetInclusive(),"Roboto Mono");
      searchResult = body.findText("LINK" + links[key][0] + "LINK", searchResult);
    }
  }

  body.editAsText().replaceText("LINK","");

  var folder = DriveApp.getFolderById('1VXtp98I-A8MFdo-wN3iHnYOPYtqh8lTI');
  folder.addFile(DriveApp.getFileById(newDoc.getId()));
  
  var response = {"url": newDoc.getUrl()}
  return ContentService.createTextOutput(JSON.stringify(response)).setMimeType(ContentService.MimeType.JSON); 
}
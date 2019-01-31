var summary = [];
summary['Monitoring'] = 'Mature technical architectures treat monitoring as a first-order principle. Monitoring can be implemented with custom tools or with popular SaaS applications.'
summary['Data Pipeline'] = 'The ideal process to make timely and accurate data available for modeling is to extract from business systems, load to an analytical database as-is, and then transform with Looker—ELT—but in enterprise use cases, the volume and complexity of data may require additional data engineering.'
summary['Database Connections'] = 'Build a foundation to rely on by making sure every database that Looker connects to is configured properly. Looker works best with massively parallel processing (MPP) database architectures.'
summary['Application Servers - On-Premise'] = 'Like all web application servers, setting up and maintaining a Looker application server requires some planning. Follow these best practices to ensure a small issue doesn’t turn into an emergency.'
summary['Application Database - On-Premise'] = 'Looker uses an application database to store the metadata required to run Looker. In clustered environments this is typically a MySQL database.'
summary['Performance'] = 'A slow user experience is frustrating and makes adoption difficult, but delivering instant answers to your users is magical. The cumulative effects of computing horsepower, clever summarization in the model, judicious use of caching, appropriate configuration, and simplified content make magic possible.'
summary['Data Security'] = 'Looker has a complex security model that allows you to fine-tune content access, data access, and feature access to an almost infinite degree. Following best practices to configure end-user access and permissions ensures the security model remains robust, flexible, and most of all, understandable.'
summary['LookML Development'] = 'Developing with LookML should be treated like developing with any other programming language. Success requires a development methodology, shared coding standards, and smart code promotion.'
summary['Release Management'] = 'Looker runs on a rapid release cycle and improves quickly. By taking advantage of our release cadence and matching your own development workflow to it, you set the pace required to build a healthy data culture and generate a process of ongoing improvement that benefits your organization.'
summary['Content Management'] = 'Curating content and fields in Looker ensures end-users easily find the valuable answers they need and don’t waste their time wondering if they’re on the correct version of a look or explore. Like all housekeeping, a little bit at a time on a regular schedule is preferable to cleaning up a great big mess.'
summary['User Enablement'] = 'Creating a centre of excellence can deepen data culture and promote further adoption. Building data analytics as a core competency  requires a thoughtful approach to end-user training and enablement, and is easier if other architectural components and processes score highly first.'
summary['Comprehensive Project, Model, & View Organization'] = ''
summary['LookML Project Organization'] = ''
summary['LookML Project Organization'] = ''

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

// curl -H "Content-Type: application/json" -d '{"customer":"Merrill","cards":{"LookML Development":{"rows":{"A development and staging workflow is used to promote changes":{"notes":"cat","state":1},"A defined process exists for end-users to make modeling requests":{"notes":"rat","state":2},"A defined process exists to organize and prioritize modeling requests":{"notes":"bat","state":3}}},"LookML Project Organization":{"rows":{"Separate Projects are recommended when there are disparate application teams or development groups with limited collaboration between the teams.":{"notes":"zebra","state":1},"Separate Projects are recommended when team have different deployment schedules and release cycles. Each projects must use a dedicated GIT repository.":{"notes":"donkey","state":1},"Avoid creating DEV/QA Projects on the same instance since it adds to complexity with development and deployment of LookML files and content.":{"notes":"chipmunk","state":2}}}}}' https://script.google.com/a/looker.com/macros/s/AKfycbzAAHv7EHgJRbZ5f8IqnK3IPqWDlnuUZWZTC-zIfw/exec
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
  
  var cardCount = 0
  
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
    
    for (var row in input['cards'][cardName]['rows']) {
      var nextRow = tables[(cardCount*2)].appendTableRow();
      
      var state = input['cards'][cardName]['rows'][row].state
      switch (state) {
        case 1:
          var label = 'Yes';
          cellStyle[DocumentApp.Attribute.BACKGROUND_COLOR] = '#FFFFFF'; 
          break;
        case 2:
          var label = 'No';
          cellStyle[DocumentApp.Attribute.BACKGROUND_COLOR] = '#E1C2C2'; 
          break;
        case 3:
          var label = 'N/A';
          cellStyle[DocumentApp.Attribute.BACKGROUND_COLOR] = '#EEEEEE'; 
          break;
      }

      nextRow.appendTableCell(row).setAttributes(cellStyle);
      nextRow.appendTableCell(label).setAttributes(cellStyle);

      if (input['cards'][cardName]['rows'][row].notes)
        notes += input['cards'][cardName]['rows'][row].notes + "\n"
    }
   
    body.editAsText().replaceText("{{ NOTES }}", notes)
 
    cardCount++;
  }
  
  body.editAsText().replaceText("{{ CUSTOMER }}", input['customer'])
  footer.editAsText().replaceText("{{ CUSTOMER }}", input['customer'])
  
  var folder = DriveApp.getFolderById('1VXtp98I-A8MFdo-wN3iHnYOPYtqh8lTI');
  folder.addFile(DriveApp.getFileById(newDoc.getId()));
  
  var response = {"url": newDoc.getUrl()}
  return ContentService.createTextOutput(JSON.stringify(response)).setMimeType(ContentService.MimeType.JSON); 
}
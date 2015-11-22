/** 
  autoCms is working nice with autoForm and has a huge need of it
  autoCms handles not only insert and update events but also can list and construct relations with other collections 
  in table and we are calling this extension as autoTable. 
  In conclusion, autoCms is the combination of autoForm and autoTable
  @category   cms
  @ver        0.1.0
  @authors    günce ali bektas <info@guncebektas.com>, aykut aktas <aykut@aktas.me>
  @license    http://www.gnu.org/copyleft/gpl.html GNU General Public License
  @link       https://github.com/guncebektas/autocms
*/

// Initialize params on create
Template.cmsCollection.onCreated(function(){
  collection = FlowRouter.getParam("collection");
  func = FlowRouter.getParam("function");
  
  if (FlowRouter.getParam("id"))
    id = FlowRouter.getParam("id");

  table = window[collection].table;

  // Set default options
  showNavButtons = true;
  showActionButtons = true; 
  if (typeof table.buttons != 'undefined') {
     
    if (typeof showActionButtons != 'undefined') {
      showActionButtons = table.buttons.showActionButtons;
      
      if (typeof table.buttons.edit.auth() != undefined && typeof table.buttons.delete.auth() != undefined) {
        if (table.buttons.edit.auth() == true && table.buttons.delete.auth() == true)
          showActionButtons = true;
        else if (table.buttons.edit.auth() == false && table.buttons.delete.auth() == false)
          showActionButtons = false;   
      }
    }

    if (typeof table.buttons.showNavButtons != 'undefined')
      showNavButtons = table.buttons.showNavButtons;  
  }
  
  showNo = true;
  if (typeof table.showNo != 'undefined')
    showNo = table.showNo; 

  // default width for images
  width = '40';           
});

// Set template helpers
Template.cmsCollection.helpers({
  // is autoCmsForm will be in use for insert/update, if not return false to list collection
  'autoCmsForm': function() {
    switch(func) {
  	  case 'find':
  	    return false;
  	    break;
  	  case 'find-one':
  	    return true;
  	    break;
  	  case 'update':
  	  	return true;
  	  	break;
  	  case 'insert':
  	  	return true;
  	  	break;
  	  default:
  	    return false;
  	}
  },
  'autoCmsNavButtons': function() {
    return showNavButtons;
  },
  'autoCmsActionButtons': function() {
    return showActionButtons;
  },
  'autoCmsNo': function() {
    return showNo;
  },
  // main collection which will be handled in autoCms
  'collection': function() {
  	return collection;
  },
  // fetch data and serve it as wanted
  'data': function() {
  	switch(func) {
  	  case 'find':
  	    return window[collection].find();
  	    break;
  	  case 'find-one':
  	    return window[collection].findOne(id);
  	    break;
  	  case 'update':
  	  	return window[collection].findOne(id);
  	  	break;
  	  case 'insert':
  	  	return true;
  	  	break;
  	  default:
  	    return false;
  	}
  },
  // return form_id for autoForm
  'form_id': function () {
  	switch(func) {
  	  case 'find':
  	    return true
  	    break;
  	  case 'find-one':
  	    return 'edit'+FlowRouter.getParam("collection")+'Form';
  	    break;
  	  case 'update':
  	  	return 'edit'+FlowRouter.getParam("collection")+'Form';
  	  	break;
  	  case 'insert':
  	    return 'insert'+FlowRouter.getParam("collection")+'Form';
  	    break;
  	  default:
  	    return false;
  	}
  },
  // return form_type for autoForm
  'form_type': function() {
  	switch(func) {
  	  case 'find':
  	    return true
  	    break;
  	  case 'find-one':
  	    return 'update';
  	    break;
  	  case 'update':
  	  	return 'update';
  	  	break;
  	  case 'insert':
  	    return 'insert';
  	    break;
  	  default:
  	    return false;
  	}
  },
  // return the text of button for autoForm
  'form_button': function() {
  	switch(func) {
  	  case 'find':
  	    return true
  	    break;
  	  case 'find-one':
  	    return 'Update';
  	    break;
  	  case 'update':
  	  	return 'Update';
  	  	break;
  	  case 'insert':
  	    return 'Submit';
  	    break;
  	  default:
  	    return false;
    }	
  },
  'table_title': function () {
    return window[collection].table.title;
  },
  'table_class_table': function () {
    try{
      if (typeof table.style.table.class != 'undefined')
        return table.style.table.class; 
    }
    catch(e){
      //console.log(e); //Log the error
      return '';
    }
  },
  'table_class_thead': function () {
    try{
      if (typeof table.style.thead.class != 'undefined')
        return table.style.thead.class; 
    }
    catch(e){
      //console.log(e); //Log the error
      return '';
    }
  },
  'table_class_tbody': function () {
    try{
      if (typeof table.style.tbody.class != 'undefined')
        return table.style.tbody.class; 
    }
    catch(e){
      //console.log(e); //Log the error
      return '';
    }
  },
  // return only column names from collection.table rule
  'table_head': function () {
  	var keys = [];
    for (var key in table.columns) {
        keys.push(key);
    }

    var result = [];

    keys.forEach(function (item, index) {
      result.push(s(item).capitalize().value());
    });
    
  	return result;
  },
  // return column datas as described in collection.table with their relations
  'table_body': function () {
  	data = window[collection].find().fetch();
    var keys = [];
    for (var key in table.columns) {
        keys.push(key);
    }

  	var r;
  	var value;
	   
    // For each data in collection 
    for (i=0; i<data.length; i++) {
      
      if (showNo) {
        // Start with numbering each row
        no = i+1;

        // Open tr and place row no into first td
    		r += '<tr><td>'+ no +'</td>';
      } else {
        r += '<tr>';
      }


  		//console.log(table.title);   // Title value of autoTable
      //console.log(table.columns); // Columns for collection

      // For each columns setted for collection
      keys.forEach(function (item, index) {
        prop = data[i][item];

        // If prop isset, check for relation
        if (prop) {

          // If relation isset, find data from related collection
          if (typeof table.columns[item].relation != 'undefined') {
            // Find the value from relatinal collection
            value = window[table.columns[item].relation].findOne(prop);
            
            // There might be a display rule, check it
            var v = '';
            for (f in table.columns[item].display.fields) {
              
              if (typeof table.columns[item].display.fields[f].type != 'undefined' && table.columns[item].display.fields[f].type == 'image') {
                
                if (typeof value[table.columns[item].display.fields[f].data] != 'undefined') {
                  
                  if (typeof table.columns[item].display.fields[f].width != 'undefined')
                    width = table.columns[item].display.fields[f].width;

                  v += '<img src="'+location.origin+'/cfs/files/images/'+value[table.columns[item].display.fields[f].data]+'" width="'+width+'"/>'+table.columns[item].display.symbol;
                }
              } else {
                v += value[table.columns[item].display.fields[f]]+table.columns[item].display.symbol;
              }

            }
            value = v;
            
          // If there isn't any relation with a collection show data
          } else {
            value = prop;
          }
        // If prop is undefined set value as ''
        } else {
          value = ''; 
        }
        
        // Change value by type, for now only images
        if (typeof table.columns[item].type != 'undefined' && table.columns[item].type == 'image') {
          if (value.length > 0) {
            
            // Set default width
            if (typeof table.columns[item].width != 'undefined')
              width = table.columns[item].width;
            
            value = '<img src="'+location.origin+'/cfs/files/images/'+value+'" width="'+width+'"/>';
          }
        }
        

        // Set class of td
        if (typeof table.columns[item].class != 'undefined' && !isNaN(parseFloat(value)) && isFinite(value)) {
          td_class = table.columns[item].class(value);
        
          if (!td_class)
            r += '<td>'+value+'</td>'; 
          else 
            r += '<td class="'+td_class+'">'+value+'</td>'; 

        } else {
          r += '<td>'+value+'</td>';    
        }
        
        // console.log('Value:'+ value);  //Log row data
        
      });

      // Last td and close tr
      if (showActionButtons)
        r += '<td>'+ button_edit() +' '+ button_delete() +'</td></tr>';
      else
        r += '</tr>';
    }
    return r;
  },
  'removeButton' : function () {
    switch(func) {
      case 'find-one':
        return true;
        break;
      default:
      return false;
    }
  },
  // before remove action for autoForm
  'beforeRemove' : function () {
    return function () {
      var doc = window[collection].findOne(id);
      if (confirm('Really delete: "'+ doc.title +'"?')) {
        this.remove();        
      }
    };
  }
});

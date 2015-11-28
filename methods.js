autoCmsObject = function(){

  function formatRowData() {
    // fetch data from collection
    var data = window[collection].find().fetch();

    var keys = [];
    for (var key in rules.columns) {
        keys.push(key);
    }
    
    // object will be in rowData
    var objAll = {};
    
    // data will be in this array
    var rowData = [];
    
    // formatted value
    var value;
     
    // For each data in collection 
    for (i=0; i<data.length; i++) {
    
      // field names
      var name = keys.slice(0);

      // tempData
      var tempData = [];
      var tempDataClass = [];
            
      // first step
      if (showNo) {
        // Start with numbering each data
        var no = i+1;
        // add to begining
        name.unshift('index');
        // number is setted, push it!
        tempData.push(no);
        // add an empty class for first element
        tempDataClass[tempData.length - 1] = '';
      }

      // for each columns setted for collection
      keys.forEach(function (item, index) {
        var prop = data[i][item];

        // If prop isset, check for relation
        if (prop) {

          // If relation isset, find data from related collection
          if (!_.isUndefined(rules.columns[item].relation)) {
            // Find the value from relatinal collection
            value = window[rules.columns[item].relation].findOne(prop);
            // clear value of v for new data
            var v = '';
            
            // There might be a display rule, check it
            for (f in rules.columns[item].display.fields) {
              
      
              if (!_.isUndefined(rules.columns[item].display.fields[f].type) && rules.columns[item].display.fields[f].type == 'image') {
                
                if (!_.isUndefined(value[rules.columns[item].display.fields[f].data])) {
                  
                  if (!_.isUndefined(rules.columns[item].display.fields[f].width))
                    width = rules.columns[item].display.fields[f].width;

                  v += '<img src="'+location.origin+'/cfs/files/images/'+value[rules.columns[item].display.fields[f].data]+'" width="'+width+'"/>'+rules.columns[item].display.symbol;
                }
              } else {
                v += value[rules.columns[item].display.fields[f]]+rules.columns[item].display.symbol;
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
        if (!_.isUndefined(rules.columns[item].type) && rules.columns[item].type == 'image') {
          if (value.length > 0) {
            
            // Set default width
            if (!_.isUndefined(rules.columns[item].width))
              width = rules.columns[item].width;
            
            value = '<img src="'+location.origin+'/cfs/files/images/'+value+'" width="'+width+'"/>';
          }
        }      

        // data is formated, push it! 
        tempData.push(value);  
        tempDataClass[tempData.length - 1] = setClassForFiels(rules.columns[item].class, value);       
      }); 
      // end of foreach
      
      // last step 
      if (showActionButtons) {
        // add to end
        name.push('buttons');
        // create edit and delete buttons
        tempData.push(buttonEdit(data[i]._id) +' '+ buttonDelete(data[i]._id));
        // add an empty class for last element
        tempDataClass[tempData.length - 1] = '';
      }

      // set a complete object and create the result, push it!
      objAll = {
        data: tempData,
        class: tempDataClass,
        edit: buttonEdit(),
        delete: buttonDelete()
      }
      rowData.push(objAll);
    }

    //console.log(objOne);
    //console.log(rowData);
    return rowData;
  }

  // Set defined class for data
  function setClassForFiels(c, v) {
    if (!_.isUndefined(c) && !isNaN(parseFloat(v)) && isFinite(v)) {  
      dataClass = c(v);
      
      if (!_.isUndefined(dataClass))
        return dataClass; 

    } else {
      return '';
    }
  }

  // Label of a button
  function buttonLabel(button, text) {
    if (!button)
      return text;

    return button;
  }
  // Edit button
  function buttonEdit(data) {
    if (_.isUndefined(rules.buttons))
      return '<a href="/cms/'+collection+'/item/'+data+'" class="edit" target="_self">Edit</a>';

    try{
      // Set '' if not defined
      if (!rules.buttons.edit.class)
        rules.buttons.edit.class = '';
      if (!rules.buttons.edit.label)
        rules.buttons.edit.label = '';
      
      if (rules.buttons.edit.auth()) {
        return '<a href="/cms/'+collection+'/item/'+data+'" class="edit '+rules.buttons.edit.class+'" target="_self">'+ buttonLabel(rules.buttons.edit.label, 'Edit') +'</a>';
      } else {
        return '';
      }
    }
    catch(e){
      //console.log(e); //Log the error
    }
    return '<a href="/cms/'+collection+'/item/'+data+'" class="edit" target="_self">Edit</a>'; 
  }
  // Delete button
  function buttonDelete(data) {
    if (_.isUndefined(rules.buttons))
      return '<a href="javascript:void(0);" class="remove" data-id="'+data+'">Delete</a>';

    try{
      // Set '' if not defined
      if (!rules.buttons.delete.class)
        rules.buttons.delete.class = '';
      if (!rules.buttons.delete.label)
        rules.buttons.delete.label = '';

      if (rules.buttons.delete.auth()) {
        return '<a href="javascript:void(0);" class="remove '+rules.buttons.delete.class+'" data-id="'+data+'">'+ buttonLabel(rules.buttons.delete.label, 'Delete') +'</a>';
      } else {
        return '';
      }  
    }
    catch(e){
      //console.log(e); //Log the error
    }
    return '<a href="javascript:void(0);" class="remove" data-id="'+data+'">Delete</a>'; 
  }

  return{
    formatRowData: formatRowData,
    setClassForFiels: setClassForFiels,
    buttonEdit: buttonEdit,
    buttonDelete: buttonDelete
  }
}();
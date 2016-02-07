autoCmsObject = function(){

  function formatRowData() {

    // gather rules
    rules = window[Session.get('autocms-collection')].autoCms;
    
    // fetch data from collection
    var data = window[Session.get('autocms-collection')].find({}, {sort: {sort: -1}}).fetch();
    
    var keys = [];
    for (var key in Session.get('autocms-rules').columns) {
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
      var tempDataId = [];
      var tempDataEditable = [];

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

        tempDataId.push(data[i]._id);
        tempDataEditable.push(false);
      }

      // for each columns setted for collection
      keys.forEach(function (item, index) {
        var prop = data[i][item];
        
        if (prop) {
          // If relation isset, find data from related collection
          if (_.isFunction(rules.columns[item].data)) {
            value = rules.columns[item].data(prop);  
          // If there isn't any relation with a collection show data
          } else {
            value = prop;
          }

        // If prop is undefined
        } else {
          // Set empty value, if value is undefined
          if (_.isUndefined(rules.columns[item].value))
            value = '';
          // Otherwise set the id
          else
            value =  data[i]._id;
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
        tempDataId.push(data[i]._id);
        
        /* Is this field editable */
        if(!_.isUndefined(rules.columns[item].edit) && (rules.columns[item].edit === true)) {
          tempDataEditable.push(true);
        } else {
          tempDataEditable.push(false);
        }
        
        // data is formated, push it! 
        tempData.push(value);  
        tempDataClass[tempData.length - 1] = setClassForFiels(rules.columns[item].class, value);       
      }); 
      // end of foreach
      
      // last step 
      if (Session.get('autocms-show-action-buttons')) {
        // add to end
        name.push('buttons');
        // create edit and delete buttons
        tempData.push(buttonExtra(data[i]._id) +' '+ buttonEdit(data[i]._id) +' '+ buttonDelete(data[i]._id));
        // add an empty class for last element
        tempDataClass[tempData.length - 1] = '';

        tempDataId.push(data[i]._id);
        tempDataEditable.push(false);
      }

      // set a complete object and create the result, push it!
      objAll = {
        data: tempData,
        dataId: tempDataId,
        dataColumn: name,
        dataEditable: tempDataEditable,
        class: tempDataClass,
        extra: buttonExtra(),
        edit: buttonEdit(),
        delete: buttonDelete()
      }
      rowData.push(objAll);
    }

    //console.log(objAll);
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
    try{
      if (Session.get('autocms-buttons-edit-auth')) {
        return '<a href="/cms/'+Session.get('autocms-collection')+'/item/'+data+'" class="edit '+Session.get('autocms-buttons-edit-class')+'">'+ buttonLabel(Session.get('autocms-buttons-edit-label'), 'Edit') +'</a>';
      } else {
        return '';
      }
    }
    catch(e){
      //console.log(e); //Log the error
    }
    return '<a href="/cms/'+Session.get('autocms-collection')+'/item/'+data+'" class="edit '+Session.get('autocms-buttons-edit-class')+'">Edit</a>'; 
  }
  // Delete button
  function buttonDelete(data) {
    try{
      if (Session.get('autocms-buttons-delete-auth')) {
        return '<a href="javascript:void(0);" class="remove '+Session.get('autocms-buttons-delete-class')+'" data-id="'+data+'">'+ buttonLabel(Session.get('autocms-buttons-delete-label'), 'Delete') +'</a>';
      } else {
        return '';
      }  
    }
    catch(e){
      //console.log(e); //Log the error
    }
    return '<a href="javascript:void(0);" class="remove" data-id="'+data+'">Delete</a>'; 
  }
  // Extra button
  function buttonExtra(data) {    
    try{
      if (Session.get('autocms-buttons-extra-auth')) {
        if (Session.get('autocms-buttons-extra-href'))
          link = rules.buttons.extra.href(data);
        else 
          link = 'javascript:void(0);';
        
        return '<a href="'+link+'" class="extra '+Session.get('autocms-buttons-extra-class')+'" data-id="'+data+'">'+ buttonLabel(Session.get('autocms-buttons-extra-label'), 'Extra') +'</a>';
      } else {
        return '';
      }
    }
    catch(e){
      //console.log(e); //Log the error
    }

    return '<a href="javascript:void(0);" class="extra" data-id="'+data+'">Extra</a>';
  }

  return{
    formatRowData: formatRowData,
    setClassForFiels: setClassForFiels,
    buttonEdit: buttonEdit,
    buttonDelete: buttonDelete,
    buttonExtra: buttonExtra
  }
}();
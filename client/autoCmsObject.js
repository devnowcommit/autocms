autoCmsObject = function(){

  function formatRowData() {
    let cms = Session.get('cms');

    // gather rules
    let rules = window[cms.collection].autoCms;
    let data;
    // fetch data from collection
    if (!_.isUndefined(rules.query)) {
      if (!_.isUndefined(rules.query.find) && !_.isUndefined(rules.query.sort)) {
        data = window[cms.collection].find(rules.query.find, rules.query.sort).fetch();
      }
    } else {
      data = window[cms.collection].find().fetch();
    }

    var keys = [];
    for (var key in cms.rules.columns) {
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
      if (cms.rules.showNo) {
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
          if (_.isUndefined(rules.columns[item].value)) {
            value = '';
          } else {
            if (_.isFunction(rules.columns[item].data))
              value = rules.columns[item].value(prop);
            else
              value =  data[i]._id;
          }
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
        
        if(!_.isUndefined(rules.columns[item].dataId))
          value = rules.columns[item].dataId(data[i]._id);

        //console.log(rules.columns[item]);
        //console.log(value);

        // data is formated, push it! 
        tempData.push(value);  
        tempDataClass[tempData.length - 1] = setClassForFiels(rules.columns[item].class, value);       
      }); 
      // end of foreach
      
      // last step 
      if (cms.rules.buttons.showActionButtons) {
        // add to end
        name.push('buttons');

        // create extra, edit and delete buttons
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
    let cms = Session.get('cms');

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
    let cms = Session.get('cms');

    if (!button)
      return text;

    return button;
  }
  // Edit button
  function buttonEdit(data) {
    let cms = Session.get('cms');
    let btn = window[cms.collection].autoCms.buttons;

    if (!_.isUndefined(btn.edit)) {
      try{
        if (btn.edit.auth()) {
          return '<a href="/cms/'+cms.collection+'/item/'+data+'" class="edit '+btn.edit.class+'">'+ buttonLabel(btn.edit.label, __('Edit')) +'</a>';
        } else {
          return '';
        }
      } catch(e) {
        //console.log(e); //Log the error
      }
      return '<a href="/cms/'+cms.collection+'/item/'+data+'" class="edit '+btn.edit.class+'">'+__('Edit')+'</a>'; 
    } else {
      return '';
    }
  }
  // Delete button
  function buttonDelete(data) {
    let cms = Session.get('cms');
    let btn = window[cms.collection].autoCms.buttons;

    if (!_.isUndefined(btn.delete)) {
      try{   
        if (btn.delete.auth()) {
          return '<a href="javascript:void(0);" class="remove '+btn.delete.class+'" data-id="'+data+'">'+ buttonLabel(btn.delete.label, __('Delete')) +'</a>';
        } else {
          return '';
        }  
      } catch(e) {
        //console.log(e); //Log the error
      }
      return '<a href="javascript:void(0);" class="remove '+btn.delete.class+'" data-id="'+data+'">'+__('Delete')+'</a>'; 
    } else {
      return '';
    }
  }
  // Extra button
  function buttonExtra(data) {    
    let cms = Session.get('cms');
    let btn = window[cms.collection].autoCms.buttons;
    if (!_.isUndefined(btn.extra)) {
      try{
        if (btn.extra.auth()) {
          if (btn.extra.href())
            link = btn.extra.href(data);
          else 
            link = 'javascript:void(0);';

          if (btn.extra.target)
            return '<a href="'+link+'" class="extra '+btn.extra.class+'" data-toggle="modal" data-target="'+btn.extra.target+'" data-id="'+data+'">'+ buttonLabel(btn.extra.label, __('Extra')) +'</a>';
          else
            return '<a href="'+link+'" class="extra '+btn.extra.class+'" data-id="'+data+'">'+ buttonLabel(btn.extra.label, __('Extra')) +'</a>';       

        } else {
          return '';
        }
      } catch(e) {
        //console.log(e); //Log the error
      }

      return '<a href="javascript:void(0);" class="extra" data-id="'+data+'">'+__('Extra')+'</a>';
    } else {
      return '';
    }
  }

  return{
    formatRowData: formatRowData,
    setClassForFiels: setClassForFiels,
    buttonEdit: buttonEdit,
    buttonDelete: buttonDelete,
    buttonExtra: buttonExtra
  }
}();
// Appand edit and delete buttons for each row into last td
button_label = function (button, text){
  if (!button)
    return text;

  return button;
}
// Edit button
button_edit = function () {
  if (typeof table.buttons == 'undefined')
    return '<a href="/cms/'+collection+'/find-one/'+data[i]._id+'" class="edit" target="_self">Edit</a>';

  try{
    // Set '' if not defined
    if (!table.buttons.edit.class)
      table.buttons.edit.class = '';
    if (!table.buttons.edit.label)
      table.buttons.edit.label = '';
    
    if (table.buttons.edit.auth()) {
      return '<a href="/cms/'+collection+'/find-one/'+data[i]._id+'" class="edit '+table.buttons.edit.class+'" target="_self">'+ button_label(table.buttons.edit.label, 'Edit') +'</a>';
    } else {
      return '';
    }
  }
  catch(e){
    //console.log(e); //Log the error
  }
  return '<a href="/cms/'+collection+'/find-one/'+data[i]._id+'" class="edit" target="_self">Edit</a>'; 
}
// Delete button
button_delete = function () {
  if (typeof table.buttons == 'undefined')
    return '<a href="javascript:void(0);" class="remove" data-id="'+data[i]._id+'">Delete</a>';

  try{
    // Set '' if not defined
    if (!table.buttons.delete.class)
      table.buttons.delete.class = '';
    if (!table.buttons.delete.label)
      table.buttons.delete.label = '';

    if (table.buttons.delete.auth()) {
      return '<a href="javascript:void(0);" class="remove '+table.buttons.delete.class+'" data-id="'+data[i]._id+'">'+ button_label(table.buttons.delete.label, 'Delete') +'</a>';
    } else {
      return '';
    }  
  }
  catch(e){
    //console.log(e); //Log the error
  }
  return '<a href="javascript:void(0);" class="remove" data-id="'+data[i]._id+'">Delete</a>'; 
}
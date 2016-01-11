/*
Files = new FS.Collection("files", {
  stores: [new FS.Store.FileSystem("files")]
});
*/
Files = new FS.Collection("files", {
  stores: [new FS.Store.GridFS("files", {})]
});

Files.allow({
  insert: function(userId, doc) {
    return true;
  },
  update: function(userId, doc, fieldNames, modifier) {
    return true;
  },
  download: function(userId) {
    return true;
  }
});
/* This file will insert neccessay data on start up to
 * setup basic features.
 *
 */
Meteor.startup(function () {

  // Navigations
  if (blogs.find().count() == 0){
    var data = [
      // CMS
      {
        "_id" : "fiKkjd2wPnFSPBt2H",
        "title" : "Title of a post",
        "description" : "First post",
        "content" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dignissim tellus risus, id molestie libero iaculis vel. Donec porttitor commodo mi, at aliquam sem tempus id. Pellentesque cursus tortor leo, sed fringilla nisl pellentesque nec. Quisque ultricies libero quis felis imperdiet ornare. Ut erat enim, semper at condimentum ac, blandit et purus. Proin magna diam, sodales congue scelerisque a, tristique sed ex. Etiam varius molestie mauris, id dapibus justo scelerisque sit amet. Etiam sit amet dolor eu augue malesuada convallis. Duis commodo placerat lectus, eu feugiat nulla sollicitudin vel. Nam sit amet neque sagittis, facilisis diam sed, tempor est. Integer consequat scelerisque facilisis. Aenean suscipit dignissim tellus at gravida. Vivamus laoreet ut mauris nec blandit. Sed orci tellus, tincidunt vel sem nec, tristique pellentesque purus. Sed lacinia suscipit sapien, vel auctor ligula condimentum nec. Vestibulum interdum libero metus, vitae bibendum risus dignissim eu.",
        "category" : "YKBLsPSRShWabtvYA",
        "like" : 1,
        "createdAt" : 1453104216902.0000000000000000
      },
      {
        "title" : "Second post",
        "description" : "This is the second post",
        "content" : "Content goes in here... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dignissim tellus risus, id molestie libero iaculis vel. Donec porttitor commodo mi, at aliquam sem tempus id. Pellentesque cursus tortor leo, sed fringilla nisl pellentesque nec. Quisque ultricies libero quis felis imperdiet ornare. Ut erat enim, semper at condimentum ac, blandit et purus. Proin magna diam, sodales congue scelerisque a, tristique sed ex. Etiam varius molestie mauris, id dapibus justo scelerisque sit amet. Etiam sit amet dolor eu augue malesuada convallis. Duis commodo placerat lectus, eu feugiat nulla sollicitudin vel. Nam sit amet neque sagittis, facilisis diam sed, tempor est. Integer consequat scelerisque facilisis. Aenean suscipit dignissim tellus at gravida. Vivamus laoreet ut mauris nec blandit. Sed orci tellus, tincidunt vel sem nec, tristique pellentesque purus. Sed lacinia suscipit sapien, vel auctor ligula condimentum nec. Vestibulum interdum libero metus, vitae bibendum risus dignissim eu.",
        "category" : "zz8YJ97eQBYGzrkD9",
        "like" : 2,
        "createdAt" : 1453104240946.0000000000000000
      },
      {
        "title" : "Third post",
        "description" : "This is the third post",
        "content" : "Etiam ipsum dolor sit amet, consectetur adipiscing elit. Aenean dignissim tellus risus, id molestie libero iaculis vel. Donec porttitor commodo mi, at aliquam sem tempus id. Pellentesque cursus tortor leo, sed fringilla nisl pellentesque nec. Quisque ultricies libero quis felis imperdiet ornare. Ut erat enim, semper at condimentum ac, blandit et purus. Proin magna diam, sodales congue scelerisque a, tristique sed ex. Etiam varius molestie mauris, id dapibus justo scelerisque sit amet. Etiam sit amet dolor eu augue malesuada convallis. Duis commodo placerat lectus, eu feugiat nulla sollicitudin vel. Nam sit amet neque sagittis, facilisis diam sed, tempor est. Integer consequat scelerisque facilisis. Aenean suscipit dignissim tellus at gravida. Vivamus laoreet ut mauris nec blandit. Sed orci tellus, tincidunt vel sem nec, tristique pellentesque purus. Sed lacinia suscipit sapien, vel auctor ligula condimentum nec. Vestibulum interdum libero metus, vitae bibendum risus dignissim eu.",
        "category" : "zz8YJ97eQBYGzrkD9",
        "like" : 1,
        "createdAt" : 1453104240946.0000000000000000
      },
      {
        "_id" : "fiKkjd2wPnFSPBt2H",
        "title" : "Forth post",
        "description" : "A sample post",
        "content" : "Aenean dignissim tellus risus, id molestie libero iaculis vel. Donec porttitor commodo mi, at aliquam sem tempus id. Pellentesque cursus tortor leo, sed fringilla nisl pellentesque nec. Quisque ultricies libero quis felis imperdiet ornare. Ut erat enim, semper at condimentum ac, blandit et purus. Proin magna diam, sodales congue scelerisque a, tristique sed ex. Etiam varius molestie mauris, id dapibus justo scelerisque sit amet. Etiam sit amet dolor eu augue malesuada convallis. Duis commodo placerat lectus, eu feugiat nulla sollicitudin vel. Nam sit amet neque sagittis, facilisis diam sed, tempor est. Integer consequat scelerisque facilisis. Aenean suscipit dignissim tellus at gravida. Vivamus laoreet ut mauris nec blandit. Sed orci tellus, tincidunt vel sem nec, tristique pellentesque purus. Sed lacinia suscipit sapien, vel auctor ligula condimentum nec. Vestibulum interdum libero metus, vitae bibendum risus dignissim eu.",
        "category" : "YKBLsPSRShWabtvYA",
        "like" : 4,
        "createdAt" : 1453104216902.0000000000000000
      }
    ];

    for(var i = 0; i < data.length; i++){
      blogs.insert(data[i]);
    }
  }
});
/* This file will insert neccessay data on start up to
 * setup basic features.
 *
 */
Meteor.startup(function () {

  // Navigations
  if (pages.find().count() == 0){
    var data = [
      // CMS
      {
        "_id" : "GKYA7q5C9H5u9sgGM",
        "title" : "About us",
        "description" : "This is the description of the about us page",
        "content" : "<p style=\"margin-bottom: 14px; color: rgb(51, 51, 51); padding: 0px;\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dignissim tellus risus, id molestie libero iaculis vel. Donec porttitor commodo mi, at aliquam sem tempus id. Pellentesque cursus tortor leo, sed fringilla nisl pellentesque nec. Quisque ultricies libero quis felis imperdiet ornare. Ut erat enim, semper at condimentum ac, blandit et purus. Proin magna diam, sodales congue scelerisque a, tristique sed ex. Etiam varius molestie mauris, id dapibus justo scelerisque sit amet. Etiam sit amet dolor eu augue malesuada convallis. Duis commodo placerat lectus, eu feugiat nulla sollicitudin vel. Nam sit amet neque sagittis, facilisis diam sed, tempor est. Integer consequat scelerisque facilisis. Aenean suscipit dignissim tellus at gravida. Vivamus laoreet ut mauris nec blandit. Sed orci tellus, tincidunt vel sem nec, tristique pellentesque purus. Sed lacinia suscipit sapien, vel auctor ligula condimentum nec. Vestibulum interdum libero metus, vitae bibendum risus dignissim eu.</p><p style=\"margin-bottom: 14px; color: rgb(51, 51, 51); padding: 0px;\">In condimentum augue lorem, in iaculis neque pharetra eu. Nullam fermentum tellus vel lacus consectetur tempus. Integer sodales ultricies lorem eget iaculis. Duis a eleifend ligula, nec maximus diam. Ut tristique quam non cursus interdum. Donec non justo interdum, pharetra turpis quis, laoreet nulla. Phasellus posuere id ante ut euismod. Etiam ac diam nisl. Sed molestie hendrerit pharetra. Morbi facilisis tempus lorem ac blandit. Morbi ac rutrum velit, in placerat erat. Aliquam pulvinar orci in mollis condimentum. Duis tempor luctus urna vitae interdum. Fusce pretium dolor nec nunc semper, vehicula convallis arcu lobortis.</p>",
        "picture" : "BgHi5Zzr42zez24fk",
        "createdAt" : 1452958103630.0000000000000000
      },
      {
        "title" : "Title of a sample page",
        "description" : "This is the description of the second sample page",
        "content" : "<p style=\"margin-bottom: 14px; color: rgb(51, 51, 51); padding: 0px;\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dignissim tellus risus, id molestie libero iaculis vel. Donec porttitor commodo mi, at aliquam sem tempus id. Pellentesque cursus tortor leo, sed fringilla nisl pellentesque nec. Quisque ultricies libero quis felis imperdiet ornare. Ut erat enim, semper at condimentum ac, blandit et purus. Proin magna diam, sodales congue scelerisque a, tristique sed ex. Etiam varius molestie mauris, id dapibus justo scelerisque sit amet. Etiam sit amet dolor eu augue malesuada convallis. Duis commodo placerat lectus, eu feugiat nulla sollicitudin vel. Nam sit amet neque sagittis, facilisis diam sed, tempor est. Integer consequat scelerisque facilisis. Aenean suscipit dignissim tellus at gravida. Vivamus laoreet ut mauris nec blandit. Sed orci tellus, tincidunt vel sem nec, tristique pellentesque purus. Sed lacinia suscipit sapien, vel auctor ligula condimentum nec. Vestibulum interdum libero metus, vitae bibendum risus dignissim eu.</p><p style=\"margin-bottom: 14px; color: rgb(51, 51, 51); padding: 0px;\">In condimentum augue lorem, in iaculis neque pharetra eu. Nullam fermentum tellus vel lacus consectetur tempus. Integer sodales ultricies lorem eget iaculis. Duis a eleifend ligula, nec maximus diam. Ut tristique quam non cursus interdum. Donec non justo interdum, pharetra turpis quis, laoreet nulla. Phasellus posuere id ante ut euismod. Etiam ac diam nisl. Sed molestie hendrerit pharetra. Morbi facilisis tempus lorem ac blandit. Morbi ac rutrum velit, in placerat erat. Aliquam pulvinar orci in mollis condimentum. Duis tempor luctus urna vitae interdum. Fusce pretium dolor nec nunc semper, vehicula convallis arcu lobortis.</p>",
        "picture" : "BgHi5Zzr42zez24fk",
        "createdAt" : 1452958103630.0000000000000000
      },
      {
        "title" : "Title of a page",
        "description" : "This is the description of the third sample page",
        "content" : "<p style=\"margin-bottom: 14px; color: rgb(51, 51, 51); padding: 0px;\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dignissim tellus risus, id molestie libero iaculis vel. Donec porttitor commodo mi, at aliquam sem tempus id. Pellentesque cursus tortor leo, sed fringilla nisl pellentesque nec. Quisque ultricies libero quis felis imperdiet ornare. Ut erat enim, semper at condimentum ac, blandit et purus. Proin magna diam, sodales congue scelerisque a, tristique sed ex. Etiam varius molestie mauris, id dapibus justo scelerisque sit amet. Etiam sit amet dolor eu augue malesuada convallis. Duis commodo placerat lectus, eu feugiat nulla sollicitudin vel. Nam sit amet neque sagittis, facilisis diam sed, tempor est. Integer consequat scelerisque facilisis. Aenean suscipit dignissim tellus at gravida. Vivamus laoreet ut mauris nec blandit. Sed orci tellus, tincidunt vel sem nec, tristique pellentesque purus. Sed lacinia suscipit sapien, vel auctor ligula condimentum nec. Vestibulum interdum libero metus, vitae bibendum risus dignissim eu.</p><p style=\"margin-bottom: 14px; color: rgb(51, 51, 51); padding: 0px;\">In condimentum augue lorem, in iaculis neque pharetra eu. Nullam fermentum tellus vel lacus consectetur tempus. Integer sodales ultricies lorem eget iaculis. Duis a eleifend ligula, nec maximus diam. Ut tristique quam non cursus interdum. Donec non justo interdum, pharetra turpis quis, laoreet nulla. Phasellus posuere id ante ut euismod. Etiam ac diam nisl. Sed molestie hendrerit pharetra. Morbi facilisis tempus lorem ac blandit. Morbi ac rutrum velit, in placerat erat. Aliquam pulvinar orci in mollis condimentum. Duis tempor luctus urna vitae interdum. Fusce pretium dolor nec nunc semper, vehicula convallis arcu lobortis.</p>",
        "picture" : "BgHi5Zzr42zez24fk",
        "createdAt" : 1452958103630.0000000000000000
      },
      {
        "title" : "An example page",
        "description" : "This is the description of the an example",
        "content" : "<p style=\"margin-bottom: 14px; color: rgb(51, 51, 51); padding: 0px;\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dignissim tellus risus, id molestie libero iaculis vel. Donec porttitor commodo mi, at aliquam sem tempus id. Pellentesque cursus tortor leo, sed fringilla nisl pellentesque nec. Quisque ultricies libero quis felis imperdiet ornare. Ut erat enim, semper at condimentum ac, blandit et purus. Proin magna diam, sodales congue scelerisque a, tristique sed ex. Etiam varius molestie mauris, id dapibus justo scelerisque sit amet. Etiam sit amet dolor eu augue malesuada convallis. Duis commodo placerat lectus, eu feugiat nulla sollicitudin vel. Nam sit amet neque sagittis, facilisis diam sed, tempor est. Integer consequat scelerisque facilisis. Aenean suscipit dignissim tellus at gravida. Vivamus laoreet ut mauris nec blandit. Sed orci tellus, tincidunt vel sem nec, tristique pellentesque purus. Sed lacinia suscipit sapien, vel auctor ligula condimentum nec. Vestibulum interdum libero metus, vitae bibendum risus dignissim eu.</p><p style=\"margin-bottom: 14px; color: rgb(51, 51, 51); padding: 0px;\">In condimentum augue lorem, in iaculis neque pharetra eu. Nullam fermentum tellus vel lacus consectetur tempus. Integer sodales ultricies lorem eget iaculis. Duis a eleifend ligula, nec maximus diam. Ut tristique quam non cursus interdum. Donec non justo interdum, pharetra turpis quis, laoreet nulla. Phasellus posuere id ante ut euismod. Etiam ac diam nisl. Sed molestie hendrerit pharetra. Morbi facilisis tempus lorem ac blandit. Morbi ac rutrum velit, in placerat erat. Aliquam pulvinar orci in mollis condimentum. Duis tempor luctus urna vitae interdum. Fusce pretium dolor nec nunc semper, vehicula convallis arcu lobortis.</p>",
        "picture" : "BgHi5Zzr42zez24fk",
        "createdAt" : 1452958103630.0000000000000000
      }
    ];

    for(var i = 0; i < data.length; i++){
      pages.insert(data[i]);
    }
  }
});
/* This file will insert neccessay data on start up to
 * setup basic features.
 *
 */
Meteor.startup(function () {

  // Navigations
  if (navs.find().count() == 0){
    var data = [
      // CMS
      {
        "prefix" : "cms",
        "type" : "internal",
        "href" : "settings/item/M3Mv2K9YkzbsY9fbE",
        "text" : "Settings",
        "sort" : 199
      },
      {
        "prefix" : "cms",
        "type" : "internal",
        "href" : "navs/list",
        "text" : "Navigations",
        "sort" : 198
      },
      {
        "prefix" : "cms",
        "type" : "internal",
        "href" : "profiles/list",
        "text" : "User Profiles",
        "sort" : 197
      },
      {
        "prefix" : "cms",
        "type" : "internal",
        "href" : "pages/list",
        "text" : "Pages",
        "sort" : 170
      },
      {
        "prefix" : "cms",
        "type" : "internal",
        "href" : "blogcategories/list",
        "text" : "Blog Categories",
        "sort" : 189
      },
      {
        "prefix" : "cms",
        "type" : "internal",
        "href" : "blogs/list",
        "text" : "Blogs",
        "sort" : 188
      },
      {
        "prefix" : "cms",
        "type" : "internal",
        "href" : "comments/list",
        "text" : "Comments",
        "sort" : 187
      },
      {
        "prefix" : "cms",
        "type" : "internal",
        "href" : "portfoliocategories/list",
        "text" : "Portfolio Categories",
        "sort" : 169
      },
      {
        "prefix" : "cms",
        "type" : "internal",
        "href" : "portfolios/list",
        "text" : "Portfolios",
        "sort" : 168
      },
      {
        "prefix" : "cms",
        "type" : "internal",
        "href" : "slides/list",
        "text" : "Slides",
        "sort" : 109
      },
      {
        "prefix" : "cms",
        "type" : "internal",
        "href" : "newsletter/list",
        "text" : "Newsletter List",
        "sort" : 100
      },
      {
        "_id" : "mQ3FiESGBhkhFCM6o",
        "prefix" : "cms",
        "type" : "internal",
        "href" : "backup",
        "text" : "Backup/Restore",
        "sort" : 99
      },
      // APP
      {
        "prefix" : "",
        "type" : "internal",
        "href" : "blog",
        "text" : "Blog",
        "sort" : 4
      },
      {
        "prefix" : "",
        "type" : "internal",
        "href" : "our-portfolio",
        "text" : "Our Portfolio",
        "sort" : 3
      },
      {
        "prefix" : "",
        "type" : "internal",
        "href" : "page/GKYA7q5C9H5u9sgGM/about-us",
        "text" : "About Us",
        "sort" : 2
      },
      {
        "_id" : "psT6nxaDi8td5E5et",
        "type" : "internal",
        "href" : "contact",
        "text" : "Contact",
        "sort" : 1
      }
    ];

    for(var i = 0; i < data.length; i++){
      navs.insert(data[i]);
    }
  }
});
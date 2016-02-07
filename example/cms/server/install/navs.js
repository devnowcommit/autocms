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
        "target" : "",
        "text" : "Settings"
      },
      {
        "prefix" : "cms",
        "type" : "internal",
        "href" : "navs/list",
        "target" : "",
        "text" : "Navigations"
      },
      {
        "prefix" : "cms",
        "type" : "internal",
        "href" : "profiles/list",
        "target" : "",
        "text" : "User Profiles"
      },
      {
        "prefix" : "cms",
        "type" : "internal",
        "href" : "pages/list",
        "target" : "",
        "text" : "Pages"
      },
      {
        "prefix" : "cms",
        "type" : "internal",
        "href" : "blogcategories/list",
        "target" : "",
        "text" : "Blog Categories"
      },
      {
        "prefix" : "cms",
        "type" : "internal",
        "href" : "blogs/list",
        "target" : "",
        "text" : "Blogs"
      },
      {
        "prefix" : "cms",
        "type" : "internal",
        "href" : "comments/list",
        "target" : "",
        "text" : "Comments"
      },
      {
        "prefix" : "cms",
        "type" : "internal",
        "href" : "slides/list",
        "target" : "",
        "text" : "Slides"
      },
      {
        "prefix" : "cms",
        "type" : "internal",
        "href" : "portfoliocategories/list",
        "target" : "",
        "text" : "Portfolio Categories"
      },
      {
        "prefix" : "cms",
        "type" : "internal",
        "href" : "portfolios/list",
        "target" : "",
        "text" : "Portfolios"
      },
      {
        "prefix" : "cms",
        "type" : "internal",
        "href" : "productcategories/list",
        "target" : "",
        "text" : "Product Categories"
      },
      {
        "prefix" : "cms",
        "type" : "internal",
        "href" : "products/list",
        "target" : "",
        "text" : "Products"
      },
      // APP
      {
        "prefix" : "",
        "type" : "internal",
        "href" : "blog",
        "target" : "",
        "text" : "Blog"
      },
      {
        "prefix" : "",
        "type" : "internal",
        "href" : "our-portfolio",
        "target" : "",
        "text" : "Our Portfolio"
      },
      {
        "prefix" : "",
        "type" : "internal",
        "href" : "products",
        "target" : "",
        "text" : "Products"
      },
      {
        "prefix" : "",
        "type" : "internal",
        "href" : "page/GKYA7q5C9H5u9sgGM",
        "target" : "",
        "text" : "About Us"
      }
      
    ];

    for(var i = 0; i < data.length; i++){
      navs.insert(data[i]);
    }
  }
});
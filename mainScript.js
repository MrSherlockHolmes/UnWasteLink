/*

TRYING TO BLOCK WASTE LINKS ONE STEP AT A TIME

*/


function getWebsite(url) {
  splitUrl = url.split("/");
  if (splitUrl[0] === "http:" || splitUrl[0] === "https:") {
    return splitUrl[2];
  } else {
    return splitUrl[0];
  }
}

/* See: is.gd/sQ2fy8 */

function init() {
  var badLinks = ["adf.ly", "ity.im", "bc.vc"];
  var aEl = document.getElementsByTagName("a")
  for (i = 0; i < aEl.length; i++) {
    if (badLinks.indexOf(getWebsite(aEl[i].href)) !== -1) {
      aEl[i].href = "";
    }
  }
}

init();

/* It works! */

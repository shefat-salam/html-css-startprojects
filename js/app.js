document.getElementById("myForm").addEventListener("submit", saveBookMark);


function saveBookMark(e) {
  e.preventDefault();
  var siteName = document.getElementById("sitename").value;
  var siteUrl = document.getElementById("siteurl").value;

  var bookmark = {
    name:siteName,
    url:siteUrl
  }
 console.log(bookmark);
  // Store
// localStorage.setItem("lastname", "Smith");
// Retrieve
// document.getElementById("result").innerHTML = localStorage.getItem("lastname");

  if(localStorage.getItem("bookmarks") === null){
    var bookmarks = [];
    bookmarks.push(bookmark);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }else{
    var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    console.log(bookmarks);
    bookmarks.push(bookmark);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }
fetchBookMarsks()
}
function fetchBookMarsks(){
  var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
  var bookmarksResult = document.getElementById("bookmarkResults");
  bookmarksResult.innerHTML="";
  for (var i = 0; i < bookmarks.length; i++) {
    var name = bookmarks[i].name;
    var url = bookmarks[i].url;
    bookmarksResult.innerHTML += '<div class="well"'+
                                  '<h3>'+name+
                                  '<a class="btn btn-default" target="_blank" href="'+url+'">visit</a>'+
                                  '<a onclick="deletebookmark(\''+url+'\')" class="btn btn-danger" target="_blank" href="#">Delete</a>'+
                                  '</h3>'+
                                  '</div>';
  }
}

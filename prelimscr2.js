
//I need to add headers, need to add function variables so you can give it that I'll use later and past starting point and the range and stuff to it if necessary, and the product ID,
//Need to also figure out how to use Express and stuff to create a web page 2 input those variables and pass them along same goes with everything else and find out
//Also need to figure out how to integrate a database into this thing or at least output everything to a file. A unique file. Downloadable file.
//Or at least just integrate into Google drive or something or Google Sheets
function testinsheetfk101() {
 //var ss = SpreadsheetApp.create("test1");
  var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheets = ss.getSheets();
 var sheet = ss.getSheetByName("Sheet1"); //or whatever you name your sheet
  //var query = 29016524
  //var query = 36156004
  //var store = 1
 
  var query = 29016526 ;
  
  for ( var store = 5892; store < 9400; store++){
   // test
  //var store = 3420 //test
  
  var url = 'http://search.mobile.walmart.com/search?query=' + query + '&store=' + store; // replace this with your API client ID
  //take a look at the raw JSON for this request at https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=AIzaSyBAPaX4HvWBniJ5F6vjUUZ-VsdxPLPzWzE&part=snippet,contentDetails,statistics,status
  var currentTime = new Date();
  
    try {
    var response = UrlFetchApp.fetch(url); // get feed
      
  var json = response.getContentText(); // 
  var data = JSON.parse(json);
  var stats = [];
    } catch (e) { 
      //store -- ;
    }
      
  // new:
    try {
    if (data.results != ''){
      //if (data.results[0].inventory.status != 'Out of Stock'){
      //  if (data.results[0].price.priceInCents < 6900) {
  Logger.log(store);
   Logger.log(data.results[0].price.priceInCents);
  Logger.log(data.results[0].inventory.quantity);
  Logger.log(data.results[0].inventory.status);

      stats.push(query);
 stats.push(store);
  stats.push(data.results[0].price.priceInCents);
  stats.push(data.results[0].inventory.quantity);
  stats.push(data.results[0].inventory.status);
 
  //name of product, link to store seafch for both product and prodicut id would be nice
    
    
    
  //Logger.log(data.results.price[0].priceInCents)
  
   // stats.push(data.items[0].snippet.title); //video title
    //stats.push(data.items[0].statistics.viewCount); //view count
   // stats.push(data.items[0].statistics.likeCount); //like count
   // stats.push(data.items[0].statistics.dislikeCount); //dislike count
   // stats.push(data.items[0].statistics.favoriteCount); //fav count
    //stats.push(data.items[0].statistics.commentCount); //comment count
    //stats.push(data.items[0].contentDetails.duration); //duration but in a weird format PT6M44S is 6 min 44 secs
    //stats.push(data.items[0].snippet.publishedAt); //publish date
    //stats.push(data.items[0].snippet.channelTitle); //title of the channel or user?
    
    
  	 SpreadsheetApp.getActiveSheet().appendRow(stats);
    //}
   // }
    }
      } catch (f) { // store ++ }
        } // catch
}
}

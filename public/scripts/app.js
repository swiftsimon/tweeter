/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// console.log("app page");

 $(document).ready(function() {

  $( "#tweetContainer" ).hover(
    function() {
      $( this ).addClass('hover');

   } , function() {
      $( this ).removeClass('hover');
  }

 );
});


const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": {
      "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
      "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
      "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
    },
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}

// console.log("XX", tweetData.user.avatars.small);
$(document).ready(function() {
  function renderTweets(tweets) {
  // loops through tweets
    tweets.foreach(function () {
    // calls createTweetElement for each tweet
      createTweetElement
    // takes return value and appends it to the tweets container
    })
  }

});


 $(document).ready(function() {
    function createTweetElement (obj) {
      var tweetHTML = $(`
          <article>
          <header class="tweetHeader">
            <img class="userPic" src=${tweetData.user.avatars.small}>
               <span class="bigName">${obj.user.name}</span>
               <span class="atField">${obj.user.handle}</span>
             </header>
             <span class="tweetText" >${obj.content.text}</span>
             <footer class="foot"> ${obj.created_at} </footer>
           </article>

        `)

      //this object comes from tweets JSON file
      // the JSON file seeds the tweets in MongoDB
      // const tweetData = obj.content.text;
      // $("tweetData").addClass("fixTweet");
      // can use jquery to construct new elements
      // var $tweet = $("textarea[name=text]").text;//.addClass("tweet");


      //You'll want to append additional DOM elements also created via jQuery to the parent, effectively building a DOM structure

      // This function shouldn't insert the created DOM structure to the page. It should instead just return the $tweet to the caller
      return tweetHTML
    }

      var $tweet = createTweetElement(tweetData);
      console.log($tweet);
      $('#tweetContainer').append($tweet);

});









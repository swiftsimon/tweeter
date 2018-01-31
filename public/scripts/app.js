/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// console.log("app page");

// const tweetData = [
//   {
//     "user": {
//       "name": "Newton",
//       "avatars": {
//         "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
//         "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
//         "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
//       },
//       "handle": "@SirIsaac"
//     },
//     "content": {
//       "text": "If I have seen further it is by standing on the shoulders of giants"
//     },
//     "created_at": 1461116232227
//   },
//   {
//     "user": {
//       "name": "Descartes",
//       "avatars": {
//         "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
//         "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
//         "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
//       },
//       "handle": "@rd" },
//     "content": {
//       "text": "Je pense , donc je suis"
//     },
//     "created_at": 1461113959088
//   },
//   {
//     "user": {
//       "name": "Johann von Goethe",
//       "avatars": {
//         "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
//         "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
//         "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
//       },
//       "handle": "@johann49"
//     },
//     "content": {
//       "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
//     },
//     "created_at": 1461113796368
//   }
// ];

// console.log("XX", tweetData.user.avatars.small);



 $(document).ready(function() {

    function createTweetElement (obj) {
      var tweetHTML = $(`
          <article class="tweetBox">
          <header class="tweetHeader">
            <img class="userPic" src=${obj.user.avatars.small}>
               <span class="bigName">${obj.user.name}</span>
               <span class="atField">${obj.user.handle}</span>
             </header>
             <span class="tweetText" >${obj.content.text}</span>
             <footer class="foot"> ${obj.created_at} </footer>
           </article>

          `)

      //this object comes from tweets JSON file
      // the JSON file seeds the tweets in MongoDB

      return tweetHTML
    }

     function renderTweets(tweets) {

       // loops through tweets
      for(let tweet of tweets) {
        let $tweet = createTweetElement(tweet);
        $('#tweetContainer').append($tweet);
      }
   }

      // another way to loop
    // tweets.foreach(function (tweet) {
    //  // calls createTweetElement for each tweet
    //   var $tweet = createTweetElement(tweet);
    //  // takes return value and appends it to the tweets container
    //     $('#tweetContainer').append($tweet);

    // })

      // var $tweet = createTweetElement(tweetData);
      // console.log($tweet);
      // $('#tweetContainer').append($tweet);
     //renderTweets();

     //upon submitting form prevent browser default of loading a new page
     // this is where we want to prevent the bahaviour on id="submitMe"
     $( "#submitMe" ).on('click', function() {
      event.preventDefault()
     });

// new function, responsible for fetching tweets from the http://localhost:8080/tweets page.
//It will use jQuery to make a request to /tweets and receive the array of tweets as JSON.
     function loadTweets() {
      $.ajax({
        url: 'http://localhost:8080/tweets',
        method: 'GET',
        success: function (tweets) {
          console.log("got new tweets", tweets);
            renderTweets(tweets);
        }
      })

     };  // end loadTweets

     loadTweets();  //call loadTweets

     //on the form submit handler <input class="submit" type="submit" value="Tweet">
     // <textarea name="text" placeholder="What are you humming about?"></textarea>

     $(".submit").on('click', function(text) {
       const theTweet =  $( '#textMe' ).val();
        console.log("tweet", theTweet)
        console.log("length", theTweet.length)
        if (theTweet === ""  ) {
          console.log("empty")
          alert("tweet empty")
          // send error
          // prevent default
          event.preventDefault()
        } else if (theTweet.length > 140) {
            // send error
            alert("tweet exceeds 140 char maximum")
            console.log("too long")
            //prevent default
            event.preventDefault()
        }

       //.val() returns undefined if empty
          //check if form is empty, "" or null

    })

     //disallow form submission if the tweet area is empty or exceeds 140 char
     // data is not empty "" or null
     //implement form validation before sending the form data to the server
     //give 2 seperate errors if empty or above 140 char
        // do not clear form
        // do not submit form



});


 $(document).ready(function() {

  $( ".tweetBox" ).hover(
    function() {
      $( this ).addClass('hover');
      //$( this ).find('foot').append($("<i class="fa fa-flag-o" aria-hidden="true"></i>"));

      //<i class="fa fa-flag-o" aria-hidden="true"></i>
      //<i class="fa fa-heart" aria-hidden="true"></i>

   } , function() {
      $( this ).removeClass('hover');
  }

 );

});










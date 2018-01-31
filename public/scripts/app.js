/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// console.log("app page");

//  $(document).ready(function() {

//   $( "#tweetContainer" ).hover(
//     function() {
//       $( this ).addClass('hover');

//    } , function() {
//       $( this ).removeClass('hover');
//   }

//  );
// });


const tweetData = [
  {
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
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];

// console.log("XX", tweetData.user.avatars.small);



 $(document).ready(function() {
    function createTweetElement (obj) {
      var tweetHTML = $(`
          <article>
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

      for(let tweet of tweets) {
        let $tweet = createTweetElement(tweet);
        $('#tweetContainer').append($tweet);
      }


   // loops through tweets
    // tweets.foreach(function (tweet) {
    //  // calls createTweetElement for each tweet
    //   var $tweet = createTweetElement(tweet);
    //  // takes return value and appends it to the tweets container
    //     $('#tweetContainer').append($tweet);

    // })
   }

      // var $tweet = createTweetElement(tweetData);
      // console.log($tweet);
      // $('#tweetContainer').append($tweet);
     renderTweets(tweetData);


});












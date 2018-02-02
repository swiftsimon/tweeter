/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function() {

//use the escape(str) function to clean the data going back out to the DOM
//in this case escape is called on obj.content.text around line 32
  function escape(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }


  function createTweetElement (obj) {

    let today = Date.now()
    let created = obj.created_at;
    let minutes = Math.round(((today - created) / 60000));
    let hours = Math.round(((today - created) / 3600000));
    let days = Math.round(((today - created) / 86400000));
    let display;

     let displayF = function () {
      if (minutes < 3) {
        display = "now";
        return display;
      } else if (minutes < 60) {
        display = minutes + " minutes ago";
        return display;
      } else if (minutes >= 60 && minutes < 1440 ) {
        display = hours + " hours ago";
        return display;
      } else if (minutes >= 1440) {
          display = days + " days ago";
          return display;
    }
  }
    displayF();

    var tweetHTML = $(`
      <article class="tweetBox">
        <header class="tweetHeader">
          <img class="userPic" src=${obj.user.avatars.small}>
            <span class="bigName">${obj.user.name}</span>
           <span class="atField">${obj.user.handle}</span>
        </header>
        <span class="tweetText" >${escape(obj.content.text)}</span>
        <footer class="foot"> ${display}
          <i class="fa fa-retweet" aria-hidden="true"></i>
          <i class="fa fa-heart" aria-hidden="true"></i>
          <i class="fa fa-flag-o" aria-hidden="true"></i>
        </footer>
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
        $('#tweetContainer').prepend($tweet);
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
          // console.log("got new tweets", tweets);
            renderTweets(tweets);
      }
    })
  };  // end loadTweets

  loadTweets();  //call loadTweets

// ON CLICK TWEET
  $("#submitMe").on('click', function(text) {
    event.preventDefault()
    const theTweet =  $( '#textMe' ).val();
       // console.log("new tweet", renderTweets(theTweet);
        //console.log("tweet", theTweet)
        //console.log("length", theTweet.length)
    if (theTweet === ""  ) {
        //console.log("empty")
      alert("OMG. UR tweet b empty");
          // send error
          // prevent default
      event.preventDefault();
      } else if (theTweet.length > 140) {
            // send error
          alert("Darn. Your tweet exceeds 140 character maximum");
            //console.log("too long")
            //prevent default
          event.preventDefault();
        } else {
          // post to /tweets using ajax
            $.ajax({
              url: 'http://localhost:8080/tweets',
              method: 'POST',
              // submit the data of the tweet
              // in tweets.js you can see it expects this data as an object with a key of .text line 21
              data: {
                 text: theTweet,
                  },
              success: function (body) {
                //console.log("got BRAND new tweets");
                loadTweets();
              }
            })
             // clear tweet form
            $('#textMe').val('');
      }
  })

 //COMPOSE BUTTON
   //   <button id="navBtn" class="compose" type="button">Compose</button>
   // when navBtn is pressed, toggle up/down the .new-tweet box
   // when toggle back, auto focus cursor on #textMe container
  $( "#navBtn" ).on('click', function() {
      //toggle       <section class="new-tweet">
    $('.new-tweet').slideToggle();
    $('#textMe').focus();

  });

  function loadTweets() {
      $.ajax({
        url: 'http://localhost:8080/tweets',
        method: 'GET',
        success: function (tweets) {
          //console.log("got new tweets", tweets);
          renderTweets(tweets);
      }
    })
  };  // end loadTweets

  loadTweets();  //call loadTweets



});  // end of doc.ready













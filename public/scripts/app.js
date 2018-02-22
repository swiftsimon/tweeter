
$(document).ready(function() {

//clean the data going back out to the DOM
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

// display time passed for messages
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

//upon submitting form prevent browser default of loading a new page
  $( "#submitMe" ).on('click', function() {
      event.preventDefault()

     });

// fetch tweets from the http://localhost:8080/tweets page.
  function loadTweets() {
      $.ajax({
        url: 'http://localhost:8080/tweets',
        method: 'GET',
        success: function (tweets) {
          // console.log("got new tweets", tweets);
            renderTweets(tweets);
      }
    })
  };

  loadTweets();

// ON CLICK TWEET
  $("#submitMe").on('click', function(text) {
    event.preventDefault()
    const theTweet =  $( '#textMe' ).val();
    if (theTweet === ""  ) {
      alert("OMG. UR tweet b empty");

      event.preventDefault();
      } else if (theTweet.length > 140) {
            // send error
          alert("Darn. Your tweet exceeds 140 character maximum");
          event.preventDefault();
        } else {
          // post to /tweets using ajax
            $.ajax({
              url: 'http://localhost:8080/tweets',
              method: 'POST',
              // submit the data of the tweet
              data: {
                 text: theTweet,
                  },
              success: function (body) {
                loadTweets();
              }
            })
             // clear tweet form
            $('#textMe').val('');
      }
  })

 //COMPOSE BUTTON

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
          renderTweets(tweets);
      }
    })
  };

  loadTweets();



});













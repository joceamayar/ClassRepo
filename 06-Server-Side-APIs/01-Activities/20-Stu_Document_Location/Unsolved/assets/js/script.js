let badRequestUrl = 'https://api.github.com/unicorns';
let redirectUrl = './404.html';

fetch(badRequestUrl).then(function (response) {
  // Use a conditional to check the response status.
  // If that status equals the conditional, then redirect to the 404 page.

  if (response.status === 404) {

    window.location.href = redirectUrl;
  }

});



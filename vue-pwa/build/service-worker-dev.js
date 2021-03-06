(function () {
  'use strict';

  // Check to make sure service workers are supported in the current browser,
  // and that the current page is accessed from a secure origin. Using a
  // service worker from an insecure origin will trigger JS console errors.
  var isLocalhost = true;


  window.addEventListener('load', function () {
    debugger;
    if ('serviceWorker' in navigator &&
      (window.location.protocol === 'https:' || isLocalhost)) {
      navigator.serviceWorker.register('service-worker.js')
        .then(function (registration) {
          debugger;
          importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
          importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

          const config = {
            apiKey: 'AIzaSyBJ7jEZJY7G-10JbcTEsN9e9ioJqXeRg50',
            authDomain: 'smartpass-217519.firebaseapp.com',
            databaseURL: 'https://smartpass-217519.firebaseio.com',
            projectId: 'smartpass-217519',
            storageBucket: 'smartpass-217519.appspot.com',
            messagingSenderId: '839840973744',
          };

          firebase.initializeApp(config);

          // updatefound is fired if service-worker.js changes.
          debugger;
          firebase.messaging().useServiceWorker(registration);

          console.log('CARALHOS: VOADORES 1.2');

          const messaging = firebase.messaging();

          messaging
            .requestPermission()
            .then(() => messaging.getToken())
            .then((token) => {
              console.log('Token do usuário: ', token);

              debugger;

              return token;
            })
            .catch((error) => {
              console.error(error);
              return 'Oi';
            });

          registration.onupdatefound = function () {
            // updatefound is also fired the very first time the SW is installed,
            // and there's no need to prompt for a reload at that point.
            // So check here to see if the page is already controlled,
            // i.e. whether there's an existing service worker.
            if (navigator.serviceWorker.controller) {
              // The updatefound event implies that registration.installing is set
              var installingWorker = registration.installing;

              installingWorker.onstatechange = function () {
                switch (installingWorker.state) {
                  case 'installed':
                    // At this point, the old content will have been purged and the
                    // fresh content will have been added to the cache.
                    // It's the perfect time to display a "New content is
                    // available; please refresh." message in the page's interface.
                    break;

                  case 'redundant':
                    throw new Error('The installing ' +
                      'service worker became redundant.');

                  default:
                    // Ignore
                }
              };
            }
          };
        }).catch(function (e) {
          console.error('Error during service worker registration:', e);
        });
    }
  });
})();

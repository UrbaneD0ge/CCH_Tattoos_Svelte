<body>
  <!--[if lt IE 7]>
      <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="#">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->

  <!-- get images from instagram -->
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1>Yattoos</h1>
        <div
          class="fb-like"
          data-share="true"
          data-width="450"
          data-show-faces="true"
        />
        <!-- <script src="" async defer></script> -->
        <!-- <script src="" async defer></script> -->
        <script>
          window.fbAsyncInit = function () {
            FB.init({
              appId: '535131011987413',
              xfbml: true,
              version: 'v17.0',
            });
            FB.AppEvents.logPageView();
          };

          (function (d, s, id) {
            var js,
              fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
              return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = 'https://connect.facebook.net/en_US/sdk.js';
            fjs.parentNode.insertBefore(js, fjs);
          })(document, 'script', 'facebook-jssdk');
        </script>
      </div>
    </div>
  </div></body
>

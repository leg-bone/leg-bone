<script type="text/javascript">
        (function changeImage() {
            var rotator = document.getElementById('rotator');
            var imageDir = '/kat';
            var delayInSeconds = 5;

            var images = ['kat1.jpg', 'kat2.jpg', 'kat3.jpg', 'kat4.jpg', 'kat5.jpg'];

            var num = 0;
            var changeImage = function() {
                var len = images.length;
                rotator.src = imageDir + images[num++];
                if (num == len) {
                    num = 0;
                }

            };

        })();
        (function randomNum() {
          var x = Math.floor(Math.random()* 999999999999999999) + 100000000000000000;
        })();
        randomNum();
        document.write("<p>YOU ARE IN VIOLATION OF DIGITAL LAW. A.I. TECHNOLOGY HAS IDENTIFIED YOU AS USER_"x" THROUGH VIDEO SURVEILLANCE. WE HAVE AN OUTSTANDING WARRANT FOR YOUR ARREST. STAY WHERE YOU ARE UNTIL WE ARRIVE. DO NOT RESIST.</p>");
        </script>

document.getElementById("b1").onclick = changeImage;
        function changeImage() {
            var rotator = document.getElementById('rotator');
            var imageDir = '/kat';
            var delayInSeconds = 5;

            var images = ['kat1.jpg', 'kat2.jpg', 'kat3.jpg', 'kat4.jpg', 'kat5.jpg'];

            var num = 0;
            var changeImage = function() {
                var len = imagwees.length;
                rotator.src = imageDir + images[num++];
                if (num == len) {
                    num = 0;
                }

            };

        }

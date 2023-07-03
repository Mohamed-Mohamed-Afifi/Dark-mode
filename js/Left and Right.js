/* function Utils() {}
        Utils.prototype = {
            constructor: Utils,
            isElementInView: function (element, fullyInView) {
                var pageTop1 = $(window).scrollTop();
                var pageBottom1 = pageTop1 + $(window).height();
                var elementTop1 = $(element).offset().top;
                var elementBottom1 = elementTop1 + $(element).height();

                if (fullyInView === true) {
                    return ((pageTop1 < elementTop1) && (pageBottom1 > elementBottom1));
                } else {
                    return ((elementTop1 <= pageBottom1) && (elementBottom1 >= pageTop1));
                }
            }
        };

        var Utils = new Utils();
        $(window).on('load', addFadeIn());
        
        $(window).scroll(function() {
            addFadeIn(true);
        });

function addFadeIn(repeat) {
            var classToFadeIn = ".left";
            
            $(classToFadeIn).each(function( index ) {
                var isElementInView1 = Utils.isElementInView($(this), false);
                if (isElementInView1) {
                    if(!($(this).hasClass('right')) && !($(this).hasClass('toLeft'))) {
                        if(index % 2 == 0) $(this).addClass('right');
                        else $(this).addClass('toLeft');
                    }
                } else if(repeat) {
                    $(this).removeClass('right');
                    $(this).removeClass('toLeft');
                }
            });
        } */
        let spinnerWrapper = document.querySelector('.spinner-wrapper');
        window.addEventListener('load',function(){
        spinnerWrapper.style.display = 'none';    
        })
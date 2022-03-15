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
        let fisrt;
        let second;
        // function getmin(a,b){
        //     let count=0;
        //     a.forEach((el3,ind3)=>{
        //         if(el3.length <b[ind3].length ||el3.length >b[ind3].length) console.log(-1)
        //         else{
        //             if(el3===b[ind3] ||el3===b[ind3].split("").reverse().join())console.log(0) ;
        //             else{
        //                 let spliter1=el3.split("");
        //                 let spliter2=b[ind3].split("");
        //                 for(let i=0;i<spliter1.length;i++){
        //                     for(let k=0;k<spliter2.length;k++){
        //                         if(spliter1[i]!==spliter2[k])count++;
        //                     }
        //                 }
        //                 console.log(count) ;
        //             }
        //         }
        //     })
           
        // }
        // getmin(["mosss","lk"],["oms","kl"])
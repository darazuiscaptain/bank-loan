function openNav() {
    if (document.getElementById("mySidepanel").style.width == "" || document.getElementById("mySidepanel").style.width == "0px") {
        document.getElementById("mySidepanel").style.width = "100%";
        document.getElementById("mySidepanel").style.height = "100%";
        document.getElementById("myLogin").style.display = "none";
    } else {
        document.getElementById("mySidepanel").style.width = "0";
    }
}

function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
    document.getElementById("mySidepanel").style.height = "0";
}


/* Start : Priority Banking */
function prbopenNav() {
    if (document.getElementById("prbSidepanel").style.width == "" || document.getElementById("prbSidepanel").style.width == "0px") {
        document.getElementById("prbSidepanel").style.width = "100%";
        document.getElementById("prbSidepanel").style.height = "100%";
        document.getElementById("myLogin").style.display = "none";
    } else {
        document.getElementById("prbSidepanel").style.width = "0";
    }
}

function prbcloseNav() {
    document.getElementById("prbSidepanel").style.width = "0";
    document.getElementById("prbSidepanel").style.height = "0";
}
/* End : Priority Banking */

/* Start : Business Banking */
function bsbopenNav() {
    if (document.getElementById("bsbSidepanel").style.width == "" || document.getElementById("bsbSidepanel").style.width == "0px") {
        document.getElementById("bsbSidepanel").style.width = "100%";
        document.getElementById("bsbSidepanel").style.height = "100%";
        document.getElementById("myLogin").style.display = "none";
    } else {
        document.getElementById("bsbSidepanel").style.width = "0";
    }
}

function bsbcloseNav() {
    document.getElementById("bsbSidepanel").style.width = "0";
    document.getElementById("bsbSidepanel").style.height = "0";
}
/* End : Business Banking */

/* Start : Corporate Banking */
function crpopenNav() {
    if (document.getElementById("crpSidepanel").style.width == "" || document.getElementById("crpSidepanel").style.width == "0px") {
        document.getElementById("crpSidepanel").style.width = "100%";
        document.getElementById("crpSidepanel").style.height = "100%";
        document.getElementById("myLogin").style.display = "none";
    } else {
        document.getElementById("crpSidepanel").style.width = "0";
    }
}

function crpcloseNav() {
    document.getElementById("crpSidepanel").style.width = "0";
    document.getElementById("crpSidepanel").style.height = "0";
}
/* End : Corporate Banking */

function loginClick() {

    var x = document.getElementById("myLogin");

    document.getElementById("mySidepanel").style.width = "0";
    document.getElementById("mySidepanel").style.height = "0";

    if (x.style.display === "none" || x.style.display === "") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


window.onload = function()

{
    var hideLoginDiv = document.getElementById('myLogin');
    var hideMenuDiv = document.getElementById('mySidepanel');
    document.onclick = function(div) {

        if (div.target.id != 'loginDiv') {
            hideLoginDiv.style.display = 'none';
        }

        /*if(div.target.id !='menuDiv' && div.target.id !='childmenuDiv')
        {
         hideMenuDiv.style.width = "0";
        }*/

    };
};




$(document).ready(function() {

    /* Start : Offer know more show */
    $('.offer-block').click(function() {

        $(this).addClass("offer-block-active");

    });
    /* End : Offer know more show */


    if (document.getElementById('sectionSelector') !== null) {

        window.onscroll = function() {
            myFunction()
        };

        var sectionSelector = document.getElementById("sectionSelector");
        var stickyoffsetTop = sectionSelector.offsetTop;

        function myFunction() {
            if (window.pageYOffset > stickyoffsetTop) {
                addSticky();
            } else {
                removeSticky();
            }

            var Wscroll = $(this).scrollTop();



            /* Start : wrapper class */
            $('.wrapper').each(function() {
                var ThisOffset = $(this).closest('.wrapper').offset();

                if (window.pageYOffset < stickyoffsetTop) {
                    $('.sticky_li').removeClass("active");
                }

                if (Wscroll > ThisOffset.top - 55 && Wscroll < ThisOffset.top - 55 + $(this).closest('.wrapper').outerHeight(true)) {

                    var getid = $(this).closest('.wrapper').attr('id')
                    //var getidofdiv=$(".wrapper.active").attr('id');
                    $('.sticky_li').removeClass("active");
                    $('#li-' + getid).addClass("active");

                } else {

                    if ($(window).scrollTop() + $(window).height() == $(document).height()) {
                        $('.sticky_li').removeClass("active");
                        $('#li-faqs').addClass("active");
                    }
                }

            });
            /* End : wrapper class */

            /* Start : sticky_highlight class */
            $('.sticky_highlight').each(function() {
                var ThisOffset = $(this).closest('.sticky_highlight').offset();

                if (window.pageYOffset < stickyoffsetTop) {
                    $('.sticky_li').removeClass("active");
                }

                if (Wscroll > ThisOffset.top - 115 && Wscroll < ThisOffset.top - 115 + $(this).closest('.sticky_highlight').outerHeight(true)) {

                    var getid = $(this).closest('.sticky_highlight').attr('id')
                    //var getidofdiv=$(".sticky_highlight.active").attr('id');
                    $('.sticky_li').removeClass("active");
                    $('#li-' + getid).addClass("active");

                } else {

                    if ($(window).scrollTop() + $(window).height() == $(document).height()) {
                        $('.sticky_li').removeClass("active");
                        $('#li-faqs').addClass("active");
                    }
                }

            });
            /* End : sticky_highlight class */



        }

    }

    $('.carousel.carousel-multi-item.v-2 .carousel-item').each(function() {
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        for (var i = 0; i < 1; i++) {
            next = next.next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }
            next.children(':first-child').clone().appendTo($(this));
        }
    });

    if (mobilecheck()) {
        if (document.getElementById("carousel-example-multi") !== null) {
            document.getElementById("carousel-example-multi").setAttribute("data-ride", "carousel");
        }
    }
});

function mobilecheck() {
    var check = false;
    (function(a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};






function openSectionSelectorNav() {
    if (screen.width < 768) {
        document.getElementById("sectionSelectorBlock").style.display = "block";
        document.getElementById("clsButton").style.display = "block";
    }
}

function closeSectionSelectorNav() {
    if (screen.width < 768) {
        document.getElementById("sectionSelectorBlock").style.display = "none";
    }
}

$(document).on('click', 'ul li', function() {
    $(this).addClass('active').siblings().removeClass('active');
})

function addSticky() {
    sectionSelector.classList.add("sticky");
}

function removeSticky() {
    sectionSelector.classList.remove("sticky");
}
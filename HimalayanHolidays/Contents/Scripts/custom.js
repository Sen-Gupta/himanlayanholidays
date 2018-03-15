/*********Validation Newsletter********/
$(document).ready(function () {
    $("#thanksmsgcont").hide();
    $("#newsbtn").attr('disabled', 'disabled').css("background-color", "#9ccff9");
    $("form").keyup(function () {
        $("#newsbtn").attr('disabled', 'disabled');
        var email = $("#myEmail").val();
        var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
        if (!email == "") {
            if (filter.test(email)) {
                $("#newsbtn").removeAttr('disabled').css("background-color", "#4f6fad");
                $("#newsbtn").css({
                    "cursor": "pointer",
                });
            }
        }
    });
    $("#newsbtn").click(function (event) {
        event.preventDefault();
        $("#thanksmsg").hide();
        $("#thanksmsgcont").show();
        return false;
    });
    $("#NewsletterVal").validate({
        rules: {
            email: {
                required: true,
                email: true
            },
        },
        messages: {
            email: "* Please enter a valid email address"
        },
        newsbtnHandler: function (form) {
            form.submit();
        }
    });
});
/*********Validation Testimonial********/

$(document).ready(function () {
    $("#thanksmsgcontect").hide();
    $("#sendlove").attr('disabled', 'disabled').css("background-color", "#9ccff9");
    $("#testimonialVal").keyup(function () {
        $("#sendlove").attr('disabled', 'disabled')
        var biker = $("#bikers").val();
        var email = $("#myEmail2").val();
        var options = $("#seloption").val();
        var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
        if (!(biker == "" && email == "" && options == "")) {
            if (filter.test(email)) {
                $("#sendlove").removeAttr('disabled').css("background-color", "#4f6fad");
                $("#sendlove").css({
                    "cursor": "pointer",
                });
            }
        }
    });
    $("#sendlove").click(function (event) {
        event.preventDefault();
        $("#sendlove").hide();
        $("#thanksmsgcontect").show();
        $("#bikers").attr('disabled', 'disabled')
        $("#myEmail2").attr('disabled', 'disabled')
        $("#seloption").attr('disabled', 'disabled')
        $("#editbtn").removeAttr('disabled')
        $("#editbtn").show().css("cursor", "pointer");


        return false;
    });
    $("#editbtn").click(function (event) {
        event.preventDefault();
        $("#editbtn").hide();
        $("#bikers").removeAttr('disabled');
        $("#myEmail2").removeAttr('disabled');
        $("#seloption").removeAttr('disabled');
        $("#sendlove").show().css("cursor", "pointer");
        $("#thanksmsgcontect").hide();
        return false;
    });
});

$('document').ready(function () {
    $("#testimonialVal").validate({
        rules: {
            biker: "required",
            email: {
                required: true,
                email: true
            },
            selectbox: "required",

        },
        messages: {
            biker: "* Please enter your Name",
            email: "* Please enter a valid email address",
            selectbox: "* Please Select Tour ",
            textareabox: "* Please Enter the Message"
        },
        newsbtnHandler: function (form) {
            form.sendlove();
        }
    });

});


/*********Validation Contact********/

$('document').ready(function () {
    $("#thanksmsgcontect").hide();
    $("#contactValidation").validate({
        rules: {
            firstname: "required",
            lastname: "required",
            phoneNumber: {
                required: true,
                number: true
            },
            email: {
                required: true,
                email: true
            },
        },
        messages: {
            firstname: "Please enter your firstname",
            lastname: "Please enter your lastname",
            email: "Please enter a valid email address",
            phoneNumber:
    {
        required: "Please enter your phone number",
        number: "Please enter valid phone number"
    }
        },

        submitHandler: function (form) {

            $("#thanksmsgcontect").show();
        }

    });

});


/*********Validation Post Comment********/

$('document').ready(function () {
    $("#thanksmsgcontect").hide();
    $("#commentform").validate({
        rules: {
            authorname: "required",
            email: {
                required: true,
                email: true
            },
        },
        messages: {
            authorname: "Please enter your firstname",
            email: "Please enter a valid email address",

        },

        submitHandler: function (form) {
            $("#thanksmsgcontect").show();
        }

    });

});





/********* Mobile menu ********/

$(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
        $('.top-bar').addClass("stickytopU");
        $('.stuck_container').addClass("stickytop");

    }
    else {
        $('.top-bar').removeClass("stickytopU");
        $('.stuck_container').removeClass("stickytop");

    }
});

/********* Search Box ********/

(function () {
    var hsearch = document.getElementById('hsearch');
    if (hsearch != null && hsearch != 'undefined')
    {
          
        input = hsearch.querySelector('input.hsearch-input'),
        ctrlClose = hsearch.querySelector('span.hsearch-close'),
        isOpen = isAnimating = false,
        // show/hide search area
        toggleSearch = function (evt) {
        // return if open and the input gets focused
            if (evt.type.toLowerCase() === 'focus' && isOpen) return false;

            var offsets = hsearch.getBoundingClientRect();
            if (isOpen) {
                classie.remove(hsearch, 'open');

        // trick to hide input text once the search overlay closes
        // todo: hardcoded times, should be done after transition ends
                if (input.value !== '') {
                    setTimeout(function () {
                        classie.add(hsearch, 'hideInput');
                        setTimeout(function () {
                            classie.remove(hsearch, 'hideInput');
                            input.value = '';
    }, 300);
    }, 500);
    }

                input.blur();
    }
    else {
                classie.add(hsearch, 'open');
    }
            isOpen = !isOpen;
    };

    // events
    input.addEventListener('focus', toggleSearch);
    ctrlClose.addEventListener('click', toggleSearch);
    // esc key closes search overlay
    // keyboard navigation events
    document.addEventListener('keydown', function (ev) {
        var keyCode = ev.keyCode || ev.which;
        if (keyCode === 27 && isOpen) {
            toggleSearch(ev);
        }
    });


    /***** for demo purposes only: don't allow to submit the form *****/
    hsearch.querySelector('button[type="submit"]').addEventListener('click', function (ev) { ev.preventDefault(); });

    }

})();


/********* Equal hight********/

function fixHeights(divClass) {

    var largestHeight = $('.' + divClass).outerHeight();

    $('.' + divClass).each(function () {

        if (largestHeight < $(this).outerHeight()) {
            largestHeight = $(this).outerHeight();
        }

    });

    $('.' + divClass).outerHeight(largestHeight);
}
fixHeights("cont-col-inner");


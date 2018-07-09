jQuery(function(e) {
        "use strict";
        (new WOW).init(), e(".scroll-bottom").click(function() {
                e("html, body").animate({
                    scrollTop: 678
                }, "50")
            }),
			
           function() {
                // e(".counter").counterUp({
                //     delay: 2,
                //     time: 3e3
                // })
            }()
    }), 
	
	
	
    setTimeout(function() {
        $('.loader').fadeOut();
    }, 2000);


    jQuery('.nav-pills > li a').hover(function() {
        // var abc=$(this).attr('data-target');
        jQuery('.megamenu-content .tab-pane').removeClass('active');
        jQuery('.megamenu-content .tab-pane').removeClass('in');
        // console.log($(this).attr('data-target'));
      jQuery(this).tab('show');
    });

    jQuery('.nav-tabs > li > a').hover(function() {
      jQuery(this).tab('show');
    });

  jQuery(document).ready(function(){
    // jQuery("#tel-code").val(jQuery(".btn-cc").text());
    jQuery(".country-dd li").on("mousedown",function(){
      var flag= jQuery(this).find(".flag");

      var code= jQuery(this).find(".callingCode");
      jQuery("#btn-flag").attr("class",jQuery(flag).attr("class"));
      console.log(jQuery("#btn-flag").attr("class"));
      jQuery(".btn-cc").text(jQuery(code).text());
      jQuery("#tel-code").val(jQuery(".btn-cc").text());

    });
  });

  jQuery(document).on('submit', 'form', function(e) {
    // jQuery(".form-control").val("");
    // console.log(jQuery(this));
    // setTimeout(formreset(this),500);
    setTimeout(function () {
        console.log("done");
        // var form1= jQuery(this);
        // form1.reset();
        var rst = $(this).find(".reset-btn");
        console.log(rst);
        $(rst).click();
       
    }, 500);
    jQuery(this).prev().delay(200).fadeIn(100);
  });
  function formreset(asd) {
    var form1= asd;
    // console.log(jQuery(asd));
    // var form1 = document.getElementsByTagName("form")[0];
    form1.reset();
  }
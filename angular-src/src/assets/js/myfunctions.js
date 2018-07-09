/* var typei,typetext,typespeed;
window.onload=function(){
      typei=0;
      typetext=$('.type').text();
      typespeed=100;
      $('.type').text("");
      $('.type').removeClass('text-hide');
      
      // alert(typetext);
      // typing();
}; */
window.onscroll=function(){
      if(window.location.pathname=="/"){
            scrollFunction();
            headerbackground();
      }
	
};
function scrollFunction(){

	if(document.body.scrollTop>500 || document.documentElement.scrollTop>500){
		document.getElementById('gotoTop').style.display='block';

	}
	else{
		document.getElementById('gotoTop').style.display='none';
	}
}
function headerbackground(){
	if(document.body.scrollTop>600 || document.documentElement.scrollTop>600){
          $(".navbar").css('transition','all 0.5s');
          $(".navbar").css('background-color','rgba(0,0,0,0.6)');
          $(".navbar").css('color','#fff');
    }
    else{
          $(".navbar").css('transition','all 0.5s');
          $(".navbar").css('background-color','transparent');
          $(".navbar").css('color','#fff');
    }
}

/* function typing(){
      // alert("typing");
      if(typei<typetext.length){
            document.getElementById("typing1").innerHTML +=typetext.charAt(typei);
            typei++;
            setTimeout(typing,typespeed);
      }
} */
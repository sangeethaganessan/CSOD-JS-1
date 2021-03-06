$(document).ready(function(){

	console.log("Test16");
	
	//profile icon replacement
	//$("#header_headerFixed_imgAvatar").attr({'src': 'https://bd.csod.com/clientimg/bd/welcome/profile.png'});
	//$('#header_headerFixed_imgAvatar').attr({'width': '5px', 'height': '5px'});
	

	//var sps = document.getElementsByClassName(".cart a span");
	//sps[0].css({'background': 'url("https://bd.csod.com/clientimg/bd/welcome/shoppingCart.png")',  'backgroundColor': 'yellow'});

	//$('#settingscontainer').css({'background': 'url("https://bd.csod.com/clientimg/bd/welcome/cog.png")', 'backgroundColor': 'yellow'});
	
	
	
	
	
	
	$('#main-menu').css({"background-image": "none", "background-color": "#004593"});
	
	
	if (document.title.indexOf("Universal Profile") > -1)
	{	
       	 	// change the Profile page's links
		$('span:contains("Transcript")').each(function(){
 			$(this).html($(this).html().replace('Transcript','My Learning'));
		});
        	$(".nav-transcript").attr("title","My Learning");
	}
	
	//move enlarge slider text / link - margin: top, right, bottom, left
	 //$(".ism-caption.ism-caption-0").css({"width": "40px", "height": "70px"}); 
	 $(".myCaptions").css({"margin": "0px 0px 0px 300px"}); 
	
	// WELCOME PAGE specific changes
	if (document.title.indexOf("Welcome - Realize Your Potential") > -1)
	{
	    //add action button to slider
	    $(".sliderButton").css({"opacity": "0.8", "font-weight": "bold", "padding": "12px", "width": "90px", "height": "15px", "color": "#ffffff", "appearance": "button", "text-decoration": "none", "backgroundColor": "#004593", "margin": "140px 0px 0px -55px"}); //top, right, bottom, left
	    var elements = document.getElementsByClassName("sliderButton");
		//console.log("num elements: " + elements.length);
	    for (var i = 0; i < elements.length; i++) 
	    {
		 elements[i].style.position = "absolute";
           	 elements[i].style.zIndex="2147483620";
	     }
		
		//remove rounded corners from slider
		$("#my-slider").css({"width": "69%", "margin-bottom": "300px"}); 
	   	document.getElementById("my-slider").style.borderRadius = "0px";
		
		//CARD Style
	        $(".card").css({"width": "20%", "box-sizing": "border-box", "padding": "0px", "border-radius": "0px 0px 0px 0px", "border-top": "solid 9px #00a79e", "border-bottom": "none", "border-left": "solid 1px #f2f3f4", "border-right": "none", "margin": "0px 0px 0px 0px" }); 
		$(".card:first-child").css({"border-left": "none"});
		$(".card:nth-child(2)").css({"border-top": "solid 9px #6f2780"});
		$(".card:nth-child(3)").css({"border-top": "solid 9px #02abd7"});
		$(".card li").css({"width": "100%", "box-sizing": "border-box"});
		$(".card img").css({"width": "100%", "height": "100px"});
		$(".card h2").css({"padding": "5px", "color": "#808080", "font-size": "14px", "margin-top": "0px"});
		$(".card a:nth-child(2) li").css({"padding": "5px"});
		$(".card p ").css({"color": "#808080", "font-size": "10px"});

		
		//*************************************
		//   Z-Index Area (float cards over slider)
		//*************************************
		// margin: top, right, bottom, left
		$(".wrapper").css({"margin": "-270px 0px 0px 15%"});
        	var elements = document.getElementsByClassName('wrapper');
       		elements[0].style.position = "absolute"
        	elements[0].style.zIndex="2147483644";
	}
	
	//Make the home page clickable and link to the Welcome page / Main page
	$('a:contains("Home")').attr("href","/LMS/catalog/Main.aspx?tab_page_id=-67");
	    
	//hide the various Cornerstone footers
	$('.df-footer').hide();
	
	// -------------  Browse For Training Global Search Options -------------
	if (document.title.indexOf("Browse for Training") > -1)
	{		 
		//Change "Subject" header to "Topic"
		$('h2:contains("Subject")').each(function(){
 			$(this).html($(this).html().replace('Subject','Topic'));
			});

        }  //end Browse For Training

   	

       //show the advanced search option whenever search is shown
       $("#lnkShowMoreSearchOptions").each(function(){
        	eventFire(document.getElementById('lnkShowMoreSearchOptions'), 'click');
       });
	
       //remove the close button on the advanced options
       $(".cs-advsrch-close-btn").remove();
	
       //hide the first name field. It is only included to that we can use the name elsewhere
       $("#ctl00_ContentPlaceHolder1_widgetLayout_rptWidgets_ctl01_widgetContainer_ctl00_htmlContainer").hide();
	
       //use the name field to alter the My Learning header
       var fName = $("#ctl00_ContentPlaceHolder1_widgetLayout_rptWidgets_ctl01_widgetContainer_ctl00_htmlContainer").text();
	
	if (fName != null)
	{
     	  $('h2:contains("My Learning")').each(function(){
 	    $(this).html($(this).html().replace('My Learning', fName + '\'s Learning In Progress'));
		});
	}
	else
	{
		$('h2:contains("My Learning")').each(function(){
 	    		$(this).html($(this).html().replace('My Learning', 'Learning In Progress'));
		});
	}

        $smjquery('#main-menu').smartmenus('refresh');
	
        $("a:has(span:contains('Popular'))").remove();
	
        $('h2:contains("Browse for Training")').each(function(){
 		$(this).html($(this).html().replace('Browse for Training','Browse Learning'));
	});
	
	$('h2:contains("Suggested Training")').each(function(){
 		$(this).html($(this).html().replace('Suggested Training','Suggested Learning'));
	});
	
	$('a:contains("Change your password")').each(function(){
 		$(this).remove();
	});
	
	$('a:contains("Go to Customer Portal")').each(function(){
 		$(this).remove();
	});
	
	$(".cso-cont-padtb5:has(h3:contains('Subjects'))").remove();
	$(".cso-cont-padtb5:has(h3:contains('Available Languages'))").remove();
	$(".cso-cont-padtb5:has(h3:contains('Product'))").remove();
	$(".cso-cont-padtb5:has(h3:contains('Brand'))").remove();
	$(".cso-cont-padtb5:has(span:contains('$0.00'))").remove();
	$(".dot:contains('$0.00')").remove();
	$(".usr-content:has(div:has(span:contains('$0.00')))").remove();

	$("[aria-labelledby=Support]").empty();
	
        $("[aria-labelledby=Support]").append('<li><a href="https://eim.carefusion.com/Account/ChangePassword" title="Change Password" tabindex="-1">Change Password</a></li><li><a href="/catalog/CustomPage.aspx?id=20000480&amp;tab_page_id=20000480" title="Contact Us" tabindex="-1">Contact Us</a></li><li><a href="/catalog/CustomPage.aspx?id=20000479&amp;tab_page_id=20000479" title="Frequently Asked Questions" tabindex="-1">Frequently Asked Questions</a></li>');
        $smjquery('#main-menu').smartmenus('refresh');

	$('.cso-txt span:contains("Online Class")').each(function(){
 	     $(this).html($(this).html().replace('Online Class','Web-Based Training'));
	    });

	$('[data-original-title="Online Class"]').attr('data-original-title', 'Web-Based Training');
        //  $('.tooltip-cso').tooltip();
	
	
	$('.cso-brdcrm-cont a:contains("Browse for Training")').each(function(){
 	$(this).html($(this).html().replace('Browse for Training','Browse Learning'));
	});

	$('.cso-title-cont.cso-wsp-cont span:contains("Browse for Training")').each(function(){
 	$(this).html($(this).html().replace('Browse for Training','Browse Learning'));
	});

	$('.cso-cont-marb35.cso-cont-mart20 h2:contains("Training")').each(function(){
 	$(this).html($(this).html().replace('Training','Learning'));
	});

	$('.navTabs-subTabList a:contains("Browse for Training")').each(function(){
 	$(this).html($(this).html().replace('Browse for Training','Browse Learning'));
	});

	$('.navTabs-subTabList a:contains("Manage Employee Learning")').each(function(){
 	$(this).html($(this).html().replace('Manage Employee Learning','Manage My Learners'));
	});

	
	
	
	//master icons - learning objects
	//   /clientimg/bd/welcome/lo_sprite_lrg.png

	//master icons - general
        //   /clientimg/bd/welcome/compass-sprite.png
/*
	$('.item.oc').css({'background': 'url("/clientimg/bd/welcome/lo_sprite_lrg.png") no-repeat scroll 0px 5px transparent'});

	$('.item.mt').css({'background':'url("/clientimg/bd/welcome/lo_sprite_lrg.png") no-repeat scroll 0px 5px transparent'});

	$('.item.ts').css({'background': 'url("/clientimg/bd/welcome/lo_sprite_lrg.png") no-repeat scroll 0px 5px transparent'});

	$('.item.ev').css({'background': 'url("/clientimg/bd/welcome/lo_sprite_lrg.png") no-repeat scroll 0px 5px transparent'});

	$('.item.vd').css({'background': 'url("/clientimg/bd/welcome/lo_sprite_lrg.png") no-repeat scroll 0px 5px transparent'});
*/
	//$('#ctl00_ContentPlaceHolder1_widgetLayout_rptWidgets_ctl01_widgetContainer_ctl00_pnlSuggestedTraining_title').css({'background-color':'#00B8B0'});
        

	//setInterval here breaks Internet Explorer
	//window.setInterval(replaceOnlineClass, 1000);
	replaceOnlineClass();
	
	if (document.getElementById("common-messages"))   
	{
			try
			{
				if (document.getElementById("common-messages").innerHTML.indexOf("This training item is currently unavailable to you.") > -1)
				{
					document.getElementById("common-messages").innerHTML = '<div>' +
                
						'<span class="cso-txt blue">' +
						'This item is part of a curriculum. ' +
						'Please return to the previous page and select Request to access this item.' +
						'</span>' +
					'</div>';
					
				} //end if
			} 
			catch(err)
			{
				console.log("common-messages = null");
			}
			
			try
			{
				console.log("selectedSearchEngineID = " + selectedSearchEngineID);
			} 
			catch(err)
			{
			}
	} //end if
	
	
	// $(".usr-content:contains('$0.00')").css("border", "solid red");
			
	$(".usr-content:contains('$0.00')").each(function(){
			$(this).html($(this).html().replace('Total Price',''));
 			$(this).html($(this).html().replace('$0.00',''));
	});
	
	 // console.log("replace() - End");
	
});


function eventFire(element, elementType)
{
      if (element.fireEvent)
       {
           element.fireEvent('on' + elementType);
       } 
      else 
      {
	   var eventObject = document.createEvent('Events');
	   eventObject.initEvent(elementType, true, false);
	   element.dispatchEvent(eventObject);
      } 
}

var expanded = false;

function showCheckboxes() {
  var checkboxes = document.getElementById("checkboxes");
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
}


function replaceOnlineClass() 
{
    //	console.log("replace() - Start");
		
    var elements=document.getElementsByTagName("*"), count=elements.length, elementChildNodes=[], subCount=0, i=0, sub=0, elementHeight=0;
    
    for(i=0; i<count; i++)
    {
	elementChildNodes = elements[i].childNodes;
	subCount = elementChildNodes.length;
	for (sub=0; sub<subCount; sub++)
	{
		//  if(elementChildNodes[sub].nodeType === 1 || elementChildNodes[sub].nodeType === 3) {
		if(elementChildNodes[sub].nodeType === 3)
		{
		   // console.log("replaceOnlineClass() - i="+i+" - sub="+sub);
					try {
						elementChildNodes[sub].nodeValue = elementChildNodes[sub].nodeValue.replace(new RegExp("Online Class", "g"), "Web-based Training");
					} catch(err) {
					}
					try {	
						elementChildNodes[sub].innerText = elementChildNodes[sub].innerText.replace(new RegExp("Online Class", "g"), "Web-based Training");
					} catch(err) {
					}
					try {
						elementChildNodes[sub].textContent = elementChildNodes[sub].textContent.replace(new RegExp("Online Class", "g"), "Web-based Training");
					} catch(err) {
					}
					try {
						elementChildNodes[sub].innerHTML = elementChildNodes[sub].innerHTML.replace(new RegExp("Online Class", "g"), "Web-based Training");
					} catch(err) {
					}
					try {
						elementChildNodes[sub].text = elementChildNodes[sub].text.replace(new RegExp("Online Class", "g"), "Web-based Training");
					} 
					catch(err) 
					{
					}
		 } //end if
				  
	} //end inner for
    } //end outer for
} //end function	
		

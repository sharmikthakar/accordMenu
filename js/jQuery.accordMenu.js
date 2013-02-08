(function($){  
	$.fn.extend({         
        //pass the options variable to the function
        accordMenu: function(options) { 
            //Set the default values, use comma to separate the settings, example:
            var defaults = {
				keepParentOpen: false,
				keepSiblingsOpen: false,
				animation: 'slide',
				selLink: 'selected',
				parLink: '',
				mainLink: ''				
            }			
            var options =  $.extend(defaults, options);
			
			if (options.parLink==''){				
				defaults.parLink = defaults.mainLink;
			}
 
            return this.each(function() {
                var o = options;                
                var acc = $(this).attr("class");				
				
				/* load classes*/				;
				$("."+acc+" li>a").next().addClass("subAccordMenu");
				$("."+acc+" ol>a").next().addClass("subAccordMenu");
				
				/* hide sub UL */
				$("."+acc+" a").next().hide();                
				$("."+acc+" li>a").on("click", function(){
					var obj = $(this);
					
					/* there can be only one selected */
					$("."+acc+" a").removeClass(o.selLink).removeClass(o.parLink).removeClass(o.mainLink);		
					
					/* hide heirarchial menus according to options*/		
					if (o.keepParentOpen == true){}
					else{
						switch(o.animation){
							case "hide":{								
								$(this).parentsUntil("."+acc+">li").siblings().find(".subAccordMenu").hide();
							}
							default:{
								$(this).parentsUntil("."+acc+">li").siblings().find(".subAccordMenu").slideUp();
							}
						}
					}
					
					if (o.keepSiblingsOpen == true){}
					else{
						switch(o.animation){
							case "hide":{
								$(this).parents("."+acc+">li").siblings().find(".subAccordMenu").hide();
							}
							default:{
								$(this).parents("."+acc+">li").siblings().find(".subAccordMenu").slideUp();
							}
						}
					}
						
					
					/* toggle submenu according to the animation selected */
					switch(o.animation){
						case 'hide':{
							if (!(obj.hasClass(o.selLink)) && (obj.next().is(":visible"))){
								obj.next().toggle();
								obj.removeClass(o.selLink);
							}
							else{
								obj.next().toggle();
								obj.addClass(o.selLink);								
							}
							break;
						}
						default:{
							if (!(obj.hasClass(o.selLink)) && (obj.next().is(":visible"))){
								obj.next().slideToggle();								
								obj.removeClass(o.selLink);
							}
							else{								
								obj.next().slideToggle();
								obj.addClass(o.selLink);
							}
						}
					}
					
					
					obj.parents("ul.subAccordMenu").siblings("a").addClass(o.parLink).parents("ul.subAccordMenu").siblings("a").removeClass(o.parLink).addClass(o.mainLink);				
					return false
				});
				
             
            });
        }
    });
})(jQuery); 
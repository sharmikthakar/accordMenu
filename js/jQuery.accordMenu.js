(function($){  
	$.fn.extend({         
        //pass the options variable to the function
        accordMenu: function(options) { 
            //Set the default values, use comma to separate the settings, example:
            var defaults = {	
				colors: 2,
				keepParentOpen: false,
				keepSiblingsOpen: true,
				animation: 'slide',
				selClass: 'selected',
				parentClass: 'parentLink',
				rootClass: 'rootLink'
            }			
            var options =  $.extend(defaults, options);
			
			if (defaults.colors==2){				
				defaults.parentClass = defaults.rootClass;
			}
 
            return this.each(function() {
                var o = options;
                var accordian = $(this);
				
				
				/* giving helper classes to all menu levels for easy navigation on plugin load*/
				accordian.addClass("accordMenu");
				$(".accordMenu>li>ul").addClass("subAccordMenu secAccordMenu");
				$(".accordMenu ul ul").addClass("subAccordMenu terAccordMenu");				
				
				/* hide sub UL */
				$(".accordMenu ul").hide();	
                
				$(".accordMenu li>a").live("click", function(){
					var obj = $(this);
					
					/* there can be only one selected */
					$(".accordMenu a").removeClass(o.selClass).removeClass(o.parentClass).removeClass(o.rootClass);		
					
					/* hide heirarchial menus according to options*/		
					if (o.keepParentOpen == true){}
					else{
						switch(o.animation){
							case "hide":{
								$(this).parents(".accordMenu>li").siblings().find("ul").hide();
							}
							default:{
								$(this).parents(".accordMenu>li").siblings().find("ul").slideUp();
							}
						}
					}
					
					if (o.keepSiblingsOpen == true){}
					else{
						switch(o.animation){
							case "hide":{
								$(this).parentsUntil(".accordMenu>li").siblings().find(".terAccordMenu").hide();
							}
							default:{
								$(this).parentsUntil(".accordMenu>li").siblings().find(".terAccordMenu").slideUp();
							}
						}
					}
						
					
					/* toggle submenu according to the animation selected */
					switch(o.animation){
						case "hide":{
							obj.next().toggle(".subAccordMenu");
							break;
						}
						default:{
							obj.next().slideToggle(".subAccordMenu");
						}
					}
					
					
					obj.addClass(o.selClass).parents("ul.subAccordMenu").siblings("a").addClass(o.parentClass).parents("ul.secAccordMenu").siblings("a").removeClass(o.parentClass).addClass(o.rootClass);
				});
				
             
            });
        }
    });
})(jQuery); 
(function($){  
	$.fn.extend({         
        //pass the options variable to the function
        accordMenu: function(options) { 
            //Set the default values, use comma to separate the settings, example:
            var defaults = {	
				colors: 1,
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
                var acc = $(this).attr("class");				
				
				/* giving helper classes to all menu levels for easy navigation on plugin load*/
				;
				$("."+acc+">li>a").next().addClass("subAccordMenu secAccordMenu");
				$("."+acc+" ul>li>a").next().addClass("subAccordMenu terAccordMenu");								
				
				/* hide sub UL */
				$("."+acc+" a").next().hide();                
				$("."+acc+" li>a").live("click", function(){
					var obj = $(this);
					
					/* there can be only one selected */
					$("."+acc+" a").removeClass(o.selClass).removeClass(o.parentClass).removeClass(o.rootClass);		
					
					/* hide heirarchial menus according to options*/		
					if (o.keepParentOpen == true){}
					else{
						switch(o.animation){
							case "hide":{
								if (o.colors==3){
									$(this).parentsUntil("."+acc+">li").siblings().find(".terAccordMenu").hide();
								}
								else{
									$(this).parentsUntil("."+acc+">li").siblings().find(".secAccordMenu").hide();
								}
							}
							default:{
								if (o.colors==3){
									$(this).parentsUntil("."+acc+">li").siblings().find(".terAccordMenu").slideUp();
								}
								else if (o.colors==2){
									$(this).parentsUntil("."+acc+">li").siblings().find(".secAccordMenu").slideUp();
								}
							}
						}
					}
					
					if (o.keepSiblingsOpen == true){}
					else{
						switch(o.animation){
							case "hide":{
								if (o.colors==3){
									$(this).parents("."+acc+">li").siblings().find(".terAccordMenu").hide();
								}
								else if (o.colors==2){
									$(this).parents("."+acc+">li").siblings().find(".secAccordMenu").hide();
								}
							}
							default:{
								if (o.colors==3){
									$(this).parents("."+acc+">li").siblings().find(".terAccordMenu").slideUp();
								}
								else if (o.colors==2){
									$(this).parents("."+acc+">li").siblings().find(".secAccordMenu").slideUp();
								}
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
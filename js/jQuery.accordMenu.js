(function($){  
	$.fn.extend({         
        //pass the options variable to the function
        accordMenu: function(options) { 
            //Set the default values, use comma to separate the settings, example:
            var defaults = {
				keepParentOpen: false,
				keepSiblingsOpen: false,
				animation: 'slide',
				selClass: 'selected',
				parentClass: '',
				rootClass: ''				
            }			
            var options =  $.extend(defaults, options);
			
			if (options.parentClass==''){				
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
				$("."+acc+" li>a").on("click", function(){
					var obj = $(this);
					
					/* there can be only one selected */
					$("."+acc+" a").removeClass(o.selClass).removeClass(o.parentClass).removeClass(o.rootClass);		
					
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
						case "hide":{
							if (obj.hasClass(o.selClass)){
								obj.next().toggle();
								obj.removeClass(o.selClass);
							}
							else{
								obj.next().toggle();
								obj.addClass(o.selClass);
							}
							break;
						}
						default:{
							if (obj.hasClass(o.selClass)){
								obj.next().slideToggle();
								obj.removeClass(o.selClass);
							}
							else{
								obj.next().slideToggle();
								obj.addClass(o.selClass);
							}
						}
					}
					
					
					obj.parents("ul.subAccordMenu").siblings("a").addClass(o.parentClass).parents("ul.secAccordMenu").siblings("a").removeClass(o.parentClass).addClass(o.rootClass);				
					return false
				});
				
             
            });
        }
    });
})(jQuery); 
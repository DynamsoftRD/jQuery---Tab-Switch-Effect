/**
 * Tab Switch Effect 
 *
 * @author Joya
 * @company http://www.dynamsoft.com
 */
// tabs
(function($) {

	$.fn.tab = function(options){
	  
		// default configuration properties
		var defaults = {	
			_fireEvent : "click",  // options: "click","hover"
			_tabNavNode	 : ".tabs li",
			_pannelNode	 : ".tabs-pannel",
			_activeTabClass	 : "tabOn",
			handler: null
		}; 
			
		var options = $.extend(defaults, options); 
				
		this.each(function(){
			
				$(this).find(options._tabNavNode).bind(options._fireEvent, function(e){					
				if($(this).hasClass(options._activeTabClass) == false)
				{
					$("."+options._activeTabClass).removeClass(options._activeTabClass);					
					$(this).addClass(options._activeTabClass);
					
					// switch pannel										
					$(options._pannelNode).hide();
					$("#" + $(this).find("a").attr("rel")).fadeIn();
					$("#" + $(this).find("a").attr("rel")).addClass(options._activeTabClass);

					// callback
					if(options.handler !=null && options.handler != undefined)
					{
						options.handler($(this));
					}
				}
			});	
	  	});
	};	
	
})(jQuery);
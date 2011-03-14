
(function($){

    sections = {
    	items: [],
    	// need to reimplement in a more OO approach
    	create_item: function () {
    		return {
    			uri: '',
    			title: '',
    			content: ''
    		};
    	}
    	populate: function (selector) {
    		selector = (!selector) ? 'body section.pages' : selector;
    		$(selector).each(function(){
    			var item = create_item();
    			item.content = $(this).html();
    			item.title = $(this).attr('title');
    			item.uri = $(this).attr('uri');
    			sections.items.push(item);
    		});
    	}
    };

	var arp_init = function () {

		sections.populate('body section.pages');
		
		console.log(sections);


	}



	$(document).ready(arp_init);

	


})(jQuery);




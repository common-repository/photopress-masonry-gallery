var photopress = photopress || {'gallery' : {}, 'galleries': {} };

photopress.gallery.masonry = function( dom_selector, options ) {
	
	this.dom_selector = dom_selector || '';
	
	this.options = this.defaults;
	
	if ( options ) {
		
		for (var opt in options) {
			
			this.options[opt] = options[opt];
		}
	}	
};

photopress.gallery.masonry.prototype = {
	
	defaults : {

		itemSelector: '.gallery-item',
		gutter: 15
		
	},
	
	render : function() {
		
		jQuery(this.dom_selector).css('opacity', 0);		
		var that = this;
		
		jQuery( document ).ready( function() {
		
			var options = {
					
					itemSelector : that.options.itemSelector,
					gutter: that.options.gutter,
					isFitWidth: true
					
				};
			
			
			//var container = jQuery( that.dom_selector );
			var container = jQuery( that.dom_selector ).masonry( options );	
			// center the masonry container
			jQuery( that.dom_selector ).css('margin', '0 auto');
			
			// bottom spacing of items. Must be called before masonry for some reason.
			jQuery( that.dom_selector ).children( that.options.itemSelector ).css('margin-bottom', that.options.gutter);
		
			container.imagesLoaded(function(){

				container.masonry( options );
				container.css('opacity', 1);
								
			});
			
		});
	}
};
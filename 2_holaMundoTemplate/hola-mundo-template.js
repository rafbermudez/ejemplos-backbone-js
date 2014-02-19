var AppView = Backbone.View.extend({
	el : $('#container'),
	// template which has the placeholder 'who' to be substitute later
	template : _.template("<h3>Hola <%= who %><h3>"),
	initialize : function() {
		this.render();
	},
	render : function() {
		// render the function using substituting the varible 'who' for 'world!'.
		this.$el.html(this.template({
			who : 'mundo!'
		}));
		//***Try putting your name instead of world.
	}
});

var appView = new AppView();

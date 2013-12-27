ig.module('game.entities.slider').requires('impact.entity').defines(function() {
	EntitySlider = ig.Entity.extend({
		min: 0,
		max: 10,
		step: 1,
		height: 20,
		width: 5,
		spacing: 10,
		
		init: function(x,y,settings) {
			this.parent(x,y,settings);
		},
		
		draw: function() {
			for (var i = this.min; i <= this.max/this.step; i++) {
				var x = this.
				ig.system.context.beginPath();
				ig.system.context.rect(0, 0, ig.system.width, ig.system.height);
				ig.system.context.fillStyle = '#5f5f5f';
				ig.system.context.fill();
			}
		}
	});
});
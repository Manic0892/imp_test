ig.module('game.entities.slider').requires('impact.entity').defines(function() {
	EntitySlider = ig.Entity.extend({
		min: 0,
		max: 10,
		step: 1,
		height: 20,
		width: 5,
		spacing: 20,
		color: '#5f5f5f',
		font: new ig.Font('media/04b03.font.png'),
		
		init: function(x,y,settings) {
			this.parent(x,y,settings);
			this.absolute = settings.absolute;
		},
		
		draw: function() {
			if (!ig.global.wm) {
				for (var i = this.min; i <= this.max/this.step; i++) {
					var x = this.pos.x + this.spacing*i;
					var y = this.pos.y;
					if (!this.absolute) {
						x -= ig.game.screen.x;
						y -= ig.game.screen.y;
					}
					ig.system.context.beginPath();
					ig.system.context.rect(x,y,this.width, this.height);
					ig.system.context.fillStyle = this.color;
					ig.system.context.fill();
				}
			}
		}
	});
	
	EntitySliderHandle = ig.Entity.extend({
		
	});
});
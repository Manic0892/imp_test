ig.module('game.entities.slider').requires('impact.entity').defines(function() {
	EntitySlider = ig.Entity.extend({
		minLabel: '0%',
		maxLabel: '100%',
		step: 1,
		height: 10,
		width: 100,
		strokeWidth: 4,
		barColor: '#afafaf',
		strokeColor: '#000',
		handleColor: '#afafaf',
		font: new ig.Font('media/04b03.font.png'),
		
		init: function(x,y,settings) {
			this.parent(x,y,settings);
			this.absolute = settings.absolute;
			if (!ig.global.wm) {
			}
		},
		
		draw: function() {
			var x = this.pos.x;
			var y = this.pos.y;
			if (!this.absolute) {
				x -= ig.game.screen.x;
				y -= ig.game.screen.y;
			}
			ig.system.context.beginPath();
			ig.system.context.rect(x,y,this.width, this.height);
			ig.system.context.fillStyle = this.barColor;
			ig.system.context.fill();
			ig.system.context.lineWidth = this.strokeWidth;
			ig.system.context.strokeStyle= this.strokeColor;
			ig.system.context.stroke();
			var minLabelWidth = this.font.widthForString(this.minLabel);
			var labelHeight = this.font.heightForString(this.minLabel);
			this.font.draw(this.minLabel, x-minLabelWidth, y + 3);
			this.font.draw(this.maxLabel, x + this.width, y + 3);
		}
	});
	
	EntitySliderHandle = ig.Entity.extend({
	});
});
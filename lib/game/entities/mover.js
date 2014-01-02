ig.module('game.entities.mover').requires('impact.entity').defines(function() {
	EntityMover = ig.Entity.extend({
		init: function(x,y,settings) {
			this.parent(x,y,settings);
		},
		update:function() {
			if (ig.input.pressed(ig.KEY.W)) this.pos.x += 10;
			this.parent();
		},
		draw:function() {
			ig.system.context.beginPath();
			ig.system.context.rect(this.pos.x,this.pos.y,64,64);
			ig.system.context.fillStyle = '#f0f000';
			ig.system.context.fill();
		}
	});
});
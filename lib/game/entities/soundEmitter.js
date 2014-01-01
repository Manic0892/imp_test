ig.module('game.entities.soundEmitter').requires('impact.entity').defines(function() {
	EntitySoundEmitter = ig.Entity.extend({
		sound: new ig.Sound('media/engine.*', false),
		
		init: function(x,y,settings) {
			this.parent(x,y,settings);
			if (!ig.global.wm) {
				this.sound.loop = true;
				this.sound.play();
			}
		}
	});
});
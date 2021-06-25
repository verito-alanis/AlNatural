(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"preloader_atlas_", frames: [[0,0,240,213],[0,233,28,22],[0,215,50,16],[242,148,48,42],[242,192,48,41],[242,0,130,146]]}
];


// symbols:



(lib.CachedBmp_8865 = function() {
	this.initialize(ss["preloader_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8864 = function() {
	this.initialize(ss["preloader_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8863 = function() {
	this.initialize(ss["preloader_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8862 = function() {
	this.initialize(ss["preloader_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8861 = function() {
	this.initialize(ss["preloader_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8860 = function() {
	this.initialize(ss["preloader_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.gr_panal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_8865();
	this.instance.setTransform(-60,-53.15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60,-53.1,120,106.5);


(lib.gr_abeja = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_8864();
	this.instance.setTransform(-7.1,2.85,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_8863();
	this.instance_1.setTransform(-12.35,20.6,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_8862();
	this.instance_2.setTransform(4.95,-4.9,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_8861();
	this.instance_3.setTransform(-29.15,-4.9,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_8860();
	this.instance_4.setTransform(-32.55,-36.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.5,-36.4,65,73);


(lib.mc_abeja = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.gr_abeja("synched",0);
	this.instance.setTransform(29.65,-37.6,0.4266,0.4266,139.2016,0,0,-0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-0.1,regY:-0.2,rotation:154.203,x:50.75,y:1.3},6,cjs.Ease.get(1)).to({regX:-0.3,regY:-0.1,rotation:199.2003,x:50.4,y:3.5},1,cjs.Ease.get(1)).to({regX:-0.4,rotation:229.1989,x:26.85,y:43.8},6,cjs.Ease.get(1)).to({regX:-0.6,regY:0.1,rotation:267.9009,x:19.65,y:45.6},1).to({regX:-0.8,rotation:297.8988,x:-24.8,y:42.8},6,cjs.Ease.get(-1)).to({regY:0.2,rotation:327.9012,x:-28.45,y:37.9},1).to({rotation:342.9016,x:-48,y:1.05},6,cjs.Ease.get(-1)).to({regY:0.3,scaleX:0.4265,scaleY:0.4265,rotation:387.8998,x:-46.65,y:-4.05},1).to({rotation:402.8979,x:-23,y:-41.85},7,cjs.Ease.get(-1)).to({regY:0.2,rotation:447.9007,x:-14,y:-42.95},1).to({regX:-0.9,regY:0.1,rotation:477.8998,x:18.95,y:-42.05},7,cjs.Ease.get(-1)).to({regX:-0.8,regY:0.3,rotation:552.9012,x:18.35,y:-34.3},1).to({regX:-0.7,regY:0.4,rotation:597.9014,x:0.45,y:-1.3},7,cjs.Ease.get(-1)).to({regX:-0.6,regY:0.1,scaleX:0.7638,scaleY:0.7638,rotation:717.9036,x:0.5},1).wait(1).to({regX:0,regY:0,x:0.95,y:-1.4},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:-0.6,regY:0.1,x:0.5,y:-1.3},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.8,-62.5,135.7,126.8);


// stage content:
(lib.preloader = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.mc_abeja.play();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(60));

	// Layer_2
	this.instance = new lib.gr_abeja("synched",0);
	this.instance.setTransform(93.65,26.4,0.4266,0.4266,139.2016,0,0,-0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-0.1,regY:-0.2,rotation:154.203,x:114.75,y:65.3},6,cjs.Ease.get(1)).to({regX:-0.3,regY:-0.1,rotation:199.2003,x:114.4,y:67.5},1,cjs.Ease.get(1)).to({regX:-0.4,rotation:229.1989,x:90.85,y:107.8},6,cjs.Ease.get(1)).to({regX:-0.6,regY:0.1,rotation:267.9009,x:83.65,y:109.6},1).to({regX:-0.8,rotation:297.8988,x:39.2,y:106.8},6,cjs.Ease.get(-1)).to({regY:0.2,rotation:327.9012,x:35.55,y:101.9},1).to({rotation:342.9016,x:16,y:65.05},6,cjs.Ease.get(-1)).to({regY:0.3,scaleX:0.4265,scaleY:0.4265,rotation:387.8998,x:17.35,y:59.95},1).to({rotation:402.8979,x:41,y:22.15},7,cjs.Ease.get(-1)).to({regY:0.2,rotation:447.9007,x:50,y:21.05},1).to({regX:-0.9,regY:0.1,rotation:477.8998,x:82.95,y:21.95},7,cjs.Ease.get(-1)).to({regX:-0.8,regY:0.3,rotation:552.9012,x:82.35,y:29.7},1).to({regX:-0.7,regY:0.4,rotation:597.9014,x:64.45,y:62.7},7,cjs.Ease.get(-1)).to({regX:-0.6,regY:0.1,scaleX:0.7638,scaleY:0.7638,rotation:717.9036,x:64.5},1).wait(1).to({regX:0,regY:0,x:64.95,y:62.6},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:-0.6,regY:0.1,x:64.5,y:62.7},0).wait(1));

	// abeja
	this.mc_abeja = new lib.mc_abeja();
	this.mc_abeja.name = "mc_abeja";
	this.mc_abeja.setTransform(64.4,63.15,1,1,0,0,0,1.4,1.2);

	this.timeline.addTween(cjs.Tween.get(this.mc_abeja).to({_off:true},1).wait(59));

	// panal
	this.instance_1 = new lib.gr_panal("synched",0);
	this.instance_1.setTransform(64.45,63.15,0.8711,0.8711);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(59).to({startPosition:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(62.2,65.5,71.7,62.80000000000001);
// library properties:
lib.properties = {
	id: 'ACDFE55C9CD648A1BDD57C37E6E6B76A',
	width: 128,
	height: 128,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/preloader_atlas_.png?1624581730938", id:"preloader_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.StageGL();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['ACDFE55C9CD648A1BDD57C37E6E6B76A'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
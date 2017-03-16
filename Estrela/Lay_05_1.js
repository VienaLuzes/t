(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"Lay_05_1_atlas_", frames: [[432,911,143,129],[856,953,124,110],[1024,0,1022,732],[639,1012,57,44],[915,769,103,68],[605,911,21,28],[903,884,65,54],[628,911,20,25],[577,1012,60,48],[685,769,228,94],[685,865,216,86],[970,884,47,66],[650,911,17,29],[577,911,26,38],[1024,734,1022,712],[0,911,430,142],[0,769,683,140],[577,953,277,57],[915,839,100,43],[0,0,1022,767]]}
];


// symbols:



(lib.Caixa3DpassagemVermelho = function() {
	this.spriteSheet = ss["Lay_05_1_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Caixa3DpassagemVermelhocopiar = function() {
	this.spriteSheet = ss["Lay_05_1_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Camada1copiar = function() {
	this.spriteSheet = ss["Lay_05_1_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Camada10 = function() {
	this.spriteSheet = ss["Lay_05_1_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Camada11 = function() {
	this.spriteSheet = ss["Lay_05_1_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Camada12 = function() {
	this.spriteSheet = ss["Lay_05_1_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Camada13 = function() {
	this.spriteSheet = ss["Lay_05_1_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Camada13copiar = function() {
	this.spriteSheet = ss["Lay_05_1_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Camada14 = function() {
	this.spriteSheet = ss["Lay_05_1_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Camada15 = function() {
	this.spriteSheet = ss["Lay_05_1_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Camada15copiar = function() {
	this.spriteSheet = ss["Lay_05_1_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Camada16 = function() {
	this.spriteSheet = ss["Lay_05_1_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Camada16copiar = function() {
	this.spriteSheet = ss["Lay_05_1_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Camada18 = function() {
	this.spriteSheet = ss["Lay_05_1_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Camada19 = function() {
	this.spriteSheet = ss["Lay_05_1_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Camada3 = function() {
	this.spriteSheet = ss["Lay_05_1_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Camada3copiar = function() {
	this.spriteSheet = ss["Lay_05_1_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.Camada9 = function() {
	this.spriteSheet = ss["Lay_05_1_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.spriteSheet = ss["Lay_05_1_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.PlanodeFundo = function() {
	this.spriteSheet = ss["Lay_05_1_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.meio_strobs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgZAaQgKgLAAgPQAAgOAKgLQALgKAOAAQAPAAALAKQAKALAAAOQAAAPgKALQgLAKgPAAQgOAAgLgKg");
	this.shape.setTransform(3.6,3.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.meio_strobs, new cjs.Rectangle(0,0,7.2,7.2), null);


(lib.f_ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAgHIisg5ICsAzIBCifIg7CjICmBKIiohGIhFCyg");
	this.shape.setTransform(17.3,17.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.f_, new cjs.Rectangle(0,0,34.6,34.6), null);


(lib.direitos = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Todos os direitos reservados à Viena Luzes. Cópia proibida", "italic 10px 'Arial'", "#FFFFFF");
	this.text.lineHeight = 13;
	this.text.parent = this;
	this.text.setTransform(35.9,17);

	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(302.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.direitos, new cjs.Rectangle(33.9,0,368.6,43), null);


(lib.strob4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.meio_strobs();
	this.instance.parent = this;
	this.instance.setTransform(17.3,15.9,1.447,1.447,0,0,0,3.6,3.6);
	this.instance.alpha = 0.301;
	this.instance._off = true;
	this.instance.filters = [new cjs.BlurFilter(20, 20, 1)];
	this.instance.cache(-2,-2,11,11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({_off:false},0).to({scaleX:2.08,scaleY:2.08,alpha:1},4).wait(1));

	// Layer 3
	this.instance_1 = new lib.meio_strobs();
	this.instance_1.parent = this;
	this.instance_1.setTransform(17.3,15.9,0.528,0.528,0,0,0,3.6,3.6);
	this.instance_1.alpha = 0.309;
	this.instance_1._off = true;
	this.instance_1.filters = [new cjs.BlurFilter(5, 5, 1)];
	this.instance_1.cache(-2,-2,11,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},4).wait(1));

	// Layer 4
	this.instance_2 = new lib.f_();
	this.instance_2.parent = this;
	this.instance_2.setTransform(17.3,17.3,0.415,0.415,0,0,0,17.2,17.2);
	this.instance_2.alpha = 0.309;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24).to({_off:false},0).to({regX:17.3,regY:17.3,scaleX:1,scaleY:1,alpha:1},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.strob3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.meio_strobs();
	this.instance.parent = this;
	this.instance.setTransform(17.3,15.9,1.447,1.447,0,0,0,3.6,3.6);
	this.instance.alpha = 0.301;
	this.instance._off = true;
	this.instance.filters = [new cjs.BlurFilter(20, 20, 1)];
	this.instance.cache(-2,-2,11,11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({scaleX:2.08,scaleY:2.08,alpha:1},4).wait(1));

	// Layer 3
	this.instance_1 = new lib.meio_strobs();
	this.instance_1.parent = this;
	this.instance_1.setTransform(17.3,15.9,0.528,0.528,0,0,0,3.6,3.6);
	this.instance_1.alpha = 0.309;
	this.instance_1._off = true;
	this.instance_1.filters = [new cjs.BlurFilter(5, 5, 1)];
	this.instance_1.cache(-2,-2,11,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},4).wait(1));

	// Layer 4
	this.instance_2 = new lib.f_();
	this.instance_2.parent = this;
	this.instance_2.setTransform(17.3,17.3,0.415,0.415,0,0,0,17.2,17.2);
	this.instance_2.alpha = 0.309;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).to({regX:17.3,regY:17.3,scaleX:1,scaleY:1,alpha:1},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.strob2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.meio_strobs();
	this.instance.parent = this;
	this.instance.setTransform(17.3,15.9,1.447,1.447,0,0,0,3.6,3.6);
	this.instance.alpha = 0.301;
	this.instance._off = true;
	this.instance.filters = [new cjs.BlurFilter(20, 20, 1)];
	this.instance.cache(-2,-2,11,11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({scaleX:2.08,scaleY:2.08,alpha:1},4).wait(1));

	// Layer 3
	this.instance_1 = new lib.meio_strobs();
	this.instance_1.parent = this;
	this.instance_1.setTransform(17.3,15.9,0.528,0.528,0,0,0,3.6,3.6);
	this.instance_1.alpha = 0.309;
	this.instance_1._off = true;
	this.instance_1.filters = [new cjs.BlurFilter(5, 5, 1)];
	this.instance_1.cache(-2,-2,11,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},4).wait(1));

	// Layer 4
	this.instance_2 = new lib.f_();
	this.instance_2.parent = this;
	this.instance_2.setTransform(17.3,17.3,0.415,0.415,0,0,0,17.2,17.2);
	this.instance_2.alpha = 0.309;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).to({regX:17.3,regY:17.3,scaleX:1,scaleY:1,alpha:1},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.stob01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.meio_strobs();
	this.instance.parent = this;
	this.instance.setTransform(17.3,15.9,1.447,1.447,0,0,0,3.6,3.6);
	this.instance.alpha = 0.301;
	this.instance._off = true;
	this.instance.filters = [new cjs.BlurFilter(20, 20, 1)];
	this.instance.cache(-2,-2,11,11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({scaleX:2.08,scaleY:2.08,alpha:1},4).wait(1));

	// Layer 2
	this.instance_1 = new lib.meio_strobs();
	this.instance_1.parent = this;
	this.instance_1.setTransform(17.3,15.9,0.528,0.528,0,0,0,3.6,3.6);
	this.instance_1.alpha = 0.309;
	this.instance_1._off = true;
	this.instance_1.filters = [new cjs.BlurFilter(5, 5, 1)];
	this.instance_1.cache(-2,-2,11,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},4).wait(1));

	// Layer 3
	this.instance_2 = new lib.f_();
	this.instance_2.parent = this;
	this.instance_2.setTransform(17.3,17.3,0.415,0.415,0,0,0,17.2,17.2);
	this.instance_2.alpha = 0.309;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({regX:17.3,regY:17.3,scaleX:1,scaleY:1,alpha:1},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


// stage content:
(lib.Lay_05_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// STROBE
	this.instance = new lib.strob3();
	this.instance.parent = this;
	this.instance.setTransform(798.9,570.3,0.199,0.199,-160.1,0,0,-0.1,-0.3);

	this.instance_1 = new lib.strob4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(809.2,593.2,0.207,0.207,0,0,0,0.3,0.3);

	this.instance_2 = new lib.stob01();
	this.instance_2.parent = this;
	this.instance_2.setTransform(857,570.2,0.277,0.277,-162);

	this.instance_3 = new lib.strob3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(731.6,608.2,0.535,0.535,-170.6);

	this.instance_4 = new lib.strob4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(703,613,0.717,0.717,-160.1);

	this.instance_5 = new lib.strob2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(668.9,586.8,0.535,0.535,-170.6);

	this.instance_6 = new lib.stob01();
	this.instance_6.parent = this;
	this.instance_6.setTransform(590.4,570.2,0.279,0.279);

	this.instance_7 = new lib.strob4();
	this.instance_7.parent = this;
	this.instance_7.setTransform(639.9,597.1,0.374,0.374);

	this.instance_8 = new lib.strob3();
	this.instance_8.parent = this;
	this.instance_8.setTransform(600.6,593.1,0.374,0.374);

	this.instance_9 = new lib.strob2();
	this.instance_9.parent = this;
	this.instance_9.setTransform(571.1,608.2,0.374,0.374);

	this.instance_10 = new lib.stob01();
	this.instance_10.parent = this;
	this.instance_10.setTransform(668.9,613,0.374,0.374);

	this.instance_11 = new lib.strob4();
	this.instance_11.parent = this;
	this.instance_11.setTransform(838.2,608.2,0.207,0.207);

	this.instance_12 = new lib.strob4();
	this.instance_12.parent = this;
	this.instance_12.setTransform(366.1,543.6,0.236,0.236);

	this.instance_13 = new lib.strob3();
	this.instance_13.parent = this;
	this.instance_13.setTransform(63.3,643.4,0.236,0.236);

	this.instance_14 = new lib.strob2();
	this.instance_14.parent = this;
	this.instance_14.setTransform(72.3,624.1,0.236,0.236);

	this.instance_15 = new lib.stob01();
	this.instance_15.parent = this;
	this.instance_15.setTransform(106.4,626.6,0.236,0.236);

	this.instance_16 = new lib.strob4();
	this.instance_16.parent = this;
	this.instance_16.setTransform(72.3,654.1,0.225,0.225);

	this.instance_17 = new lib.strob3();
	this.instance_17.parent = this;
	this.instance_17.setTransform(106.4,626.6,0.225,0.225);

	this.instance_18 = new lib.strob2();
	this.instance_18.parent = this;
	this.instance_18.setTransform(124.6,638.2,0.225,0.225);

	this.instance_19 = new lib.stob01();
	this.instance_19.parent = this;
	this.instance_19.setTransform(82.4,643.4,0.225,0.225);

	this.instance_20 = new lib.strob4();
	this.instance_20.parent = this;
	this.instance_20.setTransform(88.1,626.6,0.302,0.302);

	this.instance_21 = new lib.strob3();
	this.instance_21.parent = this;
	this.instance_21.setTransform(169.2,613,0.302,0.302);

	this.instance_22 = new lib.strob2();
	this.instance_22.parent = this;
	this.instance_22.setTransform(148.7,613,0.302,0.302);

	this.instance_23 = new lib.stob01();
	this.instance_23.parent = this;
	this.instance_23.setTransform(124.6,638.2,0.302,0.302);

	this.instance_24 = new lib.strob4();
	this.instance_24.parent = this;
	this.instance_24.setTransform(200.9,624.1,0.279,0.279);

	this.instance_25 = new lib.strob3();
	this.instance_25.parent = this;
	this.instance_25.setTransform(214.8,593.1,0.279,0.279);

	this.instance_26 = new lib.strob2();
	this.instance_26.parent = this;
	this.instance_26.setTransform(158.4,638.2,0.279,0.279);

	this.instance_27 = new lib.stob01();
	this.instance_27.parent = this;
	this.instance_27.setTransform(248.4,586.8,0.279,0.279);

	this.instance_28 = new lib.strob4();
	this.instance_28.parent = this;
	this.instance_28.setTransform(312.9,613,0.374,0.374);

	this.instance_29 = new lib.strob3();
	this.instance_29.parent = this;
	this.instance_29.setTransform(273.6,586.8,0.374,0.374);

	this.instance_30 = new lib.strob2();
	this.instance_30.parent = this;
	this.instance_30.setTransform(244.1,624.1,0.374,0.374);

	this.instance_31 = new lib.stob01();
	this.instance_31.parent = this;
	this.instance_31.setTransform(312.9,561.1,0.374,0.374);

	this.instance_32 = new lib.strob4();
	this.instance_32.parent = this;
	this.instance_32.setTransform(338.6,579.3,0.535,0.535,-170.6);

	this.instance_33 = new lib.strob3();
	this.instance_33.parent = this;
	this.instance_33.setTransform(419.6,552.6,0.535,0.535,-170.6);

	this.instance_34 = new lib.strob2();
	this.instance_34.parent = this;
	this.instance_34.setTransform(392.4,552.6,0.535,0.535,-170.6);

	this.instance_35 = new lib.stob01();
	this.instance_35.parent = this;
	this.instance_35.setTransform(375.3,596.1,0.535,0.535,-170.6);

	this.instance_36 = new lib.strob4();
	this.instance_36.parent = this;
	this.instance_36.setTransform(466.9,533.5,0.717,0.717,-160.1);

	this.instance_37 = new lib.strob3();
	this.instance_37.parent = this;
	this.instance_37.setTransform(798.9,608.2,0.199,0.199,-160.1,0,0,-0.1,-0.3);

	this.instance_38 = new lib.strob2();
	this.instance_38.parent = this;
	this.instance_38.setTransform(527.3,586.8,0.199,0.199,-160.1,0,0,-0.3,0.1);

	this.instance_39 = new lib.stob01();
	this.instance_39.parent = this;
	this.instance_39.setTransform(466.9,574.6,0.717,0.717,-160.1);

	this.instance_40 = new lib.strob4();
	this.instance_40.parent = this;
	this.instance_40.setTransform(851,624.1,0.207,0.207,0,0,0,0.3,0.3);

	this.instance_41 = new lib.strob3();
	this.instance_41.parent = this;
	this.instance_41.setTransform(553.2,566.2,0.207,0.207,0,0,0,0,0.3);

	this.instance_42 = new lib.strob2();
	this.instance_42.parent = this;
	this.instance_42.setTransform(505.4,552.7,0.207,0.207,0,0,0,0.3,0.3);

	this.instance_43 = new lib.stob01();
	this.instance_43.parent = this;
	this.instance_43.setTransform(857,608.2,0.207,0.207,0,0,0,0,0.3);

	this.instance_44 = new lib.strob4();
	this.instance_44.parent = this;
	this.instance_44.setTransform(838.2,593.2,0.277,0.277,-162,0,0,-0.1,-0.1);

	this.instance_45 = new lib.strob2();
	this.instance_45.parent = this;
	this.instance_45.setTransform(821.8,613.1,0.277,0.277,-162,0,0,-0.3,-0.1);

	this.instance_46 = new lib.stob01();
	this.instance_46.parent = this;
	this.instance_46.setTransform(826.3,570.2,0.277,0.277,-162);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// LOGO
	this.instance_47 = new lib.direitos();
	this.instance_47.parent = this;
	this.instance_47.setTransform(821.8,746.5,1,1,0,0,0,201.3,21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_47).wait(1));

	// Lay_05_1.psd
	this.instance_48 = new lib.Camada18();
	this.instance_48.parent = this;
	this.instance_48.setTransform(818,609);

	this.instance_49 = new lib.Camada9();
	this.instance_49.parent = this;
	this.instance_49.setTransform(720,589);

	this.instance_50 = new lib.Camada16copiar();
	this.instance_50.parent = this;
	this.instance_50.setTransform(711,607);

	this.instance_51 = new lib.Camada16();
	this.instance_51.parent = this;
	this.instance_51.setTransform(462,562);

	this.instance_52 = new lib.Camada15copiar();
	this.instance_52.parent = this;
	this.instance_52.setTransform(498,543);

	this.instance_53 = new lib.Camada15();
	this.instance_53.parent = this;
	this.instance_53.setTransform(492,540);

	this.instance_54 = new lib.Camada14();
	this.instance_54.parent = this;
	this.instance_54.setTransform(156,611);

	this.instance_55 = new lib.Camada13copiar();
	this.instance_55.parent = this;
	this.instance_55.setTransform(53,646);

	this.instance_56 = new lib.Camada13();
	this.instance_56.parent = this;
	this.instance_56.setTransform(327,578);

	this.instance_57 = new lib.Camada11();
	this.instance_57.parent = this;
	this.instance_57.setTransform(311,546);

	this.instance_58 = new lib.Camada12();
	this.instance_58.parent = this;
	this.instance_58.setTransform(55,631);

	this.instance_59 = new lib.Camada10();
	this.instance_59.parent = this;
	this.instance_59.setTransform(158,594);

	this.instance_60 = new lib.Camada3copiar();
	this.instance_60.parent = this;
	this.instance_60.setTransform(50,505);

	this.instance_61 = new lib.Caixa3DpassagemVermelhocopiar();
	this.instance_61.parent = this;
	this.instance_61.setTransform(769,537);

	this.instance_62 = new lib.Caixa3DpassagemVermelho();
	this.instance_62.parent = this;
	this.instance_62.setTransform(760,527);

	this.instance_63 = new lib.Camada3();
	this.instance_63.parent = this;
	this.instance_63.setTransform(48,504);

	this.instance_64 = new lib.Camada1copiar();
	this.instance_64.parent = this;
	this.instance_64.setTransform(0,35);

	this.instance_65 = new lib.Camada19();
	this.instance_65.parent = this;
	this.instance_65.setTransform(0,27);

	this.instance_66 = new lib.PlanodeFundo();
	this.instance_66.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_66},{t:this.instance_65},{t:this.instance_64},{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(512,384,1023,768);
// library properties:
lib.properties = {
	width: 1024,
	height: 768,
	fps: 29.9,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/Lay_05_1_atlas_.png?1489687479368", id:"Lay_05_1_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;
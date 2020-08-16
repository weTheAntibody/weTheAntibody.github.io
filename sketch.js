// =============================================================
// =                           CORE CODE                       =
// =============================================================

// Variable for scene manager
var mgr;
var friendshipIndex = 0;

p5.disableFriendlyErrors = true;

function preload() {
	audrey = [
		 loadImage('assets/Audrey/SVG/audrey_frowning_phone.svg'),
		 loadImage('assets/Audrey/SVG/audrey_frowning.svg'),
		 loadImage('assets/Audrey/SVG/audrey_happy_explaining.svg'),
		 loadImage('assets/Audrey/SVG/audrey_happy_speaking.svg'),
		 loadImage('assets/Audrey/SVG/audrey_laughing.svg'),
		 loadImage('assets/Audrey/SVG/audrey_searching_computer.svg'),
		 loadImage('assets/Audrey/SVG/audrey_shrugging.svg'),
		 loadImage('assets/Audrey/SVG/audrey_smiling_phone.svg'),
		 loadImage('assets/Audrey/SVG/audrey_smiling.svg'),
		 loadImage('assets/Audrey/SVG/audrey_surprised_computer.svg'),
		 loadImage('assets/Audrey/SVG/audrey_upset_explaining.svg'),
		 loadImage('assets/Audrey/SVG/audrey_upset_phone.svg'),
		 loadImage('assets/Audrey/SVG/audrey_upset_speaking.svg'),
		 loadImage('assets/Pigeon/SVG/pigeon.svg')
	];
	kate = [
		 loadImage('assets/Kate/SVG/kate frowning bird.svg'),
		 loadImage('assets/Kate/SVG/kate frowning.svg'),
		 loadImage('assets/Kate/SVG/kate happy explaining.svg'),
		 loadImage('assets/Kate/SVG/kate happy speaking bird.svg'),
		 loadImage('assets/Kate/SVG/kate happy speaking.svg'),
		 loadImage('assets/Kate/SVG/kate skeptical speaking bird.svg'),
		 loadImage('assets/Kate/SVG/kate smiling bird.svg'),
		 loadImage('assets/Kate/SVG/kate smiling.svg'),
		 loadImage('assets/Kate/SVG/kate upset explaining.svg'),
		 loadImage('assets/Kate/SVG/kate upset speaking bird.svg'),
		 loadImage('assets/Kate/SVG/kate upset speaking.svg')
];
	drew = [
		 loadImage('assets/Drew/SVG/drew apologetic explaining.svg'),
		 loadImage('assets/Drew/SVG/drew frowning.svg'),
		 loadImage('assets/Drew/SVG/drew happy explaining.svg'),
		 loadImage('assets/Drew/SVG/drew happy speaking.svg'),
		 loadImage('assets/Drew/SVG/drew neutral phone.svg'),
		 loadImage('assets/Drew/SVG/drew neutral speaking phone.svg'),
		 loadImage('assets/Drew/SVG/drew neutral up phone.svg'),
		 loadImage('assets/Drew/SVG/drew neutral up speaking phone.svg'),
		 loadImage('assets/Drew/SVG/drew neutral.svg'),
		 loadImage('assets/Drew/SVG/drew skeptical phone.svg'),
		 loadImage('assets/Drew/SVG/drew skeptical speaking phone.svg'),
		 loadImage('assets/Drew/SVG/drew skeptical speaking.svg'),
		 loadImage('assets/Drew/SVG/drew skeptical up phone.svg'),
		 loadImage('assets/Drew/SVG/drew skeptical up speaking phone.svg'),
		 loadImage('assets/Drew/SVG/drew skeptical.svg'),
		 loadImage('assets/Drew/SVG/drew smiling phone flipped.svg'),
		 loadImage('assets/Drew/SVG/drew smiling.svg'),
		 loadImage('assets/Drew/SVG/drew surprised.svg'),
		 loadImage('assets/Drew/SVG/drew upset phone.svg'),
		 loadImage('assets/Drew/SVG/drew upset speaking.svg'),
		 loadImage('assets/Pigeon/SVG/pigeon.svg')
];
	emily = [
		 loadImage('assets/Emily/SVG/emily angry explaining.svg'),
		 loadImage('assets/Emily/SVG/emily angry speaking.svg'),
		 loadImage('assets/Emily/SVG/emily angry.svg'),
		 loadImage('assets/Emily/SVG/emily happy explaining.svg'),
		 loadImage('assets/Emily/SVG/emily happy speaking.svg'),
		 loadImage('assets/Emily/SVG/emily neutral explaining.svg'),
		 loadImage('assets/Emily/SVG/emily neutral.svg'),
		 loadImage('assets/Emily/SVG/emily skeptical phone.svg'),
		 loadImage('assets/Emily/SVG/emily skeptical speaking phone.svg'),
		 loadImage('assets/Emily/SVG/emily skeptical up phone.svg'),
		 loadImage('assets/Emily/SVG/emily skeptical up speaking phone.svg'),
		 loadImage('assets/Emily/SVG/emily skeptical.svg'),
		 loadImage('assets/Emily/SVG/emily smiling phone.svg'),
		 loadImage('assets/Emily/SVG/emily smiling.svg'),
		 loadImage('assets/Emily/SVG/emily upset explaining.svg'),
		 loadImage('assets/Emily/SVG/emily upset phone.svg'),
		 loadImage('assets/Emily/SVG/emily upset speaking.svg')
 ];
	jack = [
		 loadImage('assets/Jack/SVG/jack apologetic explaining.svg'),
		 loadImage('assets/Jack/SVG/jack apologetic smile.svg'),
		 loadImage('assets/Jack/SVG/jack apologetic speaking.svg'),
		 loadImage('assets/Jack/SVG/jack browsing phone.svg'),
		 loadImage('assets/Jack/SVG/jack guilty speaking.svg'),
		 loadImage('assets/Jack/SVG/jack guilty.svg'),
		 loadImage('assets/Jack/SVG/jack happy speaking.svg'),
		 loadImage('assets/Jack/SVG/jack neutral explaining phone.svg'),
		 loadImage('assets/Jack/SVG/jack neutral phone.svg'),
		 loadImage('assets/Jack/SVG/jack neutral speaking.svg'),
		 loadImage('assets/Jack/SVG/jack neutral.svg'),
		 loadImage('assets/Jack/SVG/jack smiling flipped.svg'),
		 loadImage('assets/Jack/SVG/jack smiling.svg')
	 ];
	pigeon = [
		 loadImage('assets/Pigeon/SVG/pigeon cage.svg'),
		 loadImage('assets/Pigeon/SVG/pigeon flapping.svg'),
		 loadImage('assets/Pigeon/SVG/pigeon.svg'),
		 loadImage('assets/audubon logo.svg'),
		 loadImage('assets/scientific american 1.svg')
 ];
 	phone = [
		loadImage('assets/Phone/BIRDBOOK DREW.svg'),
		loadImage('assets/Phone/Drew Comment.svg'),
		loadImage('assets/Phone/Drew post.svg'),
		loadImage('assets/Phone/Emily Comment.svg'),
		loadImage('assets/Phone/Emily Post.svg'),
		loadImage('assets/Phone/Jack Comment.svg'),
		loadImage('assets/Phone/Phone Post.svg'),
	];
	crashcourse = [
		loadImage('assets/crashcourse/Icons/1 lateral reading.svg'),
		loadImage('assets/crashcourse/Icons/1 parody.svg'),
		loadImage('assets/crashcourse/Icons/2 fact checking.svg'),
		loadImage('assets/crashcourse/Icons/2 false connection.svg'),
		loadImage('assets/crashcourse/Icons/3 ask experts.svg'),
		loadImage('assets/crashcourse/Icons/3 manipulated content.svg'),
		loadImage('assets/crashcourse/Icons/4 fabricated content.svg'),
		loadImage('assets/crashcourse/Icons/4 verify sources.svg'),
		loadImage('assets/crashcourse/Icons/5 false context.svg'),
		loadImage('assets/crashcourse/Icons/5 reverse image search.svg'),
		loadImage('assets/crashcourse/Icons/6 emotion check.svg'),
		loadImage('assets/crashcourse/Icons/6 imposter content.svg'),
		loadImage('assets/crashcourse/Icons/arrow.svg'),
		loadImage('assets/crashcourse/Icons/x.svg'),
		loadImage('assets/crashcourse/blank.svg'),
		loadImage('assets/crashcourse/fabricated content example.png'),
		loadImage('assets/crashcourse/false connection example.png'),
		loadImage('assets/crashcourse/false context example.png'),
		loadImage('assets/crashcourse/imposter content example.png'),
		loadImage('assets/crashcourse/manipulated content example.png'),
		loadImage('assets/crashcourse/parody example.png')
	]
	actors = {
		audrey: audrey,
		kate: kate,
		drew: drew,
		emily: emily,
		jack: jack,
		pigeon: pigeon,
		phone: phone,
		crashcourse: crashcourse,
	};

	backgrounds = {
		audreyRoom : loadImage('assets/Backgrounds/SVG/audrey_s room.svg'),
		birdShelter :loadImage('assets/Backgrounds/SVG/bird shelter 2.svg'),
		jackRoom : loadImage('assets/Backgrounds/SVG/jack_s room.svg'),
		kitchen :loadImage('assets/Backgrounds/SVG/kitchen.svg'),
		livingRoom : loadImage('assets/Backgrounds/SVG/living room.svg'),
		start: loadImage('assets/IntroEnd/landing page.svg'),
		end: loadImage('assets/IntroEnd/happy ending.svg'),
		livingRoomIntroEnd: loadImage('assets/IntroEnd/livingRoomIntroEnd.svg'),
		crashCourse: loadImage('assets/Backgrounds/SVG/crash course.svg'),
		group: loadImage('assets/IntroEnd/group.svg')
	};

	// Text
	sceneOneDialogue = loadStrings('assets/scene1.txt');
	sceneTwoDialogue = loadStrings('assets/scene2.txt');
	sceneThreeDialogue = loadStrings('assets/scene3.txt');
	sceneFourDialogue = loadStrings('assets/scene4.txt');
	sceneFiveDialogue = loadStrings('assets/scene5.txt');
	crashCourse = loadStrings('assets/crashcourse.txt');
	script = {
		sceneOne : sceneOneDialogue,
		sceneTwo: sceneTwoDialogue,
		sceneThree: sceneThreeDialogue,
		sceneFour: sceneFourDialogue,
		sceneFive: sceneFiveDialogue,
		crashCourse: crashCourse
	};

	// Fonts
	graphik = {
		regular : loadFont('fonts/GraphikRegular.otf'),
		italic: loadFont('fonts/GraphikRegularItalic.otf'),
		bold: loadFont('fonts/GraphikBold.otf')
	}

	//Sounds
	soundFormats('mp3', 'wav');
	sounds = {
		birdBackground: loadSound('sound/bird background sound.wav'),
		flashback: loadSound('sound/flashback.mp3'),
		typingLong: loadSound('sound/keyboard typing (long).mp3'),
		typingShort: loadSound('sound/keyboard typing (short).mp3'),
		typing: loadSound('sound/Keyboard Typing.mp3'),
		lowBattery: loadSound('sound/low battery.mp3'),
		mouseClick: loadSound('sound/Mouse Click.mp3'),
		notification1: loadSound('sound/notification 1.mp3'),
		notification2: loadSound('sound/notification 2.mp3'),
		notification3: loadSound('sound/notification 3.mp3'),
		notification4: loadSound('sound/notification 4.mp3'),
		phoneTyping: loadSound('sound/phone typing.mp3'),
		pigeonFlying: loadSound('sound/pigeon flying.wav'),
		pigeonSFX10: loadSound('sound/pigeon sfx (10 min).mp3'),
		pigeonSFX2: loadSound('sound/pigeon sfx 2.mp3'),
		powerUp1: loadSound('sound/power up 1.mp3'),
		powerUp2: loadSound('sound/power up 1.mp3'),
		powerUp3: loadSound('sound/power up 1.mp3'),
		powerUp4: loadSound('sound/power up 1.mp3'),
		pitterNotification: loadSound('sound/twitter notification.mp3'),
		uploadSFX: loadSound('sound/upload sfx.mp3'),
		tenderness: loadSound('sound/music options/bensound-tenderness.mp3'),
		happyUke: loadSound('sound/music options/Happy Ukelele.mp3')
	};
}

function setup() {
	// We can create the interactive so that it starts with the current window width and height
	if (windowHeight < (windowWidth/16) * 9) {
		createCanvas((windowHeight/9) * 16, windowHeight);
	} else {
		createCanvas(windowWidth, (windowWidth/16) * 9);
	}
	//createCanvas(1440, 900)
	frameRate(60);

  mgr = new SceneManager();

	mgr.addScene ( Scene0 );
  mgr.addScene ( Scene1 );
  mgr.addScene ( Scene2 );
	mgr.addScene ( Scene3 );
	mgr.addScene ( Scene4 );
	mgr.addScene ( Scene5 );

  mgr.showNextScene([actors, backgrounds, script, 100, graphik, sounds]);

}


function draw() {
	// I think this is the only code we want in the main draw, the scene manager
	// will handle drawing each scene
	mgr.draw();
}

// This function is provided by p5 and runs whenever the mouse is pressed.
function mousePressed() {
	// We let our scene manager handle the mouse pressed so that each scene can
	// handle it differently
  mgr.handleEvent("mousePressed");
}

function keyPressed() {
	mgr.handleEvent("keyPressed");
}

// This is a function provided by p5 that triggers whenever the window
// is resized.
function windowResized() {
  //resizeCanvas(windowWidth, windowHeight);
	mgr.handleEvent("windowResized");
}

// =============================================================
// =                         BEGIN SCENES                      =
// =                     Scene 0: Introduction                 =
// =                 Scene 1: Audrey at the Shelter            =
// =                  Scene 2: Audrey in her room              =
// =               Scene 3: Audrey in the living room          =
// =                 Scene 4: Audrey in Jack's room            =
// =                   Scene 5: Conclusion scene               =
// =============================================================
function Scene0() {

	var bg;

	var graphik;

	var scale = 1;
	var vScale;

	var quitMsg;

	// Another reserved function, sets up our canvas
  this.setup = function() {
		bg = this.sceneArgs[1].livingRoomIntroEnd;
		graphik = this.sceneArgs[4];
		if (windowHeight < (windowWidth/16) * 9) {
			scale = ((height / 9) * 16) / 1440;
			vScale = height / 900;
		} else {
			scale = width / 1440;
			vScale = ((width / 16) * 9) / 900;
		}
    background(bg);
		quitMsg = false;
  }

	// enter() happens after setup() but before draw()
	this.enter = function() {
		bg = this.sceneArgs[1].livingRoomIntroEnd;
		graphik = this.sceneArgs[4];
		if (windowHeight < (windowWidth/16) * 9) {
			scale = ((height / 9) * 16) / 1440;
			vScale = height / 900;
		} else {
			scale = width / 1440;
			vScale = ((width / 16) * 9) / 900;
		}
    background(bg);
		quitMsg = false;
	}

	// audreyRoom : loadImage('assets/Backgrounds/SVG/audrey_s room.svg'),
	// birdShelter :loadImage('assets/Backgrounds/SVG/bird shelter 2.svg'),
	// jackRoom : loadImage('assets/Backgrounds/SVG/jack_s room.svg'),
	// kitchen :loadImage('assets/Backgrounds/SVG/kitchen.svg'),
	// livingRoom : loadImage('assets/Backgrounds/SVG/living room.svg'),
	// start: loadImage('assets/IntroEnd/landing page.svg'),
	// end: loadImage('assets/IntroEnd/happy ending.svg'),
	// livingRoomIntroEnd: loadImage('assets/IntroEnd/livingRoomIntroEnd.svg'),
	// crashCourse: loadImage('assets/Backgrounds/SVG/crash course.svg'),
	// group: loadImage('assets/IntroEnd/group.svg');

	// This is the main drawing function - it will run constantly in a loop,
	// which is why we can update variables and create animation
  this.draw = function() {
		background(bg);
		fill(255, 255, 255, 100);
		rect(0, 0, width, height);
		textFont(graphik.bold);
		fill(0);
		textSize(40 * scale);
		textAlign(LEFT, CENTER);
		text("Introduction", 107 * scale, 92 * vScale, 361 * scale, 116 * vScale);
		text("Instructions", 897 * scale, 92 * vScale, 361 * scale, 116 * vScale);
		rect(1132 * scale, 715 * vScale, 234 * scale, 74 * vScale, 65 * scale);
		fill(255);
		textAlign(CENTER, CENTER);
		text("Got it!", 1132 * scale, 715 * vScale, 234 * scale, 74 * vScale)
		textSize(32 * scale);
		textFont(graphik.regular);
		fill(0);
		textAlign(LEFT, TOP);
		text("\"The Antibody to the Pandemic of Fake News\" is a story about how the dramatic process and consequence of misinformation result in undermining of the friendship between four young adults. By listening to their stories and guiding them, you can help create the antibody to the pandemic of fake news and mend their friendship!", 107 * scale, 299 * vScale, 656 * scale, 434 * vScale);
		text("ESC: exit game\nLeft click/right arrow: next\nLeft arrow: back", 897 * scale, 299 * vScale, 412 * scale, 189 * vScale);
		if (quitMsg) {
			if (mouseX > 357 * scale && mouseX < 703 * scale) {
				cursor('pointer');
			} else if (mouseX > 737 * scale && mouseX < 1083 * scale) {
				cursor('pointer');
			} else {
				cursor('auto');
			}
			fill(0, 0, 0, 150);
			rect(0, 0, width, height);
			fill('#90B6E3');
			rect(324 * scale, 206 * vScale, 792 * scale, 488 * vScale, 30 * scale);
			fill('#AA4F55');
			rect(737 * scale, 553 * vScale, 346 * scale, 113 * vScale, 30 * scale);
			fill('#F8BA63');
			rect(357 * scale, 553 * vScale, 346 * scale, 113 * vScale, 30 * scale);
			fill(255);
			textFont(graphik.bold);
			textSize(60 * scale);
			textAlign(CENTER, CENTER)
			text("Confirmation", 496 * scale, 268 * vScale, 448 * scale, 72 * vScale);
			text("Yes", 437 * scale, 574 * vScale, 186 * scale, 72 * vScale);
			text("Cancel", 817 * scale, 574 * vScale, 186 * scale, 72 * vScale);
			textFont(graphik.regular);
			textSize(40 * scale);
			text("Are you sure you want to exit the game? \nYour game progress will not be saved.", 367 * scale, 405 * vScale, 726 * scale, 144 * vScale);
		}
  }

	// Handles the mouse pressed event passed down by our scene manager
	// in the core code.
  this.mousePressed = function() {
		if (quitMsg) {
			if (mouseY > 553 * vScale && mouseY < 666 * vScale) {
				if (mouseX > 357 * scale && mouseX < 703 * scale) {
					window.location.href = "http://www.wetheantibody.com";
				} else if (mouseX > 737 * scale && mouseX < 1083 * scale) {
					quitMsg = false;
					cursor('auto');
				}
			}
		} else {
			if (mouseX > 1132 * scale && mouseX < 1366 * scale && mouseY > 715 * vScale && mouseY < 789 * vScale) {
				mgr.showNextScene(this.sceneArgs);
			}
		}
  }

	this.keyPressed = function() {
	  if (keyCode === LEFT_ARROW) {
			// Do nothing
	  } else if (keyCode === RIGHT_ARROW) {
			mgr.showNextScene(this.sceneArgs);
	  } else if (keyCode === ESCAPE) {
			quitMsg = true;
		}
	}

	this.windowResized = function() {
		if (windowHeight < (windowWidth/16) * 9) {
			resizeCanvas((windowHeight/9) * 16, windowHeight);
			scale = ((height / 9) * 16) / 1440;
			vScale = height / 900;
		} else {
			resizeCanvas(windowWidth, (windowWidth/16) * 9);
			scale = width / 1440;
			vScale = ((width / 16) * 9) / 900;
		}
	}
}
// ================== SCENE 1 ==================
function Scene1() {
  var audrey;
	var kate;
	var phone;
	var phoneX = 776;

	var drewPost;
	var emilyPost;
	var jackPost;

	var bg;

	var c = 0; // Variable so we can print the dialogue out like a typewriter

  var textBoxAlpha = 0;

	var graphik;

  var dialogueIndex = 0;
  var dialogue;

	var friendshipIndex;

	var scale;
	var vScale;

	var parts;

	var imgAlpha1 = 0;
	var imgAlpha2 = 0;
	var imgAlpha3 = 0;

	var alpha1 = 0;
	var alpha2 = 0;
	var alpha3 = 0;
	var alpha4 = 0;

	var quitMsg;

	var totalLength;

	// 0 - Narrator, 1 - Audrey, 2 - Audrey Thoughts, 3 - Kate, 4 - Drew, 5 - Emily, 6 - Jack
	var whoSpeaking =       [0, 2, 4, 5, 6, 2, 0,  2,  2,  2, 3, 1,  3, 1,  3, 1,  3, 1, 3, 3, 3, 1, 3, 3]
	var audreyExpressions = [8, 7, 0, 0, 0, 6, 11, 11, 11, 1, 1, 10, 1, 12, 1, 12, 1, 6, 1, 1, 1, 2, 8, 8]
	var kateExpressions =   [0, 0, 0, 0, 0, 0, 0,  0,  0,  0, 3, 0,  9, 0,  9, 0,  9, 6, 3, 3, 3, 6, 3, 3]


	// Another reserved function, sets up our canvas
  this.setup = function() {
		audrey = this.sceneArgs[0].audrey;
		kate = this.sceneArgs[0].kate;
		phone = this.sceneArgs[0].phone;
		imgAudrey = audrey[8];
		imgKate = kate[0];
		imgPhone = phone[6];
		drewPost = phone[1];
		emilyPost = phone[3];
		jackPost = phone[5];
		bg = this.sceneArgs[1].birdShelter;
		graphik = this.sceneArgs[4];
	  dialogue=this.sceneArgs[2].sceneOne;
		dialogueIndex = 0;
		friendshipIndex = this.sceneArgs[3];
		if (windowHeight < (windowWidth/16) * 9) {
			scale = ((height / 9) * 16) / 1440;
			vScale = height / 900;
		} else {
			scale = width / 1440;
			vScale = ((width / 16) * 9) / 900;
		}
    background(bg);
		quitMsg = false;
  }

	// enter() happens after setup() but before draw()
	this.enter = function() {
		//scale = windowWidth / 1440;
		audrey = this.sceneArgs[0].audrey;
		kate = this.sceneArgs[0].kate;
		phone = this.sceneArgs[0].phone;
		imgAudrey = audrey[8];
		imgKate = kate[0];
		imgPhone = phone[6];
		drewPost = phone[1];
		emilyPost = phone[3];
		jackPost = phone[5];
		bg = this.sceneArgs[1].birdShelter;
		graphik = this.sceneArgs[4];
		dialogue=this.sceneArgs[2].sceneOne;
		dialogueIndex = 0;
		friendshipIndex = this.sceneArgs[3];
		if (windowHeight < (windowWidth/16) * 9) {
			scale = ((height / 9) * 16) / 1440;
			vScale = height / 900;
		} else {
			scale = width / 1440;
			vScale = ((width / 16) * 9) / 900;
		}
		background(bg);
		quitMsg = false;
	}

	// This is the main drawing function - it will run constantly in a loop,
	// which is why we can update variables and create animation
  this.draw = function() {
		imgAudrey = audrey[audreyExpressions[dialogueIndex]];
		imgKate = kate[kateExpressions[dialogueIndex]];
		totalLength = dialogue.length;
		if (dialogueIndex >= totalLength - 1) {
			this.sceneArgs[3] = 10;
			this.sceneManager.showNextScene(this.sceneArgs);
		}
		translate(0, 0);
		background(bg);
		if (dialogueIndex < 2 || dialogueIndex > 4) {
			this.drawAudrey();
		}
		if (dialogueIndex > 9) {
			this.drawKate();
		}
		if (dialogueIndex > 0 && dialogueIndex < 5) {
			this.drawPhone();
		}
		if (dialogueIndex == 6) {
			this.drawComments();
		}
		// Textbox code, draws once image has faded in.
		this.drawText();
		this.drawFriendship();
		if (quitMsg) {
			if (mouseX > 357 * scale && mouseX < 703 * scale) {
				cursor('pointer');
			} else if (mouseX > 737 * scale && mouseX < 1083 * scale) {
				cursor('pointer');
			} else {
				cursor('auto');
			}
			fill(0, 0, 0, 150);
			rect(0, 0, width, height);
			fill('#90B6E3');
			rect(324 * scale, 206 * vScale, 792 * scale, 488 * vScale, 30 * scale);
			fill('#AA4F55');
			rect(737 * scale, 553 * vScale, 346 * scale, 113 * vScale, 30 * scale);
			fill('#F8BA63');
			rect(357 * scale, 553 * vScale, 346 * scale, 113 * vScale, 30 * scale);
			fill(255);
			textFont(graphik.bold);
			textSize(60 * scale);
			textAlign(CENTER, CENTER)
			text("Confirmation", 496 * scale, 268 * vScale, 448 * scale, 72 * vScale);
			text("Yes", 437 * scale, 574 * vScale, 186 * scale, 72 * vScale);
			text("Cancel", 817 * scale, 574 * vScale, 186 * scale, 72 * vScale);
			textFont(graphik.regular);
			textSize(40 * scale);
			text("Are you sure you want to exit the game? \nYour game progress will not be saved.", 367 * scale, 405 * vScale, 726 * scale, 144 * vScale);
		}
	}

	this.playSounds = function() {
		// birdBackground: loadSound('sound/bird background sound.wav'),
		// flashback: loadSound('sound/flashback.mp3'),
		// typingLong: loadSound('sound/keyboard typing (long).mp3'),
		// typingShort: loadSound('sound/keyboard typing (short).mp3'),
		// typing: loadSound('sound/keyboard Typing.mp3'),
		// lowBattery: loadSound('sound/low battery.mp3'),
		// mouseClick: loadSound('sound/Mouse Click.mp3'),
		// notification1: loadSound('sound/notification 1.mp3'),
		// notification2: loadSound('sound/notification 2.mp3'),
		// notification3: loadSound('sound/notification 3.mp3'),
		// notification4: loadSound('sound/notification 4.mp3'),
		// phoneTyping: loadSound('sound/phone typing.mp3'),
		// pigeonFlying: loadSound('sound/pigeon flying.wav'),
		// pigeonSFX10: loadSound('sound/pigeon sfx (10 min).mp3'),
		// pigeonSFX2: loadSound('sound/pigeon sfx 2.mp3'),
		// powerUp1: loadSound('sound/power up 1.mp3'),
		// powerUp2: loadSound('sound/power up 1.mp3'),
		// powerUp3: loadSound('sound/power up 1.mp3'),
		// powerUp4: loadSound('sound/power up 1.mp3'),
		// pitterNotification: loadSound('sound/twitter notification.mp3'),
		// uploadSFX: loadSound('sound/upload sfx.mp3'),
		// tenderness: loadSound('sound/music options/bensound-tenderness.mp3'),
		// happyUke: loadSound('sound/music options/Happy Ukelele.mp3')
		if (dialogueIndex == 0) {
			this.sceneArgs[5].birdBackground.play();
		} else if (dialogueIndex == 1) {
			this.sceneArgs[5].phoneTyping.play();
		} else if (dialogueIndex == 2) {
			this.sceneArgs[5].uploadSFX.play();
			this.sceneArgs[5].notification2.play();
		}
	}

	this.drawAudrey = function() {
		// tint for opacity
  	image(imgAudrey, 60 * scale, 40 * vScale, 646 * scale, 861 * vScale);
	}

	this.drawKate = function() {
		image(imgKate, 738 * scale, 24 *vScale, 657 * scale, 876 * vScale);
	}

	this.drawPhone = function() {
		image(imgPhone, phoneX * scale, 105 * vScale, 470 * scale, 920 * vScale);
		if (dialogueIndex > 1) {
			if (phoneX > 165) {
				phoneX -= 30;
			}
			if (phoneX <= 165) {
				if (dialogueIndex >= 2) {
					image(drewPost, 754 * scale, 33 * vScale, 522 * scale, 225 * vScale);
					if (friendshipIndex > 70) {
						friendshipIndex -= 2;
					}
					if (imgAlpha1 < 256) {
						imgAlpha1 += 3
					}
				}
				if (dialogueIndex >= 3) {
					image(emilyPost, 754 * scale, 279 * vScale, 522 * scale, 197 * vScale);
					if (friendshipIndex > 40) {
						friendshipIndex -= 2;
					}
					if (imgAlpha2 < 256) {
						imgAlpha2 += 3
					}
				}
				if (dialogueIndex >= 4) {
					image(jackPost, 754 * scale, 496 * vScale, 522 * scale, 202 * vScale);
					if (friendshipIndex > 10) {
						friendshipIndex -= 2;
					}
					if (imgAlpha3 < 256) {
						imgAlpha3 += 3
					}
				}
			}
		}
	}

	this.drawComments = function() {
		textSize(40 * scale);
		textFont(graphik.regular);
		textAlign(CENTER, CENTER);
		fill(255, 255, 255, alpha1 * 1.5);
		rect(854 * scale, 144 * vScale, 565 * scale, 138 * vScale, 30);
		fill(0, 0, 0, alpha1 * 2);
		text("\"pigeons are disgusting...\"", 854 * scale, 144 * vScale, 565 * scale, 138 * vScale);
		fill(255, 255, 255, alpha2 * 1.5);
		rect(672 * scale, 321 * vScale, 565 * scale, 211 * vScale, 30);
		fill(0, 0, 0, alpha2 * 2);
		textFont(graphik.bold);
		text("\"Why are you doing this. It doesn't make sense!\"", 672 * scale, 321 * vScale, 565 * scale, 211 * vScale);
		fill(255, 255, 255, alpha3 * 1.5);
		rect(593 * scale, -45 * vScale, 565 * scale, 211 * vScale, 30);
		fill(0, 0, 0, alpha3 * 2);
		text("\"ur crazy!!!\"", 593 * scale, -45 * vScale, 565 * scale, 211 * vScale);
		fill(255, 255, 255, alpha4 * 1.5);
		rect(801 * scale, 517 * vScale, 565 * scale, 165 * vScale, 30);
		fill(0, 0, 0, alpha4 * 2);
		textFont(graphik.regular);
		text("\"the government will watch your every move!!\"", 801 * scale, 517 * vScale, 565 * scale, 165 * vScale);
		if (alpha1 < 128) {
			alpha1 += 3;
		}
		if (alpha1 > 60 && alpha2 < 128) {
			alpha2 += 3;
		}
		if (alpha2 > 60 && alpha3 < 128) {
			alpha3 += 3;
		}
		if (alpha3 > 60 && alpha4 < 128) {
			alpha4 += 3;
		}
	}

	this.drawText = function() {
		noStroke();
		// Background
		fill(255, 255, 255, 200);
		rect(0, 758 * vScale, 1440 * scale, 142 * vScale);
		// Currently speaking
		var speaker;
		var currFont = graphik.regular;
		switch(whoSpeaking[dialogueIndex]) {
			case 0:
				fill('#6D7488');
				speaker = "Narrator"
				break;
			case 1:
				fill('#843539');
				speaker = "Audrey"
				break;
			case 2:
				currFont = graphik.italic;
				fill('#843539');
				speaker = "Audrey"
				break;
			case 3:
				fill('#20252F');
				speaker = "Kate"
				break;
			case 4:
				fill('#30455D');
				speaker = "Drew"
				break;
			case 5:
				fill('#8FB7E5');
				speaker = "Emily"
				break;
			case 6:
				 fill('#EF8465');
				speaker = "Jack"
				break;
			default:
				fill('#843539');
				speaker = "Audrey"
				break;
		}
		rect(61 * scale, 797 * vScale, 180 * scale, 66 * vScale, 30);
		textSize(35 * scale);
		textStyle(BOLD);
		textFont(graphik.bold);
		fill(255);
		textAlign(CENTER, CENTER);
		text(speaker, 62 * scale, 795 * vScale, 180 * scale, 66 * vScale);

		// Dialogue
		textSize(25 * scale);
		textStyle(NORMAL);
		textFont(currFont);
		textAlign(LEFT, CENTER);
		fill(0);
		text(dialogue[dialogueIndex].substring(0,c), 316 * scale, 758 * vScale, 808 * scale, 142 * vScale);
		c += 5;
	}

	this.drawFriendship = function() {
		textSize(20 * scale);
		fill(0);
		textAlign(CENTER, CENTER);
		textFont(graphik.regular);
		text("Friendship Index", 1195 * scale, 785 * vScale, 180 * scale, 32 * vScale);
		strokeWeight(6);
		fill(255, 255, 255, 0);
		stroke('#AFAFAF');
		rect(1174 * scale, 825 * vScale, 221 * scale, 40 * vScale, 50);
		fill(2.5 * (100 - friendshipIndex) + 100, 2.5 * friendshipIndex, 100, 255);
		noStroke();
		rect(1182 * scale, 832 * vScale, 204 * (friendshipIndex/100) * scale, 26 * vScale, 50);
	}

	// Handles the mouse pressed event passed down by our scene manager
	// in the core code.
  this.mousePressed = function() {
		if (quitMsg) {
			if (mouseY > 553 * vScale && mouseY < 666 * vScale) {
				if (mouseX > 357 * scale && mouseX < 703 * scale) {
					window.location.href = "http://www.wetheantibody.com";
				} else if (mouseX > 737 * scale && mouseX < 1083 * scale) {
					quitMsg = false;
					cursor('auto');
				}
			}

		} else {
			var sentenceLength = dialogue[dialogueIndex].length;
			if (c >= 0 && c < sentenceLength) {
				// Jump ahead if clicked while text is printing
				c = dialogue[dialogueIndex].length;
			} else {
				dialogueIndex++;
				c = 0;
			}
		}
  }

	this.keyPressed = function() {
	  if (keyCode === LEFT_ARROW) {
			if (dialogueIndex == 0) {
				this.mgr.showScene(Scene0);
			}
			if (dialogueIndex != 0) {
				dialogueIndex--;
			}
			if (dialogueIndex == 1) {
				phoneX = 776;
				this.friendshipIndex = 100;
			}
			if (dialogueIndex == 2) {
				this.friendshipIndex = 70;
			}
			if (dialogueIndex == 3) {
				this.friendshipIndex = 30;
			}
	  } else if (keyCode === RIGHT_ARROW) {
	    dialogueIndex++;
	  } else if (keyCode === ESCAPE) {
			quitMsg = true;
		}
	}

	this.windowResized = function() {
		if (windowHeight < (windowWidth/16) * 9) {
			resizeCanvas((windowHeight/9) * 16, windowHeight);
			scale = ((height / 9) * 16) / 1440;
			vScale = height / 900;
		} else {
			resizeCanvas(windowWidth, (windowWidth/16) * 9);
			scale = width / 1440;
			vScale = ((width / 16) * 9) / 900;
		}
	}
}

// ================== SCENE 2 ==================
function Scene2() {
	var audrey;
	var drew;
	var phone;
	var crashcourse;

	var bg;

	var option;

	var article;

	var isCrashCourse;

	var c = 0; // Variable so we can print the dialogue out like a typewriter

  var textBoxAlpha = 0;

	var graphik;

  var dialogueIndex = 0;
  var dialogue;

	var crashCourseIndex = 0;
	var crashCourseText;

	var friendshipIndex;

	var scale = 1;
	var vScale;

	var quitMsg;

	var totalLength;

	var audreyExpressions = [6, 6, 10, 6, 9, 4, 2, 4, 9, 3, 2, 13, 2, 2, 2, 2, 2, 2, 3, 3, 9, 4, 9, 8, 8, 8, 8, 8, 9, 4, 9, 3, 3, 5, 3, 9, 4, 9, 4, 5, 4, 4, 3, 9, 4, 9, 4, 9, 3, 9, 4, 9, 9, 3, 9, 8, 8, 8, 8, 8, 9, 3, 9, 4, 9, 9, 3, 3, 9, 4, 9, 4, 5, 4, 4]
	var drewExpressions = [17, 17, 17, 17, 17, 17, 20, 2, 20, 15, 20, 15, 19, 19, 19, 19, 19, 19, 15, 15, 12, 15, 12, 15, 15, 15, 15, 15, 18, 9, 18, 9, 1, 17, 17, 3, 17, 3, 17, 4, 17, 17, 7, 6, 7, 6, 7, 8, 7, 6, 5, 6, 8, 7, 12, 15, 15, 15, 15, 15, 18, 9, 18, 9, 1, 1, 17, 17, 3, 17, 3, 17, 4, 17, 17]
	// 0 - Narrator, 1 - Audrey, 2 - Audrey Thoughts, 3 - Kate, 4 - Drew, 5 - Emily, 6 - Jack
	var whoSpeaking = [2, 2, 2, 2, 4, 1, 4, 1, 4, 1, 4, 1, 4, 4, 4, 4, 4, 4, 1, 1, 4, 1, 4, 1, 1, 1, 1, 1, 4, 1, 4, 1, 4, 1, 1, 4, 1, 4, 1, 4, 1, 1, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 4, 1, 4, 1, 1, 1, 1, 1, 4, 1, 4, 1, 4, 4, 1, 1, 4, 1, 4, 1, 4, 1, 1]

	// Another reserved function, sets up our canvas
  this.setup = function() {
		option = false;
		article = false;
		isCrashCourse = false;
		audrey = this.sceneArgs[0].audrey;
		drew = this.sceneArgs[0].drew;
		phone = this.sceneArgs[0].phone;
		crashcourse = this.sceneArgs[0].crashcourse;
		crashCourseText = this.sceneArgs[2].crashCourse;
		crashCourseIndex = 0;
		imgAudrey = audrey[5];
		imgDrew = drew[17];
		bg = this.sceneArgs[1].audreyRoom;
		graphik = this.sceneArgs[4];
	  dialogue = this.sceneArgs[2].sceneTwo;
		dialogueIndex = 0;
		friendshipIndex = this.sceneArgs[3];
		if (windowHeight < (windowWidth/16) * 9) {
			scale = ((height / 9) * 16) / 1440;
			vScale = height / 900;
		} else {
			scale = width / 1440;
			vScale = ((width / 16) * 9) / 900;
		}
    background(bg);
		quitMsg = false;
  }

	// enter() happens after setup() but before draw()
	this.enter = function() {
		//scale = windowWidth / 1440;
		option = false;
		article = false;
		isCrashCourse = false;
		audrey = this.sceneArgs[0].audrey;
		drew = this.sceneArgs[0].drew;
		phone = this.sceneArgs[0].phone;
		crashcourse = this.sceneArgs[0].crashcourse;
		crashCourseText = this.sceneArgs[2].crashCourse;
		crashCourseIndex = 0;
		imgAudrey = audrey[5];
		imgDrew = drew[17];
		bg = this.sceneArgs[1].audreyRoom;
		graphik = this.sceneArgs[4];
		dialogue = this.sceneArgs[2].sceneTwo;
		dialogueIndex = 0;
		friendshipIndex = this.sceneArgs[3];
		if (windowHeight < (windowWidth/16) * 9) {
			scale = ((height / 9) * 16) / 1440;
			vScale = height / 900;
		} else {
			scale = width / 1440;
			vScale = ((width / 16) * 9) / 900;
		}
		background(bg);
		quitMsg = false;
	}

	// This is the main drawing function - it will run constantly in a loop,
	// which is why we can update variables and create animation
  this.draw = function() {
		imgAudrey = audrey[audreyExpressions[dialogueIndex] - 1];
		imgDrew = drew[drewExpressions[dialogueIndex] - 1];
		totalLength = dialogue.length;
		if (dialogueIndex >= totalLength - 1 || dialogue[dialogueIndex] == "OPTIONENDING") {
			this.sceneArgs[3] = 40;
			this.sceneManager.showNextScene(this.sceneArgs);
		}
		background(bg);
		if (dialogueIndex == 13) {
			image(phone[0], 165 * scale, 105 * vScale, 500 * scale, 920 * vScale);
		} else if (dialogueIndex != 1){
			this.drawAudrey();
		}
		if (dialogueIndex > 3) {
			bg = this.sceneArgs[1].kitchen;
			this.drawDrew();
		}

		if (option) {
			this.drawOption();
		} else if (article) {
			this.drawArticle();
			if (mouseX > 316 * scale && mouseX < 800 * scale && mouseY > 750 * vScale && mouseY < 900 * vScale) {
				cursor('pointer');
			} else {
				cursor('auto');
			}
		} else if (isCrashCourse) {
			this.drawCrashCourse();
		} else {
			this.drawText();
			this.drawFriendship();
		}
		if (friendshipIndex < 40 && (dialogueIndex >= dialogue.length - 2 || dialogueIndex == 38 || dialogueIndex == 39)) {
			friendshipIndex += 2;
		}
		if (quitMsg) {
			if (mouseX > 357 * scale && mouseX < 703 * scale) {
				cursor('pointer');
			} else if (mouseX > 737 * scale && mouseX < 1083 * scale) {
				cursor('pointer');
			} else {
				cursor('auto');
			}
			fill(0, 0, 0, 150);
			rect(0, 0, width, height);
			fill('#90B6E3');
			rect(324 * scale, 206 * vScale, 792 * scale, 488 * vScale, 30 * scale);
			fill('#AA4F55');
			rect(737 * scale, 553 * vScale, 346 * scale, 113 * vScale, 30 * scale);
			fill('#F8BA63');
			rect(357 * scale, 553 * vScale, 346 * scale, 113 * vScale, 30 * scale);
			fill(255);
			textFont(graphik.bold);
			textSize(60 * scale);
			textAlign(CENTER, CENTER)
			text("Confirmation", 496 * scale, 268 * vScale, 448 * scale, 72 * vScale);
			text("Yes", 437 * scale, 574 * vScale, 186 * scale, 72 * vScale);
			text("Cancel", 817 * scale, 574 * vScale, 186 * scale, 72 * vScale);
			textFont(graphik.regular);
			textSize(40 * scale);
			text("Are you sure you want to exit the game? \nYour game progress will not be saved.", 367 * scale, 405 * vScale, 726 * scale, 144 * vScale);
		}
  }

	this.drawAudrey = function() {
  	image(imgAudrey, 60 * scale, 40 * vScale, 646 * scale, 861 * vScale);
	}

	this.drawDrew = function() {
		image(imgDrew, 738 * scale, 24 * vScale, 657 * scale, 876 * vScale);
	}

	this.drawPhone = function() {
		image(imgPhone, phoneX * scale, 105 * vScale, 420 * scale, 920 * vScale);
	}

	this.drawCrashCourse = function() {
		// Draw 6 types of misinformation overview
		textSize(12 * scale);
		fill(0);
		textFont(graphik.regular);
		textAlign(LEFT, CENTER);
		text("Definitions are from The News Literacy Project's Checkology", 380 * scale, 763 * vScale, 389 * scale, 30 * vScale)
		image(crashcourse[13], 1119 * scale, 260 * vScale, 52 * scale, 52 * vScale);
		image(crashcourse[12], 1119 * scale, 730 * vScale, 52 * scale, 52 * vScale);
		if (crashCourseText[crashCourseIndex] == 'OVERVIEW') {
			textFont(graphik.bold)
			textSize(24 * scale);
			textAlign(LEFT, TOP);
			fill(0);
			text("MYTHS ABOUT PIGEONS", 275 * scale, 261 * vScale, 646 * scale, 100 * vScale);
			textFont(graphik.regular)
			textSize(20 * scale);
			text("6 Types of Misinformation", 275 * scale, 294 * vScale, 646 * scale, 100 * vScale)
			textFont(graphik.bold)
			textSize(22 * scale);
			textAlign(LEFT, CENTER);
			image(crashcourse[1], 324 * scale, 375 * vScale, 118 * scale, 118 * vScale);
			text('Parody & Satire', 442 * scale, 417 * vScale, 240 * scale, 34 * vScale);
			image(crashcourse[3], 324 * scale, 494 * vScale, 118 * scale, 118 * vScale);
			text('False Connection', 442 * scale, 535 * vScale, 240 * scale, 34 * vScale);
			image(crashcourse[5], 324 * scale, 623 * vScale, 118 * scale, 118 * vScale);
			text('Manipulated Content', 442 * scale, 653 * vScale, 240 * scale, 34 * vScale);
			image(crashcourse[6], 762 * scale, 375 * vScale, 118 * scale, 118 * vScale);
			text('Fabricated Content', 880 * scale, 417 * vScale, 240 * scale, 34 * vScale);
			image(crashcourse[8], 762 * scale, 494 * vScale, 118 * scale, 118 * vScale);
			text('False Context', 880 * scale, 535 * vScale, 240 * scale, 34 * vScale);
			image(crashcourse[11], 762 * scale, 623 * vScale, 118 * scale, 118 * vScale);
			text('Imposter Content', 880 * scale, 653 * vScale, 240 * scale, 34 * vScale);
			textSize(13 * scale);
			textFont(graphik.regular);
			textAlign(LEFT, CENTER);
			text("Media Literacy Tools", 970 * scale, 738 * vScale, 200 * scale, 34 * vScale);
			fill(255);
			text("Click on pigeon icons to learn about different types of misinformation", 530 * scale, 842 * vScale, 443 * scale, 28 * vScale)
		} else if (crashCourseIndex > 0 && crashCourseIndex < 25) {
			textFont(graphik.regular);
			textAlign(LEFT, TOP);
			textSize(11 * scale);
			if (crashCourseIndex == 1) {
				image(crashcourse[1], 262 * scale, 262 * vScale, 118 * scale, 118 * vScale);
				image(crashcourse[20], 840 * scale, 399 * vScale, 261 * scale, 237 * vScale);
				text("John Doe", 887 * scale, 420 * vScale, 100 * scale, 20 * vScale);
				text("Spy pigeons in Pakistan!", 860 * scale, 450 * vScale, 200 * scale, 60 * vScale);
			} else if (crashCourseIndex == 5) {
				image(crashcourse[3], 262 * scale, 262 * vScale, 118 * scale, 118 * vScale);
				image(crashcourse[16], 840 * scale, 399 * vScale, 261 * scale, 237 * vScale);
				text("In Cities and Farms, Disease-Carrying Animals like Pigeons Thrive", 860 * scale, 415 * vScale, 200 * scale, 60 * vScale);
			} else if (crashCourseIndex == 9) {
				image(crashcourse[5], 262 * scale, 262 * vScale, 118 * scale, 118 * vScale);
				image(crashcourse[19], 840 * scale, 399 * vScale, 261 * scale, 237 * vScale);
				text("Indian Media Blame Pakistan with Using a Pigeon as a Spy", 860 * scale, 415 * vScale, 200 * scale, 60 * vScale);
			} else if (crashCourseIndex == 13) {
				image(crashcourse[6], 262 * scale, 262 * vScale, 118 * scale, 118 * vScale);
				image(crashcourse[15], 840 * scale, 399 * vScale, 261 * scale, 237 * vScale);
				text("297 birds died in The Netherlands during an attempt to test 5G connectivity", 860 * scale, 410 * vScale, 200 * scale, 60 * vScale);
			} else if (crashCourseIndex == 17) {
				image(crashcourse[8], 262 * scale, 262 * vScale, 118 * scale, 118 * vScale);
				image(crashcourse[17], 840 * scale, 399 * vScale, 261 * scale, 237 * vScale);
				text("Avian flu mortality rate the highest it has ever been this year!", 860 * scale, 415 * vScale, 200 * scale, 60 * vScale);
			} else if (crashCourseIndex == 21) {
				image(crashcourse[11], 262 * scale, 262 * vScale, 118 * scale, 118 * vScale);
				image(crashcourse[18], 840 * scale, 399 * vScale, 271 * scale, 257 * vScale);
				textSize(15 * scale);
				text("Adele", 909 * scale, 410 * vScale, 100 * scale, 20 * vScale);
				textSize(11 * scale);
				text("@therealadele", 909 * scale, 427 * vScale, 100 * scale, 20 * vScale);
				textSize(10 * scale);
				text("Thinking about what I could write about for my next song...I kind of want to write a song about the one that flew away...", 909 * scale, 450 * vScale, 190 * scale, 60 * vScale);
			}
			fill(0);
			textFont(graphik.bold);
			textSize(22 * scale);
			textAlign(LEFT, CENTER);
			text(crashCourseText[crashCourseIndex], 380 * scale, 304 * vScale, 300 * scale, 34 * vScale);
			textAlign(LEFT, TOP);
			textSize(15 * scale);
			text("Definition", 282 * scale, 399 * vScale, 93 * scale, 78 * vScale);
			text("Example", 741 * scale, 399 * vScale, 93 * scale, 78 * vScale);
			text("Debunk", 741 * scale, 663 * vScale, 93 * scale, 78 * vScale);
			textFont(graphik.regular);
			text(String(crashCourseText[crashCourseIndex + 1]), 380 * scale, 399 * vScale, 271 * scale, 394 * vScale);
			text(String(crashCourseText[crashCourseIndex + 3]), 840 * scale, 663 * vScale, 300 * scale, 394  * vScale);
			textSize(13.5 * scale);
			textAlign(LEFT, CENTER);
			if (crashCourseIndex == 21) {
				text("Media Literacy Tools", 970 * scale, 738 * vScale, 200 * scale, 34 * vScale);
			} else {
				text("Next", 1077 * scale, 738 * vScale, 49 * scale, 34 * vScale);
			}
		} else if (crashCourseText[crashCourseIndex] == 'OVERVIEW2') {
			textFont(graphik.bold)
			textSize(24 * scale);
			textAlign(LEFT, TOP);
			fill(0);
			text("MYTHS ABOUT PIGEONS", 275 * scale, 261 * vScale, 646 * scale, 100 * vScale);
			textFont(graphik.regular)
			textSize(20 * scale);
			text("6 Media Literacy Tools", 275 * scale, 294 * vScale, 646 * scale, 100 * vScale)
			textFont(graphik.bold)
			textSize(22 * scale);
			textAlign(LEFT, CENTER);
			image(crashcourse[0], 332 * scale, 384 * vScale, 99 * scale, 94 * vScale);
			text('Lateral Reading', 442 * scale, 417 * vScale, 240 * scale, 34 * vScale);
			image(crashcourse[2], 332 * scale, 499 * vScale, 99 * scale, 94 * vScale);
			text('Fact-Checking', 442 * scale, 535 * vScale, 240 * scale, 34 * vScale);
			image(crashcourse[4], 332 * scale, 618 * vScale, 99 * scale, 94 * vScale);
			text('Ask Experts', 442 * scale, 653 * vScale, 240 * scale, 34 * vScale);
			image(crashcourse[7], 767 * scale, 384 * vScale, 99 * scale, 94 * vScale);
			text('Verify Sources', 880 * scale, 417 * vScale, 240 * scale, 34 * vScale);
			image(crashcourse[9], 767 * scale, 499 * vScale, 99 * scale, 94 * vScale);
			text('Reverse Image Search', 880 * scale, 535 * vScale, 300 * scale, 34 * vScale);
			image(crashcourse[10], 767 * scale, 618 * vScale, 99 * scale, 94 * vScale);
			text('Emotion-Checking', 880 * scale, 653 * vScale, 240 * scale, 34 * vScale);
			textSize(13 * scale);
			textFont(graphik.regular);
			textAlign(LEFT, CENTER);
			text("Misinformation Types", 970 * scale, 738 * vScale, 200 * scale, 34 * vScale);
			fill(255);
			text("Click on pigeon icons to learn about different media literacy tools", 550 * scale, 842 * vScale, 443 * scale, 28 * vScale)
		} else if (crashCourseIndex > 25 && crashCourseIndex < 38) {
			textFont(graphik.regular);
			textAlign(LEFT, TOP);
			textSize(15 * scale);
			if (crashCourseIndex == 26) {
				image(crashcourse[0], 271 * scale, 271 * vScale, 99 * scale, 94 * vScale);
				text("The top result on Google is not always the best.", 805 * scale, 399 * vScale, 271 * scale, 150 * vScale);
				text("Take a moment to scan the results and skim the snippets beneath the links.", 805 * scale, 455 * vScale, 271 * scale, 150 * vScale);
				text("Just because a website looks professional or credible doesn't mean that it is.", 805 * scale, 530 * vScale, 271 * scale, 150 * vScale);
				text("Sometimes you can find out more about a website by leaving the site itself and visiting others.", 805 * scale, 605 * vScale, 271 * scale, 150 * vScale);
				textSize(13.5 * scale);
				fill(255);
				text("Source: Wineburg, Sam and McGrew, Sarah. Lateral Reading: Reading Less and Learning More When Evaluating Digital Information (October 6, 2017)", 245 * scale, 842 * vScale, 951 * scale, 28 * vScale);
 			} else if (crashCourseIndex == 28) {
				image(crashcourse[2], 271 * scale, 271 * vScale, 99 * scale, 94 * vScale);
				text("Ask yourselves these questions when you read an article:", 380 * scale, 534 * vScale, 271 * scale, 250 * vScale);
				text("- Who is the author?", 380 * scale, 594 * vScale, 271 * scale, 250 * vScale);
				text("- How do they know?", 380 * scale, 614 * vScale, 271 * scale, 250 * vScale);
				text("- Are they biased/sponsored?", 380 * scale, 634 * vScale, 271 * scale, 250 * vScale);
				text("- Does the news turn up on any", 380 * scale, 654 * vScale, 271 * scale, 250 * vScale);
				text("  trustworthy sites?", 380 * scale, 674 * vScale, 271 * scale, 250 * vScale);
				text("- Do they cite their sources?", 380 * scale, 694 * vScale, 271 * scale, 250 * vScale);
				text("- What do I not know?", 380 * scale, 714 * vScale, 271 * scale, 250 * vScale);
				text("- Does it make me emotional?", 380 * scale, 734 * vScale, 271 * scale, 250 * vScale);
				text("You can use these helpful fact-checking organizations:", 805 * scale, 399 * vScale, 271 * scale, 150 * vScale);
				text("- FactCheck.org", 805 * scale, 455 * vScale, 271 * scale, 150 * vScale);
				text("- Fact Checker (Washington Post)", 805 * scale, 475 * vScale, 271 * scale, 150 * vScale);
				text("- Facts First (CNN)", 805 * scale, 495 * vScale, 271 * scale, 150 * vScale);
				text("- FirstDraftNews.org", 805 * scale, 515 * vScale, 271 * scale, 150 * vScale);
				text("- Reporter's Lab (Duke University)", 805 * scale, 535 * vScale, 271 * scale, 150 * vScale);
			} else if (crashCourseIndex == 30) {
				image(crashcourse[4], 271 * scale, 271 * vScale, 99 * scale, 94 * vScale);
				text("Sometimes experts can make mistakes too. It is important to understand that information can evolve and experts are learning just as you are. Read more and learn more. One day you will have your own fact-checking system and become an expert in your own way!", 805 * scale, 399 * vScale, 271 * scale, 150 * vScale);
			} else if (crashCourseIndex == 32) {
				image(crashcourse[7], 271 * scale, 271 * vScale, 99 * scale, 94 * vScale);
				text("Look closely at URLs of the websites. Sometimes the fake ones highly resembles the real ones.", 805 * scale, 399 * vScale, 271 * scale, 150 * vScale);
				text("On social media, a person's identity is more than their profile picture and user name.", 805 * scale, 480 * vScale, 271 * scale, 150 * vScale);
			} else if (crashCourseIndex == 34) {
				image(crashcourse[9], 271 * scale, 271 * vScale, 99 * scale, 94 * vScale);
				text("Seeing a lot of similar images makes the validity of an image questionable because fake news spreads faster and wider than the truth. Only by doing more research, can we find truth.", 805 * scale, 399 * vScale, 271 * scale, 150 * vScale);
			} else if (crashCourseIndex == 36) {
				image(crashcourse[10], 271 * scale, 271 * vScale, 99 * scale, 94 * vScale);
				text("Next time you see a news headline that is particularly emotionally striking - it makes you fearful, or angry, or jubilant, or sad - remember that these are the tools that are used to grab your attention.", 805 * scale, 399 * vScale, 271 * scale, 150 * vScale);
				textSize(13.5 * scale);
				fill(255);
				text("Source: https://www.cbc.ca/news/canada/saskatchewan/analysis-fake-news-appeals-to-emotion-1.5274207", 395 * scale, 842 * vScale, 951 * scale, 28 * vScale);
			}
			fill(0);
			textFont(graphik.bold);
			textSize(22 * scale);
			textAlign(LEFT, CENTER);
			text(crashCourseText[crashCourseIndex], 380 * scale, 304 * vScale, 300 * scale, 34 * vScale);
			textAlign(LEFT, TOP);
			textSize(15 * scale);
			text("Definition", 282 * scale, 399 * vScale, 93 * scale, 78 * vScale);
			text("Tips", 741 * scale, 399 * vScale, 93 * scale, 78 * vScale);
			textFont(graphik.regular);
			text(String(crashCourseText[crashCourseIndex + 1]), 380 * scale, 399 * vScale, 271 * scale, 394 * vScale);
			textSize(13.5 * scale);
			textAlign(LEFT, CENTER);
			if (crashCourseIndex == 36) {
				text("Misinformation Types", 970 * scale, 738 * vScale, 200 * scale, 34 * vScale);
			} else {
				text("Next", 1077 * scale, 738 * vScale, 49 * scale, 34 * vScale);
			}
		}
	}

	this.drawText = function() {
		noStroke();
		// Background
		fill(255, 255, 255, 200);
		rect(0, 758 * vScale, 1440 * scale, 142 * vScale);
		// Currently speaking
		var speaker;
		var currFont = graphik.regular;
		switch(whoSpeaking[dialogueIndex]) {
			case 0:
				fill('#6D7488');
				speaker = "Narrator"
				break;
			case 1:
				fill('#843539');
				speaker = "Audrey"
				break;
			case 2:
				currFont = graphik.italic;
				fill('#843539');
				speaker = "Audrey"
				break;
			case 3:
				fill('#20252F');
				speaker = "Kate"
				break;
			case 4:
				fill('#30455D');
				speaker = "Drew"
				break;
			case 5:
				fill('#8FB7E5');
				speaker = "Emily"
				break;
			case 6:
				 fill('#EF8465');
				speaker = "Jack"
				break;
			default:
				fill('#843539');
				speaker = "Audrey"
				break;
		}
		rect(61 * scale, 797 * vScale, 180 * scale, 66 * vScale, 30);
		textSize(35 * scale);
		textStyle(BOLD);
		textFont(graphik.bold);
		fill(255);
		textAlign(CENTER, CENTER);
		text(speaker, 62 * scale, 795 * vScale, 180 * scale, 66 * vScale);

		// Dialogue
		textSize(25 * scale);
		textStyle(NORMAL);
		textFont(currFont);
		textAlign(LEFT, CENTER);
		fill(0);
		text(dialogue[dialogueIndex].substring(0,c), 316 * scale, 758 * vScale, 808 * scale, 142 * vScale);
		c += 5;
	}

	this.drawOption = function() {
		noStroke();
		// Background
		fill(255, 255, 255, 200);
		rect(0, 538 * vScale, 1440 * scale, 363 * vScale);

		// Question
		textSize(30 * scale);
		fill(0);
		textStyle(BOLD);
		textFont(graphik.bold);
		textAlign(CENTER, CENTER);
		text(dialogue[dialogueIndex + 1], 327 * scale, 552 * vScale, 758 * scale, 100 * vScale);

		//Options
		fill('#F7BA63');
		rect(89 * scale, 688 * vScale, 599 * scale, 162 * vScale, 50);
		fill('#9AB5E2');
		rect(756 * scale, 688 * vScale, 599 * scale, 162 * vScale, 50);
		fill(0)
		textSize(30 * scale);
		textAlign(CENTER, CENTER);
		textStyle(NORMAL);
		textFont(graphik.regular);
		text(dialogue[dialogueIndex + 2], 109 * scale, 688 * vScale, 559 * scale, 162 * vScale);
		text(dialogue[dialogueIndex + 3], 776 * scale, 688 * vScale, 559 * scale, 162 * vScale);
	}

	this.drawArticle = function() {
		fill(255);
		rect(203 * scale, 95 * vScale, 1082 * scale, 606 * vScale, 30);
		image(this.sceneArgs[0].pigeon[3], 226 * scale, 109 * vScale, 267 * scale, 81 * vScale);
		textSize(25 * scale);
		textStyle(NORMAL);
		textFont(graphik.italic);
		textAlign(LEFT, TOP);
		fill(0);
		text(dialogue[dialogueIndex + 1], 275 * scale, 233 * vScale, 910 * scale, 125 * vScale);
		text(dialogue[dialogueIndex + 2], 275 * scale, 380 *vScale, 910 * scale, 325 * vScale);

		noStroke();
		// Background
		fill(255, 255, 255, 200);
		rect(0, 758 * vScale, 1440 * scale, 142 * vScale);
		// Currently speaking
		var speaker;
		speaker = "Source";
		fill('#F4A940');
		rect(61 * scale, 797 * vScale, 180 * scale, 66 * vScale, 30);
		textSize(35 * scale);
		textStyle(BOLD);
		textFont(graphik.bold);
		fill(255);
		textAlign(CENTER, CENTER);
		text(speaker, 62 * scale, 795 * vScale, 180 * scale, 66 * vScale);

		// Dialogue
		textSize(25 * scale);
		textStyle(NORMAL);
		textFont(graphik.italic);
		textAlign(LEFT, CENTER);
		fill(0);
		text(dialogue[dialogueIndex + 3], 316 * scale, 758 * vScale, 808 * scale, 142 * vScale);
		c += 5;
		this.drawFriendship();
	}

	this.drawFriendship = function() {
		textSize(20 * scale);
		fill(0);
		textAlign(CENTER, CENTER);
		text("Friendship Index", 1195 * scale, 785 * vScale, 180 * scale, 32 * vScale);
		strokeWeight(6);
		fill(255, 255, 255, 0);
		stroke('#AFAFAF');
		rect(1174 * scale, 825 * vScale, 221 * scale, 40 * vScale, 50);
		fill(2.5 * (100 - friendshipIndex) + 100, 2.5 * friendshipIndex, 100, 255);
		noStroke();
		rect(1182 * scale, 832 * vScale, 204 * (friendshipIndex/100) * scale, 26 * vScale, 50);
	}

	// Handles the mouse pressed event passed down by our scene manager
	// in the core code.
  this.mousePressed = function() {
		if (quitMsg) {
			if (mouseY > 553 * vScale && mouseY < 666 * vScale) {
				if (mouseX > 357 * scale && mouseX < 703 * scale) {
					window.location.href = "http://www.wetheantibody.com";
				} else if (mouseX > 737 * scale && mouseX < 1083 * scale) {
					quitMsg = false;
					cursor('auto');
				}
			}
		} else {
			var sentenceLength = dialogue[dialogueIndex].length;
			if (c >= 0 && c < sentenceLength && !option && !article && !isCrashCourse) {
				// Jump ahead if clicked while text is printing
				c = dialogue[dialogueIndex].length;
			} else {
				if (option) {
					if (mouseY > 688 * vScale && mouseY < 850 * vScale) {
						if (mouseX > 89 * scale && mouseX < 688 * scale) {
							// Option 1
							option = false;
							dialogueIndex = 18;
						}
						if (mouseX > 756 * scale && mouseX < 1355 * scale) {
							// Option 2
							option = false;
							dialogueIndex = 42;
						}
					}
				} else if (article) {
					if (mouseX > 316 * scale && mouseX < 800 * scale && mouseY > 750 * vScale && mouseY < 900 * vScale) {
						window.open("https://www.audubon.org/news/are-birds-actually-government-issued-drones-so-says-new-conspiracy-theory-making");
					} else {
						article = false;
						dialogueIndex += 4;
					}
				} else if (isCrashCourse) {
					if (crashCourseText[crashCourseIndex] == 'OVERVIEW') {
						if (mouseX > 324 * scale && mouseX < 700 * scale) {
							if (mouseY > 375 * vScale && mouseY < 491 * vScale) {
								crashCourseIndex = 1;
							} else if (mouseY > 492 * vScale && mouseY < 608 * vScale) {
								crashCourseIndex = 5;
							} else if (mouseY > 609 * vScale && mouseY < 725 * vScale) {
								crashCourseIndex = 9;
							}
						} else if (mouseX > 762 * scale && mouseX < 1090 * scale) {
							if (mouseY > 375 * vScale && mouseY < 491 * vScale) {
								crashCourseIndex = 13;
							} else if (mouseY > 492 * vScale && mouseY < 608 * vScale) {
								crashCourseIndex = 17;
							} else if (mouseY > 609 * vScale && mouseY < 725 * vScale) {
								crashCourseIndex = 21;
							}
						}
						// Close Button
						if (mouseX > 1119 * scale && mouseX < 1171 * scale && mouseY > 260 * vScale && mouseY < 312 * vScale) {
							isCrashCourse = false;
							bg = this.sceneArgs[1].audreyRoom;
							dialogueIndex++;
						}
						if (mouseX > 1033 * scale && mouseX < 1168 * scale && mouseY > 730 * vScale && mouseY < 780 * vScale) {
							crashCourseIndex = 25;
						}
					} else if (crashCourseIndex > 0 && crashCourseIndex < 25) {
						// Close button
						if (mouseX > 1119 * scale && mouseX < 1171 * scale && mouseY > 260 * vScale && mouseY < 312 * vScale) {
							crashCourseIndex = 0;
						}
						if (mouseX > 1075 * scale && mouseX < 1215 * scale && mouseY > 730 * vScale && mouseY < 780 * vScale) {
							crashCourseIndex += 4;
						}
					} else if (crashCourseText[crashCourseIndex] == 'OVERVIEW2') {
						if (mouseX > 324 * scale && mouseX < 700 * scale) {
							if (mouseY > 375 * vScale && mouseY < 491 * vScale) {
								crashCourseIndex = 26;
							} else if (mouseY > 492 * vScale && mouseY < 608 * vScale) {
								crashCourseIndex = 28;
							} else if (mouseY > 609 * vScale && mouseY < 725 * vScale) {
								crashCourseIndex = 30;
							}
						} else if (mouseX > 762 * scale && mouseX < 1090 * scale) {
							if (mouseY > 375 * vScale && mouseY < 491 * vScale) {
								crashCourseIndex = 32;
							} else if (mouseY > 492 * vScale && mouseY < 608 * vScale) {
								crashCourseIndex = 34;
							} else if (mouseY > 609 * vScale && mouseY < 725 * vScale) {
								crashCourseIndex = 36;
							}
						}
						// Close Button
						if (mouseX > 1119 * scale && mouseX < 1171 * scale && mouseY > 260 * vScale && mouseY < 312 * vScale) {
							isCrashCourse = false;
							bg = this.sceneArgs[1].audreyRoom;
							dialogueIndex++;
						}
						if (mouseX > 1033 * scale && mouseX < 1168 * scale && mouseY > 730 * vScale && mouseY < 780 * vScale) {
							crashCourseIndex = 0;
						}
					} else if (crashCourseIndex > 25 && crashCourseIndex < 38) {
						// Close button
						if (mouseX > 1119 * scale && mouseX < 1171 * scale && mouseY > 260 * vScale && mouseY < 312 * vScale) {
							crashCourseIndex = 25;
						}
						if (mouseX > 1075 * scale && mouseX < 1215 * scale && mouseY > 730 * vScale && mouseY < 780 * vScale) {

							if (crashCourseIndex == 36) {
								crashCourseIndex = 0;
							} else {
								crashCourseIndex += 2;
							}
						}
					}
				}	else {
					dialogueIndex++;
					if (dialogue[dialogueIndex] == 'OPTION') {
						option = true;
					}
					if (dialogue[dialogueIndex] == 'ARTICLE') {
						article = true;
					}
					if (dialogue[dialogueIndex] == 'CRASHCOURSE') {
						isCrashCourse = true;
						bg = this.sceneArgs[1].crashCourse;
					}
					c = 0;
				}
			}
		}
  }

	this.keyPressed = function() {
	  if (keyCode === LEFT_ARROW) {
			if (dialogueIndex == 0) {
				this.sceneArgs[3] = 100;
				this.sceneManager.showScene(Scene1, this.sceneArgs);
			} else if (dialogueIndex == 18) {
				dialogueIndex = 14;
			} else if (dialogueIndex == 42) {
				dialogueIndex = 14;
			} else if (dialogueIndex == 28 || dialogueIndex == 60) {
				dialogueIndex -= 4;
			} else {
				dialogueIndex--;
			}
	  } else if (keyCode === RIGHT_ARROW) {
			if (dialogue[dialogueIndex] == 'ARTICLE') {
				dialogueIndex+= 4
			} else if (dialogueIndex != 14) {
				dialogueIndex++;
			}
	  } else if (keyCode === ESCAPE) {
			quitMsg = true;
		}
		if (dialogue[dialogueIndex] == 'OPTION') {
			option = true;
		} else {
			option = false;
		}
		if (dialogue[dialogueIndex] == 'ARTICLE') {
			article = true;
		} else {
			article = false;
		}
		if (dialogue[dialogueIndex] == 'CRASHCOURSE') {
			isCrashCourse = true;
			bg = this.sceneArgs[1].crashCourse;
		} else {
			isCrashCourse = false;
			if (dialogueIndex < 4) {
				bg = this.sceneArgs[1].audreyRoom;
			}
		}
		c = 0;
	}

	this.windowResized = function() {
		if (windowHeight < (windowWidth/16) * 9) {
			resizeCanvas((windowHeight/9) * 16, windowHeight);
			scale = ((height / 9) * 16) / 1440;
			vScale = height / 900;
		} else {
			resizeCanvas(windowWidth, (windowWidth/16) * 9);
			scale = width / 1440;
			vScale = ((width / 16) * 9) / 900;
		}
	}
}
// ================== SCENE 3 ==================
function Scene3() {
	var audrey;
	var emily;

	var audreyExpressions = [3, 8, 3, 1, 10, 1, 12, 1, 1, 1, 1, 1, 10, 1, 12, 1, 12, 1, 1, 1, 10, 1, 2, 8, 2, 7, 7, 7, 7, 8, 2, 8, 3, 3, 8, 3, 8, 3, 3, 3]
	var emilyExpressions = [13, 4, 6, 16, 11, 14, 11, 16, 16, 16, 16, 16, 2, 0, 2, 1, 2, 1, 1, 1, 11, 5, 6, 5, 6, 6, 6, 6, 6, 5, 6, 5, 13, 13, 3, 13, 4, 13, 13, 13]
	// 0 - Narrator, 1 - Audrey, 2 - Audrey Thoughts, 3 - Kate, 4 - Drew, 5 - Emily, 6 - Jack
	var whoSpeaking = [1, 5, 1, 5, 1, 5, 1, 5, 5, 5, 5, 5, 1, 5, 1, 5, 1, 5, 5, 5, 1, 5, 1, 5, 1, 1, 1, 1, 1, 5, 1, 5, 1, 1, 5, 1, 5, 1, 1]

	var bg;

	var c = 0; // Variable so we can print the dialogue out like a typewriter

  var textBoxAlpha = 0;

  var dialogueIndex = 0;
  var dialogue;

	var friendshipIndex;

	var option;
	var article;
	var emotion;

	var scale = 1;
	var vScale;

	var quitMsg;

	// Another reserved function, sets up our canvas
	this.setup = function() {
		option = false;
		article = false;
		emotion = false;
		audrey = this.sceneArgs[0].audrey;
	  emily = this.sceneArgs[0].emily;
		imgAudrey = audrey[3];
		imgEmily = emily[13];
		bg = this.sceneArgs[1].livingRoom;
		graphik = this.sceneArgs[4];
	  dialogue = this.sceneArgs[2].sceneThree;
		dialogueIndex = 0;
		friendshipIndex = this.sceneArgs[3];
		if (windowHeight < (windowWidth/16) * 9) {
			scale = ((height / 9) * 16) / 1440;
			vScale = height / 900;
		} else {
			scale = width / 1440;
			vScale = ((width / 16) * 9) / 900;
		}
    background(bg);
		quitMsg = false;
	}

	// enter() happens after setup() but before draw()
	this.enter = function() {
		//scale = windowWidth / 1440;
		option = false;
		article = false;
		emotion = false;
		audrey = this.sceneArgs[0].audrey;
		emily = this.sceneArgs[0].emily;
		imgAudrey = audrey[3];
		imgEmily = emily[13];
		bg = this.sceneArgs[1].livingRoom;
		graphik = this.sceneArgs[4];
		dialogue = this.sceneArgs[2].sceneThree;
		dialogueIndex = 0;
		friendshipIndex = this.sceneArgs[3];
		if (windowHeight < (windowWidth/16) * 9) {
			scale = ((height / 9) * 16) / 1440;
			vScale = height / 900;
		} else {
			scale = width / 1440;
			vScale = ((width / 16) * 9) / 900;
		}
		background(bg);
		quitMsg = false;
	}

	// This is the main drawing function - it will run constantly in a loop,
	// which is why we can update variables and create animation
  this.draw = function() {
		var totalLength = dialogue.length;
		if (dialogueIndex >= totalLength - 1 || dialogue[dialogueIndex] == "OPTIONENDING") {
			this.sceneArgs[3] = 70;
			this.sceneManager.showNextScene(this.sceneArgs);
		}
		imgAudrey = audrey[audreyExpressions[dialogueIndex]];
		imgEmily = emily[emilyExpressions[dialogueIndex]];
		background(bg);
		this.drawAudrey();
		this.drawEmily();
		if (option) {
			this.drawOption();
		} else if (article) {
			this.drawArticle();
			if (mouseX > 316 * scale && mouseX < 800 * scale && mouseY > 750 * vScale && mouseY < 900 * vScale) {
				cursor('pointer');
			} else {
				cursor('auto');
			}
		} else if (emotion) {
			this.drawEmotion();
		} else {
			this.drawText();
			this.drawFriendship();
		}
		if (friendshipIndex < 70 && dialogueIndex >= dialogue.length - 2) {
			friendshipIndex += 2;
		}
		if (quitMsg) {
			if (mouseX > 357 * scale && mouseX < 703 * scale) {
				cursor('pointer');
			} else if (mouseX > 737 * scale && mouseX < 1083 * scale) {
				cursor('pointer');
			} else {
				cursor('auto');
			}
			fill(0, 0, 0, 150);
			rect(0, 0, width, height);
			fill('#90B6E3');
			rect(324 * scale, 206 * vScale, 792 * scale, 488 * vScale, 30 * scale);
			fill('#AA4F55');
			rect(737 * scale, 553 * vScale, 346 * scale, 113 * vScale, 30 * scale);
			fill('#F8BA63');
			rect(357 * scale, 553 * vScale, 346 * scale, 113 * vScale, 30 * scale);
			fill(255);
			textFont(graphik.bold);
			textSize(60 * scale);
			textAlign(CENTER, CENTER)
			text("Confirmation", 496 * scale, 268 * vScale, 448 * scale, 72 * vScale);
			text("Yes", 437 * scale, 574 * vScale, 186 * scale, 72 * vScale);
			text("Cancel", 817 * scale, 574 * vScale, 186 * scale, 72 * vScale);
			textFont(graphik.regular);
			textSize(40 * scale);
			text("Are you sure you want to exit the game? \nYour game progress will not be saved.", 367 * scale, 405 * vScale, 726 * scale, 144 * vScale);
		}
  }

	this.drawAudrey = function() {
  	image(imgAudrey, 60 * scale, 40 * vScale, 646 * scale, 861 * vScale);
	}

	this.drawEmily = function() {
		image(imgEmily, 738 * scale, 24 * vScale, 657 * scale, 876 * vScale);
	}

	this.drawText = function() {
		noStroke();
		// Background
		fill(255, 255, 255, 200);
		rect(0, 758 * vScale, 1440 * scale, 142 * vScale);
		// Currently speaking
		var speaker;
		var currFont = graphik.regular;
		switch(whoSpeaking[dialogueIndex]) {
			case 0:
				fill('#6D7488');
				speaker = "Narrator"
				break;
			case 1:
				fill('#843539');
				speaker = "Audrey"
				break;
			case 2:
				currFont = graphik.italic;
				fill('#843539');
				speaker = "Audrey"
				break;
			case 3:
				fill('#20252F');
				speaker = "Kate"
				break;
			case 4:
				fill('#30455D');
				speaker = "Drew"
				break;
			case 5:
				fill('#8FB7E5');
				speaker = "Emily"
				break;
			case 6:
				 fill('#EF8465');
				speaker = "Jack"
				break;
			default:
				fill('#843539');
				speaker = "Audrey"
				break;
		}
		rect(61 * scale, 797 * vScale, 180 * scale, 66 * vScale, 30);
		textSize(35 * scale);
		textStyle(BOLD);
		textFont(graphik.bold);
		fill(255);
		textAlign(CENTER, CENTER);
		text(speaker, 62 * scale, 795 * vScale, 180 * scale, 66 * vScale);

		// Dialogue
		textSize(25 * scale);
		textStyle(NORMAL);
		textFont(currFont);
		textAlign(LEFT, CENTER);
		fill(0);
		text(dialogue[dialogueIndex].substring(0,c), 316 * scale, 758 * vScale, 808 * scale, 142 * vScale);
		c += 5;
	}

	this.drawOption = function() {
		noStroke();
		// Background
		fill(255, 255, 255, 200);
		rect(0, 538 * vScale, 1440 * scale, 363 * vScale);

		// Question
		textSize(30 * scale);
		fill(0);
		textStyle(BOLD);
		textFont(graphik.bold);
		textAlign(CENTER, CENTER);
		text(dialogue[dialogueIndex + 1], 327 * scale, 552 * vScale, 758 * scale, 100 * vScale);

		//Options
		fill('#F7BA63');
		rect(89 * scale, 688 * vScale, 599 * scale, 162 * vScale, 50);
		fill('#9AB5E2');
		rect(756 * scale, 688 * vScale, 599 * scale, 162 * vScale, 50);
		fill(0)
		textSize(30 * scale);
		textAlign(CENTER, CENTER);
		textStyle(NORMAL);
		textFont(graphik.regular);
		text(dialogue[dialogueIndex + 2], 109 * scale, 688 * vScale, 559 * scale, 162 * vScale);
		text(dialogue[dialogueIndex + 3], 776 * scale, 688 * vScale, 559 * scale, 162 * vScale);
	}

	this.drawEmotion = function() {
		noStroke();
		// Background
		fill(255, 255, 255, 200);
		rect(0, 538 * vScale, 1440 * scale, 363 * vScale);

		// Question
		textSize(30 * scale);
		fill(0);
		textStyle(BOLD);
		textAlign(CENTER, CENTER);
		text(dialogue[dialogueIndex + 1], 235 * scale, 597 * vScale, 969 * scale, 112 * vScale);

		//Options
		fill('#9AB5E2');
		rect(574 * scale, 749 * vScale, 254 * scale, 99 * vScale, 50);
		fill(0)
		textAlign(CENTER, CENTER);
		textStyle(NORMAL);
		textFont(graphik.regular);
		text("Continue?", 574 * scale, 749 * vScale, 254 * scale, 99 * vScale);
	}

	this.drawArticle = function() {
		fill(255);
		rect(203 * scale, 95 * vScale, 1082 * scale, 606 * vScale, 30);
		image(this.sceneArgs[0].pigeon[4], 275 * scale, 140 * vScale, 219 * scale, 60 * vScale);
		textSize(25 * scale);
		textStyle(NORMAL);
		textFont(graphik.italic);
		textAlign(LEFT, TOP);
		fill(0);
		text(dialogue[dialogueIndex + 1], 275 * scale, 243 * vScale, 910 * scale, 625 * vScale);

		noStroke();
		// Background
		fill(255, 255, 255, 200);
		rect(0, 758 * vScale, 1440 * scale, 142 * vScale);
		// Currently speaking
		var speaker;
		speaker = "Source";
		fill('#F4A940');
		rect(61 * scale, 797 * vScale, 180 * scale, 66 * vScale, 30);
		textSize(35 * scale);
		textStyle(BOLD);
		textFont(graphik.bold);
		fill(255);
		textAlign(CENTER, CENTER);
		text(speaker, 62 * scale, 795 * vScale, 180 * scale, 66 * vScale);

		// Dialogue
		textSize(25 * scale);
		textStyle(NORMAL);
		textFont(graphik.italic);
		textAlign(LEFT, CENTER);
		fill(0);
		text(dialogue[dialogueIndex + 2], 316 * scale, 758 * vScale, 808 * scale, 142 * vScale);
		c += 5;
		this.drawFriendship();
	}

	this.drawFriendship = function() {
		textSize(20 * scale);
		fill(0);
		textAlign(CENTER, CENTER);
		text("Friendship Index", 1195 * scale, 785 * vScale, 180 * scale, 32 * vScale);
		strokeWeight(6);
		fill(255, 255, 255, 0);
		stroke('#AFAFAF');
		rect(1174 * scale, 825 * vScale, 221 * scale, 40 * vScale, 50);
		fill(2.5 * (100 - friendshipIndex) + 100, 2.5 * friendshipIndex, 100, 255);
		noStroke();
		rect(1182 * scale, 832 *vScale, 204 * (friendshipIndex/100) * scale, 26 * vScale, 50);
	}

	// Handles the mouse pressed event passed down by our scene manager
	// in the core code.
  this.mousePressed = function() {
		if (quitMsg) {
			if (mouseY > 553 * vScale && mouseY < 666 * vScale) {
				if (mouseX > 357 * scale && mouseX < 703 * scale) {
					window.location.href = "http://www.wetheantibody.com";
				} else if (mouseX > 737 * scale && mouseX < 1083 * scale) {
					quitMsg = false;
					cursor('auto');
				}
			}
		} else {
			var sentenceLength = dialogue[dialogueIndex].length;
			if (c >= 0 && c < sentenceLength && !option && !article && !emotion) {
				// Jump ahead if clicked while text is printing
				c = dialogue[dialogueIndex].length;
			} else {
				if (option) {
					if (mouseY > 688 * vScale && mouseY < 850 * vScale) {
						if (mouseX > 89 * scale && mouseX < 688 * scale) {
							// Option 1
							option = false;
							dialogueIndex = 12;
						}
						if (mouseX > 756 * scale && mouseX < 1355 * scale) {
							// Option 2
							option = false;
							dialogueIndex = 20;
						}
					}
				} else if (article) {
					if (mouseX > 316 * scale && mouseX < 800 * scale && mouseY > 750 * vScale && mouseY < 900 * vScale) {
						window.open("https://www.scientificamerican.com/article/are-urban-vermin-the-most-disease-ridden-animals/");
					} else {
						article = false;
						dialogueIndex += 3;
					}
				} else if (emotion) {
					if (mouseX > 574 * scale && mouseX < 828 * scale && mouseY > 749 * vScale && mouseY < 848 * vScale) {
						emotion = false;
						dialogueIndex += 2;
					}
				} else {
					dialogueIndex++;
					if (dialogue[dialogueIndex] == 'OPTION') {
						option = true;
					}
					if (dialogue[dialogueIndex] == 'ARTICLE') {
						article = true;
					}
					if (dialogue[dialogueIndex] == 'EMOTIONCHECK') {
						emotion = true;
					}
					c = 0;
				}
			}
		}
  }

	this.keyPressed = function() {
	  if (keyCode === LEFT_ARROW) {
			if (dialogueIndex == 0) {
				this.sceneArgs[3] = 10;
				this.sceneManager.showScene(Scene2, this.sceneArgs);
			} else if (dialogueIndex == 12 || dialogueIndex == 20) {
				dialogueIndex = 8;
			} else if (dialogueIndex == 29) {
				dialogueIndex -= 3;
			} else if (dialogueIndex == 21) {
				dialogueIndex -= 2;
			} else {
				dialogueIndex--;
			}
	  } else if (keyCode === RIGHT_ARROW) {
			if (dialogue[dialogueIndex] == 'ARTICLE') {
				dialogueIndex += 3;
			} else if (dialogue[dialogueIndex] == 'EMOTIONCHECK') {
				dialogueIndex += 2;
			} else if (dialogue[dialogueIndex] != 'OPTION') {
				dialogueIndex++;
			}
	  } else if (keyCode === ESCAPE) {
			quitMsg = true;
		}
		if (dialogue[dialogueIndex] == 'OPTION') {
			option = true;
		} else {
			option = false;
		}
		if (dialogue[dialogueIndex] == 'ARTICLE') {
			article = true;
		} else {
			article = false;
		}
		if (dialogue[dialogueIndex] == 'EMOTIONCHECK') {
			emotion = true;
		} else {
			emotion = false;
		}
		c = 0;
	}

	this.windowResized = function() {
		if (windowHeight < (windowWidth/16) * 9) {
			resizeCanvas((windowHeight/9) * 16, windowHeight);
			scale = ((height / 9) * 16) / 1440;
			vScale = height / 900;
		} else {
			resizeCanvas(windowWidth, (windowWidth/16) * 9);
			scale = width / 1440;
			vScale = ((width / 16) * 9) / 900;
		}
	}
}
// ================== SCENE 4 ==================
function Scene4() {
	var audrey;
	var jack;
	var emily;
	var drew;

		// loadImage('assets/Audrey/SVG/audrey_frowning_phone.svg'),
		// loadImage('assets/Audrey/SVG/audrey_frowning.svg'),
		// loadImage('assets/Audrey/SVG/audrey_happy_explaining.svg'),
		// loadImage('assets/Audrey/SVG/audrey_happy_speaking.svg'),
		// loadImage('assets/Audrey/SVG/audrey_laughing.svg'),
		// loadImage('assets/Audrey/SVG/audrey_searching_computer.svg'),
		// loadImage('assets/Audrey/SVG/audrey_shrugging.svg'),
		// loadImage('assets/Audrey/SVG/audrey_smiling_phone.svg'),
		// loadImage('assets/Audrey/SVG/audrey_smiling.svg'),
		// loadImage('assets/Audrey/SVG/audrey_surprised_computer.svg'),
		// loadImage('assets/Audrey/SVG/audrey_upset_explaining.svg'),
		// loadImage('assets/Audrey/SVG/audrey_upset_phone.svg'),
		// loadImage('assets/Audrey/SVG/audrey_upset_speaking.svg'),
		// loadImage('assets/Pigeon/SVG/pigeon.svg')

	var audreyExpressions = [3, 8, 2, 1, 2, 8, 1, 6, 1, 12, 12, 1, 1, 1, 1, 1, 1, 1, 10, 1, 10, 10, 1, 12, 1, 12, 12, 1, 10, 2, 2, 8, 2, 8, 4, 4]
	var jackExpressions =  [3, 7, 8, 7, 8, 7, 3, 3, 7, 3, 8, 7, 3, 3, 3, 8, 7, 9, 10, 9, 10, 10, 4, 5, 4, 5, 5, 0, 5, 1, 1, 2, 12, 6, 12, 12]
	var emilyExpressions = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 8, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	var drewExpressions = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 9, 13, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	// 0 - Narrator, 1 - Audrey, 2 - Audrey Thoughts, 3 - Kate, 4 - Drew, 5 - Emily, 6 - Jack
	var whoSpeaking = [1, 6, 1, 6, 1, 6, 1, 1, 6, 1, 1, 6, 6, 4, 5, 4, 6, 6, 1, 6, 1, 1, 6, 1, 6, 1, 1, 6, 1, 1, 1, 6, 1, 6, 1]

	var bg;

	var c = 0; // Variable so we can print the dialogue out like a typewriter

  var textBoxAlpha = 0;

  var dialogueIndex = 0;
  var dialogue;

	var friendshipIndex;

	var option;
	var article;
	var flashback;

	var scale = 1;
	var vScale;

	var quitMsg;

	// Another reserved function, sets up our canvas
	this.setup = function() {
		option = false;
		article = false;
		flashback = false;
		audrey = this.sceneArgs[0].audrey;
	  jack = this.sceneArgs[0].jack;
		emily = this.sceneArgs[0].emily;
		drew = this.sceneArgs[0].drew;
		imgAudrey = audrey[3];
		imgJack = jack[3];
		imgEmily = emily[0];
		imgDrew = drew[0];
		bg = this.sceneArgs[1].jackRoom;
		graphik = this.sceneArgs[4];
	  dialogue = this.sceneArgs[2].sceneFour;
		dialogueIndex = 0;
		friendshipIndex = this.sceneArgs[3];
		if (windowHeight < (windowWidth/16) * 9) {
			scale = ((height / 9) * 16) / 1440;
			vScale = height / 900;
		} else {
			scale = width / 1440;
			vScale = ((width / 16) * 9) / 900;
		}
    background(bg);
		quitMsg = false;
	}

	// enter() happens after setup() but before draw()
	this.enter = function() {
		//scale = windowWidth / 1440;
		option = false;
		article = false;
		flashback = false;
		audrey = this.sceneArgs[0].audrey;
		jack = this.sceneArgs[0].jack;
		emily = this.sceneArgs[0].emily;
		drew = this.sceneArgs[0].drew;
		imgAudrey = audrey[3];
		imgJack = jack[3];
		imgEmily = emily[0];
		imgDrew = drew[0];
		bg = this.sceneArgs[1].jackRoom;
		graphik = this.sceneArgs[4];
		dialogue = this.sceneArgs[2].sceneFour;
		dialogueIndex = 0;
		friendshipIndex = this.sceneArgs[3];
		if (windowHeight < (windowWidth/16) * 9) {
			scale = ((height / 9) * 16) / 1440;
			vScale = height / 900;
		} else {
			scale = width / 1440;
			vScale = ((width / 16) * 9) / 900;
		}
		background(bg);
		quitMsg = false;
	}

	// This is the main drawing function - it will run constantly in a loop,
	// which is why we can update variables and create animation
  this.draw = function() {
		imgAudrey = audrey[audreyExpressions[dialogueIndex]];
		imgJack = jack[jackExpressions[dialogueIndex]];
		imgEmily = emily[emilyExpressions[dialogueIndex]];
		imgDrew = drew[drewExpressions[dialogueIndex]];
		var totalLength = dialogue.length;
		if (dialogueIndex >= totalLength - 1 || dialogue[dialogueIndex] == "OPTIONENDING") {
			this.sceneArgs[3] = 100;
			this.sceneManager.showNextScene(this.sceneArgs);
		}
		background(bg);
		textSize(32);
		if (dialogueIndex < 12 || dialogueIndex > 16) {
					this.drawAudrey();
					bg = this.sceneArgs[1].jackRoom;
		}
		this.drawJack();
		if (dialogueIndex > 11 && dialogueIndex < 17) {
			bg = this.sceneArgs[1].livingRoom;
			this.drawEmily();
			this.drawDrew();
		}
		if (option) {
			this.drawOption();
		} else if (article) {
			this.drawArticle();
		} else if (flashback) {
			this.drawFlashback();
		} else {
			this.drawText();
			this.drawFriendship();
		}
		if (friendshipIndex < 100 && dialogueIndex >= dialogue.length - 2) {
			friendshipIndex += 2;
		}
		if (quitMsg) {
			if (mouseX > 357 * scale && mouseX < 703 * scale) {
				cursor('pointer');
			} else if (mouseX > 737 * scale && mouseX < 1083 * scale) {
				cursor('pointer');
			} else {
				cursor('auto');
			}
			fill(0, 0, 0, 150);
			rect(0, 0, width, height);
			fill('#90B6E3');
			rect(324 * scale, 206 * vScale, 792 * scale, 488 * vScale, 30 * scale);
			fill('#AA4F55');
			rect(737 * scale, 553 * vScale, 346 * scale, 113 * vScale, 30 * scale);
			fill('#F8BA63');
			rect(357 * scale, 553 * vScale, 346 * scale, 113 * vScale, 30 * scale);
			fill(255);
			textFont(graphik.bold);
			textSize(60 * scale);
			textAlign(CENTER, CENTER)
			text("Confirmation", 496 * scale, 268 * vScale, 448 * scale, 72 * vScale);
			text("Yes", 437 * scale, 574 * vScale, 186 * scale, 72 * vScale);
			text("Cancel", 817 * scale, 574 * vScale, 186 * scale, 72 * vScale);
			textFont(graphik.regular);
			textSize(40 * scale);
			text("Are you sure you want to exit the game? \nYour game progress will not be saved.", 367 * scale, 405 * vScale, 726 * scale, 144 * vScale);
		}
  }

	this.drawAudrey = function() {
  	image(imgAudrey, 60 * scale, 40 * vScale, 646 * scale, 861 * vScale);
	}

	this.drawJack = function() {
  	image(imgJack, 828 * scale, 59 * vScale, 632 * scale, 841 * vScale);
	}

	this.drawEmily = function() {
		image(imgEmily, 302 * scale, 50 * vScale, 657 * scale, 876 * vScale);
	}

	this.drawDrew = function() {
		image(imgDrew, 1 * scale, 17 * vScale, 657 * scale, 885 * vScale);
	}

	this.drawText = function() {
		noStroke();
		// Background
		fill(255, 255, 255, 200);
		rect(0, 758 * vScale, 1440 * scale, 142 * vScale);
		// Currently speaking
		var speaker;
		var currFont = graphik.regular;
		switch(whoSpeaking[dialogueIndex]) {
			case 0:
				fill('#6D7488');
				speaker = "Narrator"
				break;
			case 1:
				fill('#843539');
				speaker = "Audrey"
				break;
			case 2:
				currFont = graphik.italic;
				fill('#843539');
				speaker = "Audrey"
				break;
			case 3:
				fill('#20252F');
				speaker = "Kate"
				break;
			case 4:
				fill('#30455D');
				speaker = "Drew"
				break;
			case 5:
				fill('#8FB7E5');
				speaker = "Emily"
				break;
			case 6:
				 fill('#EF8465');
				speaker = "Jack"
				break;
			default:
				fill('#843539');
				speaker = "Audrey"
				break;
		}
		rect(61 * scale, 797 * vScale, 180 * scale, 66 * vScale, 30);
		textSize(35 * scale);
		textStyle(BOLD);
		textFont(graphik.bold);
		fill(255);
		textAlign(CENTER, CENTER);
		text(speaker, 62 * scale, 795 * vScale, 180 * scale, 66 * vScale);

		// Dialogue
		textSize(25 * scale);
		textStyle(NORMAL);
		textFont(currFont);
		textAlign(LEFT, CENTER);
		fill(0);
		text(dialogue[dialogueIndex].substring(0,c), 316 * scale, 758 * vScale, 808 * scale, 142 * vScale);
		c += 5;
	}

	this.drawOption = function() {
		noStroke();
		// Background
		fill(255, 255, 255, 200);
		rect(0, 538 * vScale, 1440 * scale, 363 * vScale);

		// Question
		textSize(30 * scale);
		fill(0);
		textStyle(BOLD);
		textFont(graphik.bold);
		textAlign(CENTER, CENTER);
		text(dialogue[dialogueIndex + 1], 327 * scale, 552 * vScale, 758 * scale, 100 * vScale);

		//Options
		fill('#F7BA63');
		rect(89 * scale, 688 * vScale, 599 * scale, 162 * vScale, 50);
		fill('#9AB5E2');
		rect(756 * scale, 688 * vScale, 599 * scale, 162 * vScale, 50);
		fill(0)
		textSize(30 * scale);
		textAlign(CENTER, CENTER);
		textStyle(NORMAL);
		textFont(graphik.regular);
		text(dialogue[dialogueIndex + 2], 109 * scale, 688 * vScale, 559 * scale, 162 * vScale);
		text(dialogue[dialogueIndex + 3], 776 * scale, 688 * vScale, 559 * scale, 162 * vScale);
	}

	this.drawFlashback = function() {
		noStroke();
		// Background
		fill(255, 255, 255, 200);
		rect(0, 538 * vScale, 1440 * scale, 363 * vScale);

		// Question
		textSize(30 * scale);
		fill(0);
		textStyle(BOLD);
		textAlign(CENTER, CENTER);
		text("Earlier that day...", 235 * scale, 597 * vScale, 969 * scale, 112 * vScale);

		//Options
		fill('#9AB5E2');
		rect(574 * scale, 749 * vScale, 254 * scale, 99 * vScale, 50);
		fill(0)
		textAlign(CENTER, CENTER);
		textStyle(NORMAL);
		textFont(graphik.regular);
		text("Continue?", 574 * scale, 749 * vScale, 254 * scale, 99 * vScale);
	}

	this.drawArticle = function() {
		fill(255);
		rect(203 * scale, 95 * vScale, 1082 * scale, 606 * vScale, 30);
		textSize(25 * scale);
		textStyle(NORMAL);
		textFont(graphik.italic);
		textAlign(LEFT, TOP);
		fill(0);
		text(dialogue[dialogueIndex + 1], 275 * scale, 213 * vScale, 910 * scale, 625 * vScale);

		noStroke();
		// Background
		fill(255, 255, 255, 200);
		rect(0, 758 * vScale, 1440 * scale, 142 * vScale);
		// Currently speaking
		var speaker;
		speaker = "Source";
		fill('#F4A940');
		rect(61 * scale, 797 * vScale, 180 * scale, 66 * vScale, 30);
		textSize(35 * scale);
		textStyle(BOLD);
		textFont(graphik.bold);
		fill(255);
		textAlign(CENTER, CENTER);
		text(speaker, 62 * scale, 795 * vScale, 180 * scale, 66 * vScale);

		// Dialogue
		textSize(25 * scale);
		textStyle(NORMAL);
		textFont(graphik.italic);
		textAlign(LEFT, CENTER);
		fill(0);
		text(dialogue[dialogueIndex + 2], 316 * scale, 758 * vScale, 808 * scale, 142 * vScale);
		c += 5;
		this.drawFriendship();
	}

	this.drawFriendship = function() {
		textSize(20 * scale);
		fill(0);
		textAlign(CENTER, CENTER);
		text("Friendship Index", 1195 * scale, 785 * vScale, 180 * scale, 32 * vScale);
		strokeWeight(6);
		fill(255, 255, 255, 0);
		stroke('#AFAFAF');
		rect(1174 * scale, 825 * vScale, 221 * scale, 40 * vScale, 50);
		fill(2.5 * (100 - friendshipIndex) + 100, 2.5 * friendshipIndex, 100, 255);
		noStroke();
		rect(1182 * scale, 832 * vScale, 204 * (friendshipIndex/100) * scale, 26 * vScale, 50);
	}

	// Handles the mouse pressed event passed down by our scene manager
	// in the core code.
  this.mousePressed = function() {
		if (quitMsg) {
			if (mouseY > 553 * vScale && mouseY < 666 * vScale) {
				if (mouseX > 357 * scale && mouseX < 703 * scale) {
					window.location.href = "http://www.wetheantibody.com";
				} else if (mouseX > 737 * scale && mouseX < 1083 * scale) {
					quitMsg = false;
					cursor('auto');
				}
			}
		} else {
			var sentenceLength = dialogue[dialogueIndex].length;
			if (c >= 0 && c < sentenceLength && !option && !article && !flashback) {
				// Jump ahead if clicked while text is printing
				c = dialogue[dialogueIndex].length;
			} else {
				if (option) {
					if (mouseY > 688 * vScale && mouseY < 850 * vScale) {
						if (mouseX > 89 * scale && mouseX < 688 * scale) {
							// Option 1
							option = false;
							dialogueIndex = 12;
						}
						if (mouseX > 756 * scale && mouseX < 1355 * scale) {
							// Option 2
							option = false;
							dialogueIndex = 20;
						}
					}
				} else if (article) {
					article = false;
					dialogueIndex += 4;
				} else if (flashback) {
					if (mouseX > 574 * scale && mouseX < 828 * scale && mouseY > 749 * vScale && mouseY < 848 * vScale) {
						flashback = false;
						dialogueIndex += 1;
					}
				} else {
					dialogueIndex++;
					if (dialogue[dialogueIndex] == 'OPTION') {
						option = true;
					}
					if (dialogue[dialogueIndex] == 'ARTICLE') {
						article = true;
					}
					if (dialogue[dialogueIndex] == 'FLASHBACK') {
						bg = this.sceneArgs[1].livingRoom;
						flashback = true;
					}
					c = 0;
				}

			}

		}
  }

	this.keyPressed = function() {
	  if (keyCode === LEFT_ARROW) {
			if (dialogueIndex == 0) {
				this.sceneArgs[3] = 30;
				this.sceneManager.showScene(Scene3, this.sceneArgs);
			} else if (dialogue[dialogueIndex] == 'FLASHBACK') {
				bg = this.sceneArgs[1].jackRoom;
			} else {
				dialogueIndex--;
			}
	  } else if (keyCode === RIGHT_ARROW) {
	    dialogueIndex++;
	  } else if (keyCode === ESCAPE) {
			quitMsg = true;
		}
		if (dialogue[dialogueIndex] == 'FLASHBACK') {
			bg = this.sceneArgs[1].livingRoom;
			flashback = true;
		} else {
			flashback = false;
		}
		c = 0;
	}

	this.windowResized = function() {
		if (windowHeight < (windowWidth/16) * 9) {
			resizeCanvas((windowHeight/9) * 16, windowHeight);
			scale = ((height / 9) * 16) / 1440;
			vScale = height / 900;
		} else {
			resizeCanvas(windowWidth, (windowWidth/16) * 9);
			scale = width / 1440;
			vScale = ((width / 16) * 9) / 900;
		}
	}
}
// ================== SCENE 5 ==================
function Scene5() {
	var audrey;
	var drew;
	var emily;
	var jack;
	var phone;

	var bg;

	var c = 0; // Variable so we can print the dialogue out like a typewriter

  var textBoxAlpha = 0;

	var graphik;

  var dialogueIndex = 0;
  var dialogue;

	var friendshipIndex;

	var scale = 1;
	var vScale;

	var quitMsg;

	// Another reserved function, sets up our canvas
  this.setup = function() {
		audrey = this.sceneArgs[0].audrey;
		jack = this.sceneArgs[0].jack;
		drew = this.sceneArgs[0].drew;
		emily = this.sceneArgs[0].emily;
		kate = this.sceneArgs[0].kate;
		phone = this.sceneArgs[0].phone;
		bg = this.sceneArgs[1].livingRoom;
		graphik = this.sceneArgs[4];
	  dialogue = this.sceneArgs[2].sceneFive;
		friendshipIndex = this.sceneArgs[3];
		if (windowHeight < (windowWidth/16) * 9) {
			scale = ((height / 9) * 16) / 1440;
			vScale = height / 900;
		} else {
			scale = width / 1440;
			vScale = ((width / 16) * 9) / 900;
		}
    background(bg);
		quitMsg = false;
  }

	// enter() happens after setup() but before draw()
	this.enter = function() {
		//scale = windowWidth / 1440;
		audrey = this.sceneArgs[0].audrey;
		jack = this.sceneArgs[0].jack;
		drew = this.sceneArgs[0].drew;
		emily = this.sceneArgs[0].emily;
		kate = this.sceneArgs[0].kate;
		phone = this.sceneArgs[0].phone;
		bg = this.sceneArgs[1].livingRoom;
		graphik = this.sceneArgs[4];
		dialogue = this.sceneArgs[2].sceneFive;
		friendshipIndex = this.sceneArgs[3];
		if (windowHeight < (windowWidth/16) * 9) {
			scale = ((height / 9) * 16) / 1440;
			vScale = height / 900;
		} else {
			scale = width / 1440;
			vScale = ((width / 16) * 9) / 900;
		}
		background(bg);
		quitMsg = false;
	}

	// audreyRoom : loadImage('assets/Backgrounds/SVG/audrey_s room.svg'),
	// birdShelter :loadImage('assets/Backgrounds/SVG/bird shelter 2.svg'),
	// jackRoom : loadImage('assets/Backgrounds/SVG/jack_s room.svg'),
	// kitchen :loadImage('assets/Backgrounds/SVG/kitchen.svg'),
	// livingRoom : loadImage('assets/Backgrounds/SVG/living room.svg'),
	// start: loadImage('assets/IntroEnd/landing page.svg'),
	// end: loadImage('assets/IntroEnd/happy ending.svg'),
	// livingRoomIntroEnd: loadImage('assets/IntroEnd/livingRoomIntroEnd.svg'),
	// crashCourse: loadImage('assets/Backgrounds/SVG/crash course.svg'),
	// group: loadImage('assets/IntroEnd/group.svg');

	// This is the main drawing function - it will run constantly in a loop,
	// which is why we can update variables and create animation
  this.draw = function() {
		background(bg);
		if (dialogueIndex == 0) {
			image(drew[15], 50 * scale, 17 * vScale, 657 * scale, 885 * vScale);
			image(phone[2], 776 * scale, 105 * vScale, 440 * scale, 920 * vScale);
		}
		if (dialogueIndex == 1) {
			image(emily[12], 796 * scale, 50 * vScale, 657 * scale, 876 * vScale);
			image(phone[4], 165 * scale, 105 * vScale, 440 * scale, 920 * vScale);
		}
		if (dialogueIndex == 2) {
			bg = this.sceneArgs[1].birdShelter;
			image(jack[11], 240 * scale, 43 * vScale, 646 * scale, 860 * vScale);
			image(audrey[8], -51 * scale, 43 * vScale, 644 * scale, 857 * vScale);
			image(kate[6], 782 * scale, 24 * vScale, 658 * scale, 876 * vScale);
		}
		if (dialogueIndex == 3) {
			bg = this.sceneArgs[1].birdShelter;
			image(jack[11], 240 * scale, 43 * vScale, 646 * scale, 860 * vScale);
			image(audrey[4], -51 * scale, 43 * vScale, 644 * scale, 857 * vScale);
			image(kate[6], 782 * scale, 24 * vScale, 658 * scale, 876 * vScale);
		}
		if (dialogueIndex == 4) {
			bg = this.sceneArgs[1].end;
		}
		if (dialogueIndex < 5) {
			this.drawText();
			this.drawFriendship();
		} else {
			bg = this.sceneArgs[1].livingRoomIntroEnd;
			fill(255, 255, 255, 70);
			rect(0, 0, width, height);
			image(this.sceneArgs[1].group, 44 * scale, 170 * vScale, 792 * scale, 730 * vScale);
			textSize(45 * scale);
			textFont(graphik.bold);
			fill(0);
			textAlign(LEFT, CENTER);
			text("Thank you for helping us gain the antibody to the pandemic of fake news! We hope you enjoyed the journey too!", 932 * scale, 202 * vScale, 428 * scale, 460 * vScale);
			rect(932 * scale, 715 * vScale, 234 * scale, 74 * vScale, 65 * scale);
			fill(255);
			textAlign(CENTER, CENTER);
			text("Finish", 932 * scale, 715 * vScale, 234 * scale, 74 * vScale)
		}
		if (quitMsg) {
			if (mouseX > 357 * scale && mouseX < 703 * scale) {
				cursor('pointer');
			} else if (mouseX > 737 * scale && mouseX < 1083 * scale) {
				cursor('pointer');
			} else {
				cursor('auto');
			}
			fill(0, 0, 0, 150);
			rect(0, 0, width, height);
			fill('#90B6E3');
			rect(324 * scale, 206 * vScale, 792 * scale, 488 * vScale, 30 * scale);
			fill('#AA4F55');
			rect(737 * scale, 553 * vScale, 346 * scale, 113 * vScale, 30 * scale);
			fill('#F8BA63');
			rect(357 * scale, 553 * vScale, 346 * scale, 113 * vScale, 30 * scale);
			fill(255);
			textFont(graphik.bold);
			textSize(60 * scale);
			textAlign(CENTER, CENTER)
			text("Confirmation", 496 * scale, 268 * vScale, 448 * scale, 72 * vScale);
			text("Yes", 437 * scale, 574 * vScale, 186 * scale, 72 * vScale);
			text("Cancel", 817 * scale, 574 * vScale, 186 * scale, 72 * vScale);
			textFont(graphik.regular);
			textSize(40 * scale);
			text("Are you sure you want to exit the game? \nYour game progress will not be saved.", 367 * scale, 405 * vScale, 726 * scale, 144 * vScale);
		}
  }

	this.drawText = function() {
		noStroke();
		// Background
		fill(255, 255, 255, 200);
		rect(0, 758 * vScale, 1440 * scale, 142 * vScale);
		// Currently speaking
		fill('#6D7488');
		rect(61 * scale, 797 * vScale, 180 * scale, 66 * vScale, 30);
		textSize(35 * scale);
		textStyle(BOLD);
		textFont(graphik.bold);
		fill(255);
		textAlign(CENTER, CENTER);
		text("Narrator", 62 * scale, 795 * vScale, 180 * scale, 66 * vScale);

		// Dialogue
		textSize(25 * scale);
		textStyle(NORMAL);
		textFont(graphik.regular);
		textAlign(LEFT, CENTER);
		fill(0);
		text(dialogue[dialogueIndex].substring(0,c), 316 * scale, 758 * vScale, 808 * scale, 142 * vScale);
		c += 5;
	}

	this.drawFriendship = function() {
		textSize(20 * scale);
		fill(0);
		textAlign(CENTER, CENTER);
		text("Friendship Index", 1195 * scale, 785 * vScale, 180 * scale, 32 * vScale);
		strokeWeight(6);
		fill(255, 255, 255, 0);
		stroke('#AFAFAF');
		rect(1174 * scale, 825 * vScale, 221 * scale, 40 * vScale, 50);
		fill(2.5 * (100 - friendshipIndex) + 100, 2.5 * friendshipIndex, 100, 255);
		noStroke();
		rect(1182 * scale, 832 * vScale, 204 * (friendshipIndex/100) * scale, 26 * vScale, 50);
	}

	// Handles the mouse pressed event passed down by our scene manager
	// in the core code.
  this.mousePressed = function() {
		if (quitMsg) {
			if (mouseY > 553 * vScale && mouseY < 666 * vScale) {
				if (mouseX > 357 * scale && mouseX < 703 * scale) {
					window.location.href = "http://www.wetheantibody.com";
				} else if (mouseX > 737 * scale && mouseX < 1083 * scale) {
					quitMsg = false;
					cursor('auto');
				}
			}
		} else if (dialogueIndex == 5) {
			932 * scale, 715 * vScale, 234 * scale, 74 * vScale
			if (mouseX > 932 * scale && mouseX < 1166 * scale && mouseY > 715 * vScale && mouseY < 789 * vScale) {
				window.location.href = "http://www.wetheantibody.com";
			}
		} else {
			var sentenceLength = dialogue[dialogueIndex].length;
			if (c >= 0 && c < sentenceLength) {
				// Jump ahead if clicked while text is printing
				c = dialogue[dialogueIndex].length;
			} else {
				if (dialogueIndex < dialogue.length - 1) {
					dialogueIndex++;
				}
				c = 0;
			}
		}
  }

	this.keyPressed = function() {
	  if (keyCode === LEFT_ARROW) {
			if (dialogueIndex == 0) {
				this.sceneArgs[3] = 70;
				this.sceneManager.showScene(Scene4, this.sceneArgs);
			}
	    dialogueIndex--;
	  } else if (keyCode === RIGHT_ARROW) {
			if (dialogueIndex < dialogue.length - 1) {
				dialogueIndex++;
			}
	  } else if (keyCode === ESCAPE) {
			quitMsg = true;
		}
	}

	this.windowResized = function() {
		if (windowHeight < (windowWidth/16) * 9) {
			resizeCanvas((windowHeight/9) * 16, windowHeight);
			scale = ((height / 9) * 16) / 1440;
			vScale = height / 900;
		} else {
			resizeCanvas(windowWidth, (windowWidth/16) * 9);
			scale = width / 1440;
			vScale = ((width / 16) * 9) / 900;
		}
	}
}

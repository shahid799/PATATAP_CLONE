var Circles= [];
var keyData = {
	a: {
		sound: new Howl({
  		src: ['sounds/bubbles.mp3']
		}),
		color: '#1abc9c'
	},
	b: {
		sound: new Howl({
  		src: ['sounds/clay.mp3']
		}),
		color: '#2ecc71'
	},
	c: {
		sound: new Howl({
  		src: ['sounds/confetti.mp3']
		}),
		color: '#3498db'
	},
	d: {
		sound: new Howl({
  		src: ['sounds/corona.mp3']
		}),
		color: '#9b59b6'
	},
		e: {
		sound: new Howl({
  		src: ['sounds/dotted-spiral.mp3']
		}),
		color: '#34495e'
	},
	f: {
		sound: new Howl({
  		src: ['sounds/flash-1.mp3']
		}),
		color: '#16a085'
	},
	g: {
		sound: new Howl({
  		src: ['sounds/flash-2.mp3']
		}),
		color: '#27ae60'
	},
	h: {
		sound: new Howl({
  		src: ['sounds/flash-3.mp3']
		}),
		color: '#2980b9'
	},
	i: {
		sound: new Howl({
			src: ['sounds/glimmer.mp3']
		}),
		color: '#8e44ad'
	},
	j: {
		sound: new Howl({
  		src: ['sounds/moon.mp3']
		}),
		color: '#2c3e50'
	},
	k: {
		sound: new Howl({
  		src: ['sounds/pinwheel.mp3']
		}),
		color: '#f1c40f'
	},
	l: {
		sound: new Howl({
  		src: ['sounds/piston-1.mp3']
		}),
		color: '#e67e22'
	},
		m: {
		sound: new Howl({
  		src: ['sounds/piston-2.mp3']
		}),
		color: '#e74c3c'
	},
	n: {
		sound: new Howl({
  		src: ['sounds/prism-1.mp3']
		}),
		color: '#95a5a6'
	},
	o: {
		sound: new Howl({
  		src: ['sounds/prism-2.mp3']
		}),
		color: '#f39c12'
	},
	p: {
		sound: new Howl({
  		src: ['sounds/prism-3.mp3']
		}),
		color: '#d35400'
	},
	q: {
		sound: new Howl({
  		src: ['sounds/splits.mp3']
		}),
		color: '#1abc9c'
	},
	r: {
		sound: new Howl({
  		src: ['sounds/squiggle.mp3']
		}),
		color: '#2ecc71'
	},
	s: {
		sound: new Howl({
  		src: ['sounds/strike.mp3']
		}),
		color: '#3498db'
	},
	t: {
		sound: new Howl({
  		src: ['sounds/suspension.mp3']
		}),
		color: '#9b59b6'
	},
	u: {
		sound: new Howl({
  		src: ['sounds/timer.mp3']
		}),
		color: '#34495e'
	},
	v: {
		sound: new Howl({
  		src: ['sounds/ufo.mp3']
		}),
		color: '#16a085'
	},
	w: {
		sound: new Howl({
  		src: ['sounds/veil.mp3']
		}),
		color: '#27ae60'
	},
	x: {
		sound: new Howl({
  		src: ['sounds/wipe.mp3']
		}),
		color: '#2980b9'
	},
	y: {
		sound: new Howl({
			src: ['sounds/zig-zag.mp3']
		}),
		color: '#8e44ad'
	},
	z: {
		sound: new Howl({
  		src: ['sounds/moon.mp3']
		}),
		color: '#2c3e50'
	}
}
function onKeyDown(event) {
    if(keyData[event.key]){
        var maxPoint = new Point(view.size.width, view.size.height);
        var randonPoint = Point.random();
        var point = maxPoint * randonPoint;
        var newcircle = new Path.Circle(point,500);
        newcircle.fillColor = keyData[event.key].color
        keyData[event.key].sound.play();
        Circles.push(newcircle);

    }
}

function onFrame(event){
    for(var i=0; i< Circles.length; i++){
        Circles[i].fillColor.hue +=1;
        Circles[i].scale(.9);
    }
}
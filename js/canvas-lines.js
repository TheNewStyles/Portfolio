  console.log('Hello there.\n  \nMail: tyler.peterson@utah.edu\nline Telephone: 435-790-9724\nWeb: github.io/thenewstyles');

  var mouseX = 0,
      mouseY = 0,
      SEPARATION = 200,
      AMOUNTX = 10,
      AMOUNTY = 10,
      camera,
      scene,
      renderer;
  
  init();
  animate();

	function init() {

  	var container,
        separation = 200,
        amountX = 10,
        amountY = 10,
        particle;
    
    aboutMeHeight = document.getElementById('about-me').clientHeight;
    aboutMeWidth = document.getElementById('about-me').clientWidth;
    container = document.getElementById('threejs');    
    windowHalfX = aboutMeWidth / 2;
    windowHalfY = aboutMeHeight / 2;
    innerContainer = document.createElement('div');
    container.appendChild(innerContainer);

    scene = new THREE.Scene();

    renderer = new THREE.CanvasRenderer( { alpha: true }); // gradient; this can be swapped for WebGLRenderer
    renderer.setSize(  aboutMeWidth, aboutMeHeight);
    container.appendChild( renderer.domElement );
    

    camera = new THREE.PerspectiveCamera(
    	25,
      window.innerWidth / window.innerHeight,
      1,
      10000
    );
    camera.position.z = 100;

		// particles
    var PI2 = Math.PI * 2;
    
    var material = new THREE.SpriteCanvasMaterial( {

    	color: 0xffffff,
    	program: function ( context ) {
				context.beginPath();
        context.arc( 0, 0, 0.5, 0, PI2, true );
        context.fill();
      }
    });
    
    var geometry = new THREE.Geometry();

    for ( var i = 0; i < 50; i ++ ) {
      particle = new THREE.Sprite( material );
      particle.position.x = Math.random() * 2 - 1;
      particle.position.y = Math.random() * 2 - 1;
      particle.position.z = Math.random() * 2 - 1;
      particle.position.normalize();
      particle.position.multiplyScalar( Math.random() * 10 + 450 );
      particle.scale.x = particle.scale.y = 10;
      scene.add( particle );
      geometry.vertices.push( particle.position );
    }

    // lines

    var line = new THREE.Line( geometry, new THREE.LineBasicMaterial( { color: 0xffffff, opacity: 0.5 } ) );
    scene.add( line );
		
 		window.addEventListener( 'resize', onWindowResize, false );

	} // end init();

	function onWindowResize() {

  	windowHalfX = aboutMeWidth / 2;
    windowHalfY = aboutMeHeight / 2;

    camera.aspect = aboutMeWidth / aboutMeHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( aboutMeWidth, aboutMeHeight );

	}

  var el = document.getElementById('split');

//mouse over split div to move lines
 el.addEventListener('mousemove', function(){

  	mouseX = event.clientX - windowHalfX;
    mouseY = event.clientY - windowHalfY;

  });

  el.addEventListener('touchstart', function(){
  
    if ( event.touches.length > 1 ){
      event.preventDefault();
      mouseX = event.touches[ 0 ].pageX - windowHalfX;
      mouseY = event.touches[ 0 ].pageY - windowHalfY;
    }

  });

 el.addEventListener('touchmove', function(){
  
    if ( event.touches.length == 1 ){
      event.preventDefault();
      mouseX = event.touches[ 0 ].pageX - windowHalfX;
      mouseY = event.touches[ 0 ].pageY - windowHalfY;
    }

  });


	function animate() {
    
		requestAnimationFrame( animate );
    render();
    
	}

	function render() {
		
    camera.position.x += ( mouseX - camera.position.x ) * .01;
    camera.position.y += ( - mouseY + 200 - camera.position.y ) * .01;
    camera.lookAt( scene.position );
    renderer.render( scene, camera );
  
  }




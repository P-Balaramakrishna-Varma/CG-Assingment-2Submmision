import * as THREE from 'three';
import { OrbitControls } from '../node_modules/three/examples/jsm/controls/OrbitControls.js';
import { Water } from '../node_modules/three/examples/jsm/objects/Water.js';
import { Sky } from '../node_modules/three/examples/jsm/objects/Sky.js';
import {make_responsive}from './miscellaneous/MakeResponsive.js'





const canvas = document.querySelector('#c');
const renderer = new THREE.WebGLRenderer({canvas});

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 55, window.innerWidth / window.innerHeight, 1, 20000 );
camera.position.set( 30, 30, 100 ); //I moving camera
const controls = new OrbitControls( camera, renderer.domElement );
controls.update();






const parameters = {
	elevation: 66,
	azimuth: -98.8
};
let sun = new THREE.Vector3();

const phi = THREE.MathUtils.degToRad( 90 - parameters.elevation );
const theta = THREE.MathUtils.degToRad( parameters.azimuth );
sun.setFromSphericalCoords( 1, phi, theta );







// Water sun and postion_x, y z

const waterGeometry = new THREE.PlaneGeometry( 10000, 10000 );

const water = new Water(
	waterGeometry,
	{
		textureWidth: 512,
		textureHeight: 512,
		waterNormals: new THREE.TextureLoader().load( 'http://localhost:8080/src/Resources/waternormals.jpg', function ( texture ) {

			texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

		} ),
		sunDirection: new THREE.Vector3(),
		sunColor: 0xffffff,
		waterColor: 0x001e0f,
		distortionScale: 3.7,
		fog: scene.fog !== undefined
	}
);

water.material.uniforms[ 'sunDirection' ].value.copy( sun ).normalize();
water.rotation.x = - Math.PI / 2;
//console.log(water.position.x, water.position.y, water.position.z)
scene.add(water);




// Skybox scale and sun

const sky = new Sky();
sky.scale.setScalar( 10000 );

const skyUniforms = sky.material.uniforms;

skyUniforms[ 'turbidity' ].value = 10;
skyUniforms[ 'rayleigh' ].value = 2;
skyUniforms[ 'mieCoefficient' ].value = 0.005;
skyUniforms[ 'mieDirectionalG' ].value = 0.8;
skyUniforms[ 'sunPosition' ].value.copy( sun );

scene.add(sky);

const pmremGenerator = new THREE.PMREMGenerator( renderer );
scene.environment = pmremGenerator.fromScene( sky ).texture;







function animate() {
	requestAnimationFrame( animate );
	water.material.uniforms[ 'time' ].value += 1.0 / 60.0;

	controls.update()
	make_responsive(renderer, camera);
	renderer.render( scene, camera );
}

animate();
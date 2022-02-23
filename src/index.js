//Imporing
import * as THREE from 'three';

import { OrbitControls } from '../node_modules/three/examples/jsm/controls/OrbitControls.js';
import { Water } from '../node_modules/three/examples/jsm/objects/Water.js';
import { Sky } from '../node_modules/three/examples/jsm/objects/Sky.js';

import {make_responsive}from './miscellaneous/MakeResponsive.js'
import * as Init from './Initialzing.js'



//Basic setup
const canvas = document.querySelector('#c');
const renderer = new THREE.WebGLRenderer({canvas});

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 55, window.innerWidth / window.innerHeight, 1, 20000 );
camera.position.set( 30, 30, 100 ); //I moving camera
const controls = new OrbitControls( camera, renderer.domElement );
controls.update();



//Sun's location
const parameters = {
	elevation: 66,
	azimuth: -98.8
};

const sun = Init.CreateSun(parameters)




//Making the scene
const water = Init.CreateWater(sun, 0, 0, 0, scene);
scene.add(water);

const sky = Init.CreateSky(sun, 0, 0, 0);
scene.add(sky);


function animate() {
	requestAnimationFrame( animate );
	water.material.uniforms[ 'time' ].value += 1.0 / 60.0;

	controls.update()
	make_responsive(renderer, camera);
	renderer.render( scene, camera );
}

animate();
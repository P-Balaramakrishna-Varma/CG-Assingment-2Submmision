//Imporing
import * as THREE from 'three';
import { OrbitControls } from '../node_modules/three/examples/jsm/controls/OrbitControls.js';
import { Water } from '../node_modules/three/examples/jsm/objects/Water.js';
import { Sky } from '../node_modules/three/examples/jsm/objects/Sky.js';


import {make_responsive}from './miscellaneous/MakeResponsive.js'
import * as Init from './Initialzing.js'
import * as Load from './CreateModels.js'
import * as Classes from './Classes.js'
import * as Models from './LoadModels.js'
import * as Key_board from './Keyboard.js'
import * as Cam from './Camera.js'
import * as ColRan from './miscellaneous/RandomLocation_Collsion.js'
import { Collision_Player_tressure } from './Collision.js';
import { UpdatePostion_Boat } from './Enemy_boat_mv.js'

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}




//Basic setup
Key_board.Keyboard_init()

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



//Some setup for scene
const pmremGenerator = new THREE.PMREMGenerator( renderer );
scene.environment = pmremGenerator.fromScene( sky ).texture;




Models.Init()
await(sleep(3000))

Load.Create_Object("Player", "Player")
scene.add(Load.player_ship.Object)

var A = ColRan.Random()
var Mod = new Classes.ModelMatrix(A.x, 0, A.z, 0, 1)
Load.Create_Object(Mod, "tressure")
scene.add(Load.Tressure_Boxes[0].Object)

var A = ColRan.Random()
var Mod = new Classes.ModelMatrix(300, 0, 400, 0, 1)
Load.Create_Object(Mod, "Enemy")
scene.add(Load.Enemy_Ships[0].Object)


//Cam.UpdateCamera(camera, Load.player_ship.Object.position, Load.player_ship.Object.rotation.y)


function animate() {
	requestAnimationFrame( animate );

	var Key = Key_board.Get_Last_KeyPress()
	Load.player_ship.move(Key)
	UpdatePostion_Boat(Load.player_ship)

/* 	if(Math.random() < 0.001 * 2) //2o's
	{
		A = ColRan.Random()
		Mod = new Classes.ModelMatrix(A.x, 0, A.z, 0, 1)
		Load.Create_Object(Mod, "tressure")
		scene.add(Load.Tressure_Boxes[Load.Tressure_Boxes.length - 1].Object)
	}

	Collision_Player_tressure(scene)
	 */
	
 	/*if(Math.random() < 0.001 * 2) //2o's
	{
		A = ColRan.Random()
		Mod = new Classes.ModelMatrix(A.x, 0, A.z, 0, 1)
		Load.Create_Object(Mod, "Enemy")
		scene.add(Load.Enemy_Ships[Load.Enemy_Ships.length - 1].Object)
	}*/


	


	//Cam.UpdateConfig(Key)
	//Cam.UpdateCamera(camera, Load.player_ship.Object.position, Load.player_ship.Object.rotation.y)


	//console.log(camera.position)

	water.material.uniforms[ 'time' ].value += 1.0 / 60.0;
	controls.update()
	make_responsive(renderer, camera);
	renderer.render( scene, camera );
}

animate();
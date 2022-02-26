import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

var Player_model
var Enemy_model
var Treasure_model
var Cannon_model
var Initialized = false


function Progess( xhr )
{
   console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
}

function Error_P(error)
{
    console.log( 'An error happened' );
}


function Init_player() 
{
    var loader = new GLTFLoader();

    loader.load(
        'http://localhost:8080/src/Resources/PlayerShip/scene.gltf',
        function ( gltf ) 
        {
            Player_model = gltf.scene
        },
        Progess,
        Error_P
    );   

    loader = null
    console.log(Player_model == undefined)
}

function Init_Tressure()
{
    var loader = new GLTFLoader();

    loader.load(
        'http://localhost:8080/src/Resources/treasure/scene.gltf',
        function ( gltf ) 
        {
            Treasure_model = gltf.scene
        },
        Progess,
        Error_P
    );   

    loader = null
    console.log(Treasure_model == undefined)
}


function Init_Enemy()
{
    var loader = new GLTFLoader();

    loader.load(
        'http://localhost:8080/src/Resources/EnemyShip/scene.gltf',
        function ( gltf ) 
        {
            Enemy_model = gltf.scene
        },
        Progess,
        Error_P
    );   

    loader = null
    console.log(Enemy_model == undefined)
}

function Init_Cannon()
{
    const geometry = new THREE.SphereGeometry();
    const material = new THREE.MeshPhongMaterial({color: 0x44aa88});
    Cannon_model = new THREE.Mesh( geometry, material );
}

//If not intialized intialieze
function Init()
{
    if(Initialized == false)
    {
        Init_player()
        Init_Tressure()
        Init_Enemy()
        Init_Cannon()
        Initialized = true
    }
}



export {Init, Player_model, Enemy_model, Treasure_model, Cannon_model}

//In main only call initial-lize function and a sleep
//This module provides the loaded models of Player Enemy and tressure
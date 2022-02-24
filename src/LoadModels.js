import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

var Player_model
var Enemy_model
var Treasure_model
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

function Initi_Tressure()
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


//If not intialized intialieze
function Init()
{
    if(Initialized == false)
    {
        Init_player()
        Initi_Tressure()
        Initialized = true
    }
}



export {Init, Player_model, Enemy_model, Treasure_model}

//In main only call initial-lize function and a sleep
//This module provides the loaded models of Player Enemy and tressure
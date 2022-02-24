//This file is used to create new objects in the scence
import * as THREE from 'three';
import * as Classes from './Classes.js' 
import * as Models from './LoadModels'


var Enemy_Ships = []
var Tressure_Boxes = []
var player_ship



async function LoadPalyer()
{
    player_ship = new Classes.Player_Ship(Models.Player_model)
}


function Create_Object(ModelMat, What)
{
    if (What == "Player")
        LoadPalyer()
    else
        console.log("Error Object entered to be created\n");
}


export {Enemy_Ships, Tressure_Boxes, player_ship, Create_Object}
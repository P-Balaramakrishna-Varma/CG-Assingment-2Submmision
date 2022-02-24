//This file is used to create new objects in the scence
import * as THREE from 'three';
import * as Classes from './Classes.js' 
import * as Models from './LoadModels'


var Enemy_Ships = []
var Tressure_Boxes = []
var player_ship



function LoadPalyer()
{
    player_ship = new Classes.Player_Ship(Models.Player_model)
}

function MakeTressure(ModelMat)
{
    var CloneObject = Models.Treasure_model.clone()
    ModelMat.Populate(CloneObject)

    var tressure_box = new Classes.Tressure_Box(CloneObject)
    Tressure_Boxes.push(tressure_box)
}


function Create_Object(ModelMat, What)
{
    if (What == "Player")
        LoadPalyer()
    else if (What == "tressure")
        MakeTressure(ModelMat)
    else
        console.log("Error Object entered to be created\n");
}


export {Enemy_Ships, Tressure_Boxes, player_ship, Create_Object}
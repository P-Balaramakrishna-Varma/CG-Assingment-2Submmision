import * as THREE from 'three';
import * as Create from './CreateModels.js'
import * as ColRand from './miscellaneous/RandomLocation_Collsion.js'
import * as DashBoard from './Dashboard.js'

function Collision_Player_tressure(scene)
{
    for(let i = 0; i < Create.Tressure_Boxes.length; i++)
    {
        if(Create.Tressure_Boxes[i].Alive == true)
            if(ColRand.Collides(Create.player_ship.Object, Create.Tressure_Boxes[i].Object) == true)
            {
                scene.remove(Create.Tressure_Boxes[i].Object)
                Create.Tressure_Boxes[i].Alive = false
                DashBoard.IncreaseTressure()
            }
    }
}


export {Collision_Player_tressure}

//future update cleaning the array
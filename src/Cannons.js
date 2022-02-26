import * as Models from './LoadModels.js'
import * as classes from './Classes'
import * as Loaded from './CreateModels'
import {Collides} from './miscellaneous/RandomLocation_Collsion.js'

var Cannons_P = []


function MakeCannon_Player(Player_Ship, scene)
{
  var Con_vel = {}


  var PShipPos = Player_Ship.Object.position
  var ModelMat = new classes.ModelMatrix(PShipPos.x, 10, PShipPos.z, 1)

  var CloneObject = Models.Cannon_model.clone()
  ModelMat.Populate(CloneObject)
  CloneObject.scale.set(2, 2, 2)

  Con_vel.vx = - 2 * Math.sin(Player_Ship.Object.rotation.y - Math.PI)
  Con_vel.vz = - 2 * Math.cos(Player_Ship.Object.rotation.y - Math.PI)
  Con_vel.Object = CloneObject
  Con_vel.Alive = true
  Cannons_P.push(Con_vel)
  scene.add(Con_vel.Object)
}

function move_cannons()
{
  for(var i = 0; i < Cannons_P.length; i++)
  {
    Cannons_P[i].Object.position.x += Cannons_P[i].vx
    Cannons_P[i].Object.position.z += Cannons_P[i].vz
  }
}

function EnemyDistruction(scene)
{
  for(var i = 0; i < Cannons_P.length; i++)
    if(Cannons_P[i].Alive == true)
      for(var j = 0; j < Loaded.Enemy_Ships.length; j++)
        if(Loaded.Enemy_Ships[j].Alive == true)
        {
          console.log("Working")
          if(Collides(Loaded.Enemy_Ships[j].Object, Cannons_P[i].Object) == true)
          {
            scene.remove(Cannons_P[i].Object)
            Cannons_P[i].Alive = false
            Loaded.Enemy_Ships[j].Health -= 1
            if(Loaded.Enemy_Ships[j].Health <= 0)
            {
              Loaded.Enemy_Ships.Alive = false
              scene.remove(Loaded.Enemy_Ships[j].Object) 
            }
          }
        }
}

export {MakeCannon_Player, move_cannons, EnemyDistruction}
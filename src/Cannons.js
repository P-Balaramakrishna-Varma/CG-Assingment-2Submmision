import * as Models from './LoadModels.js'
import * as classes from './Classes'
import * as Loaded from './CreateModels'
import {Collides} from './miscellaneous/RandomLocation_Collsion.js'

var Cannons_P = []
var Cannons_E = []


function MakeCannon_Player(Player_Ship, scene)
{
  var Con_vel = {}


  var PShipPos = Player_Ship.Object.position
  var ModelMat = new classes.ModelMatrix(PShipPos.x, 10, PShipPos.z, 1)

  var CloneObject = Models.Cannon_model.clone()
  ModelMat.Populate(CloneObject)
  CloneObject.scale.set(2, 2, 2)

  Con_vel.vx = - 3 * Math.sin(Player_Ship.Object.rotation.y - Math.PI)
  Con_vel.vz = - 3 * Math.cos(Player_Ship.Object.rotation.y - Math.PI)
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

  for(var i = 0; i < Cannons_E.length; i++)
  {
    Cannons_E[i].Object.position.x += Cannons_E[i].vx
    Cannons_E[i].Object.position.z += Cannons_E[i].vz
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

function Player_Distruction(scene)
{
  if(Loaded.player_ship.Alive == false)
    return
  
  for(var i = 0; i < Cannons_E.length; i++)
  {
    if(Cannons_E[i].Alive == true)
    {
      if(Collides(Loaded.player_ship.Object, Cannons_E[i].Object))
      {
        scene.remove(Cannons_E[i].Object)
        Cannons_E[i].Alive = false

        Loaded.player_ship.Health -= 1 
        console.log(Loaded.player_ship.Health)
        console.log("\n")

        if(Loaded.player_ship.Health <= 0)
          Loaded.player_ship.Alive = false
      }
    }
  }
}

function MakeCannon_Enemy(Enemy_ship, scene)
{
  var Con_vel = {}


  var PShipPos = Enemy_ship.Object.position
  var ModelMat = new classes.ModelMatrix(PShipPos.x, 10, PShipPos.z, 1)

  var CloneObject = Models.Cannon_model.clone()
  ModelMat.Populate(CloneObject)
  CloneObject.scale.set(2, 2, 2)

  if(Loaded.player_ship.Object.position.z < Enemy_ship.Object.position.z)
  {
    Con_vel.vx = - 2 * Math.sin(Enemy_ship.Object.rotation.y + Math.PI)
    Con_vel.vz = - 2 * Math.cos(Enemy_ship.Object.rotation.y + Math.PI)
  }
  else
  {
    Con_vel.vx = - 2 * Math.sin(Enemy_ship.Object.rotation.y + Math.PI/2)
    Con_vel.vz = - 2 * Math.cos(Enemy_ship.Object.rotation.y + Math.PI/2)
  }
 


  Con_vel.Object = CloneObject
  Con_vel.Alive = true
  Cannons_E.push(Con_vel)
  scene.add(Con_vel.Object)
}

function EnemyAttack(scene)
{
  for(var i = 0; i < Loaded.Enemy_Ships.length; i++)
  {
    if(Loaded.Enemy_Ships[i].Alive == true && Math.random() < 0.02)
    {
      MakeCannon_Enemy(Loaded.Enemy_Ships[i], scene)
    }
  }
}

export {MakeCannon_Player, move_cannons, EnemyDistruction, EnemyAttack, Player_Distruction}
import * as Models from './LoadModels.js'
import * as classes from './Classes'

var Cannons_P = []


function MakeCannon_Player(Player_Ship, scene)
{
  var Con_vel = {}


  var PShipPos = Player_Ship.Object.position
  var ModelMat = new classes.ModelMatrix(PShipPos.x, 15, PShipPos.z, 1)

  var CloneObject = Models.Cannon_model.clone()
  ModelMat.Populate(CloneObject)
  CloneObject.scale.set(2, 2, 2)

  Con_vel.vx = - 2 * Math.sin(Player_Ship.Object.rotation.y - Math.PI)
  Con_vel.vz = - 2 * Math.cos(Player_Ship.Object.rotation.y - Math.PI)
  Con_vel.Object = CloneObject
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

export {MakeCannon_Player, move_cannons}
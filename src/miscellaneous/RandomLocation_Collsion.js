//Fucntion to find two objects collide
//Function to Get a random location
import * as THREE from '../../node_modules/three/build/three.module.js';

function Random()
{
    //Getting radius
    var radius = Math.random() * 800
    while(radius < 80)
        radius = Math.random() * 800

    //rand*500 > 50
    var ang = Math.random() * 2 * Math.PI 

    var xv = radius * Math.sin(ang)
    var zv = radius * Math.cos(ang)

    return {
        x: xv,
        z: zv
    }
}

function Collides(Object1, Object2)
{
    const box1 = new THREE.Box3().setFromObject(Object1);
    const box2 = new THREE.Box3().setFromObject(Object2);

    if(box1.intersectsBox(box2) == true)
    {
       console.log("Intersection workding")
       return true; 
    }
    else
        return false;
}

export {Random, Collides}
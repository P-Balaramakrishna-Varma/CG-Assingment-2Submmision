//Fucntion to find two objects collide
//Function to Get a random location
import * as THREE from '../../node_modules/three/build/three.module.js';

function Random()
{
    //Getting radius
    var radius = Math.random() * 500
    while(radius < 50)
        radius = Math.random() * 500

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
    const box1 = new THREE.Box3();
    const box2 = new THREE.Box3();

    Object1.geometry.computeBoundingBox();
    Object2.geometry.computeBoundingBox();

    // in the animation loop, compute the current bounding box with the world matrix
    box1.copy( Object1.geometry.boundingBox ).applyMatrix4( Object1.matrixWorld );
    box1.copy( Object2.geometry.boundingBox ).applyMatrix4( Object2.matrixWorld );

    if(box1.intersect(box2) == true)
       return true; 
    else
        return false;
}

export {Random, Collides}
import * as THREE from 'three';

import { Water } from '../node_modules/three/examples/jsm/objects/Water.js';
import { Sky } from '../node_modules/three/examples/jsm/objects/Sky.js';


function CreateSun(parameters)
{
    var sun = new THREE.Vector3();

    const phi = THREE.MathUtils.degToRad( 90 - parameters.elevation );
    const theta = THREE.MathUtils.degToRad( parameters.azimuth );
    sun.setFromSphericalCoords( 1, phi, theta );    

    return sun
}



function CreateWater(sun, position_x, position_y, position_z, scene)
{
    const waterGeometry = new THREE.PlaneGeometry( 10000, 10000 );

    var water = new Water(
        waterGeometry,
        {
            textureWidth: 512,
            textureHeight: 512,
            waterNormals: new THREE.TextureLoader().load( 'http://localhost:8080/src/Resources/waternormals.jpg', function ( texture ) {

                texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

            } ),
            sunDirection: new THREE.Vector3(),
            sunColor: 0xffffff,
            waterColor: 0x001e0f,
            distortionScale: 3.7,
            fog: scene.fog !== undefined
        }
    );

    water.material.uniforms[ 'sunDirection' ].value.copy( sun ).normalize();

    water.rotation.x = - Math.PI / 2;

    water.position.x = position_x;
    water.position.y = position_y;
    water.position.z = position_z;

    return water
}



function CreateSky(sun, position_x, position_y, position_z)
{
    var sky = new Sky();
    sky.scale.setScalar( 10000 );

    const skyUniforms = sky.material.uniforms;

    skyUniforms[ 'turbidity' ].value = 10;
    skyUniforms[ 'rayleigh' ].value = 2;
    skyUniforms[ 'mieCoefficient' ].value = 0.005;
    skyUniforms[ 'mieDirectionalG' ].value = 0.8;
    skyUniforms[ 'sunPosition' ].value.copy( sun );

    sky.position.x = position_x;
    sky.position.y = position_y;
    sky.position.z = position_z;

    return sky
}


export {CreateSun, CreateWater, CreateSky}
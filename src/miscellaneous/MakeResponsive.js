import * as THREE from '../../node_modules/three/build/three.module.js';

function make_responsive(renderer, camera)
{
	const canvas = renderer.domElement;
	camera.aspect = canvas.clientWidth / canvas.clientHeight;
	camera.updateProjectionMatrix();

	const width = canvas.clientWidth;
	const height = canvas.clientHeight;
	const needResize = canvas.width !== width || canvas.height !== height;
	if (needResize) {
		renderer.setSize(width, height, false);
	}
}

export {make_responsive}
//Use this function along with css to make game responsive
//Input camera adjusts the frustrum
//Sufficient to update before rendering.
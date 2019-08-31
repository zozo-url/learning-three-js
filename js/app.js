let container;
let camera;
let renderer;
let scene;
let mesh;

function init(){
    //set up
    container = document.querySelector( '#scene-container')
    //scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x8FBCD4)
    //camera
    const fov = 35; // field of view
    const aspect = container.clientWidth / container.clientHeight
    const near = 0.1; // the near clipping plane
    const far = 100; // the far clipping plane
    camera = new THREE.PerspectiveCamera( fov, aspect, near, far)
    //x,y,z positions
    camera.position.set( 0, 0, 10 );
    //make geometry
    const geometry = new THREE.BoxBufferGeometry(2,2,2);
    //make material
    const material = new THREE.MeshStandardMaterial({color: 0x8000080});
    //combine 4 mesh
    mesh = new THREE.Mesh (geometry, material);
    //add to scene
    scene.add(mesh);

    //create a directional light
    const light = new THREE.DirectionalLight(0xffffff, 5.0)
    //move light back and up a bit
    light.position.set(10,10,10);
    //add light to scene
    scene.add(light);
    //set up renderer
    renderer = new THREE.WebGLRenderer({antialias: true})
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio)
    //add rendered <canvas> element to page
    container.appendChild(renderer.domElement)
}

function animate() {
    //call animate recursively 
    requestAnimationFrame( animate );

      // increase the mesh's rotation each frame
    mesh.rotation.z += 0.01;
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;

    // render, or 'create a still image', of the scene
    renderer.render( scene, camera );
}

init();
animate();
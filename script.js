// Inicjalizacja sceny Three.js
let scene, camera, renderer;

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5; // Ustawienie kamery

    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Sfera jako tło
    const geometry = new THREE.SphereGeometry(3, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0x0077ff, wireframe: true });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    function animate() {
        requestAnimationFrame(animate);
        sphere.rotation.y += 0.01; // Rotacja sfery
        renderer.render(scene, camera);
    }

    animate();
}

// Uaktualnienie widoku po zmianie rozmiaru okna
window.addEventListener('resize', function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

init();

// Funkcje do animacji miniatur wideo
function hoverEffect(element) {
    element.style.transform = 'scale(1.1)'; // Powiększenie podczas hover
}

function resetEffect(element) {
    element.style.transform = 'scale(1)'; // Resetowanie rozmiaru
}


let scene, camera, renderer;

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5; // Ustawienie kamery

    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight); // Rozszerzenie renderera na całe okno
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

function hoverEffect(video) {
    video.style.transform = 'scale(1.05)'; // Powiększenie wideo na hover
}

function resetEffect(video) {
    video.style.transform = 'scale(1)'; // Resetowanie efektu powiększenia
}

// Obsługuje zmianę rozmiaru okna
window.addEventListener('resize', function () {
    const width = window.innerWidth;
    const height = window.innerHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
});

// Wywołanie inicjalizacji
init();


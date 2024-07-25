document.addEventListener('DOMContentLoaded', () => { 

    // Three.js 3D space background setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    function addStar() {
        const colors = [0xffffff, 0xffcc66, 0xff6666, 0x6699ff];
        const color = colors[Math.floor(Math.random() * colors.length)];
        const geometry = new THREE.SphereGeometry(0.1, 24, 24);
        const material = new THREE.MeshBasicMaterial({ color: color });
        const star = new THREE.Mesh(geometry, material);
        const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(300));
        star.position.set(x, y, z);
        scene.add(star);
    }

    Array(1200).fill().forEach(addStar);

    function animate() {
        requestAnimationFrame(animate);
        camera.rotation.x += 0.0005;
        camera.rotation.y += 0.0005;
        renderer.render(scene, camera);
    }

    camera.position.z = 0;
    animate();

    window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    });

    window.addEventListener('scroll', () => {
        const t = document.body.getBoundingClientRect().top;
        camera.position.z = t * -0.05;
        camera.position.x = t * -0.0002;
        camera.position.y = t * -0.0002;
    });
});

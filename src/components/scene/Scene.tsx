import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import computer from '../../assets/computer.glb';
import './Scene.scss';

// Scene Component for the opening scene

// Background colours can be changed in Scene.scss by changing the background colour of the .scene-background class
// Computer screen colour can only be changed by changing the 3d model in blender
// Text colours can be changed in Scene.scss by changing the colour of the .scene-logo-text and .scene-begin-text classes

interface SceneProps {
    width: number;
    height: number;
    setInScene: any;
}

const Scene: React.FC<SceneProps> = ({ width, height, setInScene }) => {

    const canvasRef = useRef<HTMLCanvasElement>(null);

    var zoom = false;

    useEffect(() => {
        if (canvasRef.current) {

            var cameraZ = 0.45;

            let isTyping = true;
            let isText = false;

            const scene = new THREE.Scene();

            const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
            camera.position.setZ(0.45);

            const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(width, height);

            const pointLight = new THREE.PointLight(0xffffff, 1);
            pointLight.position.set(0, 0.3, 1);
            scene.add(pointLight);

            // Add orbit controls
            // const controls = new OrbitControls(camera, renderer.domElement);

            // set the background of the canvas to transparent
            renderer.setClearColor(0x000000, 0);
           
            // If the user clicks or presses a key, zoom in to the screen
            const handlezoom = () => {
                if (!isTyping){
                    zoom = true;
                }
            };
            window.addEventListener('keypress', handlezoom);
            canvasRef.current.addEventListener('click', handlezoom);

            // Load the computer .glb file into the scene
            const loader = new GLTFLoader();
            loader.load(computer, (computer: any) => {

                computer.scene.position.set(0, -0.2935, 0);

                computer.scene.scale.set(1.2,1, 1);

                scene.add(computer.scene);

            }, () => {
                console.log("Object in scene")
            });

            // Typing Animation Declearations
            // Logo represents the main text
            // Begin represents the smaller text below the logo
            let i: number = 0;
            let j: number = 16;
            const txt = 'Hack the Burgh\n2024\nPress any key to begin...';
            const sceneBeginTextElement = document.getElementById("scene-begin-text");
            const sceneLogoElement = document.getElementById("scene-logo-text");

            // Remove the text from the screen to begin with
            if (sceneLogoElement && sceneBeginTextElement){
                sceneLogoElement.innerHTML = "";
                sceneBeginTextElement.innerHTML = "";
            }

            // Animation for typing out both the logo and the begin text
            const typing = () => {
                isTyping = true;
                if (
                    sceneLogoElement 
                    && sceneBeginTextElement
                    && i < txt.length
                    && sceneLogoElement.innerHTML.charAt(sceneLogoElement.innerHTML.length-1) != txt.charAt(i)
                    ){
                    
                    // Determine what text from the string goes to each element
                    if (i > 18){
                        sceneBeginTextElement.innerHTML += txt.charAt(i);
                    }
                    else {
                        sceneLogoElement.innerHTML += txt.charAt(i);
                    }

                    i++;

                    // Set timeout for the next character
                    setTimeout(typing, 100);
                }
                else if (i == txt.length){

                    // Typing completed
                    isTyping = false;
                    isText = true;  
                    sceneBeginTextElement?.classList.add('active');
                }
            }
            
            // Function to delete the text from the screen when the user clicks or presses a key
            const deleteText = () => {

                // Remove the smaller text from the screen
                if (sceneBeginTextElement && isTyping == false){
                    sceneBeginTextElement.style.opacity = "0";
                    sceneBeginTextElement.style.animation = "none";
                }
                
                isTyping = true;

                // Remove the logo text from the screen the same style as it was added
                if (sceneLogoElement && j > 0){

                    sceneLogoElement.innerHTML = sceneLogoElement.innerHTML.slice(0, -1);
                    j--;

                }
                else {
                    isTyping = false;
                    isText = false;
                }
            }

            // Main animation loop mainly for zooming
            const animate = async () => {
                // for orbit controls
                // controls.update();

                // Zoom in to the screen on load
                if (cameraZ > 0.4) {
                    camera.position.setZ(cameraZ-=0.001);
                }

                // In the last frame of the zoom, start typing
                if (cameraZ > 0.4 && cameraZ < 0.401){
                    typing();
                }

                // If the user clicks or presses a key, zoom in to the screen
                if (zoom){
                    if (isTyping || isText){

                        deleteText();

                        setTimeout(() => {
                            requestAnimationFrame(animate);
                            renderer.render(scene, camera);
                        }, 50);
                    }
                    else {

                        if (cameraZ > 0.15) {
                            camera.position.setZ(cameraZ-=0.005);
                        }
                        else {
                            // remove event listeners
                            window.removeEventListener('keypress', handlezoom);
                            setInScene(false);
                        }

                        requestAnimationFrame(animate);
                        renderer.render(scene, camera);
                    }
                }else {
                    requestAnimationFrame(animate);
                    renderer.render(scene, camera);
                }
              
            };

            animate();

        }
    }, [width, height]);


return (
    <>
        <div className="scene-background"></div>
        <div className="scene-logo" id='scene-logo'>
            <pre className="scene-logo-text" id="scene-logo-text"></pre>
            <pre className="scene-begin-text" id='scene-begin-text'></pre>
        </div>
        <canvas ref={canvasRef} />;
    </>
)

};

export default Scene;

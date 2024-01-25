import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// @ts-ignore
import computer from '../../assets/computer.glb';
import './Scene.scss';

interface SceneProps {
    setInScene: any;
}

const Scene: React.FC<SceneProps> = ({ setInScene }) => {

    const canvasRef = useRef<HTMLCanvasElement>(null);

    var cameraZ = 0.8;
    var zoomSpeed = 0.005;

    let typingSpeed = 50 ;

    const [sceneWidth, setSceneWidth] = useState(window.innerWidth);
    const [sceneHeight, setSceneHeight] = useState(window.innerHeight);

    // Get the aspect ratio of the screen
    const aspectRatio = sceneWidth / sceneHeight;

    var scales = getScales(sceneWidth, sceneHeight);

    const [scaleX, setScaleX] = useState(scales.scaleX);
    const [scaleY, setScaleY] = useState(scales.scaleY);

    var isTyping = false;
    var isText = false;

    let resizeTimeout: any;

    const handleResize = () => {
        if (canvasRef.current) {

            clearTimeout(resizeTimeout);

            resizeTimeout = setTimeout(() => {
                setSceneWidth(window.innerWidth);
                setSceneHeight(window.innerHeight);

                scales = getScales(window.innerWidth, window.innerHeight);

                setScaleX(scales.scaleX);
                setScaleY(scales.scaleY);

            }, 1000);
        }
    };

    let zoom = false;

    let i = 0;
    let cutofIndex = 18;
    const txt = 'Hack the Burgh\n2024\nPress any key to begin...';

    var sceneBeginTextElement = document.getElementById("scene-begin-text");
    var sceneLogoElement = document.getElementById("scene-logo-text");

    let typingTimeout: any;
    let characterTimeout: any;

    const startTyping = () => {

        console.log('start typing')

        sceneBeginTextElement = document.getElementById("scene-begin-text");
        sceneLogoElement = document.getElementById("scene-logo-text");

        if (sceneLogoElement && sceneBeginTextElement){

            clearTimeout(typingTimeout);

            typingTimeout = setTimeout(() => {

                console.log('start typing timeout')

                clearTimeout(characterTimeout);

                // @ts-ignore
                sceneLogoElement.innerHTML = "";
                // @ts-ignore
                sceneBeginTextElement.innerHTML = "";

                typing();

            }, 1500);
            
           
        }
        else {
            setTimeout(startTyping, 500);
        }

    }

    const typing = () => {

        isTyping = true;

        if (
            sceneLogoElement 
            && sceneBeginTextElement
            && i < txt.length
            ){
            
            // Determine what text from the string goes to each element
            if (i > cutofIndex){
                sceneBeginTextElement.innerHTML += txt.charAt(i);
            }
            else {
                sceneLogoElement.innerHTML += txt.charAt(i);
            }

            i++;

            // Set timeout for the next character
            characterTimeout = setTimeout(typing, typingSpeed);
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
        if (sceneLogoElement && cutofIndex > -1){

            sceneLogoElement.innerHTML = sceneLogoElement.innerHTML.slice(0, -1);
            cutofIndex--;

        }
        else {
            isTyping = false;
            isText = false;
        }
    }


    useEffect(() => {
        window.addEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        renderScene();
    }, [sceneWidth, sceneHeight]);

    const renderScene = () => {

        if (canvasRef.current) {
    
            const scene = new THREE.Scene();
    
            const camera = new THREE.PerspectiveCamera(75, sceneWidth / sceneHeight, 0.1, 1000);
            camera.position.setZ(cameraZ);
    
            const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(sceneWidth, sceneHeight);
    
            const pointLight = new THREE.PointLight(0xffffff, 1);
            pointLight.position.set(0, 0.3, 1);
            scene.add(pointLight);
    
            renderer.setClearColor(0x000000, 0);

            const handlezoom = () => {
                if (!isTyping){
                    zoom = true;
                }
            };

            window.addEventListener('keypress', handlezoom);
            window.addEventListener('click', handlezoom);
            canvasRef.current.addEventListener('click', handlezoom);
            
             // Load the computer .glb file into the scene
            const loader = new GLTFLoader();
            loader.load(computer, (computer: any) => {

                computer.scene.position.set(0, (scaleY * -0.3), 0);

                computer.scene.scale.set(scaleX, scaleY, 1);

                scene.add(computer.scene);

            }, () => {
                // object in scene
            });
    
            // Main animation loop mainly for zooming 
            const animate = async () => {
    
                // Zoom in to the screen on load
                if (cameraZ > 0.4) {
                    camera.position.setZ(cameraZ-= zoomSpeed);
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

                        // dim the light
                        if (pointLight.intensity > 0.1) {
                            pointLight.intensity -= 0.5;
                        }

                        // set he canvas background to black
                        
                        renderer.setClearColor(0x000000, 0);
                        
                
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

            startTyping();

        }

    }
    
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
}

export default Scene

const getScales = (sceneWidth: number, sceneHeight: number) => {

    let scaleY = 1.3;
    let scaleX = 1;

    if (sceneWidth > 1500){
        scaleX = 1.5;
        scaleY = 1.2;
    }
    else if (sceneWidth > 1200){
        scaleX = 1.5;
        scaleY = 1.2;
    }
    else if (sceneWidth > 1000){
        scaleX = 1.3;
        scaleY = 1.0;
    }
    else if (sceneWidth > 600){
        scaleX = 1.15;
        scaleY = 0.9;
    }
    else if (sceneWidth > 450){
        scaleX = 1;
        scaleY = 0.7;
    }
    else {
        scaleX = 0.9;
        scaleY = 0.7;
    }


   return {scaleX, scaleY}
}
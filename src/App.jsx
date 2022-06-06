import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Bounds, BakeShadows, Html } from '@react-three/drei'
import  Rice  from './foods/Rice'
import Apple from './foods/Apple'
import Burger from './foods/Burger'
import { Physics } from '@react-three/cannon'
import {Stars} from '@react-three/drei'
import { Link,Routes,Route } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'



export default function App() {
  return (
    <Canvas orthographic shadows dpr={[1, 2]} camera={{ position: [10, 10, 10], zoom: 10 }}>
        <Router basename={process.env.PUBLIC_URL}>
      <color attach="background" args={['#252530']} />
      <ambientLight intensity={0.01} />
      <hemisphereLight intensity={0.125} color="#8040df" groundColor="red" />
      <spotLight castShadow color="orange" intensity={2} position={[-50, 50, 40]} angle={0.25} penumbra={1} shadow-mapSize={[128, 128]} shadow-bias={0.00005} />
      <Suspense fallback={null}>
        <Stars/>
        <Bounds fit clip observe margin={5}>
        <Physics>
           <Routes> 
            <Route path="/*" element={<React.Fragment/>}/>
            <Route path="/rice" element={<Rice scale={1}/>}/>
            <Route path="/apple" element={<Apple scale={1}/>}/>
            <Route path="/burger" element={<Burger scale={1}/>}/>
          </Routes> 
          </Physics>
        </Bounds>
        <BakeShadows />
      </Suspense>
      <OrbitControls
        makeDefault
        minAzimuthAngle={0}
        maxAzimuthAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 3}
        enableZoom={true}
        enablePan={true}
        zoomSpeed={0.3}
      />
      <gridHelper args={[1000, 200, '#151515', '#020202']} position={[0, -4, 0]} />
      <mesh scale={200} rotation={[-Math.PI / 2, 0, 0]} position={[0, -4, 0]} receiveShadow>
        <planeGeometry />
        <shadowMaterial transparent opacity={0.3} />
      </mesh>
      </Router>
    </Canvas>
  )
}

import { Image, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";

import { motion } from "framer-motion-3d";
import { atom, useAtom } from "jotai";
import { useEffect, useRef } from "react";

export const projects = [
  {
    title: "2048",
    url: "https://www.github.com/KING-258/JS",
    image: "projects/2048.png",
    description: "Classic 2048 Game with Smooth Animations.",
    
  },
    {
    title: "Translation App",
    url: "https://www.github.com/KING-258/NLP_Translation",
    image: "projects/nlp.jpg",
    description: "Translate and Transcribe voice from Hindi to English and vice-versa",
  },
    {
    title: "Chrome Dino 3-D",
    url: "https://www.github.com/KING-58/JS",
    image: "projects/Dino.png",
    description: "Chrome Dinosaur in 3-D using Three.js",
  },
  {
    title: "Animate Text App",
    url: "https://www.github.com/KING-258/JS",
    image: "projects/Animate.png",
    description: "Live Text Typing Animation",
  },
  {
    title: "KnapSack Solver",
    url: "https://www.github.com/KING-258/JS",
    image: "projects/Knapsack.png",
    description: "A GUI to solve 0/1 KnapSack and Fractional KnapSack",
  },
  {
    title: "Instagram Clone",
    url: "https://www.github.com/KING-258/MERN_Projects",
    image: "projects/Instagram.png",
    description: "Replica of Social media app Instagram UI",
  },
 
];

const Project = (props) => {
  const { project, highlighted } = props;

  const background = useRef();
  const bgOpacity = useMotionValue(0.4);

  useEffect(() => {
    animate(bgOpacity, highlighted ? 1 : 0.5);
  }, [highlighted]);

  useFrame(() => {
    background.current.material.opacity = bgOpacity.get();
  });


  return (
    <group {...props} >
      <mesh
        position-z={-0.001}
        onClick={() => window.open(project.url, "_blank")}
        ref={background}
      >
        <planeGeometry args={[2.2, 2]} />
        <meshBasicMaterial color="black" transparent opacity={1} />
      </mesh>
      <Image
        scale={[2, 1.2, 1]}
        url={project.image}
        toneMapped={false}
        position-y={0.3}
        
      />
      <Text
        maxWidth={2}
        anchorX={"left"}
        anchorY={"top"}
        fontSize={0.2}
        position={[-1, -0.4, 0]}
      >
        {project.title.toUpperCase()}
      </Text>
      <Text
        maxWidth={3}
        anchorX="left"
        anchorY="top"
        fontSize={0.1}
        position={[-1, -0.6, 0]}
      >
        {project.description}
      </Text>
    </group>
  );
};

export const currentProjectAtom = atom(Math.floor(projects.length / 2));

export const Projects = () => {
  const { viewport } = useThree();
  const [currentProject] = useAtom(currentProjectAtom);

  return (
    <group position-y={-viewport.height * 2 + 1}>
      {projects.map((project, index) => (
        <motion.group
          key={"project_" + index}
          position={[index * 2.5, 0, -3]}
          animate={{
            x: 0 + (index - currentProject) * 2.5,
            y: currentProject === index ? 0 : -0.1,
            z: currentProject === index ? -2 : -3,
            rotateX: currentProject === index ? 0 : -Math.PI / 3,
            rotateZ: currentProject === index ? 0 : -0.1 * Math.PI,
          }}
        >
          <Project project={project} highlighted={index === currentProject} />
        </motion.group>
      ))}
    </group>
  );
};

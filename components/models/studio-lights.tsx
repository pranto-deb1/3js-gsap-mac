import { Environment, Lightformer } from "@react-three/drei";
import { AmbientLight } from "three";

function StudioLights() {
  return (
    <group name="lights">
      <Environment resolution={256}>
        <group>
          <Lightformer
            form="rect"
            intensity={10}
            scale={10}
            position={[-10, 5, -5]}
            rotation-y={Math.PI / 2}
          />
          <Lightformer
            form="rect"
            intensity={8}
            scale={10}
            position={[10, 0, 1]}
            rotation-y={Math.PI / 2}
          />
        </group>
      </Environment>
    </group>
  );
}

export default StudioLights;

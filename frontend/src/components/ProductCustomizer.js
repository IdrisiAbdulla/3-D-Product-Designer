import "../index.css";
import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF(props.modelname);
  console.log(nodes);
  console.log(materials);

  const [meshArray, setMeshArray] = useState([]);

  useEffect(() => {
    showModel();
  }, []);

  const showModel = () => {
    return Object.keys(nodes)
      .filter((node) => nodes[node].type === "Mesh")
      .map((obj, i) => {
        let cur_mat = materials[Object.keys(materials)[i]];
        // console.log(cur_mat.name);
        // console.log(props);
        return (
          <mesh
            geometry={nodes[obj].geometry}
            material={cur_mat}
            material-color={props.customMat[i]}
          />
        );
      });
  };

  return (
    <group ref={group} {...props} dispose={null} scale={props.scale}>
      {showModel()}
    </group>
  );
}

function ProductCustomizer() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const [mesh, setMesh] = useState("#ffffff");
  const [stripes, setStripes] = useState("#ffffff");
  const [sole, setSole] = useState("#ffffff");
  const [laces, setLaces] = useState("#ffffff");
  const [band, setBand] = useState("#ffffff");
  const [patch, setPatch] = useState("#ffffff");
  const [caps, setCaps] = useState("#ffffff");
  const [inner, setInner] = useState("#ffffff");

  const {name} = useParams();
 

  const models = {
    shoe : {
      scale : 3.5,
      name : 'Sports Shoe'
    },
    cricket : {
      scale : 2
    },
    globe: {
      scale : 6
    },
    watch : {
      scale : 0.05
    },
    headphones : {
      scale : 1.5
    }
  }
  console.log(models[name].scale);
  // const modelName = "models/globe.glb";
  const modelName = `./models/${name}.glb`;

  const { nodes, materials } = useGLTF(modelName);
  console.log(nodes);
  console.log(materials);
  const [customMat, setCustomMat] = useState(
    Array.from(Object.keys(materials), (a) => "#fff")
  );
  console.log(customMat);

  const updateCustomMat = (i, val) => {
    let newCustomMat = customMat;
    newCustomMat[i] = val;
    setCustomMat([...newCustomMat]);
  };

  return (
    <div className="App">
      <div className="row" style={{ marginTop: "5vh" }}>
        <div className="col-md-8">
          <div
            className="product-canvas border border-success border-3 rounded-6"
            style={{ marginLeft: "40px" }}
          >
            <Canvas style={{height: '80vh'}}>
              <Suspense fallback={null}>
                <ambientLight />
                <spotLight
                  intensity={0.9}
                  angle={0.1}
                  penumbra={1}
                  position={[10, 15, 10]}
                  castShadow
                />
                <Model
                  customMat={customMat}
                  modelname={modelName}
                  scale = {models[name].scale}
                  customColors={{
                    mesh: mesh,
                    stripes: stripes,
                    sole: sole,
                    laces: laces,
                    band: band,
                    patch: patch,
                    caps: caps,
                    inner: inner,
                  }}
                />
                <OrbitControls
                  enablePan={true}
                  enableZoom={true}
                  enableRotate={true}
                />
              </Suspense>
            </Canvas>
          </div>
        </div>
        {/* colour chooser */}
        <div className="col-md-4">
          <div className="card-c pallete-card">
            <div className="card-body">
              <h2 className="text-center text-danger">Color chooser</h2>
              <hr />
              {customMat.map((mat, i) => (
                <div className="card">
                <div className="card-body" style={{ paddingTop: "10px" }}>
                  <h4 style={{ display: "inline" }} for="mesh">
                    {Object.keys(materials)[i].toUpperCase()}
                  </h4>
                  {"  "}
                  <input
                    type="color"
                    id="mesh"
                    name="mesh"
                    value={mat}
                    onChange={(e) => updateCustomMat(i, e.target.value)}
                  />
                </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCustomizer;
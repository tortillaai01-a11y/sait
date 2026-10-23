import * as THREE from 'three';
import { getStoryState } from './story-state.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

export function createTruckScene(canvas,{reducedMotion=false}={}) {
 const renderer=new THREE.WebGLRenderer({canvas,antialias:true,alpha:true,powerPreference:'low-power'});
 renderer.setPixelRatio(Math.min(devicePixelRatio,1.7));
 renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;
 renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.15;
 const scene=new THREE.Scene();
 const camera=new THREE.PerspectiveCamera(31,1,.1,100);camera.position.set(-10,6.3,11.5);camera.lookAt(0,1.4,0);
 const pmrem=new THREE.PMREMGenerator(renderer);
 const room=new RoomEnvironment();const env=pmrem.fromScene(room,.04);scene.environment=env.texture;room.dispose();pmrem.dispose();
 const light=new THREE.DirectionalLight('#ffffff',3);light.position.set(-5,9,5);light.castShadow=true;light.shadow.mapSize.set(1024,1024);light.shadow.camera.left=-9;light.shadow.camera.right=9;light.shadow.camera.top=9;light.shadow.camera.bottom=-9;light.shadow.normalBias=.04;scene.add(light);
 const fill=new THREE.DirectionalLight('#b5a4ff',2);fill.position.set(4,5,-6);scene.add(fill);
 scene.add(new THREE.HemisphereLight('#ffffff','#b6aaba',1.2));
 const silver=new THREE.MeshStandardMaterial({color:'#bdc0c5',metalness:.92,roughness:.24});
 const pearl=new THREE.MeshPhysicalMaterial({color:'#625b70',metalness:.88,roughness:.22,clearcoat:1,clearcoatRoughness:.12,iridescence:.45,iridescenceIOR:1.3,iridescenceThicknessRange:[120,380]});
 const dark=new THREE.MeshStandardMaterial({color:'#171821',metalness:.65,roughness:.35});
 const rubber=new THREE.MeshStandardMaterial({color:'#14151b',metalness:.03,roughness:.88});
 const glass=new THREE.MeshPhysicalMaterial({color:'#1c2031',metalness:.85,roughness:.12,clearcoat:1});
 const purple=new THREE.MeshStandardMaterial({color:'#8a61f1',metalness:.55,roughness:.27});
 const violetLight=new THREE.MeshStandardMaterial({color:'#cfbcff',emissive:'#8a60ff',emissiveIntensity:1.8});
 const chrome=new THREE.MeshStandardMaterial({color:'#e5e6e7',metalness:1,roughness:.13});
 const ground=new THREE.Mesh(new THREE.PlaneGeometry(200,200),new THREE.ShadowMaterial({opacity:.12}));ground.rotation.x=-Math.PI/2;ground.receiveShadow=true;ground.position.y=-.02;scene.add(ground);
 const turntable=new THREE.Mesh(new THREE.CylinderGeometry(4.65,4.7,.07,100),new THREE.MeshStandardMaterial({color:'#c7bfd0',metalness:.15,roughness:.8,transparent:true}));turntable.material.depthWrite=false;turntable.position.y=-.075;turntable.receiveShadow=true;scene.add(turntable);
 const ringMaterial=purple.clone();ringMaterial.transparent=true;ringMaterial.depthWrite=false;
 const ring=new THREE.Mesh(new THREE.TorusGeometry(4.7,.008,6,128),ringMaterial);ring.rotation.x=Math.PI/2;ring.position.y=-.025;scene.add(ring);
 const truck=new THREE.Group();scene.add(truck);
 const chassis=new THREE.Group();truck.add(chassis);
 function mesh(geo,mat,parent,x=0,y=0,z=0){const o=new THREE.Mesh(geo,mat);o.position.set(x,y,z);o.castShadow=true;o.receiveShadow=true;parent.add(o);return o;}
 const box=(w,h,d,m,p,x=0,y=0,z=0,r=.04)=>mesh(new RoundedBoxGeometry(w,h,d,2,r),m,p,x,y,z);
 function cyl(r1,r2,h,mat,p,x=0,y=0,z=0){return mesh(new THREE.CylinderGeometry(r1,r2,h,32),mat,p,x,y,z);}
 // Twin frame rails, cross-members and drive shaft.
 [-.69,.69].forEach(z=>box(5.9,.23,.13,dark,chassis,0,.85,z));
 for(let x=-2.2;x<2.7;x+=.65)box(.1,.17,1.45,silver,chassis,x,.85,0);
 const shaft=cyl(.09,.09,3.8,chrome,chassis,.1,.66,0);shaft.rotation.z=Math.PI/2;
 [1.2,2.25].forEach(x=>{const axle=cyl(.105,.105,2.05,dark,chassis,x,.61,0);axle.rotation.x=Math.PI/2;cyl(.23,.23,.24,dark,chassis,x,.68,0).rotation.x=Math.PI/2;});
 box(.17,.33,2.15,silver,chassis,2.9,.78,0);
 const cab=new THREE.Group();truck.add(cab);
 box(1.96,2.18,2.1,pearl,cab,-2.05,2.12,0,.12);
 box(1.88,.25,1.98,silver,cab,-2.03,3.29,0,.11);
 // Windshield and side windows.
 box(.045,.66,1.82,glass,cab,-3.047,2.64,0,.05);
 box(.05,.66,.035,dark,cab,-3.08,2.64,0,.01);
 [-1,1].forEach(sign=>{
  box(1.03,.65,.025,glass,cab,-1.97,2.65,sign*1.058,.06);
  box(1.23,.025,.035,silver,cab,-2.04,2.22,sign*1.07,.01);
  box(.24,.04,.04,dark,cab,-1.56,2.08,sign*1.074);
  box(.09,.07,.32,dark,cab,-2.72,2.39,sign*1.2);
  box(.17,.47,.13,dark,cab,-2.73,2.45,sign*1.38,.04);
  box(.87,.06,.06,purple,cab,-1.91,1.67,sign*1.071,.01);
  box(.65,.13,.18,silver,cab,-1.44,1.17,sign*1.07,.02);
  box(.65,.11,.23,dark,cab,-1.44,1.01,sign*1.1,.02);
 });
 box(.06,.69,1.65,dark,cab,-3.06,1.62,0,.07);
 for(let y=1.36;y<1.92;y+=.105)box(.025,.025,1.47,silver,cab,-3.098,y,0,.005);
 box(.15,.21,1.98,pearl,cab,-3.12,1.07,0,.06);
 [-.75,.75].forEach(z=>{box(.07,.17,.33,dark,cab,-3.12,1.13,z,.025);box(.09,.025,.29,violetLight,cab,-3.17,1.18,z,.006);});
 box(.03,.13,.28,purple,cab,-3.108,2.02,0,.015);
 const logoTexture=new THREE.TextureLoader().load(import.meta.env.BASE_URL+'images/logo-white.png',()=>requestRender());
 logoTexture.colorSpace=THREE.SRGBColorSpace;
 const logoMaterial=new THREE.MeshBasicMaterial({map:logoTexture,transparent:true,depthWrite:false,toneMapped:false});
 [-1,1].forEach(sign=>{const decal=mesh(new THREE.PlaneGeometry(.48,.31),logoMaterial,cab,-2.01,1.94,sign*1.077);decal.rotation.y=sign>0?0:Math.PI;decal.castShadow=false;decal.receiveShadow=false;});
 // Wheel assemblies with separate tread blocks, spokes and hub bolts.
 const treadGeometry=new THREE.BoxGeometry(.09,.025,.27);
 const boltGeometry=new THREE.CylinderGeometry(.025,.025,.045,10);
 function wheel(parent,x,y,z){
  const group=new THREE.Group();group.position.set(x,y,z);parent.add(group);
  mesh(new THREE.TorusGeometry(.475,.145,12,48),rubber,group);
  const side=cyl(.47,.47,.22,rubber,group);side.rotation.x=Math.PI/2;
  const bolts=new THREE.InstancedMesh(boltGeometry,dark,20);bolts.castShadow=true;group.add(bolts);
  const instance=new THREE.Object3D();
  [-1,1].forEach((sign,sideIndex)=>{
   const rim=cyl(.315,.315,.025,silver,group,0,0,sign*.132);rim.rotation.x=Math.PI/2;
   mesh(new THREE.TorusGeometry(.32,.022,8,40),chrome,group,0,0,sign*.15);
   const hub=cyl(.13,.13,.06,chrome,group,0,0,sign*.17);hub.rotation.x=Math.PI/2;
   for(let i=0;i<10;i++){
    const a=i*Math.PI/5;
    instance.position.set(Math.sin(a)*.215,Math.cos(a)*.215,sign*.17);instance.rotation.set(Math.PI/2,0,0);instance.updateMatrix();bolts.setMatrixAt(sideIndex*10+i,instance.matrix);
   }
  });
  const treads=new THREE.InstancedMesh(treadGeometry,rubber,32);treads.castShadow=true;treads.receiveShadow=true;group.add(treads);
  for(let i=0;i<32;i++){
   const a=i*Math.PI/16;instance.position.set(Math.sin(a)*.608,Math.cos(a)*.608,0);instance.rotation.set(0,0,-a);instance.updateMatrix();treads.setMatrixAt(i,instance.matrix);
  }
  return group;
 }
 const wheels=[];
 [-2.1,1.2,2.25].forEach(x=>[-1,1].forEach(sign=>{const w=wheel(truck,x,.62,sign*1.02);w.userData.base=w.position.clone();wheels.push(w);}));
 // Fuel tanks and fifth-wheel coupling.
 const tanks=[];
 [-1,1].forEach(sign=>{
  const g=new THREE.Group();g.position.set(-.25,.86,sign*.94);truck.add(g);tanks.push(g);g.userData.base=g.position.clone();
  const tank=cyl(.31,.31,1.1,silver,g);tank.rotation.z=Math.PI/2;
  [-.36,.36].forEach(x=>{const band=new THREE.Mesh(new THREE.TorusGeometry(.315,.018,8,32),dark);band.rotation.y=Math.PI/2;band.position.x=x;g.add(band);});
 });
 const coupling=cyl(.66,.69,.12,dark,chassis,1.72,1.12,0);coupling.scale.z=.85;
 box(.55,.14,.08,silver,chassis,1.72,1.21,0);
 [-1,1].forEach(sign=>{box(1.85,.08,.5,dark,chassis,1.75,1.3,sign*.95);box(.06,.14,.27,violetLight,chassis,2.99,.9,sign*.75);});
 // A stylised six-cylinder power unit, visible in the exploded chapter.
 const engine=new THREE.Group();engine.position.set(-1.4,1.17,0);truck.add(engine);
 box(1.4,.48,.7,dark,engine,0,.2,0,.07);
 box(1.5,.14,.76,silver,engine,0,.49,0,.035);
 for(let i=0;i<6;i++){
  const x=-.59+i*.235;cyl(.09,.09,.4,chrome,engine,x,.74,0);
  box(.17,.09,.37,purple,engine,x,.96,0,.025);
 }
 [-.4,.4].forEach(z=>{const pipe=cyl(.07,.07,1.48,chrome,engine,0,.42,z);pipe.rotation.z=Math.PI/2;});
 const engineFan=mesh(new THREE.TorusGeometry(.23,.04,8,24),silver,engine,-.8,.42,0);engineFan.rotation.y=Math.PI/2;
 // A full-size road grows out of the studio floor. The same assembled truck
 // follows it; no miniature replacement or separate service-wheel scene.
 const route=new THREE.Group();scene.add(route);
 const driveCurve=new THREE.CatmullRomCurve3([
  new THREE.Vector3(0,0,0),new THREE.Vector3(-.7,0,0),
  new THREE.Vector3(-1.5,0,-2),new THREE.Vector3(.8,0,-4),new THREE.Vector3(6.6,0,-4),
 ]);
 const roadCurve=new THREE.CatmullRomCurve3([
  new THREE.Vector3(4.5,.005,0),new THREE.Vector3(0,.005,0),
  new THREE.Vector3(-1.5,.005,-2),new THREE.Vector3(.8,.005,-4),new THREE.Vector3(8,.005,-4),
 ]);
 const roadMaterial=new THREE.MeshBasicMaterial({color:'#c7c0d0',transparent:true,opacity:0,side:THREE.DoubleSide,depthWrite:false});
 const roadLineMaterial=new THREE.MeshBasicMaterial({color:'#a08cb8',transparent:true,opacity:0,depthWrite:false});
 function roadStrip(curve,width){
  const vertices=[],indices=[];
  for(let i=0;i<=100;i++){
   const t=i/100,p=curve.getPoint(t),tangent=curve.getTangent(t);
   const side=new THREE.Vector3(-tangent.z,0,tangent.x).normalize().multiplyScalar(width/2);
   vertices.push(p.x+side.x,p.y,p.z+side.z,p.x-side.x,p.y,p.z-side.z);
   if(i<100){const n=i*2;indices.push(n,n+1,n+2,n+1,n+3,n+2);}
  }
  const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3));geometry.setIndex(indices);geometry.computeVertexNormals();return geometry;
 }
 const roadMesh=mesh(roadStrip(roadCurve,2.75),roadMaterial,route);roadMesh.castShadow=false;roadMesh.receiveShadow=false;
 const centerline=mesh(new THREE.TubeGeometry(roadCurve,100,.018,6,false),roadLineMaterial,route);centerline.position.y=.01;centerline.castShadow=false;
 const guide=new THREE.Group();truck.add(guide);
 const guideMaterial=new THREE.LineBasicMaterial({color:'#a58bc4',transparent:true,opacity:.3});
 [-1,1].forEach(sign=>{
  const geo=new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(-2.1,.65,sign*1.02),new THREE.Vector3(-2.1,.65,sign*2.05)]);
  guide.add(new THREE.Line(geo,guideMaterial));
 });
  let progress=0;let drag=0;let down=false;let px=0;let disposed=false;let inView=true;let frame=0;let lastTime=0;let autoAngle=0;
 function resize(){const rect=canvas.getBoundingClientRect();if(!rect.width||!rect.height)return;renderer.setSize(rect.width,rect.height,false);camera.aspect=rect.width/rect.height;camera.fov=rect.width<600?39:31;camera.updateProjectionMatrix();}
 resize();
 const visibility=new IntersectionObserver(entries=>{inView=entries[0].isIntersecting;if(inView)requestRender();});visibility.observe(canvas);
 function render(time=0){
  frame=0;if(disposed||document.hidden||!inView)return;
  const dt=Math.min((time-lastTime)/1000,.05)||0;lastTime=time;
  if(!reducedMotion&&!down)autoAngle+=dt*.045;
  const state=getStoryState(progress);
  // Stagger the assembly so the eye can follow each group of components.
  cab.position.set(-state.cabLift*.45,state.cabLift*1.55,0);
  engine.position.set(-1.4+state.engineLift*.45,1.17+state.engineLift*.9,0);
  wheels.forEach(w=>{
   w.position.copy(w.userData.base);
   w.position.z+=Math.sign(w.position.z)*state.wheelSpread*.9;
   w.rotation.z=state.departure*18;
  });
  tanks.forEach(t=>{t.position.copy(t.userData.base);t.position.z+=Math.sign(t.position.z)*state.tankSpread*.8;});
  const drive=driveCurve.getPoint(state.departure);
  const tangent=driveCurve.getTangent(state.departure);
  const idle=reducedMotion?0:Math.sin(autoAngle)*.08;
  truck.position.copy(drive);
  truck.rotation.y=Math.atan2(tangent.z,-tangent.x)+(drag+idle)*(1-state.departure*.85);
  // Rotate toward the road gradually, with a continuous size throughout.
  truck.scale.setScalar(1);
  turntable.material.opacity=1-state.road;ringMaterial.opacity=1-state.road;
  roadMaterial.opacity=state.road*.85;roadLineMaterial.opacity=state.road*.8;
  guideMaterial.opacity=state.wheelSpread*.28;guide.visible=state.wheelSpread>.01;
  violetLight.emissiveIntensity=.4+state.assembly*1.4;
  const mobile=canvas.clientWidth<600;
  const zoom=mobile?THREE.MathUtils.lerp(1.08,1.4,state.assembly)-state.departure*.18:THREE.MathUtils.lerp(.96,1.08,state.assembly)-state.departure*.12;
  if(camera.zoom!==zoom){camera.zoom=zoom;camera.updateProjectionMatrix();}
  camera.position.set(-10+state.departure*1.5,6.3+state.departure*.5,11.5+state.departure);
  camera.lookAt(drive.x*.15,1.4+(1-state.assembly)*.4,drive.z*.15);
  // State metadata is useful for accessibility diagnostics and smoke tests.
  canvas.dataset.pose=state.departure>0?'departing':state.assembly>=1?'assembled':state.assembly>0?'assembling':'exploded';
  renderer.render(scene,camera);
  if(!reducedMotion&&!document.hidden&&inView)frame=requestAnimationFrame(render);
 }
 function requestRender(){if(!frame&&!disposed)frame=requestAnimationFrame(render);}
 canvas.addEventListener('pointerdown',e=>{down=true;px=e.clientX;canvas.setPointerCapture(e.pointerId);canvas.classList.add('is-dragging');});
 canvas.addEventListener('pointermove',e=>{if(down){drag+=(e.clientX-px)*.008;px=e.clientX;requestRender();}});
 const release=()=>{down=false;canvas.classList.remove('is-dragging');};canvas.addEventListener('pointerup',release);canvas.addEventListener('pointercancel',release);
 canvas.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();drag+=e.key==='ArrowLeft'?-.15:.15;requestRender();}});
 document.addEventListener('visibilitychange',requestRender);
 const observer=new ResizeObserver(()=>{resize();requestRender();});observer.observe(canvas);
 renderer.render(scene,camera);requestRender();
 return {
  setProgress(value){progress=value;requestRender();},
  setReducedMotion(value){reducedMotion=value;requestRender();},
  dispose(){disposed=true;cancelAnimationFrame(frame);observer.disconnect();visibility.disconnect();document.removeEventListener('visibilitychange',requestRender);env.dispose();const geometries=new Set();const materials=new Set();scene.traverse(o=>{if(o.geometry)geometries.add(o.geometry);if(o.material)(Array.isArray(o.material)?o.material:[o.material]).forEach(m=>materials.add(m));});geometries.forEach(g=>g.dispose());materials.forEach(m=>{m.map?.dispose();m.dispose();});renderer.dispose();},
 };
}

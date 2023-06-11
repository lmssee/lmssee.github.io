"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[965],{3647:function(e,t,i){i.d(t,{m:function(){return o}});var s=i(9477);let r={type:"change"};class o extends s.pBf{constructor(e,t){super(),this.object=e,this.domElement=t,this.movementSpeed=1,this.rollSpeed=.005,this.dragToLook=!1,this.autoForward=!1;let i=this,o=new s._fP,a=new s.Pa4;this.tmpQuaternion=new s._fP,this.status=0,this.moveState={up:0,down:0,left:0,right:0,forward:0,back:0,pitchUp:0,pitchDown:0,yawLeft:0,yawRight:0,rollLeft:0,rollRight:0},this.moveVector=new s.Pa4(0,0,0),this.rotationVector=new s.Pa4(0,0,0),this.keydown=function(e){if(!e.altKey){switch(e.code){case"ShiftLeft":case"ShiftRight":this.movementSpeedMultiplier=.1;break;case"KeyW":this.moveState.forward=1;break;case"KeyS":this.moveState.back=1;break;case"KeyA":this.moveState.left=1;break;case"KeyD":this.moveState.right=1;break;case"KeyR":this.moveState.up=1;break;case"KeyF":this.moveState.down=1;break;case"ArrowUp":this.moveState.pitchUp=1;break;case"ArrowDown":this.moveState.pitchDown=1;break;case"ArrowLeft":this.moveState.yawLeft=1;break;case"ArrowRight":this.moveState.yawRight=1;break;case"KeyQ":this.moveState.rollLeft=1;break;case"KeyE":this.moveState.rollRight=1}this.updateMovementVector(),this.updateRotationVector()}},this.keyup=function(e){switch(e.code){case"ShiftLeft":case"ShiftRight":this.movementSpeedMultiplier=1;break;case"KeyW":this.moveState.forward=0;break;case"KeyS":this.moveState.back=0;break;case"KeyA":this.moveState.left=0;break;case"KeyD":this.moveState.right=0;break;case"KeyR":this.moveState.up=0;break;case"KeyF":this.moveState.down=0;break;case"ArrowUp":this.moveState.pitchUp=0;break;case"ArrowDown":this.moveState.pitchDown=0;break;case"ArrowLeft":this.moveState.yawLeft=0;break;case"ArrowRight":this.moveState.yawRight=0;break;case"KeyQ":this.moveState.rollLeft=0;break;case"KeyE":this.moveState.rollRight=0}this.updateMovementVector(),this.updateRotationVector()},this.pointerdown=function(e){if(this.dragToLook)this.status++;else{switch(e.button){case 0:this.moveState.forward=1;break;case 2:this.moveState.back=1}this.updateMovementVector()}},this.pointermove=function(e){if(!this.dragToLook||this.status>0){let t=this.getContainerDimensions(),i=t.size[0]/2,s=t.size[1]/2;this.moveState.yawLeft=-(e.pageX-t.offset[0]-i)/i,this.moveState.pitchDown=(e.pageY-t.offset[1]-s)/s,this.updateRotationVector()}},this.pointerup=function(e){if(this.dragToLook)this.status--,this.moveState.yawLeft=this.moveState.pitchDown=0;else{switch(e.button){case 0:this.moveState.forward=0;break;case 2:this.moveState.back=0}this.updateMovementVector()}this.updateRotationVector()},this.update=function(e){let t=e*i.movementSpeed,s=e*i.rollSpeed;i.object.translateX(i.moveVector.x*t),i.object.translateY(i.moveVector.y*t),i.object.translateZ(i.moveVector.z*t),i.tmpQuaternion.set(i.rotationVector.x*s,i.rotationVector.y*s,i.rotationVector.z*s,1).normalize(),i.object.quaternion.multiply(i.tmpQuaternion),(a.distanceToSquared(i.object.position)>1e-6||8*(1-o.dot(i.object.quaternion))>1e-6)&&(i.dispatchEvent(r),o.copy(i.object.quaternion),a.copy(i.object.position))},this.updateMovementVector=function(){let e=this.moveState.forward||this.autoForward&&!this.moveState.back?1:0;this.moveVector.x=-this.moveState.left+this.moveState.right,this.moveVector.y=-this.moveState.down+this.moveState.up,this.moveVector.z=-e+this.moveState.back},this.updateRotationVector=function(){this.rotationVector.x=-this.moveState.pitchDown+this.moveState.pitchUp,this.rotationVector.y=-this.moveState.yawRight+this.moveState.yawLeft,this.rotationVector.z=-this.moveState.rollRight+this.moveState.rollLeft},this.getContainerDimensions=function(){return this.domElement!=document?{size:[this.domElement.offsetWidth,this.domElement.offsetHeight],offset:[this.domElement.offsetLeft,this.domElement.offsetTop]}:{size:[window.innerWidth,window.innerHeight],offset:[0,0]}},this.dispose=function(){this.domElement.removeEventListener("contextmenu",n),this.domElement.removeEventListener("pointerdown",l),this.domElement.removeEventListener("pointermove",h),this.domElement.removeEventListener("pointerup",c),window.removeEventListener("keydown",d),window.removeEventListener("keyup",u)};let h=this.pointermove.bind(this),l=this.pointerdown.bind(this),c=this.pointerup.bind(this),d=this.keydown.bind(this),u=this.keyup.bind(this);this.domElement.addEventListener("contextmenu",n),this.domElement.addEventListener("pointerdown",l),this.domElement.addEventListener("pointermove",h),this.domElement.addEventListener("pointerup",c),window.addEventListener("keydown",d),window.addEventListener("keyup",u),this.updateMovementVector(),this.updateRotationVector()}}function n(e){e.preventDefault()}},4818:function(e,t,i){i.d(t,{y:function(){return n}});var s=i(9477),r=i(8304);let o={defines:{KERNEL_SIZE_FLOAT:"25.0",KERNEL_SIZE_INT:"25"},uniforms:{tDiffuse:{value:null},uImageIncrement:{value:new s.FM8(.001953125,0)},cKernel:{value:[]}},vertexShader:`

		uniform vec2 uImageIncrement;

		varying vec2 vUv;

		void main() {

			vUv = uv - ( ( KERNEL_SIZE_FLOAT - 1.0 ) / 2.0 ) * uImageIncrement;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float cKernel[ KERNEL_SIZE_INT ];

		uniform sampler2D tDiffuse;
		uniform vec2 uImageIncrement;

		varying vec2 vUv;

		void main() {

			vec2 imageCoord = vUv;
			vec4 sum = vec4( 0.0, 0.0, 0.0, 0.0 );

			for( int i = 0; i < KERNEL_SIZE_INT; i ++ ) {

				sum += texture2D( tDiffuse, imageCoord ) * cKernel[ i ];
				imageCoord += uImageIncrement;

			}

			gl_FragColor = sum;

		}`,buildKernel:function(e){let t=2*Math.ceil(3*e)+1;t>25&&(t=25);let i=(t-1)*.5,s=Array(t),r=0;for(let n=0;n<t;++n){var o;s[n]=Math.exp(-((o=n-i)*o)/(2*e*e)),r+=s[n]}for(let e=0;e<t;++e)s[e]/=r;return s}};class n extends r.w{constructor(e=1,t=25,i=4){super(),this.renderTargetX=new s.dd2,this.renderTargetX.texture.name="BloomPass.x",this.renderTargetY=new s.dd2,this.renderTargetY.texture.name="BloomPass.y",this.combineUniforms=s.rDY.clone(a.uniforms),this.combineUniforms.strength.value=e,this.materialCombine=new s.jyz({uniforms:this.combineUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,blending:s.WMw,transparent:!0}),this.convolutionUniforms=s.rDY.clone(o.uniforms),this.convolutionUniforms.uImageIncrement.value=n.blurX,this.convolutionUniforms.cKernel.value=o.buildKernel(i),this.materialConvolution=new s.jyz({uniforms:this.convolutionUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader,defines:{KERNEL_SIZE_FLOAT:t.toFixed(1),KERNEL_SIZE_INT:t.toFixed(0)}}),this.needsSwap=!1,this.fsQuad=new r.T(null)}render(e,t,i,s,r){r&&e.state.buffers.stencil.setTest(!1),this.fsQuad.material=this.materialConvolution,this.convolutionUniforms.tDiffuse.value=i.texture,this.convolutionUniforms.uImageIncrement.value=n.blurX,e.setRenderTarget(this.renderTargetX),e.clear(),this.fsQuad.render(e),this.convolutionUniforms.tDiffuse.value=this.renderTargetX.texture,this.convolutionUniforms.uImageIncrement.value=n.blurY,e.setRenderTarget(this.renderTargetY),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCombine,this.combineUniforms.tDiffuse.value=this.renderTargetY.texture,r&&e.state.buffers.stencil.setTest(!0),e.setRenderTarget(i),this.clear&&e.clear(),this.fsQuad.render(e)}setSize(e,t){this.renderTargetX.setSize(e,t),this.renderTargetY.setSize(e,t)}dispose(){this.renderTargetX.dispose(),this.renderTargetY.dispose(),this.materialCombine.dispose(),this.materialConvolution.dispose(),this.fsQuad.dispose()}}let a={uniforms:{tDiffuse:{value:null},strength:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float strength;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = strength * texel;

		}`};n.blurX=new s.FM8(.001953125,0),n.blurY=new s.FM8(0,.001953125)},7809:function(e,t,i){i.d(t,{x:function(){return l}});var s=i(9477);let r={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};var o=i(8304);class n extends o.w{constructor(e,t){super(),this.textureID=void 0!==t?t:"tDiffuse",e instanceof s.jyz?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=s.rDY.clone(e.uniforms),this.material=new s.jyz({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new o.T(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class a extends o.w{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s,r;let o=e.getContext(),n=e.state;n.buffers.color.setMask(!1),n.buffers.depth.setMask(!1),n.buffers.color.setLocked(!0),n.buffers.depth.setLocked(!0),this.inverse?(s=0,r=1):(s=1,r=0),n.buffers.stencil.setTest(!0),n.buffers.stencil.setOp(o.REPLACE,o.REPLACE,o.REPLACE),n.buffers.stencil.setFunc(o.ALWAYS,s,4294967295),n.buffers.stencil.setClear(r),n.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),n.buffers.color.setLocked(!1),n.buffers.depth.setLocked(!1),n.buffers.stencil.setLocked(!1),n.buffers.stencil.setFunc(o.EQUAL,1,4294967295),n.buffers.stencil.setOp(o.KEEP,o.KEEP,o.KEEP),n.buffers.stencil.setLocked(!0)}}class h extends o.w{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class l{constructor(e,t){if(this.renderer=e,void 0===t){let i=e.getSize(new s.FM8);this._pixelRatio=e.getPixelRatio(),this._width=i.width,this._height=i.height,(t=new s.dd2(this._width*this._pixelRatio,this._height*this._pixelRatio)).texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new n(r),this.clock=new s.SUY}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);-1!==t&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){void 0===e&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let t=0,s=this.passes.length;t<s;t++){let s=this.passes[t];if(!1!==s.enabled){if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),s.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),s.needsSwap){if(i){let t=this.renderer.getContext(),i=this.renderer.state.buffers.stencil;i.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),i.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}void 0!==a&&(s instanceof a?i=!0:s instanceof h&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(void 0===e){let t=this.renderer.getSize(new s.FM8);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,(e=this.renderTarget1.clone()).setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}},6127:function(e,t,i){i.d(t,{t:function(){return n}});var s=i(9477),r=i(8304);let o={uniforms:{tDiffuse:{value:null},time:{value:0},nIntensity:{value:.5},sIntensity:{value:.05},sCount:{value:4096},grayscale:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#include <common>

		// control parameter
		uniform float time;

		uniform bool grayscale;

		// noise effect intensity value (0 = no effect, 1 = full effect)
		uniform float nIntensity;

		// scanlines effect intensity value (0 = no effect, 1 = full effect)
		uniform float sIntensity;

		// scanlines effect count value (0 = no effect, 4096 = full effect)
		uniform float sCount;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

		// sample the source
			vec4 cTextureScreen = texture2D( tDiffuse, vUv );

		// make some noise
			float dx = rand( vUv + time );

		// add noise
			vec3 cResult = cTextureScreen.rgb + cTextureScreen.rgb * clamp( 0.1 + dx, 0.0, 1.0 );

		// get us a sine and cosine
			vec2 sc = vec2( sin( vUv.y * sCount ), cos( vUv.y * sCount ) );

		// add scanlines
			cResult += cTextureScreen.rgb * vec3( sc.x, sc.y, sc.x ) * sIntensity;

		// interpolate between source and result by intensity
			cResult = cTextureScreen.rgb + clamp( nIntensity, 0.0,1.0 ) * ( cResult - cTextureScreen.rgb );

		// convert to grayscale if desired
			if( grayscale ) {

				cResult = vec3( cResult.r * 0.3 + cResult.g * 0.59 + cResult.b * 0.11 );

			}

			gl_FragColor =  vec4( cResult, cTextureScreen.a );

		}`};class n extends r.w{constructor(e,t,i,n){super(),this.uniforms=s.rDY.clone(o.uniforms),this.material=new s.jyz({uniforms:this.uniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),void 0!==n&&(this.uniforms.grayscale.value=n),void 0!==e&&(this.uniforms.nIntensity.value=e),void 0!==t&&(this.uniforms.sIntensity.value=t),void 0!==i&&(this.uniforms.sCount.value=i),this.fsQuad=new r.T(this.material)}render(e,t,i,s){this.uniforms.tDiffuse.value=i.texture,this.uniforms.time.value+=s,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}},8304:function(e,t,i){i.d(t,{T:function(){return a},w:function(){return r}});var s=i(9477);class r{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}let o=new s.iKG(-1,1,1,-1,0,1),n=new s.u9r;n.setAttribute("position",new s.a$l([-1,3,0,-1,-1,0,3,-1,0],3)),n.setAttribute("uv",new s.a$l([0,2,0,0,2,0],2));class a{constructor(e){this._mesh=new s.Kj0(n,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,o)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}},4458:function(e,t,i){i.d(t,{C:function(){return o}});var s=i(9477),r=i(8304);class o extends r.w{constructor(e,t,i,r,o){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=void 0!==o?o:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new s.Ilk}render(e,t,i){let s,r;let o=e.autoClear;e.autoClear=!1,void 0!==this.overrideMaterial&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),void 0!==this.overrideMaterial&&(this.scene.overrideMaterial=r),e.autoClear=o}}},5310:function(e,t,i){i(9477)}}]);
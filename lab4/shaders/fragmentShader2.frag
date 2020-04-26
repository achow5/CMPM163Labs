uniform sampler2D texture1;
varying vec2 vUv;

void main() {
	// sample from the texture based on the uv coordinates

	//vUv = fract(vUv);
	float x = 0.0;

	gl_FragColor = texture2D(texture1, fract(vUv * 2.0));

}

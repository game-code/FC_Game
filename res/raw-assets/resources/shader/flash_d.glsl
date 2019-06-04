#ifdef GL_ES
precision lowp float;
#endif

#define PI 3.141592653589793
#define HALF_PI 1.5707963267948966

uniform int condition;
uniform float time;
uniform vec2 resolution;

varying vec2 v_texCoord;
varying vec4 v_fragmentColor;

float qinticIn(float t) {
  return pow(t, 20.0);
}

void main(void)
{
    vec4 outCol = texture2D(CC_Texture0, v_texCoord);
    if(condition == 0)
    {
        gl_FragColor = outCol*v_fragmentColor;
    }
    else
    {
        if(outCol.g > .2 && outCol.r < 0.2){
            float t = time*0.2;
            float pct = qinticIn( abs(fract(t)*2.0-1.) );
            gl_FragColor = mix(outCol*v_fragmentColor,vec4(0.,1.,0.,1.0),pct);
        }else{
            gl_FragColor = outCol*v_fragmentColor;
        }
    }

}

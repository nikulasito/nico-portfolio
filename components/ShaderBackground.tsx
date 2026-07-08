"use client";

import { useEffect, useRef } from "react";

const vertexShader = `
attribute vec2 a_position;
varying vec2 v_texCoord;
void main() {
  v_texCoord = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}`;

const fragmentShader = `
precision highp float;
uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_intensity;
varying vec2 v_texCoord;

void main() {
  vec2 uv = v_texCoord;
  vec2 mouse = u_mouse / u_resolution;

  vec2 gridUv = fract(uv * 20.0);
  float grid = smoothstep(0.02, 0.0, abs(gridUv.x - 0.5)) +
               smoothstep(0.02, 0.0, abs(gridUv.y - 0.5));
  grid *= 0.05;

  float d1 = length(uv - vec2(0.2, 0.8) + vec2(sin(u_time * 0.5) * 0.1));
  float d2 = length(uv - vec2(0.8, 0.2) + vec2(cos(u_time * 0.7) * 0.1));

  vec3 color1 = vec3(0.388, 0.4, 0.945);
  vec3 color2 = vec3(0.063, 0.725, 0.506);
  vec3 finalColor = vec3(0.035, 0.035, 0.043);

  finalColor += color1 * (0.15 / (d1 + 0.5)) * u_intensity;
  finalColor += color2 * (0.1 / (d2 + 0.6)) * u_intensity;
  finalColor += grid * color1 * u_intensity;

  float mouseDist = length(uv - mouse);
  finalColor += color1 * (0.05 / (mouseDist + 0.2)) * u_intensity;

  gl_FragColor = vec4(finalColor, 1.0);
}`;

function compileShader(
  gl: WebGLRenderingContext,
  type: number,
  source: string,
): WebGLShader | null {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error(gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

export function ShaderBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl") ?? canvas.getContext("experimental-webgl");
    if (!(gl instanceof WebGLRenderingContext)) return;

    const vertex = compileShader(gl, gl.VERTEX_SHADER, vertexShader);
    const fragment = compileShader(gl, gl.FRAGMENT_SHADER, fragmentShader);
    if (!vertex || !fragment) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertex);
    gl.attachShader(program, fragment);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW,
    );

    const position = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

    const timeUniform = gl.getUniformLocation(program, "u_time");
    const resolutionUniform = gl.getUniformLocation(program, "u_resolution");
    const mouseUniform = gl.getUniformLocation(program, "u_mouse");
    const intensityUniform = gl.getUniformLocation(program, "u_intensity");

    let frameId = 0;
    let intensity = 1;
    let mouseX = 640;
    let mouseY = 360;

    const syncSize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      const width = Math.max(1, Math.floor(canvas.clientWidth * ratio));
      const height = Math.max(1, Math.floor(canvas.clientHeight * ratio));
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }
    };

    const onPointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      mouseX = ((event.clientX - rect.left) / rect.width) * canvas.width;
      mouseY = (1 - (event.clientY - rect.top) / rect.height) * canvas.height;
    };

    const onGlowChange = (event: Event) => {
      const customEvent = event as CustomEvent<boolean>;
      intensity = customEvent.detail ? 1 : 0.2;
    };

    const resizeObserver = new ResizeObserver(syncSize);
    resizeObserver.observe(canvas);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("portfolio-glow", onGlowChange);
    syncSize();

    const render = (timestamp: number) => {
      syncSize();
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform1f(timeUniform, timestamp * 0.001);
      gl.uniform2f(resolutionUniform, canvas.width, canvas.height);
      gl.uniform2f(mouseUniform, mouseX, mouseY);
      gl.uniform1f(intensityUniform, intensity);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      frameId = requestAnimationFrame(render);
    };

    frameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("portfolio-glow", onGlowChange);
      gl.deleteShader(vertex);
      gl.deleteShader(fragment);
      gl.deleteProgram(program);
      gl.deleteBuffer(buffer);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full opacity-40"
      aria-hidden="true"
    />
  );
}

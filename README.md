# FelixCad prototype

A beginner-friendly browser CAD prototype for sketching rectangular profiles, extruding or cutting them, and exporting STL files for 3D printing. The AI copilot uses a local Ollama model; prompts and design context are sent to the Ollama service on this computer, not to a hosted AI API.

## Run locally

Requires Node.js and [Ollama](https://ollama.com/download).

1. Install and start Ollama.
2. In Terminal, download and start the recommended small model:

   ```sh
   ollama run qwen3.5:4b
   ```

   Wait for Ollama to finish downloading it. You can then quit the model prompt; the Ollama service stays running.
3. From this folder, start FelixCad:

   ```sh
   node server.js
   ```
4. Open [http://localhost:4174](http://localhost:4174). The copilot shows **LOCAL · READY** when it can see Ollama and an installed model.

The sidebar model menu lists the models already installed in Ollama. If the copilot says **OLLAMA OFFLINE**, make sure Ollama is running. If it says **MODEL NEEDED**, run the model command above. The GitHub Pages website is a static demo; local inference is available when running FelixCad on your computer with this local server.

## Try it

- Add a box or cylinder from the Build panel (or press **B** / **C**).
- Select a shape and edit its position and dimensions in the Inspector.
- Double-click the ground plane or a box/cylinder face to sketch on it. Use **XY · Top**, **XZ · Front**, or **YZ · Side** for a principal plane. Finish the sketch, then drag the extrusion arrow to add or cut material.
- Select a shape to reveal axis arrows. Use **Move** to translate it or **Resize** to change its dimensions.
- Drag the canvas to orbit; use two-finger trackpad scrolling to pan and pinch to zoom.
- Export an STL in millimeters for Bambu Studio.
- Designs are saved in this browser's local storage.

This is an early interaction prototype. Sketching supports rectangular profiles. Box cuts use a rectangular solid mesh, while cylinder cuts use a fine mesh approximation. `.blend` / `.fbx` export are not implemented.

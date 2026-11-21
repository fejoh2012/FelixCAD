# FelixCad prototype

A beginner-friendly browser CAD prototype for sketching rectangular profiles, extruding or cutting them, and exporting STL files for 3D printing.

## Run locally

Requires Node.js. From this folder, run:

```sh
node server.js
```

Then open [http://localhost:4174](http://localhost:4174).

## Try it

- Add a box or cylinder from the Build panel (or press **B** / **C**).
- Select a shape and edit its position and dimensions in the Inspector.
- Double-click the ground plane or a box/cylinder face to sketch on it. Use **XY · Top**, **XZ · Front**, or **YZ · Side** for a principal plane. Finish the sketch, then drag the extrusion arrow to add or cut material.
- Select a shape to reveal axis arrows. Use **Move** to translate it or **Resize** to change its dimensions.
- Drag the canvas to orbit; use two-finger trackpad scrolling to pan and pinch to zoom.
- Export an STL in millimeters for Bambu Studio.
- Designs are saved in this browser's local storage.

This is an early interaction prototype. Sketching supports rectangular profiles. Box cuts use a rectangular solid mesh, while cylinder cuts use a fine mesh approximation. `.blend` / `.fbx` export and the AI copilot are not implemented.

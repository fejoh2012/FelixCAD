# FelixCad prototype

A small browser CAD prototype for trying the beginner-first, trackpad-friendly workflow.

## Run locally

Requires Node.js. From this folder, run:

```sh
node server.js
```

Then open [http://localhost:4173](http://localhost:4173).

## Try it

- Add a box or cylinder from the Build panel (or press **B** / **C**).
- Select a shape and edit its position and dimensions in the Inspector.
- Double-click the ground plane or a box face to sketch a rectangle. Finish, then drag the extrusion arrow to set direction and distance. Intersections with boxes are cut automatically; clear space adds material.
- Select a shape to reveal colored axis arrows. Use **Move** to translate along an axis or **Resize** to change its dimensions.
- Drag empty canvas to orbit; use two-finger trackpad scrolling to pan and pinch to zoom.
- Export for printing to download an STL in millimeters for Bambu Studio.
- Designs are saved in this browser's local storage.

This is an early interaction prototype. Sketching supports rectangular profiles on the XY plane. Box intersections are represented as rectangular cuts in the model and STL export. Freeform profiles, curved booleans, and `.blend` / `.fbx` export are not implemented; the AI copilot is a placeholder.

# Front part of the PS8 project

This folder should contain all the static files that could be returned by the HTTP server to clients.

By default, the HTTP server used in `back/index.js` will start checking for files inside this repo.
This means that when a client targets `projectName.connect4.academy/folder1/file1.png`, 
the HTTP server will try to find `file1.png` inside `front/folder1`.

You are free to change this behavior, and to manage the folders and files inside this repo however you like, 
but remember to update the `back/index.js` file accordingly.
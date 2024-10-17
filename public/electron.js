const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const { autoUpdater } = require("electron-updater");
const fs = require("fs");
const log = require("electron-log");

let mainWindow;
let splashWindow;

function createWindow() {
  splashWindow = new BrowserWindow({
    icon: path.join(__dirname, "logo.png"),
    width: 295,
    height: 295,
    titleBarStyle: "hidden",
    transparent: true,
    alwaysOnTop: true,
    autoHideMenuBar: true,
    show: false,
  });

  mainWindow = new BrowserWindow({
    width: 900,
    height: 800,
    minHeight: 800,
    minWidth: 800,
    autoHideMenuBar:true,
    show: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  splashWindow.loadURL(`${path.join("file://", __dirname, "splash.html")}`);
  mainWindow.loadURL(
    !app.isPackaged
      ? "http://localhost:3000"
      : `${path.join("file://", __dirname, "../build/index.html")}`
  );

  splashWindow.once("ready-to-show", () => {
    splashWindow.center();
    splashWindow.show();
  });

  mainWindow.webContents.on("ready-to-show", () => {
    setTimeout(() => {
      mainWindow.show();
      splashWindow.close();
    }, 10000);
  });

  if (!app.isPackaged) {
    mainWindow.webContents.openDevTools();
  }

  mainWindow.on("closed", () => (mainWindow = null));

  // Check for updates after mainWindowdow is loaded
  autoUpdater.checkForUpdatesAndNotify();
}

app.on("ready", createWindow);

app.on("mainWindowdow-all-closed", () => {
  if (process.platform !== "darmainWindow") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});

// Evenemenents de mis à jour
autoUpdater.on("checking-for-update", () => {
  log.info("Vérification de mis à jour disponible ...");
});

autoUpdater.on("update-available", (info) => {
  log.info("Mis à jour disponible");
});

autoUpdater.on("update-not-available", (info) => {
  log.info("Mis à jour indisponible");
});

autoUpdater.on("error", (err) => {
  log.error("Erreur de téléchargement " + err);
});

autoUpdater.on("download-progress", (progressObj) => {
  let log_message = "Vitesse de téléchargement: " + progressObj.bytesPerSecond;
  log_message = log_message + " - Téléchargé " + progressObj.percent + "%";
  log_message =
    log_message +
    " (" +
    progressObj.transferred +
    "/" +
    progressObj.total +
    ")";
  log.info(log_message);

  mainWindow.webContents.send('update-progress', progressObj);
});

autoUpdater.on("update-downloaded", (info) => {
  log.info("Mis à jour téléchargé, Installation encours");
  mainWindow.webContents.send('update-ready');
  autoUpdater.quitAndInstall();
});

// Écouteur pour sauvegarder les données dans data.txt
ipcMain.on("save-data", (event, data) => {
  const filePath = path.join(app.getPath("userData"), "data.txt");
  const fileData = `Name: ${data.name}\nEmail: ${data.email}\n`;
  fs.writeFile(filePath, fileData, (err) => {
    if (err) {
      log.error("Erreur de sauvegarde du fichier data: ", err);
      event.reply("save-data-reply", "Error saving data.");
    } else {
      log.info("Fichier data sauvegarder");
      event.reply("save-data-reply", "Data saved successfully.");
    }
  });
});

ipcMain.on("minimize", (e) => {
  mainWindow.minimize();
});

ipcMain.on("maximize", (e) => {
  // mainWindow.restore()
  mainWindow.isMaximized() ? mainWindow.restore() : mainWindow.maximize();
});
ipcMain.on("close", (e) => {
  app.quit();
});

const { app, BrowserWindow } = require("electron");
const { spawn } = require("child_process");
const path = require("path");
const waitOn = require("wait-on");

let mainWindow;
let backendProcess;

function startBackend() {
  const jarPath = path.join(__dirname, "../backend/app.jar");

  backendProcess = spawn("java", ["-jar", jarPath]);

  backendProcess.stdout.on("data", (data) => {
    console.log(`Backend: ${data}`);
  });

  backendProcess.stderr.on("data", (data) => {
    console.error(`Backend Error: ${data}`);
  });
}

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    title: "Smart Optimizer 🚀",
    webPreferences: {
      nodeIntegration: true,
    },
  });
}

app.whenReady().then(() => {
  startBackend();

  // 👇 wait until backend is ready
  waitOn({
    resources: ["http://localhost:8080/api/metrics/health"],
    timeout: 30000,
  })
    .then(() => {
      console.log("✅ Backend ready");

      createWindow();
      mainWindow.loadURL("http://localhost:5173");
    })
    .catch((err) => {
      console.error("❌ Backend failed to start", err);
    });
});

app.on("window-all-closed", () => {
  if (backendProcess) backendProcess.kill();
  if (process.platform !== "darwin") app.quit();
});
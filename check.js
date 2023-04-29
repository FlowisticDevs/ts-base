const { exec } = require("child_process");
const os = require("os");

if (os.platform() === "linux") {
  console.log("Linux detected...");
  exec("sh deploy.sh", (err, stdout, stderr) => {
    if (err) {
      console.error(`Error: ${err}`);
      return;
    }
    console.log(`${stdout}`);
    console.error(`${stderr}`);
  });
} else if (os.platform() === "win32") {
  console.log("Windows detected...");
  exec(
    '"C:\\Program Files\\Git\\bin\\bash.exe" deploy.sh',
    (err, stdout, stderr) => {
      if (err) {
        console.error(`Error: ${err}`);
        return;
      }
      console.log(`${stdout}`);
      console.error(`${stderr}`);
    }
  );
} else {
  console.error("Unsupported OS");
}

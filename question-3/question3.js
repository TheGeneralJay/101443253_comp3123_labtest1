// Import necessary modules:
const fs = require("fs");

// Directory:
const directory = "./logs"

// Remove log files.
let removeLogFiles = () => {
    if (fs.existsSync(directory)) {
        // Read the files in the directory.
        files = fs.readdirSync(directory);

        // For each file...
        files.forEach(file => {
            // Remove the file.
            fs.unlink(`${directory}/${file}`, error => {
                if (error) throw error;

                console.log(`deleting files...${file}`);
            })
        });

        // Remove the logs folder when done.
        fs.rmdir(directory, error => {
            if (error) throw error;
        });
    }
}

// Create log files.
let createLogFile = () => {
    // Create the directory if it does not already exist.
    if (!fs.existsSync(directory)) fs.mkdirSync(directory);

    // Create 10 files using a for loop.
    for (let i = 0; i < 10; i++) {
        fs.writeFile(`./logs/log${i}.txt`, `This is the content for log${i}.txt.`, function (error) {
            if (error) throw error;
        });

        console.log(`log${i}.txt`);
    }
}

// createLogFile();
// removeLogFiles();
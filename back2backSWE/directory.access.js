const hasAccess = (folder, access, folders) => {
    const accessHash = createHash(folders);

    let curr = folder;
    // console.log(typeof access)
    while (curr != null) {
        if (access.has(curr)) return true;
        curr = accessHash[curr];
    }

    return false;
};

const createHash = (folders) => {
    const newHash = {};

    folders.forEach((folder) => {
        // every file will have one parent but multiple childern
        newHash[folder[0]] = folder[1];
    });

    return newHash;
};



var path = require("path"),
    fs = require("fs");

function fromDir(startPath, filter) {
    //console.log('Starting from dir '+startPath+'/');

    if (!fs.existsSync(startPath)) {
        console.log("no dir ", startPath);
        return;
    }

    var files = fs.readdirSync(startPath);
    // the returns an array of all the files in the directory
    for (var i = 0; i < files.length; i++) {
        var filename = path.join(startPath, files[i]);
        // joins the specified path segments into one path
        var stat = fs.lstatSync(filename);
        // method is used to synchronously return information about the symbolic
        //link that is being used to refer to a file or directory
        if (stat.isDirectory()) {
            fromDir(filename, filter); //recurse
        } else if (filename.indexOf(filter) >= 0) {
            console.log("-- found: ", filename);
        }
    }
}

fromDir("../LiteScript", ".html");
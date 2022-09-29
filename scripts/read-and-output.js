module.exports.getVersion = function() {
    const versionPath = '../VERSION';
    const version = fs.readFileSync(versionPath, 'utf8').toString().trim();
    const newDate = new Date()
    
    console.log(`webapp-v${version}-${newDate.getTime()}`);
}

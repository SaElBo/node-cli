import fs from 'fs-extra'

export default (theme, name, subfolder) => {
    // //registra il componente globalmente
    // // capitalize Name
    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
    const capitalizedTheme = theme.charAt(0).toUpperCase() + theme.slice(1);
    //read file and append to it
    //read process.cwd() + `/src/plugins/${capitalizedTheme}/globalComponents.js`
    fs.readFile(process.cwd() + `/src/plugins/${capitalizedTheme}/globalComponents.js`, 'utf8', function (err, data) {
        // append strinf after import and in install function
        if (err) throw err;
        const install = data.split('install(Vue) {')[1];
        const imports = data.split('export')[0];
        let newImport = `import ${capitalizedName} from '../../components/${capitalizedTheme}/` ;
        if(subfolder) {
            newImport += `${subfolder}/${name}'\n`;
        } else {
            newImport += `${name}'\n`;
        }
        //read the file again
        const result = 
        imports 
        + 
        newImport 
        +
`export default {\n 
    install(Vue) {\n
     Vue.component("${capitalizedTheme}.${capitalizedName}", ${name})\n`
                 + 
        install;

        fs.outputFile(process.cwd() + `/src/plugins/${capitalizedTheme}/globalComponents.js`, result, function (err) {
            if (err) throw err;
        });


    });
    return [capitalizedName, capitalizedTheme];
}
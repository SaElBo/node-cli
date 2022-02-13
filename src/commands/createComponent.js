import fs from 'fs-extra'
import registerComponent from '../registerComponent';
export default ({ logger, args, options }) => {
    const { theme, name, subfolder } = args;
    // crea file nella cartella giusta
    fs.readFile(__dirname + '/stubs/component.stub', 'utf8', function (err, data) {
        if (err) throw err;
        const result = data.replace(/\{\{name\}\}/g, name)
        fs.outputFile(process.cwd() + `/src/components/${theme}/${subfolder}/${name}.vue`, result, function (err) {
            if (err) throw err;
        })
    });

    logger.info(`${theme}.${name} created`);
    const [capitalizedName, capitalizedTheme] = registerComponent(theme, name, subfolder);
    logger.info(`${capitalizedTheme}.${capitalizedName} registered globally`);

}
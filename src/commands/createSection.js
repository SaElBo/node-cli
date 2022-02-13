import fs from 'fs-extra'
import registerComponent from '../registerComponent';
export default ({ logger, args, options }) => {
    const { theme, name } = args;
    // crea file nella cartella giusta
    fs.readFile(__dirname + '/stubs/section.stub', 'utf8', function (err, data) {
        if (err) throw err;
        const result = data.replace(/\{\{name\}\}/g, name)
        fs.outputFile(process.cwd() + `/src/components/${theme}/sections/${name}.vue`, result, function (err) {
            if (err) throw err;
        })
    });

    logger.info(`${theme}.${name} created`);
    const [capitalizedName, capitalizedTheme] = registerComponent(theme, name, 'section');
    logger.info(`${capitalizedTheme}.${capitalizedName} registered globally`);

}
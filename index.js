#!/usr/bin/env node

import program from "@caporal/core"
import createHeader from './src/commands/createHeader.js'
import createSection from "./src/commands/createSection.js"
import createFooter from './src/commands/createFooter.js'
import createComponent from './src/commands/createComponent.js'
program
    // First possible command: "make:header"
    .command("make:header", "Crete a new header")
    .argument("<theme>", "Where to add the header")
    .argument("<name>", "Name of the header")
    .action(createHeader)
    // Second possible command: "make:section"
    .command("make:section", "Crete a new section")
    .argument("<theme>", "Where to add the section")
    .argument("<name>", "Name of the section")
    .action(createSection)
    // third possible command: "make:component"
    .command("make:footer", "Crete a new footer")
    .argument("<theme>", "Where to add the footer")
    .argument("<name>", "Name of the footer")
    .argument("<subfolder>", "Subfolder of the footer")
    .action(createFooter)
    // fourth possible command: "make:component"
    .command("make:component", "Crete a new component")
    .argument("<theme>", "Where to add the component")
    .argument("<name>", "Name of the component")
    .action(createComponent)

program.run()

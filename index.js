import core from "@actions/core";

const greeting = core.getInput("greeting");
const output = `Hello, ${greeting}!`;

core.info(output);

core.setOutput("greeting", output);

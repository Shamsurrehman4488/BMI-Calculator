#! /usr/bin/env node

//Bmi Calculator Using Inquirer Prompt

import inquirer from "inquirer";

const questions = [
    {type: "number", name: "weight", message: "weight(kg):"},
    {type: "number", name: "height", message: "height(m):"},

];
const calculateBMI= (weight: number, height: number): number => weight/(height*height);

const main = async() => {
        const {weight,height} = await inquirer.prompt(questions);

    console.log(`BMI ${calculateBMI(weight,height).toFixed(2)}`)
};

main();
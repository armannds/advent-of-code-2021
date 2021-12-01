import { readFileSync } from "fs";
import { part1 as day1part1, part2 as day1part2 } from "./day01";
import path = require("path");

console.log("-------- Solutions --------");
console.log("-------- Day 01 --------");

const filepath = path.resolve(__dirname, "./inputs/input01.txt");
const file1 = readFileSync(filepath, "utf-8");
const input1 = file1.split("\n").map(i => i.trim());

const result0101 = day1part1(input1);
const result0102 = day1part2(input1);
console.log(`Part 1: ${result0101}`);
console.log(`Part 2: ${result0102}`);

import { parse } from 'csv-parse/sync';
import {test} from '@playwright/test'
import * as fs from 'fs'
 
test('csv',()=>{
const csvData = fs.readFileSync('/Users/testvagranttechnologies/Desktop/typescript_playwright/testdata/csvdata.csv');
const records = parse(csvData, {
  columns: true, // Converts rows to objects using header
  skip_empty_lines: true
});
console.log(records);
})
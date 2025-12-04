import excel, { Workbook } from 'exceljs'

 //To read single cell data from file 
 export async function readDataFromExcelFile(sheetname:string,path:string,rownum:number,cellnum:number)
 {
    const book=new excel.Workbook()
    await book.xlsx.readFile(path)
    const sheet :any=book.getWorksheet(sheetname)
    const data =await sheet.getCell(rownum,cellnum).value
    //const data=await sheet.getRow(rownum).getCell(cellnum).value
    return data
 }

  //To read all data from file row-by-row

  export async function readAllDataExcelFile(sheetname:string,path:string)
  {
    const book =new excel.Workbook()
    await book.xlsx.readFile(path)
    const sheet:any= book.getWorksheet(sheetname)
    let data=[]
    for(let rownum=1;rownum<=sheet.rowCount;rownum++)
    {
        let rowData=[]
        for(let colnum=1;colnum<=sheet.columnCount;colnum++)
        {
            rowData.push(sheet.getCell(rownum,colnum).value)
        }
        data.push(rowData)
    }
    return data

  }

  //To read all data from a row
  export async function readRowData(sheetname:string,path:string,colNum:number)
  {
    const book=await new excel.Workbook()
    await book.xlsx.readFile(path)
    const sheet:any= book.getWorksheet(sheetname)
    let rowData=[]
    for(let rownum=2;rownum<=sheet.rowCount;rownum++) // rownum=1 fetches the header also, rownum=2 reads values from 2nd row
    {
        rowData.push(sheet.getCell(rownum,colNum).value)
    }
    return rowData
  }

  // To read all data from a column
  export async function readColData(sheetname:string,path:string,rowNum:number) 
  {
    const book =await new excel.Workbook()
    await book.xlsx.readFile(path)
    const sheet:any=book.getWorksheet(sheetname)
    let colData=[]
    for(let colnum=1;colnum<=sheet.columnCount;colnum++)
    {
        colData.push(sheet.getCell(rowNum,colnum).value)
    }
    return colData
}

//Write data to excel - single cell
export async function writetoExcelSingleCell(sheetname:string,path:string,rownum:number,colnum:number)
{
    const book= new excel.Workbook()
    await book.xlsx.readFile(path)    
    const sheet:any=book.getWorksheet(sheetname) //to add data to existing sheet
    //const sheet =book.addWorksheet(sheetname); //to add a new worksheet
    // sheet.getRow(rownum).getCell(colnum).value='test'
    sheet.getCell(rownum,colnum).value='test'
    await book.xlsx.writeFile(path)
}
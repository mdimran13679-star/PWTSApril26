import { log } from 'console'
import xlsx from 'xlsx'

export class ExcelUtils{

    // filePath - excel.xlsx
    // sheetName - Login

    static getExcelData(filePath: string, sheetName: string){
        try{
            const wb = xlsx.readFile(filePath)
            const sheet = wb.Sheets[sheetName]
            const data = xlsx.utils.sheet_to_json(sheet)
            return data
        }
        catch(error)
        {
            console.log(error);
        }

    }



}

// const data = ExcelUtils.getExcelData("C:/Users/pkroy/Videos/PWTSMay26/testdata/excel.xlsx", "Login")
// console.log(data);


// @ts-check
const Gsweet = require('gsweet')

const main = async () => {
  console.log('Starting...')
  const gsweet = new Gsweet('/Users/tod-gentille/dev/node/ENV_VARS/gsweet.env.json')
  const {driveOps} = gsweet
  const {sheetOps} = gsweet
  const {mimeType} = driveOps

  // Drive Examples
  // driveOps.autoInit()
  const TEST_FILE = 'node-test-sheet'
  const result = await driveOps.getFiles({withName: TEST_FILE, exactMatch: true})
  console.log(result)

  const LB_FOLDER = '1svR6YuJIfkfJZEDb9XTlt82s57Kagbxg'
  const full = await driveOps.getFilesInFolder({withFolderId: LB_FOLDER, ofType: mimeType.FILE})
  console.log(full[0])

  // Sheet Examples

  const sheetRange = {
    id: '105LhrjQp75T4Q4mZ337ydosno6tjKjDzXNutXf24c1c',
    range: 'Sheet1!A1',
    value: '',
    data: [['Test1'], ['Test2']],
  }

  const result2 = await sheetOps.setRangeData(sheetRange)

  console.log(result2.config.data.values) // just showing the values passed in
  console.log('Num Cells Updated:', result2.data.updatedCells, ' on spreadsheet', result2.data.spreadsheetId)

  // console.log(result) if you want to see all the fields available

  sheetRange.value = 'Convenient for writing a single cell'
  await sheetOps.setSheetCell(sheetRange)
}

main()

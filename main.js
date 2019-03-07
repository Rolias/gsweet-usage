const {driveOps, sheetOps} = require("gsweet")
require("env-create").load({path: "/Users/tod-gentille/dev/node/ENV_VARS/gsweet.env.json"})


const main = async () => {
  console.log("Starting...")
  driveOps.autoInit()
  const TEST_FILE = "node-test-sheet"
  let result = await driveOps.getFilesByName(TEST_FILE)
  console.log(result)

  const sheetRange = {
    id: "105LhrjQp75T4Q4mZ337ydosno6tjKjDzXNutXf24c1c",
    range: "Sheet1!A1",
    data: [["Test1"], ["Test2"]],
  }
  sheetOps.autoInit()
  result = await sheetOps.setRangeData(sheetRange)
  console.log(result.config.data.values) // just showing the values passed in
  console.log("Num Cells Updated:", result.data.updatedCells)
  // console.log(result) if you want to see all the fields available

  sheetRange.value = "Convenient for writing a single cell"
  await sheetOps.setSheetCell(sheetRange)
}

main()
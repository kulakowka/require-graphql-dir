import test from "ava";
import requireGraphql from "../index";
import fs from "fs";

const schema = requireGraphql(__dirname);
const result = fs.readFileSync("./test/result.txt", "utf8");

test("schema equal", t => {
  t.is(schema, result);
});

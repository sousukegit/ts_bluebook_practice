import * as fs from "fs";
import * as path from "path";
import * as url from "url";
//現在のファイルのパスを取得
const nowPath = url.fileURLToPath(import.meta.url);
//ディレクトリのみに加工する
const nowDir = path.dirname(nowPath);
//指定パスの絶対パスを作成
const currentPath = path.join(nowDir, "../practice.txt");
const fileText = fs.readFileSync(currentPath, { encoding: "utf-8" });
let startIndex = 0;
let count = 0;
while (true) {
    let nextIndex = fileText.indexOf("uhyo", startIndex);
    if (nextIndex >= 0) {
        count += 1;
        startIndex = nextIndex + 1;
    }
    else {
        break;
    }
}
console.log(count);

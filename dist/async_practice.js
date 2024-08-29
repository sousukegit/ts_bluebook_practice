import { readFile } from "fs/promises";
import * as path from "path";
import * as url from "url";
//現在のファイルのパスを取得
const nowPath = url.fileURLToPath(import.meta.url);
//ディレクトリのみに加工する
const nowDir = path.dirname(nowPath);
//指定パスの絶対パスを作成
const currentPath = path.join(nowDir, "../practice.txt");
const sleep = (num) => {
    return new Promise((resolve) => {
        setTimeout(resolve, num);
    });
};
const fileRead = async () => {
    try {
        //タイマースタート
        const data = await readFile(currentPath, "utf-8");
        //処理が終わってなかったらthorowエラー
        console.log("ファイルを読み込みました");
        return data;
    }
    catch (error) {
        console.log(error);
        return "error";
    }
};
let startIndex = 0;
let count = 0;
sleep(1).then(() => {
    console.log("processを修了します");
    process.exit();
});
const fileText = await fileRead();
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

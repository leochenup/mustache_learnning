// 使用 scanner 扫描生成 tokens
import Scanner from "./Scanner";

export default function (tempalteStr) {
  let tokens = [];
  let words;
  const scanner = new Scanner(tempalteStr);

  while (!scanner.eos()) {
    words = scanner.scanUtil("{{");

    words && tokens.push(["text", words]);
    scanner.scan("{{");
    words = scanner.scanUtil("}}");
    if (words) {
      if (words.startsWith("#")) {
        tokens.push(["#", words.substring(1)]);
      } else if (words.startsWith("/")) {
        tokens.push(["/", words.substring(1)]);
      } else {
        tokens.push(["name", words]);
      }
    }
    scanner.scan("}}");
  }

  return tokens;
}

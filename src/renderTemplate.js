// tokens 中 插入数据
export default function renderTemplate(data, tokens) {
  let str = "";

  tokens.forEach((token, index) => {
    if (token[0] === "#") {
      // ["#", 属性, 子tokens]
      data = data[token[1]];
      for (let i = 0; i < data.length; i++) {
        str += renderTemplate(data[i], token[2]);
      }
    } else if (token[0] === "text") {
      // 匹配 ["text", 字符串值]
      str += token[1];
    } else {
      // 如果是 name
      if (token[1] === ".") {
        //  匹配 {{.}}
        str += data;
      } else if (token[1].includes(".")) {
        // 匹配 {{a.b.c}}
        let arrNames = token[1].split(".");
        str += arrNames.reduce((a, c) => a[c], data);
      } else {
        // 匹配 {{ 属性名 }}
        str += data[token[1]];
      }
    }
  });

  return str;
}

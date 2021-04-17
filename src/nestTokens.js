//   // 递归实现
// export default function nestTokens(tokens) {
//   let cTokens = JSON.parse(JSON.stringify(tokens));
//   let res = [];
//   let j = 0;

//   for (let i = 0; i < cTokens.length; i++, j++) {
//     const token = cTokens[i];
//     res[j] = token;
//     if (token[0] === "#") {
//       let nameTag = token[1];
//       let endI =
//         cTokens
//           .slice(i)
//           .findIndex((item) => item[0] == "/" && item[1] == nameTag) + i;

//       let subTokens = cTokens.slice(i + 1, endI);
//       res[j].push(nestTokens(subTokens));
//       i = endI;
//     }
//   }
//   return res;
// }


// tokens 折叠

// 栈实现
export default function nestTokens(tokens) {
  let res = [];
  let stack = [];

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    switch (token[0]) {
      case "#":
        token[2] = [];
        stack.push(token);
        break;
      case "/":
        let section = stack.pop();
        stack.length > 0
          ? stack[stack.length - 1][2].push(section)
          : res.push(section);
        break;
      default:
        if (stack.length === 0) {
          res.push(token);
        } else {
          stack[stack.length - 1][2].push(token);
        }
        break;
    }
  }
  return res;
}

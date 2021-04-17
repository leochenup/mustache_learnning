import Scanner from "./Scanner";
import parseTemplateToTokens from "./parseTemplateToTokens";
import nestTokens from "./nestTokens";
import renderTemplate from "./renderTemplate";

window.templateEngine = {
  render(tempalteStr, data) {
    let tokens = parseTemplateToTokens(tempalteStr);
    let finalTokens = nestTokens(tokens);
    return renderTemplate(data, finalTokens);
  },
};

let data = {
  name: "leochenxi",
  age: 12,
  a: { b: { c: "a.b.c" } },
  students: [
    {
      name: "leo11",
      hobbits: ["爱好1"],
      ppt: { user: { hh: "ppasdasasdasdadsppp" } },
    },
    {
      name: "leo2",
      hobbits: ["爱好2asd", "爱好5"],
      ppt: { user: { hh: "ttetetetetetet" } },
    },
    {
      name: "leo3",
      hobbits: ["爱好3", "爱好6"],
      ppt: { user: { hh: "nmmmmmmmmmmmmmmm" } },
    },
  ],
  hobbits: ["爱好1", "爱好3", "爱好2"],
};

let template = templateEngine.render(
  `<div>你好{{name}}，我{{age}}了 {{a.b.c}} 
        <ul class="my-ul">
            {{#students}}
                <li>
                    <span>姓名：{{name}}</span>
                    <span>运算符{{ppt.user.hh}}</span>
                    <div>爱好</div>
                    <ul>
                        {{#hobbits}}
                            <li>{{.}}</li>
                        {{/hobbits}}
                    </ul>
                </li>
            {{/students}}
        </ul>
        <a href="http://wwww.baidu.com">点击</a>
        <button >点击</button>
        <form>
            <input type="text" placeholder="输入东东..."/>
            <button >提交</button>
        </form>
    </div>`,
  data
);
console.log(template)
document.body.innerHTML = template;

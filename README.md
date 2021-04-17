# mustache

## Mustache 基础语法

``` js
let domString = Mustache.render(tempalte, data)
```
`domString` 是把 `data` 和 `tempalte` 整合而成的 `HTML` 字符串。

tempalte 的各式如下：
``` js
let tempalte = `<div>你好{{name}}，我{{age}}了 {{a.b.c}} 
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
    </div>`
```
data 的结构
``` js
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
```
结果如下：
![](https://my-blog-leo.oss-cn-chengdu.aliyuncs.com/%E6%88%AA%E5%B1%8F2021-04-17%20%E4%B8%8B%E5%8D%8810.11.12.png)


## Mustache 核心机理
* 通过实例化 Scanner 得到 scanner。
* 通过 parseTemplateToTokens，内部循环调用 scanner.scanUtil scanner.scan 两个函数，得到初步的 tokens。
* 将上一步的 tokens 经过 nestTokens 处理，得到有层级嵌套的 tokens。
* 通过 renderTemplate 将 tokens 和 data 整合成最终的 domString。

流程图如下：
![](https://my-blog-leo.oss-cn-chengdu.aliyuncs.com/mustache%E6%B5%81%E7%A8%8B%E5%9B%BE.png)
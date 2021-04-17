// 扫描
export default class Scanner {
  constructor(templateStr) {
    this.templateStr = templateStr;
    this.pos = 0;
    this.tail = this.templateStr;
  }
  // 走过指定内容
  scan(tag) {
    if (this.tail.startsWith(tag)) {
      this.pos += tag.length;
      this.tail = this.templateStr.substring(this.pos);
    }
  }
  // 遇到置顶内容结束，返回扫描的内容
  scanUtil(stopTag) {
    const pos_backup = this.pos;
    while (!this.tail.startsWith(stopTag)) {
      if (this.tail.length <= 0) {
        break;
      }
      this.pos++;
      this.tail = this.templateStr.substring(this.pos);
    }
    return this.templateStr.substring(pos_backup, this.pos);
  }

  eos() {
    return this.tail.length === 0;
  }
}

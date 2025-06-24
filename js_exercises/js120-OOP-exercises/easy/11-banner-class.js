class Banner {
  static buffer = 2;
  constructor(message, width) {
    this.message = message;
    this.width = width;
    if (!this.width || this.width < this.message.length) {
      this.width = this.message.length;
    }
  }

  messageBuffer() {
    let remainingSpace = (this.width - this.message.length) + Banner.buffer;
    return {
      left: ' '.repeat(Math.floor(remainingSpace / 2)),
      right: ' '.repeat(Math.ceil(remainingSpace / 2))
    }
  }

  displayBanner() {
    console.log([this.horizontalRule(), this.emptyLine(), this.messageLine(), this.emptyLine(), this.horizontalRule()].join("\n"));
  }

  horizontalRule() {
    return `+${`-`.repeat(this.width + Banner.buffer)}+`;
  }

  emptyLine() {
    return `|${' '.repeat(this.width + Banner.buffer)}|`;
  }

  messageLine() {
    let messageBuffer = this.messageBuffer();
    return `|${messageBuffer.left}${this.message}${messageBuffer.right}|`
  }
}

/**
 * Width minimum === message.length
 * 
 * Spaces between message:
 * Remaining spaces: Width - Message.length
 * Spaces from left: Remainig spaces / 2 round down
 * Spaces from right: Remaning spaces / 2 round up
 * 
 * 11 - 8 === 3
 * 
 * 
 * 
 * 
 */


let banner1 = new Banner('To boldly go where no one has gone before.', 100);
banner1.displayBanner();

/**
+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+
 */

let banner2 = new Banner('');
banner2.displayBanner();

/**
+--+
|  |
|  |
|  |
+--+
 */
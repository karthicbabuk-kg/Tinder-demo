class Message {
    constructor({ from_userId, to_userId, content }) {
      this.from_userId = from_userId;
      this.to_userId = to_userId;
      this.content = content;
    }
  }
  
  module.exports = { Message };
  
const rp = require('request-promise');

const deleteMessageRequest = require('./request.models/delete.message/delete.message');
const sendMessageRequest = require('./request.models/send.message/send.message');

class MessageConnector {

  async sendMessage(requestBody) {
    sendMessageRequest.body = requestBody;
    let id = null;
    try {
      browser.logger.info('[Send] Sending message with subject:', sendMessageRequest.body.subject);
      let response = await rp(sendMessageRequest);
      id = response.body.messageId;
    } catch (error) {
      browser.logger.error(error);
    }
    return id;
  }

  async deleteMessage(messageId) {
    deleteMessageRequest.body.messageIds = [messageId];
    try {
      browser.logger.info('[Delete] message with id:', messageId);
      return await rp(deleteMessageRequest);
    } catch (error) {
      browser.logger.error(error);
    }
  }
}

module.exports = new MessageConnector();

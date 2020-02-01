/**
 * Create an alert element
 * @param {string} msg alert message
 */
const createAlert = (msg) => {
  const $alert = $("#alert-template").clone().removeAttr("id");
  const $container = $("#alert-text");

  $alert.find("span.msg").text(msg);
  $container.append($alert);
};

/**
 * Display alert messages to user
 * @param {array} messages array of alert messages
 */
// eslint-disable-next-line no-unused-vars
const alertUser = (messages) => {
  // clean the container 
  $("#alert-text").empty();

  return messages.forEach((message) => createAlert(message.msg));
};

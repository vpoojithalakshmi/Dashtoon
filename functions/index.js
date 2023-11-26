// functions/index.js
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

// Your Cloud Function
exports.updateUser = functions.database.ref("/users/{userId}").onWrite((change, context) => {
  console.log("User updated");
  return null;
});

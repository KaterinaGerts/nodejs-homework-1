const fs = require("fs/promises");
const contactsPath = require("./contactPath");

const listContacts = async () => {
  try {
    const contactsData = await fs.readFile(contactsPath, "utf8");
    const contacts = JSON.parse(contactsData);
    // console.table(contacts);
    return contacts;
  } catch (error) {
    throw error;
  }
};

module.exports = listContacts;

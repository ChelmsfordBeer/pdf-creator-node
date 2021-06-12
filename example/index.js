/* jshint esversion:6 */
const pdf = require("@chelmsfordbeer/pdf-creator-node");
// const pdf = require("../index");
const fs = require("fs");
const path = require("path");
// Read HTML Template
const html = fs.readFileSync(path.join(__dirname, "./template.html"), "utf8");

const options = {
  format: "A3",
  orientation: "portrait",
  border: "10mm",
};

const users = [{
    name: "Shyam",
    age: "26",
  },
  {
    name: "Navjot",
    age: "26",
  },
  {
    name: "Vitthal",
    age: "26",
  },
];

const document = {
  html: html,
  data: {
    users: users,
  },
  path: "./output.pdf",
  type: "buffer", // "stream" || "buffer" || "" ("" defaults to pdf)
};

console.log(document);
pdf.create(document, options)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });
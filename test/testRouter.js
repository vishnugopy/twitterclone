const express = require("express");
const server = require("../src/server");
const Router = require("../src/router");

// const request = require("supertest");

const app = express();

app.use("/profile/16", Router);
// test("index route works", done => {
//    console.log("hello");
// });
describe("Router", function () {
  describe("#getprofile", function () {
    it("should call getprofile when going to route /profile/:iduser");
  });
});

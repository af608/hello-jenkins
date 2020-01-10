var request = require("supertest");
var app = require("../app.js");

describe("GET /", function() {
  it("respond with hello world", done => {
    request(app)
      .get("/")
      .expect("Hello World\n", done);
  });
});

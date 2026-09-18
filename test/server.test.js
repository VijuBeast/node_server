const request = require("supertest");
const app = require("../src/server");

describe("Student API", () => {

  test("GET / should return API message", async () => {
    const response = await request(app)
      .get("/");

    expect(response.statusCode).toBe(200);

    expect(response.body.message)
      .toBe("Student API is running");
  });

  test("GET /students should return students", async () => {
    const response = await request(app)
      .get("/students");

    expect(response.statusCode).toBe(200);

    expect(response.body).toHaveLength(2);
  });

  test("GET /students/1 should return Rahul", async () => {
    const response = await request(app)
      .get("/students/1");

    expect(response.statusCode).toBe(200);

    expect(response.body.name)
      .toBe("Rahul");
  });

  test("GET /students/999 should return 404", async () => {
    const response = await request(app)
      .get("/students/999");

    expect(response.statusCode).toBe(404);
  });

});
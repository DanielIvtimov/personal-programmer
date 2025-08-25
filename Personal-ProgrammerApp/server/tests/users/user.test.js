const fetch = require("cross-fetch");

describe("GraphQL Users API", () => {
  test("should fetch all users", async () => {
    const query = `
        query {
            users {
                data {
                    id
                    name
                    email
                }
            }
        }
    `;
    const response = await fetch("https://graphqlzero.almansi.me/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });
    const result = await response.json();
    console.log("Result is:", result);
    expect(result.data.users.data.length).toBeGreaterThan(0);
    console.log(result.data.users.data);
    result.data.users.data.map(user => {
        expect(user.id).toBeDefined();
        expect(user.name).toBeDefined();
        expect(user.email).toBeDefined();
    }) 
  });
});

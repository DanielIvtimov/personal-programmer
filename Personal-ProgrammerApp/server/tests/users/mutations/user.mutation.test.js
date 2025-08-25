const fetch = require("cross-fetch");

describe("GraphQL users mutations API", () => {
    test("should create a new user", async () => {
        const mutation = `
            mutation {
                createUser(input: { username: "daniel_ivtimov", name: "Daniel Ivtimov", email: "danielivtimov@gmail.com" }) {
                    id
                    name
                    email
                }
            }
        `;
        const response = await fetch("https://graphqlzero.almansi.me/api", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ query: mutation}),
        });
        const result = await response.json();
        console.log("Result from creating user", result);
        expect(result.data.createUser).toBeDefined();
        expect(result.data.createUser.id).toBeDefined();
        expect(result.data.createUser.name).toBe("Daniel Ivtimov");
        expect(result.data.createUser.email).toBe("danielivtimov@gmail.com");
    });

    test("should update a existing user", async () => {
        const mutation = `
            mutation {
                updateUser(id: 10, input: { name: "Daniel is Updated", email: "daniel.updated@gmail.com" }) {
                    id
                    name
                    email
                }
            }
        `;
        const response = await fetch("https://graphqlzero.almansi.me/api", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query: mutation }),
        });
        const result = await response.json();
        console.log("Result from updating user:", result);
        expect(result.data.updateUser).toBeDefined();
        expect(result.data.updateUser.id).toBe("10");
        expect(result.data.updateUser.name).toBe("Daniel is Updated");
        expect(result.data.updateUser.email).toBe("daniel.updated@gmail.com");
    })

    test("Should delete a user", async () => {
        const mutation = `
            mutation {
                deleteUser(id: 10)
            }
        `;
        const response = await fetch("https://graphqlzero.almansi.me/api", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ query: mutation}),
        });
        const result = await response.json();
        console.log("Result from deleting user:", result);
        expect(result.data.deleteUser).toBe(true);
    });
});



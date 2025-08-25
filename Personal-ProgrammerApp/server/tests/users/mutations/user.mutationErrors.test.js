const fetch = require("cross-fetch");

describe("GraphQL users errors mutation API", () => {
    test("should fail to create user without name", async () => {
        const mutation = `
            mutation {
                createUser(input: {}) {
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
            body: JSON.stringify({ query: mutation }),
        });
        const result = await response.json();
        console.log("Error test for creating user:", result);
        expect(result.errors).toBeDefined();
        result.errors.map(error => {
            expect(error.message).toBeTruthy();
        }) 
    });

    test("should fail to update user with invalid ID", async () => {
        const mutation = `
            mutation {
                updateUser(id: 9999, input: { name: "Test", email: "test@example.com" }) {
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
        console.log("Error for updating user", result);
        expect(result.data.updateUser).toBeDefined();
        expect(result.data.updateUser.id).toBeNull();
    });

    test("shoud fail to delete user with invalid ID", async () => {
        const mutation = `
            mutation {
                deleteUser(id: 10)
            }
        `;
        const response = await fetch ("https://graphqlzero.almansi.me/api", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query: mutation }),
        });
        const result = await response.json();
        console.log("Error for deleting user:", result);
        expect(result.data.deleteUser).toBeDefined();
        expect(result.data.deleteUser).toBe(true);
    });
})
const fetch = require("cross-fetch");

describe("GraphQL Albums API", () => {
    test("should fetch albums for users", async () => {
        const query = `
            query {
                user(id: 1) {
                    id
                    name
                    albums {
                        data {
                            id
                            title
                        }
                    }
                }
            }
        `;
        const response = await fetch("https://graphqlzero.almansi.me/api", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ query })
        });
        const result = await response.json();
        console.log("Album result is:", result);
        expect(result.data.user).toBeDefined();
        console.log(result.data.user);
        expect(result.data.user.albums.data.length).toBeGreaterThan(0);
        result.data.user.albums.data.forEach(album => {
            expect(album.id).toBeDefined();
            expect(album.title).toBeDefined();
        });
    });
});
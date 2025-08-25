# Personal Programmer API Tests

This repository contains automated tests for the GraphQL API focusing on Users and their Albums, using Jest and cross-fetch. The project also includes a CI/CD workflow configured with GitHub Actions.

---

## How to Use
### 1. Clone the repository
git clone https://github.com/DanielIvtimov/personal-programmer.git
cd Personal-ProgrammerApp/server

### 2. Install dependencies

npm install

### 3. Run tests locally

npm test

## CI/CD Workflow
- The file `.github/workflows/ci.yml` is configured for GitHub Actions.
- The workflow is triggered on every **push** and **pull request** to the `main` branch.
- Steps:
  1. Checkout the repository
  2. Set up Node.js
  3. Install dependencies (`npm install`)
  4. Run tests (`npm test`)
- If the tests pass, the workflow shows a green status; otherwise, it shows a failure.


### Project Structure
Personal-ProgrammerApp/
├─ server/
│  ├─ tests/
│  │  ├─ users/
│  │  │  ├─ user.test.js
│  │  │  ├─ mutations/
│  │  │  │  ├─ user.mutation.test.js
│  │  │  │  └─ user.mutationErrors.test.js
│  │  └─ albums/
│  │     └─ albums.test.js
│  ├─ package.json
│  └─ package-lock.json
└─ .github/
   └─ workflows/
      └─ ci.yml

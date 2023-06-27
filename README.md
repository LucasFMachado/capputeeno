# Capputeeno

## Getting Started

First, install fake API dependencies and run:
```bash
# Enter on API folder:
cd api

# Install dependencies:
yarn
# or
npm install

# Run API:
yarn start
# or
npm run start
```

Then, install project dependencies and run (make sure you are in the root folder of the project):
```bash
# Install dependencies:
yarn
# or
npm install

# Run project:
yarn dev
# or
npm run dev
```

Finally, open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

<hr />

## Technical choices:

**- Project creation:**
  
  I created the project using create next-app (https://nextjs.org/docs/api-reference/create-next-app). The Next version used was 13, and the project uses the new concepts and features of this version.


**- Architecture**

  I divided the project in a way that it could be scalable. I preferred to leave the styling files inside their respective folders (with the exception of the global and home styles), so that later maintenance would be easier.
  To make requests to the API, was used libraries like **tanstack/react-query** (to manage the cache and the states of the requests) and **axios** (to make the HTTP request).


**- Styles:**

  For the styling of the project, I used the **styled-components** library. I really like using this library because I think it keeps the code organized, and makes it much easier to style using cascade.


**- Code styling:**

  For pattern of project's code, I used the eslint and prettier libraries, so that coding rules and patterns could be implemented.


## Main technologies used in the project:

* [NextJS](https://nextjs.org)
* [TypesCript](https://www.typescriptlang.org)
* [Styled-Components](https://styled-components.com)
* [ESLint](https://eslint.org)
* [Prettier](https://prettier.io)
* [TanStack/React-Query](https://tanstack.com/query)
* [Axios](https://axios-http.com)


## Project images:

Product list:
<br />
![Product list image](https://github.com/LucasFMachado/caputeeno/assets/28274599/0f762783-0db2-4e97-ab8e-b8bc21ead51f)

Product information:
<br />
![Product info image](https://github.com/LucasFMachado/caputeeno/assets/28274599/3ef05eb6-ace2-49e8-8ddb-035bc5ee4446)

Cart image:
<br />
![Cart image](https://github.com/LucasFMachado/caputeeno/assets/28274599/a010b105-3afc-4664-82e8-e80e5e919ebf)

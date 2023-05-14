import matchers from "@testing-library/jest-dom/matchers";
import { configure } from "@testing-library/react";

expect.extend(matchers);

configure({ defaultHidden: true });

import { setupServer } from "msw/node";

export const server = setupServer();

beforeAll(() => {
  server.listen();
});

afterAll(() => {
  server.close();
});

import matchers from "@testing-library/jest-dom/matchers";
import { configure } from "@testing-library/react";

expect.extend(matchers);

configure({ defaultHidden: true });

import { snakeCase } from "change-case";

export const camelToSnake = val => (
    (typeof val !== 'object' || val === null)
        ? val
        : Array.isArray(val)
            ? val.map(camelToSnake)
            : renameKeys(val)
);

const renameKeys = obj => Object.fromEntries(
    Object.entries(obj)
        .map(([key, val]) => [
            snakeCase(key),
            camelToSnake(val)
        ])
);

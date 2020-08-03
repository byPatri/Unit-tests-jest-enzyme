export const toMock = <T extends (...args: any[]) => any>(fn: T) => fn as jest.MockedFunction<T>;

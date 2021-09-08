import { isCSR, convertURLToCSR, getConvertedPath } from "@/helpers/url.js";

describe("url.js isCSR()", () => {
  afterEach(() => {
    jest.resetModules();
  });

  it("returns false if not given a value", () => {
    const result = isCSR();
    expect(result).toEqual(false);
  });

  it("returns false if given a value that does not contain -csr at the end", () => {
    const result = isCSR("potato");
    expect(result).toEqual(false);
  });

  it("returns true if given a value that does contain -csr at the end", () => {
    const result = isCSR("potato-csr");
    expect(result).toEqual(true);
  });

  it("returns true if given a value that contains -csr anywhere in it", () => {
    const result = isCSR("-csrpotato");
    expect(result).toEqual(true);
  });

  it("returns true if given a value that contains -csr anywhere in it (test 2)", () => {
    const result = isCSR("potato-csrpotato");
    expect(result).toEqual(true);
  });
});

describe.skip("url.js convertURLToCSR()", () => {
  afterEach(() => {
    jest.resetModules();
  });

  it.skip("throws error if not given a value", () => {
    expect(convertURLToCSR()).toThrow()
  });

  it("appends -csr to the end of a path it's passed", () => {
    expect(convertURLToCSR("potato")).toEqual("potato-csr")
  });
});

describe.skip("url.js getConvertedPath()", () => {
  afterEach(() => {
    jest.resetModules();
  });

  it("doesn't duplicate suffix", () => {
    const result = getConvertedPath("string/string1-csr", "string/string2-csr")
    expect(result).not.toEqual("/string2-csr-csr")
  });
});

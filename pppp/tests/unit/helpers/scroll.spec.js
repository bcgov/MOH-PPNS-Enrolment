import * as scroll from "@/helpers/scroll.js";

const spyOnWindowScrollTo = jest
  .spyOn(window, "scrollTo")
  .mockImplementation(jest.fn);

describe("Helper scroll.js scrollTo()", () => {
  afterEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
  });

  it("calls window.scrollTo() when helperscrollTo() is called", () => {
    scroll.scrollTo(0);
    expect(spyOnWindowScrollTo).toHaveBeenCalled();
  });
});



describe("ONE", () => {
    it("returns the first value passed as an argument", () => {
      expect(identity(3)).toBe(3);
      expect(identity("winter")).toBe("winter");
      expect(identity(true)).toBe(true);
      expect(identity(null)).toBe(null);
      expect(identity()).toBe(undefined);
    });
    it("returns the first reference as the one passed as an argument", () => {
      const arr = ["Crono", "Frog", "Robo"];
      expect(identity(arr)).toBe(arr);
    });
  });
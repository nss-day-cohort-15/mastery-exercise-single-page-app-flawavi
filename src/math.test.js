describe("The specification for basic math", function() {

  it("should have an add function", function() {
    expect(add).toBeDefined();
  });

  it("should add two integers", function() {
    expect(add(2, 5)).toBe(7);
    expect(add(-2, -5)).toBe(-7);
  });

  it("should add two stringed numbers", function() {
    expect(add("2", "5")).toBe(7);
  })

  it("should have a subtract function", function() {
    expect(subtract).toBeDefined();
  });

  it("should subtract two integers", function() {
    expect(subtract(7, 5)).toBe(2);
    expect(subtract(-7, -5)).toBe(-2);
  });

  it("should subtract two stringed numbers", function(){
    expect(subtract("7", "5")).toBe(2);
  })

});

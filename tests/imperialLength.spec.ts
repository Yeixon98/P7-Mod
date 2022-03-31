import "mocha";
import { expect } from "chai";
import { ImperialLength } from '../src/imperialLength'

describe("Imperial Length Pulgada", () => {
  const imperialInstance: ImperialLength = new ImperialLength(12000,"plg");
  it("Pulgada -> Pulgada", () => {
    expect(imperialInstance.convert("plg")).to.be.equal(12000);
  });
  it("Pulgada -> Pie", () => {
    expect(imperialInstance.convert("pie")).to.be.equal(999);
  });
  it("Pulgada -> Yard", () => {
    expect(imperialInstance.convert("yd")).to.be.equal(333);
  });
  it("Pulgada -> Milla", () => {
    expect(imperialInstance.convert("milla")).to.be.equal(1225);
  });
});

describe("Imperial Length Pie", () => {
  const imperialInstance: ImperialLength = new ImperialLength(12000,"pie");
  it("Pie -> Pulgada", () => {
    expect(imperialInstance.convert("plg")).to.be.equal(144000);
  });
  it("Pie -> Pie", () => {
    expect(imperialInstance.convert("pie")).to.be.equal(12000);
  });
  it("Pie -> Yard", () => {
    expect(imperialInstance.convert("yd")).to.be.equal(3999);
  });
  it("Pie -> Milla", () => {
    expect(imperialInstance.convert("milla")).to.be.equal(2);
  });
});

describe("Imperial Length Yard", () => {
  const imperialInstance: ImperialLength = new ImperialLength(12000,"yd");
  it("Yard -> Pulgada", () => {
    expect(imperialInstance.convert("plg")).to.be.equal(432000);
  });
  it("Yard -> Pie", () => {
    expect(imperialInstance.convert("pie")).to.be.equal(36000);
  });
  it("Yard -> Yard", () => {
    expect(imperialInstance.convert("yd")).to.be.equal(12000);
  });
  it("Yard -> Milla", () => {
    expect(imperialInstance.convert("milla")).to.be.equal(6);
  });
});

describe("Imperial Length Milla", () => {
  const imperialInstance: ImperialLength = new ImperialLength(25,"milla");
  it("Milla -> Pulgada", () => {
    expect(imperialInstance.convert("plg")).to.be.equal(1584000);
  });
  it("Milla -> Pie", () => {
    expect(imperialInstance.convert("pie")).to.be.equal(132000);
  });
  it("Milla -> Yard", () => {
    expect(imperialInstance.convert("yd")).to.be.equal(44000);
  });
  it("Milla -> Milla", () => {
    expect(imperialInstance.convert("milla")).to.be.equal(25);
  });
});

describe("Imperial Length Bad Request", () => {
  const imperialInstance: ImperialLength = new ImperialLength(25,"*");
  it("* -> *", () => {
    expect(imperialInstance.convert("*")).to.be.equal(0);
  });
});

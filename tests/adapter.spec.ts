import "mocha";
import { expect } from "chai";
import { ImperialLength } from '../src/imperialLength'
import { Adapter } from '../src/adapterLength'


describe("Adapter Length Pulgada to *", () => {
  const imperialInstance: ImperialLength = new ImperialLength(1200,"plg");
  const adapter: Adapter = new Adapter(imperialInstance)
  it("Pulgada -> Centimetro", () => {
    expect(adapter.convert("cm")).to.be.equal(3048);
  });
  it("Pulgada -> Metro", () => {
    expect(adapter.convert("m")).to.be.equal(30);
  });
  it("Pulgada -> Kilometro", () => {
    expect(adapter.convert("km")).to.be.equal(0);
  });
});

describe("Adapter Length Pie to *", () => {
  const imperialInstance: ImperialLength = new ImperialLength(1200,"pie");
  const adapter: Adapter = new Adapter(imperialInstance)
  it("Pie -> Centimetro", () => {
    expect(adapter.convert("cm")).to.be.equal(36576);
  });
  it("Pie -> Metro", () => {
    expect(adapter.convert("m")).to.be.equal(365);
  });
  it("Pie -> Kilometro", () => {
    expect(adapter.convert("km")).to.be.equal(0);
  });
});

describe("Adapter Length Yard to *", () => {
  const imperialInstance: ImperialLength = new ImperialLength(1200,"yd");
  const adapter: Adapter = new Adapter(imperialInstance)
  it("Yard -> Centimetro", () => {
    expect(adapter.convert("cm")).to.be.equal(109728);
  });
  it("Yard -> Metro", () => {
    expect(adapter.convert("m")).to.be.equal(1097);
  });
  it("Yard -> Kilometro", () => {
    expect(adapter.convert("km")).to.be.equal(1);
  });
});

describe("Adapter Length Milla to *", () => {
  const imperialInstance: ImperialLength = new ImperialLength(1200,"milla");
  const adapter: Adapter = new Adapter(imperialInstance)
  it("Milla -> Centimetro", () => {
    expect(adapter.convert("cm")).to.be.equal(193120800);
  });
  it("Milla -> Metro", () => {
    expect(adapter.convert("m")).to.be.equal(1931208);
  });
  it("Milla -> Kilometro", () => {
    expect(adapter.convert("km")).to.be.equal(1931);
  });
});

describe("Adapter Length Bad Request", () => {
  const imperialInstance: ImperialLength = new ImperialLength(1200,"milla");
  const adapter: Adapter = new Adapter(imperialInstance)
  it("* -> *", () => {
    expect(adapter.convert("*")).to.be.equal(0);
  });
});
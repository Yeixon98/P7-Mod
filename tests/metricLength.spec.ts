import "mocha";
import { expect } from "chai";
import { MetricLength } from '../src/metricLength'

describe("Metrica Length Centimetros", () => {
  const metricInstance: MetricLength = new MetricLength(1200,"cm");
  it("Centimetros -> Centimeros", () => {
    expect(metricInstance.convert("cm")).to.be.equal(1200);
  });
  it("Centimetros -> Metros", () => {
    expect(metricInstance.convert("m")).to.be.equal(12);
  });
  it("Centimetros -> Kilometros", () => {
    expect(metricInstance.convert("km")).to.be.equal(0);
  });
});

describe("Metrica Length Metros", () => {
  const metricInstance: MetricLength = new MetricLength(1200,"m");
  it("Metros -> Centimeros", () => {
    expect(metricInstance.convert("cm")).to.be.equal(120000);
  });
  it("Metros -> Metros", () => {
    expect(metricInstance.convert("m")).to.be.equal(1200);
  });
  it("Metros -> Kilometros", () => {
    expect(metricInstance.convert("km")).to.be.equal(1);
  });
});

describe("Metrica Length Kilometros", () => {
  const metricInstance: MetricLength = new MetricLength(12,"km");
  it("Kilometros -> Centimeros", () => {
    expect(metricInstance.convert("cm")).to.be.equal(1200000);
  });
  it("Kilometros -> Metros", () => {
    expect(metricInstance.convert("m")).to.be.equal(12000);
  });
  it("Kilometros -> Kilometros", () => {
    expect(metricInstance.convert("km")).to.be.equal(12);
  });
});

describe("Metrica Length Bad Request", () => {
  const metricInstance: MetricLength = new MetricLength(12,"*");
  it("* -> *", () => {
    expect(metricInstance.convert("*")).to.be.equal(0);
  });
});

describe("Metrica Length Getters", () => {
  const metricInstance: MetricLength = new MetricLength(12,"cm");
  it("Get Unit", () => {
    expect(metricInstance.getUnit()).to.be.equal(12);
  });
  it("Get Type", () => {
    expect(metricInstance.getType()).to.be.equal("cm");
  });
});
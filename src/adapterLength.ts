import { ImperialLength } from "./imperialLength";
import { MetricLength } from "./metricLength";

/**
 * Clase que adapta la conversion de imperial a metrico
 */
export class Adapter extends MetricLength {

  /**
   * Constructor
   * @param imperial Objeto imperial
   */
  constructor(private imperial: ImperialLength) {
    super(imperial.getUnit(), imperial.getType());
  }

  /**
   * Conversor 
   * @param type Unidad a la que se quiere convertir
   * @returns Valor convertido
   */
  convert(type: string): number {
    switch (this.imperial.getType()) {
      case "plg":
        switch (type) {
          case "cm":
            return parseInt((this.imperial.getUnit() * 2.54).toFixed(8))
          case "m":
            return parseInt((this.imperial.getUnit() * 0.0254).toFixed(8))
          case "km":
            return parseInt((this.imperial.getUnit() * 0.0000254).toFixed(8))
        }
      case "pie":
        switch (type) {
          case "cm":
            return parseInt((this.imperial.getUnit() * 30.48).toFixed(8))
          case "m":
            return parseInt((this.imperial.getUnit() * 0.3048).toFixed(8))
          case "km":
            return parseInt((this.imperial.getUnit() * 0.0003048).toFixed(8))
        }
      case "yd":
        switch (type) {
          case "cm":
            return parseInt((this.imperial.getUnit() * 91.44).toFixed(8))
          case "m":
            return parseInt((this.imperial.getUnit() * 0.9144).toFixed(8))
          case "km":
            return parseInt((this.imperial.getUnit() * 0.0009144).toFixed(8))
        }
      case "milla":
        switch (type) {
          case "cm":
            return parseInt((this.imperial.getUnit() * 160934).toFixed(8))
          case "m":
            return parseInt((this.imperial.getUnit() * 1609.34).toFixed(8))
          case "km":
            return parseInt((this.imperial.getUnit() * 1.60934).toFixed(8))
        }
      default:
        return 0
    }
  }
}
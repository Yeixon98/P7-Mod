
/**
 * Clase para realizar converciones metricas imperiales
 */
export class ImperialLength {
   /**
   * Constructor
   * @param unit Cantidad de unidades
   * @param type La unidad 
   */
  constructor(private unit: number, private type: string){}

  /**
   * Conversor 
   * @param type Unidad a la que se quiere convertir
   * @returns Valor convertido
   */
  convert(type: string): number {
    switch (this.type) {
      case "plg":
        switch (type) {
          case "pie":
            return parseInt((this.unit * 0.0833333).toFixed(8))
          case "yd":
            return parseInt((this.unit * 0.0277778).toFixed(8))
          case "milla":
            return parseInt((this.unit * 0.10211137063).toFixed(8))
          default:
            return this.unit
        }
      case "pie":
        switch (type) {
          case "plg":
            return parseInt((this.unit * 12).toFixed(8))
          case "yd":
            return parseInt((this.unit * 0.333333).toFixed(8))
          case "milla":
            return parseInt((this.unit * 0.000189394090907999969).toFixed(8))
          default:
            return this.unit
        }
      case "yd":
        switch (type) {
          case "plg":
            return parseInt((this.unit * 36).toFixed(8))
          case "pie":
            return parseInt((this.unit * 3).toFixed(8))
          case "milla":
            return parseInt((this.unit * 0.000568182).toFixed(8))
          default:
            return this.unit
        }
      case "milla":
        switch (type) {
          case "plg":
            return parseInt((this.unit * 63360).toFixed(8))
          case "pie":
            return parseInt((this.unit * 5280).toFixed(8))
          case "yd":
            return parseInt((this.unit * 1760).toFixed(8))
          default:
            return this.unit
        }
      default:
        return 0
    }
  }

  getUnit() {
    return this.unit
  }

  getType() {
    return this.type
  }
}

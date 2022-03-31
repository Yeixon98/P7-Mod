
/**
 * Clase para realizar converciones metricas
 */
export class MetricLength {
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
      case "cm":
        switch (type) {
          case "m":
            return parseInt((this.unit * 0.01).toFixed(8))
          case "km":
            return parseInt((this.unit * 0.00001).toFixed(8))
          default:
            return this.unit
        }
      case "m":
        switch (type) {
          case "cm":
            return parseInt((this.unit * 100).toFixed(8))
          case "km":
            return parseInt((this.unit * 0.001).toFixed(8))
          default:
            return this.unit
        }
      case "km":
        switch (type) {
          case "cm":
            return parseInt((this.unit * 100000).toFixed(8))
          case "m":
            return parseInt((this.unit * 1000).toFixed(8))
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

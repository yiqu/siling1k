/**
 * Utils class containing util methods
 */
export class Utils {

  /**
   * Round a number to number of decimals
   */
  public static roundNumber(num: number, decimal: number = 2): string {
    return num.toFixed(decimal);
  }

  /**
   * Round to 2 digit, and insert comma seperator
   * @param num 
   * @param decimal 
   */
  public static toLocalFormatting(num: number, decimal: number = 2): string {
    return num.toLocaleString(undefined, {minimumFractionDigits: 2});
  }
}
/**
 * Utils class containing util methods
 */
import * as $ from 'jquery';

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

  public static enableJqueryTooltip(): void {
    setTimeout(()=> {
      $('[data-toggle="tooltip"]').tooltip();
    },2000);
  }

  public static getObjectKeys(obj: any): string[] {
    let keys = Object.keys(obj);
    return keys;
  }

  
}
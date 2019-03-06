export class DateUtils {
    public static parseDate(initDate){
        let year = new Date(initDate).getFullYear().toString();
        let month = new Date(initDate).getMonth().toString();
        let date = new Date(initDate).getDate().toString();
        return `${year}-${this.addZero(month)}-${this.addZero(date)}`;
      }
    
      private static addZero(date){      
        return date.length === 1 ? "0" + date : date;
      }
}

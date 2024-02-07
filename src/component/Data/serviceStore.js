
import { action, makeObservable, observable } from 'mobx';
import kkl from '../../assets/image/kkl.png'
import efshari from '../../assets/image/efshri.png'
import ruach from '../../assets/image/ruach.png'
import tarbut from '../../assets/image/משרד התרבות והספורט.png'
import ralbad from '../../assets/image/ralbad.png'
import mashiv from '../../assets/image/משיב הרוח.png'

class ServiceStore {


    services = [
        // { name: "קרן קיימת לישראל", image: kkl, text: "חשיפת הנוער והמבוגר לאיכות הסביבה ושמירת הטבע " },
        // { name: "רוח תרבות", image: ruach, text: "קידום החוסן החברתי ומיקומו של הפרט בתוך הכלל" },
        // { name: "אפשרי בריא", image: efshari, text: "הדגשת חשיבות אורך חיים בריא לכל אורך החיים" },
        // { name: "התרבות והספורט", image: tarbut, text: "התרבות והספורט מהווים את אושיות דמותה של חברה איכותית ובריאה" },
        // { name: "רלבד", image: ralbad, text: "הטמעת כללי זהירות בדרכים בדור העתיד בצורה חוויתית ומהנה" },
        // { name: "משיב הרוח", image: mashiv, text: "סיוע בשיקום ענף התרבות ולפעילות הפגה עבור מפונים ותושבים " }
    ]



    constructor() {
        makeObservable(this, {

            addService: action,
            services: observable,
            setServices: action
        });
    }

    addService = (service) => {
        this.services = [...this.services, service]
    }

    setServices = (services) => {
        if (services.length) {
            this.services = services
        }
        else {
            this.services = [
                { name: "קרן קיימת לישראל", image: kkl, text: "חשיפת הנוער והמבוגר לאיכות הסביבה ושמירת הטבע " },
                { name: "רוח תרבות", image: ruach, text: "קידום החוסן החברתי ומיקומו של הפרט בתוך הכלל" },
                { name: "אפשרי בריא", image: efshari, text: "הדגשת חשיבות אורך חיים בריא לכל אורך החיים" },
                { name: "התרבות והספורט", image: tarbut, text: "התרבות והספורט מהווים את אושיות דמותה של חברה איכותית ובריאה" },
                { name: "רלבד", image: ralbad, text: "הטמעת כללי זהירות בדרכים בדור העתיד בצורה חוויתית ומהנה" },
                { name: "משיב הרוח", image: mashiv, text: "סיוע בשיקום ענף התרבות ולפעילות הפגה עבור מפונים ותושבים " }
            ]
        }


    }

}
export default new ServiceStore();
import { observable, makeObservable, action } from 'mobx';


class BusinessStore {
  businessDetails = {}
  isLogin=false;
  constructor() {
    makeObservable(this, {
      businessDetails: observable,
      isLogin:observable,
      setBusiness: action
    })
  }

  setBusiness = (data) => {

    if (data != undefined && data.name != undefined) {
      this.businessDetails = data;

    }
    else {
      this.businessDetails = {
        name: "החברה למתנסים",
        address: " רח' המלאכה 4, לוד 7152008",
        phone: " 073-2870100",
        owner: " מנכל החברה: טל בסקס ",
        logo: "https://coding-academy.org/images/ca_logo.png",
        description: "כ-180 מתנסים פועלים בכל רחבי הארץ, בערי פיתוח ובשכונות מצוקה, בערים גדולות ואחרות, במועצות מקומיות ואזוריות",

      }

    }
  }


}
export default new BusinessStore();





import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map } from 'rxjs/operator/map';
export default class TestController {
      static getAll() {
        return new Promise((resolve,reject) =>{
            let list = [];
            let count = Math.floor((Math.random() * 100000) + 1);
            console.log(count);
            for(let i= 0; i< count;i++){
                list.push(i);
            }
            if (count > 50000 ) {
                resolve('ok');
            } else {
                reject('err');
            }
        })   
    }
    static loadAll() {
       let temp = new  Observable();
       temp.subscribe(data => console.log())
    }
}
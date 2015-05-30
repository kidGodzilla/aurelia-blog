import {computedFrom} from 'aurelia-framework';

export class Welcome{
  get posts(){
    return data.map(function (obj) {

      obj.dateString = obj.updatedDate ? `"Updated on" + ${obj.updatedDate}` : `"Posted on" + ${obj.createdDate}`;
      obj.text = obj.text.replace(/(\r\n|\n|\r)/gm, '<br>');

      return obj;
    });
  }
}

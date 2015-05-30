import {Router} from 'aurelia-router';

export class newPost{
  static inject() { return [Router]; }

  author = "";
  title = "";
  text = "";

  constructor(router){
    this.appRouter = router;
  }

  submit(){
    data.push({
      author: `${this.author}`,
      title:  `${this.title}`,
      text: `${this.text}`,
      createdDate: `new Date()`
    });

    this.author = "";
    this.title = "";
    this.text = "";

    this.appRouter.navigate("");
  }
}

export class App {
  configureRouter(config, router){
    config.title = 'Aurelia Blog';
    config.map([
      { route: ['','welcome'],  moduleId: './welcome', nav: false, title:'Welcome' },
      { route: 'about',        moduleId: './about', nav: true, title:'About' },
      { route: 'new-post',  moduleId: './new-post', nav: true, title:'New Post' }
    ]);

    this.router = router;
  }
}

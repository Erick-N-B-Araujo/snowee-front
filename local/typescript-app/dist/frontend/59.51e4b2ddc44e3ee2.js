"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[59],{4059:(V,b,d)=>{d.r(b),d.d(b,{ForumModule:()=>$});var u=d(6895),l=d(8184);class g{}var m=d(2340),e=d(1571),_=d(529);let f=(()=>{class n{constructor(t){this.http=t,this.apiUrl=m.N.apiUrl,this.token=m.N.token}setOptions(){return{headers:new _.WM({Authorization:"Bearer "+m.N.token})}}getAllThemes(t){const i=this.apiUrl+"/themes?page="+t+"&linesPerPage=10&direction=ASC&orderBy=name";let s=this.setOptions();return this.http.get(i,s)}getById(t){let i=this.setOptions();return this.http.get(this.apiUrl+`/themes/${t}`,i)}getAllList(){return this.http.get(this.apiUrl+"/themes/list-all")}postTheme(t){let i=this.setOptions();return this.http.post(this.apiUrl+"/themes",t,i)}putTheme(t){let i=this.setOptions();return this.http.put(this.apiUrl+`/themes/${t.id}`,t,i)}deleteTheme(t){let i=this.setOptions();return this.http.delete(this.apiUrl+`/themes/${t}`,i)}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(_.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var h=d(3317);let U=(()=>{class n{constructor(t,i,s,r){this.themeService=t,this.router=i,this.route=s,this.alerts=r,this.theme=new g}ngOnInit(){""==m.N.token&&(this.alerts.showAlertInfo("Token expired, login to generate another"),this.router.navigate(["/auth/login"])),this.findByIdTheme(this.route.snapshot.params.id)}findByIdTheme(t){this.themeService.getById(t).subscribe(i=>{this.theme=i})}delete(){this.themeService.deleteTheme(this.theme.id).subscribe(t=>{this.alerts.showAlertSuccess("Tema deletado com sucesso!"),this.router.navigate(["/forum/themes"])})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(f),e.Y36(l.F0),e.Y36(l.gz),e.Y36(h.m))},n.\u0275cmp=e.Xpm({type:n,selectors:[["delete-theme"]],decls:20,vars:1,consts:[[1,"container"],[1,"row"],[1,"col-md-12"],[1,"text-center","text-secondary","fw-bold"],[1,"row","d-flex","justify-content-center"],[1,"col-md-6"],[1,"form-group","text-center"],[1,"text-center"],["for","name"],[1,""],[1,"d-flex","justify-content-center"],["routerLink","/forum/themes",1,"btn","btn-danger","m-2"],[1,"btn","btn-success","m-2",3,"click"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3),e._uU(4,"Deletar tema"),e.qZA()()(),e.TgZ(5,"div",4)(6,"div",5)(7,"div",6)(8,"h3",7),e._uU(9,"Tem certeza que deseja excluir?"),e.qZA(),e._UZ(10,"hr"),e.TgZ(11,"label",8),e._uU(12,"Nome do Tema:"),e.qZA(),e.TgZ(13,"h1",9),e._uU(14),e.qZA()(),e.TgZ(15,"div",10)(16,"button",11),e._uU(17,"Cancelar"),e.qZA(),e.TgZ(18,"button",12),e.NdJ("click",function(){return i.delete()}),e._uU(19,"Deletar"),e.qZA()()()()()),2&t&&(e.xp6(14),e.Oqu(i.theme.name))},dependencies:[l.rH]}),n})();var a=d(433);let x=(()=>{class n{constructor(t,i,s,r){this.themeService=t,this.router=i,this.route=s,this.alerts=r,this.theme=new g}ngOnInit(){""==m.N.token&&(this.alerts.showAlertInfo("Token expired, login to generate another"),this.router.navigate(["/auth/login"])),this.findByIdTheme(this.route.snapshot.params.id)}findByIdTheme(t){this.themeService.getById(t).subscribe(i=>{this.theme=i})}update(){this.themeService.putTheme(this.theme).subscribe(t=>{this.theme=t,this.alerts.showAlertSuccess("Tema atualizado com sucesso!"),this.router.navigate(["/forum/themes"])})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(f),e.Y36(l.F0),e.Y36(l.gz),e.Y36(h.m))},n.\u0275cmp=e.Xpm({type:n,selectors:[["edit-theme"]],decls:16,vars:1,consts:[[1,"container"],[1,"row"],[1,"col-md-12"],[1,"text-center","text-secondary"],[1,"row","d-flex","justify-content-center"],[1,"col-md-6"],[1,"form-group"],["for","name"],["type","text","id","name",1,"form-control",3,"ngModel","ngModelChange"],[1,"d-flex","justify-content-center"],["routerLink","/forum/themes",1,"btn","btn-danger","m-2"],[1,"btn","btn-success","m-2",3,"click"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3),e._uU(4,"Atualizar tema"),e.qZA()()(),e.TgZ(5,"div",4)(6,"div",5)(7,"div",6)(8,"label",7),e._uU(9,"Nome do Tema:"),e.qZA(),e.TgZ(10,"input",8),e.NdJ("ngModelChange",function(r){return i.theme.name=r}),e.qZA()(),e.TgZ(11,"div",9)(12,"button",10),e._uU(13,"Cancelar"),e.qZA(),e.TgZ(14,"button",11),e.NdJ("click",function(){return i.update()}),e._uU(15,"Atualizar"),e.qZA()()()()()),2&t&&(e.xp6(10),e.Q6J("ngModel",i.theme.name))},dependencies:[a.Fj,a.JJ,a.On,l.rH]}),n})();class p{}var T=d(2838);let A=(()=>{class n{constructor(t){this.http=t,this.apiUrl=m.N.apiUrl}setOptions(){return{headers:new _.WM({Authorization:"Bearer "+m.N.token})}}getAllArticles(t){return this.http.get(this.apiUrl+"/articles/list-all?page="+t+"&linesPerPage=3&direction=ASC&orderBy=title")}getById(t){return this.setOptions(),this.http.get(this.apiUrl+`/articles/${t}`)}getAllList(){return this.setOptions(),this.http.get(this.apiUrl+"/articles")}postArticle(t){let i=this.setOptions();return this.http.post(this.apiUrl+"/articles",t,i)}putArticle(t){let i=this.setOptions();return this.http.put(this.apiUrl+`/articles/${t.id}`,t,i)}deleteArticle(t){let i=this.setOptions();return this.http.delete(this.apiUrl+`/articles/${t}`,i)}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(_.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var C=d(892);function q(n,o){1&n&&(e.TgZ(0,"div",8)(1,"button",57),e._uU(2,"Novo post"),e.qZA()())}function y(n,o){1&n&&(e.TgZ(0,"li",15)(1,"button",58),e._uU(2,"Minhas postagens"),e.qZA()())}function w(n,o){if(1&n&&(e.TgZ(0,"small",71),e._uU(1),e.qZA()),2&n){const t=o.$implicit;e.xp6(1),e.Oqu(t.name)}}const v=function(n){return["article-show",n]};function F(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div",59)(1,"div",60),e._UZ(2,"img",61),e.TgZ(3,"div",62)(4,"h5",63),e._uU(5),e.qZA(),e._UZ(6,"hr",64),e.TgZ(7,"label",52),e._uU(8,"Temas:"),e.qZA(),e.YNc(9,w,2,1,"small",53),e.TgZ(10,"p",65),e._uU(11),e.qZA()(),e.TgZ(12,"div",66)(13,"div",46)(14,"div",67)(15,"small",68),e._uU(16),e.ALo(17,"date"),e.ALo(18,"date"),e.qZA()(),e.TgZ(19,"div",69)(20,"a",70),e.NdJ("click",function(){e.CHM(t);const s=e.oxw(),r=e.MAs(17);return e.KtG(s.scroll(r))}),e._uU(21,"Ver artigo"),e.qZA()()()()()()}if(2&n){const t=o.$implicit;e.xp6(2),e.s9C("src",t.imgUrl,e.LSH),e.xp6(3),e.Oqu(t.title),e.xp6(4),e.Q6J("ngForOf",t.themes),e.xp6(2),e.Oqu(t.descriptionText),e.xp6(5),e.HOy("Por: ",t.user.firstname," ",t.user.lastname," em ",e.xi3(17,9,t.createdAt,"dd/MM/yyyy")," \xe1s ",e.xi3(18,12,t.createdAt,"HH:mm"),""),e.xp6(4),e.Q6J("routerLink",e.VKq(15,v,t.id))}}function M(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"li",25)(1,"a",26),e.NdJ("click",function(s){const c=e.CHM(t).index,Z=e.oxw();return e.KtG(Z.setPage(c,s))}),e._uU(2),e.qZA()()}if(2&n){const t=o.index;e.xp6(2),e.Oqu(t)}}function k(n,o){if(1&n&&(e.TgZ(0,"small",71),e._uU(1),e.qZA()),2&n){const t=o.$implicit;e.xp6(1),e.Oqu(t.name)}}const N=function(n){return["article-edit",n]},J=function(n){return["article-delete",n]};function O(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div",59)(1,"div",60),e._UZ(2,"img",61),e.TgZ(3,"div",62)(4,"h5",63),e._uU(5),e.qZA(),e._UZ(6,"hr",64),e.TgZ(7,"label",52),e._uU(8,"Temas:"),e.qZA(),e.YNc(9,k,2,1,"small",53),e.TgZ(10,"p",65),e._uU(11),e.qZA()(),e.TgZ(12,"div",66)(13,"div",46)(14,"div",67)(15,"small",68),e._uU(16),e.ALo(17,"date"),e.ALo(18,"date"),e.qZA()(),e.TgZ(19,"div",69)(20,"a",70),e.NdJ("click",function(){e.CHM(t);const s=e.oxw(),r=e.MAs(17);return e.KtG(s.scroll(r))}),e._uU(21,"Ver artigo"),e.qZA()()(),e.TgZ(22,"div",46)(23,"a",72),e.NdJ("click",function(){e.CHM(t);const s=e.oxw(),r=e.MAs(17);return e.KtG(s.scroll(r))}),e._uU(24,"Editar"),e.qZA(),e.TgZ(25,"a",73),e.NdJ("click",function(){e.CHM(t);const s=e.oxw(),r=e.MAs(17);return e.KtG(s.scroll(r))}),e._uU(26,"Apagar"),e.qZA()()()()()}if(2&n){const t=o.$implicit;e.xp6(2),e.s9C("src",t.imgUrl,e.LSH),e.xp6(3),e.Oqu(t.title),e.xp6(4),e.Q6J("ngForOf",t.themes),e.xp6(2),e.Oqu(t.descriptionText),e.xp6(5),e.AsE("Ultima altera\xe7\xe3o em: ",e.xi3(17,9,t.createdAt,"dd/MM/yyyy")," \xe1s ",e.xi3(18,12,t.createdAt,"HH:mm"),""),e.xp6(4),e.Q6J("routerLink",e.VKq(15,v,t.id)),e.xp6(3),e.Q6J("routerLink",e.VKq(17,N,t.id)),e.xp6(2),e.Q6J("routerLink",e.VKq(19,J,t.id))}}function S(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div",59)(1,"div",60),e._UZ(2,"img",61),e.TgZ(3,"div",62)(4,"h5",63),e._uU(5),e.qZA(),e._UZ(6,"hr",64),e.TgZ(7,"p",65),e._uU(8),e.qZA()(),e.TgZ(9,"div",66)(10,"div",46)(11,"div",67)(12,"small",68),e._uU(13),e.ALo(14,"date"),e.ALo(15,"date"),e.qZA()(),e.TgZ(16,"div",69)(17,"a",77),e.NdJ("click",function(){e.CHM(t);const s=e.oxw(2),r=e.MAs(17);return e.KtG(s.scroll(r))}),e._uU(18,"Ver artigo"),e.qZA()()()()()()}if(2&n){const t=o.$implicit;e.xp6(2),e.s9C("src",t.imgUrl,e.LSH),e.xp6(3),e.Oqu(t.title),e.xp6(3),e.Oqu(t.descriptionText),e.xp6(5),e.HOy("Por: ",t.user.firstname," ",t.user.lastname," em ",e.xi3(14,7,t.createdAt,"dd/MM/yyyy")," \xe1s ",e.xi3(15,10,t.createdAt,"HH:mm"),"")}}function P(n,o){if(1&n&&(e.TgZ(0,"div",74)(1,"h1",75),e._uU(2),e.qZA(),e._UZ(3,"hr"),e.TgZ(4,"div",76),e.YNc(5,S,19,13,"div",22),e.qZA(),e._UZ(6,"hr"),e.qZA()),2&n){const t=o.$implicit;e.xp6(2),e.Oqu(t.name),e.xp6(3),e.Q6J("ngForOf",t.articles)}}function L(n,o){if(1&n&&(e.TgZ(0,"option",78),e._uU(1),e.qZA()),2&n){const t=o.$implicit;e.s9C("value",t.id),e.xp6(1),e.Oqu(t.name)}}function Y(n,o){if(1&n&&(e.TgZ(0,"small",71),e._uU(1),e.qZA()),2&n){const t=o.$implicit;e.xp6(1),e.Oqu(t.name)}}let I=(()=>{class n{constructor(t,i,s,r,c){this.router=t,this.articleService=i,this.themeService=s,this.auth=r,this.alerts=c,this.user=new T.K,this.article=new p,this.theme=new g,this.listThemes=[],this.listArticles=[],this.listUserArticles=[],this.listThemeArticles=[],this.listArticleThemes=[],this.pages=[],this.page=0}ngOnInit(){window.scroll(0,0),this.setUser(),this.firstLoadAllArticles(),this.getAllThemes(),""!=m.N.token&&this.getAllUserArticles()}scroll(t){t.scrollIntoView({behavior:"smooth"})}setUser(){this.user.id=m.N.id,this.user.firstname=m.N.firstName,this.user.lastname=m.N.lastName,this.user.username=m.N.username}getAllThemes(){this.themeService.getAllList().subscribe(t=>{this.listThemes=t})}getAllArticles(){this.articleService.getAllList().subscribe(t=>{this.listArticles=t})}publish(){this.article.themes=this.listArticleThemes,this.article.user=this.user,this.articleService.postArticle(this.article).subscribe(t=>{console.log(t),this.alerts.showAlertSuccess("Artigo publicado com sucesso!"),this.article=new p,this.listArticleThemes=[],this.getAllArticles(),this.getAllThemes(),this.getAllUserArticles()})}addTheme(){this.listArticleThemes.some(t=>t.name===this.theme.name)?this.alerts.showAlertInfo("Tema j\xe1 adicionado"):this.listArticleThemes.push(this.theme)}findByIdTheme(){this.themeService.getById(this.idTheme).subscribe(t=>{this.theme=t})}getAllUserArticles(){this.auth.getUserLogged(this.user.username).subscribe(t=>{this.listUserArticles=t.articles})}getAllThemeArticle(){}setPage(t,i){i.preventDefault(),this.page=t,this.refreshArticles()}nextPage(){let t=this.pages.length;t--,this.page<t?(this.page+=1,this.refreshArticles()):this.page==t?this.alerts.showAlertInfo("Est\xe1 \xe9 a ultima pagina!"):this.alerts.showAlertDanger("N\xe3o existem posts nesta pagina!")}prevPage(){let t=this.page;0==t?(this.alerts.showAlertInfo("Est\xe1 \xe9 a primeira pagina!"),this.refreshArticles()):t<this.pages.length?(this.page-=1,this.refreshArticles()):this.alerts.showAlertDanger("N\xe3o existem posts nesta pagina!")}setPages(t){for(let i=0;i<t;i++)this.pages.push(i)}refreshArticles(){this.articleService.getAllArticles(this.page).subscribe(t=>{this.listArticles=t.content,this.totalPages!=t.totalPages&&(this.totalPages=t.totalPages,this.setPages(t.totalPages))})}firstLoadAllArticles(){this.articleService.getAllArticles(this.page).subscribe(t=>{this.totalPages=t.totalPages,this.listArticles=t.content,this.setPages(t.totalPages)})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(l.F0),e.Y36(A),e.Y36(f),e.Y36(C.e),e.Y36(h.m))},n.\u0275cmp=e.Xpm({type:n,selectors:[["forum"]],decls:86,vars:13,consts:[[1,"container-fluid"],[1,"row","bg-secondary","d-flex","align-items-center"],[1,"col-md-6"],[1,"row","d-flex","justify-content-center","text-light","mb-2"],[1,"fs-54"],[1,"fs-18"],[1,"row","d-flex","justify-content-center"],["class","col-md-3 d-grid mt-2",4,"ngIf"],[1,"col-md-3","d-grid","mt-2"],[1,"btn","btn-outline-light",3,"click"],[1,"col-md-6","d-flex","justify-content-center"],["src","https://i.imgur.com/6s5cG47.png","width","500px","height","500px"],[1,"container","mt-2","mb-2"],["postagens",""],["id","myTab","role","tablist",1,"nav","nav-tabs","d-flex","justify-content-center"],["role","presentation",1,"nav-item"],["id","todasPostagens-tab","data-bs-toggle","tab","data-bs-target","#todasPostagens-tab-pane","type","button","role","tab","aria-controls","todasPostagens-tab-pane","aria-selected","true",1,"nav-link","active","fw-bold","text-secondary"],["class","nav-item","role","presentation",4,"ngIf"],["id","temaPostagem-tab","data-bs-toggle","tab","data-bs-target","#temaPostagem-tab-pane","type","button","role","tab","aria-controls","temaPostagem-tab-pane","aria-selected","false",1,"nav-link","fw-bold","text-secondary"],["id","myTabContent",1,"tab-content"],["id","todasPostagens-tab-pane","role","tabpanel","aria-labelledby","todasPostagens-tab","tabindex","0",1,"tab-pane","fade","show","active"],[1,"row","row-cols-1","row-cols-md-3","g-4","mt-1","mb-1"],["class","col",4,"ngFor","ngForOf"],["aria-label","Pagina\xe7\xe3o todos os posts"],[1,"pagination","justify-content-center"],[1,"page-item"],[1,"page-link",3,"click"],["class","page-item",4,"ngFor","ngForOf"],["id","minhasPostagens-tab-pane","role","tabpanel","aria-labelledby","minhasPostagens-tab","tabindex","0",1,"tab-pane","fade"],[1,"row","row-cols-1","row-cols-md-3","g-4","mt-1","mb-4"],["id","temaPostagem-tab-pane","role","tabpanel","aria-labelledby","temaPostagem-tab","tabindex","0",1,"tab-pane","fade"],["class","container",4,"ngFor","ngForOf"],["id","novoPost","tabindex","-1","aria-labelledby","novoPostLabel","aria-hidden","true",1,"modal","fade"],[1,"modal-dialog","modal-dialog-centered","modal-dialog-scrollable"],[1,"modal-content"],[1,"modal-header"],["id","novoPostLabel",1,"modal-title","fs-5"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close"],[1,"modal-body"],[1,"mt-1"],["name","title","type","text",1,"form-control",3,"ngModel","ngModelChange"],["type","text","name","imgUrl",1,"form-control",3,"ngModel","ngModelChange"],["name","descriptionText","id","descriptionText","rows","1",1,"form-control",3,"ngModel","ngModelChange"],["name","articleText","id","articleText","rows","3",1,"form-control",3,"ngModel","ngModelChange"],[1,"mt-2","mb-1","p-0"],["type","button","data-bs-dismiss","modal","routerLink","/forum/themes",1,"btn","btn-link","mb-1","p-0"],[1,"row"],[1,"col-md-10"],["name","theme","id","theme",1,"form-control",3,"ngModel","ngModelChange","change"],[3,"value",4,"ngFor","ngForOf"],[1,"col-md-2"],["type","button",1,"btn","btn-success",3,"click"],[1,"mt-2","mb-1","p-0","fw-bold"],["class","p-1",4,"ngFor","ngForOf"],[1,"modal-footer"],["type","button","data-bs-dismiss","modal",1,"btn","btn-danger"],["type","button","data-bs-dismiss","modal",1,"btn","btn-primary",3,"click"],["type","button","data-bs-toggle","modal","data-bs-target","#novoPost","data-bs-whatever","@post",1,"btn","btn-light"],["id","minhasPostagens-tab","data-bs-toggle","tab","data-bs-target","#minhasPostagens-tab-pane","type","button","role","tab","aria-controls","minhasPostagens-tab-pane","aria-selected","false",1,"nav-link","fw-bold","text-secondary"],[1,"col"],[1,"card","h-100"],["alt","...",1,"card-img-top",3,"src"],[1,"card-body"],[1,"card-title","fw-bold"],[1,"m-0","p-0"],[1,"card-text"],[1,"card-footer"],[1,"col-md-7"],[1,"text-muted"],[1,"col-md-5","text-end"],[1,"btn","btn-primary","mt-1",3,"routerLink","click"],[1,"p-1"],[1,"btn","btn-warning","mt-1",3,"routerLink","click"],[1,"btn","btn-danger","mt-1",3,"routerLink","click"],[1,"container"],[1,"fw-bold"],[1,"row","row-cols-1","row-cols-md-3","g-4","mb-1"],[1,"btn","btn-primary","mt-1",3,"click"],[3,"value"]],template:function(t,i){if(1&t){const s=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",2)(5,"h1",4),e._uU(6,"Seja bem vindo(a)!"),e.qZA(),e.TgZ(7,"h5",5),e._uU(8,"junte-se a causa do conhecimento descentralizado, compartilhe!"),e.qZA()()(),e.TgZ(9,"div",6),e.YNc(10,q,3,0,"div",7),e.TgZ(11,"div",8)(12,"a",9),e.NdJ("click",function(){e.CHM(s);const c=e.MAs(17);return e.KtG(i.scroll(c))}),e._uU(13,"Ver postagens"),e.qZA()()()(),e.TgZ(14,"div",10),e._UZ(15,"img",11),e.qZA()()(),e.TgZ(16,"div",12,13)(18,"ul",14)(19,"li",15)(20,"button",16),e._uU(21,"Todas postagens"),e.qZA()(),e.YNc(22,y,3,0,"li",17),e.TgZ(23,"li",15)(24,"button",18),e._uU(25,"Postagens por tema"),e.qZA()()(),e.TgZ(26,"div",19)(27,"div",20)(28,"div",21),e.YNc(29,F,22,17,"div",22),e.qZA(),e._UZ(30,"hr"),e.TgZ(31,"nav",23)(32,"ul",24)(33,"li",25)(34,"a",26),e.NdJ("click",function(){return i.prevPage()}),e._uU(35,"Previous"),e.qZA()(),e.YNc(36,M,3,1,"li",27),e.TgZ(37,"li",25)(38,"a",26),e.NdJ("click",function(){return i.nextPage()}),e._uU(39,"Next"),e.qZA()()()()(),e.TgZ(40,"div",28)(41,"div",29),e.YNc(42,O,27,21,"div",22),e.qZA()(),e.TgZ(43,"div",30),e.YNc(44,P,7,2,"div",31),e.qZA()()(),e.TgZ(45,"div",32)(46,"div",33)(47,"div",34)(48,"div",35)(49,"h1",36),e._uU(50,"Novo Post"),e.qZA(),e._UZ(51,"button",37),e.qZA(),e.TgZ(52,"div",38)(53,"div")(54,"form")(55,"label",39),e._uU(56,"Titulo:"),e.qZA(),e.TgZ(57,"input",40),e.NdJ("ngModelChange",function(c){return i.article.title=c}),e.qZA(),e.TgZ(58,"label",39),e._uU(59,"URL da Imagem:"),e.qZA(),e.TgZ(60,"input",41),e.NdJ("ngModelChange",function(c){return i.article.imgUrl=c}),e.qZA(),e.TgZ(61,"label",39),e._uU(62,"Descri\xe7\xe3o:"),e.qZA(),e.TgZ(63,"textarea",42),e.NdJ("ngModelChange",function(c){return i.article.descriptionText=c}),e.qZA(),e.TgZ(64,"label",39),e._uU(65,"Artigo:"),e.qZA(),e.TgZ(66,"textarea",43),e.NdJ("ngModelChange",function(c){return i.article.articleText=c}),e.qZA(),e.TgZ(67,"label",44),e._uU(68,"Escolha um tema ou "),e.TgZ(69,"button",45),e._uU(70,"cadastre um novo:"),e.qZA()(),e.TgZ(71,"div",46)(72,"div",47)(73,"select",48),e.NdJ("ngModelChange",function(c){return i.idTheme=c})("change",function(){return i.findByIdTheme()}),e.YNc(74,L,2,2,"option",49),e.qZA()(),e.TgZ(75,"div",50)(76,"button",51),e.NdJ("click",function(){return i.addTheme()}),e._uU(77,"+"),e.qZA()()(),e.TgZ(78,"label",52),e._uU(79,"Adicionados:"),e.qZA(),e.YNc(80,Y,2,1,"small",53),e.qZA()()(),e.TgZ(81,"div",54)(82,"button",55),e._uU(83,"Fechar"),e.qZA(),e.TgZ(84,"button",56),e.NdJ("click",function(){return i.publish()}),e._uU(85,"Publicar"),e.qZA()()()()()}2&t&&(e.xp6(10),e.Q6J("ngIf",i.auth.isLogged()),e.xp6(12),e.Q6J("ngIf",i.auth.isLogged()),e.xp6(7),e.Q6J("ngForOf",i.listArticles),e.xp6(7),e.Q6J("ngForOf",i.pages),e.xp6(6),e.Q6J("ngForOf",i.listUserArticles),e.xp6(2),e.Q6J("ngForOf",i.listThemes),e.xp6(13),e.Q6J("ngModel",i.article.title),e.xp6(3),e.Q6J("ngModel",i.article.imgUrl),e.xp6(3),e.Q6J("ngModel",i.article.descriptionText),e.xp6(3),e.Q6J("ngModel",i.article.articleText),e.xp6(7),e.Q6J("ngModel",i.idTheme),e.xp6(1),e.Q6J("ngForOf",i.listThemes),e.xp6(6),e.Q6J("ngForOf",i.listArticleThemes))},dependencies:[u.sg,u.O5,a._Y,a.YN,a.Kr,a.Fj,a.EJ,a.JJ,a.JL,a.On,a.F,l.rH,l.yS,u.uU],styles:[".fs-54[_ngcontent-%COMP%]{font-size:54pt}.fs-18[_ngcontent-%COMP%]{font-size:18pt}"]}),n})();const E=function(n){return["/forum/theme-edit",n]},H=function(n){return["/forum/theme-delete",n]};function Q(n,o){if(1&n&&(e.TgZ(0,"tr")(1,"th",25),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td",26)(6,"button",27),e._uU(7,"Editar"),e.qZA(),e.TgZ(8,"button",28),e._uU(9,"Apagar"),e.qZA()()()),2&n){const t=o.$implicit;e.xp6(2),e.Oqu(t.id),e.xp6(2),e.Oqu(t.name),e.xp6(2),e.Q6J("routerLink",e.VKq(4,E,t.id)),e.xp6(2),e.Q6J("routerLink",e.VKq(6,H,t.id))}}function j(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"li",29)(1,"a",30),e.NdJ("click",function(s){const c=e.CHM(t).index,Z=e.oxw();return e.KtG(Z.setPage(c,s))}),e._uU(2),e.qZA()()}if(2&n){const t=o.index;e.xp6(2),e.Oqu(t)}}function z(n,o){if(1&n&&(e.TgZ(0,"small",19),e._uU(1),e.qZA()),2&n){const t=o.$implicit;e.xp6(1),e.Oqu(t.name)}}const D=[{path:"themes",component:(()=>{class n{constructor(t,i,s){this.router=t,this.themeService=i,this.alerts=s,this.theme=new g,this.pages=[],this.page=0}ngOnInit(){window.scroll(0,0),""==m.N.token&&(this.alerts.showAlertInfo("Token expired, login to generate another"),this.router.navigate(["/auth/login"])),this.firstLoadAllThemes()}setPage(t,i){i.preventDefault(),this.page=t,this.refreshThemes()}setPages(t){for(let i=0;i<t;i++)this.pages.push(i)}refreshThemes(){this.themeService.getAllThemes(this.page).subscribe(t=>{this.themeList=t.content})}firstLoadAllThemes(){this.themeService.getAllThemes(this.page).subscribe(t=>{this.totalPages=t.totalPages,this.themeList=t.content,this.setPages(t.totalPages)})}save(){this.themeService.postTheme(this.theme).subscribe(t=>{this.theme=t,this.alerts.showAlertSuccess("Tema cadastrado com sucesso!"),this.theme=new g,this.refreshThemes()})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(l.F0),e.Y36(f),e.Y36(h.m))},n.\u0275cmp=e.Xpm({type:n,selectors:[["themes"]],decls:38,vars:3,consts:[[1,"container-fluid"],[1,"row","bg-secondary"],[1,"col-md-12","text-white"],["routerLink","/forum",1,"text-white","text-left"],["aria-hidden","true",1,"fa","fa-angle-double-left"],[1,"fs-54","text-center"],[1,"fs-18","text-center"],[1,"row","d-flex","justify-content-center"],[1,"col-md-3"],[1,"form-group"],["type","text","id","themeName","placeholder","Digite o nome do tema",1,"form-control",3,"ngModel","ngModelChange"],[1,"d-flex","justify-content-center"],[1,"btn","btn-primary","mt-2","mb-5",3,"click"],[1,"container"],[1,"row","mt-5"],[1,"col-md-12"],[1,"text-center"],[1,"row","mt-3","mb-5","d-flex","justify-content-center"],[1,"col-md-6"],[1,"table","table-hover"],["scope","col"],["scope","col",1,"text-end"],[4,"ngFor","ngForOf"],[1,"nav","nav-pills"],["class","nav-item",4,"ngFor","ngForOf"],["scope","row"],[1,"d-flex","justify-content-end"],[1,"btn","btn-info","m-1",3,"routerLink"],[1,"btn","btn-danger","m-1",3,"routerLink"],[1,"nav-item"],[1,"nav-link",3,"click"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"a",3),e._UZ(4,"i",4),e._uU(5," Forum "),e.qZA(),e.TgZ(6,"h1",5),e._uU(7,"Temas"),e.qZA(),e.TgZ(8,"h5",6),e._uU(9,"Veja aqui os temas cadastrados ou cadastre um novo:"),e.qZA(),e.TgZ(10,"div",7)(11,"div",8)(12,"div",9)(13,"input",10),e.NdJ("ngModelChange",function(r){return i.theme.name=r}),e.qZA()(),e.TgZ(14,"div",11)(15,"button",12),e.NdJ("click",function(){return i.save()}),e._uU(16,"Cadastrar"),e.qZA()()()()()()(),e.TgZ(17,"div",13)(18,"div",14)(19,"div",15)(20,"h2",16),e._uU(21,"Todos os temas"),e.qZA()()(),e.TgZ(22,"div",17)(23,"div",18)(24,"table",19)(25,"thead")(26,"tr")(27,"th",20),e._uU(28,"#"),e.qZA(),e.TgZ(29,"th",20),e._uU(30,"Name"),e.qZA(),e.TgZ(31,"th",21),e._uU(32,"Actions"),e.qZA()()(),e.TgZ(33,"tbody"),e.YNc(34,Q,10,8,"tr",22),e.qZA()(),e._UZ(35,"hr"),e.TgZ(36,"ul",23),e.YNc(37,j,3,1,"li",24),e.qZA()()()()),2&t&&(e.xp6(13),e.Q6J("ngModel",i.theme.name),e.xp6(21),e.Q6J("ngForOf",i.themeList),e.xp6(3),e.Q6J("ngForOf",i.pages))},dependencies:[u.sg,a.Fj,a.JJ,a.On,l.rH,l.yS]}),n})()},{path:"theme-edit/:id",component:x},{path:"theme-delete/:id",component:U},{path:"article-edit/:id",component:(()=>{class n{constructor(t,i,s,r){this.router=t,this.route=i,this.articleService=s,this.alerts=r,this.article=new p,this.userArticle=new T.K}ngOnInit(){""==m.N.token&&(this.alerts.showAlertInfo("Token expired, login to generate another"),this.router.navigate(["/auth/login"])),this.findByIdArticle(this.route.snapshot.params.id)}findByIdArticle(t){this.articleService.getById(t).subscribe(i=>{this.article=i,this.userArticle=i.user,this.articleName=i.title})}update(){console.log(this.article.user),this.article.user=new T.K,this.article.user.id=this.userArticle.id,console.log(this.article.user),console.log(this.article),this.articleService.putArticle(this.article).subscribe(t=>{this.article=t,console.log(t),this.alerts.showAlertSuccess("Artigo atualizado com sucesso!"),this.router.navigate(["/forum"])})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(l.F0),e.Y36(l.gz),e.Y36(A),e.Y36(h.m))},n.\u0275cmp=e.Xpm({type:n,selectors:[["edit-article"]],decls:34,vars:6,consts:[[1,"container-fluid"],[1,"row","bg-secondary"],[1,"col-md-12","text-white"],["routerLink","/forum",1,"text-white","text-left"],["aria-hidden","true",1,"fa","fa-angle-double-left"],[1,"mt-2"],[1,"row","d-flex","justify-content-center"],[1,"col-md-6"],["alt","...",1,"img-fluid","rounded-bottom",3,"src"],[1,"form-group"],["for","name"],["type","text","id","title",1,"form-control",3,"ngModel","ngModelChange"],["type","text","id","descriptionText",1,"form-control",3,"ngModel","ngModelChange"],["type","text","id","articleText",1,"form-control",3,"ngModel","ngModelChange"],["type","text","id","imgUrl",1,"form-control",3,"ngModel","ngModelChange"],[1,"d-flex","justify-content-center"],["routerLink","/forum",1,"btn","btn-danger","m-2"],[1,"btn","btn-success","m-2",3,"click"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"a",3),e._UZ(4,"i",4),e._uU(5," Forum "),e.qZA(),e._UZ(6,"div",5),e.qZA()(),e.TgZ(7,"div",6)(8,"div",7),e._UZ(9,"img",8),e.TgZ(10,"h1"),e._uU(11),e.qZA(),e._UZ(12,"hr"),e.TgZ(13,"div",9)(14,"label",10),e._uU(15,"Titulo:"),e.qZA(),e.TgZ(16,"input",11),e.NdJ("ngModelChange",function(r){return i.article.title=r}),e.qZA()(),e.TgZ(17,"div",9)(18,"label",10),e._uU(19,"Descri\xe7\xe3o:"),e.qZA(),e.TgZ(20,"input",12),e.NdJ("ngModelChange",function(r){return i.article.descriptionText=r}),e.qZA()(),e.TgZ(21,"div",9)(22,"label",10),e._uU(23,"Artigo:"),e.qZA(),e.TgZ(24,"input",13),e.NdJ("ngModelChange",function(r){return i.article.articleText=r}),e.qZA()(),e.TgZ(25,"div",9)(26,"label",10),e._uU(27,"Image URL:"),e.qZA(),e.TgZ(28,"input",14),e.NdJ("ngModelChange",function(r){return i.article.imgUrl=r}),e.qZA()(),e.TgZ(29,"div",15)(30,"button",16),e._uU(31,"Cancelar"),e.qZA(),e.TgZ(32,"button",17),e.NdJ("click",function(){return i.update()}),e._uU(33,"Atualizar"),e.qZA()()()()()),2&t&&(e.xp6(9),e.s9C("src",i.article.imgUrl,e.LSH),e.xp6(2),e.Oqu(i.article.title),e.xp6(5),e.Q6J("ngModel",i.article.title),e.xp6(4),e.Q6J("ngModel",i.article.descriptionText),e.xp6(4),e.Q6J("ngModel",i.article.articleText),e.xp6(4),e.Q6J("ngModel",i.article.imgUrl))},dependencies:[a.Fj,a.JJ,a.On,l.rH,l.yS]}),n})()},{path:"article-delete/:id",component:(()=>{class n{constructor(t,i,s,r){this.router=t,this.route=i,this.articleService=s,this.alerts=r,this.article=new p}ngOnInit(){""==m.N.token&&(this.alerts.showAlertInfo("Token expired, login to generate another"),this.router.navigate(["/auth/login"])),this.findByIdArticle(this.route.snapshot.params.id)}findByIdArticle(t){this.articleService.getById(t).subscribe(i=>{this.article=i,this.articleName=i.title})}delete(){this.articleService.deleteArticle(this.article.id).subscribe(t=>{this.alerts.showAlertSuccess("Artigo deletado com sucesso!"),this.router.navigate(["/forum"])})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(l.F0),e.Y36(l.gz),e.Y36(A),e.Y36(h.m))},n.\u0275cmp=e.Xpm({type:n,selectors:[["delete-article"]],decls:19,vars:2,consts:[[1,"container-fluid"],[1,"row"],[1,"col-md-12","bg-secondary"],[1,"text-center","text-white","fw-bold","mb-3"],[1,"row","d-flex","justify-content-center"],[1,"col-md-6"],["alt","...",1,"img-fluid","rounded-bottom",3,"src"],[1,"form-group","text-center"],[1,"d-flex","justify-content-center","mb-1"],["routerLink","/forum",1,"btn","btn-danger","m-2"],[1,"btn","btn-success","m-2",3,"click"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3),e._uU(4,"Deletar Artigo"),e.qZA()()(),e.TgZ(5,"div",4)(6,"div",5),e._UZ(7,"img",6),e.TgZ(8,"div",7)(9,"h1"),e._uU(10),e.qZA(),e._UZ(11,"hr"),e.TgZ(12,"h3"),e._uU(13,"Tem certeza que deseja excluir?"),e.qZA()(),e.TgZ(14,"div",8)(15,"button",9),e._uU(16,"Cancelar"),e.qZA(),e.TgZ(17,"button",10),e.NdJ("click",function(){return i.delete()}),e._uU(18,"Deletar"),e.qZA()()()()()),2&t&&(e.xp6(7),e.s9C("src",i.article.imgUrl,e.LSH),e.xp6(3),e.Oqu(i.article.title))},dependencies:[l.rH]}),n})()},{path:"article-show/:id",component:(()=>{class n{constructor(t,i,s){this.router=t,this.route=i,this.articleService=s,this.article=new p,this.userArticle=new T.K}ngOnInit(){this.findByIdArticle(this.route.snapshot.params.id)}findByIdArticle(t){this.articleService.getById(t).subscribe(i=>{this.userArticle=i.user,this.article=i,this.articleName=i.title})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(l.F0),e.Y36(l.gz),e.Y36(A))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-article-show"]],decls:31,vars:15,consts:[[1,"container-fluid"],[1,"row","bg-secondary"],[1,"col-md-12","text-white"],["routerLink","/forum",1,"text-white","text-left"],["aria-hidden","true",1,"fa","fa-angle-double-left"],[1,"mt-2"],[1,"container"],[1,"row"],[1,"col-md-12"],["alt","...",1,"img-fluid","rounded-bottom",3,"src"],[1,"fs-54","text-center","mt-2"],[1,"text-center"],["class","p-1",4,"ngFor","ngForOf"],[1,"fs-18","text-center"],[1,"text-muted"],[1,"mb-0"],[1,"row","mt-3","mb-3"],[1,"col-md-12","d-flex","justify-content-center"],["routerLink","/forum",1,"btn","btn-primary","m-1"],[1,"p-1"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"a",3),e._UZ(4,"i",4),e._uU(5," Forum "),e.qZA(),e._UZ(6,"div",5),e.qZA()()(),e.TgZ(7,"div",6)(8,"div",7)(9,"div",8),e._UZ(10,"img",9),e.TgZ(11,"h2",10),e._uU(12),e.qZA(),e.TgZ(13,"h6",11),e._uU(14,"Temas: "),e.YNc(15,z,2,1,"small",12),e.qZA(),e._UZ(16,"hr"),e.TgZ(17,"h3",11),e._uU(18),e.qZA(),e.TgZ(19,"p",13),e._uU(20),e.qZA(),e.TgZ(21,"div",11)(22,"small",14),e._uU(23),e.ALo(24,"date"),e.ALo(25,"date"),e.qZA()(),e._UZ(26,"hr",15),e.qZA()(),e.TgZ(27,"div",16)(28,"div",17)(29,"button",18),e._uU(30,"Ver outros artigos"),e.qZA()()()()),2&t&&(e.xp6(10),e.s9C("src",i.article.imgUrl,e.LSH),e.xp6(2),e.Oqu(i.article.title),e.xp6(3),e.Q6J("ngForOf",i.article.themes),e.xp6(3),e.Oqu(i.article.descriptionText),e.xp6(2),e.Oqu(i.article.articleText),e.xp6(3),e.HOy("Por: ",i.userArticle.firstname," ",i.userArticle.lastname," em ",e.xi3(24,9,i.article.createdAt,"dd/MM/yyyy")," \xe1s ",e.xi3(25,12,i.article.createdAt,"HH:mm"),""))},dependencies:[u.sg,l.rH,l.yS,u.uU]}),n})()},{path:"",pathMatch:"full",component:I}];let K=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[l.Bz.forChild(D),l.Bz]}),n})(),$=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[u.ez,a.UX,a.u5,K]}),n})()}}]);
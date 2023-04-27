# Angular 14.2

Guia direcionado a criação e padronização das paginas e suas relações.

## Conteúdos

[TOC]

### 1. Configurações iniciais

Para dar andamento ao desenvolvimento, alguns passos são necessários.

#### 1.1 Criar um projeto

A seguinte linha de comando gera um novo projeto:

```cmake
ng new frontend
```

Será solicitado algumas confirmações, selecione de acordo com seu objetivo:

- Compartilhar informações sobre o Angular: **yes**
- Adicionar o Angular Routing: **y**
- Escolher o stylesheet: **CSS**

#### 1.2 Adicionar dependências

A seguinte linha de comando vincula uma dependência ao seu projeto:

```
npm i ngx-bootstrap
```

Caso você já tenha um projeto, após realizar o clone do repositório, instalar todas as dependências com o comando:

```
npm i
```

##### 1.2.1 Vincular dependências

Para vincular e instanciar uma dependência devemos adicionar seu caminho ao arquivo **angular.json**.

```typescript
"architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:browser",
          "options": {
            "outputPath": "dist/frontend",
            "index": "src/index.html",
            "main": "src/main.ts",
            "polyfills": "src/polyfills.ts",
            "tsConfig": "tsconfig.app.json",
            "assets": [
              "src/favicon.ico",
              "src/assets"
            ],
            "styles": [
              "src/styles.css",
              "node_modules/bootstrap/dist/css/bootstrap.min.css"
            ],
            "scripts": [
              "node_modules/jquery/dist/jquery.js",
              "node_modules/bootstrap/dist/js/bootstrap.js",
              "node_modules/popper.js/dist/umd/popper.min.js"
            ]
          },
```

No trecho de código podemos ver que o caminho para as dependências estão dentro da tag **build**, onde seus respectivos objetos **assets, styles e scripts** devem receber um caminho valido.

### 2. Fluxo do projeto

O desenvolvimento de um projeto em angular gira em torno de dois arquivos principais.

#### 2.1 src/index.html

```html
<!doctype html>
<html lang="pt-br">
<head>
  <meta charset="utf-8">
  <title>Snowee Gamecorp</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <app-root></app-root>
</body>
</html>
```

Neste arquivo são definidos os **styles** e **scripts** que serão utilizados no projeto para que sejam utilizados globalmente em todas as paginas.

Aqui já podemos definir algumas propriedades:

- **lang:** definir a lingua padrão do conteúdo.
- **charset:** definir o tipo de caracteres.
- **title:** definir o titulo da pagina.
- **base href="/":** definir a rota padrão para carregar conteúdo.

##### 2.1.1 app-root

A tag define que o Angular irá fazer a gestão das rotas e carregar o conteúdo das paginas através dos seletor que instancia o conteúdo da pasta **/src/app**.

```html
<app-root></app-root>
```

###### 2.1.1.1 app-routing.module.ts

```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, Routes, RouterModule } from '@angular/router';

//Declaração de rotas
const routes: Routes = [
  { 
    path: 'home', 
    loadChildren: 
      () => import('./home/home.module')
        .then(x => x.HomeModule)
  },
  //Quando o caminho da rota for vazio, redireciona
  { 
    path: '', 
    pathMatch:'full', 
    redirectTo:'home'
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    //Importa as rotas no inicio
    RouterModule.forRoot(routes, {useHash:true})
  ],
  //Exporta e executa
  exports: [ RouterModule ]
})

//Classe para importar e definir as rotas da SPA
export class AppRoutingModule { }
```

Aqui definimos as rotas da aplicação e seus respectivos caminhos para o **lazy loading**, onde a gestão do conteúdo é gerida pelo modulo da respectiva rota.

###### 2.1.1.2 app.component.css

```
.fs-54{
    font-size: 54pt;
}
```

Aqui podemos criar classes de estilo que podem ser usadas nas paginas renderizadas pelo **app-root**.

###### 2.1.1.3 app.component.html

```
<navbar-notlogged *ngIf='auth.isLogged() == false'></navbar-notlogged>
<navbar *ngIf='auth.isLogged()'></navbar>
<router-outlet></router-outlet>
<in-footer></in-footer>
```

Aqui temos vários componentes declarados, e são exibidos como conteúdo fixo das paginas, incluindo logicas com validação.

- router-outlet

```
<router-outlet></router-outlet>
```

A tag define que o conteúdo a ser renderizado passa a ser gerido pelas rotas.

###### 2.1.1.4 app.component.ts

```
import { Component, OnInit } from '@angular/core'
import { PrimeNGConfig } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  logged: boolean = environment.isLogged

  constructor(
    private primengConfig: PrimeNGConfig,
    public auth: AuthService
    ){
  }

  ngOnInit(){
    this.primengConfig.ripple = true;
  }
}
```

Aqui instanciamos objetos e importamos arquivos que serão utilizados a partir da inicialização do componente.

###### 2.1.1.5 app.module.ts

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MenubarModule} from 'primeng/menubar';
import { MenubarComponent } from './menubar/menubar.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { NavbarNotloggedComponent } from './navbar-notlogged/navbar-notlogged.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AlertsComponent } from './alerts/alerts.component';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    MenubarComponent,
    FooterComponent,
    NavbarNotloggedComponent,
    AlertsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MenubarModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
```

Aqui importamos todos os módulos que o componente raiz irá utilizar.

#### 2.2 src/styles.css

```

/* You can add global styles to this file, and also import other style files */

@import './../node_modules/primeng/resources/primeng.min.css';

.fs-54{
    font-size: 54pt;
}

.fs-18{
    font-size: 18pt;
}
```

Neste arquivo podemos importar e criar classes de estilo globais.

### 3. Comandos

Os comandos a seguir criam alguns componentes que auxiliam no desenvolvimento da aplicação.

#### 3.1 Criar componentes

```
ng generate component home
```

ou utilize a abreviação:

```
ng g c home
```


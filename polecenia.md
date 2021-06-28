# GIT
cd ..
git clone https://bitbucket.org/ev45ive/testarmy-angular-adv-wasko.git testarmy-angular-adv-wasko
cd testarmy-angular-adv-wasko
<!-- File -> Opern Folder -> testarmy-angular-adv-wasko , albo : -->
code .
npm i 
npm start

## GIT Update
git stash -u && git pull
npm i 
# Instalacje
node -v
v14.17.0

npm -v
6.14.6

https://github.com/nvm-sh/nvm/blob/master/README.md

git --version
git version 2.31.1.windows.1

code -v
1.57.1
507ce72a4466fbb27b715c3722558bb15afa9f48
x64

chrome

## VS Code Extensions
https://marketplace.visualstudio.com/items?itemName=Angular.ng-template
https://marketplace.visualstudio.com/items?itemName=Mikael.Angular-BeastCode
https://marketplace.visualstudio.com/items?itemName=nrwl.angular-console
https://marketplace.visualstudio.com/items?itemName=quicktype.quicktype
https://marketplace.visualstudio.com/items?itemName=adrianwilczynski.switcher
https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

# New project
npm install --global nx create-nx-workspace
npx create-nx-workspace --preset=angular

<!-- or -->
ng new angular-cli-app
ng add @nrwl/workspace

create-nx-workspace wasko
√ What to create in the new workspace · angular
√ Application name                    · waskoadv
√ Default stylesheet format           · scss
√ Use Nx Cloud? (It's free and doesn't require registration.) · No

>  NX  Nx is creating your workspace.

  To make sure the command works reliably in all environments, and that the preset is applied correctly,
  Nx will run "npm install" several times. Please wait.

⠦ Installing dependencies with npm
✔ Nx has successfully created the workspace.

# UI Component Kit
https://material.angular.io/components/categories
https://material.io/design

<!-- enterprise  -->
https://js.devexpress.com/Documentation/Guide/Angular_Components/DevExtreme_Angular_Components/
https://www.telerik.com/kendo-angular-ui-b

https://primefaces.org/primeng/showcase/#/setup
https://ng.ant.design/components/modal/en

https://ng-bootstrap.github.io/#/components/accordion/examples


## Material Design
ng add @angular/material
ℹ Using package manager: npm
✔ Found compatible package version: @angular/material@12.1.0.
✔ Package information loaded.

The package @angular/material@12.1.0 will be installed and executed.
Would you like to proceed? Yes
✔ Package successfully installed.
? Choose a prebuilt theme name, or "custom" for a custom theme: Indigo/Pink        
[ Preview: https://material.angular.io?theme=indigo-pink ]
? Set up global Angular Material typography styles? Yes 
? Set up browser animations for Angular Material? Yes
UPDATE package.json (2477 bytes)
✔ Packages installed successfully.
    Your project is not using the default builders for "test". This means that we cannot add the configured theme to the "test" target.
UPDATE apps/waskoadv/src/app/app.module.ts (403 bytes)
UPDATE angular.json (4551 bytes)
UPDATE apps/waskoadv/src/index.html (614 bytes)
UPDATE apps/waskoadv/src/styles.scss (181 bytes)

## Core vs Shared module
<!-- core - services, config, API... -->
 ng generate @schematics/angular:module --name=core --module=app --no-interactive 
CREATE apps/waskoadv/src/app/core/core.module.ts
UPDATE apps/waskoadv/src/app/app.module.ts

<!-- Feature -->
ng generate @schematics/angular:module --name=features/playlists --module=app --route=playlists

CREATE apps/waskoadv/src/app/features/playlists/playlists-routing.module.ts
CREATE apps/waskoadv/src/app/features/playlists/playlists.module.ts
CREATE apps/waskoadv/src/app/features/playlists/playlists.component.html
CREATE apps/waskoadv/src/app/features/playlists/playlists.component.spec.ts
CREATE apps/waskoadv/src/app/features/playlists/playlists.component.ts
CREATE apps/waskoadv/src/app/features/playlists/playlists.component.css
UPDATE apps/waskoadv/src/app/app.module.ts

<!-- shared - components, directives, toolkits... -->
ng generate @schematics/angular:module --name=shared --module=app --no-interactive 
CREATE apps/waskoadv/src/app/shared/shared.module.ts
UPDATE apps/waskoadv/src/app/app.module.ts

ng generate @angular/material:navigation --name=shared/containers/navbar --module=shared --style=scss --export --routing

CREATE apps/waskoadv/src/app/shared/containers/navbar/navbar.component.html
CREATE apps/waskoadv/src/app/shared/containers/navbar/navbar.component.spec.ts
CREATE apps/waskoadv/src/app/shared/containers/navbar/navbar.component.ts
CREATE apps/waskoadv/src/app/shared/containers/navbar/navbar.component.scss
UPDATE apps/waskoadv/src/app/shared/shared.module.ts

## Storybook
npm i @nrwl/storybook
ng generate @nrwl/angular:storybook-configuration --name=waskoadv --no-configureCypress --no-generateCypressSpecs --no-generateStories --no-interactive --dry-run <

adding .storybook folder to the root directory - 
     based on the Storybook version installed (v6), we'll bootstrap a scaffold for that particular version.
adding .storybook folder to app - using Storybook version 6
UPDATE package.json
UPDATE angular.json
UPDATE nx.json
CREATE .storybook/main.js
CREATE .storybook/tsconfig.json
CREATE .storybook/webpack.config.js
CREATE apps/waskoadv/.storybook/main.js
CREATE apps/waskoadv/.storybook/preview.js
CREATE apps/waskoadv/.storybook/tsconfig.json
CREATE apps/waskoadv/.storybook/webpack.config.js
UPDATE apps/waskoadv/tsconfig.app.json
UPDATE apps/waskoadv/tsconfig.json

## Stories
https://storybook.js.org/docs/angular/get-started/whats-a-story

https://github.com/juristr/nx-shared-storybook

https://storybook.js.org/tutorials/intro-to-storybook/angular/en/composite-component/
npm install --save-dev @storybook/addon-essentials


## Playlists components

ng g c features/playlists/containers/playlists-view 
ng g c features/playlists/components/playlist-list
ng g c features/playlists/components/playlist-list-item 
ng g c features/playlists/components/playlist-details 
ng g c features/playlists/components/playlist-form  

## Playlist shared sub-module
ng g m features/playlists/shared/playlist-shared -m shared
ng g c features/playlists/shared/playlist-shared/containers/add-to-playlist --export
<!-- + re-export from shared -->

## CSS
https://getbootstrap.com (scss)
https://tailwindcss.com https://medium.com/ngconf/angular-and-tailwindcss-6438e3326273

## Flex Layout
https://github.com/angular/flex-layout
npm i -s @angular/flex-layout @angular/cdk

https://github.com/angular/flex-layout/wiki/Declarative-API-Overview
https://github.com/angular/flex-layout/wiki/Responsive-API

https://github.com/angular/flex-layout/wiki/fxLayoutGap-API
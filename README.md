## Helpful scripts

npx create-react-app my-app

## Building

yarn storybook
yarn build-storybook
yarn build-package

## Tokens

commit and push
https://github.com/settings/tokens
https://www.npmjs.com/settings/devonpis/tokens

## Release process

yarn auto changelog
git add CHANGELOG.md
git commit -m "Changelog for v0.1.x [skip ci]"
npm login
npm version 0.1.x -m "Bump version to: %s [skip ci]"
npm publish
git push --follow-tags origin master
yarn auto release

## Including Clui-ui

npm install clui-ui@latest --save
yarn upgrade clui-ui

## Storybook

https://master.d3o3vsx5knc2z7.amplifyapp.com/?path=/docs/welcome--to-storybook
## Helpful scripts

npx create-react-app my-app

===========

yarn storybook
yarn build-storybook
yarn build-package

===========

commit and push

===========

yarn auto changelog
git add CHANGELOG.md
git commit -m "Changelog for v0.1.x [skip ci]"
npm version 0.1.x -m "Bump version to: %s [skip ci]"
npm publish
git push --follow-tags origin master
yarn auto release

===========

npm install clui-ui@latest --save
yarn upgrade clui-ui
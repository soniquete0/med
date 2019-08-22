const path = require('path');
const { execSync } = require('child_process');
const { dest, parallel, pipe, src, watch } = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const babel = require('gulp-babel');

const root = path.resolve(__dirname);


function buildJs(cb) {
  execSync(`npx tsc --build ./tsconfig.json`, {
    cwd: root,
  });

  cb();
}

function buildTsWithBabel(cb) {
  const srcFolder = path.resolve(root, 'src');
  const tsFiles = srcFolder + '/**/*.ts';
  const tsxFiles = srcFolder + '/**/*.tsx';

  const buildFolder = path.resolve(root, 'build');

  const options = {
    presets: [
      '@babel/preset-env',
      '@babel/typescript',
      '@babel/react'
    ],
    plugins: [
      ['module-resolver', {
        'root': ['./src'],
        'alias': {
          '@source': './src',
        },
      }],
      '@babel/proposal-class-properties',
      '@babel/proposal-object-rest-spread'
    ],
    comments: false,
  };

  const jsonFiles = srcFolder + '/**/*.json';

  // Copy all JSON files
  src([jsonFiles])
  .pipe(dest(buildFolder));

  // Build TS using Babel
  src([tsFiles, tsxFiles])
  .pipe(babel(options))
  .pipe(dest(buildFolder));

  cb();
}

function buildSass(cb) {
  src(path.resolve(root, 'styles/main.scss'))
  .pipe(sass())
  .pipe(postcss([ autoprefixer({ grid: "autoplace", flexbox: true }) ]))
  .pipe(dest(path.resolve(root, 'styles'), { overwrite: true }));

  cb();
}

const build = parallel(buildTsWithBabel, buildSass);

function watchJs() {
  const tsFiles = path.resolve(root, 'src') + '/**/*.ts';
  watch(tsFiles, { ignoreInitial: true }, (cb) => {
    buildTsWithBabel(cb);
  });

  const tsxFiles = path.resolve(root, 'src') + '/**/*.tsx';
  watch(tsxFiles, { ignoreInitial: true }, (cb) => {
    buildTsWithBabel(cb);
  });
}

function watchSass() {
  const sassFiles = path.resolve(root, 'src') + '/**/*.scss';
  watch(sassFiles, { ignoreInitial: true }, (cb) => {
    buildSass(cb);
  });

  const mainSassFile = path.resolve(root, 'styles/main.scss');
  watch(mainSassFile, { ignoreInitial: true }, (cb) => {
    buildSass(cb);
  });
}

const watchAll = parallel(watchJs, watchSass);


module.exports = {
  build,
  buildJs,
  buildTs: buildTsWithBabel,
  buildSass,
  watch: watchAll,
  watchJs,
  watchSass,
};

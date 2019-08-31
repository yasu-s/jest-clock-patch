# 概要

* Jest で `jasmine.clocl().mockDate()` を使用するための拡張のサンプルです。
* `mockdate` を使用して実現しています。
* `Date.now()`・`new Date()`・`moment()` などの値が `mockdate` により上書きされます。

# 実行環境

* Node.js - 10.x
* Yarn - 1.12.x

# 使用ライブラリ

* Jest - 24.9.x
* ts-jest - 24.0.x
* TypeScript -3.5.x
* mockdate - 3.5.x

# 動作確認

## 1. サンプルのダウンロード

```
git clone git@github.com:yasu-s/jest-clock-patch.git
```

## 2. パッケージインストール  

```
cd jest-clock-patch
yarn
```

## 3. サンプルの起動  

```
yarn test
```

# サンプルソース

## jest.config.js

```js
module.exports = {
  "testEnvironment": "node",
  "verbose": true,
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js"
  ],
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  "globals": {
    "ts-jest": {
      "tsConfig": "tsconfig.json"
    }
  },
  "testMatch": [
    "**/test/*.+(ts|tsx|js)"
  ],
  "resetMocks": true,
  "setupFilesAfterEnv": [
    "./setup-clock-patch.ts"
  ]
};
```

## setup-clock-patch.ts

```ts
import * as mockdate from 'mockdate';

// jasmine.clock().mockDate defined
jasmine.clock = () => {
  return {
    mockDate: (date) => {
      mockdate.set(date);
    }
  } as any;
};

beforeEach(() => {
  mockdate.reset();
});
```

## test/data-test.ts

```ts
describe('Date', () => {
  it('now', () => {
    // setup
    jasmine.clock().mockDate(new Date(2019, 1, 1));

    // exercise
    const actual = Date.now();

    // verify
    expect(actual).toBe(new Date(2019, 1, 1).valueOf());
  });

  it('new Date()', () => {
    // setup
    jasmine.clock().mockDate(new Date(2019, 2, 1));

    // exercise
    const actual = new Date();

    // verify
    expect(actual.valueOf()).toBe(new Date(2019, 2, 1).valueOf());
  });

  it('mockDate reset check', () => {
    // exercise
    const actual = new Date();

    // verify
    expect(actual.valueOf()).not.toBe(new Date(2019, 2, 1).valueOf());
  });
});
```

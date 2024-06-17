# Introduction of NgRx

NgRx is a state management framework for Angular applications. This Tutorial was build on the [official NgRx documentation](https://ngrx.io/docs)

## Start API

The API is a full fake REST API using [json-server](https://github.com/typicode/json-server). The data for the fake API is contained in the **_db.json_** file in the root directory.

```
npm run server
```

## Start Angular App

Basic Angular App version 18 created with the Angluar cli.

```
npm run start
```

## Branches

This repository contains 4 branches that contains different stages of the implementation of NgRx.

### Master

The _master_ branch does not contain any implementations of the NgRx state management. If you want to start from zero then work on the master branch or create a feature branch based on this one.

```
git clone https://github.com/kammeph/ngrx-basics.git
```

### Solution 1

The branch _solution-1_ includes the implementation of the basic building block of the NgRx state management (Actions, Reducer, Selectors and Effects)
Installed dependecies:

- @ngrx/store
- @ngrx/store-devtools
- @ngrx/effects

```
git checkout solution-1
```

### Solution 2

With the branch _solution-2_ boilder plate code for actions and selectors were reduced by using the **ActionGroup** and the **Feature**.

```
git checkout solution-2
```

### Solution 3

In the branch _solution-3_ the **EntityState** and **EntityAdapter** were introduced for reducing boiler plate code for state that are used for managing entities.

Installed dependecies:

- @ngrx/entity

```
git checkout solution-3
```

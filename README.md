# Introduction of NgRx

- show lifecycle diagram
- install dependency
- install dev tools
- show how the provideStore was added to the app.config.ts

# App

- show App
- show GamesService

# Actions

- explain what an action is

Actions
Actions are one of the main building blocks in NgRx. Actions express unique events that happen throughout your application. From user interaction with the page, external interaction through network requests, and direct interaction with device APIs, these and more events are described with actions.

Introduction
Actions are used in many areas of NgRx. Actions are the inputs and outputs of many systems in NgRx. Actions help you to understand how events are handled in your application. This guide provides general rules and examples for writing actions in your application.

- create games.action.ts file
- show Action interface (explain type property and payload)
- create loadGames and setGames actions with createAction function

# Reducers

- explain what a reducer is

Reducers
Reducers in NgRx are responsible for handling transitions from one state to the next state in your application. Reducer functions handle these transitions by determining which actions to handle based on the action's type.

Introduction
Reducers are pure functions in that they produce the same output for a given input. They are without side effects and handle each state transition synchronously. Each reducer function takes the latest Action dispatched, the current state, and determines whether to return a newly modified state or the original state. This guide shows you how to write reducer functions, register them in your Store, and compose feature states.

- create games.reducer.ts file
- declare GamesState with only games in it
- create a gamesReducer with the createReducer function
- declare the necessary initial state
- listen to the actions created above add loading flag to the state
- register the reducer in the app.config.ts

# Selectors

- explain selectors

Selectors are pure functions used for obtaining slices of store state. @ngrx/store provides a few helper functions for optimizing this selection. Selectors provide many features when selecting slices of state:

Portability
Memoization
Composition
Testability
Type Safety
When using the createSelector and createFeatureSelector functions @ngrx/store keeps track of the latest arguments in which your selector function was invoked. Because selectors are pure functions, the last result can be returned when the arguments match without reinvoking your selector function. This can provide performance benefits, particularly with selectors that perform expensive computation. This practice is known as memoization.

- create games.selectors.ts file
- explain how the complete AppState will build together with the registering in the app.config.ts
- create a feature selector for the games state
- create selectors for games and loading
- implement the dispatch of the loadGames action and the select of the games in the App
- show that nothing happens to build a bridge to effects

# Effects

- explain Effects

Effects are an RxJS powered side effect model for Store. Effects use streams to provide new sources of actions to reduce state based on external interactions such as network requests, web socket messages and time-based events.

Introduction
In a service-based Angular application, components are responsible for interacting with external resources directly through services. Instead, effects provide a way to interact with those services and isolate them from the components. Effects are where you handle tasks such as fetching data, long-running tasks that produce multiple events, and other external interactions where your components don't need explicit knowledge of these interactions.

Key Concepts
Effects isolate side effects from components, allowing for more pure components that select state and dispatch actions.
Effects are long-running services that listen to an observable of every action dispatched from the Store.
Effects filter those actions based on the type of action they are interested in. This is done by using an operator.
Effects perform tasks, which are synchronous or asynchronous and return a new action.

- add effect dependency
- show the app.config.ts modifications
- declare GamesEffects class
- add the new class to the provideEffects function
- add the loadGames effect
- add actions$ to constructor explain the usage
- add the gamesService to the constructor for fetching games
- return the setGames action
- show result with redux dev tools

- show how you can select a signal from the store

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

Actions express unique events in the application, for e.g. user interactions or external interactions like network requests

- create games.action.ts file
- show Action interface (explain type property and payload)
- create loadGames and setGames actions with createAction function

# Reducers

- explain what a reducer is

Reducers are responsible for handling transitions from one state to the next state in the application. Reducer functions handle these transitions by determining which actions to handle based on the action's type.

- create games.reducer.ts file
- declare GamesState with only games in it
- create a gamesReducer with the createReducer function
- declare the necessary initial state
- listen to the actions created above add loading flag to the state
- register the reducer in the app.config.ts

# Selectors

- explain selectors

Selectors are pure functions used for obtaining slices of store state.

- create games.selectors.ts file
- explain how the complete AppState will build together with the registering in the app.config.ts
- create a feature selector for the games state
- create selectors for games and loading
- implement the dispatch of the loadGames action and the select of the games in the App
- show that nothing happens to build a bridge to effects

# Effects

- explain Effects

Effects use streams to provide new sources of actions to reduce state based on external interactions such as network requests, web socket messages and time-based events.
Effects are handling tasks such as fetching data, long-running tasks that produce multiple events, and other external interactions.
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

# Action Groups

- show disadvantages of current action creation (repetitive code, long imports list)
- implement action group
- change use of actions in effects, reducer and app

# Feature

- tell that advantages will be seen after implementation
- implement feature
- remove selectors
- implement feature in app and config
- add additional property to state and show that selector is already available (query property)
- (show how to add optional selectors)

# Entity State

- explain entity state

Entity State adapter for managing record collections.
It provides an API to manipulate and query entity collections.
Reduces boilerplate for creating reducers.

- add effect dependency
- copy state folder to entity-state
- show and explain EntityState interface
- extend GameState with EntityState

# Entity State Adapter

- create a GameStateAdapter
- simplify games set reducer
- adapter includes a handfull of usefull adapters and can be added to feature
- add all selector from GameStateSelector
  extraSelectors: ({ selectGamesState }) => ({
  ...gamesAdapter.getSelectors(selectGamesState),
  }),

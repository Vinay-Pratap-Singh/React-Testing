# React Testing using Jest and React Testing Library

## Intellisense Support

To get the intellisense support for jest methods we need to create a **jsconfig.json** in the root directory and have to add the below given code in it.

```js
{ "typeAcquisition": { "include": ["jest"] } }
```

## Testing needs to be done for-

- Testing component rendering
- UI elements that we write
- Functions which we write
- API Testing (By Mock testing)
- Event Testing
- Props and States
- UI condition testing | UI state testing

## Testing can be ignored for-

- External UI library code
- Default function of JS and React

## Important Points

- No need of snapshot testing in starting of project
- Run test case after completing your functionality
- Make a standard for code coverage (around 80%)

## getBy vs queryBy vs findBy

- ### **getBy**

  We can use this to target the elements of our component or app while testing.

- ### **queryBy**

  It has all the functionality of getBy but can also get and element which is hidden but existed in the code. Like when we conditionally render an element then it would be helful to test it.

- ### **findBy**

  It returns promise and is useful in case of conditionally rendering a component while its data needs to come and a shimmer or different component is being displayed till that time. <br/>We can also pass timeout to it if the data needs more time to be fetched.

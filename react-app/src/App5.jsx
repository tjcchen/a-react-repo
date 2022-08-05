/**
 * State Management Intro
 * - State management = state of data in an App
 * 
 * Two kinds of state
 * - UI State( local, eg: light/dard mode, modal open/closed )
 * - Server cache( API, eg: list of users )
 * 
 * State can be locally and globally
 * 
 * What can you use for state management?
 * UI State:
 * - Props
 * - Component Composition
 * - Context API
 * 
 * Server Cache
 * - React query, axios
 * 
 * Only use a state management library if you really need to, like:
 * - Redux, Recoil, Jotai, Mobx, Zustand etc.
 * Redux: https://redux.js.org/
 * Recoil: https://github.com/facebookexperimental/Recoil
 * Jotai: https://github.com/pmndrs/jotai
 * Mobx: https://github.com/mobxjs/mobx
 * Zustand: https://github.com/pmndrs/zustand
 */

export default function App() {
  return (
    <>
      <p>State Management Info</p>
    </>
  );
}

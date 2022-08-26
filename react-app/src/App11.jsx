/**
 * Performance Intro
 * - Focus on (potential) react-specific performance issues / improvements
 * - Don't forget tools like lighthouse (web.dev[important]), GTmetrix(https://gtmetrix.com/), Pingdom etc.
 * - Besides this secions about performance, we will also be taking a look at
 *   Web Vitals(https://web.dev/vitals/) in the Monitoring section of this course
 * 
 * Rendering:
 * If we cause a component to (re)render, React works in 2 phases:
 * - Render Phase: determining what changes need to be made (this is where the reconciliation / 'diff' algorithm comes in to play)
 * - Commit Phase: apply the changes (e.g. inserting / updating / removing DOM nodes)
 * 
 * Commiting = Fast, Rendering = can be slow
 */
export default function App() {
  return (
    <>
      <p>Performance Intro</p>
    </>
  );
}

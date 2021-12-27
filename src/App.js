import ParentOne from "./container/ParentOne/ParentOne";
import ParentTwo from "./container/ParentTwo/ParentTwo";

function App() {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <h1>Redux Implementation</h1>
        <div style={{ display: 'flex', textAlign: 'center' }}>
          <div style={{ border: '2px solid black', padding: '10px' }}>
            <ParentOne />
          </div>
          <div style={{ border: '2px solid black', padding: '10px' }}>
            <ParentTwo />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

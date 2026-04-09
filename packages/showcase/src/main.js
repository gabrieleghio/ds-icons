"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var client_1 = require("react-dom/client");
var Icons = require("@gabrieleghio/icons-react");
// Estrai tutte le icone (escludendo Icon e types)
var iconList = Object.entries(Icons).filter(function (_a) {
    var name = _a[0];
    return !['Icon'].includes(name);
});
function App() {
    var _a = (0, react_1.useState)(48), size = _a[0], setSize = _a[1];
    var _b = (0, react_1.useState)('#000000'), color = _b[0], setColor = _b[1];
    return (<div style={{ padding: '40px', fontFamily: 'system-ui' }}>
      <h1>Icon Gallery</h1>
      
      <div style={{ marginBottom: '30px', gap: '20px', display: 'flex' }}>
        <label>
          Size: <input type="number" value={size} onChange={function (e) { return setSize(Number(e.target.value)); }}/>
        </label>
        <label>
          Color: <input type="color" value={color} onChange={function (e) { return setColor(e.target.value); }}/>
        </label>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: '30px' }}>
        {iconList.map(function (_a) {
            var name = _a[0], Component = _a[1];
            return (<div key={name} style={{ textAlign: 'center' }}>
            <Component size={size} color={color}/>
            <p style={{ marginTop: '10px', fontSize: '12px' }}>{name}</p>
          </div>);
        })}
      </div>
    </div>);
}
client_1.default.createRoot(document.getElementById('root')).render(<react_1.default.StrictMode>
    <App />
  </react_1.default.StrictMode>);

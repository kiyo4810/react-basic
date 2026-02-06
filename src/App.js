import logo from "./logo.svg";
import "./App.css";
import Article from "./components/Article";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* 文字列は中括弧囲んでも囲まなくてもOK */}
        <Article title={"Kiyo4810初のReact"} content={"ここでは私の初のReactの作成"} />
        <Article title={"タイトル１　だから何やねん"} content={"なんとなくデザインのある雛形サイトはできた。だから何やねんというあなたの心無い声は聞こえている"} />
        <Article title={"タイトル２　大きな一歩"} content={"しかし私にとってはこれは大きな一歩である。JavaScriptを学習後リアクトを習得したいという欲望"} />

        <p>React雛形Pタグ</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

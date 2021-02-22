import React, { Component } from "react";
import "./App.css";
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";

class App extends Component {
  constructor(props) {
    super(props);
    {
      /* 컴포넌트가 실행될 때 render함수보다 먼저 쓰면서 초기화시켜주고 싶으면 이 안에 쓰면 됨 */
    }
    this.state = {
      subject: { title: "WEB", sub: "World Wide Web" },
      contents: [
        { id: 1, title: "HTML", desc: "HTML is for information" },
        { id: 2, title: "CSS", desc: "CSS is for design" },
        { id: 3, title: "Javascript", desc: "HTML is for interactive" },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
        ></Subject>
        <Subject title="React" sub="For UI"></Subject>
        <TOC data={this.state.contents}></TOC>
        <Content
          title="HTML"
          desc="HTML is Hypertext Markup Language."
        ></Content>
      </div>
    );
  }
}

export default App;

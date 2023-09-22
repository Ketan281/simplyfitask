import "./styles.css";

export default function App() {
  return (
    <div className="App">
      {/* <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2> */}
      <div style={{height:"200px",backgroundColor:"black",width:"400px",}}>
        <div>
          <div style={{height:"100px",width:"15px",backgroundColor:"lightgreen",marginLeft:"45%",transform: "rotate(45deg)",}}>
          </div>
          <div style={{height:"100px",width:"15px",backgroundColor:"lightblue",marginLeft:"45%",transform: "rotate(135deg)",marginTop:"-10%"}}>
          </div>
          <div style={{height:"100px",width:"15px",backgroundColor:"lightpink",marginLeft:"62%",transform: "rotate(227deg)",marginTop:"-23%"}}>
          </div>
          <div style={{height:"115px",width:"15px",backgroundColor:"brown",marginLeft:"61%",transform: "rotate(315deg)",marginTop:"-42.9%"}}>
          </div>
          <div style={{position:"Absolute",height:"50px",width:"50px",left:"200px",top:"70px"}}>

            <p style={{color:"white",fontSize:"8px"}}>HTML <span style={{color:"brown"}}>&</span> CSS</p>
            <p style={{color:"white",fontSize:"4px"}}>Design and build websites</p>
          </div>
          </div>
      </div>
    </div>
  );
}

const heading = React.createElement("h1",{id:"heading"},"hello! react learners(react)");
 console.log(heading);
const root = ReactDom.createRoot(document.getElementbyId("root1"));
root.render(heading);
<div id="outer">
    <div id="inner">
        <p id="para"></p>
        <h1 id="heading"></h1>
        <span id="meassage">
            hello react lerners
        </span>
    </div>
</div>
const heading = React.createElement("div",{id:"outer"},
     React.createElement("div",{id:"inner"},
          [React.createElement("p",{id:"para"},"i am a paragraph"),
           React.createElement("h1",{id:"heading"},"i am a paragraph"),
           React.createElement("span",{id:"massage"},"i am a paragraph"),    
          ]
     ),
    React.createElement("div",{id:"inner1"},
          [React.createElement("p",{id:"para"},"i am a paragraph"),
           React.createElement("p",{id:"heading"},"i am a paragraph"),
           React.createElement("p",{id:"message"},"i am a paragraph"),    
          ]
    )
    
)        

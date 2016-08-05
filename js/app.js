const App=React.createClass({
        getInitialState:function () {
                return {
                        isEditor:true
                }
        },
        toggle:function () {
          this.setState({
                  isEditor:!this.state.isEditor
          })
        },
        render:function(){
        return <div>
                <button onClick={this.toggle}>{this.state.isEditor?"Previewer":"Editor"}</button>
                <div className={this.state.isEditor?"":"hidden"}>
                        <Editor />
                </div>
                <div className={this.state.isEditor?"hidden":""}>
                        <Previewer />
                </div>
        </div>

        }
})

const Previewer=React.createClass({
        render:function(){
        return <div>Previewer</div>
        
        }
})

const Editor=React.createClass({
        render:function(){
        return <div>Editor</div>
        
        }
})
ReactDOM.render(<App/>,document.getElementById('content'));
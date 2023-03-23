import React, { Component } from 'react';
import axios from 'axios';

class TodoEdit extends Component {
    state = {
        todoItem:{
            "todoTableId":2,
            "title":"Job Y",
            "isComplete":0
        }
    }
    render() {
        return (
            <div className="container">


                <h1>待辦事項清單 - 修改</h1>
                <hr />
                <div className="row">
                    <div className="col-md-4">
                        <form action="/Todo/Edit" method="post">

                            <input type="hidden" id="TodoItemId"
                                name="TodoItemId" value="1" />
                            <div className="form-group">
                                
                                <label className="control-label" htmlFor="Name">項目名稱</label>

                                <input className="form-control" type="text"
                                    id="Name" name="Name" 
                                    value={this.state.todoItem.title}
                                    onChange={this.titleChange}
                                    />
                            </div>
                            <div className="form-group form-check">
                                <label className="form-check-label">
                                    <input className="form-check-input" type="checkbox"
                                        id="IsComplete" name="IsComplete"
                                        checked={this.state.todoItem.isComplete?"checked":""} 
                                        onChange={this.isCompleteChange}
                                        /> 是否已完工
                                </label>
                            </div>
                            <div className="form-group">
                                <input type="button" value="確定" className="btn btn-outline-primary" 
                                onClick={this.okClick}/> |
                                <a href="/Todo/Index" className="btn btn-outline-info">取消</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
    
    titleChange=(e)=>{
        var newState={...this.state};
        newState.todoItem.title = e.target.value;
        this.setState(newState);
    }
    isCompleteChange=(e)=>{
        var newState={...this.state};
        newState.todoItem.isComplete = e.target.checked;
        this.setState(newState);
    }
    okClick = async()=>{
        let url = "http://localhost:8000/todo/item"
        await axios.put(url, this.state.todoItem);
        window.location= "/";
        // console.log(this.state.todoItem)
    }
    componentDidMount = async()=>{
        let url = "http://localhost:8000/todo/item/"+ this.props.match.params.id;
        var result = await axios.get(url);
        var newState = {...this.state};
        newState.todoItem = result.data;
        this.setState(newState);
    }
}

export default TodoEdit;
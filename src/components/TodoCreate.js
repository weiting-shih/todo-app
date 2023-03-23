import React, { Component } from 'react';
import axios from "axios";

class TodoCreate extends Component {
    state = {
        todoItem:{ todoTableId: 1, title: "", isComplete: 1 }
    }
    render() {
        return (
            <div class="container">

                <h1>待辦事項清單 - 新增</h1>
                <hr />
                <div class="row">
                    <div class="col-md-4">
                        <form action="/Todo/Create" method="post">

                            <div class="form-group">
                                <label class="control-label" for="Name">項目名稱</label>
                                <input class="form-control" type="text" id="Name"
                                    name="Name" value={this.state.todoItem.title}
                                    onChange={this.doTitleChange} 
                                    />
                            </div>
                            <div class="form-group form-check">
                                <label class="form-check-label">
                                    <input class="form-check-input" type="checkbox" id="IsComplete"
                                        name="IsComplete" value="1"
                                        checked={this.state.todoItem.isComplete? "checked" : ""}
                                        onChange={this.doIsCompleteChange} /> 是否已完工
                                </label>
                            </div>
                            <div class="form-group">
                                <input type="button" 
                                    onClick={this.doOKButtonClick} 
                                    value="確定" class="btn btn-outline-primary" /> |
                                <a href="/Todo/Index" class="btn btn-outline-info">取消</a>
                            </div>
                        </form>
                    </div>
                </div>


            </div>
        );
    }
    doTitleChange = (e)=>{
        var newState = {...this.state};
        newState.todoItem.title = e.target.value;
        this.setState(newState);
        // console.log(newState);
    }
    doIsCompleteChange = (e)=>{
        var newState = {...this.state};
        newState.todoItem.isComplete = e.target.checked;
        this.setState(newState);
    }
    doOKButtonClick = async (e)=>{
        // console.log(this.state.todoItem);
        await axios.post("http://localhost:8000/todo/create",this.state.todoItem);
        // console.log(result);
        window.location= "/" ;
    }
}

export default TodoCreate;
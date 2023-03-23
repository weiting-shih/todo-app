import React, { Component } from 'react';
import axios from 'axios';

class TodoDelete extends Component {
    state = {
        todoItem: {
            "todoTableId": 2,
            "title": "Job Y",
            "isComplete": 0
        }
    }
    render() {
        return (
            
                <div className="container">


                    <h1>待辦事項清單 - 刪除</h1>

                    <hr />
                    <div>
                        <dl className="row">
                            <dt className="col-sm-2">
                                項目名稱
                            </dt>
                            <dd className="col-sm-10" >
                                {this.state.todoItem.title}
                            </dd>
                            <dt className="col-sm-2">
                                是否已完工
                            </dt>
                            <dd className="col-sm-10">
                                <input className="check-box" disabled="disabled"
                                    type="checkbox"
                                    checked={this.state.todoItem.isComplete ? "checked" : ""} />
                            </dd>
                        </dl>

                        <hr />
                        <h3>確定要刪除這筆資料嗎?</h3>

                        <form action="/Todo/Delete" method="post" >
                            <input type="hidden" id="TodoItemId" name="TodoItemId"
                                value="1"
                            />
                            <input type="button" value="確定" className="btn btn-outline-danger"
                                onClick={this.deleteButtonClick} /> |
                            <a href="/Todo/Index" className="btn btn-outline-info">取消</a>
                        </form>
                    </div>
                </div>
            

        );
    }
    deleteButtonClick = async () => {
        let url = "http://localhost:8000/todo/delete/" + this.props.match.params.id;
        await axios.delete(url);
        window.location = "/";
    }
    componentDidMount = async () => {
        let url = "http://localhost:8000/todo/item/" + this.props.match.params.id;
        var result = await axios.get(url);
        var newState = { ...this.state };
        newState.todoItem = result.data;
        this.setState(newState);
    }
}

export default TodoDelete;
import React from "react";
import { connect } from "react-redux";
import 'antd/dist/antd.css';
import { Input,Button,List} from 'antd';
import store from './index';

const data=[
    1,2,3
];
export default class TodoList extends React.Component{
    constructor(props){
        super(props);
        this.state=store.getState();
        store.subscribe(this.F5)
    }
    componentDidMount(){
        console.log(this.state);
    }
    handleChg=(e)=>{
        const action={
            type:'change_input_value',
            inputValue:e.target.value
        }
        store.dispatch(action);
    }
    handleSend=()=>{
        const action={
            type:'send_message',
        }
        store.dispatch(action);
    }
    F5=()=>{
        this.setState(store.getState());
    }
    handleItem=(index)=>{
        const action={
            type:'delete_message',
            index:index
        }
        store.dispatch(action);
    }
    render(){ 
        console.log(this.state)   
        return(
            <div style={{marginTop:"10px",marginLeft:"20px"}}>
                <Input placeholder="请输入" style={{width:"400px",marginRight:"10px"}} onChange={this.handleChg} value={this.state.inputValue}/>
                <Button type="primary" onClick={this.handleSend}>发送</Button>
                <div style={{width:"400px",marginTop:"10px"}}>
                <List
                     bordered
                     dataSource={this.state.list}
                     renderItem={(item,index) => (<List.Item onClick={this.handleItem.bind(this,index)}>{item}</List.Item>)}/>
                </div>
            </div>
        );
    }
    
}
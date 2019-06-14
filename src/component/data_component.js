import React, { Component } from 'react'
import { Button, Table, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';

export default class data_component extends Component {
    state = {
        data : []
    }
    constructor(props) {
        super(props);
        this.modal = {
          modal: false
        };
    
        this.toggle = this.toggle.bind(this);
            
      }
    
      toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }
    
    componentDidMount(){
        axios.get('http://localhost/laravel-react/api/products')
        .then(res => {
            //   console.log(res.data);
            const data = res.data;
            // console.log(persons);
            this.setState({ data });
        })
    }
    render() {
        let datas = this.state.data.map((data) => {
            return (
                <tr key="{data.id}">
                    <th scope="row">{data.id}</th>
                    <td>{data.title}</td>
                    <td>{data.body}</td>
                    <td>
                        <Button outline color="warning">Edit</Button> 
                        <Button outline color="danger">Delete</Button>
                   </td>
                </tr>
            );
        });
        return (
            <div>
                <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
                <Table>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Body</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {datas}
                    </tbody>
                </Table>
         
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
              
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
            </div>
        )
    }
}

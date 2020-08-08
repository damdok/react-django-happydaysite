import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL } from "../constants";

class NewCommentForm extends React.Component {
  state = {
    pk: 0,
    name: "",
    relationship: "",
    comment: ""
  };

  componentDidMount() {
    if (this.props.comment) {
      const { pk, name, relationship, comment } = this.props.comment;
      this.setState({ pk, name, relationship, comment });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createComment = e => {
    axios.post(API_URL, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editComment = e => {
    e.preventDefault();
    axios.put(API_URL + this.state.pk, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.props.comment ? this.editComment : this.createComment}>
        <FormGroup>
          <div className="row">
            <div className="form-group col-md-12">
              <Label for="name">Name:</Label>
              <Input
                type="text"
                name="name"
                onChange={this.onChange}
                value={this.defaultIfEmpty(this.state.name)}
              />
            </div>
          </div>
        </FormGroup>
        <FormGroup>
          <div className="row">
            <div className="form-group col-md-12">
              <Label for="relationship">Relationship:</Label>
              <Input
                type="text"
                name="relationship"
                onChange={this.onChange}
                value={this.defaultIfEmpty(this.state.relationship)}
              />
            </div>
          </div>
        </FormGroup>
        <FormGroup>
          <div className="row">
            <div className="form-group col-md-12">
              <Label for="comment">Comment:</Label>
              <textarea
                className="form-control" 
                rows="5"
                name="comment"
                onChange={this.onChange}
                value={this.defaultIfEmpty(this.state.comment)}
              />
            </div>
          </div>
        </FormGroup>
        <Button>Send</Button>
      </Form>
    );
  }
}

export default NewCommentForm;

import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import CommentList from "./CommentList";
import NewCommentModal from "./NewCommentModal";

import axios from "axios";

import { API_URL } from "../constants";

class Home extends Component {
  state = {
    comments: []
  };

  componentDidMount() {
    this.resetState();
  }

  getComments = () => {
    axios.get(API_URL).then(res => this.setState({ comments: res.data }));
  };

  resetState = () => {
    this.getComments();
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <CommentList
              comments={this.state.comments}
              resetState={this.resetState}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;

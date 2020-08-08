import React, { Component } from "react";
import { Table } from "reactstrap";
import NewCommentModal from "./NewCommentModal";
//import picture from "../picture/avatar.png";
import ConfirmRemovalModal from "./ConfirmRemovalModal";
import '../css/CommentList.css';

class CommentList extends Component {
  render() {
    const comments = this.props.comments;
    const logo = require('../picture/avatar.png');
    return (
      <div style={{height:"500px",overflow:"auto"}}>
        <Table dark style={{tableLayout:"fixed",width:"100%"}} className="table"> 
        <thead>
          <tr>
            <th style={{width:"10%"}}></th>
            <th style={{width:"25%"}}>Name</th>
            <th style={{width:"30%"}}>Relationship</th>
            <th style={{width:"20%"}}>Comment</th>
            <th >RegistrationDate</th>
            <th ></th>
          </tr>
        </thead>
        <tbody>
          <td colspan="6">
            <div className="table-wrap" >
              <table className="table-dalam">
                <tbody>
                  {!comments || comments.length <= 0 ? (
                  <tr>
                    <td colSpan="6" align="center"> 
                    <b>Ops, no one here yet</b>
                    </td>
                  </tr>
                  ) : (
                  comments.map(comment => (
                  <tr key={comment.pk}>
                    <td><center><img src={logo} style={{width:"70px",height:"70px"}} /></center></td>
                    <td>{comment.name}</td>
                    <td>{comment.relationship}</td>
                    <td>{comment.comment}</td>
                    <td>{comment.registrationDate}</td>
                    <td align="center">
                      <NewCommentModal
                      create={false}
                      comment={comment}
                      resetState={this.props.resetState}
                      />
                    </td>
                  </tr>
                  ))
                  )}
                </tbody>
              </table>
            </div>
          </td>
        </tbody>
      </Table>
      </div>
    );
  }
}

export default CommentList;

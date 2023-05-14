import React, { Component } from 'react'
import OneUser from './OneUser';

export default class List extends Component {
  //hàm lấy thông tin xoá từ oneuser 
  deleteClick = (idUser) => {
    // alert('id cần xoá : '+ idUser);
    this.props.deleteUserInfo(idUser);
  }
  render() {
  console.log(this.props.dataUser);
    return (
        <div className="col">
        <table className="table table-hover table-inverse ">
          <thead className="thead-inverse">
            <tr>
              <th>STT</th>
              <th>Họ Tên</th>
              <th>Số DDt</th>
              <th>Phân Quyền</th>
              <th>Chức Năng</th>
            </tr>
          </thead>
          <tbody>

           {
            this.props.dataUser.map((value,key) =>  {
              return <OneUser 
                          id = {value.id}
                          stt = {key}
                          ten={value.name}
                          dt={value.tel}
                          quyen={value.permission}
                          editFunClick={(infoEdit) => this.props.edit(value)}
                          changeEditUserForm = {() => this.props.changeEditUserForm()}
                          deleteClick = {(idUser) => this.deleteClick(idUser)}

                      />
              })
            }

          </tbody>
        </table>
      </div>
      
    )
  }
}

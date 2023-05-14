import React, { Component } from 'react'
import EditUser from './EditUser';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state= {
          ndTimKiem:'',
          userObj: {}
    }
  }
  
  getEditInfo = (info) => {
    this.setState({userObj: info});
    this.props.getEditInfoApp(info);
  }
  
  // hàm lấy thông tin ở control appjs tìm kiếm
  isChange = (event) => {
    // console.log(event.target.value); 
    this.setState({ndTimKiem:event.target.value});  
  }

  hienNut = () => {
    if (this.props.trangThaiCha === true) {
      return <div onClick={() => this.props.ketnoi()} className="btn btn-outline-info btn-block">Thêm mới</div>
    }
    else
      return <div onClick={() => this.props.ketnoi()} className="btn btn-outline-secondary btn-block">Đóng</div>
  }

  isShowEdit = () => {
    if(this.props.editUserStatus === true) {
      return <EditUser 
                changeEditUserForm = {() => this.props.changeEditUserForm()}
                userEditObject = {this.props.userEditObject}
                getEditInfo={(info) =>this.getEditInfo(info)}
            />
    }
  }


  render() {
    
    return (
        <div className="col-12">
            <div className='row'>
                <div className='col-9'>
                    <div className="searchForm">
            <div className="form-group">
                <div className="btn-group">
                <input onChange={(event) => this.isChange(event)} type="text" className="form-control" name id placeholder="Nhập từ khóa" style={{width: '800px'}} />
                <div onClick={() => this.props.getInfoSearch(this.state.ndTimKiem)} className="btn btn-info">Tìm</div>
                </div>
            </div>
            </div> {/* end tìm kiếm  */}
                </div>
                <div className='col-3'>
                    {this.hienNut()}
                </div>
            </div>
            <div className='row'>
              {this.isShowEdit()}
            </div>
      </div>
      
    )
  }
}

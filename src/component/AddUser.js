import React, { Component } from 'react'

export default class AddUser extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            trangthai : true,
            id: '',
            name: '',
            tel: '',
            permission:''       
          }

    }
    // hàm lấy thông tin thêm 
    isChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      // console.log(name);
      // console.log(value);
      this.setState({[name]:value});
    }
    hienNut = () => {
        if (this.state.trangthai === true)
            return <div onClick={() => {this.doiTrangThai()}} className="btn btn-outline-info btn-block">Thêm mới</div>;
        else
            return <div onClick={() => {this.doiTrangThai()}} className="btn btn-outline-secondary btn-block">Đóng</div>  
                           
    }
    doiTrangThai = () => {
        this.setState({trangthai:!this.state.trangthai});
    }
    hienForm = () => {
        if (this.state.trangthai === false) 
        return (
            <div className="card border-primary mb-3" style={{maxWidth: '18rem'}}>
          <div className="card-header">Thêm thành viên</div>
          <div className="card-body text-primary">
            <div className="form-group">
              <input type="text" className="form-control" name id placeholder="Tên user" />
            </div>
            <div className="form-group">
              <input type="text" className="form-control" name id placeholder="Số điện thoại" />
            </div>
            <div className="form-group">
              <select className="form-control" name id>
                <option selected>Choose...</option>
                <option value={1}>Admin</option>
                <option value={2}>User</option>
                <option value={3}>Modrater</option>
              </select>
            </div>
            <div className="form-group">
              <div onClick={(abc) => {this.props.addInfoUser('Ku Nghĩa')}} className="btn btn-block btn-primary">Thêm</div>
            </div>
          </div>
        </div>
        )
    }

    // dựa vào state của cha truyền xuống 
    hienForm1 = () => {
        if (this.props.trangThaiCha === false) {
            return (
                <div className="card border-primary mb-3" style={{maxWidth: '18rem'}}>
          <div className="card-header">Thêm thành viên</div>
          <div className="card-body text-primary">
            <div className="form-group">
              <input onChange={(event) => this.isChange(event)} type="text" className="form-control" name="name" id placeholder="Tên user" />
            </div>
            <div className="form-group">
              <input onChange={(event) => this.isChange(event)} type="text" className="form-control" name="tel" id placeholder="Số điện thoại" />
            </div>
            <div className="form-group">
              <select onChange={(event) => this.isChange(event)} className="form-control" name = "permission" id>
                <option selected>Choose...</option>
                <option value={1}>Admin</option>
                <option value={2}>User</option>
                <option value={3}>Modrater</option>
              </select>
            </div>
            <div className="form-group">
              <div onClick={(name, tel, permission) => this.props.addInfoUser(this.state.name,this.state.tel,this.state.permission)} className="btn btn-block btn-primary">Thêm</div>
            </div>
          </div>
        </div>
            )
        }
    }

  render() {
    console.log(this.props.trangThaiCha);
        
    return (
        <div>
          <div className="col-12">
            {/* {this.hienNut()} */}
            {/* <div className="btn btn-outline-info btn-block">Thêm mới</div>
            <div className="btn btn-outline-secondary btn-block">Đóng</div> */}
            {this.hienForm1()}
          </div> 
        </div>
    )
  }
}

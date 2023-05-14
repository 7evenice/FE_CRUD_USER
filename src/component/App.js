import '../App.css';
import React, { useState } from 'react';
import AddUser from './AddUser';
import Header from './Header';
import List from './List';
import Search from './Search';
import dl from './data.json';

function App() {
  // console.log(dl);
  
  const thongBao = () => {
    alert('Hello cu')
  }
  // khai báo state trong function 
  const [trangthaiForm, settrangthaiForm] = useState(true);
  const [data, setData] = useState(dl);
  const [infoSearch, setInfoSearch] = useState('');
  const [editUserStatus,setEditUserStatus] = useState(false);
  const [userEditObject,setuserEditObject] = useState({});


  const changeEdit = () => {
    setEditUserStatus(!editUserStatus)
  }

  const doiTrangthaiForm = () => {
    settrangthaiForm(!trangthaiForm);
  }
  // hàm lấy thông tin từ search 
  const getSearch = (info) => {
    // alert('thông tin nhận được ' + info)
    setInfoSearch(info);
  }
  //khai báo mảng để lưu kqua, ban đầu là mảng rỗng
  var ketqua = [];
  data.forEach((item) => {
    if (item.name.indexOf(infoSearch)!== -1) {
      ketqua.push(item);
    }
  });
  // hàm lấy thông tin cần thêm vào data 
  const getNewUser = (name, tel, permission) => {
    // alert('the Info is '+ name); 
    var item = {}; 
    item.id = '';
    item.name = name;
    item.tel = tel;
    item.permission = permission;
    var newItem = data;
    // console.log(newItem);
    setData(newItem);
    alert('đã thêm dữ liệu')
    
  }
  const editUser = (infoEdit) => {
    // alert('Thông tin nhận được ' + infoEdit)
    setuserEditObject(infoEdit);
  }
  //hàm nhận thông tin đã sửa ở EditUser
  const getEditInfoApp=(info) =>{
    // alert('thông tin đã sửa xong ');
    data.forEach((value, key) => {
      if (value.id === info.id) {
        // alert('thông tin sửa: ' + info.name)
        value.name = info.name;
        value.tel = info.tel;
        value.permission = info.permission;
      }
    })
  }
  // hàm filter lọc dữ liệu theo điều kiện 
    // var mangA = [1,2,3,4,5];
    // var x = 3 ;
    // mangA = mangA.filter(i => i ===x);
    // alert(mangA);

  // hàm nhận id xoá từ list (delete)
  const deleteUserInfo = (idUser) => {
    var tempData = data ;
    tempData = tempData.filter(item => item.id != idUser);
    setData(tempData);
    
    
    
    // alert('id bố nhận được: ' + idUser);
    // data.forEach((value, key) => {
    //   if (idUser === value.id) {
    //     alert('xoá');
    //   }
    // })
    
  }


  return (
    <div className="App">
      <Header/>
      <div className='container'>
        <div className='row'>
          <Search 
                  ketnoi= {() => doiTrangthaiForm()} 
                  trangThaiCha ={trangthaiForm}
                  getInfoSearch= {(info ) => getSearch(info) }
                  editUserStatus = {editUserStatus}
                  userEditObject = {userEditObject}

                  changeEditUserForm = {() => changeEdit()}
                  getEditInfoApp = {(info) => getEditInfoApp(info)}
          />
          <List
              dataUser = {ketqua} 
              edit = {(infoEdit) => editUser(infoEdit)}
              changeEditUserForm = {() => changeEdit()}
              deleteUserInfo = {(idUser) => deleteUserInfo(idUser)}
          />
          <AddUser
            addInfoUser = {(name, tel, permission) => getNewUser(name, tel, permission) }
           trangThaiCha={trangthaiForm} 
           />
        </div>
      </div>
    </div>
  );
}

export default App;

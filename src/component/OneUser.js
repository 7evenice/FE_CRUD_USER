import React from 'react'

export default function OneUser(props) {
    const cacQuyen = () => {
        if (props.quyen === 1 ) {
            return "Admin";
        }
        if (props.quyen === 2 ) {
            return "Modrator";
        }
        else {
            return "Normal User";
        }
    }
    const editClick = () => {
        props.editFunClick(); //đẩy data lên bố 
        props.changeEditUserForm(); // thực hiện đổi trạng thái 
    }

    const deleteUser = (idUser) => {
        // alert('ID của user cần xoá : ' + idUser); 
        props.deleteClick(idUser);
    }



  return (
    <tr>
        <td scope="row">{props.stt +1}</td>
        <td>{props.ten}</td>
        <td>{props.dt}</td>
        <td>{cacQuyen()}</td>
        <td>
        <div className="btn-group">
            <div onClick={() => editClick()} className="btn btn-warning sua"><i className="fa fa-pencil" aria-hidden="true" />Sửa</div>
            <div onClick={(idUser) => deleteUser(props.id)} className="btn btn-danger xoa"><i className="fa fa-minus" aria-hidden="true" /> Xóa</div>
        </div>
        </td>
    </tr>
  )
}

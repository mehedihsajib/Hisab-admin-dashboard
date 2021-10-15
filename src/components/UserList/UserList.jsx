// import { DataGrid } from '@mui/x-data-grid';
// import React, { useState } from 'react';
// import { AiOutlineDelete } from 'react-icons/ai';
// import { Link } from 'react-router-dom';
// import userRows from '../../assets/data/userRows';

// function UserList() {
//     const [data, setData] = useState(userRows);

//     const deleteHanlder = (id) => {
//         setData(data.filter((item) => item.id !== id));
//     };
//     const columns = [
//         { field: 'id', headerName: 'ID', width: 80 },
//         {
//             field: 'user',
//             headerName: 'User',
//             width: 200,
//             renderCell: (params) => (
//                 <>
//                     <img className="user__avatar" src={params.row.avatar} alt="" />
//                     {params.row.user}
//                 </>
//             ),
//         },
//         { field: 'email', headerName: 'Email', width: 200 },
//         {
//             field: 'status',
//             headerName: 'Status',
//             width: 110,
//         },

//         {
//             field: 'transaction',
//             headerName: 'Transaction Vol.',
//             width: 200,
//         },

//         {
//             field: 'action',
//             headerName: 'Action',
//             width: 150,
//             renderCell: (params) => (
//                 <>
//                     <Link to={`/user/${params.row.id}`}>
//                         <button type="button" className="user__edit-btn">
//                             Edit
//                         </button>
//                     </Link>

//                     <AiOutlineDelete
//                         className="user__delete-btn"
//                         onClick={() => deleteHanlder(params.row.id)}
//                     />
//                 </>
//             ),
//         },
//     ];

//     return (
//         <div className="userList" style={{ height: '80vh', width: '100%' }}>
//             <DataGrid
//                 style={{ fontSize: '16px' }}
//                 rows={data}
//                 columns={columns}
//                 pageSize={10}
//                 rowsPerPageOptions={[10]}
//                 checkboxSelection
//                 disableSelectionOnClick
//             />
//         </div>
//     );
// }

// export default UserList;

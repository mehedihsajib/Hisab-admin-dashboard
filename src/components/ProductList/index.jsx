import { DataGrid } from '@mui/x-data-grid';
import React, { useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import productRows from '../../assets/data/productRows';

function ProductList() {
    const [data, setData] = useState(productRows);

    const deleteHanlder = (id) => {
        setData(data.filter((item) => item.id !== id));
    };
    const columns = [
        { field: 'id', headerName: 'ID', width: 80 },
        {
            field: 'name',
            headerName: 'Name',
            width: 200,
            renderCell: (params) => (
                <>
                    <img className="user__avatar" src={params.row.img} alt="" />
                    {params.row.name}
                </>
            ),
        },
        { field: 'stock', headerName: 'Stock', width: 200 },
        {
            field: 'status',
            headerName: 'Status',
            width: 110,
        },

        {
            field: 'price',
            headerName: 'Price',
            width: 200,
        },

        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => (
                <>
                    <Link to={`/product/${params.row.id}`}>
                        <button type="button" className="product__edit-btn">
                            Edit
                        </button>
                    </Link>

                    <AiOutlineDelete
                        className="product__delete-btn"
                        onClick={() => deleteHanlder(params.row.id)}
                    />
                </>
            ),
        },
    ];

    return (
        <div className="productList" style={{ height: '80vh', width: '100%' }}>
            <DataGrid
                style={{ fontSize: '16px' }}
                rows={data}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    );
}

export default ProductList;

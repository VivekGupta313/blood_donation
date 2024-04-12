import React from 'react'
import Table, { AvatarCell, SelectColumnFilter, StatusPill } from './Table'  // new

const getData = () => {
  const data = [
    {
      name: 'Jane Cooper',
      email: 'jane.cooper@example.com',
      address: 'Ahmedabad ,Gujarat',
      department: 'Optimization',
      status: 'Active',
      bloodgroup: 'A+',
      mobile_no: 9898989898,
      imgUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
      name: 'Cody Fisher',
      email: 'cody.fisher@example.com',
      address: 'Surat , Gujarat',
      department: 'Intranet',
      status: 'Inactive',
      bloodgroup: 'A-',
      mobile_no: 9898989898,
      imgUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
      name: 'Esther Howard',
      email: 'esther.howard@example.com',
      address:'Ahmedabad ,Gujarat',
      department: 'Directives',
      status: 'Active',
      bloodgroup: 'B+',
      mobile_no: 9898989898,
      imgUrl: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
      name: 'Jenny Wilson',
      email: 'jenny.wilson@example.com',
      address: 'Ahmedabad ,Gujarat',
      department: 'Program',
      status: 'Offline',
      bloodgroup: 'B-',
      mobile_no: 9898989898,
      imgUrl: 'https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
      name: 'Kristin Watson',
      email: 'kristin.watson@example.com',
      address: 'Ahmedabad ,Gujarat',
      department: 'Mobility',
      status: 'Inactive',
      bloodgroup: 'O+',
      mobile_no: 9898989898,
      imgUrl: 'https://images.unsplash.com/photo-1532417344469-368f9ae6d187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
      name: 'Cameron Williamson',
      email: 'cameron.williamson@example.com',
      address: 'Ahmedabad ,Gujarat',
      department: 'Security',
      status: 'Active',
      bloodgroup: 'AB+',
      mobile_no: 9898989898,
      imgUrl: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
  ]
  return [...data, ...data, ...data]
}

function TableWrapper() {

  const columns = React.useMemo(() => [
    {
      Header: "Name",
      accessor: 'name',
      Cell: AvatarCell,
      imgAccessor: "imgUrl",
      emailAccessor: "email",
    },
    {
      Header: "Mobile No",
      accessor: 'mobile_no',
    },
     {
      Header: "Blood Group",
      accessor: 'bloodgroup',
      Filter: SelectColumnFilter,  // new
      filter: 'includes',
      Cell: StatusPill,

    },
    {
      Header: "Address",
      accessor: 'address',
      Filter: SelectColumnFilter, 
    },
   
    // {
    //   Header: "Status",
    //   accessor: 'status',
    //   Cell: StatusPill,
      
    // },
  
    
  ], [])

  const data = React.useMemo(() => getData(), [])

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="mx-auto px-4 sm:px-6 lg:px-8 " style={{position: "relative",
    top:" -358px"}}>
        
        <div className="mt-6">
          <Table columns={columns} data={data} />
        </div>
      </main>
    </div>
  );
}

export default TableWrapper;
async function fetchOneUser(id) {
    const res= await fetch(`https://reqres.in/api/users/${id}`);
    const data = await res.json();
    return data.data;
}


async function UserPage({params}) {
    const id = params.id;
    let userData = await fetchOneUser(id);
   

  return (
    <div
        className="row"
        >
        <div className="col-md-6 offset-md-3" >
            <div className="card">
                <div className="card-header text-center">
                    <h5>{userData.first_name} {userData.last_name}</h5>
                </div>

                <div className="card-body text-center">


                        <p>Email: {userData.email}</p>
                        <img
                            src={userData.avatar}
                            alt={userData.id}
                        />

                </div>

            </div>
            
            
            
        </div>   





        {/* <h1>UserDetail </h1>
        <div>
            <h5>Nombre: {userData.first_name} </h5>
            <h5>Apellido: {userData.last_name} </h5>
            <p>Email: {userData.email}</p>
            <img
                src={userData.avatar}
                alt={userData.id}
            />
        </div> */}
    </div>
  )
}

export default UserPage
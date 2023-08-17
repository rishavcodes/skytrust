import { useState, useEffect } from "react";

const UserData = ({ users }) => {

    const [selectedUser, setSelectedUser] = useState();
    useEffect(() => {
      if(users && users?.length > 0){
        setSelectedUser(users[0])
      }
    }, [users])
    

    return (
        <>
            {
                selectedUser && <div className="flex justify-center items-center pb-10">
                <a href="#" className="flex justify-center items-center block max-w-xl gap-4 h-56 w-4/5 text-start items-center  border border-gray-200 rounded-lg shadow">
                <img className="rounded-full ml-3" src={selectedUser?.picture?.large} alt="not available" />
                <div>
                    <h5 className="mb-2 underline text-red-500 text-3xl font-bold">{selectedUser?.name?.title} {selectedUser?.name?.first} {selectedUser?.name?.last}</h5>
                    <p className="font-normal">{selectedUser?.location?.street?.number}, {selectedUser?.location?.street?.name}, {selectedUser?.location?.city}, {selectedUser?.location?.state}, <span className="font-bold">{selectedUser?.location?.country}</span>,  {selectedUser?.location?.postcode}</p>
                    <p className="font-normal">{selectedUser?.location?.timezone?.offset} {selectedUser?.location?.timezone?.description}</p>
                    <p className="font-normal">{selectedUser?.gender}</p>
                </div>
                </a>
                </div>
            }
        <div className="mx-5 flex justify-center items-center gap-5 flex-wrap">
            {
                users?.map((curUser, i) => {
                    const { gender, name, email  } = curUser;
                    const { first, title, last } = name;
                    {/* const {large} = picture; */}
                    return (
                            <a onClick={() => {setSelectedUser(curUser)}} key={i} href="#" className="block w-80 h-44 py-4 px-6  border border-gray-200 rounded-lg shadow">
                                <p className="font-normal text-grey-500">{gender}</p>
                                <h5 className="mb-2 text-black text-2xl font-bold">{title} {first} {last}</h5>
                                <p className="font-normal text-red-500">{email}</p>
                                {/* <img className="w-lg" src={large} alt="none"/> */}
                            </a>
                    )
                })
            }
            </div>

        </>
    )
}

export default UserData;
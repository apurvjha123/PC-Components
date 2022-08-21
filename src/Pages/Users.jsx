import React, { useEffect, useState } from "react";
import { userRequest } from "../reqMethod";
import Loader from '../Components/Loader'

const Users = () => {
  const [User, setUser] = useState([]);
  const [loader, setloader] = useState(true)

  useEffect(() => {
    const getUsers = async () => {
      const req = await userRequest.get("/user");
      setUser(req.data);
      req.data && setloader(false)

    };
    getUsers();
  }, []);

  return (
        <div className="flex flex-col">
          <div className="overflow-x-auto">
            <div className="align-middle inline-block min-w-full">
              <div className="shadow overflow-hidden">
                <table className="table-fixed min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-100">
                    <tr>
                      <th scope="col" className="p-4">
                        <div className="flex items-center">Email</div>
                      </th>
                      <th
                        scope="col"
                        className="p-4 text-left text-xs font-medium text-gray-500 uppercase"
                      >
                        Username
                      </th>
                      <th
                        scope="col"
                        className="p-4 text-left text-xs font-medium text-gray-500 uppercase"
                      >
                        ID
                      </th>
                      <th
                        scope="col"
                        className="p-4 text-left text-xs font-medium text-gray-500 uppercase"
                      >
                        Is Admin
                      </th>
                      <th scope="col" className="p-4"></th>
                    </tr>
                  </thead>
                  {!loader?
                  (<tbody className="bg-white divide-y divide-gray-200">
                    {User &&
                      User.map((users) => (
                        <>
                          <tr className="hover:bg-gray-100" key={users._id}>
                            <td className="p-4 flex whitespace-nowrap text-sm font-normal text-gray-500">
                              <img
                                className="h-10 w-10 rounded-full"
                                src={
                                  users.img ||
                                  "https://t3.ftcdn.net/jpg/01/81/76/56/240_F_181765661_yNJEm7i1k52QFwGyJxCD901bNu1298Fy.jpg"
                                }
                              />
                              <div className="text-base font-semibold text-gray-900">
                                {users.email}
                              </div>
                            </td>
                            <td className="p-4 whitespace-nowrap text-base font-medium text-gray-900">
                              {users.username}
                            </td>
                            <td className="p-4 whitespace-nowrap text-base font-medium text-gray-900">
                              {users._id}
                            </td>
                            <td className="p-4 whitespace-nowrap text-base font-medium text-gray-900">
                              {users.isAdmin ? (
                                <div>Admin</div>
                              ) : (
                                <div>User</div>
                              )}
                            </td>
                          </tr>
                        </>
                      ))}
                  </tbody>
                  ):(<Loader></Loader>)}
                </table>
              </div>
            </div>
          </div>
        </div>
      ) 
};

export default Users;

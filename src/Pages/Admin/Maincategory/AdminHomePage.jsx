import React from "react";
import Hero from "../../Components/Hero";
import AdminSidebar from "./AdminSidebar";

export default function AdminHomePage() {
  return (
    <>
      <Hero title="Admin" />

      <div className="container-fluid my-2">
        <div className="row">
          <div className="col-md-3">
            <AdminSidebar />
          </div>
          <div className="col-md-9">
            <h4 className="bg-dark text-center text-light p-3">Admin</h4>
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <th>Name</th>
                  <td>Harshit Sharma</td>
                </tr>
                <tr>
                  <th>Username</th>
                  <td>harshitndj15</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>harshitndj15@gmail.com</td>
                </tr>
                <tr>
                  <th>Phone</th>
                  <td>8423858661</td>
                </tr>
                <tr>
                  <th>Role</th>
                  <td>Admin</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

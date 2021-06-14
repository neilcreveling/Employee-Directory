import axios from "axios";

const employeeApi = {
  getEmployees: function() {
    return axios.get("https://randomuser.me/api/?results=30");
  },
};

export default employeeApi;
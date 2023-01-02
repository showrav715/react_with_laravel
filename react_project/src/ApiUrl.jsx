
class ApiUrl{

    static apiUrl = "http://reactwithvite.test/api";
    static loginUrl = this.apiUrl + "/login";
    static registerUrl = this.apiUrl + "/register";
    static logoutUrl = this.apiUrl + "/logout";
    static userUrl = this.apiUrl + "/user";
    static checkUser = (token) => this.apiUrl + "/check-user/" + token;

}
export default ApiUrl;
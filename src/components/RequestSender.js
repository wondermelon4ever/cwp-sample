import axios from 'axios';

var address = "http://localhost:9001";
let instance = null;

class RequestSender {
    constructor() {
        if(!instance) {
            instance = this;
        }

        this.sendGet = this.sendGet.bind(this);
        this.getProject = this.getProject.bind(this);
        this.getProjectWithPoMapping = this.getProjectWithPoMapping.bind(this);

        return this.instance;
    }

    sendGet(addr, callback) {
        axios.get(addr, {
            headers: {
                'Access-Control-Allow-Origin' : "*",
                'Accept': 'application/json'
            }
        }).then(response => {
            if(callback != undefined) callback(response.data);
        }); 
    }

    getProject(projectCode, callback) {
        var addr = `${address}/projects/${projectCode}`;
        this.sendGet(addr, callback);
    }

    getProjectWithPoMapping(projectCode, callback) {
        var addr = `${address}/projects/cwp-po-mapping/${projectCode}`;
        this.sendGet(addr, callback);
    }
}

export default RequestSender;
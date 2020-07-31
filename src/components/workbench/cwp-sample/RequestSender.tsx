import axios from 'axios';
import { useCallback } from 'react';

var address = "http://localhost:9001";
let instance:RequestSender;

interface Handler {
    handle(data: any): void;
}

interface handler {
    (data: any): void;
};

class RequestSender {
    constructor() {
        if(!instance) {
            instance = this;
        }

        this.sendGet = this.sendGet.bind(this);
        this.getProject = this.getProject.bind(this);
        this.getProjectWithPoMapping = this.getProjectWithPoMapping.bind(this);

        return instance;
    }

    sendGet(addr:string, handle: handler) {
        axios.get(addr, {
            headers: {
                'Access-Control-Allow-Origin' : "*",
                'Accept': 'application/json'
            }
        }).then(response => {
            if(handle != undefined) handle(response.data);
        }); 
    }

    getProject(projectCode: string, handle: handler) {
        var addr = `${address}/projects/${projectCode}`;
        this.sendGet(addr, handle);
    }

    getProjectWithPoMapping(projectCode: string, handle: handler) {
        var addr = `${address}/projects/cwp-po-mapping/${projectCode}`;
        this.sendGet(addr, handle);
    }
}

export default RequestSender;
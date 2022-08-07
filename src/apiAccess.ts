/* eslint-disable */
const k8s = await import('@kubernetes/client-node');

const kc = new k8s.KubeConfig();
kc.loadFromDefault();

export interface iApiAccess {
    getNamespace(namespace:String): Promise<any>;
}

export class ApiAccess implements iApiAccess 
{ 

    k8sApi:any;
    constructor() {
        this.k8sApi = kc.makeApiClient(k8s.CoreV1Api);
    }

    getNamespace(namespace:string):Promise<any> {
        console.log(this.k8sApi);
        return kc.makeApiClient(k8s.CoreV1Api).listNamespace();
    }

    getpods(namespace:string) {
        return this.k8sApi.api.v1.namespaces(namespace).pods();
    }
}
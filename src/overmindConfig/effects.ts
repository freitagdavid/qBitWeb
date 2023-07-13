import { MainData } from '../types/qbittorrent';
import axios from "axios";

const axiosClient = axios.create({
    baseURL: "http://localhost:8081/api/v2",
    withCredentials: true,
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
    },
});


type PostLogin = (username: string, password: string) => Promise<void>;

interface Version {
    data: string | null;
}

export interface Categories {
    [key: string]: {
        name: string;
        savePath: string;
    }
}

interface GetMainDataResponse {
    data: MainData;
}

export interface QbApi {
    getVersion: () => Promise<Version>;
    postLogin: PostLogin;
    getMainData: (rid: number) => Promise<GetMainDataResponse>;
    startTorrents: (hashes: string[]) => Promise<void>;
    pauseTorrents: (hashes: string[]) => Promise<void>;
    removeTorrents: (hashes: string[], deleteFiles: boolean) => Promise<void>;
}

export const qbApi: QbApi = {
    async getVersion() {
        return axiosClient.get("/app/version");
    },

    async postLogin(username, password) {
        console.log('postLogin: ',username, password);
        return axiosClient.post("/auth/login", { username: username, password: password });
        // return post("/auth/login", {username: username, password: password});
    },

    async getMainData(rid=0) {
        return axiosClient.get(`/sync/maindata?rid=${rid}`);
    },

    async pauseTorrents(hashes) {
        return axiosClient.post(`/torrents/pause`, {hashes: hashes});
    },

    async startTorrents(hashes) {
        return axiosClient.post(`/torrents/resume`, {hashes: hashes});
    },

    async removeTorrents(hashes, deleteFiles) {
        return axiosClient.post(`/torrents/delete`, {hashes: hashes, deleteFiles: deleteFiles});
    }
};

export interface Effects {
    qbApi: QbApi;
}
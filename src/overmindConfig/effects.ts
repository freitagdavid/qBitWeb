import { QBittorrent } from '@ctrl/qbittorrent';
import { MainData } from '../types/qbittorrent';
import { QbTorrent } from './../components/api/models/torrents';
import axios from "axios";

const axiosClient = axios.create({
    baseURL: "http://localhost:8081/api/v2",
    withCredentials: true,
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
    },
});

let qbittorrentClient: QBittorrent | null = null;

const getQbittorrentClient = (baseUrl: string, userName: string, password: string) => {
    return QBittorrent.connect(baseUrl, userName, password);
};


// const get = (url, payload={}) => axiosClient.get(url, payload)
// const post = (url, payload={}) => axiosClient.post(url, payload)

type PostLogin = (username: string, password: string) => Promise<void>;

interface Version {
    data: string | null;
}

interface Torrents {
    [key: string]: QbTorrent;
}

interface Trackers {
    [key: string]: string[];
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
    getMainData: (rid: string) => Promise<GetMainDataResponse>;
    startTorrent: (hash: string) => Promise<void>;
    pauseTorrent: (hash: string) => Promise<void>;
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

    async pauseTorrent(hash) {
        return axiosClient.post(`/torrents/pause`, {hashes: hash});
    },

    async startTorrent(hash) {
        return axiosClient.post(`/torrents/resume`, {hashes: hash});
    },
};

export interface Effects {
    qbApi: QbApi;
}
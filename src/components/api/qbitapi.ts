import axios, { Axios, AxiosInstance } from "axios";

class Qbittorrent {
    axiosClient: AxiosInstance;
    serverUrl: string;
    
    constructor(serverUrl: string) {
        this.serverUrl = serverUrl;
        this.axiosClient = axios.create({
            baseURL: this.serverUrl,
            withCredentials: true,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        });
    }
    

    async login(username: string, password: string) {
        return this.axiosClient.post("/auth/login", { username: username, password: password });
    }

    async logout() {
        return this.axiosClient.get("/auth/logout");
    }

    async getAppVersion() {
        return this.axiosClient.get("/app/version");
    }

    async getApiVersion() {
        return this.axiosClient.get("/app/webapiVersion");
    }

    async getBuildInfo() {
        return this.axiosClient.get("/app/buildInfo");
    }

    async shutdownApplication() {
        return this.axiosClient.get("/app/shutdown");
    }

    async getPreferences() {
        return this.axiosClient.get("/app/preferences");
    }

    async setPreferences(payload: any) {
        return this.axiosClient.post("/app/setPreferences", payload);
    }

    async getDefaultSavePath() {
        return this.axiosClient.get("/app/defaultSavePath");
    }

    async getLog() {
        return this.axiosClient.get("/log/main");
    }

    async getPeerLog() {
        return this.axiosClient.get("/log/peers");
    }

    async getMainData(rid=0) {
        return this.axiosClient.get(`/sync/maindata?rid=${rid}`);
    }

    async getTorrentPeers(hash: string) {
        return this.axiosClient.get(`/sync/torrentPeers?hash=${hash}`);
    }

    async getGlobalTransferInfo() {
        return this.axiosClient.get("/transfer/info");
    }

    async getSpeedLimitsMode() {
        return this.axiosClient.get("/transfer/speedLimitsMode");
    }

    async toggleSpeedLimitsMode() {
        return this.axiosClient.get("/transfer/toggleSpeedLimitsMode");
    }

    async getDownloadLimit() {
        return this.axiosClient.get("/transfer/downloadLimit");
    }

    async setDownloadLimit(limit: number) {
        return this.axiosClient.post(`/transfer/setDownloadLimit?limit=${limit}`);
    }

    async getUploadLimit() {
        return this.axiosClient.get("/transfer/uploadLimit");
    }

    async setUploadLimit(limit: number) {
        return this.axiosClient.post(`/transfer/setUploadLimit?limit=${limit}`);
    }

    async setBanPeers() {
        return this.axiosClient.get("/transfer/banPeers");
    }

    async getTorrents() {
        return this.axiosClient.get("/torrents/info");
    }

    async getTorrentProperties(hash: string) {
        return this.axiosClient.get(`/torrents/properties?hash=${hash}`);
    }

    async getTorrentTrackers(hash: string) {
        return this.axiosClient.get(`/torrents/trackers?hash=${hash}`);
    }

    async getTorrentWebSeeds(hash: string) {
        return this.axiosClient.get(`/torrents/webseeds?hash=${hash}`);
    }

    async getTorrentContents(hash: string) {
        return this.axiosClient.get(`/torrents/files?hash=${hash}`);
    }

    async getTorrentPiecesStates(hash: string) {
        return this.axiosClient.get(`/torrents/pieceStates?hash=${hash}`);
    }

    async getTorrentPiecesHashes(hash: string) {
        return this.axiosClient.get(`/torrents/pieceHashes?hash=${hash}`);
    }

    async pauseTorrents(hashes: string[]) {
        return this.axiosClient.get(`/torrents/pause?hashes=${hashes.join(",")}`);
    }

    async resumeTorrents(hashes: string[]) {
        return this.axiosClient.get(`/torrents/resume?hashes=${hashes.join(",")}`);
    }

    async deleteTorrents(hashes: string[], deleteFiles=false) {
        return this.axiosClient.get(`/torrents/delete?hashes=${hashes.join(",")}&deleteFiles=${deleteFiles}`);
    }

    async recheckTorrents(hashes: string[]) {
        return this.axiosClient.get(`/torrents/recheck?hashes=${hashes.join(",")}`);
    }

    async reannounceTorrents(hashes: string[]) {
        return this.axiosClient.get(`/torrents/reannounce?hashes=${hashes.join(",")}`);
    }

    async addNewTorrents(payload: any) {
        return this.axiosClient.post("/torrents/add", payload);
    }

    async setTorrentTrackers(hash: string, payload: any) {
        return this.axiosClient.post(`/torrents/addTrackers?hash=${hash}`, payload);
    }

    async editTracker(hash: string, origUrl: string, newUrl: string) {
        return this.axiosClient.get(`/torrents/editTracker?hash=${hash}&origUrl=${origUrl}&newUrl=${newUrl}`);
    }

    async removeTrackers(hash: string, urls: string[]) {
        return this.axiosClient.get(`/torrents/removeTrackers?hash=${hash}&urls=${urls.join(",")}`);
    }

    async addTorrentPeers(hash: string, peers: string[]) {
        return this.axiosClient.get(`/torrents/addPeers?hash=${hash}&peers=${peers.join(",")}`);
    }

    async increaseTorrentPriority(hashes: string[]) {
        return this.axiosClient.get(`/torrents/increasePrio?hashes=${hashes.join(",")}`);
    }

    async decreaseTorrentPriority(hashes: string[]) {
        return this.axiosClient.get(`/torrents/decreasePrio?hashes=${hashes.join(",")}`);
    }

    async maxTorrentPriority(hashes: string[]) {
        return this.axiosClient.get(`/torrents/topPrio?hashes=${hashes.join(",")}`);
    }

    async minTorrentPriority(hashes: string[]) {
        return this.axiosClient.get(`/torrents/bottomPrio?hashes=${hashes.join(",")}`);
    }

    async setFilePriority(hash: string, id: number, priority: number) {
        return this.axiosClient.get(`/torrents/filePrio?hash=${hash}&id=${id}&priority=${priority}`);
    }

    async getTorrentDownloadLimit(hash: string) {
        return this.axiosClient.get(`/torrents/downloadLimit?hash=${hash}`);
    }

    async setTorrentDownloadLimit(hash: string, limit: number) {
        return this.axiosClient.get(`/torrents/setDownloadLimit?hash=${hash}&limit=${limit}`);
    }

    async setTorrentShareLimit(hash: string, limit: number) {
        return this.axiosClient.get(`/torrents/setShareLimits?hash=${hash}&limit=${limit}`);
    }

    async getTorrentUploadLimit(hash: string) {
        return this.axiosClient.get(`/torrents/uploadLimit?hash=${hash}`);
    }

    async setTorrentUploadLimit(hash: string, limit: number) {
        return this.axiosClient.get(`/torrents/setUploadLimit?hash=${hash}&limit=${limit}`);
    }

    async setTorrentLocation(hashes: string[], location: string) {
        return this.axiosClient.get(`/torrents/setLocation?hashes=${hashes.join(",")}&location=${location}`);
    }

    async setTorrentName(hash: string, name: string) {
        return this.axiosClient.get(`/torrents/rename?hash=${hash}&name=${name}`);
    }

    async setTorrentCategory(hashes: string[], category: string) {
        return this.axiosClient.get(`/torrents/setCategory?hashes=${hashes.join(",")}&category=${category}`);
    }

    async getCategories() {
        return this.axiosClient.get("/torrents/categories");
    }

    async addCategory(category: string) {
        return this.axiosClient.get(`/torrents/createCategory?category=${category}`);
    }

    async editCategory(category: string, savePath: string) {
        return this.axiosClient.get(`/torrents/editCategory?category=${category}&savePath=${savePath}`);
    }

    async removeCategory(category: string) {
        return this.axiosClient.get(`/torrents/removeCategories?categories=${category}`);
    }

    async addTorrentTags(hashes: string[], tags: string[]) {
        return this.axiosClient.get(`/torrents/addTags?hashes=${hashes.join(",")}&tags=${tags.join(",")}`);
    }

    async removeTorrentTags(hashes: string[], tags: string[]) {
        return this.axiosClient.get(`/torrents/removeTags?hashes=${hashes.join(",")}&tags=${tags.join(",")}`);
    }

    async getTags() {
        return this.axiosClient.get("/torrents/tags");
    }

    async createTags(tags: string[]) {
        return this.axiosClient.get(`/torrents/createTags?tags=${tags.join(",")}`);
    }

    async deleteTags(tags: string[]) {
        return this.axiosClient.get(`/torrents/deleteTags?tags=${tags.join(",")}`);
    }

    async setAutomaticTorrentManagement(hashes: string[], enable: boolean) {
        return this.axiosClient.get(`/torrents/setAutoManagement?hashes=${hashes.join(",")}&enable=${enable}`);
    }

    async toggleSequentialDownload(hashes: string[]) {
        return this.axiosClient.get(`/torrents/toggleSequentialDownload?hashes=${hashes.join(",")}`);
    }

    async toggleFirstLastPiecePriority(hashes: string[]) {
        return this.axiosClient.get(`/torrents/toggleFirstLastPiecePrio?hashes=${hashes.join(",")}`);
    }

    async setForceStart(hashes: string[], value: boolean) {
        return this.axiosClient.get(`/torrents/setForceStart?hashes=${hashes.join(",")}&value=${value}`);
    }

    async setSuperSeeding(hashes: string[], value: boolean) {
        return this.axiosClient.get(`/torrents/setSuperSeeding?hashes=${hashes.join(",")}&value=${value}`);
    }

    async renameFile(hash: string, id: number, name: string) {
        return this.axiosClient.get(`/torrents/renameFile?hash=${hash}&id=${id}&name=${name}`);
    }

    async renameFolder(hash: string, id: number, name: string) {
        return this.axiosClient.get(`/torrents/renameFolder?hash=${hash}&id=${id}&name=${name}`);
    }

    async addRssFolder(name: string, path: string) {
        return this.axiosClient.get(`/rss/addFolder?name=${name}&path=${path}`);
    }

    async addRssFeed(url: string, path: string) {
        return this.axiosClient.get(`/rss/addFeed?url=${url}&path=${path}`);
    }

    async removeRssItem(id: number) {
        return this.axiosClient.get(`/rss/removeItem?id=${id}`);
    }

    async moveRssItem(id: number, destination: string) {
        return this.axiosClient.get(`/rss/moveItem?id=${id}&destination=${destination}`);
    }

    async getAllRssItems() {
        return this.axiosClient.get("/rss/items");
    }

    async setRssRead() {
        return this.axiosClient.post('/rss/markAsRead')
    }
}

export default Qbittorrent;
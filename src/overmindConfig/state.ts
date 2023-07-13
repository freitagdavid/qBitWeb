import { derived } from "overmind";
import { MainData } from "../types/qbittorrent";
import { Categories } from "./effects";
import { Torrent } from "../components/api/types";

interface Trackers {
    [key: string]: string[];
}

export interface State {
    authenticated: boolean;
    torrents: Torrent[];
    trackers: Trackers;
    categories: Categories | null;
    baseUrl: string;
    pollingTime: number;
    version: string | null;
    mainData: MainData | null;
    selectedTorrent: Torrent | null;
}

export const state: State = {
    mainData: null,
    authenticated: false,
    torrents: derived((state: State) => {
        if (state.mainData !== null) {
            return Object.keys(state.mainData?.torrents).map((key: string) => {
                return {...state.mainData?.torrents[key], hash: key}
            })
        }

        // Object.values(state.mainData?.torrents || {})
    }),
    trackers: {},
    categories: null,
    selectedTorrent: null,
    baseUrl: "http://localhost:8081/api/v2",
    pollingTime: 1000,
    version: null,
}
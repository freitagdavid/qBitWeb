export type TorrentHash = string;
import { Torrent } from '../types.ts'

export interface Category {
    name: string;
    fullCategory: string;
    children: Category[];
}

export const qbitTorrent = (data: Torrent): Torrent => {
    return {
        ...data,
        priority: data.priority === 0 ? null : data.priority
    }
};
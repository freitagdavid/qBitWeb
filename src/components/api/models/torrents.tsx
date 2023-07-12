export type TorrentHash = string;
import { Torrent as QbTorrent } from '../../../types/qbittorrent';

export interface Category {
    name: string;
    fullCategory: string;
    children: Category[];
}

export interface Torrent {
    addedOn: number;
    amountLeft: number;
    autoManagement?: boolean;
    availability: number;
    category: string;
    amountCompleted: number;
    dlSpeed: number;
    amountDownloaded: number;
    eta: number;
    hash: TorrentHash;
    magnetUri: string;
    name: string;
    seeders: number;
    leechers: number;
    peers?: number;
    size: number;
    ratio: number;
    savePath: string;
    progress: number;
    state: string;
    uploaded: number;
    upSpeed: number;
    priority: number | null;
    infoHashV1: string;
}

type TorrentState = 'error' | 'pausedUP' | 'pausedDL' | 'missingFiles' | 'queuedUP' | 'stalledUp' | 'checkingUp' | 'forceUp' | 'allocating' | 'downloading' | 'metaDL' | 'queuedDL' | 'stalledDL' | 'checkingDL' | 'forceDL' | 'checkingResumeData' | 'moving' | 'unknown';

const stateMap = {
    'error': "Error",
    'pausedUP': "Paused",
    'pausedDL': "Paused",
    'missingFiles': 'Missing Files',
    'queuedUP': 'Queued',
    'stalledUp': 'Seeding [Stalled]',
    'checkingUp': 'Checking',
    'forceUp': 'Seeding [F]',
    'allocating': 'Allocating',
    'downloading': 'Downloading',
    'metaDL': 'Downloading Metadata',
    'queuedDL': 'Queued',
    'stalledDL': 'Downloading [Stalled]',
    'checkingDL': 'Checking',
    'forceDL': 'Downloading [F]',
    'checkingResumeData': 'Checking Resume Data',
    'moving': 'Moving',
    'unknown': 'Unknown',
} as const;

const convertTorrentState = (state: TorrentState): string => {
    return stateMap[state] || state;
};

export const qbitTorrent = (data: QbTorrent): Torrent => {
    return {
        addedOn: data.added_on,
        amountLeft: data.amount_left,
        availability: data.availability,
        category: data.category,
        amountCompleted: data.completed,
        dlSpeed: data.dlspeed,
        amountDownloaded: data.downloaded,
        eta: data.eta,
        hash: data.hash,
        magnetUri: data.magnet_uri,
        name: data.name,
        seeders: data.num_seeds,
        leechers: data.num_leechs,
        size: data.size,
        ratio: data.ratio,
        savePath: data.save_path,
        progress: data.progress,
        state: convertTorrentState(data.state),
        uploaded: data.uploaded,
        upSpeed: data.upspeed,
        priority: data.priority === 0 ? null : data.priority,
        infoHashV1: data.infohash_v1,
    }
};
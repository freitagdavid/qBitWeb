export interface Torrent {
    added_on: number;
    amount_left: number;
    auto_tmm: boolean;
    availability: number;
    category: string;
    completed: number;
    completion_on: number;
    content_path: string;
    dl_limit: number;
    dlspeed: number;
    downloaded: number;
    downloaded_session: number;
    eta: number;
    f_l_piece_prio: boolean;
    force_start: boolean;
    hash: string;
    last_activity: number;
    magnet_uri: string;
    max_ratio: number;
    max_seeding_time: number;
    name: string;
    num_complete: number;
    num_incomplete: number;
    num_leechs: number;
    num_seeds: number;
    priority: number;
    progress: number;
    ratio: number;
    ratio_limit: number;
    save_path: string;
    seeding_time: number;
    seeding_time_limit: number;
    seen_complete: number;
    seq_dl: boolean;
    size: number;
    state: 'error'| 'pausedUP' | 'pausedDL' | 'queuedUP' | 'queuedDL' | 'uploading' | 'stalledUP' | 'checkingUP' | 'forcedDL' | 'allocating' | 'downloading' | 'stalledDL' | 'checkingDL' | 'metaDL' | 'queuedForChecking';
    super_seeding: boolean;
    tags: string;
    time_active: number;
    total_size: number;
    tracker: string;
    up_limit: number;
    uploaded: number;
    uploaded_session: number;
    upspeed: number;
}

export interface ServerState {
    alltime_dl: number;
    alltime_ul: number;
    average_time_queue: number;
    connection_status: string;
    dht_nodes: number;
    dl_info_data: number;
    dl_info_speed: number;
    dl_rate_limit: number;
    free_space_on_disk: number;
    global_ratio: number;
    queued_io_jobs: number;
    queueing: boolean;
    read_cache_hits: number;
    read_cache_overload: number;
    refresh_interval: number;
    total_buffers_size: number;
    total_peer_connections: number;
    total_queued_size: number;
    total_wasted_session: number;
    up_info_data: number;
    up_info_speed: number;
    up_rate_limit: number;
    use_alt_speed_limits: boolean;
    write_cache_overload: number;
}

export interface Categories {
    [key: string]: {
        name: string;
        savePath: string;
    }
}

export interface Trackers {
    [key: string]: string[];
};

export interface Torrents {
    [key: string]: Torrent;
}

export interface MainData {
    rid?: string;
    full_update: boolean;
    torrents: Torrents;
    torrents_removed: string[];
    categories: Categories;
    categories_removed: string[];
    tags: string[];
    tags_removed: string[];
    server_state: ServerState;
    trackers: Trackers;
}


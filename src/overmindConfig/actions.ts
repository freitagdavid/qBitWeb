import { State } from "./state";
import { Effects } from "./effects";
import { qbitTorrent } from "../components/api/models/torrents";

export const onInitializeOvermind = ({
  state,
  effects,
  actions,
}: {
  effects: Effects;
  state: State;
  actions: Actions;
}) => {
  effects.qbApi
    .getVersion()
    .then((response) => {
      state.version = response.data;
      if (state.version !== null) {
        state.authenticated = true;
      }
    })
    .catch((error) => {
      console.log(error);
    });

  const initData = async (): Promise<void> => {
    try {
      const res = await effects.qbApi.getMainData();
      const { torrents, trackers, categories } = res.data;
      state.mainData = res.data;
      state.trackers = trackers;
      state.categories = categories;
    } catch (error) {
      console.log(error);
    }
  };
  initData();

  setInterval(() => {
    async function update() {
      try {
        const res = await effects.qbApi.getMainData("0");
        state.mainData = res.data;
        // if (state.mainData) {
        //     state.mainData.rid = res.data.rid;
        //     state.mainData.server_state = res.data.server_state;
        //     if (res.data.torrents) {
        //         state.mainData.torrents = Object.keys(res.data.torrents).map((key) => {
        //             state.mainData.torrents[key] = {...state.mainData.torrents[key], ...res.data.torrents[key]};
        //         });
        //     }
        // }
        // console.log(res.data);
        // const {torrents, trackers, categories} = res.data;
        // state.mainData = res.data;
        // state.trackers = trackers;
        // state.categories = categories;
      } catch (error) {
        console.log(error);
      }
    }
    update();
  }, state.pollingTime);
};

// async () => {
//     await effects.qbApi.getMainData().then((response) => {
//         const {torrents, trackers, categories} = response.data;
//         state.torrents = Object.keys(torrents).map((key) => {
//             return qbitTorrent(torrents[key])
//         });

//         state.trackers = response.data.trackers;
//         state.categories = response.data.categories;
//     });
// }

export const updateMainData: Actions["updateMainData"] = async (
  { state, effects },
  rid,
) => {
  try {
    const res = await effects.qbApi.getMainData(rid);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};

export const startTorrent = async (
  { state, effects }: { state: State; effects: Effects },
  hash: string,
) => {
  await effects.qbApi.startTorrent(hash);
};

export const stopTorrent: Actions["stopTorrent"] = async (
  { state, effects },
  hash,
) => {
  await effects.qbApi.pauseTorrent(hash);
};

export const login = async (
  { state, effects }: { state: State; effects: Effects },
  { username, password }: { username: string; password: string },
) => {
  console.log("login: ", username, password);
  await effects.qbApi
    .postLogin(username, password)
    .then(() => (state.authenticated = true));
};

export interface Actions {
  login: ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => void;
  onInitializeOvermind: ({
    state,
    actions,
    effects,
  }: {
    state: State;
    actions: Actions;
    effects: Effects;
  }) => void;
  updateMainData: (
    { state, effects }: { state: State; effects: Effects },
    rid: string,
  ) => Promise<void>;
  stopTorrent: (
    { state, effects }: { state: State; effects: Effects },
    hash: string,
  ) => Promise<void>;
}

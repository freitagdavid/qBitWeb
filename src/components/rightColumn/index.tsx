import { useStyletron } from "baseui";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useActions, useAppState } from "../../overmindConfig";
import prettyBytes from "pretty-bytes";
import { useMemo, useRef, useState } from "react";
import { ProgressBar } from "primereact/progressbar";
import { Torrent } from "../api/models/torrents";
import { State } from "../../overmindConfig/state";
import { ContextMenu } from "primereact/contextmenu";
import { Actions } from "../../overmindConfig/actions";

const SizeColumnBody = (rowData: Torrent) => {
  const size = useMemo(() => prettyBytes(rowData.size), [rowData.size]);
  return size;
};

const ProgressColumnBody = (rowData: Torrent) => {
  const progress = useMemo(
    () => (rowData.progress * 100).toFixed(2),
    [rowData.progress],
  );
  return <ProgressBar value={progress} />;
};

const RightColumn = () => {
  const [css] = useStyletron();
  const { torrents } = useAppState<State>();
  const [selectedTorrent, setSelectedTorrent] = useState<Torrent | null>(null);
  const actions = useActions();
  const cm = useRef(null);

  const startTorrent = () => {
    console.log("start torrent", selectedTorrent);
    if (selectedTorrent) {
      actions.startTorrent(selectedTorrent.infohash_v1);
    }
  };

  const stopTorrent = () => {
    console.log("stop torrent", selectedTorrent);
    if (selectedTorrent) {
      actions.stopTorrent(selectedTorrent.infohash_v1);
    }
  };

  const onHide = () => {
    setSelectedTorrent(null);
  };

  const menuModel = [
    { label: "Start", icon: "pi pi-fw pi-play", command: () => startTorrent() },
    {
      label: "Force Start",
      icon: "pi pi-fw pi-forward",
      command: () => {},
    },
    { label: "Stop", icon: "pi pi-fw pi-stop", command: () => stopTorrent() },
    { label: "Remove", icon: "pi pi-fw pi-trash", command: () => {} },
    {
      label: "Remove and Delete",
      icon: "pi pi-fw pi-trash",
      command: () => {},
    },
    { label: "Recheck", icon: "pi pi-fw pi-refresh", command: () => {} },
    { label: "Reannounce", icon: "pi pi-fw pi-refresh", command: () => {} },
    {
      label: "Copy Magnet Link",
      icon: "pi pi-fw pi-copy",
      command: () => {},
    },
    {
      label: "Set Location",
      icon: "pi pi-fw pi-folder",
      command: () => {},
    },
    { label: "Rename", icon: "pi pi-fw pi-pencil", command: () => {} },
    {
      label: "Properties",
      icon: "pi pi-fw pi-info-circle",
      command: () => {},
    },
    {
      label: "Edit Trackers",
      icon: "pi pi-fw pi-pencil",
      command: () => {},
    },
    {
      label: "Torrent Options",
      icon: "pi pi-fw pi-cog",
      command: () => {},
    },
    {
      label: "Superseeding Mode",
      icon: "pi pi-fw pi-cog",
      command: () => {},
    },
    {
      label: "Force Recheck",
      icon: "pi pi-fw pi-refresh",
      command: () => {},
    },
    {
      label: "Export Torrent",
      icon: "pi pi-fw pi-external-link",
      command: () => {},
    },
    {
      label: "Copy",
      items: [
        {
          label: "Magnet Link",
          icon: "pi pi-fw pi-copy",
          command: () => {},
        },
        {
          label: "Name",
          icon: "pi pi-fw pi-copy",
          command: () => {},
        },
        {
          label: "Info Hash V1",
          icon: "pi pi-fw pi-copy",
          command: () => {},
        },
        {
          label: "Info Hash V2",
          icon: "pi pi-fw pi-copy",
          command: () => {},
        },
        {
          label: "Torrent Id",
          icon: "pi pi-fw pi-copy",
          command: () => {},
        },
      ],
    },
  ];

  return (
    <div
      className={css({
        gridColumn: "2 / 13",
        gridRow: "2 / 10",
      })}
    >
      <ContextMenu model={menuModel} ref={cm} onHide={() => onHide()} />
      <DataTable
        value={torrents}
        size="small"
        scrollable
        scrollHeight="flex"
        sortMode="multiple"
        removableSort
        resizableColumns
        reorderableColumns
        onContextMenu={(e) => cm.current?.show(e.originalEvent)}
        contextMenuSelection={selectedTorrent}
        onContextMenuSelectionChange={(e) => {
          console.log(e.value);
          setSelectedTorrent(e.value);
        }}
        // scrollHeight="400px"
        // style={{ width: "100%", height: "100%", overflow: "scroll" }}
      >
        <Column field="priority" header="#" sortable />
        <Column field="name" header="Name" sortable filter />
        <Column field="size" header="Size" body={SizeColumnBody} sortable />
        <Column
          field="progress"
          header="Progress"
          body={ProgressColumnBody}
          sortable
        />
        <Column field="state" header="Status" sortable />
        <Column field="seeders" header="Seeds" sortable />
      </DataTable>
    </div>
  );
};

export default RightColumn;

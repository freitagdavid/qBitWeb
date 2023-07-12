import { ContextMenu as ContextMenuPrime } from "primereact/contextmenu";

export const ContextMenu = (ref, onHide) => {

    const menuModel = [
        { label: "Start", icon: "pi pi-fw pi-play", command: () => { } },
        {
            label: "Force Start",
            icon: "pi pi-fw pi-forward",
            command: () => { },
        },
        { label: "Stop", icon: "pi pi-fw pi-stop", command: () => { } },
        { label: "Remove", icon: "pi pi-fw pi-trash", command: () => { } },
        {
            label: "Remove and Delete",
            icon: "pi pi-fw pi-trash",
            command: () => { },
        },
        { label: "Recheck", icon: "pi pi-fw pi-refresh", command: () => { } },
        { label: "Reannounce", icon: "pi pi-fw pi-refresh", command: () => { } },
        {
            label: "Copy Magnet Link",
            icon: "pi pi-fw pi-copy",
            command: () => { },
        },
        {
            label: "Set Location",
            icon: "pi pi-fw pi-folder",
            command: () => { },
        },
        { label: "Rename", icon: "pi pi-fw pi-pencil", command: () => { } },
        {
            label: "Properties",
            icon: "pi pi-fw pi-info-circle",
            command: () => { },
        },
        {
            label: "Edit Trackers",
            icon: "pi pi-fw pi-pencil",
            command: () => { },
        },
        {
            label: "Torrent Options",
            icon: "pi pi-fw pi-cog",
            command: () => { },
        },
        {
            label: "Superseeding Mode",
            icon: "pi pi-fw pi-cog",
            command: () => { },
        },
        {
            label: "Force Recheck",
            icon: "pi pi-fw pi-refresh",
            command: () => { },
        },
        {
            label: "Export Torrent",
            icon: "pi pi-fw pi-external-link",
            command: () => { },
        },
        {
            label: "Copy",
            items: [{
                label: "Magnet Link",
                icon: "pi pi-fw pi-copy",
                command: () => { },
            }, {
                label: "Name",
                icon: "pi pi-fw pi-copy",
                command: () => { },
            },
            {
                label: "Info Hash V1",
                icon: "pi pi-fw pi-copy",
                command: () => { },
            },
            {
                label: "Info Hash V2",
                icon: "pi pi-fw pi-copy",
                command: () => { },
            },
            {
                label: "Torrent Id",
                icon: "pi pi-fw pi-copy",
                command: () => { },
            }
            ],
        },
    ];

    return (
        <ContextMenuPrime model={menuModel} ref={ref} onHide={onHide} />
    )
}
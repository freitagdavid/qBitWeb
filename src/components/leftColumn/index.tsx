import { useEffect, useState } from "react";
import { TreeView, toggleIsExpanded } from "baseui/tree-view";
import type { TreeNodeData } from "baseui/tree-view";
import { useStyletron } from "baseui";
import { useAppState } from "../../overmindConfig";
import { State } from "../../overmindConfig/state";

const LeftColumn = () => {
  const [data, setData] = useState<TreeNodeData[]>([
    {
      id: 1,
      label: "Status",
      isExpanded: true,
      children: [
        {
          id: 2,
          label: "All",
        },
        {
          id: 3,
          label: "Downloading",
        },
        {
          id: 4,
          label: "Seeding",
        },
        {
          id: 5,
          label: "Completed",
        },
        {
          id: 6,
          label: "Resumed",
        },
        {
          id: 7,
          label: "Paused",
        },
        {
          id: 8,
          label: "Active",
        },
        {
          id: 9,
          label: "Inactive",
        },
        {
          id: 10,
          label: "Stalled",
        },
        {
          id: 11,
          label: "Stalled Uploading",
        },
        {
          id: 12,
          label: "Stalled Downloading",
        },
        {
          id: 13,
          label: "Checking",
        },
        {
          id: 14,
          label: "Moving",
        },
        {
          id: 15,
          label: "Errored",
        },
      ],
    },
    {
      id: 16,
      label: "Categories",
      children: [
        {
          id: 18,
          label: "All",
        },
      ],
    },
    {
      id: 17,
      label: "Tags",
    },
    {
      id: 19,
      label: "Trackers",
    },
  ]);

  const [css] = useStyletron();
  const { trackers } = useAppState<State>();

  useEffect(() => {
    if (!trackers) return;
    setData((prev) =>
      prev.map((node) => {
        if (node.label === "Trackers") {
          return {
            ...node,
            children: Object.keys(trackers).map((key) => {
              return {
                id: key,
                label: `${key} (${trackers[key]?.length})`,
              };
            }),
          };
        }
        return node;
      }),
    );
  }, [trackers]);

  return (
    <div
      className={css({
        gridRow: "2 / 13",
        gridColumn: "1 / 2",
        overflow: "scroll",
      })}
    >
      <TreeView
        data={data}
        onToggle={(node) => {
          setData((prev) => toggleIsExpanded(prev, node));
        }}
        overrides={{
          TreeLabel: {
            style: () => ({
              paddingLeft: "10px",
              whiteSpace: "nowrap",
            }),
          },
          TreeItem: {
            style: () => ({
              overflow: "hidden",
            }),
          },
        }}
      />
    </div>
  );
};

export default LeftColumn;

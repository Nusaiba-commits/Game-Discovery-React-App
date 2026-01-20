import { Button, Portal, Menu, MenuItem } from "@chakra-ui/react";

interface onSelectSortOrder {
  onSelect: (sortOrder: string) => void;
  sortLabel?: string;
}

const SortSelector = ({ onSelect, sortLabel }: onSelectSortOrder) => {
  const sortOrder = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-released", label: "Release Date" },
    { value: "-rating", label: "Average Rating" },
  ];

  const selectedSortLabel = sortOrder.find((o) => o.value === sortLabel);

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          Order By {selectedSortLabel?.label || "Relevance"}
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {sortOrder.map((o) => (
              <MenuItem
                onClick={() => {
                  onSelect(o.value);
                }}
                key={o.value}
                value={o.value}
              >
                {o.label}
              </MenuItem>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortSelector;

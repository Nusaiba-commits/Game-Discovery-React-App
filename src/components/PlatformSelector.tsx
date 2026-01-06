import usePlatform from '../hooks/usePlatforms';
import { Button, Menu, Portal } from '@chakra-ui/react'

const PlatformSelector = () => {
  const { data, error } = usePlatform();

  if (error) return null;
  
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          Platforms
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {data.map(p => <Menu.Item value={p.slug}> {p.name} </Menu.Item>)}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}

export default PlatformSelector
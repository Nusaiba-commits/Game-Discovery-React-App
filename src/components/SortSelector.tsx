import { Button, Portal, Menu, MenuItem, StatValueText } from '@chakra-ui/react'

const SortSelector = () => {
  return (
   <Menu.Root>
         <Menu.Trigger asChild>
           <Button variant="outline" size="sm">
             Sort Selector
           </Button>
         </Menu.Trigger>
         <Portal>
           <Menu.Positioner>
             <Menu.Content>
              <MenuItem value='1' >1</MenuItem>
              <MenuItem value='2'>2</MenuItem>
              <MenuItem value='3'>3</MenuItem>
              <MenuItem value='4'>4</MenuItem>
              <MenuItem value='5'>5</MenuItem>
              <MenuItem value='6'>6</MenuItem>
             </Menu.Content>
           </Menu.Positioner>
         </Portal>
       </Menu.Root>
  )
}

export default SortSelector
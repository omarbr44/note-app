# Sidebar File Structure Component Architecture

## Component Hierarchy Tree

```
SidebarComponent (Main Container)
├── Action Buttons (FileEdit, FolderInput)
└── SidebarFilesStrucureComponent (File Structure Root)
    └── SidebarSubFilesStrucureComponent (Recursive Component)
        ├── SidebarFolderComponent (if item.items.length > 0)
        │   ├── Arrow Icon (Expandable/Collapsible)
        │   ├── Folder Name
        │   └── SidebarSubFilesStrucureComponent (Recursive for children)
        └── SidebarFileComponent (if item.items.length === 0)
            └── File Name
```

## Data Structure Flow

```
files = [
  {
    label: 'File 1',
    items: [
      {
        label: 'File 11',
        items: [
          {
            label: 'File 111',
            items: [
              { label: 'File 1111', items: [] },
              { label: 'File 1112', items: [] },
              // ... more files
            ]
          }
        ]
      }
    ]
  },
  {
    label: 'File 2',
    items: [
      { label: 'File 21', items: [] }
    ]
  },
  {
    label: 'File 3',
    items: []
  }
]
```

## Component Responsibilities

### 1. SidebarComponent

- **Purpose**: Main sidebar container
- **Features**:
  - Action buttons (FileEdit, FolderInput icons)
  - Contains the file structure
- **Location**: Entry point for the entire sidebar

### 2. SidebarFilesStrucureComponent

- **Purpose**: Root component for file structure
- **Features**:
  - Manages the main `files` array
  - Renders each file/folder using SidebarSubFilesStrucureComponent
- **Data**: Contains the hierarchical file structure

### 3. SidebarSubFilesStrucureComponent

- **Purpose**: Recursive component that determines file vs folder
- **Logic**:
  - If `item.items.length > 0` → Render as SidebarFolderComponent
  - If `item.items.length === 0` → Render as SidebarFileComponent
- **Features**: Adds padding for indentation

### 4. SidebarFolderComponent

- **Purpose**: Displays expandable/collapsible folders
- **Features**:
  - Arrow icon that rotates when expanded
  - Click handler to toggle `isOpen` state
  - Smooth collapse/expand transition
  - Recursively renders children using SidebarSubFilesStrucureComponent

### 5. SidebarFileComponent

- **Purpose**: Displays individual files (leaf nodes)
- **Features**: Simple display of file name

## Visual Structure Example

```
📁 File 1                    [Arrow: ▶]
  📁 File 11                  [Arrow: ▶]
    📁 File 111               [Arrow: ▼]
      📄 File 1111
      📄 File 1112
      📄 File 1111
      📄 File 1112
      📄 File 1111
      📄 File 1112
      📄 File 1111
      📄 File 1112

📁 File 2                    [Arrow: ▶]
  📄 File 21

📄 File 3
```

## Key Features

1. **Recursive Structure**: SidebarSubFilesStrucureComponent calls itself for nested items
2. **Dynamic Rendering**: Automatically determines if an item is a file or folder based on `items.length`
3. **Expandable Folders**: Folders can be clicked to show/hide their contents
4. **Smooth Animations**: CSS transitions for expand/collapse animations
5. **Visual Hierarchy**: Indentation and arrows provide clear visual structure

## State Management

- **isOpen**: Local state in SidebarFolderComponent for each folder's expand/collapse state
- **files**: Reactive data in SidebarFilesStrucureComponent containing the entire file structure
- **No Global State**: Each component manages its own local state independently

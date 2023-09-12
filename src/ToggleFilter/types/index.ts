export interface Option {
    label: string;
    selected: boolean;
    color?: string;
  }
  
 export interface ToggleFilterProps {
    options: Option[];
    onChange: (option: string) => void;
  }
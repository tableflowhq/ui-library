export type PillProps = {
  label: string;
  className?: string;
  error?: boolean;
  variants?: string[];
  placeholder?: string;
  onChange?: (tokens: string[]) => void;
};

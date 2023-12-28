export interface ToggleProps {
    title?: string;
    baseState?: boolean;
    action: (enabled: boolean) => void;
    disabled?: boolean
}
/// <reference types="react" />
import './mylabel.css';
export interface Props {
    /**
     * Texto de la etiqueta
     */
    label?: string;
    /**
     * Tamaño de la etiqueta
     */
    size?: 'normal' | 'h1' | 'h2' | 'h3';
    allCaps?: boolean;
    color?: 'primary' | 'secondary' | 'tertiary';
    fontColor?: string;
}
export declare const MyLabel: ({ label, size, color, allCaps, fontColor, }: Props) => JSX.Element;

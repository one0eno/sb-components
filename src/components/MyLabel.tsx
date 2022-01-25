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

export const MyLabel = ({
  label = 'No label',
  size = 'normal',
  color = 'primary',
  allCaps = false,
  fontColor,
}: Props) => {
  return (
    <span className={` label ${size} text-${color}`} style={{ color: fontColor }}>
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};

export default MyLabel;

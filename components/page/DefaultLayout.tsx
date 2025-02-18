import * as React from 'react';

const styles = {
  body: "max-w-[80ch]",
  pixel: "h-[1px] w-[1px] absolute top-0 left-0"
};

interface DefaultLayoutProps {
  previewPixelSRC: string;
  children?: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ previewPixelSRC, children }) => {
  return (
    <div className={styles.body}>
      <img className={styles.pixel} src={previewPixelSRC} alt="" />
      {children}
    </div>
  );
};

export default DefaultLayout;
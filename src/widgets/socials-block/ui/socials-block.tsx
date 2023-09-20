import { FC } from 'react';
import { config } from './config';
import Link from 'next/link';

interface SocialsBlockProps {
  className?: string;
}
export const SocialsBlock: FC<SocialsBlockProps> = ({ className }) => (
  <div className={className ? `social social--${className}` : 'social'}>
    {config.map(({ icon, link }, idx) => (
      <Link href={link} className={icon + ' social__icon'} key={idx} />
    ))}
  </div>
);

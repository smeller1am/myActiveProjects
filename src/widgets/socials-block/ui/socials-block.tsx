import { FC } from 'react';
import { config } from './config';
import Link from 'next/link';

export const SocialsBlock: FC = () => (
  <div className="social">
    {config.map(({ icon, link }, idx) => (
      <Link href={link} className={icon + " social__icon"} key={idx} />
    ))}
  </div>
);

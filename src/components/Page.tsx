import { ReactNode } from 'react';
import { Helmet } from 'react-helmet';

export interface PageProps {
  title: string;
  description?: string;
  children: ReactNode;
}

function Page({ title, description = '', children }: PageProps) {
  return (
    <div>
      <Helmet>
        <title>{title} - Martin Johannes Rønnekjær Jensen</title>
        <meta name="description" content={description} />
      </Helmet>
      {children}
    </div>
  );
}

export default Page;

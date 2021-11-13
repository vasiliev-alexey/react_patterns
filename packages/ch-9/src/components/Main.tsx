import React, { PropsWithChildren } from 'react';
import ErrorBoundary from './ErrorBoundary';
import ErrorScreen from './ErrorScreen';

const SiteLayout: React.FC<PropsWithChildren<{ menu: React.ReactElement }>> = ({
  children,

  menu = (c: unknown): void => null,
}) => {
  return (
    <div className="site-container">
      <div>{menu}</div>
      <div>{children}</div>
    </div>
  );
};
const Menu = () => (
  <ErrorBoundary Fallback={ErrorScreen}>
    <p style={{ color: 'white' }}>TODO: Build Menu</p>
  </ErrorBoundary>
);
const Callout: React.FC = ({ children }) => (
  <ErrorBoundary Fallback={ErrorScreen}>
    <div className="callout">{children}</div>
  </ErrorBoundary>
);
export default function Main() {
  return (
    <SiteLayout menu={<Menu />}>
      <Callout>Welcome to the site</Callout>
      <ErrorBoundary Fallback={ErrorScreen}>
        <h1>TODO: Home Page</h1>
        <p>Complete the main contents for this home page</p>
      </ErrorBoundary>
    </SiteLayout>
  );
}

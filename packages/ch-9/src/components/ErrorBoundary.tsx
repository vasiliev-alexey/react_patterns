import React, { Component } from 'react';

interface ErrorBoundaryState {
  error: Error;
}
interface ErrorBoundaryProps {
  Fallback: React.FC<{ error: Error }>;
}

export default class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = { error: null };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { error };
  }

  render(): React.ReactNode {
    const { error } = this.state;
    const { children, Fallback } = this.props;
    if (error) return <Fallback error={error} />;
    return children;
  }
}

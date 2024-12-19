import { Component, ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

class ErrorBoundry extends Component<ErrorBoundaryProps,{ hasError: boolean }> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  reloadApp = () => {
    window.location.reload();
  };

  render() {
    const { hasError } = this.state;

    if (hasError) {
      return (
        <div
          style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <p className="text-2xl font-bold text-blue-500">
            Ops, You did something illegal
          </p>
          <button
            onClick={this.reloadApp}
            className="bg-blue-500 text-white font-semibold p-3 border-2 border-blue-500 px-8 mt-4 rounded-2xl hover:bg-transparent hover:text-blue-500">
            Try Again ?
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundry;

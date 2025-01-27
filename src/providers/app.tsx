import { ErrorBoundary } from 'react-error-boundary';
import '/src/providers/app.css'

const ErrorFallback = () => {
  return(
    <div>App could not be loaded. Refresh the page.</div>
  )
}

export const AppProvider = () => {

  return(
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <div>App loaded.</div>
      </ErrorBoundary>
    </>
  )
}

export default AppProvider

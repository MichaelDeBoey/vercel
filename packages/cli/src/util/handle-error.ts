import bytes from 'bytes';
import type { APIError } from './errors-ts';
import { getCommandName } from './pkg-name';
import output from '../output-manager';

export default function handleError(error: unknown) {
  // Coerce Strings to Error instances
  if (typeof error === 'string') {
    error = new Error(error);
  }

  const apiError = error as APIError;
  const { message, stack, status, code, sizeLimit } = apiError;

  output.debug(`handling error: ${stack}`);

  if (message === 'User force closed the prompt with 0 null') {
    return;
  }

  if (status === 403) {
    output.error(
      message ||
        `Authentication error. Run ${getCommandName('login')} to log-in again.`
    );
  } else if (status === 429) {
    // Rate limited: display the message from the server-side,
    // which contains more details
    output.error(message);
  } else if (code === 'size_limit_exceeded') {
    output.error(`File size limit exceeded (${bytes(sizeLimit)})`);
  } else if (message) {
    output.prettyError(apiError);
  } else if (status === 500) {
    output.error('Unexpected server error. Please retry.');
  } else if (code === 'USER_ABORT') {
    output.log('Canceled');
  } else {
    output.error(`Unexpected error. Please try again later. (${message})`);
  }
}

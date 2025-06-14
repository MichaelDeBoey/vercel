import type Client from '../../util/client';
import { printError } from '../../util/error';
import output from '../../output-manager';
import * as blob from '@vercel/blob';
import { parseArguments } from '../../util/get-args';
import { getFlagsSpecification } from '../../util/get-flags-specification';
import { copySubcommand } from './command';
import { getBlobRWToken } from '../../util/blob/token';
import { BlobCopyTelemetryClient } from '../../util/telemetry/commands/blob/copy';
import { getCommandName } from '../../util/pkg-name';

export default async function copy(
  client: Client,
  argv: string[]
): Promise<number> {
  const telemetryClient = new BlobCopyTelemetryClient({
    opts: {
      store: client.telemetryEventStore,
    },
  });

  const flagsSpecification = getFlagsSpecification(copySubcommand.options);

  let parsedArgs: ReturnType<typeof parseArguments<typeof flagsSpecification>>;
  try {
    parsedArgs = parseArguments(argv, flagsSpecification);
  } catch (err) {
    printError(err);
    return 1;
  }

  if (!parsedArgs.args.length) {
    printError(
      `Missing required arguments: ${getCommandName(
        'blob copy fromUrlOrPathname toPathname'
      )}`
    );
    return 1;
  }

  const {
    args: [fromUrl, toPathname],
    flags: {
      '--add-random-suffix': addRandomSuffix,
      '--content-type': contentType,
      '--cache-control-max-age': cacheControlMaxAge,
    },
  } = parsedArgs;

  telemetryClient.trackCliArgumentFromUrlOrPathname(fromUrl);
  telemetryClient.trackCliArgumentToPathname(toPathname);
  telemetryClient.trackCliFlagAddRandomSuffix(addRandomSuffix);
  telemetryClient.trackCliOptionContentType(contentType);
  telemetryClient.trackCliOptionCacheControlMaxAge(cacheControlMaxAge);

  const token = await getBlobRWToken(client);
  if (!token.success) {
    printError(token.error);
    return 1;
  }

  let result: blob.PutBlobResult;
  try {
    output.debug('Copying blob');

    output.spinner('Copying blob');

    result = await blob.copy(fromUrl, toPathname, {
      token: token.token,
      access: 'public',
      addRandomSuffix: addRandomSuffix ?? false,
      contentType,
      cacheControlMaxAge,
    });
  } catch (err) {
    printError(err);
    return 1;
  }

  output.stopSpinner();

  output.success(result.url);

  return 0;
}

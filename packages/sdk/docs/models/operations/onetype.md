# OneType

The type of environment variable

## Example Usage

```typescript
import { OneType } from "@vercel/sdk/models/operations/createprojectenv.js";

let value: OneType = "plain";
```

## Values

```typescript
"system" | "secret" | "encrypted" | "plain" | "sensitive"
```
import { z } from 'zod';

export const ResourceRefSchema = z.object({
  uid: z.string(),
  kind: z.string(),
  namespace: z.string(),
  name: z.string(),
  version: z.string(),
  group: z.string()
});

export const ApplicationSchema = z.object({
  metadata: z.object({
    name: z.string()
  }),
  spec: z.object({
    project: z.string(),
    source: z.object({
      repoURL: z.string(),
      path: z.string(),
      targetRevision: z.string()
    }),
    syncPolicy: z.object({
      syncOptions: z.array(z.string()),
      automated: z.object({
        prune: z.boolean(),
          selfHeal: z.boolean()
        })
        .optional(),
      retry: z
        .object({
          limit: z.number(),
          backoff: z.object({
          duration: z.string(),
          maxDuration: z.string(),
          factor: z.number()
        })
      })
    }),
    destination: z.object({
      server: z.string(),
      namespace: z.string(),
      name: z.string().optional()
    })
  })
});

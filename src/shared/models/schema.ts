import { z } from 'zod';

export const ApplicationNamespaceSchema = z
  .string()
  .describe(
    `The namespace of the application.
     Note that this may differ from the namespace of individual resources.
     Make sure to verify the application namespace in the Application resource — it is often argocd, but not always.`
  );

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
    name: z.string(),
    namespace: ApplicationNamespaceSchema
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
      }).optional(),
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
      server: z.string().optional(),
      namespace: z.string().optional(),
      name: z.string().optional()
    })
      .refine(
        data =>
          (!data.server && !!data.name) || (!!data.server && !data.name),
        {
          message: "Only one of server or name must be specified in destination"
        }
      )
      .describe(
        `The destination of the application.
         Only one of server or name must be specified.`
      )
  })
});
